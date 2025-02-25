import { setStorage, removeStorage } from "./storage.js"
import { renderRow } from "./render.js"

export const formControl = (modalForm) => {
    modalForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append('id', Math.random().toString().substring(2, 10));
        const newTrening = Object.fromEntries(formData)
        console.log('newTrening: ', newTrening.Training_name);
        setStorage("training", newTrening)
    })
}

export const deleteTraining = (list, type) => {
    list.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.btn_del')) {
        const result = window.confirm('Are you sure?');
        if (result) {
          const training = target.closest('.training_task');
          const id = training.querySelector('.id').textContent;
          training.remove();
          const trainings = removeStorage(id, type);
          renderRow(trainings, list);
        }
      }
    });
  };