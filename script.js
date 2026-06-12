// Countdown to the World Cup opener vs Morocco (June 13, 2026)
const kickoff = new Date("2026-06-13T00:00:00-04:00");
function updateCountdown() {
  const diff = kickoff - new Date();
  const el = document.getElementById("countdown");
  if (diff <= 0) {
    el.textContent = "It's game time! Vai Brasil! 🇧🇷";
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  el.textContent = `${d}d ${h}h ${m}m until kickoff`;
}
updateCountdown();
setInterval(updateCountdown, 30000);

// Confetti in Brazil colors
let clicks = 0;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  clicks++;
  document.getElementById("count").textContent =
    `Torcida cheered ${clicks} time${clicks === 1 ? "" : "s"}! 📣`;
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

const colors = ["#ffdf00", "#009c3b", "#002776", "#ffffff"];

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
