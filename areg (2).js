const areg = document.querySelector(".small");
let a = "X";
debugger;
document.querySelector(".big").onclick = (event) => {
  if (!event.target.classList.contains("small")) return;
  if (event.target.classList.contains("small")) event.target.textContent = a;

  while (true) {
    if (event.target.textContent === "X") {
      a = "O";
    } else {
      a = "X";
    }
    break;
  }
  if (
    (document.querySelector(".small.one").textContent === "X" &&
      document.querySelector(".small.twu").textContent === "X" &&
      document.querySelector(".small.tree").textContent === "X") ||
    (document.querySelector(".small.four").textContent === "X" &&
      document.querySelector(".small.five").textContent === "X" &&
      document.querySelector(".small.sex").textContent === "X") ||
    (document.querySelector(".small.seven").textContent === "X" &&
      document.querySelector(".small.ete").textContent === "X" &&
      document.querySelector(".small.nine").textContent === "X") ||
    (document.querySelector(".small.one").textContent === "X" &&
      document.querySelector(".small.four").textContent === "X" &&
      document.querySelector(".small.seven").textContent === "X") ||
    (document.querySelector(".small.twu").textContent === "X" &&
      document.querySelector(".small.five").textContent === "X" &&
      document.querySelector(".small.ete").textContent === "X") ||
    (document.querySelector(".small.tree").textContent === "X" &&
      document.querySelector(".small.sex").textContent === "X" &&
      document.querySelector(".small.nine").textContent === "X") ||
    (document.querySelector(".small.one").textContent === "X" &&
      document.querySelector(".small.five").textContent === "X" &&
      document.querySelector(".small.nine").textContent === "X") ||
    (document.querySelector(".small.tree").textContent === "X" &&
      document.querySelector(".small.five").textContent === "X" &&
      document.querySelector(".small.seven").textContent === "X") || //
    (document.querySelector(".small.one").textContent === "O" &&
      document.querySelector(".small.twu").textContent === "O" &&
      document.querySelector(".small.tree").textContent === "O") ||
    (document.querySelector(".small.four").textContent === "O" &&
      document.querySelector(".small.five").textContent === "O" &&
      document.querySelector(".small.sex").textContent === "O") ||
    (document.querySelector(".small.seven").textContent === "O" &&
      document.querySelector(".small.ete").textContent === "O" &&
      document.querySelector(".small.nine").textContent === "O") ||
    (document.querySelector(".small.one").textContent === "O" &&
      document.querySelector(".small.four").textContent === "O" &&
      document.querySelector(".small.seven").textContent === "O") ||
    (document.querySelector(".small.twu").textContent === "O" &&
      document.querySelector(".small.five").textContent === "O" &&
      document.querySelector(".small.ete").textContent === "O") ||
    (document.querySelector(".small.tree").textContent === "O" &&
      document.querySelector(".small.sex").textContent === "O" &&
      document.querySelector(".small.nine").textContent === "O") ||
    (document.querySelector(".small.one").textContent === "O" &&
      document.querySelector(".small.five").textContent === "O" &&
      document.querySelector(".small.nine").textContent === "O") ||
    (document.querySelector(".small.tree").textContent === "O" &&
      document.querySelector(".small.five").textContent === "O" &&
      document.querySelector(".small.seven").textContent === "O")
  ) {
    alert("GAME OVER");
    for (let box of document.querySelector(".big").children) {
      box.textContent = undefined;
    }
  }
};
