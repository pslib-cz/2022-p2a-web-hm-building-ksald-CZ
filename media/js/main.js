window.onclick = (event) => {
    if (event.target.matches('.hamburger')) {
        document.querySelector('.navbar__menu').classList.toggle("visible");
    } else {
        document.querySelector('.navbar__menu').classList.remove("visible");
    }
}