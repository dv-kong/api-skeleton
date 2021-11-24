// import ApiError from "../../helpers/ApiError"
import express from "express";
import Book from './model';
class BookController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  
  getAllBooks = async (req, res, next) => {
    try {
      const books = await this.#models;
      await res.status(200).json(books);
    } catch (err) {
      console.log(err);
    }
  };

}
export default BookController;