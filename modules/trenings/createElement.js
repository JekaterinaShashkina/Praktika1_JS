export const createHeroElements = () => {
    const mainContainer = document.querySelector('.hero__container')

    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = 'Treeningukava'
    const description =  document.createElement("p")
    description.classList.add("hero__text")
    description.textContent = "Veebirakendus, mis võimaldab kasutajal koostada personaalse treeningukava. Rakenduses saab sisestada oma treeningud, määrata nende sageduse ja intensiivsuse ning salvestada andmed."

    const btns = document.createElement("div")
    btns.classList.add("hero__btns")

    const btn = document.createElement("button")
    btn.classList.add("btn", "trening__btn")
    btn.textContent = "Lisa treeningu"
    btns.append(btn)
    // onModal(btn, )
    mainContainer.append(title, description, btns)

}

export const createForm = () => {
    const formEnter = document.createElement("form")
    formEnter.classList.add("modal__form")

    const enterLabel = document.createElement("label")
    enterLabel.classList.add("modal__label")

    const enterInput = document.createElement("input")
    enterInput.classList.add("modal__input")
    enterInput.type = 'text'
    enterInput.name = 'trening'
    enterInput.dataset.id = 'trening'
    enterInput.placeholder = "Sisesta treeningu nimi"

    enterLabel.append(enterInput)

    const timeLabel = document.createElement("label")
    timeLabel.classList.add("modal__label")

    const timeInput = document.createElement("input")
    timeInput.classList.add("modal__input")
    timeInput.type = 'text'
    timeInput.name = 'time'
    timeInput.dataset.id = 'time'
    timeInput.placeholder = "Sisesta treeningu kestus (min)"
    timeLabel.append(timeInput)

    const dropList = document.createElement('select');
    dropList.classList.add('form-select');
    dropList.name = 'droplist';
    dropList.style.width = 'auto';
    dropList.style.marginRight = 20 + 'px';
    dropList.dataset.id = 'droplist';
    dropList.insertAdjacentHTML(
      'beforeend',
      ` <option selected disabled>Vali treeningu tüüp</option>
        <option value="Strength">Jõutreening</option>
        <option value="Cardio">Kardiotreening</option>
        <option value="Yoga">Jooga</option>
        <option value="Pilates">Pilates</option>
        <option value="Dance">Tantsutreening</option>
      </select>`,
    );

    const radioBtns = document.createElement("div")
    radioBtns.classList.add("radiobtns__modal")
    const radioBtnGroup = createRadioBtnGroup([
      {
        className: 'radiobtn__modal',
        id: "kerge",
        name: "intensive",
        value: "Kerge"
      },
      {
        className: 'radiobtn__modal',
        id: "keskmine",
        name: "intensive",
        value: "Keskmine"
      },
      {
        className: 'radiobtn__modal',
        id: "kõrge",
        name: "intensive",
        value: "Kõrge"
      }
    ])
    console.log('radioBtnGroup: ', radioBtnGroup);

    radioBtns.append(...radioBtnGroup)

    const btns = document.createElement("div")
    btns.classList.add("btns__modal")
    const buttonGroup = createButtonsGroup([
        {
          className: 'btn__modal w-full text-white py-2 rounded-lg mt-4',
          type: 'submit',
          text: 'Save',
        },
        {
          className: 'btn__modal w-full text-white py-2 rounded-lg mt-4',
          type: 'reset',
          text: 'Reset',
        },
        {
            className: "btn__modal modal__close w-full text-white py-2 rounded-lg mt-4",
            type: 'close',
            text: "Close"
        }
      ]);
    //   buttonGroup.btns[0].setAttribute('disabled', '');
      btns.append(...buttonGroup.btns)
      formEnter.addBtn = buttonGroup.btns[0];
      formEnter.resBtn = buttonGroup.btns[1];
      formEnter.closeBtn = buttonGroup.btns[2];
      formEnter.input = enterInput;
      formEnter.append(enterLabel, timeLabel, dropList, radioBtns, btns);

      return formEnter
}

const createButtonsGroup = (params) => {
    const btns = params.map(({ className, type, text }) => {
      const button = document.createElement('button');
      button.type = type;
      button.className = className;
      button.textContent = text;
      button.style.marginRight = 1 + 'rem';
      return button;
    });
  
    return {
      btns,
    };
  };
  const createRadioBtnGroup = (params) => {
    const btns = params.flatMap(({className, id, name, value}) => {
      const input = document.createElement("input");
      input.type = "radio"
      input.className = className
      input.id = id
      input.name = name
      input.value = value
      const label = document.createElement("label")
      label.for = id
      label.textContent = value
      return [input, label]
    })
    return btns
  }