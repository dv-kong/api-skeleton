import { Router } from "express";

export default (controller) => {
  const router = Router();

  router.route("/all").get(controller.getUsers);
  // router.route('/users').get(controller.getUsers());
  //   router.route("/add-users").post(controller.addUseZrs);
  router.route("/sign-up").post(controller.signUp);
  router.route("/login").post(controller.login);

  // router.route('/signin').post(controller.signIn);
  // router.route('/update').post(controller.updateUser);
  // router.route('/delete').post(controller.deleteUser);

  return router;
};
