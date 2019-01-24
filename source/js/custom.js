// Materialize
$(document).ready(function() {
	$('.sidenav').sidenav();
	$('.tooltipped').tooltip({
		delay: 50
	});
	$('.fixed-action-btn').floatingActionButton();
	$('#masonry-grid').masonry({
		// options
		itemSelector: '.col',
		columnWidth: '.col',
		stagger: 30
	});
})

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, {
		outDuration: 500
	});
});
