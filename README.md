# jquery-ssn-entry

This plugin provides a user-friendly social security number input that hides part of the number upon blur.

## Dependencies

- jQuery

## Setup

Add field for social security number entry...

    <input id="ssn-entry" />

Add an input which will hold the SSN value for submission with a data attribute pointing to the SSN entry input...

    <input class="ssn" value="123456789" data-ssn-entry-input="#ssn-entry" />

Call the `ssnEntry` method on the input for submission...

    $(".ssn").ssnEntry();

In practice, you'll likely want to make the input for submission hidden. The SSN entry input will be automatically filled in on page load based on the value of the SSN for submission input. Thus, if you have a saved value, your entry form will be automatically setup.

## Callbacks

### invalidSSN

Upon blur away from the entry field, an `invalidSSN` event will be triggered on that entry input if the number is invalid.

    $("#ssn-entry").on('invalidSSN', function(){
      alert("SSN is invalid!");
    });

### validSSN

Upon blur away from the entry field, a `validSSN` event will be triggered on that entry input if the number is valid.

    $("#ssn-entry").on('validSSN', function(){
      alert("SSN looks good.");
    });
