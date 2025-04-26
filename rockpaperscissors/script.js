let choiceid;
let compchoice;
let userelement =0;
let computerelement=0;
let resetbutton = document.querySelector('#reset');
let name = prompt('your name');
let yourchoice=document.querySelector("#yourchoice");
let setname = document.querySelector('#yourname');
let computerscore = document.querySelector("#compscore");
let userscore = document.querySelector("#userscore");
let display = document.querySelector("#displaymsg");
const choices =document.querySelectorAll(".choice");
const play = document.querySelector("#msg");
const play1 = document.querySelector(".message");
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let cmode="LIGHTMODE";
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
         choiceid = choice.getAttribute("id");
        console.log("choice was cliciked ",choiceid);
        yourchoice.textContent=`you chose ${choiceid}`
        
    });
});

const playgame=(choiceid) =>{
    console.log(`user choice is ${choiceid}`);
}


const settingname =()=>{
    if(name == ""){
       setname.textcontent="USER";
    }else{
    setname.textContent=name;
    }
    
}
settingname();
play.addEventListener("click",()=>{
       computerchoice();
       playgame(choiceid);
       res();
});

const computerchoice =()=>{
    compchoice=Math.floor(Math.random()*3);
    console.log(`the computer choice is ${compchoice}`);
}
const res =()=>{
    if(compchoice==0 && choiceid=='rock' ||compchoice==1 && choiceid=='paper'||compchoice==2 && choiceid=='scissor'){
        display.textContent='draw';
    }else if(compchoice==1 && choiceid=='rock' || compchoice==2 && choiceid=='paper'||compchoice==0 && choiceid=='scissor'){
        display.textContent='computer wins';
        computerelement = computerelement+1
        computerscore.textContent=computerelement;
    }
    else if (compchoice==0 && choiceid=='paper' || compchoice==1 && choiceid=='scissor'||compchoice==2 && choiceid=='rock'){
        display.textContent='you win';
        userelement=userelement+1;
        userscore.textContent=userelement;
    }
}
resetbutton.addEventListener("dblclick",()=>{
    userelement=0;
    computerelement=0;
    userscore.textContent=0;
    computerscore.textContent=0;
    let name = prompt('yourname');
    if(name == ""){
        setname.textcontent="USER";
     }else{
     setname.textContent=name;
     }
})
modebtn.addEventListener("click", () => {
    console.log("You are trying to change mode");
    if (cmode === "LIGHTMODE") {
        cmode = "DARKMODE";
        console.log(`Mode changed to ${cmode}`);
        body.classList.remove("light");
        body.classList.add("dark");
        play1.classList.remove("light");
        play1.classList.add("dark");
        modebtn.textContent = "LIGHT MODE"; // Correct text content for the button
    } else if (cmode === "DARKMODE") {
        cmode = "LIGHTMODE";
        console.log(`Mode changed to ${cmode}`);
        body.classList.add("light");
        body.classList.remove("dark");
        play1.classList.add("light");
        play1.classList.remove("dark");
        modebtn.textContent = "DARK MODE"; // Correct text content for the button
    }
    console.log("Current body class list:", body.classList);
    console.log("Current play class list:", play.classList);
});
