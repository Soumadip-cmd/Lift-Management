
let typing=document.getElementById('text_name1')

setTimeout(() => {
  typing.innerText="Check Details..";
  typing.style.width="12ch";
  
}, 4000);
setTimeout(() => {
  typing.style.borderRight="0px";
  typing.style.animation="none";
}, 5980);
const header = document.querySelector('.header.container');
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 500)
  {
      header.style.backgroundColor = "rgb(0 0 0 / 89%)" ;
  }
  else
  {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.678)" ;
  }
});

const links= document.querySelectorAll(".nav-link");
links.forEach((item)=>{
  item.addEventListener('click',()=>{
    let k=document.getElementById(item.getAttribute('data-link'));
    console.log(k);
  })
})
