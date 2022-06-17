import navbar from "../components/navbar.js"
import dropdown from "../components/dropdown.js"
import footer from "../compt/footer.js"
document.querySelector("#footer_main").innerHTML=footer()
document.querySelector("#navbar").innerHTML = navbar()
// console.log(dropdown())
dropdown()
let productData = JSON.parse(localStorage.getItem("ProductDetails"))
console.log(productData)
let append = (data) => {
    document.querySelector("#poster").src = data.image
    document.querySelector("#prod_price").innerText = `$${data.price}`
    document.querySelector("#prod_name").innerText = data.name
}

let Cart=JSON.parse(localStorage.getItem("CartItem"))||[]
document.querySelector("#add").addEventListener("click", function ()
{
    let n = document.querySelector("#prod_name").innerText
    alert(`${n} added to your cart`)
    let qt = document.querySelector("#quantity").value
    productData.quantity = qt
    Cart.push(productData)
    console.log(Cart)
  
    localStorage.setItem("CartItem", JSON.stringify(Cart))
    let d = JSON.parse(localStorage.getItem("CartItem")) || []
     if(d.length!=0)document.querySelector("#count").innerText=d.length
   
    setTimeout(function ()
    {
        // window.location.href="../navbar/navbar.html"
    },4000)
                
})
let x = document.querySelectorAll("#option>span")
let c = 0
for (let i = 0; i < x.length; i++)
{

    x[i].addEventListener("click", function ()
    {
        
        if(c%2==0) x[i].style.border="1px solid teal"
       else x[i].style.border="none"
        productData.Size = x[i].innerText
        c++
        
    })
}
append(productData)
