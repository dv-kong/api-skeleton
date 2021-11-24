import router from './router';
import BookController from './controller';
import Book from './model';

const models = {Book};
const controller = new BookController(models)
const routes = router(controller)

export default routes;
