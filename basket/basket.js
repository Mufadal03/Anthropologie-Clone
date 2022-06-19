
let saved_data=document.getElementById("saved");
let jj=0;
function but(){
  console.log(56754)
  alert (2)
}

//////////////////////////
let d=[{
  image:"https://images.urbndata.com/is/image/Anthropologie/4130348690162_010_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
 name:"Maeve Strappy Button-Front Midi Dress",
   price:180,
},
{
  image:"https://images.urbndata.com/is/image/Anthropologie/4130916210073_095_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
 name:"One-Shoulder Silk Midi Dress",
   price:298,
   midtext:"Plus Sizes"
},
{
  image:"https://images.urbndata.com/is/image/Anthropologie/4130344600147_080_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
 name:"La Me Be Fringed Tube",
   price:180,
   midtext:"Plus Sizes"
},]

// localStorage.setItem("CartItem",JSON.stringify(d))
///////////////////////////


var clothes =[{
    image:"https://images.urbndata.com/is/image/Anthropologie/4130348690162_010_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"Maeve Strappy Button-Front Midi Dress",
     price:180,
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4130916210073_095_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"One-Shoulder Silk Midi Dress",
     price:298,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4130344600147_080_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"La Me Be Fringed Tube",
     price:180,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4123652010014_009_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"Maeve Printed Wide -leg Pants",
     price:120,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4110347800056_066_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"BL-nl Miranda Peasant Blouse",
     price:190,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4120464030097_089_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"Hutch Wrap Mini Skirt",
     price:1300,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4130572900012_102_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"Sabina Murayev Shine Midi Dress",
     price:395,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4130059680123_010_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"The Odells V-Neck Midi Dress",
     price:2590,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4130916210073_095_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"One-Shoulder Silk Midi Dress",
     price:298,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/64219207_084_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"La Me Be Fringed Tube",
     price:180,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/64201411_016_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"Maeve Printed Wide -leg Pants",
     price:540,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/64200108_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"Maeve Printed Wide -leg Pants",
     price:240,
     midtext:"Plus Sizes"
  },
  {
    image:"https://images.urbndata.com/is/image/Anthropologie/4110089450034_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
   name:"One-Shoulder Silk Midi Dress",
     price:298,
     midtext:"Plus Sizes"
  },

  
  ]

let clothesDATA=JSON.parse(localStorage.getItem("CartItem")) || []
console.log(clothesDATA)


  import select from "./select.js"
let ins=document.getElementById("append")
var ii=0;

let subtotal=0;
// let jod=0;


// ////////////////////////////////////////////////
// change clothes data with json data*******************
clothesDATA.forEach(function(el,ii){
  ins.append(gal(el,ii))
 
  ii++;
  })
    // c.innerText=el.category;
    
   function gal(el,ii){ 
    let div=document.createElement("div");
    let div2=document.createElement("div");
    
    
    let name=document.createElement("h5");
    let img=document.createElement("img");
    let price=document.createElement("p");
    
    let totalPrice=document.createElement("p");
    totalPrice.innerText=el.price;
    subtotal+=el.price;
    let quantity=document.createElement("div");
quantity.innerHTML=select()

var remove=document.createElement("button");
remove.setAttribute("id","remove")
remove.innerText="Remove";
var save=document.createElement("button");
save.setAttribute("id","save")
save.innerText="Save for Later";

remove.addEventListener("click",function(){
  deleting(el,ii)
})
// console.log(quantity)

save.addEventListener("click",function(){
  // console.log(el,ii)
  this.parentNode.remove()
  dave(el,ii)
})


            name.innerText=el.name;
            img.src=el.image;
             price.innerText=el.price;
// quantity.addEventListener("click",function(){
//   console.log(quantity.value)

//   // pending**************************
// })
let asdf=document.getElementById("subtotal");
asdf.innerHTML="$"+subtotal







             div2.append(name)
             div.append(img,div2,quantity,price,totalPrice,save,remove)
             return div;


            }
// ///////////////////////////////////////





function deleting(el,ii){
console.log("del")
console.log(clothesDATA)

clothesDATA.splice(ii,1);
console.log(clothesDATA)
localStorage.setItem("CartItem",JSON.stringify(clothesDATA))
window.location.reload()

}

let new_data=JSON.parse(localStorage.getItem("save")) || []

function dave(el,ii){
  console.log("Enter")
  event.preventDefault()
  new_data.push(el)
  localStorage.setItem("save",JSON.stringify(new_data))
  console.log(new_data)
  

    // ****


    let div=document.createElement("div");
    let div2=document.createElement("div");
    
    
    let name=document.createElement("h5");
    let img=document.createElement("img");
    let price=document.createElement("p");
    
    let totalPrice=document.createElement("p");
    totalPrice.innerText=el.price;
    subtotal+=el.price;
    let quantity=document.createElement("div");
    quantity.innerHTML=select()
    
    var remove=document.createElement("button");
    remove.innerText="Add to cart";
    // var save=document.createElement("button");
    // save.innerText="Save for Later";
    

    // changeddd
    remove.addEventListener("click",function(){
      window.location.reload()
})

// save.addEventListener("click",function(){
//   // console.log(el,ii)
//   dave(el,ii)
// })


name.innerText=el.name;
img.src=el.image;
price.innerText=el.price;


quantity.addEventListener("change",function(){
  // console.log(quantity.innerText)
  
  // pending**************************
})




div2.append(name)
div.append(img,div2,quantity,price,totalPrice,remove)
saved_data.innerHTML=null
saved_data.append(div)
// ****





console.log(saved_data)
// deleting(el,ii)
// window.location.reload()
}

// let new_data=JSON.parse(localStorage.getItem("save")) || []

console.log(new_data,675667)
// if(new_data){




let like=document.getElementById("like")
clothes.forEach(function(el){
  let ldiv=document.createElement("div");
  let limg=document.createElement("img")
  let lname=document.createElement("h3")
  limg.src=el.image;
  lname.innerText=el.name;
  ldiv.append(limg,lname)
  like.append(ldiv)



})

// }








let paytop=document.getElementById("paytotal")
paytop.innerText="$"+(subtotal+60)





let m={
  v:subtotal
}
localStorage.setItem("sub",JSON.stringify(m))
// let mm=JSON.parse(localStorage.getItem("sub"))
// console.log(mm.v)
// console.log(mm,1)






































    //              g.innerText=el.gender; arr.forEach(function(el,ii){
    // console.log(321)
    //         let n=document.createElement("h3");
    //         let c=document.createElement("h3");
    //         let i=document.createElement("img");
    //         let p=document.createElement("h3");
    //         let g=document.createElement("h3");
    //         var s=document.createElement("button");
            
    //         n.innerText=el.name;
    //         c.innerText=el.category;
    //         i.src=el.image;
    //          p.innerText=el.price;
    //          g.innerText=el.gender;
    //              })

    // import footer from "../components"
    // let f=document.getElementById("footer")
    // f.innerHTML=footer()

    import navbar from "../components/navbar.js"
    let nav=document.getElementById("navbar")
    nav.innerHTML=navbar()