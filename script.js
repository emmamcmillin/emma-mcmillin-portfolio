document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('#nav-bar');

    // Check if elements exist before adding event listener
    if (menuToggle && navBar) {
        menuToggle.addEventListener('click', () => {
            navBar.classList.toggle('active'); // Toggle the 'active' class on click
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#highlighted-work img, #design-work img"); // Select images within Highlighted Works
    let currentIndex = 0; // Track the currently displayed image
    const imageSources = [...images].map(img => img.src); // Store all image sources in an array

    // Create the modal structure
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.innerHTML = `
        <div id="modal-overlay"></div>
        <div id="modal-content">
            <span id="close-modal">&times;</span>
            <button id="prev-btn">&#10094;</button>
            <img id="modal-img" src="" alt="Full-size image">
            <button id="next-btn">&#10095;</button>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById("modal-img");
    const closeModal = document.getElementById("close-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function showImage(index) {
        currentIndex = index;
        modalImg.src = imageSources[currentIndex];
        modal.style.display = "flex";
    }

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            showImage(index);
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modalOverlay.addEventListener("click", () => {
        modal.style.display = "none";
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        modalImg.src = imageSources[currentIndex];
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        modalImg.src = imageSources[currentIndex];
    });

    // Close modal when pressing ESC key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        } else if (event.key === "ArrowLeft") {
            prevBtn.click();
        } else if (event.key === "ArrowRight") {
            nextBtn.click();
        }
    });
});