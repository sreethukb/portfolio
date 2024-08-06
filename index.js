document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".hidden");
  elements.forEach(function(element) {
      element.classList.add("slide-up");
      element.classList.remove("hidden");
  });
});
$(window).scroll(function() {
  if ($(window).scrollTop() >= 100) {
    $('.navbar').addClass('transparent');
    $('.navbar-collapse a').addClass('black-text');
  } else {
    $('.navbar').removeClass('transparent');
    $('.navbar-collapse a').removeClass('black-text')
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navFilter = document.querySelector('.nav-filter');
  const navLinks = navFilter.querySelectorAll('.nav-link');
  const cards = document.querySelectorAll('.row .col');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove the 'active' class from all nav links within nav-filter
      navLinks.forEach(nav => nav.classList.remove('active'));
      
      // Add the 'active' class to the clicked nav link
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');

      // Show or hide cards based on the selected category
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".fade-hidden");
  var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              entry.target.classList.add("fade-fadein");
              entry.target.classList.remove("fade-hidden");
          }
      });
  });

  elements.forEach(function(element) {
      observer.observe(element);
  });
});