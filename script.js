(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });

  const toast = document.querySelector('.toast');
  document.querySelectorAll('form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    toast.textContent = 'Thanks! We’ll be in touch soon.';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
    form.reset();
  }));

  if (window.gsap && window.ScrollTrigger && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-image', { y: 35, opacity: 0, duration: 1, ease: 'power3.out', delay: .15 });
    gsap.from('.hero-copy > *', { y: 22, opacity: 0, duration: .8, stagger: .12, delay: .45, ease: 'power2.out' });
    gsap.utils.toArray('.step').forEach((step, i) => {
      gsap.from(step.querySelector('.step-copy'), { x: -35, opacity: 0, duration: .8, ease: 'power2.out',
        scrollTrigger: { trigger: step, start: 'top 82%' } });
      gsap.from(step.querySelector('.step-visual'), { x: 35, opacity: 0, duration: .9, delay: .08, ease: 'power2.out',
        scrollTrigger: { trigger: step, start: 'top 82%' } });
    });
    gsap.from('.person', { y: 35, opacity: 0, duration: .7, stagger: .15, ease: 'power2.out',
      scrollTrigger: { trigger: '.team-grid', start: 'top 82%' } });
    gsap.from('.service-card', { y: 40, opacity: 0, duration: .8, stagger: .16, ease: 'power2.out',
      scrollTrigger: { trigger: '.service-grid', start: 'top 85%' } });
    gsap.from('.cta-banner', { y: 35, opacity: 0, duration: .8, ease: 'power2.out',
      scrollTrigger: { trigger: '.cta-banner', start: 'top 90%' } });
  }
})();
