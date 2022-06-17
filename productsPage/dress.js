import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()
import dropdown from "../components/dropdown.js"
dropdown()

import footer from "/Anthropologie-Unit3/compt/footer.js";

document.getElementById("footer_main").innerHTML = footer()

var ProductList = [{
        id: 1,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "Amanda Upacharia",
        price: 246,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: "$2599",
    },
    {
        id: 2,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130348690171_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "Faith full babydoll mid dress",
        price: 219,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130348690171_011_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 999,
    },
    {
        id: 3,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130326950010_018_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "The maris drees ",
        price: 180,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130326950010_018_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 2099,
    },
    {
        id: 4,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130647160134_046_c?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: "fram x athrology",
        price: 248,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130647160134_046_c2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 799,
    },
    {
        id: 5,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130916210078_001_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        name: " Teva Hurricane Verge Sandals",
        price: 80,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130916210078_001_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 3599,
    },
    {
        id: 6,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130348690159_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Rony cobo one shoulder tropical",
        price: 548,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 3199,
    },
    {
        id: 7,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130646420009_014_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Melissa Bikini Platform Sandals ",
        price: 40,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 3199,
    },
    {
        id: 8,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130652010047_080_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "V-neck wrap mini dress",
        price: 148,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 1099,
    },
    {
        id: 9,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130916210078_049_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Emini halter mini dress",
        price: 140,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 1440,
    },
    {
        id: 10,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130464030191_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Hutch high low wrap dress",
        price: 45,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 999,
    },
    {
        id: 11,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130652010001_052_c2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Elis bAis Dress  ",

        price: 198,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 399,
    },
    {
        id: 12,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130370060073_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Halter slide-slite maxi dress",

        price: 170,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 359,
    },
    {
        id: 13,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130226850016_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " hutch disty-printed mini dress",

        price: 170,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 999,
    },
    {
        id: 14,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130916210075_095_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " blue tassaai mini dress",

        price: 148,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 499,
    },
    {
        id: 15,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130210690119_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Eva franko tie mini dress ",

        price: 198,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 500,
    },
    {
        id: 16,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130078420005_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " solid fring halter maxi dress",

        price: 298,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 399,
    },
    {
        id: 17,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130370060075_070_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " slick colourblocked maxi dress",

        price: 248,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 699,
    },
    {
        id: 18,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130024090110_050_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Pilcro picola trio dress  ",

        price: 198,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 699,
    },
    {
        id: 19,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130089450008_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Pink dreesed ",

        price: 140,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 3499,
    },
    {
        id: 20,
        image: " https://images.urbndata.com/is/image/Anthropologie/4130348690159_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "  Tie-Up Thong Sandals ",

        price: 655,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 4999,
    },
    {
        id: 22,
        image: " https://images.urbndata.com/is/image/Anthropologie/59743971_032_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Pilcro Tie-Up Thong ",

        price: 650,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 2299,
    },
    {
        id: 23,
        image: " https://images.urbndata.com/is/image/Anthropologie/4130464030166_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " black boundy ",

        price: 545,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 3599,
    },
    {
        id: 24,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130646420031_266_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Birkenstock Sandals",

        price: 365,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 1299,
    },
    {
        id: 25,
        image: " https://images.urbndata.com/is/image/Anthropologie/4130226850013_024_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Siena Vegan  ",

        price: 742,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 4999,
    },
    {
        id: 26,
        image: " https://images.urbndata.com/is/image/Anthropologie/4130916210078_082_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " yellow dress ",

        price: 932,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 4999,
    },
    {
        id: 27,
        image: "https://images.urbndata.com/is/image/Anthropologie/68329697_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349  ",
        name: " strip dress  ",

        price: 440,
        strikedoffprice: 2799,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
    },
    {
        id: 28,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130089450007_030_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " green dress",

        price: 1102,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 3499,
    },
    {
        id: 29,
        image: "https://images.urbndata.com/is/image/Anthropologie/64734064_011_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "white one pice",

        price: 3119,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 5599,
    },
    {
        id: 31,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130615880021_060_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Jeffery orange designe",

        price: 2796,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 3599,
    },
    {
        id: 32,
        image: "https://images.urbndata.com/is/image/Anthropologie/62549654_041_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "black one pice",

        price: 5000,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 9999,
    },
    {
        id: 33,
        image: "https://images.urbndata.com/is/image/Anthropologie/54524780_040_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Apl Logo Slide black",

        price: 1056,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 1299,
    },
    {
        id: 34,
        image: "https://images.urbndata.com/is/image/Anthropologie/4130318350031_010_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Pilcro Woven ",

        price: 1043,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/4130370060077_070_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
        strikedoffprice: 1299,
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