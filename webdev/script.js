const a = document.querySelector(".msg");
const b = document.querySelector(".btn");
let i = document.querySelector(".icon");
let d = document.querySelector(".heartt");
let cr = document.querySelector(".crs");
let m = document.querySelector(".main");
let c = 0;
b.addEventListener("click", () => {
  if (c == 0) {
    a.innerHTML = "Liked";
    b.innerHTML = "Unlike";
    c = 1;
    d.style.fontSize = "10vh";
    setTimeout(() => {
      d.style.opacity = 0;
      d.style.fontSize = "0vh";
    }, 400);
    setTimeout(() => {
      d.style.opacity = 1;
      d.style.fontSize = "0vh";
    }, 400);
  } else {
    a.innerHTML = "Unliked";
    b.innerHTML = "Like";
    d.style.opacity = 1;
    c = 0;
  }
});
i.addEventListener("dblclick", () => {
  d.style.opacity = 1;
  d.style.fontSize = "10vh";
  a.innerHTML = "Liked";
  b.innerHTML = "Unlike";
  c = 1;
  setTimeout(() => {
    d.style.opacity = 0;
    d.style.fontSize = "0vh";
  }, 400);
  setTimeout(() => {
    d.style.opacity = 1;
    d.style.fontSize = "0vh";
  }, 500);
});
m.addEventListener("mousemove", (e) => {
  console.log(e.x, e.y);
  cr.style.top = e.y + "px";
  cr.style.left = e.x + "px";
});
