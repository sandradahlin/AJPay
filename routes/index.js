const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const routes = [];

routes.push(register);
routes.push(login);
routes.push(logout);

const route = (app) => {
  routes.forEach((route) => route(app));
};

module.exports = route;
