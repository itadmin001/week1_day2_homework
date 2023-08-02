let i = 0;

var setup = document.getElementsByClassName("number");
if(!setup[0].classList.contains('active')){
    setup[0].className += " active";
}

const element = document.getElementById("form-next");
element.addEventListener("click",function(){
    
    var current = document.getElementsByClassName("number");
    console.log(i)
    if(i==3){
        i=0;
        current[3].classList.remove("active");
        current[0].className +=' active';
    }else{
        current[i].classList.remove("active");
        current[i+1].className += " active";
        i+=1
    }
    
});


function media_658(width){
    var kill_it = document.getElementById("form-next");
    kill_it.removeEventListener("click",function(){});

    if(width.matches){
        var current = document.getElementsByClassName("mobile-number");
        let j=0;
        
            const element = document.getElementById("form-next-mobile");
            element.addEventListener("click",function(){
                console.log("click 658")
                if(j==3){
                    j=0;
                    current[3].classList.remove("active");
                    current[0].className +=' active';
                }else{
                    current[j].classList.remove("active");
                    current[j+1].className += " active";
                    j+=1;
                }
            });
        
        
        
    }

};

var width_max_658 = window.matchMedia("(max-width:658px)")
media_658(width_max_658)
width_max_658.addEventListener(window.matchMedia, media_658)



function media_659(width){
    var kill_it = document.getElementById("form-next-mobile");
    kill_it.removeEventListener("click",function(){});

    if(width.matches){
        var current = document.getElementsByClassName("mobile-number");
        let k=0;
        
            const element = document.getElementById("form-next");
            element.addEventListener("click",function(){
                console.log("click 659")
                if(k==3){
                    k=0;
                    current[3].classList.remove("active");
                    current[0].className +=' active';
                }else{
                    current[k].classList.remove("active");
                    current[k+1].className += " active";
                    k+=1;
                }
            });
        
        
        
    }

};

var width_min_659 = window.matchMedia("(min-width:659px)")
media_659(width_min_659)
width_min_659.addEventListener(window.matchMedia, media_659)