document.addEventListener("DOMContentLoaded", function () {
    // Get references to the elements
    const openMenuButton = document.getElementById("openMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const toggleMenuButton = document.getElementById("toggleMenuButton");
    const openMenuIcon = document.getElementById("openMenuIcon");
    const closeMenuIcon = document.getElementById("closeMenuIcon");

    // Initial state of the menu (hidden)
    let menuOpen = false;

    // Open the mobile menu
    openMenuButton.addEventListener("click", function () {
        menuOpen = true;
        mobileMenu.style.display = "block"; // Show the mobile menu
        openMenuIcon.style.display = "none"; // Hide the open icon
        closeMenuIcon.style.display = "block"; // Show the close icon
    });

    // Toggle between opening and closing the menu
    toggleMenuButton.addEventListener("click", function () {
        menuOpen = !menuOpen;
        if (menuOpen) {
            mobileMenu.style.display = "block"; // Show the mobile menu
            openMenuIcon.style.display = "none"; // Hide the open icon
            closeMenuIcon.style.display = "block"; // Show the close icon
        } else {
            mobileMenu.style.display = "none"; // Hide the mobile menu
            openMenuIcon.style.display = "block"; // Show the open icon
            closeMenuIcon.style.display = "none"; // Hide the close icon
        }
    });
});
