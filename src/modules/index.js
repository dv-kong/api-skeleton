import UserRouter from "./User/";
import BookRouter from "./Book/";
import RentRouter from "./Rent";
const routes = {
  // base route ex: http://localhost:3000/users/...
  "/books": BookRouter, // TODO: Order of table creation
  "/users": UserRouter,
  "/rents": RentRouter,
};
export default routes;
