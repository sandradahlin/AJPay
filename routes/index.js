const register = require("./register");
const routes = [];

routes.push(register);

const route = (app) => {
  routes.forEach((route) => route(app));
};

module.exports = route;
