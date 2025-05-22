
let attempts = 0;
const maxAttempts = 3;
const usersURL = "https://raw.githubusercontent.com/X-Faxz/X-RW.AlwaysFaxz/main/key.json";

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("login-container").style.display = "block";
  }, 3000);
};

async function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  const res = await fetch(usersURL);
  const data = await res.json();
  const valid = data.users.some(user => user.username === u && user.password === p);

  if (valid) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    attempts++;
    document.getElementById("login-error").innerText = "Username/Password salah.";
    if (attempts >= maxAttempts) {
      window.open("https://wa.me/62895370384561?text=AlwaysFaxz", "_blank");
    }
  }
}

function connect(server) {
  alert("Menghubungkan ke server: " + server);
  document.getElementById("mlbb-btn").style.display = "block";
}

function loginMLBB() {
  window.open("https://mlbb-login.fakeurl", "_blank");
}
