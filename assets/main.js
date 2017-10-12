function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {	
	var timer;

	const demo = document.getElementById('demo');
	const cursor = document.getElementById('cursor');
	const arrow = document.getElementById('arrow');
	const menubarIcon = document.getElementById('menubar-icon');
	const dropdown = document.getElementById('dropdown');

	demo.addEventListener('mouseenter', function() {
		cursor.style.transform = 'translate(245px, -115px)';

		arrow.style.opacity = 0;
	
		timer = setTimeout(function(){
			icon.style.opacity = 1;

			dropdown.style.opacity = 1;
			dropdown.style.transform = 'translateY(5px)'
		}, 1250);
	});

	demo.addEventListener('mouseleave', function() {
		clearTimeout(timer);

		cursor.style = null;
		menubarIcon.style.opacity = 0;
		arrow.style = null;
		dropdown.style = null;
	});
});