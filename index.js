
const btn = document.querySelector(".btn");
const list = document.querySelector(".result__list");
const btnContainer = document.querySelector(".hero__btns")

fetch("roadmap.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(text => {
            const btn = document.createElement("button")
            btn.textContent = text.category
            btn.classList.add("btn")
            btn.dataset.category = text.category;

            btnContainer.appendChild(btn)
        })

        btnContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("btn")) {
                const category = e.target.dataset.category; // Получаем категорию из data-category
                console.log("Выбрана категория:", category)

                list.innerHTML = ""; // Очищаем список перед добавлением новых элементов

                const selectedCategory = data.find(item => item.category === category);
                console.log('selectedCategory: ', selectedCategory);
                if (selectedCategory) {
                    selectedCategory.stack.forEach(i => {
                        const li = document.createElement("li");
                        li.textContent = i.name; // Добавляем элементы stack
                        li.classList.add(
                            "bg-gray-800", "hover:bg-gray-700", "text-white",
                            "p-3", "rounded-lg", "cursor-pointer", "transition", "justify-center",
                            "items-center", "text-center", "w-60", "h-15"

                        )
                        list.classList.add("flex", "flex-col", "gap-6", "items-center");
                        list.appendChild(li);
                    });
                } else {
                    list.innerHTML = "<li>Andmeid ei leitud</li>";
                }
            }
        })


    })
    .catch(error => console.error("Viga JSON-i laadimisel:", error));
