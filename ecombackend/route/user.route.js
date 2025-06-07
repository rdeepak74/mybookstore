import express from "express";
import { google, login, signup } from "../controller/user.controller.js";
import passport from "passport";
import { envConfig } from "../utils/url.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:5173/",
//     failureRedirect: "http://localhost:5173/login",
//   }),
//   (req, res) => {
//     res
//       .redirect("http://localhost:5173/")
//       .json({ message: "User logged in successfully" });
//   }
// );
router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", async (err, user, info) => {
    if (err || !user) {
      return res.redirect(`${envConfig.FRONTEND_BASE_URL}/login"`);
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.redirect(`${envConfig.FRONTEND_BASE_URL}/login`);
      }

      // ✅ Optional: Generate token if you're using JWT
      // const token = generateToken(user);

      // ✅ Redirect to frontend with token or user ID in query string
      return res.redirect(
        `${envConfig.FRONTEND_BASE_URL}?user=${encodeURIComponent(
          JSON.stringify(user)
        )}`
      );

      // OR send token: return res.redirect(`http://localhost:5173?token=${token}`);
    });
  })(req, res, next);
});

export default router;
