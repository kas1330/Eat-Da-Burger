$(function(){
    $('.add-burger').on('click', function(event) {
        event.preventDefault();

        console.log('add burger button clicked');
        let newBurger = {
            burger_name: $('#burg').val().trim()

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

    $('.devour').on('click', function(event) {
        event.preventDefault();

        let devoured = 1;
        console.log('devour button clicked.');
        
        $.ajax("/api/devour", {
            type: 'PUT',
            data: devoured
        }).then(
            function(){
                console.log('burger was devoured');
                location.reload();
            }
        )

    })
//more code will go here
});