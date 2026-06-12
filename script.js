document.getElementById("date").textContent = new Date().toLocaleDateString();

// Click counter
let clicks = 0;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  clicks++;
  document.getElementById("count").textContent =
    `Confetti launched ${clicks} time${clicks === 1 ? "" : "s"}`;
  burst();
});

// Confetti
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
addEventListener("resize", resize);
resize();

const colors = ["#ffd166", "#ef476f", "#06d6a0", "#118ab2", "#f4a261", "#fff"];

function burst() {
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: innerWidth / 2,
      y: innerHeight / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.9) * 14,
      size: Math.random() * 6 + 3,
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
    p.vy += 0.25;          // gravity
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
