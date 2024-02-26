var askqn=prompt("Enter your Emergency_ID: ");
var k=localStorage.getItem('id');
console.log(k);

if(askqn!=k)
{
  window.close();
}
// if(askqn==NULL)
// {
//   window.close();
// }

var floors = document.querySelectorAll('.floor');
let typing=document.getElementById('text_name1');
typing.innerHTML=localStorage.getItem("textvalue");
setTimeout(() => {
  typing.innerText="Click KnowMore..";
  typing.style.width="15ch";
  
}, 4000);
setTimeout(() => {
  typing.style.borderRight="0px";
  typing.style.animation="none";
}, 5900);


var stage=document.querySelectorAll('.floor1');

function move(n){
  var lift=document.getElementById('lift1');
  var current_pos=0;
  if(current_pos>n)
  {
    let FLOOR=current_pos;
    while (FLOOR>n) {
      lift.style.transform=`translate(0,${FLOOR*100}px)`;
      FLOOR-=1;
    }
    
  }
  else if(current_pos<n)
  {
    let FLOOR=current_pos;
    while (FLOOR<n) {
      lift.style.transform=`translate(0,-${FLOOR*100}px)`;
      FLOOR+=1;
    }
    
  }
  
}
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


