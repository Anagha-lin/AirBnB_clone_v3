$(document).ready(function() {
    // Handle filter button click
    $('#filter-btn').click(function() {
        // Get list of checked amenities
        var amenities = [];
        $('input[type="checkbox"]:checked').each(function() {
            amenities.push($(this).data('id'));
        });

        // Send POST request to places_search with amenities list
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: amenities }),
            success: function(data) {
                // Clear existing places
                $('.places').empty();

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
});

