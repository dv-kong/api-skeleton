// import ApiError from "../../helpers/ApiError"
import User from "./model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../../config/env";
import ApiError from "../../helpers/error";
class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }
  /**
   * @login takes a request, a response and a next function
   * @param
   */

  signUp = async (req, res, next) => {
    const { email, password, first_name, last_name } = req.body;
    try {
      // TODO: Data validation
      // Password hash instructions with bcrypt standard
      const salt = await bcrypt.genSalt(10); // param = saltRounds
      const hashedPassword = await bcrypt.hash(password, salt);
      // Check if the email is already registered in the database.
      const user = await User.findOne({
        attributes: ["email"],
        where: { email: email },
      });
      if (user) {
        // if users is found, throw error
        //TODO: fix use of return?

        throw new ApiError(403, "Email already exists!");
      }
      // TODO: if user already exist, send/throw an error
      await User.create({
        email,
        password: hashedPassword,
        first_name,
        last_name,
      });
      return res
        .status(200)
        .json({ message: "Successfully created an account." });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        attributes: ["email", "password", "id"],
        where: { email: email },
      });

      //TODO: filter data GET
      // Compares the password in the request (req) with the password stored in the database.
      const correct = await bcrypt.compare(password, user.password);
      if (!correct) {
        throw new ApiError(400, "Incorrect credentials.");
      }

      user.access_token = jwt.sign({ id: user.id }, env.jwt_secret, {
        expiresIn: "5m",
      });
      user.refresh_token = jwt.sign({ id: user.id }, env.jwt_secret, {
        expiresIn: "60d",
      });
      res.status(200).json({ token: user.access_token });
    } catch (error) {
      next(error);
    }
  };

  addUsers = async (req, res, next) => {};

  updateUser = async (req, res, next) => {
// const {}
console.log("TODO: Update user");

  };

  getUsers = async (req, res, next) => {
    try {
      const docs = await this.#models;
      await res.status(200).json(docs);
    } catch (err) {
      next(err);
    }
  };

  deleteUser = async (req, res, next) => {
    //TODO
const {id}=req.body
    try {
      
      const userDeleted = await User.destroy({
        where: { id: id },
      });
// console.log(userDeleted);
// if(!userDeleted) {
// }
return res.status(200).json({message: `Successfully deleted user with ID: ${id}}`})
    } catch (error) {
      next(error)
    }
  };
}

export default UserController;
