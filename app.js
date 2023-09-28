let gseq=[];
let useq=[];
let cbtns=["box1","box2","box3","box4"]
let start=false;
let level =0;
let hscore=0;

let p=document.querySelector('p');

document.addEventListener("keypress",function(){
    if (start==false)
    {
        console.log("game started");
        start=true;
        levelup();
    }
    else
    {
        alert("Already started");
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);


}

function levelup(){
    useq=[];

    if (hscore<level)
    {
        hscore=level;
    }




    level++;
    p.innerText=`level ${level}`;

    //choose a button code
    let randominx=Math.floor(Math.random()*3);
    let rinx=cbtns[randominx];
    let rbtn=document.querySelector(`.${rinx}`);

    // console.log(randominx);
    // console.log(rinx);
    // console.log(rbtn);

    gseq.push(rinx);
    // console.log(gseq);

    btnFlash(rbtn);
}

function checkColor(idx){
    if (useq[idx]==gseq[idx])
    {
        if (useq.length==gseq.length)
        {
           setTimeout(levelup,1000);
        }
    }
    else
    {
        p.innerHTML=`Game over ,<b> the score is ${level-1} </b>Press any key to start again`;
        
        //Hoghest score code
        document.querySelector('.highscore').innerText=` The highest score is ${hscore}`;

        //Wrongbackground 
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){document.querySelector('body').style.backgroundColor='white'},150);
        gseq=[];
        useq=[];
        level=0;
        start=false;
    }
}


function btnPress(){
    btnFlash(this);

    userColor=this.getAttribute('id');
    // console.log(userColor);
    useq.push(userColor);
    checkColor(useq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(i of allBtns){
    i.addEventListener("click",btnPress);
}
