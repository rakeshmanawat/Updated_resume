

// ===== Resume Download Function =====
function downloadPDF() {
  const resume = document.body;
  const opt = {
    margin: 0.5,
    filename: 'Rakesh_Manawat_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(resume).save();
}

// ===== Active Navigation Highlight =====
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); // e.g. "home.html"
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
      link.classList.add("active-link");
    }
  });
});
