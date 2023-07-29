const file=document.querySelector("#file");
const input=document.querySelector("#input");
const cardCreat=document.querySelector("#creat-card")
input.addEventListener("keyup",(event)=>{
    const cardKey=event.target.value;
    console.log(cardKey);
});
cardCreat.addEventListener("click",() => {
    console.log("u click");
})