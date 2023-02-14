window.onclick = (event) => {
    if (event.target.matches('.Navbar__Hamburger')) {
        document.querySelector('.Navbar__Menu').classList.toggle("Visible");
    } else {
        document.querySelector('.Navbar__Menu').classList.remove("Visible");
    }
}