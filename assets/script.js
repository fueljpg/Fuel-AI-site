// Minimal mobile nav toggle
(function(){
  const btn = document.querySelector('.hamburger');
  const panel = document.querySelector('.mobile-nav');
  if(!btn || !panel) return;
  btn.addEventListener('click', ()=>{
    const open = panel.style.display === 'block';
    panel.style.display = open ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!open));
  });
})();
