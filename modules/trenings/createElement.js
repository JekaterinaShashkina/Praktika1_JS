import { getStorageItem } from "./storage.js"
import { calculateStatistics } from "./statistics.js"

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

  export const createTable = () => {
    const tableSection = document.querySelector(".trainings__container");

    const tableWrapper = document.createElement('div');
    tableWrapper.classList.add('table-wrapper', 'overflow-x-auto', "mb-10", 'shadow-lg', 'bg-gray-900', 'p-4');
    
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
              <button class="btn-del-all text-white font-bold py-1 px-3 rounded-lg shadow-md transition">
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
    let status  = getStorageItem(id).statue || "In Progress";
    console.log('status: ', status);

    const tr = document.createElement('tr');
    if (status === "In Progress") {
      tr.classList.add('training_task','bg-gray-800', 'border-b', 'border-gray-600', 'hover:bg-gray-700', 'transition');

    } else {
      tr.classList.add('training_task','bg-gray-800', 'training__completed', 'border-b', 'border-gray-600', 'hover:bg-gray-700', 'transition');

    }

    const tdId = document.createElement('td');
    tdId.classList.add('hidden', 'id');
    tdId.textContent = id;

    const tdName = document.createElement('td');
    tdName.classList.add('md:table-cell', 'py-2', 'px-2', 'text-center');
    tdName.textContent = Training_name;

    const tdTime = document.createElement('td');
    tdTime.classList.add('py-2', 'px-2', 'text-center');
    tdTime.textContent = Training_time;

    const tdType = document.createElement('td');
    tdType.classList.add('py-2', 'px-2', 'text-center');
    tdType.textContent = Training_type;

    const tdSessions = document.createElement('td');
    tdSessions.classList.add('py-2', 'px-2', 'text-center');
    tdSessions.textContent = Weekly_sessions;

    const tdIntensive = document.createElement('td');
    tdIntensive.classList.add('py-2', 'px-2', 'text-center');
    tdIntensive.textContent = Intensive;

    const tdComments = document.createElement('td');
    tdComments.classList.add('py-2', 'px-2', 'text-center', 'italic', 'text-gray-400');
    tdComments.textContent = Comments;

    const tdBtns = document.createElement('td');
    tdBtns.classList.add('py-2', 'px-2', 'text-center', 'flex', 'gap-2', 'justify-center', "td-btns");

    const btnDel = document.createElement('button');
    btnDel.classList.add('btn_del','text-white', 'font-bold', 'py-1', 'px-3', 'rounded-lg', 'shadow-md', 'transition');
    btnDel.type = 'button';
    btnDel.textContent = 'Delete';

    const btnComplete = document.createElement('button');
    btnComplete.classList.add('btn_complete','font-bold', 'text-white', 'px-3', 'py-1', 'rounded-lg', 'shadow-md', 'transition');
    btnComplete.type = 'button';
    status === "In Progress" ? btnComplete.textContent = 'Complete': btnComplete.textContent = 'Completed';
  

    tdBtns.append(btnDel, btnComplete);
  
    tr.append(tdId, tdName, tdTime, tdType, tdSessions, tdIntensive, tdComments, tdBtns);
    return tr;
  };

  export const displayStatistics = (trainings) => {
    const stats = calculateStatistics(trainings);

    const statsContainer = document.querySelector(".stats");
    statsContainer.innerHTML = `
        <div class="stats-container bg-gray-800 text-white p-4 rounded-lg shadow-md">
            <h2 class="text-xl font-bold">Statistika</h2>
            <p>🔥 Kokku treeninguid: <span class="font-semibold">${stats.totalTrainings}</span></p>
            <p>⏳ Keskmine kestus: <span class="font-semibold">${stats.avgDuration} min</span></p>
            <p>📅 Treeningud nädalas: <span class="font-semibold">${stats.weeklyTrainings}</span></p>
            <p>✅ Lõpetatud: <span class="font-semibold">${stats.completedPercentage}%</span></p>
        </div>
    `;
};