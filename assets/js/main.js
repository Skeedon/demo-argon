const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');
observer.unobserve(e.target)}}),{threshold:.08});

document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
document.getElementById('menu').addEventListener('click',()=>{const links=document.getElementById('navlinks');
const open=links.style.display==='flex';
links.style.display=open?'none':'flex';
links.style.position='absolute';
links.style.top='66px';
links.style.left='0';
links.style.right='0';
links.style.background='#10171b';
links.style.flexDirection='column';
links.style.padding='24px';
links.style.gap='18px'});

document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=850)document.getElementById('navlinks').style.display='none'}));

