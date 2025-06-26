(function () {
  const obfuscatedData = "VSBSIGNsb3NlLCBsb29rIGJldHRlciA6KQ==";
  const wallet = atob(obfuscatedData);

  const uselessData = atob("YmMxcWo1dno2c2M3bjkweWxxMzkzaDlraHNhOGVzc3J5eWxqNjVmdmRt");

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("wallet-address").innerText = wallet;
  });Add commentMore actions
})();