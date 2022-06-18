let navbar = () => {
    return `
         <div id="upper_nav">
           
        </div>
        <div id="mid_nav">
            <img src="./icon/globe-svgrepo-com.svg" alt="" id="globe">
            <p>English</p>
            <img src="../navbar/icon/user-profile-svgrepo-com.svg" alt="" id="user_pic">
            <p id="singMyAco"></p>
        </div>
        <div class="main_navbar">     
            <div id="lower_nav">
                <div id="logo">
                <a href="../Home/index.html">
                <img src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
                        alt="" id="main_logo"></a>
                <a href="../AnthrolivingHome/home.html">
                <img src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                        alt="" id="alt_logo"></a>


                    
                    
                </div>
                <div id="search">
                    <input type="search" placeholder="Search Anthropologie" id="search">
                    <!-- <i class="fa-solid fa-bag-shopping"></i> -->
                    <a href="../basket/basket.html">
                    <img src="../navbar/icon/bag-svgrepo-com.svg" alt="" id="bag_logo">
                    <span id="count">0</span></a>
                    
                </div>
            </div>
            <div id="category">
                <ul>
                    <li class = "li"> <a href="../productsPage/cloth.html"> New!</a></li>
                    <li class = "li"> <a href="../productsPage/dress.html"> Dresses </a></li>
                    <li class = "li"> <a href="../productsPage/cloth.html"> Clothing </a></li>
                    <li class = "li"> <a href="../productsPage/shoes.html"> Shoes </a></li>
                    <li class = "li"> <a href="../productsPage/cloth.html"> Accessories </a></li>
                    <li class = "li"> <a href="../productsPage/garden.html"> Gift & Candles </a></li>
                    <li class = "li"> <a href="../productsPage/garden.html"> Home & Furniture </a></li>
                    <li class = "li"> <a href="../productsPage/cloth.html"> Beauty & wellness </a></li>
                    <li class = "li"> <a href="../productsPage/garden.html"> Garden & Outdoor </a></li>
                    <li class = "li"> <a href="../productsPage/dress.html"> Weddings </a></li>
                    <li class = "li"> <a href="../productsPage/cloth.html"> Sale </a></li>
                </ul>
            </div>
            <div id="drop_downs">
                <div id="content">
                    <div id="left">
                        <div id="left_content">
                            <h3 class="title">Shop By Category </h3>
                            <a href="../productsPage/cloth.html">Accessories</a>
                            <a href="../productsPage/dress.html">Beauty & Wellness</a>
                            <a href="../productsPage/cloth.html">Clothing </a>
                            <a href="../productsPage/dress.html">Dresses</a>
                             <a href="../productsPage/garden.html">Home Fruniture</a>
                            <a href="../productsPage/shoes.html">Plus</a>
                            <a href="../productsPage/shoes.html">Shoe</a>
                        </div>
                        
                    </div>
                    <div id="right">
                        <div id="left02">
                            <h3 class="title">featured</h3>
                            <a href="">Mark D.Sikes</a>
                            <a href="">The Ethereal Edit: White Clothing, Shoes & More</a>
                            <a href="">How To Style Scarves</a>
                            <a href="">The 90s Shop</a>
                        </div>
                        <div id="right02">
                            <img src="https://images.ctfassets.net/5de70he6op10/2SeKYBtUmynzKkUXudIm2q/7a8841d396011306d04d226a13164716/061322_BrandSpotlight_FarmRio_Supernav_NEW.jpg?w=295&q=80&fm=webp"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default navbar