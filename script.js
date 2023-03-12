let count =0;

function increment(){
    if(count<1000){
        count++;
    }
    document.getElementById('val').innerText =count;
}
function decrement(){
    if(count>=1){
        count--;
    }
    document.getElementById('val').innerText =count;
}
function reset(){
   count=0;
   document.getElementById('val').innerText =count;
}


// console.log(count);