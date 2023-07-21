$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

function removeExtension() {
	var link = new URLSearchParams(window.location.href).toString();
	if (link.includes(".com")) {
		var newLink = link.split('.com')[1];
		if (link.includes(".html")) {
			var newNewLink = newLink.split('.html')[0];
			window.history.pushState(null, null, newNewLink.substring(3, newNewLink.length));
		}
	}
	else if (link.includes("repl.co")) {g
		var newLink = link.split('repl.co')[1];
		if (link.includes(".html")) {
			var newNewLink = newLink.split('.html')[0];
			window.history.pushState(null, null, newNewLink.substring(3, newNewLink.length));
		}
	}	
}
removeExtension();

items.forEach(item => item.addEventListener('click', toggleAccordion));