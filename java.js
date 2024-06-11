let milli=0;
let hour=0;
let sec=0;
let min=0;



let timer = false;

function start(){
    timer=true;
    myFun();
}

function myFun(){
    if(timer == true){
        milli++;
        if(milli==100){
            sec++;
            milli=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hour++;
            min=0;
        }

        let bmilli = milli
        let bhour = hour
        let bsec = sec
        let bmin = min
        if(milli<10){
            bmilli = "0" +milli;
        }
        if(sec<10){
            bsec = "0" + sec;
        }
        if(min<10){
            bmin = "0"+ min;
        }
        if(hour<10){
            bhour = "0" + hour
        }
        setTimeout("myFun()", 9);
        document.getElementById("milli").innerHTML=bmilli;
        document.getElementById("sec").innerHTML=bsec;
        document.getElementById("min").innerHTML=bmin;
        document.getElementById("hour").innerHTML=bhour;
        
    }
}

function reset(){
    location.reload()
}

function stop(){
    timer=false
}