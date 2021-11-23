// import ApiError from "../../helpers/ApiError"
import express from "express";
class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }
  /**
   * @login takes a request, a response and a next function
   * @param
   *
   */

  signUp = async (req, res, next) => {};
  // login = async (req, res, next) => {
  //   try {
  //     const { email, password } = req.body;

  //     if (false) throw new ApiError("error message", 400);

  //     res.send("login data");
  //   } catch (error) {
  //     res.send(error.message);
  //   }
  // };

  updateUser = async (req, res, next) => {};

  
  getUsers = async (req, res, next) => {
    try {
      console.log('test');
      const docs = await this.#models;
      await res.status(200).json(docs);
    } catch (err) {
      console.log(err);
    }
  };

  removeUser = async (req, res, next) => {};
}

export default UserController;