
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle active class
  });

  AOS.init();

  function toggleText() {
    const textElement = document.querySelector('.about-text');
    const buttonElement = document.querySelector('.read-more-btn');

    if (textElement.classList.contains('expanded')) {
        textElement.classList.remove('expanded');
        buttonElement.innerText = 'Read More';
    } else {
        textElement.classList.add('expanded');
        buttonElement.innerText = 'Read Less';
    }
}

var swiper = new Swiper('.swiper-container', {
  loop: true, // Enable infinite scrolling
  slidesPerView: 3, // Show 3 cards side by side on larger screens
  spaceBetween: 20, // Add space between slides
  breakpoints: {
      768: {
          slidesPerView: 1, // Stack cards vertically on smaller screens
          spaceBetween: 10,
      },
  },
});
