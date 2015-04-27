var $ = require('jquery'),
    helper = require('./helper'),
    config = require('../../config');

var ui = {
  $waBtn: $('.wa-btn'),
  $fbBtn: $('.fb-button'),
  $twBtn: $('.tw-button'),
  $twCount: $('.tw-count'),
  $fbCount: $('.fb-count'),
  $fbFrame: $('.fb-iframe')
}

function init(uri) {
  var url = helper.isUndefined(uri) ? config.siteURL : uri;
  url = encodeURIComponent(url);

  whatsapp(url);
  facebook(url);
  twitter(url);

  getCounts();
}

function getCounts() {
  $.getJSON('http://mpst.achernar.uberspace.de/socialcount/' + config.socialID + '.json', function(data) {
    ui.$twCount.text(data.twitter);
    ui.$fbCount.text(data.facebook);
  });
}

function whatsapp(url) {
  var href = 'whatsapp://send?text=' + config.whatsappText;
  ui.$waBtn.attr('href', href);
}

function facebook(url) {
  var iframeSrc = '//www.facebook.com/plugins/like.php?href=' + url + '&width&layout=button&action=like&show_faces=false&share=false&height=80&locale=de_DE'
  ui.$fbFrame.attr('src', iframeSrc);

  var href = 'https://www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + encodeURIComponent(config.facebookText);
  ui.$fbBtn.attr('href', href);
}

function twitter(url) {
  var href = 'https://twitter.com/intent/tweet?source=' + url + '&text=' + encodeURIComponent(config.twitterText);
  ui.$twBtn.attr('href', href);
}

module.exports = {
  init : init
}