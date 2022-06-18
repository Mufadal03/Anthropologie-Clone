let b1=document.createElement("button")
b1.innerHTML="Ship to this address"
// // let b2=document.createElement("button")
// // let img1=document.createElement("img")

// // console.log(img1)
// // b2.innerHTML=img1.src

// // console.log(b2)


let proceed=document.getElementById("but")
proceed.append(b1)


b1.addEventListener("click",function(){
  
let n=document.getElementById("n").value;
let a=document.getElementById("a").value;
let c=document.getElementById("c").value;
let p=document.getElementById("p").value;
let p2=document.getElementById("p2").value;

let o={
    n:n,
    a:a,
    c:c,
    p:p,
    p2:p2
}
localStorage.setItem("shipping",JSON.stringify(o))
// let h=JSON.parse(localStorage.getItem("shipping"))
// console.log(h)

window.location.href="./pay.html"

})
let m=JSON.parse(localStorage.getItem("sub"))
console.log(m)

let subtotal=document.getElementById("subtotal") || []
subtotal.innerText=m.v

let paytop=document.getElementById("paytotal")
paytop.innerText="$"+(+subtotal.innerText+60)


// import footer from "../components/footer.js"
// let f=document.getElementById("footer")
// f.innerHTML=footer()
import navbar from "../components/navbar.js"
let nav=document.getElementById("navbar")
nav.innerHTML=navbar()

