import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()
import dropdown from "../components/dropdown.js"
dropdown()

import footer from "/Anthropologie-Unit3/compt/footer.js";

document.getElementById("footer_main").innerHTML = footer()

var ProductList = [{
        id: 1,
        image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Peacock Ottoman",
        price: 434,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,

    },
    {
        id: 2,
        image: "https://images.urbndata.com/is/image/Anthropologie/45246403AA_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Peacock indoor/Outdoor Daybed",
        price: 976,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/45246403AA_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 999,
    },
    {
        id: 3,
        image: "https://images.urbndata.com/is/image/Anthropologie/56046469_041_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Plumage indoor/Outdoor Rattan Chair",
        price: 965,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/55882518_041_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3499,
    },
    {
        id: 4,
        image: "https://images.urbndata.com/is/image/Anthropologie/A45246403AA_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Peacock abana Daybed ",
        price: 1143,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/A45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 12000,
    },
    {
        id: 5,
        image: "https://images.urbndata.com/is/image/Anthropologie/45549367-0000-SC0006_b?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain",
        name: " Barwick indoor/Outdoor Swivel Chair ",
        price: 1354,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/45549367-0000-SC0006_b3?$a15-mto-tile$&hei=523&wid=349&qlt=80&fit=constrain",
        strikedoffprice: 1299,
    },
    {
        id: 6,
        image: "https://images.urbndata.com/is/image/Anthropologie/49812944_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Ingrid Chair ",
        price: 298,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1699,
    },
    {
        image: " https://images.urbndata.com/is/image/Anthropologie/66490830_018_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Sara Campbell picnic Blanket ",
        price: 92,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1699,
    },
    {
        id: 7,
        image: "https://images.urbndata.com/is/image/Anthropologie/66013038_049_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Celma Indoor/Outdoor Pillow",
        price: 65,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3499,
    },
    {
        id: 8,
        image: " https://images.urbndata.com/is/image/Anthropologie/67118968_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Pari Rattan Bench ",
        price: 65,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 4999,
    },
    {
        id: 9,
        image: " https://images.urbndata.com/is/image/Anthropologie/66150368_010_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Outdoor Umbrella Stand ",
        price: 245,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1499,
    },
    {
        id: 10,
        image: " https://images.urbndata.com/is/image/Anthropologie/65847659_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Mosaic Stool ",
        price: 165,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 2299,
    },
    {
        id: 11,
        image: "https://images.urbndata.com/is/image/Anthropologie/45217557AA_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Ianthe Indoor Pillow ",
        price: 65,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,
    },
    {
        id: 12,
        image: "  https://images.urbndata.com/is/image/Anthropologie/50294149_042_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Handwoven Harani",
        price: 75,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1299,
    },
    {
        id: 13,
        image: " https://images.urbndata.com/is/image/Anthropologie/68956697_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Dried King PRtea",
        price: 74,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 4999,
    },
    {
        id: 14,
        image: "  https://images.urbndata.com/is/image/Anthropologie/64741697_030_b10?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Nadya Ribbed Watering Can ",
        price: 32,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 4999,
    },
    {
        id: 15,
        image: " https://images.urbndata.com/is/image/Anthropologie/63692321_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Pincushion Flower Bunch ",
        price: 80,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 2799,
    },
    {
        id: 16,
        image: " https://images.urbndata.com/is/image/Anthropologie/58361411_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Fresh Free Spirit Roses Dozen",
        price: 133,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3499,
    },
    {
        id: 17,
        image: "https://images.urbndata.com/is/image/Anthropologie/54503313_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Fresh Pampas Grass ",
        price: 69,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 5599,
    },
    {
        id: 18,
        image: "https://images.urbndata.com/is/image/Anthropologie/57191066_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Fresh Blue + White Scabiosa Bunch",
        price: 94,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,
    },
    {
        id: 19,
        image: "https://images.urbndata.com/is/image/Anthropologie/64102718_030_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Thick Ridge Ceramic",
        price: 40,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/B45246403AA_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,
    }
];

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