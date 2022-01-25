
for(i=0;i<document.querySelectorAll(".drum").length;i++){



        document.querySelectorAll(".drum")[i].addEventListener("click",function (){
            var id = (this.innerHTML);
            makeSound(id);
            animate(id);
            
       
        });
        bgimg="url(images/tom"+(i+1)+".png)";
        console.log(bgimg);
        document.querySelectorAll(".drum")[i].style.backgroundImage=bgimg;
}

function makeSound(key) {
    switch (key) {
        case "w":
            var sound=new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        case "a":
            sound= new Audio('sounds/tom-2.mp3');
            sound.play();

            break;

        case "s":
            sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;

        case "d":
            sound= new Audio('sounds/tom-4.mp3');
            sound.play();
            break;

        case "j":
            sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;
            
        case "k":
            sound=new Audio('sounds/crash.mp3');
            sound.play();
            break;

        case "l":
            sound=new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;


        default:
            console.log(id);
            break;
    }    
}

document.addEventListener("keydown",function (event) {

    var id = event.key;
    animate(id);
    makeSound(id);
    
})




function animate(currentkey) {
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");
    },100)
    
}