let count=0;
let firstperson="";
let Secondperson="";

const cards=document.querySelectorAll(".cards .card");
cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        card.classList.add("clicked")
    if(count==0)
    {
        firstperson=card.getAttribute("animal");
        count++
    }
    else 
    {
        Secondperson=card.getAttribute("animal");
        count=0;
        if(firstperson===Secondperson)
        {
            const correctcards=document.querySelectorAll(".card[animal='"+firstperson+"']")
            correctcards[0].classList.add("checked");
            correctcards[0].classList.remove("clicked");
            correctcards[1].classList.add("checked");
            correctcards[1].classList.remove("clicked");
            

        }
        else{
             const incorrectcard=document.querySelectorAll(".card.clicked")
             incorrectcard[0].classList.add("shake");
             incorrectcard[1].classList.add("shake");
             
             setTimeout(()=>{
                incorrectcard[0].classList.remove("shake");
                incorrectcard[0].classList.remove("clicked");
                incorrectcard[1].classList.remove("shake");
                incorrectcard[1].classList.remove("clicked");
             
                
             },400)

        }
    }
    })
})