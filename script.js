// Toggle mode antara light dan dark
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Simpan preferensi ke localStorage
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// Saat halaman dimuat, cek preferensi yang disimpan
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
});
