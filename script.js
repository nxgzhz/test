const totalBoxes = 20;
const startYear = 1974;

const leftBox = document.getElementById("left-box");

const rightBox = document.getElementById("right-box");

function createBox(imageNumber, year) {
  const box = document.createElement("div");
  box.classList.add("box");

  const img = document.createElement("img");
  img.src = `img/img${imageNumber.toString().padStart(2, "0")}.png`;
  img.alt = `img${imageNumber}`;

  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const text = document.createElement("span");
  text.textContent = year;
  overlay.appendChild(text);

  box.appendChild(img);
  box.appendChild(colorBox);
  box.appendChild(overlay);

  return box;
}

for (let i = 1; i <= totalBoxes; i++) {
  const year = startYear + i - 1;
  const box = createBox(i, year);
  leftBox.appendChild(box);
}

for (let i = 1; i <= totalBoxes; i++) {
  const year = startYear + i - 1;
  const box = createBox(i, year);
  rightBox.appendChild(box);
}

function cloneBoxes() {
  const leftBoxes = leftBox.querySelectorAll(".box");
  const rightBoxes = rightBox.querySelectorAll(".box");

  leftBoxes.forEach((box) => {
    const clone = box.cloneNode(true);
    leftBox.appendChild(clone);
  });

  rightBoxes.forEach((box) => {
    const clone = box.cloneNode(true);
    rightBox.appendChild(clone);
  });
}

cloneBoxes();
