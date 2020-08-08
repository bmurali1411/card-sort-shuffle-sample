
import './style.css';

document.getElementById("shuffle").addEventListener("click", ()=>{
  shuffle()
});

document.getElementById("sort").addEventListener("click", ()=>{
  sort()
});

let colors = ['#000000','#2b8ead','#333333','#6f98a8','#ffffff','#bfbfbf','#efefef','#2f454e','#72c3dc']
let listNum = [1,2,3,4,5,6,7,8,9];
generateNumberCards()


function random(min, max) {    
   return min + Math.floor(max * Math.random());
}

function shuffle(){
  listNum = []
  while(listNum.length<9){
    var rand = random(1,9)
    if(listNum.indexOf(rand)== -1){
      listNum.push(rand)
    }
  }

  generateNumberCards()
  
}

function sort(){
  listNum = listNum.sort((a,b)=>{
    return a-b;
  })
  generateNumberCards();
}

function generateNumberCards(){
  let divCOntent = "";
  for(var i=0;i<listNum.length;i++) {
    divCOntent =  divCOntent + "<div style='background-color:"+colors[listNum[i]-1]+";border-left-color:"+colors[listNum[i]-1]+"'>"+listNum[i]+"</div>";
}
  
  document.getElementById('number_card_container').innerHTML = divCOntent;
}

