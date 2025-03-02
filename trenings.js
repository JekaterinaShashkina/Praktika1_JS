import { formControl, deleteTraining, completeTraining, formClose, formReset, deleteAllTrainings, modalOpen } from "./modules/trenings/control.js"
import { createHeroElements, createTable, displayStatistics } from "./modules/trenings/createElement.js"
import { getStorage } from "./modules/trenings/storage.js"
import { renderRow } from "./modules/trenings/render.js"
import { filterTrainings } from "./modules/trenings/filter.js"
import { toggleTheme } from "./modules/trenings/thememode.js"
const init = () => {
    document.getElementById('slider').addEventListener('click', toggleTheme);
    const overlay = document.querySelector(".overlay")
    console.log('overlay: ', overlay);
    const modalForm = document.querySelector(".modal__form")


    createHeroElements()
    const table = createTable()
    const obj = getStorage("training")
    displayStatistics(obj);
    const btn = document.querySelector(".trening__btn")
    console.log('btn: ', btn);
    const body = table.table.tbody
    if (obj) {
        renderRow(obj, body)
    }

    modalOpen(btn, overlay)
    formControl(modalForm, body)
    deleteTraining(body)
    completeTraining(body)
    formClose(overlay)
    formReset(modalForm)
    deleteAllTrainings(obj, body)
    filterTrainings(body)

}

init()

