import { setStorage, removeStorage, getStorage, getStorageItem, changeStorageItem } from "./storage.js"
import { renderRow } from "./render.js"

export const formControl = (modalForm, table) => {
    modalForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append('statue', 'Processes');
        formData.append('id', Math.random().toString().substring(2, 10));
        const newTrening = Object.fromEntries(formData)
        setStorage("training", newTrening)

        const overlay = document.querySelector(".overlay"); 
        overlay.classList.add("hidden");

        modalForm.reset();
        const arr = getStorage("training")
        renderRow(arr, table)
    })

}
export const formClose = (overlay) => {
  overlay.addEventListener("click", (event) => {
    const target = event.target;
    if (overlay === target || target.closest(".modal__close")) {
    overlay.classList.add("hidden");
    }
});
}
export const formReset = (modalForm) => {
  modalForm.addEventListener("reset", () => {
    setTimeout(() => {
        modalForm.querySelectorAll("input, select, textarea").forEach((field) => {
            if (field.type !== "radio") {
                field.value = "";
            } else {
                field.checked = false;
            }
        });
    }, 0);
  });
}
export const deleteAllTrainings = (arr, table) => {
  const btn = document.querySelector(".btn-del-all ")

  btn.addEventListener("click", () => {
    const confirmDelete = confirm("Are you really want to delete all your trainings?")
    if (confirmDelete) {
      localStorage.removeItem("training")
      renderRow(arr, table)
    }

  })
  
}

export const deleteTraining = (table) => {
    table.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.btn_del')) {
        const result = window.confirm('Are you sure?');
        if (result) {
          const training = target.closest('.training_task');
          console.log('training: ', training);

          if (!training) return;
          const id = training.querySelector('.id').textContent;
          console.log('id: ', id);
          training.remove();

          removeStorage(id);
          const arr = getStorage("training")
          renderRow(arr, table);
        }
      }
    });
  };

export const completeTraining = (table) => {
  table.addEventListener('click', (e) => {
    const target = e.target
    console.log('target: ', target);
    const training = target.closest('.training_task')
    const id = training.querySelector('.id').textContent;

    let status  = getStorageItem(id).statue || "Processes";
    console.log("Текущий статус:", status);
    if (
      training && status === 'Processes'
    ) {
      status = 'Completed';
      training.classList.remove('text-white')
      training.classList.add('training__completed')
      target.textContent = 'Completed'
      changeStorageItem(id, 'training', status);
    } else {
      status = 'Processes';
      training.classList.add('text-white');
      training.classList.remove('table__completed');
      changeStorageItem(id, 'training', status);
    }
  })
}