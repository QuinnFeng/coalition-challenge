const tabs = document.querySelectorAll("[data-target]");
const mountainsTab = document.querySelector("#mountainsTab");
const active = "active";
const carouselIndicators = document.querySelector(".carousel-indicators");
const indicators = document.querySelectorAll("[data-slide-to]");
let currentCarouselIndex = 0;

mountainsTab.addEventListener("click", function (event) {
  const clickedTab = event.target;
  // if (clickedTab.dataset.target === undefined) {
  //   return;
  // }
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

carouselIndicators.addEventListener("click", function (event) {
  const clickedTarget = event.target;
  indicators.forEach((indicator) =>
    toggleActiveCarouselItem(indicator, clickedTarget)
  );
});

function toggleActiveCarouselItem(indicator, targetElem) {
  const target = indicator.dataset.slideTo;
  currentCarouselIndex = +target;
  const carouselItem = document.getElementById(`carousel-item-${target}`);
  const isActive = indicator === targetElem;
  indicator.classList.toggle(active, isActive);
  carouselItem.classList.toggle(active, isActive);
}

const indicatorsArray = [...indicators];
function toggleCarouselItem() {
  let currentIndicator = indicatorsArray[currentCarouselIndex];
  const carouselItem = document.getElementById(
    `carousel-item-${currentCarouselIndex}`
  );
  currentIndicator.classList.toggle(active, true);
  carouselItem.classList.toggle(active, true);
  currentCarouselIndex = (currentCarouselIndex + 1) % indicatorsArray.length;

  setTimeout(() => {
    currentIndicator.classList.toggle(active, false);
    carouselItem.classList.toggle(active, false);
    // Update current and next indicators for the next cycle
  }, 5000);
}

setInterval(toggleCarouselItem, 5000);
