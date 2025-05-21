let loginAttempts = 0;

function checkLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch("https://raw.githubusercontent.com/X-Faxz/X-RW.AlwaysFaxz/main/key.json")
    .then(res => res.json())
    .then(data => {
      const found = data.users.find(user => user.username === username && user.password === password);
      if (found) {
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('mainUI').style.display = 'block';
        setTimeout(() => {
          document.getElementById('loadingScreen').style.display = 'none';
        }, 3000);
      } else {
        loginAttempts++;
        document.getElementById('loginError').innerText = "Username atau password salah!";
        if (loginAttempts >= 3) {
          document.getElementById('helpLinks').style.display = 'block';
        }
      }
    });
}

function toggleServerList() {
  const list = document.getElementById("serverList");
  list.style.display = list.style.display === "block" ? "none" : "block";
}

function connect(server) {
  document.getElementById("connectionStatus").innerText = "Terhubung ke server " + server;
  document.getElementById("mlbbBtn").style.display = "block";
}

function loginMLBB() {
  alert("Login ke MLBB dilanjutkan!");
}