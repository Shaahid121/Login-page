const loginForm = document.getElementById("loginForm");
const themeToggle = document.getElementById("theme-toggle");

// Handle login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Logged in successfully as: ${email}`);
  loginForm.reset();
});

// Dark/Light mode toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
