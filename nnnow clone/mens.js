var sephoradata=
    [
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/T-Shirts.jpg"
        ,
    href:"products.html"},
    {
        image_url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Jeans.jpg"
    ,
href:"products.html"},
    {
        image_url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Shirts.jpg"
    , href:"products.html"},
    {
        image_url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Trousers_Shorts.jpg"
    ,
href:"products.html"},
    
{
        image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Athleisure.jpg"
    , href:"products.html"},
    {
        image_url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Shoes.jpg"
    ,
href:"products.html"},
    {
        image_url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Jackets.jpg"
    , href:"products.html"},
    {
        image_url:"https://logan.nnnow.com/content/dam/nnnow-project/10-oct-2021/mlp/Perfumes_.jpg"
    ,
href:"products.html"},
    {
        image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/INNERWEAR.jpg"
    , href:"products.html"},
       
    ]

    sephoradata.map(function(elem){
        
        var box=document.createElement("a");
    box.href=elem.href;
    var img=document.createElement("img");
    img.src=elem.image_url;
    img.setAttribute("class","im36")
    box.append(img);
    var let=document.createElement("div");
    let.setAttribute("class","pro3")
    let.append(box);
    document.querySelector("#container3").append(let);
    })

    var pricest=[{image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Prints.jpg",href:"products.html",},
    {image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Tropicalpradise.jpg",href:"products.html",},
    {image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Linen.jpg",href:"products.html",},]
    
    pricest.map(function(elem){
            
            var box=document.createElement("a");
        box.href=elem.href;
        var img=document.createElement("img");
        img.src=elem.image_url;
        img.setAttribute("class","im39")
        box.append(img);
        var let=document.createElement("div");
        let.setAttribute("class","pro36")
        let.append(box);
        document.querySelector("#container4").append(let);
        })
        var lat=[{image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/USPA.jpg",href:"products.html",},
        {image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/Arrow.jpg",href:"products.html",},
        {image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/FM_.jpg",href:"products.html",},]
        
        lat.map(function(elem){
                
                var box=document.createElement("a");
            box.href=elem.href;
            var img=document.createElement("img");
            img.src=elem.image_url;
            img.setAttribute("class","im39")
            box.append(img);
            var let=document.createElement("div");
            let.setAttribute("class","pro36")
            let.append(box);
            document.querySelector("#container5").append(let);
            })
            var sat=[{image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/COUNTRYCLUBBER.jpg",href:"products.html",},
            {image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/FUNTEES.jpg",href:"products.html",},
            {image_url:"https://logan.nnnow.com/content/dam/nnnow-project/30-mar-2022/mlp/CANARYYELLOW.jpg",href:"products.html",},]
            
            sat.map(function(elem){
                    
                    var box=document.createElement("a");
                box.href=elem.href;
                var img=document.createElement("img");
                img.src=elem.image_url;
                img.setAttribute("class","im39")
                box.append(img);
                var let=document.createElement("div");
                let.setAttribute("class","pro36")
                let.append(box);
                document.querySelector("#container6").append(let);
                })
    


