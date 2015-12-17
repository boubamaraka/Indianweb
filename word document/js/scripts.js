// This next section sets up the fading images for the Sponsors section on the sidebar. 
// SPEED: In milliseconds - how long the transition should take.
// TYPE: Type of slideshow: 'sequence', 'random' or 'random_start'
// CONTAINERHEIGHT: The height of the div that is calling the innerfade method.


$(function() {
    $('div#featured').innerfade({
        speed: 1000,
        timeout: 5000,
        type: 'random',
        containerheight: '400px'
    });

});