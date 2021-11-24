import { Router } from 'express';


export default (controller) => {
    
    const router = Router();
    
    router.route('/rent').post(controller.rent);

    return router;
}


