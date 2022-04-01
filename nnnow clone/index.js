var sephoradata=
    [
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/28-mar-2022/hp/29MAR22-SC-HP-BRANDSTORY.jpg"
        ,
    href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/28-mar-2022/hp/29MAR22-LANCOME-HP-BRANDSTORY.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/28-mar-2022/hp/29MAR22-ABH-HP-BRANDSTORY.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/28-mar-2022/hp/29MAR22-CLARINS-HP-BRANDSTORY.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/28-mar-2022/hp/29MAR22-FM-HP-BRANDSTORY.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/28-mar-2022/hp/29MAR22-Ruggers-HP-BRANDSTORY.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/28-mar-2022/hp/29MAR22-Shuffl-HP-BRANDSTORY.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/28-mar-2022/hp/29MAR22-Shuffl-HP-BRANDSTORY.jpg"
        , href:"#"},
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
    document.querySelector("#container").append(let);
    })

    var prdata=[  {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/26-mar-2022/hp/28MAR22-HP-TOP_TEES-DEAL.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/26-mar-2022/hp/28MAR22-HP-FOOTWEAR-DEAL.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/26-mar-2022/hp/28MAR22-HP-LINENSHIRTS-DEAL.jpg"
        , href:"#"},
        {
            image_url:"https://logan.nnnow.com/content/dam/nnnow-project/26-mar-2022/hp/28MAR22-HP-DENIM-DEAL.jpg"
        , href:"#"},
        ]
        prdata.map(function(elem){
        
        var box=document.createElement("a");
    box.href=elem.href;
    var img=document.createElement("img");
    img.src=elem.image_url;
    img.setAttribute("class","im36")
    box.append(img);
    var let=document.createElement("div");
    let.setAttribute("class","pro3")
    let.append(box);
    document.querySelector("#container2").append(let);
    })

var pricest=[{image_url:"https://logan.nnnow.com/content/dam/nnnow-project/25-feb-2022/hp/UNDER499.jpg",href:"#",},
{image_url:"https://logan.nnnow.com/content/dam/nnnow-project/25-feb-2022/hp/UNDER999.jpg",href:"#",},
{image_url:"https://logan.nnnow.com/content/dam/nnnow-project/25-feb-2022/hp/UNDER1499.jpg",href:"#",},]

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

    
    function myfunction(){
        var x=document.getElementById("search").value
        if(x==="Men"||"Mens"||"men"||"mens"){
        window.location.replace("/mens.html")
        }
        else if(x==="Women"||"women"||"Ladies"||"female"){
            window.location.replace("/women.html")
        }
        }
       
