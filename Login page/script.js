document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const themeToggle = document.getElementById("theme-toggle");
  const magneticContainer = document.querySelector(".magnetic-container");
  const magneticBtn = document.querySelector(".magnetic-btn");
  const loginBox = document.querySelector(".login-box");

  // ✅ Entrance animation for login box
  if (loginBox) {
    loginBox.classList.add("enter");
  }

  // ✅ Handle login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      alert(`Logged in successfully as: ${email}`);
      loginForm.reset();
    });
  }

  // ✅ Dark/Light mode toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      // Change icon
      if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
      } else {
        themeToggle.textContent = "🌙";
      }
    });
  }

  // ✅ Magnetic hover effect for login button
  if (magneticContainer && magneticBtn) {
    magneticContainer.addEventListener("mousemove", (e) => {
      const rect = magneticContainer.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const strength = 0.25; // adjust movement intensity
      magneticBtn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    magneticContainer.addEventListener("mouseleave", () => {
      magneticBtn.style.transform = "translate(0, 0)";
    });
  }
});
