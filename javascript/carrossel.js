document.addEventListener("DOMContentLoaded", function () {
    const sliderItems = document.querySelectorAll(".slider-item");
    const hiddenParagraphs = document.querySelectorAll(".hidden-paragraph");

    sliderItems.forEach((item, index) => {
        item.addEventListener("click", function () {

            hiddenParagraphs.forEach((paragraph) => {
                paragraph.style.display = "none";
            });

            hiddenParagraphs[index].style.display = "block";
        });
    });

    const sliderContent = document.querySelector(".slider-content");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + 4) % 4;
        updateSlider();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % 4;
        updateSlider();
    });

    function updateSlider() {
        sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
