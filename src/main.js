export default function main() {
    $(document).ready(function() {
        $('nav').each(function() {
            var $this = $(this);
            var $target = $('#main');
            $this.pushpin({
                top: $target.offset().top,
                // bottom: $target.offset().top + $target.outerHeight() - $this.height()
            });
        });

        // Animations
        $.fn.extend({
            animateCss: function(animationName, cb) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    if (!cb)
                        $(this).removeClass('animated ' + animationName);
                    if (typeof cb === 'function')
                        cb();
                    }
                );
            }
        });

        var options = [{
                selector: '#projects',
                offset: 400,
                callback: function(el) {
                    // $(el).foreach(function(d){
                    //     $(d).animateCss('fadeInLeft', function() {
                    //         // $("#welcome h1:eq(1)").animateCss('fadeInRight', 1);
                    //     });
                    // })
                }
            }, {
                selector: '#image-test',
                offset: 500,
                callback: function(el) {
                    // Materialize.fadeInImage($(el));
                }
            }
        ];
        Materialize.scrollFire(options);
    });
}
