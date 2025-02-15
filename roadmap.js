import { fetchData } from "./modules/api.js"
import { directionClickHandler } from "./modules/roadmap/control.js"
import { createDirectionButtons } from "./modules/roadmap/render.js"
import { openModal } from "./modules/modal.js"

const btnContainer = document.querySelector(".hero__btns")

fetchData("roadmap.json").then(data => {
    createDirectionButtons(data, btnContainer)
    directionClickHandler(data)
})