// import ApiError from "../../helpers/ApiError"
import User from "./model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../../config/env";
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
    console.log(password);
    try {
      // TODO: Data validation
      // Password hash instructions with bcrypt standard
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Check if the email is already registered in the database.
      const user = await User.findOne({ where: { email: email } });

      if (user) {
        // if users is found, throw error
        //TODO: fix use of return?
        res.status(403).json({ message: "Email already exists!" });
      }
      // TODO: if user already exist, send/throw an error
      const newUser = await User.create({
        email,
        password: hashedPassword,
        first_name,
        last_name,
      });
      res.status(200).json({ message: "Successfully created an account." });
    } catch (err) {
      // TODO: ApiError
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
        return res.status(400).json({ message: "Password is not correct!" });
      }
      //gen jwt token

      user.access_token = jwt.sign(
        { id: user.id, email: user.email },
        env.jwt_secret,
        {
          expiresIn: "5m",
        }
      );

      // TODO REFRESH TOKEN
      // user.refresh_token = jwt.sign({ id: user.id }, env.jwt_secret, { expiresIn: '60d' });


      res.status(200).json({token: user.access_token});
    } catch (error) {
      return res.send(error.message); // TODO APIERROR (code + message)
    }
  };

  addUsers = async (req, res, next) => {
  };

  updateUser = async (req, res, next) => {};

  getUsers = async (req, res, next) => {
    try {
      console.log("test");
      const docs = await this.#models;
      await res.status(200).json(docs);
    } catch (err) {
      console.log(err);
    }
  };

  removeUser = async (req, res, next) => {};
}

export default UserController;
