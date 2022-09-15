// VARIABLES

const colorCopyBtn = document.querySelector(".container__count");
const hexElement = document.querySelector(".hex");
const generateBtn = document.querySelector(".generate");
const randomHexColor = `#${Math.random().toString(16).substring(2, 8)}`;

// FUNCTIONS

const generateRandomColor = () => {
  document.body.style.backgroundColor = randomHexColor;
  hexElement.innerHTML = randomHexColor;
};

const copyColorToClipboard = () => {
  navigator.clipboard.writeText(randomHexColor).then(
    function () {
      alert("Color code copied to clipboard");
      location.reload();
    },
    function (err) {
      console.error("Could not copy color code: ", err);
    }
  );
};

// EVENT LISTENERS

generateBtn.addEventListener("click", generateRandomColor);
colorCopyBtn.addEventListener("click", copyColorToClipboard);
