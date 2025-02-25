import { formControl, deleteTraining } from "./modules/trenings/control.js"
import { createHeroElements, createTable } from "./modules/trenings/createElement.js"
import { getStorage } from "./modules/trenings/storage.js"
import { renderRow } from "./modules/trenings/render.js"
const init = () => {
    createHeroElements()
    const table = createTable()
    const btn = document.querySelector(".trening__btn")

    btn.addEventListener("click", () => {
        const overlay = document.querySelector(".overlay")
        overlay.classList.remove("hidden")
        
    })
    const modalForm = document.querySelector(".modal__form")
    formControl(modalForm)

    const obj = getStorage("training")
    console.log('obj: ', obj);
    if (obj) {
        renderRow(obj, table.table.tbody)

    }

    deleteTraining(table.table.tbody, "training")
}

init()