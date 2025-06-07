// import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./model/user.model.js";
import { envConfig } from "./utils/url.js";
import dotenv from "dotenv";
dotenv.config();

// Google Strategy
export default function configurePassport(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${envConfig.BACKEND_BASE_URL}/user/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if user already exists
          let user = await User.findOne({
            $or: [{ googleId: profile.id }, { email: profile.emails[0].value }],
          });

          // If user doesn't exist, create a new one
          if (!user) {
            user = await User.create({
              fullname: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id,
            });
          }

          // Return the user (existing or newly created)
          return done(null, user);
        } catch (error) {
          console.log("Google authentication error:", error);
          return done(error);
        }
      }
    )
  );

  // Serialize user for session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user from session
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}
