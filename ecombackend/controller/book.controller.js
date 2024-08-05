import Book from '../model/book.model.js'

export const getBook = async (req, res) => {
  try {
    const book = await Book.find()
    res.status(200).json(book)
  } catch (error) {
    console.log('Error in getBook func', error)
    res.status(500).json({ message: 'Error in fetch' })
  }
}
