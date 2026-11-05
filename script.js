document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded',()=>{
    const b=document.querySelector('.burger'),m=document.querySelector('.menu');
    const close=()=>{b.classList.remove('active');m.classList.remove('open');document.body.style.overflow=''};
    b&&b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.classList.toggle('active',o);document.body.style.overflow=o?'hidden':''});
    document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>e.key==='Escape'&&close());
    window.initReveal=()=>{const els=document.querySelectorAll('.rv:not(.visible)');
        if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('visible'));return}
        const o=new IntersectionObserver((en,ob)=>en.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');ob.unobserve(x.target)}}),{threshold:.1});els.forEach(e=>o.observe(e))};
        initReveal();
        document.querySelectorAll('img[data-hide]').forEach(i=>i.addEventListener('error',()=>i.style.display='none'));
});
