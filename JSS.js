// const container=document.querySelector(".container")
// container.innerHTML="<h1>HTML </h1><p>This is created using JS</p>"
// console.log(container)
// .container{

// function Show(){
//     alert("This is an alert")
// }
// button.addEventListener("mouseover",Show)
// const  btn=document.querySelector("#btn")
// const  btn2=document.querySelector("#btn2")
// function show()
// {
//     alert("You clicked the button")
// }
//     btn2.removeEventListener("click",show)
//     btn.addEventListener("click",show)
//     btn2.addEventListener("click",function(){
//     btn.removeEventListener("click",show)
//     })
const  btn=document.querySelector("#btn")
btn.addEventListener("keyup",(event)=>{
    event.preventDefault();
    console.log(event.srcElement[0].value);
    console.log(event.srcElement[1].value);
    console.log(event.key);
})