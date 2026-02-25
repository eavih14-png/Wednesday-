function criarChuva(listaEmojis, quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");

        emoji.innerText = listaEmojis[Math.floor(Math.random() * listaEmojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = (Math.random() * 3 + 3) + "s";
        emoji.style.fontSize = (Math.random() * 20 + 20) + "px";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }
}

function respostaNao() {
    criarChuva(["😿","😢"], 120); // mais de 100
}

function respostaSim() {
    criarChuva(["🌷","🌹","💐","💓","❤️"], 120);
}