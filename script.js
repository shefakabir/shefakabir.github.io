document.getElementById('toggle-button').addEventListener('click', function() {
  const socialLinks = document.querySelector('.social-links');
  const buttonIcon = document.querySelector('#toggle-button i');

  socialLinks.classList.toggle('visible');

  if (socialLinks.classList.contains('visible')) {
    buttonIcon.classList.remove('fa-plus'); // Remove plus icon
    buttonIcon.classList.add('fa-minus');  // Add minus icon
  } else {
    buttonIcon.classList.remove('fa-minus'); // Remove minus icon
    buttonIcon.classList.add('fa-plus');    // Add plus icon
  }
});