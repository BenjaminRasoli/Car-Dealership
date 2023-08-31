let styles = document.body.style;

function test() {
  document.querySelector("#loader").style.display = "none";
  styles.visibility = "visible";
  styles.background = "white";
  styles.overflow = "visible";
}
document.onreadystatechange = function () {
  styles.background = "#192332";
  if (
    (window.location.href ===
      "http://127.0.0.1:5500/src/kontakt.html#contactimageid",
    "https://benjaminrasoli.github.io/Car-Dealership/src/kontakt.html#contactimageid")
  ) {
  } else {
    window.scrollTo(0, 0);
  }
  if (document.readyState !== "complete") {
    styles.visibility = "hidden";
    styles.overflow = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    setTimeout(test, 1000);
  }
};
