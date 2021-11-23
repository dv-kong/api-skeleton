import { Router } from 'express';


export default (controller) => {
    
    const router = Router();
    
    router.route('/users').get(controller.getUsers);
    // router.route('/users').get(controller.getUsers());
    // router.route('/users').get(controller.getUsers);

    // router.route('/signin').post(controller.signin);
    // router.route('/login').post(controller.login);
    // router.route('/update').post(controller.updateUser);
    // router.route('/delete').post(controller.deleteUser);

    return router;
}


