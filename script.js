const pages = document.querySelectorAll(".page");
const tabs = document.querySelectorAll(".tab");
const navTriggers = document.querySelectorAll("[data-nav]");

function showPage(id) {
  const target = id.replace(/^#/, "");
  pages.forEach((page) => {
    page.classList.toggle("is-active", page.id === target);
  });
  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.nav === target);
  });
  if (history.replaceState) {
    history.replaceState(null, "", `#${target}`);
  } else {
    location.hash = target;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navTriggers.forEach((el) => {
  el.addEventListener("click", (event) => {
    const id = el.dataset.nav;
    if (!id) return;
    if (el.tagName === "A" && el.getAttribute("href")?.startsWith("#")) {
      event.preventDefault();
    }
    if (el.tagName === "BUTTON") {
      event.preventDefault();
    }
    showPage(id);
  });
});

const initial = (location.hash || "#home").slice(1);
showPage(["home", "music", "erp", "about"].includes(initial) ? initial : "home");

window.addEventListener("hashchange", () => {
  const id = (location.hash || "#home").slice(1);
  if (["home", "music", "erp", "about"].includes(id)) showPage(id);
});
