$(document).ready(function() {
    // Handle filter button click
    $('#filter-btn').click(function() {
        // Get list of checked amenities
        var amenities = [];
        $('input[type="checkbox"]:checked').each(function() {
            amenities.push($(this).data('id'));
        });

        // Get list of checked states
        var states = [];
        $('input[type="checkbox"][data-type="state"]:checked').each(function() {
            states.push($(this).data('id'));
        });

        // Get list of checked cities
        var cities = [];
        $('input[type="checkbox"][data-type="city"]:checked').each(function() {
            cities.push($(this).data('id'));
        });

        // Send POST request to places_search with amenities, states, and cities list
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: amenities, states: states, cities: cities }),
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

