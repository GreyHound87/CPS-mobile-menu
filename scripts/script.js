const burgerButton = document.getElementById('burgerButton');

burgerButton.addEventListener('click', function() {
  if (burgerButton.classList.contains('active')) {
    burgerButton.classList.remove('active');
  } else {
    burgerButton.classList.add('active');
  }
});
