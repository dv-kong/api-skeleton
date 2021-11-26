import jwt from "jsonwebtoken";
import config from "../config/env";
import User from "../modules/User/model";

const isAuth = async (req, res, next) => {
  try {
    let access_token = req.headers.authorization.split(" ")[1];
    const refresh_token = req.cookies['refresh_token']

    if (!refresh_token)
      return res.status(401).json("Session expired, please log in.");

    let user = await User.findOne({ where: { access_token, refresh_token } });
    // let user = await User.findOne({ where: { access_token } });

    if (!user) 
        return res.status(401).json("Session expired.");

    await jwt.verify(access_token, config.jwt_secret);

  } catch (error) {

        return res.status(401).json(error.message);
  }
};

const refreshAccess = async (req, res, next) => {
  try {
    console.log("hello");
    // refress token instructions
  } catch (err) {
    console.log(err.message);
  }
};
