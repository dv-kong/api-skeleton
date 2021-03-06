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

      const user = await User.findOne({
        attributes: ["email"],
        where: { email: email },
      });

       // TODO: if user already exist, send/throw an error
      // Check if the email is already registered in the database.
      if (user) {
        // if users is found, throw error
        //TODO: fix use of return?

        throw new ApiError(403, "Email already exists!");
      }

      // TODO: Data validation
      // Password hash instructions with bcrypt standard
      const salt = await bcrypt.genSalt(10); // param = saltRounds
      const hashedPassword = await bcrypt.hash(password, salt);
     
      await User.create({
        email,
        password: hashedPassword,
        first_name,
        last_name,
        role: "user"
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
        attributes: ["email", "password", "id", "role"],
        where: { email: email },
      });

      //TODO: filter data GET
      // Compares the password in the request (req) with the password stored in the database.
      const correct = await bcrypt.compare(password, user.password);
      if (!correct) {
        throw new ApiError(400, "Incorrect credentials.");
      }

      /**
       * @object "user" contains User datas  
       * @property access_token contains jwt token 
       * @property refresh_token define time to refresh an access_token
       */
      // Store the tokens in the user object

      user.access_token = jwt.sign({ id: user.id, role: user.role }, env.jwt_secret, {
        expiresIn: "5m", // TODO: change to 15m
      });
      user.refresh_token = jwt.sign({ id: user.id }, env.jwt_secret, {
        expiresIn: "30d",
      });
      // Save the user properties to the database
      await user.save();

      // Store refresh token and his properties in cookie with "refresh_token" key
      // The HttpOnly flag is an additional flag included in a Set-Cookie HTTP response header. It is used to prevent a Cross-Site Scripting exploit from gaining access to the session cookie and hijacking the victim's session.
      res.cookie('refresh_token', user.refresh_token, { expiresIn: '30d', httpOnly: true });
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
      await res.status(200).json({message: "GET ALL USERS FROM DB"});
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
