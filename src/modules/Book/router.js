import { Router } from 'express';


export default (controller) => {
    
    const router = Router();
    
    router.route('/').get(controller.getAllBooks);
    // router.route('/add-users').post(controller.addUsers);

    return router;
}


