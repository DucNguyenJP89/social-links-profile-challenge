function setActiveLink(e) {
  e.preventDefault(); // Prevent the default link behavior
  const links = document.querySelectorAll('.profile-links a.links-item');
  links.forEach(link => {
    link.classList.remove('active'); // Remove 'active' class from all links
  });
  e.target.classList.add('active');
}