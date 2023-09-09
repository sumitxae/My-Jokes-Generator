const ham = document.querySelector("#ham")
const hnav = document.querySelector("#hidden")
const quotes = document.querySelectorAll(".qo")
const jokes = document.querySelectorAll(".jo")
const news = document.querySelectorAll(".ne")
const head = document.querySelectorAll("#info>h1")
const info = document.querySelectorAll("#info p")
const btn = document.querySelectorAll("#hero button")
let flag = 0

function opac(a){
    if (a === 0) {
        setTimeout(() => {
            gsap.to("#hidden",{
                opacity:1
            })
        }, 200);
    } else {
        setTimeout(() => {
            gsap.to("#hidden",{
                opacity:0
            })
        }, 50);
    }
}
function menuBar() {
    ham.addEventListener("click",()=>{
        if (flag === 0) {
            gsap.to("#hidden",{
                x: "100%",
                ease: "power1"
            })
            opac(flag);
            flag = 1;
        } else {
            gsap.to("#hidden",{
                x: "-100%",
                ease: "power1"
            })
            opac(flag);
            flag = 0;
        }
    })
}

// function iconClick(){    
//     quotes.forEach(elem => {
//         elem.addEventListener("click",()=>{
//             head[0].innerText = "Quotes Mania" 
//             info[0].innerText = "Enter Quote here"
//             btn[0].innerText = "Next Quote" 
//         })
//     });
//     jokes.forEach(elem => {
//         elem.addEventListener("click",()=>{
//             head[0].innerText = "Jokes Mania" 
//             info[0].innerText = "Enter Joke here"
//             btn[0].innerText = "Next Joke" 
//         })
//     });
//     news.forEach(elem => {
//         elem.addEventListener("click",()=>{
//             head[0].innerText = " Current Affairs" 
//             info[0].innerText = "Enter News here"
//             btn[0].innerText = "Next News" 
//         })
//     });
// }

menuBar();
// iconClick();