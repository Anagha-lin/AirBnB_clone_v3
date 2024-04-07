$(document).ready(function() {
    var reviewsDisplayed = false;

    // Handle toggle reviews button click
    $('#toggle-reviews').click(function() {
        if (!reviewsDisplayed) {
            // Fetch, parse, and display reviews
            // Your code to fetch and display reviews here

            // Change text to "hide"
            $(this).text('hide');
            reviewsDisplayed = true;
        } else {
            // Remove all review elements from the DOM
            $('.reviews').empty();

            // Change text to "show"
            $(this).text('show');
            reviewsDisplayed = false;
        }
    });
});

