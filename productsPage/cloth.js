import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()
import dropdown from "../components/dropdown.js"
dropdown()

import footer from "/Anthropologie-Unit3/compt/footer.js";

document.getElementById("footer_main").innerHTML = footer()


var ProductList = [{
        image: "https://images.urbndata.com/is/image/Anthropologie/4130728470001_065_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "Maeve Strappy Button-Front Midi Dress",

        price: 180,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130728470001_065_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        midtext: "Plus Sizes",
        id: 1,

    },
    {
        id: 2,
        image: "https://images.urbndata.com/is/image/Anthropologie/4113086690011_010_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "One-Shoulder Silk Midi Dress",

        price: 298,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4113086690011_010_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        midtext: "Plus Sizes"

    },

    {
        id: 3,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130464030102_079_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "La Me Be Fringed Tube",

        price: 180,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130464030102_079_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        midtext: "Plus Sizes"

    },
    {
        id: 4,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130464030162_049_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "Maeve Printed Wide -leg Pants",

        price: 120,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130464030162_049_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        midtext: "Plus Sizes"

    },
    {
        id: 5,
        image: "https://images.urbndata.com/is/image/Anthropologie/4110347800056_066_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "BL-nl Miranda Peasant Blouse",

        price: 190,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 6,
        image: "https://images.urbndata.com/is/image/Anthropologie/4120464030097_089_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Hutch Wrap Mini Skirt",

        price: 80,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4120464030097_089_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        midtext: "Plus Sizes"

    },
    {
        id: 7,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130572900012_102_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Sabina Murayev Shine Midi Dress",

        price: 395,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 8,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130059680123_010_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "The Odells V-Neck Midi Dress",

        price: 2590,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 9,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130916210073_095_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",

        price: 298,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 11,
        image: "https://images.urbndata.com/is/image/Anthropologie/64201411_016_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Maeve Printed Wide -leg Pants",

        price: 540,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 12,
        image: "https://images.urbndata.com/is/image/Anthropologie/64200108_012_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Maeve Printed Wide -leg Pants",

        price: 240,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 13,
        image: "https://images.urbndata.com/is/image/Anthropologie/4110089450034_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",

        price: 298,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 14,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130226850016_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",

        price: 1480,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 15,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130930420006_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",

        price: 300,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 16,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130659210008_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",

        price: 298,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 17,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130572650035_051_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",

        price: 128,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 18,
        image: "https://images.urbndata.com/is/image/Anthropologie/4112522160092_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",


        price: 658,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 19,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130226850015_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",

        price: 144,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },
    {
        id: 20,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130464030170_018_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "One-Shoulder Silk Midi Dress",

        price: 55,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130464030170_018_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        midtext: "Plus Sizes"

    },
    {
        id: 21,
        image: "https://images.urbndata.com/is/image/Anthropologie/4110089540028_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "One-Shoulder Silk Midi Dress",

        price: 6900,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130638280210_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        midtext: "Plus Sizes"

    },

]

window.addEventListener("load", function() {
    display(ProductList)
})

function display(list) {
    // console.log("inside function");

    document.getElementById("sh-product").innerHTML = "";
    // var parea = document.getElementsByClassName("sh-parea");

    for (let i = 0; i < ProductList.length; i++) {
        // console.log(ProductList[i]);

        var div = document.createElement("div");
        div.setAttribute("id", "sh-mainDiv");
        div.addEventListener("click", function() {
            addLocal(ProductList[i])
        })

        function addLocal(data) {
            localStorage.setItem("ProductDetails", JSON.stringify(data));
            window.location.href = "../productDetailsPage/productDetails.html"
        }
        var img = document.createElement("img");
        img.setAttribute("class", "sh-image1");
        img.setAttribute("id", `sh-image ${ProductList[i].id}`)
        img.src = ProductList[i].image;
        img.addEventListener("mouseenter", function() {
            mouseEnterfunction(ProductList[i]);
        })

        img.addEventListener("mouseout", function() {
            mouseOutfunction(ProductList[i]);
        })

        var name = document.createElement("p");
        name.setAttribute("id", "sh-name")
        name.textContent = ProductList[i].name;

        var price = document.createElement("p");
        price.setAttribute("id", "sh-price");
        price.textContent = `$${ProductList[i].price}`;

        div.append(img, name, price);

        document.querySelector("#sh-product").append(div);
    }
}

function mouseEnterfunction(product) {
    // console.log("onhover")

    const img = document.getElementById(`sh-image ${product.id}`)
    img.src = product.hover_image;
}

function mouseOutfunction(product) {
    // console.log("onhover")

    const img = document.getElementById(`sh-image ${product.id}`)
    img.src = product.image;
}

document.getElementById("sh-sort").addEventListener("change", sortPrice);

function sortPrice() {
    var selected = document.getElementById("sh-sort").value;
    var all = ProductList;
    if (selected == "low") {
        all = all.sort(function(a, b) {
            console.log(a, b)
            return a.price - b.price
        })
    }

    if (selected == "high") {
        all = all.sort(function(a, b) {
            console.log(a, b)
            return b.price - a.price
        })
    }
    display(all)
}

var array1;

document.querySelector("#filter").addEventListener("change", handleBrandFilter);

function handleBrandFilter() {
    var selected = document.querySelector("#filter").value;
    array1 = [];
    // console.log(selected);
    if (selected == "1") {
        array1.innerHTML = null;
        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML = "";
            var current = ProductList[i];
            // console.log(current)
            if (current.price >= 50.00 && current.price <= 100.00) {

                array1.push(ProductList[i]);

            }
        }
        console.log(array1);
        displayfilter(array1)

    }
    array1 = [];
    if (selected == 2) {
        array1.innerHTML = null;

        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML = "";
            var current = ProductList[i];

            if (current.price >= 101.00 && current.price <= 200.00) {

                array1.push(ProductList[i]);
            }
        }
        console.log(array1);
        displayfilter(array1)
    }
    array1 = [];
    if (selected == 3) {
        array1.innerHTML = null;
        for (var i = 0, length = ProductList.length; i < length; i++) {
            document.querySelector("#sh-product").innerHTML = null;
            var current = ProductList[i];

            if (current.price >= 201.00 && current.price <= 300.00) {

                array1.push(ProductList[i]);
            }
        }

        displayfilter(array1)
        console.log(array1);
    }

    function displayfilter(array1) {


        for (let i = 0; i < array1.length; i++) {
            console.log(array1[i]);

            var div = document.createElement("div");
            div.setAttribute("id", "sh-mainDiv");
            div.addEventListener("click", function() {
                addLocal(array1[i])
            })

            function addLocal(data) {
                localStorage.setItem("ProductDetails", JSON.stringify(data));
                window.location.href = "../productDetailsPage/productDetails.html"
            }


            var img = document.createElement("img");
            img.setAttribute("class", "sh-image1");
            img.setAttribute("id", `sh-image ${array1[i].id}`)
            img.src = array1[i].image;
            img.addEventListener("mouseenter", function() {
                mouseEnterfunction(array1[i]);
            })

            img.addEventListener("mouseout", function() {
                mouseOutfunction(array1[i]);
            })

            var name = document.createElement("p");
            name.setAttribute("id", "sh-name")
            name.textContent = array1[i].name;

            var price = document.createElement("p");
            price.setAttribute("id", "sh-price");
            price.textContent = `$${array1[i].price} `;

            div.append(img, name, price);

            document.querySelector("#sh-product").append(div);

        }
    }



}