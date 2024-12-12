const TEXT_ARRAY = [
  "Magic Bus India",
  "We make students,",
  "Stable and Independent",
  "By providing",
  " Mentorship programs",
  " Activity-based learning",
  " Foster confidence",
  " Resilience",
  " Decision-making skills",
];
const text = document.getElementById("text-container");

async function delayer(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, delay);
  });
}

async function wordAdder(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      text.innerText = text.innerText + word;
      resolve("done");
    }, 200);
  });
}

async function wordRemover(reducingIndex) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      text.innerText = text.innerText.slice(0, reducingIndex);
      resolve("done");
    }, 50);
  });
}

async function writer(string) {
  for (let word of string) {
    await wordAdder(word);
  }
}
async function eraser(string) {
  for (let i = string.length; i >= 0; i--) {
    await wordRemover(i);
  }
}

async function executer() {
  let i = 0;
  while (i < TEXT_ARRAY.length) {
    for (let content of TEXT_ARRAY) {
      await writer(content);
      await delayer(2000);
      await eraser(content);
    }
    i++;
    if (i > TEXT_ARRAY.length) {
      i = 0;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  executer();
});
