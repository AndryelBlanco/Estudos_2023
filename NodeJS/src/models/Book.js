import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {type: String},
    Title: {type: String, required: true},
    Author: {type: String, required: true},
    CreatedAt: {type: Date, required: true}
  }
);

//mongoose.model('Collection', schema)
const books = mongoose.model('books', bookSchema);

export default books;