function creatingClock(){
    let date= new Date();
let hour = date.getHours();
let mints = date.getMinutes();
let sec= date.getSeconds();
 document.querySelector('#hours').innerHTML=`${hour}:`
document.querySelector('#mints').innerHTML=`${mints}:`
 document.querySelector('#secs').innerHTML=`${sec}`
}

setInterval(() => {
    creatingClock()
}, 1000);