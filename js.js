
//Gloal variables
var min=document.getElementById("min");
var sec=document.getElementById("sec");
var ms=document.getElementById("ms");
var start=document.getElementById('s');
var lap=document.getElementById("lap");
var isTimerOn=false;
var timerId=false;
var reset=false;
var lapCount=0;

function timer()
{
    
    var time=0;
    isTimerOn=true;

    timerId=setInterval(function()
    {
        time++;
        
        //ms
        if(time%100<10)
        {
            ms.innerHTML='0'+time%100;   
        }
        else
        {
            ms.innerHTML=time%100;      
        }

        //sec
        if(parseInt(sec.innerHTML)<9)
           { if(time%100==0)
                sec.innerHTML='0'+String(parseInt(sec.innerHTML)+1);}
            else 
                if(time%100==0)
                    {   if(sec.innerHTML=='0')
                            sec.innerHTML='00';
                        else
                        sec.innerHTML=(parseInt(sec.innerHTML)+1)%60;
            if(sec.innerHTML=='0')
                sec.innerHTML='00';
                }

        //min
        if(parseInt(min.innerHTML)<9)
           { if(time%6000==0)
                min.innerHTML='0'+String(parseInt(min.innerHTML)+1);}
        else 
            if(time%6000==0)
            {    if(min.innerHTML=='0')
                        min.innerHTML='00';
                else
                min.innerHTML=(parseInt(min.innerHTML)+1)%60;
            }
    },10)
}

// Start/Stop

start.addEventListener("click",function()
{ 
    if(isTimerOn)
    {
      clearInterval(timerId);
      start.innerHTML="Start";
      isTimerOn=false;
      start.style.backgroundColor="White";
      lap.innerHTML= "Reset";
      reset=true;
      

    }
    else
   {
     timer();
     start.innerHTML="Stop";
     start.style.backgroundColor="Red";
     lap.innerHTML= "Lap";
   }
})


//Lap

lap.addEventListener("click",findlap);

function findlap()
{  if(reset==false)
    {var x=min.innerHTML;
    var y=sec.innerHTML;
    var z=ms.innerHTML;

    console.log(sec);
    if(parseInt(z)>0)

    {    var div=document.getElementById("lapdiv");
        var li=document.createElement("li");
        lapCount++;
        
        li.innerHTML='Lap '+lapCount+'=>'+x+':'+y+':'+z;

        div.appendChild(li);
    }    
        }
    else
    {
        min.innerHTML="00";
        sec.innerHTML="00";
        ms.innerHTML="00";
        lap.innerHTML="Lap";
        reset=false;
    }
        
}
