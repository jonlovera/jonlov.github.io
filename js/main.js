$(document).ready(function() {
    $('nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top,
            bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });

    // Animations
    $.fn.extend({
        animateCss: function(animationName, cb) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                if(!cb) $(this).removeClass('animated ' + animationName);
                if(typeof cb === 'function') cb();
            });
        }
    });

    $("#welcome h1:eq(0)").animateCss('fadeInLeft', function (){
        $("#welcome h1:eq(1)").animateCss('fadeInRight', 1);
    });

    var options = [
        {
            selector: '#staggered-test',
            offset: 50,
            callback: function(el) {
                Materialize.toast("This is our ScrollFire Demo!", 1500);
            }
        }, {
            selector: '#staggered-test',
            offset: 205,
            callback: function(el) {
                Materialize.toast("Please continue scrolling!", 1500);
            }
        }, {
            selector: '#staggered-test',
            offset: 400,
            callback: function(el) {
                Materialize.showStaggeredList($(el));
            }
        }, {
            selector: '#image-test',
            offset: 500,
            callback: function(el) {
                Materialize.fadeInImage($(el));
            }
        }
    ];
    Materialize.scrollFire(options);
});
