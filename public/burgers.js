$(function(){
    $('.add-burger').on('submit', function(event) {
        console.log('submit button clicked, inside burger.js');
       
        event.preventDefault();

        let newBurger = {
            burger_name: $('#bu').val().trim()
            //maybe need devoured?
        };

        $.ajax("/api/burgers", {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log('Created new burger');
                location.reload();
            }
        ); 
    });

//more code will go here
});