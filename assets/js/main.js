document.getElementById("hover-effect").addEventListener("mouseover", ()=>{

    document.getElementById("paidify-text").classList.add("display");
    document.getElementById("music-not-everyone").classList.add("display");
    document.getElementById("img4").classList.add("display");
    document.getElementById("img5").classList.add("display");
    document.getElementById("cross-line").classList.add("display");

    document.getElementById("music-everyone").classList.add("hide");
    document.getElementById("img1").classList.add("image-fade");
    document.getElementById("img2").classList.add("hide");
    document.getElementById("img3").classList.add("hide");
    
})

document.getElementById("hover-effect").addEventListener("mouseout", ()=>{

    document.getElementById("paidify-text").classList.remove("display");
    document.getElementById("music-not-everyone").classList.remove("display");
    document.getElementById("img4").classList.remove("display");
    document.getElementById("img5").classList.remove("display");
    document.getElementById("cross-line").classList.remove("display");


    document.getElementById("music-everyone").classList.remove("hide");
    document.getElementById("img1").classList.remove("image-fade");
    document.getElementById("img2").classList.remove("hide");
    document.getElementById("img3").classList.remove("hide");
    
})