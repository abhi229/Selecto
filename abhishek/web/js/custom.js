require([
    'jquery',
    'mage/validation'
], function($){

    var newsletterForm = $('#newsletter-validate-detail');
    var ignore = null;


    $('button.subscribe').click( function() {
        if(newsletterForm.validation('isValid') == true){
            alert('This is just a test');
            return false;
        }
        else{
            setTimeout(function(){ 
                $('button.subscribe').removeAttr("disabled");
            }, 1300);
        }
    });

    
});