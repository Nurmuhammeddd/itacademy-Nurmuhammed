const openBtn = document.getElementById('open_btn');
const modal = document.getElementById('modal_container');
const closeBtn = document.getElementById('close_btn');

openBtn.addEventListener('click', ()=>{
    modal.classList.add('active_modal')
    console.log(modal.classList)
});

closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('active_modal')
})