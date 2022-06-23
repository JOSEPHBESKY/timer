var minute1=document.getElementById('mini1');
var minute2=document.getElementById('mini2');
var second1=document.getElementById('t1');
var second2=document.getElementById('t2');
var start=document.getElementById('start')
var swap=document.getElementById('swap');
var swap1=document.getElementById('swap1');
var reset=document.getElementById('reset');
var inputbox=document.getElementById('btn1')
inputbox.addEventListener('mouseout',show)
function show() {
    inputvalue=inputbox.value
    console.log(typeof inputvalue);
var startminute=parseInt(inputvalue);
let time=startminute*60;
 let time1=startminute*60;
 start.addEventListener('click',function timerstart () {
     clear=setInterval(timer,1000)
     start.setAttribute('disabled','true')
})
swap1.addEventListener('click',function timerstart () {
    
    clearInterval(swap)
     clear=setInterval(timer,1000)
})
swap.addEventListener('click',function timerstart1 () {
    clearInterval(clear)
    swap=setInterval(timer1,1000)
})
reset.addEventListener('click',function resets() {
    clearInterval(clear)
    clearInterval(swap)
    var minutes=00
    var seconds=00
    minute1.innerHTML=minutes
    minute2.innerHTML=minutes
    second1.innerHTML=seconds
     second2.innerHTML=seconds
        let start=document.getElementById('start')
    start.setAttribute('disabled','false')
})
function timer(){
    var minutes=Math.floor(time/60);
    var seconds=time%60
     minute2.innerHTML=minutes
    if (minutes<5) {
        minutes="0"+minutes
    }
    if (minutes==00 && seconds==00) {
        
        clearInterval(clear)
        time=stop
    }
    second2.innerHTML=seconds
    if (seconds<10) {
        seconds="0"+seconds
    }
    time--
    
}
function timer1(){
    var minutes1=Math.floor(time1/60);
    var seconds2=time1%60
    minute1.innerHTML=minutes1
    if (minutes1<5) {
        minutes1="0"+minutes1
    }
    if (minutes1==00 && seconds2==00) {
        clearInterval(swap)
        time=stop
    }
    second1.innerHTML=seconds2
    if (seconds2<10) {
        seconds2="0"+seconds2
    }
    time1--
}

}