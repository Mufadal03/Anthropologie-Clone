import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()
import dropdown from "../components/dropdown.js"
dropdown()

import footer from "/Anthropologie-Unit3/compt/footer.js";

document.getElementById("footer_main").innerHTML = footer()

var ProductList = [{
        id: 1,
        image: "https://images.urbndata.com/is/image/Anthropologie/66430166_025_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Maeve Puffy Knotted Sandals ",
        price: 80,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 2599,
    },
    {
        id: 2,
        image: "https://images.urbndata.com/is/image/Anthropologie/66435637_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Birkenstock Glenda Sandals ",
        price: 140,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 999,
    },
    {
        id: 3,
        image: "https://images.urbndata.com/is/image/Anthropologie/66604497_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Jeffrey Campbell Linques Sandals ",
        price: 130,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 2099,
    },
    {
        id: 4,
        image: "https://images.urbndata.com/is/image/Anthropologie/66174640_025_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Seychelles Low Key Glow Up Sandals",
        price: 99,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 799,
    },
    {
        id: 5,
        image: "https://images.urbndata.com/is/image/Anthropologie/65565731_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Teva Hurricane Verge Sandals",
        price: 80,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,
    },
    {
        id: 6,
        image: "https://images.urbndata.com/is/image/Anthropologie/67107052_050_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Maeve Puffy Knotted Sandals ",
        price: 80,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3199,
    },
    {
        id: 7,
        image: "https://images.urbndata.com/is/image/Anthropologie/59967851_016_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Melissa Bikini Platform Sandals ",
        price: 40,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3199,
    },
    {
        id: 8,
        image: "https://images.urbndata.com/is/image/Anthropologie/67106484_080_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Teva Hurricane Verge Sandals ",
        price: 79,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1099,
    },
    {
        id: 9,
        image: "https://images.urbndata.com/is/image/Anthropologie/65565319_024_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Seychelles Adapt Heel  ",
        price: 23,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1440,
    },
    {
        id: 10,
        image: "https://images.urbndata.com/is/image/Anthropologie/59969535_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Seychelles Adapt Heel",
        price: 45,
        strikedoffprice: 999,
    },
    {
        id: 11,
        image: "https://images.urbndata.com/is/image/Anthropologie/66540873_060_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Seychelles Adapt Heel ",
        price: 32,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,
    },
    {
        id: 12,
        image: "https://images.urbndata.com/is/image/Anthropologie/66737909_070_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Seychelles Adapt Heel",
        price: 34,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,
    },
    {
        id: 13,
        image: "https://images.urbndata.com/is/image/Anthropologie/63333678_015_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Bernardo Miami Sandals",
        price: 76,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 999,
    },
    {
        id: 14,
        image: "https://images.urbndata.com/is/image/Anthropologie/69434926_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Bernardo Miami Sandals",
        price: 65,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3499,
    },
    {
        id: 15,
        image: "https://images.urbndata.com/is/image/Anthropologie/67059634_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Bernardo Miami Sandals ",
        price: 43,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 12000,
    },
    {
        id: 16,
        image: "https://images.urbndata.com/is/image/Anthropologie/66706037_026_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Bernardo Miami Sandals ",
        price: 54,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1299,
    },
    {
        id: 17,
        image: "https://images.urbndata.com/is/image/Anthropologie/66938895_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Pilcro Tie-Up Thong Sandals ",
        price: 1019,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1699,
    },
    {
        id: 18,
        image: "https://images.urbndata.com/is/image/Anthropologie/67555896_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Pilcro Tie-Up Thong Sandals  ",
        price: 32,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1699,
    },
    {
        id: 19,
        image: "https://images.urbndata.com/is/image/Anthropologie/68463264_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Pilcro Tie-Up Thong Sandals",
        price: 35,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3499,
    },
    {
        id: 20,
        image: " https://images.urbndata.com/is/image/Anthropologie/68452002_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "  Pilcro Tie-Up Thong Sandals ",
        price: 65,
        strikedoffprice: 4999,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    },
    {
        id: 21,
        image: " https://images.urbndata.com/is/image/Anthropologie/66374158_000_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Pilcro Tie-Up Thong Sandals ",
        price: 45,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1499,
    },
    {
        id: 22,
        image: " https://images.urbndata.com/is/image/Anthropologie/67058594_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " Pilcro Tie-Up Thong Sandals ",
        price: 65,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 2299,
    },
    {
        id: 23,
        image: " https://images.urbndata.com/is/image/Anthropologie/67058594_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Pilcro Tie-Up Thong Sandals ",
        price: 65,
        strikedoffprice: 3599,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    },
    {
        id: 24,
        image: "https://images.urbndata.com/is/image/Anthropologie/67115014_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Birkenstock Siena Vegan Sandals",
        price: 35,
        strikedoffprice: 1299,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
    },
    {
        id: 25,
        image: " https://images.urbndata.com/is/image/Anthropologie/69433654_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: "Birkenstock Siena Vegan Sandals ",
        price: 74,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 4999,
    },
    {
        id: 26,
        image: " https://images.urbndata.com/is/image/Anthropologie/66737909_070_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349  ",
        name: " Sarto Frita Heel ",
        price: 32,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 4999,
    },
    {
        id: 27,
        image: "https://images.urbndata.com/is/image/Anthropologie/65566572_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349  ",
        name: " Tave Original Sandals ",
        price: 40,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 2799,
    },
    {
        id: 28,
        image: "https://images.urbndata.com/is/image/Anthropologie/68181247_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349 ",
        name: " SAm Jildie Heels",
        price: 33,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3499,
    },
    {
        id: 29,
        image: "https://images.urbndata.com/is/image/Anthropologie/67353219_011_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Pilcro Woven Leather Flat",
        price: 39,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 5599,
    },
    {
        id: 30,
        image: "https://images.urbndata.com/is/image/Anthropologie/67553727_010_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Pilcro Woven Leather Flat",
        price: 54,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,
    },
    {
        id: 31,
        image: "https://images.urbndata.com/is/image/Anthropologie/68184431_055_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Jeffery Heels",
        price: 440,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 3599,
    },
    {
        id: 32,
        image: "https://images.urbndata.com/is/image/Anthropologie/69430197_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Freedom Moses Bali Sandals",
        price: 250,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 9999,
    },
    {
        id: 33,
        image: "https://images.urbndata.com/is/image/Anthropologie/68442698_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Apl Logo Slide Sandals",
        price: 356,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1299,
    },
    {
        id: 34,
        image: "https://images.urbndata.com/is/image/Anthropologie/62519178_006_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "Pilcro Woven Leather Flat",
        price: 143,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 1299,
    },
    {
        id: 35,
        image: "https://images.urbndata.com/is/image/Anthropologie/66978487_015_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: " Freedom Moses DOts Sandals",
        price: 235,
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        strikedoffprice: 2499,
    },
    {
        id: 36,
        image: "https://images.urbndata.com/is/image/Anthropologie/69423507_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        name: "UGG L.A. Sun Sandals",
        hover_image: "https://images.urbndata.com/is/image/Anthropologie/65368508_066_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349",
        price: 115,
        strikedoffprice: 1799,
    },
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