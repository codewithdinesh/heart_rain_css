function Rain() {
    const heart = document.createElement('div');
    heart.innerText = "💜";
    heart.style.right = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 4 + "s";
    heart.classList.add("heart");
    setTimeout(()=>{
        heart.remove();
    },5300)
    document.body.appendChild(heart);
}
setInterval(Rain, 125);
