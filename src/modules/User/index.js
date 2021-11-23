import router from './router';
import UserController from './controller';
import users from './Users.json';
// import users from './Users.json';

/**
 * 
 */

const models = users; // TODO later
console.log(users);
const controller = new UserController(models)
const routes = router(controller)

export default routes;
