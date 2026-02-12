document.getElementById("no").addEventListener("mouseover", function() {
  const btn = document.getElementById("no");
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 90 + "%";
  btn.style.left = Math.random() * 90 + "%";
});

document.getElementById("yes").addEventListener("click", function() {
  alert("Yay! You made my day! 💕");
});
