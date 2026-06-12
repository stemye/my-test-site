// Countdown to end of Season 29: Overclocked (Aug 4, 2026)
const seasonEnd = new Date("2026-08-04T17:00:00Z");
function updateCountdown() {
  const diff = seasonEnd - new Date();
  const el = document.getElementById("countdown");
  if (diff <= 0) {
    el.textContent = "Season 29 is over — see you next drop!";
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  el.textContent = `${d}d ${h}h ${m}m`;
}
updateCountdown();
setInterval(updateCountdown, 30000);

// Confetti in Apex colors
let clicks = 0;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  clicks++;
  document.getElementById("count").textContent =
    `${clicks} squad${clicks === 1 ? "" : "s"} dropped! 🪂`;
  burst();
});

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
addEventListener("resize", resize);
resize();

const colors = ["#da292a", "#ff4f1f", "#ffb400", "#ffffff", "#888"];

function burst() {
  for (let i = 0; i < 140; i++) {
    particles.push({
      x: innerWidth / 2,
      y: innerHeight / 3,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.9) * 15,
      size: Math.random() * 7 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      life: 1
    });
  }
}

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.life > 0);
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.25;
    p.vx *= 0.99;
    p.rot += p.vr;
    p.life -= 0.008;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = Math.max(p.life, 0);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    ctx.restore();
  }
  requestAnimationFrame(tick);
}
tick();

// Welcome burst
setTimeout(burst, 600);
