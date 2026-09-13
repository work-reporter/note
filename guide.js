document.getElementById('font-toggle').addEventListener('click',function(){const large=document.body.classList.toggle('large');this.setAttribute('aria-pressed',String(large));this.textContent=large?'大字已开启':'切换大字';});
document.getElementById('print').addEventListener('click',()=>window.print());

