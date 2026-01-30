// // const container=document.querySelector(".container")
// // container.innerHTML="<h1>HTML </h1><p>This is created using JS</p>"
// // console.log(container)
// // .container{

// // function Show(){
// //     alert("This is an alert")
// // }
// // button.addEventListener("mouseover",Show)
// // const  btn=document.querySelector("#btn")
// // const  btn2=document.querySelector("#btn2")
// // function show()
// // {
// //     alert("You clicked the button")
// // }
// //     btn2.removeEventListener("click",show)
// //     btn.addEventListener("click",show)
// //     btn2.addEventListener("click",function(){
// //     btn.removeEventListener("click",show)
// //     })
// // const  btn=document.querySelector("#btn")
// // btn.addEventListener("keyup",(event)=>{
// //     event.preventDefault();
// //     console.log(event.srcElement[0].value)
// //     console.log(event.srcElement[1].value);
// //     console.log(event.key);
// // })
// console.log(a)

// var a=343
// let b=455

// console.log(a)
// console.log(b)

// function print(){
//     console.log("inside function")
// }

// print()
// const student = document.querySelector("#name");
// const button = document.querySelector(".btn");
// const list = document.querySelector(".list");

// button.addEventListener("click", () => {
//     if (student.value === "") return; // avoid empty input

//     const li = document.createElement("li");
//     const deleteButton = document.createElement("button");

//     li.innerText = student.value;
//     deleteButton.innerText = "Delete";

//     deleteButton.addEventListener("click", () => {
//         li.remove();
//     });

//     li.appendChild(deleteButton);
//     list.appendChild(li);

//     student.value = "";
// });
// function print() {
//     console.log("inside print");
// }
// function greet(callback) {
//     setTimeout(() => {
//         console.log("Hello User");
//         callback();
//     }, 2000);
// }
// console.log("Starting homework");
// setTimeout(() => {
//     console.log("Homework done");
//     console.log("Starting dinner");
//     setTimeout(() => {
//         console.log("Dinner done");
//         console.log("Getting ready to go out");
//         setTimeout(() => {
//             console.log("going to the playground");
//         }, 2000);
//     }, 3000);
// }, 4000);
// function finishHomework(callback) {
//  console.log("Starting homework..."); 
//     setTimeout(() => {
//       console.log("Homework done!");
//       callback(); 
//     }, 2000);
// };
// function eatDinner(callback) {
//  console.log("Starting dinner..."); 
// setTimeout(() => { 
//     console.log("Dinner done!"); 
//     callback(); 
//  }, 1500);
// }
// function goToPlayground() {
//  console.log("Going to the playground!");
// }
// // Chained in steps, but cleaner
// finishHomework(() => { 
//     eatDinner(() => { 
//         goToPlayground();
//     });
// })
const p=new Promise((res,rej)=>{
    console.log("Going to do homework")
    setTimeout(()=>{
        const done =true;
        if(done){
            res("Success");
        }else{
            rej("Failure to fetch data from server");
        }
    },3000)
});

p.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})