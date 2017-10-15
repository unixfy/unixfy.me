// Materialize 
$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.modal').modal();   
    $('.tooltipped').tooltip({delay: 50});
    
    $('#masonry-grid').masonry({
        // options
        itemSelector: '.col',
        columnWidth: '.col',
        stagger: 30
    });
})
 