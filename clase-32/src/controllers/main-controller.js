module.exports = {
  showLogin: (request, response) => {
    // Flash errors
    const errors = request.session.errors;
    const oldData = request.session.oldData;
    request.session.errors = null;
    request.session.oldData = null;
    console.log(request.session);
    response.render("login", {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
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
