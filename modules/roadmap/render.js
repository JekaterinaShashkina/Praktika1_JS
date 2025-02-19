import { createButton, createCategoryCard } from "./createElement.js";

export const createDirectionButtons = (data, btnContainer)=> {
    data.forEach(direction => {
        const btn = createButton(direction.direction, direction.direction);
        btnContainer.appendChild(btn);
    });
}

export const displayCategories = (data, direction) => {
    const categoriesContainer = document.querySelector(".categories");
    categoriesContainer.innerHTML = ""; // Очищаем контейнер

    const selectedDirection = data.find(item => item.direction === direction);
    
    if (selectedDirection) {
        selectedDirection.stack.forEach(categoryData => {
            const categoryCard = createCategoryCard(categoryData);
            categoriesContainer.appendChild(categoryCard);
        });

        categoriesContainer.classList.add("flex", "gap-7", "items-start", "flex-wrap", "justify-center");
    } else {
        categoriesContainer.innerHTML = "<div class='text-white'>Data not Found</div>";
    }
}