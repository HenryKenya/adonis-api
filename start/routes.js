"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
Route.group(() => {
  // sign up
  Route.post("auth/register", "UserController.register");

  // register
  Route.post("auth/login", "UserController.login");

  // projects
  Route.get("projects", "ProjectController.index").middleware("auth");
  Route.post("projects", "ProjectController.create").middleware("auth");
  Route.delete("projects/:id", "ProjectController.destroy").middleware("auth");
  Route.patch("projects/:id", "ProjectController.update").middleware("auth");

  // tasks
  Route.get("projects/:id/tasks", "TaskController.index").middleware("auth");
  Route.post("projects/:id/tasks", "TaskController.create").middleware("auth");
}).prefix("api");
