import { onModal } from "./modules/modal.js"
import { createHeroElements, createForm } from "./modules/trenings/createElement.js"

const init = () => {
    createHeroElements()
    const btn = document.querySelector(".trening__btn")

    btn.addEventListener("click", () => {
        const overlay = document.querySelector(".overlay")
        const content = document.querySelector(".modal__content")
        overlay.classList.remove("hidden")
        // const form = createForm()
        // content.append(form)
    })
}

init()