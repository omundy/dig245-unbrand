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

console.log("Spotify is a digital music, podcast, and video streaming service that provides access to millions of songs and other content from creators around the world! Sounds good, right! But However all of these cool features are actually fully enjoyed by people who pay a starting price of $11.99 per month, which we think is relatively expensive! Furthermore, Spotify really works hard to make your experience as awful as possible if you are not a premium user(paying user). Unskipable ads every 5 songs, no song rewinding, limited skips per playlist, you name it and spotify has actually done it! It is pretty unusable to non-paying customers which is totally the opposite of their tag line: 'Music for everyone'. We came to a conclusion, that actually Spotify's tag line should be 'Music NOT for everyone'.");