console.log("js in working");

var plusSession=document.getElementById("plusSession");
var minusSession=document.getElementById("minusSession");
var plusBreak=document.getElementById("plusBreak");
var minusBreak=document.getElementById("minusBreak");

var start=document.getElementById("start");
var pause=document.getElementById("pause");
var reset=document.getElementById("reset");
var Break=5;
var session=20;

var up=document.getElementById("up");
var SessionMin=document.getElementById("SessionMin");
var BreakMin=document.getElementById("BreakMin");
var timing=document.getElementById("timing");
var currMin=session;
var currSec="00";
var id;
start.addEventListener("click",function(){
    
    start.style.display="none";
    pause.style.display="block";
    if(session<10)
    timing.innerText="0"+session+" : "+currSec;
    else
    timing.innerText=session+" : "+currSec;
    var second=0;
    var ss=0;
    var mm=session;
    id=setInterval(function(){
        
        if(ss==0){
            mm--;
            
            if(mm<0 && ss==0){
                timing.innerText="00 : 00";
                setTimeout(function(){
                    clearInterval(id)
                },100)
                BreakWorking();
            }else{
            ss=59;
            if(mm<10 && mm>-1 ){
                if(ss>10){
                    timing.innerText="0"+mm+" : "+ss;
                }else
                timing.innerText="0"+mm+" : "+"0"+ss;

            }else{
                if(ss>10){
                    timing.innerText=mm+" : "+ss;
                }else
                timing.innerText=mm+" : "+"0"+ss;
            }
        }
            ss=60;
            ss--;
        }else{
            if(mm===0 && ss===0){
                setTimeout(function(){
                    timing.innerText="00 : 00";
                    clearInterval(id)
                },100)
                BreakWorking();
            }
            if(ss<10){
                if(mm<10){
                    timing.innerText="0"+mm+" : "+"0"+ss;
                }else{
                    timing.innerText=mm+" : "+"0"+ss;
                }
            }else{
                if(mm<10){
                    timing.innerText="0"+mm+" : "+ss;
                }else{
                    timing.innerText=mm+" : "+ss;
                }
            }
            ss--;
        }
        
    },1000);
    
})
var id1;
function BreakWorking(){
    ss=0;
    mm=Break;
    up.style.borderColor="orange";

    id1=setInterval(function(){
        if(ss==0){
            mm--;
            ss=59;
            if(mm<0){

                setTimeout(function(){
                    timing.innerText="00 : 00";
                    clearInterval(id1)
                },1000)
                
            }else{
            
            if(mm<10){
                if(ss>10){
                    timing.innerText="0"+mm+" : "+ss;
                }else
                timing.innerText="0"+mm+" : "+"0"+ss;

            }else{
                if(ss>10){
                    timing.innerText=mm+" : "+ss;
                }else
                timing.innerText=mm+" : "+"0"+ss;
            }
        }
            ss=60;
            ss--;
        }else{
            if(mm===0 && ss===0){
                setTimeout(function(){
                    timing.innerText="00 : 00";
                    clearInterval(id1)
                },100)
                
            }
            if(ss<10){
                if(mm<10){
                    timing.innerText="0"+mm+" : "+"0"+ss;
                }else{
                    timing.innerText=mm+" : "+"0"+ss;
                }
            }else{
                if(mm<10){
                    timing.innerText="0"+mm+" : "+ss;
                }else{
                    timing.innerText=mm+" : "+ss;
                }
            }
            ss--;

        }
    },1000);

}

reset.addEventListener("click",function(){
    console.log("rest event ")
    if(start.style.display==="none"){
        console.log("in rest start disply is none")
        session=20;
        SessionMin.innerText=session+" min";
        Break=5;
        BreakMin.innerText="0"+Break+" min";
        timing.innerText="00 : 00";
        start.style.display="block";
        pause.style.display="none";
        up.style.borderColor="skyblue"
        setTimeout(function(){
            clearInterval(id)
        },100)
        setTimeout(function(){
            clearInterval(id1)
        },100)

    }else{
        console.log("in rest start disply is block")
    }
})

plusSession.addEventListener("click",function(){
    console.log("plusSession event ")
    if(start.style.display==="block"){
        session++;
        console.log("plusSession "+session);
        if(session<10){
            SessionMin.innerText="0"+session+" min";
        }
        else
        SessionMin.innerText=session+" min";
    }
})

minusSession.addEventListener("click",function(){
    console.log("minusSession event ")
    if(start.style.display==="block"){
        if(session>0){
        session--;
        }
        console.log("minusSession "+session);
        if(session<10){
            SessionMin.innerText="0"+session+" min";
        }
        else
        SessionMin.innerText=session+" min";
    }
})

plusBreak.addEventListener("click",function(){
    console.log("plusBreak event ")
    if(start.style.display==="block"){
        Break++;
        console.log("plusBreak "+Break);
        if(Break<10){
            BreakMin.innerText="0"+Break+" min";
        }else
        BreakMin.innerText=Break+" min";
    }
})

minusBreak.addEventListener("click",function(){
    console.log("minusBreak event ")
    if(start.style.display==="block"){
        if(Break>0){
        Break--;
        }
        console.log("minusBreak "+Break);
        if(Break<10){
            BreakMin.innerText="0"+Break+" min";
        }else
        BreakMin.innerText=Break+" min";
    }
})

pause.addEventListener("click",function(){
    
    setTimeout(function(){
        clearInterval(id)},100);
    
        setTimeout(function(){
        clearInterval(id1)},100);
   
})
