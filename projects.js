play_warships = document.getElementById("play-warships");

async function add_game_iframe_to_content() {
    content.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.src = "/ShipGirlGame/index.html";
    iframe.title = "ShipGirlGame";
    iframe.scrolling = "no";
    iframe.height = "1000px";
    content.appendChild(iframe);
}

play_warships.addEventListener('click',add_game_iframe_to_content);
