function updateDisplay() {
  const coin = localStorage.getItem("coin") || 0;
  document.getElementById("coinDisplay").textContent = coin;
}

function claimCoin() {
  const now = Date.now();
  const lastClaim = localStorage.getItem("lastClaim");
  if (!lastClaim || now - lastClaim > 86400000) { // 24 jam
    let coin = parseInt(localStorage.getItem("coin") || 0);
    coin += 100;
    localStorage.setItem("coin", coin);
    localStorage.setItem("lastClaim", now);
    alert("Klaim berhasil! Dapat 100 coin.");
  } else {
    alert("Sudah klaim hari ini! Tunggu 24 jam.");
  }
  updateDisplay();
}

function deposit() {
  alert("Deposit: Kirim ke DANA 08xxxxxxxx lalu hubungi admin.");
}

function withdraw() {
  const coin = parseInt(localStorage.getItem("coin") || 0);
  if (coin >= 1000) {
    alert("Penarikan sedang diproses. Hubungi admin.");
  } else {
    alert("Minimal penarikan 1000 coin.");
  }
}

function buyPackage() {
  alert("Paket aktif! Coin akan ditambahkan manual tiap hari oleh admin.");
}

updateDisplay();
