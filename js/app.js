$(document).ready(function(){
    $('#signInForm').submit(function(event){
        // Prevent the default form submission
        event.preventDefault();

        // Capture the data from the form
        var name = $('#Name').val();
        var email = $('#Email').val();
        var password = $('#Password').val();
        var rememberMe = $('#rememberMe').is(':checked');

        // Do something with the captured data
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Password: " + password);
        console.log("Remember Me: " + rememberMe);



        // If you want to send the data to a server, you can use AJAX


        
        // $.ajax({
        //     url: 'your-server-endpoint',
        //     type: 'POST',
        //     data: {
        //         name: name,
        //         email: email,
        //         password: password,
        //         rememberMe: rememberMe
        //     },
        //     success: function(response){
        //         // Handle the response from the server
        //         console.log(response);
        //     },
        //     error: function(error){
        //         // Handle errors here
        //         console.error(error);
        //     }
        // });
        //




    });
});
