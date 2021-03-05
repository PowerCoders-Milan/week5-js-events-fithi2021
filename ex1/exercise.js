// define your functions here

// call the functions and connect them to an event

var link = document.querySelector("a"); 
var strongs = document.querySelectorAll("strong");

link.addEventListener("mouseover" ,function(){
    strongs.forEach(function(item){
        item.style.color = "yellow";
    })
});

link.addEventListener("mouseleave",function(){
    strongs.forEach(function(item){
        item.style.color = "black";
    })
})

/*
function changeColor(){
    strongs.forEach(function(item){
        item.style.color = "red";
    })
}
*/



/*
link.removeEventListener("mouseleave" ,changeBack);
function changeBack(){
    strongs.forEach(function(){
        item.style.backgroundColor ="black"
    })
}
*/





/*
document.getElementById("s1").addEventListener("mouseover",mouseover);
document.getElementById("s1").addEventListener("mouseout",mouseout);

document.getElementById("s2").addEventListener("mouseover",mouseover);
document.getElementById("s2").addEventListener("mouseout",mouseout);

document.getElementById("s3").addEventListener("mouseover",mouseover);
document.getElementById("s3").addEventListener("mouseout",mouseout);

function mouseover(){
    document.getElementById("s1").style.color = "red";
    document.getElementById("s2").style.color = "red";
    document.getElementById("s3").style.color = "red";


}
function mouseout(){
    document.getElementById("s1").style.color = "black";
    document.getElementById("s2").style.color = "black";
    document.getElementById("s3").style.color = "black";

}
*/

