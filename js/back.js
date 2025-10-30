document.addEventListener("DOMContentLoaded", function() {
  const backLink = document.getElementById("back-link");
  if (backLink) {
    backLink.addEventListener("click", function() {
      history.back();
    });
  }
});
