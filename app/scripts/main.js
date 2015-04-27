var social = require('./utils/social');
var $ = require('./vendor/newsquiz');
var Tabletop = require('./vendor/tabletop');

social.init();

var quiz = $('#quiz_container').quiz('1iLmCg2h31VqLrXliP61LUvRtD7U-UPoAPihc_Pta58E');


function deselect(e) {
    $('.pop').slideFadeToggle(function() {
        e.removeClass('selected');
    });
}

$(function() {
    $('#contact').on('click', function() {
        if ($(this).hasClass('selected')) {
            deselect($(this));
        } else {
            $(this).addClass('selected');
            $('.pop').slideFadeToggle();
        }
        return false;
    });

    $('.close').on('click', function() {
        deselect($('#contact'));
        return false;
    });
});

$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({
        opacity: 'toggle',
        height: 'toggle'
    }, 'fast', easing, callback);
};



function deselectb(e) {
    $('.popb').slideFadeToggle(function() {
        e.removeClass('selectedb');
    });
}


$(function() {
    $('#contactb').on('click', function() {
        if ($(this).hasClass('selectedb')) {
            deselectb($(this));
        } else {
            $(this).addClass('selectedb');
            $('.popb').slideFadeToggle();
        }
        return false;
    });

    $('.closeb').on('click', function() {
        deselectb($('#contactb'));
        return false;
    });
});

$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({
        opacity: 'toggle',
        height: 'toggle'
    }, 'fast', easing, callback);
};



$(document).on('click', '.info-btn', function() {
    var infobox = $(this).attr('data-target'),
        newTarget = $('#' + infobox);



    $('.infobox').hide();

    newTarget.fadeIn();


    return false;


})

$('.close').on('click', function() {
    $('.infobox').hide();

});

