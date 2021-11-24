import { Router } from 'express';


export default (controller) => {
    
    const router = Router();
    
    router.route('/all').get(controller.getUsers);
    // router.route('/users').get(controller.getUsers());
    router.route('/add-users').post(controller.addUsers);
    // router.route('/sign-up').post(controller.createUser);

    // router.route('/signin').post(controller.signIn);
    // router.route('/login').post(controller.login);
    // router.route('/update').post(controller.updateUser);
    // router.route('/delete').post(controller.deleteUser);

    return router;
}


