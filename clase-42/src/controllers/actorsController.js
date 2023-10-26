const actorService = require("../services/actor-service");

module.exports = {
  // async await
  list: async (req, res) => {
    const actors = await actorService.getAllActors();
    return res.render("actorsList", { actors });

    // actorService.getAllActors().then((actors) => {
    //   res.render("actorsList", { actors });
    // });
  },
  detail: (req, res) => {
    actorService.getActor(req.params.id).then((actor) => {
      res.render("actorsDetail", { actor });
    });
  },
};
