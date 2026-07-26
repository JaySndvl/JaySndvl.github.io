const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => bootstrap.Collapse.getInstance(document.querySelector('#navMenu'))?.hide());
});
