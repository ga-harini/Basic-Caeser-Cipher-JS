const inputTextarea = document.getElementById("input");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const resultDiv = document.getElementById("result");

encryptBtn.addEventListener("click", encrypt);
decryptBtn.addEventListener("click", decrypt);

function encrypt() {
  const input = inputTextarea.value;
  const encrypted = encryptText(input);
  resultDiv.textContent = encrypted;
}

function decrypt() {
  const input = inputTextarea.value;
  const decrypted = decryptText(input);
  resultDiv.textContent = decrypted;
}

function encryptText(text) {
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    encrypted += String.fromCharCode(charCode + 3);
  }
  return encrypted;

}

function decryptText(text) {
  let decrypted = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    decrypted += String.fromCharCode(charCode - 3);
  }
  return decrypted;
}