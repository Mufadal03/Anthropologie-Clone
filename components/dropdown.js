let dropdown = () => {
    let x =  document.querySelectorAll(".li")
    for(let i = 0 ; i<x.length;i++)
    {
        x[i].addEventListener("mouseover",function()
        {
    document.querySelector("#drop_downs").style.display = "block"

        })
         x[i].addEventListener("mouseleave", function () {
            document.querySelector("#drop_downs").style.display ="none"

        })
        
    }
        document.querySelector("#drop_downs").addEventListener("mouseenter", function () {
                document.querySelector("#drop_downs").style.display = "block"

            })  
        document.querySelector("#drop_downs").addEventListener("mouseleave",function()
        {
        document.querySelector("#drop_downs").style.display = "none"

        })
    let d = JSON.parse(localStorage.getItem("CartItem"))||[]
    if (d.length!=0){ document.querySelector("#count").innerText = d.length }

}
export default dropdown