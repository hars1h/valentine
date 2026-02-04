const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 60;
  const y = Math.random() * 60;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#ffd1dc;
      font-family:'Segoe UI',sans-serif;
      text-align:center;
    ">
      <h1>Yayyy! 💖<br>You made my day 😍</h1>
    </div>
  `;
});
