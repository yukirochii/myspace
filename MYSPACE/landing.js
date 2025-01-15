let loginHeader = document.querySelector(".login-header")
let registerHeader = document.querySelector(".register-header")
let aboutHeader = document.querySelector(".about-header")
let loginDiv = document.querySelector(".login-div")
let registerDiv = document.querySelector(".register-div");
let register2Div = document.querySelector(".register2-div")
let cardContainer = document.querySelector(".card-container");
let flipAudio = document.querySelector(".flip-audio");
let expandAudio = document.querySelector(".expand-audio");
let shrinkAudio = document.querySelector(".shrink-audio");
let registerP = document.querySelector(".Register-p");
flipAudio.volume = 0.25;
expandAudio.volume = 0.15;
shrinkAudio.volume = 0.15
let flipAudioplayed = false;
let loginList = document.querySelector(".login-list");
let aboutList = document.querySelector(".about-list");
loginDiv.addEventListener("click",function(){
        cardContainer.style.opacity= 1;
        cardContainer.style.transform = "translate(-50%,-50%) rotateY(180deg)";
        registerP.innerText = "Tap the card to login" ;   
     
         
       
            flipAudio.play();
            
        
        
    cardContainer.addEventListener("transitionend",function(){
        registerDiv.style.height = "500px";
        cardContainer.style.height = "500px"
        registerDiv.style.transition = "0.5s ease";
        setTimeout(() => {
            expandAudio.play();
        }, 150);
       
        
    }, {once:true})
})
registerDiv.addEventListener("click",function(){
    registerDiv.style.height = "250px";
    cardContainer.style.height = "250px";
    cardContainer.style.opacity= 1;
    registerP.innerText = "Tap the card to register" ;

    registerDiv.addEventListener("transitionend",function(){
        cardContainer.style.transform = "translate(-50%,-50%) rotateY(0deg)";
        flipAudio.play();
    },{once : true})
    
} )



let aboutInfo = document.querySelector(".about-info")

aboutHeader.addEventListener("click",function(){
    
    cardContainer.style.display = "none";
    registerP.style.display = "none";
    aboutInfo.style.display = "block"
    loginList.style.borderBottom = "0px solid";
    aboutList.style.borderBottom = "2px solid black";
    
    

    
})

loginHeader.addEventListener("click",function(){
    cardContainer.style.display= "block";
    registerP.style.display = "block";
    aboutInfo.style.display = "none";
    loginList.style.borderBottom = "2px solid black";
    aboutList.style.borderBottom = "0px solid";


    

})

const preventflip = document.querySelectorAll("button,input");

preventflip.forEach((Element) =>{
    Element.addEventListener("click",function(Event){
        Event.stopPropagation();
    })
})

let iconLight = document.getElementById("lightButton");
let iconDark = document.getElementById("darkButton")
let body = document.querySelector("body");
let materialIcon = document.querySelector(".material-icons");

iconLight.addEventListener("click",function () {
    iconDark.style.display = "block";
    iconLight.style.display = "none";
    body.style.backgroundColor = "rgb(77,77,77)";
    loginHeader.style.color = "white";
    aboutHeader.style.color = "white";
    aboutInfo.style.color = "white";
    registerP.style.color = "rgb(228, 228, 228)"
    
})
iconDark.addEventListener("click",function () {
    iconDark.style.display = "none";
    iconLight.style.display = "block";
    body.style.backgroundColor = "";
    aboutInfo.style.color = "rgb(92,92,92)";
    registerP.style.color = "gray"
    loginHeader.style.color = "black";
    aboutHeader.style.color = "black";
    
})





