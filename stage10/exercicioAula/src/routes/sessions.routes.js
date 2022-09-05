const { Router } = require("express");

const SessionsContoller = require("../controllers/SessionsController");
const sessionsController = new SessionsContoller()

const sessionsRoutes = Router();
sessionsRoutes.post('/', sessionsController.create);

module.exports = sessionsRoutes;