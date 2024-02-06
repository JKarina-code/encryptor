const text = document.getElementById("encryptMessage");
const copy = document.getElementById("buttonCopy");
document.getElementById("encrypt").addEventListener("click", () => {
  let textInput = document.getElementById("messageInput").value;
  const validText = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&#<>])/gm.test(textInput);

  if (!validText && textInput.length > 0) {
    const keyText = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

    textInput = textInput.replace(/e|i|a|o|u/gm, (match) => keyText[match]);
    removeAlert();
    showResult();
    text.textContent = textInput;
  } else {
    showAlert();
  }
});

document.getElementById("decrypt").addEventListener("click", () => {
  let textInput = document.getElementById("messageInput").value;

  const validText = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(textInput);
  if (!validText && textInput.length > 0) {
    const keyText = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };

    textInput = textInput.replace(
      /enter|imes|ai|ober|ufat/gm,
      (match) => keyText[match]
    );
    removeAlert();
    showResult();
    text.textContent = textInput;
  } else {
    showAlert();
  }
});

const showResult = () => {
  document.getElementById("containerMessage").style.display = "none";
  document.getElementById("buttonCopy").style.display = "block";
};

const showAlert = () => {
  document.getElementById("messageInput").classList.add("text__decrypt__alert");
  document.querySelector(".main__alert").classList.add("main__alert--show");
};

const removeAlert = () => {
  document
    .getElementById("messageInput")
    .classList.remove("text__decrypt__alert");
  document.querySelector(".main__alert").classList.remove("main__alert--show");
};

copy.addEventListener("click", () => {
  let copiedText = text.textContent;
  navigator.clipboard.writeText(copiedText).then(() => {
    copy.textContent = "Copied!";
    copy.classList.add("copied");

    window.setTimeout(() => {
      (copy.textContent = "Copy"), copy.classList.remove("copied");
      document.getElementById("messageInput").value = "";
    }, 1000);
  });
});
