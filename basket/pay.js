let s=document.getElementById("shipping")

let h=JSON.parse(localStorage.getItem("shipping")) || []

console.log(h.n);
let n=document.createElement("h4")
n.innerText="Name : "+ h.n;
let a=document.createElement("h4")
a.innerText="Address : " +h.a;
let c=document.createElement("h4")
c.innerText="City : "+h.c;
let p=document.createElement("h4")
p.innerText="Passcode : "+h.p;
let p2=document.createElement("h4")
p2.innerText="Phone : "+h.p2;
s.append(n,a,c,p,p2)