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
    const designImages = document.querySelectorAll("#design-work li img"); // Select only images in design-work
    const modal = document.createElement("div");
    modal.id = "image-modal";
    modal.innerHTML = `
        <div id="modal-overlay"></div>
        <div id="modal-content">
            <span id="close-modal">&times;</span>
            <img id="modal-img" src="" alt="Full-size image">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById("modal-img");
    const modalOverlay = document.getElementById("modal-overlay");
    const closeModal = document.getElementById("close-modal");

    designImages.forEach(image => {
        image.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = image.src;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modalOverlay.addEventListener("click", () => {
        modal.style.display = "none";
    });
});


