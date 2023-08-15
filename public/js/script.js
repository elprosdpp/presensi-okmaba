// SDPP COMPOSE 2023 @elprosdpp

// Select DOM elements
const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const showBottom = document.getElementById("showBottom");
const hideBottom = document.getElementById("hideBottom");
const sheetOpen = document.getElementById("sheetOpen");
const showText = document.getElementById("showText");
const burger = document.getElementById("burger");
const cross = document.getElementById("cross");
const navBar = document.getElementById("navbar-default");
const sheetOverlay = bottomSheet?.querySelector(".sheet-overlay");
const sheetContent = bottomSheet?.querySelector(".content");
const dragIcon = bottomSheet?.querySelector(".drag-icon");

// Global variables for tracking drag events
// let isDragging = false,
//   startY,
//   startHeight;

// Show the bottom sheet, hide body vertical scrollbar, and call updateSheetHeight
const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`; //updates the height of the sheet content
  // Toggles the fullscreen class to bottomSheet if the height is equal to 100
  bottomSheet.classList.toggle("fullscreen", height === 100);
};

const showBottomSheet = () => {
  bottomSheet.classList.add("show");
  document.body.style.overflowY = "hidden";
  hideBottom.classList.remove("hideBottom");
  sheetOpen.classList.remove("sheetOpen");
  showText.style.display = "none";
  navBar.classList.add("hidden");
  closeNavWhenOpen();
  if (updateSheetHeight(75)) {
    showBottom.style.display = "block";
  } else {
    showBottom.style.display = "none";
  }
};

// Hide the bottom sheet and show body vertical scrollbar
const hideBottomSheet = () => {
  //   bottomSheet.classList.remove("show");
  document.body.style.overflowY = "auto";
  hideBottom.classList.add("hideBottom");
  sheetOpen.classList.add("sheetOpen");
  showText.style.display = "block";
  navBar.classList.add("hidden");
  closeNavWhenOpen();
  if (updateSheetHeight(30)) {
    showBottom.style.display = "none";
  } else {
    showBottom.style.display = "block";
  }
};

// Open NavMenu
const navMenu = () => {
  navBar.classList?.toggle("hidden");
  burger.classList?.toggle("hidden");
  cross.classList?.toggle("hidden");
};

// Close Navbar Menu When BottomSheet Click
const closeNavWhenOpen = () => {
  burger.classList.remove("hidden");
  cross.classList?.add("hidden");
};

// Hide Navbar
const hideNavbarMenu = () => {
  if (!navBar.classList.contains("hidden")) {
    navBar.classList.add("hidden");
    burger.classList.toggle("hidden");
    cross.classList.toggle("hidden");
  }
};

// Ketika Overlay Klik Element di Hidden
sheetOverlay?.addEventListener("click", hideBottomSheet);
sheetOverlay?.addEventListener("click", hideNavbarMenu);

// Sets initial drag position, sheetContent height and add dragging class to the bottom sheet
// const dragStart = (e) => {
//   isDragging = true;
//   startY = e.pageY || e.touches?.[0].pageY;
//   startHeight = parseInt(sheetContent.style.height);
//   bottomSheet.classList.add("dragging");
// };

// Calculates the new height for the sheet content and call the updateSheetHeight function
// const dragging = (e) => {
//   if (!isDragging) return;
//   const delta = startY - (e.pageY || e.touches?.[0].pageY);
//   const newHeight = startHeight + (delta / window.innerHeight) * 100;
//   updateSheetHeight(newHeight);
// };

// Determines whether to hide, set to fullscreen, or set to default
// height based on the current height of the sheet content
// const dragStop = () => {
//   isDragging = false;
//   bottomSheet.classList.remove("dragging");
//   const sheetHeight = parseInt(sheetContent.style.height);
//   sheetHeight < 25
//     ? ""
//     : sheetHeight > 75
//     ? updateSheetHeight(85)
//     : updateSheetHeight(50);
// };

// dragIcon.addEventListener("mousedown", dragStart);
// document.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

// dragIcon.addEventListener("touchstart", dragStart);
// document.addEventListener("touchmove", dragging);
// document.addEventListener("touchend", dragStop);

// sheetOverlay.addEventListener("click", hideBottomSheet);
// showModalBtn.addEventListener("click", showBottomSheet);

// Clock
