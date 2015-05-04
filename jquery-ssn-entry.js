(function($){

  $.fn.ssnEntry = function(options){

    return this.each(function(){

      var $submissionInput = $(this);
      var $entryInput = $($submissionInput.data("ssn-entry-input"));

      var updater = {

        init: function(){

          this.hideValue();

          $entryInput.on('change', function(){
            updater.updateFromEntryInput();
          });

          $entryInput.on('focus', function(){
            updater.retrieveValue();
          });

          $entryInput.on('blur', function(){
            updater.hideValue();
          });

        },

        updateFromEntryInput: function(){
          var val = this.getOnlyNumbers( $entryInput.val() )
          var tooShort = val.length > 0 && val.length < 9;
          var tooLong = val.length > 9;
          var isOnlyLetters = $entryInput.val().length > 0 && val.length == 0;

          if( tooShort || tooLong || isOnlyLetters ){
            $submissionInput.val("");
            $entryInput.trigger("invalidSSN");
          } else {
            $submissionInput.val(val);
            $entryInput.trigger("validSSN");
          }
        },

        getOnlyNumbers: function(value){
          return value.replace(/\D+/g, '');
        },

        hideValue: function(){
          var val = $submissionInput.val();
          if (val.length > 0) {
            $entryInput.val(val.replace(/^\d{5}/, '*****'));
          }
        },

        retrieveValue: function(){
          var val = $submissionInput.val();
          if (val.length > 0) {
            var match = val.match(/(\d{3})(\d{2})(\d{4})/);
            $entryInput.val(match[1] + "-" + match[2] + "-" + match[3]);
          }
        }

      }

      updater.init();

    });
  };

}(jQuery));
