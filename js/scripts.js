/**
 * 
 */
;(function ($, Drupal, drupalSettings) {

    "use strict";
  
    Drupal.behaviors.powerplayJS = {
      attach: function (context, settings) {
        $(window, context).once('powerplayJS').each(function () {  
  
            $('#open-contact-form').on('click', function(event) {
                event.preventDefault();
                $('#contact-form').slideToggle("slow", function() {
                    // Animation complete.
                  });
            });                
        });
      },
    };
  })(jQuery, Drupal, drupalSettings);