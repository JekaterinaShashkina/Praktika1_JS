import { displayCategories } from "./render.js";

export const directionClickHandler = (data) => {
    const btnContainer = document.querySelector(".hero__btns")
    btnContainer.addEventListener("click", (e) => {
        if (!e.target.classList.contains("btn")) return;
        
        const direction = e.target.dataset.direction;
        displayCategories(data, direction);

    })
}