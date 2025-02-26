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
    mainContainer.append(title, description, btns)

}

  // export const createForm = () => {
  //     const formEnter = document.createElement("form")
  //     formEnter.classList.add("modal__form")

  //     const enterLabel = document.createElement("label")
  //     enterLabel.classList.add("modal__label")

  //     const enterInput = document.createElement("input")
  //     enterInput.classList.add("modal__input")
  //     enterInput.type = 'text'
  //     enterInput.name = 'trening'
  //     enterInput.dataset.id = 'trening'
  //     enterInput.placeholder = "Sisesta treeningu nimi"

  //     enterLabel.append(enterInput)

  //     const timeLabel = document.createElement("label")
  //     timeLabel.classList.add("modal__label")

  //     const timeInput = document.createElement("input")
  //     timeInput.classList.add("modal__input")
  //     timeInput.type = 'text'
  //     timeInput.name = 'time'
  //     timeInput.dataset.id = 'time'
  //     timeInput.placeholder = "Sisesta treeningu kestus (min)"
  //     timeLabel.append(timeInput)

  //     const dropList = document.createElement('select');
  //     dropList.classList.add('form-select');
  //     dropList.name = 'droplist';
  //     dropList.style.width = 'auto';
  //     dropList.style.marginRight = 20 + 'px';
  //     dropList.dataset.id = 'droplist';
  //     dropList.insertAdjacentHTML(
  //       'beforeend',
  //       ` <option selected disabled>Vali treeningu tüüp</option>
  //         <option value="Strength">Jõutreening</option>
  //         <option value="Cardio">Kardiotreening</option>
  //         <option value="Yoga">Jooga</option>
  //         <option value="Pilates">Pilates</option>
  //         <option value="Dance">Tantsutreening</option>
  //       </select>`,
  //     );

  //     const radioBtns = document.createElement("div")
  //     radioBtns.classList.add("radiobtns__modal")
  //     const radioBtnGroup = createRadioBtnGroup([
  //       {
  //         className: 'radiobtn__modal',
  //         id: "kerge",
  //         name: "intensive",
  //         value: "Kerge"
  //       },
  //       {
  //         className: 'radiobtn__modal',
  //         id: "keskmine",
  //         name: "intensive",
  //         value: "Keskmine"
  //       },
  //       {
  //         className: 'radiobtn__modal',
  //         id: "kõrge",
  //         name: "intensive",
  //         value: "Kõrge"
  //       }
  //     ])
  //     console.log('radioBtnGroup: ', radioBtnGroup);

  //     radioBtns.append(...radioBtnGroup)

  //     const btns = document.createElement("div")
  //     btns.classList.add("btns__modal")
  //     const buttonGroup = createButtonsGroup([
  //         {
  //           className: 'btn__modal w-full text-white py-2 rounded-lg mt-4',
  //           type: 'submit',
  //           text: 'Save',
  //         },
  //         {
  //           className: 'btn__modal w-full text-white py-2 rounded-lg mt-4',
  //           type: 'reset',
  //           text: 'Reset',
  //         },
  //         {
  //             className: "btn__modal modal__close w-full text-white py-2 rounded-lg mt-4",
  //             type: 'close',
  //             text: "Close"
  //         }
  //       ]);
  //     //   buttonGroup.btns[0].setAttribute('disabled', '');
  //       btns.append(...buttonGroup.btns)
  //       formEnter.addBtn = buttonGroup.btns[0];
  //       formEnter.resBtn = buttonGroup.btns[1];
  //       formEnter.closeBtn = buttonGroup.btns[2];
  //       formEnter.input = enterInput;
  //       formEnter.append(enterLabel, timeLabel, dropList, radioBtns, btns);

  //       return formEnter
  // }

  // const createButtonsGroup = (params) => {
  //     const btns = params.map(({ className, type, text }) => {
  //       const button = document.createElement('button');
  //       button.type = type;
  //       button.className = className;
  //       button.textContent = text;
  //       button.style.marginRight = 1 + 'rem';
  //       return button;
  //     });
    
  //     return {
  //       btns,
  //     };
  //   };
  //   const createRadioBtnGroup = (params) => {
  //     const btns = params.flatMap(({className, id, name, value}) => {
  //       const input = document.createElement("input");
  //       input.type = "radio"
  //       input.className = className
  //       input.id = id
  //       input.name = name
  //       input.value = value
  //       const label = document.createElement("label")
  //       label.for = id
  //       label.textContent = value
  //       return [input, label]
  //     })
  //     return btns
  //   }

  export const createTable = () => {
    const tableSection = document.querySelector(".training");

    const tableWrapper = document.createElement('div');
    tableWrapper.classList.add('overflow-x-auto', "mb-10", 'shadow-lg', 'bg-gray-900', 'p-4');
    
    const table = document.createElement('table');
    table.classList.add('w-full', 'border-collapse', 'border', 'border-gray-700');
    
    const thead = document.createElement('thead');
    thead.classList.add('bg-gray-800', 'text-white', 'uppercase', 'tracking-wide');
    thead.insertAdjacentHTML(
      'beforeend',
      `<tr>
            <th>Nimi</th>
            <th>Kestus</th>
            <th>Tüüp</th>
            <th>Sagedus näd.</th>
            <th>Intensiivsus</th>
            <th>Kommentaar</th>            
            <th>
              <button class="btn-del-all text-white font-bold py-1 px-3 rounded">
                Delete All
              </button>
            </th>
          </tr>
          `,
    );

    tableWrapper.table = table;
    const tbody = document.createElement('tbody');
    tbody.classList.add('bg-gray-700', 'text-gray-300');
    table.tbody = tbody;
    table.append(thead, tbody);
    tableWrapper.append(table);
    tableSection.append(tableWrapper)
    return tableWrapper;
  };

  export const createRow = (obj, index) => {
    const { id, Training_name, Training_time, Training_type, Weekly_sessions, Intensive, Comments } = obj;
    const tr = document.createElement('tr');
    tr.classList.add('training_task','bg-gray-800', 'text-white', 'border-b', 'border-gray-600', 'hover:bg-gray-700', 'transition');

    const tdId = document.createElement('td');
    tdId.classList.add('hidden', 'id');
    tdId.textContent = id;

    const tdName = document.createElement('td');
    tdName.classList.add('hidden', 'md:table-cell', 'py-2', 'px-4', 'text-center');
    tdName.textContent = Training_name;

    const tdTime = document.createElement('td');
    tdTime.classList.add('py-2', 'px-4', 'text-center');
    tdTime.textContent = Training_time;

    const tdType = document.createElement('td');
    tdType.classList.add('py-2', 'px-4', 'text-center');
    tdType.textContent = Training_type;

    const tdSessions = document.createElement('td');
    tdSessions.classList.add('py-2', 'px-4', 'text-center');
    tdSessions.textContent = Weekly_sessions;

    const tdIntensive = document.createElement('td');
    tdIntensive.classList.add('py-2', 'px-4', 'text-center');
    tdIntensive.textContent = Intensive;

    const tdComments = document.createElement('td');
    tdComments.classList.add('py-2', 'px-4', 'text-center', 'italic', 'text-gray-400');
    tdComments.textContent = Comments;

    const tdBtns = document.createElement('td');
    tdBtns.classList.add('py-2', 'px-4', 'text-center', 'flex', 'gap-2', 'justify-center');

    const btnDel = document.createElement('button');
    btnDel.classList.add('btn_del','text-white', 'font-bold', 'py-2', 'px-4', 'rounded-lg', 'shadow-md', 'hover:bg-red-700', 'transition');
    btnDel.style.marginRight = 20 + 'px';
    btnDel.type = 'button';
    btnDel.textContent = 'Delete';

    const btnComplete = document.createElement('button');
    btnComplete.classList.add('btn_complete', 'hover:bg-green-700', 'text-white', 'px-4', 'py-1', 'rounded-lg', 'transition');
    btnComplete.style.marginRight = 20 + 'px';
    btnComplete.type = 'button';
    btnComplete.textContent = 'Complete';
  

    tdBtns.append(btnDel, btnComplete);
  
    tr.append(tdId, tdName, tdTime, tdType, tdSessions, tdIntensive, tdComments, tdBtns);
    return tr;
  };