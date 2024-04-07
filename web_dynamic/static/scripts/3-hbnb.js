$(document).ready(function() {
    // Request places data
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(data) {
            // Loop through the results and create article tags
            $.each(data, function(index, place) {
                var placeHTML = '<article>';
                placeHTML += '<h2>' + place.name + '</h2>';
                // Add other details as needed
                placeHTML += '</article>';
                $('.places').append(placeHTML);
            });
        }
    });
});

