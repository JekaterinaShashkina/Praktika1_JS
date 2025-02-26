import { formControl, deleteTraining, completeTraining, formClose, formReset, deleteAllTrainings } from "./modules/trenings/control.js"
import { createHeroElements, createTable } from "./modules/trenings/createElement.js"
import { getStorage } from "./modules/trenings/storage.js"
import { renderRow } from "./modules/trenings/render.js"
const init = () => {
    const overlay = document.querySelector(".overlay")
    createHeroElements()
    const table = createTable()
    const btn = document.querySelector(".trening__btn")
    const obj = getStorage("training")
    const body = table.table.tbody
    if (obj) {
        renderRow(obj, body)
    }

    btn.addEventListener("click", () => {
        overlay.classList.remove("hidden")        
    })
    const modalForm = document.querySelector(".modal__form")
    formControl(modalForm, body)
    deleteTraining(body)
    completeTraining(body)
    formClose(overlay)
    formReset(modalForm)
    deleteAllTrainings(obj, body)
}

init()