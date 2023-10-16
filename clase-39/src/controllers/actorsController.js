const actorService = require("../services/actor-service");

module.exports = {
  list: (req, res) => {
    actorService.getAllActors().then((actors) => {
      res.render("actorsList", { actors });
    });
  },
  detail: (req, res) => {
    actorService.getActor(req.params.id).then((actor) => {
      res.render("actorsDetail", { actor });
    });
  },
};
