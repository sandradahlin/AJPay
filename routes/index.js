const register = require("./register");
const login = require("./login");
const routes = [];

routes.push(register);
routes.push(login);

const route = (app) => {
  routes.forEach((route) => route(app));
};

module.exports = route;
