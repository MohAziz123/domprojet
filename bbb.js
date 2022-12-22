
var btnTrash = document.querySelectorAll('fa-trash')
for (let i = 0; i < btnTrash.length; i++) {
   btnTrash.addEventListener('click','function'(){
      btnTrash[i].parentElement.remove()
   })
}




var btnHeart = document.querySelectorAll('fa-heart')
for (let i = 0; i < btnHeart.length; i++) {
   btnHeart.addEventListener('click','function'(){
      btnHeart[i].classList.toggle('mamino')


   })
   
}
