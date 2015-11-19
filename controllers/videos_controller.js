var models = require('../models/miModelo.js');

exports.index = function(req, res) {
  models.Videos.findAll().then(function(listado) {
    res.render('videos.ejs', { listado: listado});
  })
};


exports.fil1 = function(req, res) {
  models.Videos.findAll().then(function(listado) {
    res.render('videos.ejs', { listado: listado});
  })
};

exports.fil2 = function(req, res) {
  models.Videos.findAll().then(function(listado) {
    res.render('videos.ejs', { listado: listado});
  })
};