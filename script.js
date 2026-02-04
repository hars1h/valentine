function yesClick() {
    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            font-size:32px;
            font-family:Arial;
            background:#f7c6d0;
        ">
            ❤️ Yayyy! You made my day ❤️
        </div>
    `;
}

function moveNo() {
    const btn = document.querySelector('.no');
    btn.style.left = Math.random() * 250 + "px";
    btn.style.top = Math.random() * 40 + "px";
}
