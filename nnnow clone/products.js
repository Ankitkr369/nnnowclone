var mendata=[{image_url:"https://cdn18.nnnow.com/web-images/medium/styles/FEDIQ3JY4AP/1623855353238/1.jpg",
title:"Spring Summer 22",
title2: "Us.Polo Assn Denim Co.",
meta:"Men Mustard Crew Neck Bran Print Tshirt",
price: "Rs 909 (30%/off)",
button:"Buy Now",
},
{image_url:"https://cdn12.nnnow.com/web-images/medium/styles/LQG5N8RB48J/1613454938698/1.jpg",
title:"Online Exclusive",
title2: "Us.Polo Assn.",
meta:"Men Light Green Cotton Print Tshirt",
price: "Rs 649 (30%/off)",
button:"Buy Now",
},
{image_url:"https://cdn14.nnnow.com/web-images/medium/styles/5EZGCVZKUVH/1618810230778/1.jpg",
title:"Online Exclusive",
title2: "Us.Polo Assn.",
meta:"Men Off White Heathered Pique Polo Shirt",
price: " 1,099 (45% Off)",
button:"Buy Now",
},
{image_url:"https://cdn03.nnnow.com/web-images/medium/styles/EAIP40Q3NNQ/1629885010135/1.jpg",
title:"Online Exclusive",
title2: "U.S. Polo Assn. Denim Co.",
meta:"Men Dark Grey Crew Neck Colour Block T-Shirt",
price: " Rs 779 (40% Off)",
button:"Buy Now",
},
{image_url:"https://cdn08.nnnow.com/web-images/medium/styles/2SHL13NRTFH/1624904105838/1.jpg",
title:"OFFER",
title2: "Tommy Hilfiger",
meta:"Men Navy Mid Rise Rinsed Jeans",
price: " Rs 2999 (50% Off)",
button:"Buy Now",
},
{image_url:"https://cdn03.nnnow.com/web-images/medium/styles/G40X87RTEWO/1610965470780/1.jpg",
title:"SPRING SUMMER 22",
title2: "U.S. Polo Assn.",
meta:"Men Dark Olive Button Down Check Casual Shirt",
price: " Rs 2599 ",
button:"Buy Now",
},]

var cartdata=JSON.parse(localStorage.getItem("cart"))||[]

mendata.map(function(elem){

    var box=document.createElement("div");
    box.setAttribute("class","bitu39")
     
    var img=document.createElement("img");
    img.src=elem.image_url;
     
    var name=document.createElement("p");
    name.setAttribute("class","bitu369")
    name.textContent=elem.title;

    var name1=document.createElement("p");
    name1.setAttribute("class","bitu369")
    name1.textContent=elem.title2;

    var meta=document.createElement("p");
    meta.setAttribute("class","bitu369")
    meta.textContent=elem.meta;

    var price=document.createElement("p");
    price.setAttribute("class","bitu369")
    meta.textContent=elem.price;

    var btn=document.createElement("button")
    btn.setAttribute("class","bitu36")
    btn.innerText="Buy Now";

    btn.addEventListener("click",function(){
        addtocart(elem);
    })

    box.append(img,name,name1,meta,price,btn)

document.querySelector("#pro2").append(box);

});
function addtocart(elem){

    console.log(elem)
    cartdata.push(elem)
    localStorage.setItem("cart",JSON.stringify(cartdata))
    alert("Item Added TO Cart")

}
