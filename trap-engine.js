
function result(id,title,html){
 const e=document.getElementById(id); if(!e)return;
 e.innerHTML=`<h3>${title}</h3><div class="lesson">${html}</div>`;
 e.classList.add('show'); e.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function home(){location.href='index.html'}
function toggle(el){el.classList.toggle('on')}
