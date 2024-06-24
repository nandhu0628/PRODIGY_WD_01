const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const logo = document.querySelector(".logo");
const contactBtn = document.getElementById("contactBtn");
const servicesBtn = document.getElementById("servicesBtn");
const modal = document.getElementById("servicesModal");
const closeModal = document.getElementById("closeModal");


// Toggle navigation menu on hamburger click
hamburger.addEventListener("click", () => {
  navigation.classList.toggle("show");
});


// Open side panel on contact button click
contactBtn.addEventListener("click", () => {
  openNav();
});

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}
// Change navigation background color on scroll
window.addEventListener('scroll', () => {
  const container = document.querySelector('.container');
  if (window.scrollY > 50) {
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  } else {
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }
});


// Show the modal when the "Services" button is clicked
servicesBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Hide the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}