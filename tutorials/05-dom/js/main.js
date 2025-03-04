

document.querySelector("#image-1").addEventListener("click", function(){
    document.querySelector("#image-2").style.visibility = "visible";
    alert("Snap!");
})

document.querySelector("#image-2").addEventListener("click", function(){
    document.querySelector("#image-3").style.visibility = "visible";
    document.querySelector("#image-1").style.visibility = "visible";
})

document.querySelector("#image-3").addEventListener("click", function(){
    document.querySelector("#image-4").style.visibility = "visible";
})

document.querySelector("#image-4").addEventListener("click", function(){
    document.querySelector("#image-1").style.visibility = "hidden";
    alert("Danger! Click Elephant to Revive!");
})





