const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filter-item");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const filterName = e.target.dataset.name;

    filterableCards.forEach((card) => {
        if (filterName === "all" || card.dataset.name === filterName) {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
};

filterButtons.forEach((button) => button.addEventListener("click", filterCards));
