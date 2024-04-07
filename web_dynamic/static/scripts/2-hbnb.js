$(document).ready(function() {
    // Request API status
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        // Check if status is "OK"
        if (data.status === "OK") {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });
});

