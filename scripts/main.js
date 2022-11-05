//кнопочка для призыва котика
const butt=document.querySelector('#button');
const img=document.querySelector('#img');

butt.addEventListener("click", function() {
if (img.classList.toggle('content-hidden')){
    butt.textContent= 'push for a cat';
}
else {butt.textContent= 'push for not cat';}
});

//баян
const headers =document.querySelectorAll('[data-name="bayan"]')
headers.forEach(function(item){
    item.addEventListener("click",function(){
        this.nextElementSibling.classList.toggle('content-hidden');

    })
})