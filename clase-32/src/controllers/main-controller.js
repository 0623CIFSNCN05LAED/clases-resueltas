module.exports = {
  showLogin: (request, response) => {
    response.render("login");
  },
  //post
  login: (request, response) => {
    const data = request.body;

    request.session.userData = data;

    response.redirect("/");
  },
  logout: (request, response) => {
    request.session.destroy();
    response.redirect("/login");
  },
  home: (request, response) => {
    const data = request.session.userData;
    response.render("index", {
      name: data.name,
      email: data.email,
      favoriteColor: data.color,
      birthDate: data.birthDate,
    });
  },
};
