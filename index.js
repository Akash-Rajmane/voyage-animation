var x;
var y;
var m=0;
var b=0;
var music = document.getElementById("bgm");

function start(){
    x = setInterval(animate,100);
    music.play();
 
    function animate(){
      
        if(m==1150){
            clearInterval(x);           
            m=0;
            music.pause();
        }
        else{
            m = m+5;
            var target = document.getElementById("img");
            target.style.marginLeft = m+'px';
        }
   }

}

function stop(){
    clearInterval(x);
    music.pause();
}

function birdFly(){
   y = setInterval(fly,500);
    
    function fly(){
        if(b==1150){
            clearInterval(y);           
            b=0;
        }
        else{
            b = b+5;
            var birdy = document.getElementById("bird");
            birdy.style.marginLeft= b+'px';
        }

    }

}

setInterval(birdFly,3000);