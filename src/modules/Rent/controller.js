// import ApiError from "../../helpers/ApiError"
import express from "express";
import Rent from './model';

class RentController {
  #models;
  constructor(models) {
    this.#models = models;
  }


  rent = async (req, res, next) => {
    try {
    //   const books = await this.#models;
      await res.status(200).json({message:"test"});
    } catch (err) {
      console.log(err);
    }
  };


}

export default RentController;