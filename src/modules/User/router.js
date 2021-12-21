import { Router } from "express";
import {isAuth, refreshAccess, isAdmin} from '../../middlewares/auth'

export default (controller) => {
  const router = Router();

  router.route("/all").get(isAuth, isAdmin, controller.getUsers);
  // router.route('/users').get(controller.getUsers());
  router.route("/signup").post(controller.signUp);
  router.route("/login").post(controller.login);
  router.route('/delete').delete(
    // isAuth,
     controller.deleteUser);
  router.route('/update').put(controller.updateUser);

  // router.route('/signin').post(controller.signIn);

  return router;
};
