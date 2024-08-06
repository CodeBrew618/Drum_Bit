
//By clicking the button to making sound.
for (i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ makingSound(this.innerHTML);     buttonAnimation(this.innerHTML);
    });

}
//By press down the keyboard to making sound.
document.addEventListener("keydown", function(event){ makingSound(event.key); 


    buttonAnimation(event.key);


});


function makingSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
    
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
                
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;



        default:
            break;
    }
    
}

function buttonAnimation(key) {
    
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},50);
    

}

