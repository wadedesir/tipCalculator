// const User = require('./models/user')

module.exports = setupRoutes;

function setupRoutes(app) {

  // normal routes ===============================================================

  // show the home page (will also have our login links)
  app.get('/', function (req, res) {
    res.render('main.ejs');
  });

  app.get('/calculate', (req, res) =>{
    let tip = (req.query.cost * (req.query.service / 100)) / req.query.people
    res.json({tip: tip})
  })

}
