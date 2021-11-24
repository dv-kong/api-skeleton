import router from './router';
import RentController from './controller';
import Rent from './model';

const models = {Rent, 
};
const controller = new RentController(models)
const routes = router(controller)

export default routes;