document.getElementById("date").textContent = new Date().toLocaleDateString();

let clicks = 0;
document.getElementById("btn").addEventListener("click", () => {
  clicks++;
  document.getElementById("count").textContent = `Clicked ${clicks} time${clicks === 1 ? "" : "s"}`;
});
