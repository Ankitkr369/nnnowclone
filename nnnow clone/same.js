document.getElementById("button").addEventListener("click",function(){
    document.querySelector(".popup").style.display="flex";
    
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})

var userdata=JSON.parse(localStorage.getItem("usercreds"))||[];



document.getElementById("bitu1").addEventListener("click",function(){
    document.querySelector(".popup1").style.display="flex";

    event.preventDefault();
    var userobj={
    name: document.querySelector("#name1").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
    phone: document.querySelector("#phno").value,
    }
    userdata.push(userobj)
    
    localStorage.setItem("usercreds",JSON.stringify(userdata))
    
    document.querySelector(".popup").style.display="none";
    document.querySelector(".popup1").style.display="none";
    document.querySelector(".popup2").style.display="none";
var x= document.querySelector("#name1").value
    document.querySelector("#button").innerText= x



})
 
var reguser= JSON.parse(localStorage.getItem("usercreds"));


 document.getElementById("bitu").addEventListener("click",function(){

    if(reguser==null){reguser=[{name:"Ankit",email:"akankit4731@gmail.com",password:"7209608011",mobile:"7903693930"}]}
     
     for(i=0;i<reguser.length;i++)
     {
         
         var enteremail=document.getElementById("useremail").value;
         console.log(reguser[i].email);
         if(reguser[i].email===enteremail){
             document.getElementById("popup2").style.display="flex"
             document.querySelector(".close2").addEventListener("click",function(){
                document.querySelector(".popup2").style.display="none";
                document.querySelector(".popup1").style.display="none";
                
            })
         }
         else{
            document.getElementById("popup1").style.display="flex"
            document.querySelector(".close1").addEventListener("click",function(){
                document.querySelector(".popup1").style.display="none";
            })
         }
     }
 })
 document.querySelector("#bitu2").addEventListener("click",function(){
    document.querySelector(".close2").addEventListener("click",function(){
        document.querySelector(".popup2").style.display="none";
    })
    
    for(i=0;i<reguser.length;i++)
    {
        var enterpass=document.getElementById("passw").value;
   if(reguser[i].password==enterpass){alert("Login Success");
   document.querySelector(".popup").style.display="none";
   document.querySelector(".popup1").style.display="none";
   document.querySelector(".popup2").style.display="none";
   document.querySelector("#button").innerText=reguser[i].name;
   break;
}
else{
    alert("wrong password");break;
}
 }
        
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
   
