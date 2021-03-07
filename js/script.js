let slideIndex = 1
showSlides(slideIndex)


function plusSlide() {
    showSlides(slideIndex += 1)
}

function minusSlide() {
    showSlides(slideIndex -= 1)
}

function currentSlides(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("projects__right-item")
    let dots = document.getElementsByClassName("slider-dots_item")
    let links = document.getElementsByClassName("projects__link")
    let projectsItems = document.getElementsByClassName("projects__table-items")
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for (i = 0; i < projectsItems.length; i++) {
        projectsItems[i].style.display = "none"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "")
    }

    // setTimeout(plusSlide,5000)

    slides[slideIndex - 1].style.display = "block"
    projectsItems[slideIndex - 1].style.display = "flex"
    dots[slideIndex - 1].className += " active"
    links[slideIndex - 1].className += " active"

}
