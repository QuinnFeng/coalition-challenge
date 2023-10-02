const tabs = document.querySelectorAll("[data-target]");
const mountainsTab = document.querySelector("#mountainsTab");
const active = "active";
const mountains = document.querySelectorAll(".mountain");

mountainsTab.addEventListener("click", function (event) {
  const clickedTab = event.target;
  if (clickedTab.dataset.target === undefined) {
    return;
  }
  tabs.forEach((tab) => {
    const target = tab.dataset.target;
    const mountainEle = document.getElementById(target);
    const isActive = tab === clickedTab;
    tab.classList.toggle(active, isActive);
    mountainEle.classList.toggle(active, isActive);
  });
});

const accordionButtons = document.querySelectorAll("button[aria-expanded]");
function toggleAccordion({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true";
  target.setAttribute("aria-expanded", !expanded);
}
for (let button of accordionButtons) {
  button.addEventListener("click", toggleAccordion);
}
