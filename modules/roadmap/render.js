import { createButton, createCategoryCard } from "./createElement.js";

export const createDirectionButtons = (data, btnContainer)=> {
    data.forEach(direction => {
        const btn = createButton(direction.direction, direction.direction);
        btnContainer.append(btn);
    });
}

export const displayCategories = (data, direction) => {
    const categoriesContainer = document.querySelector(".categories");
    categoriesContainer.innerHTML = ""; // Очищаем контейнер

    const selectedDirection = data.find(item => item.direction === direction);
    
    if (selectedDirection) {
        selectedDirection.stack.forEach(categoryData => {
            const categoryCard = createCategoryCard(categoryData);
            categoriesContainer.append(categoryCard);
        });

        categoriesContainer.classList.add("flex", "gap-7", "items-start", "flex-wrap", "justify-center");
    } else {
        categoriesContainer.innerHTML = "<div class='text-white'>Data not Found</div>";
    }
}

export const renderModal = (modalContent, data) => {
    const {description, name, video} = data
    console.log('data: ', data);
    const modalVideo = document.querySelector(".modal__video")

    modalContent.innerHTML = `
    <h2 class="text-xl font-bold mb-2">${name}</h2>
    <p class="text-sm mb-4">${description}</p>
`;
if (video) {
    modalVideo.innerHTML = `
        <iframe class="w-full h-64 rounded-lg"
            src="${video.replace("watch?v=", "embed/")}"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    `;
} else {
    modalVideo.innerHTML = "<p class='text-gray-500'>Видео отсутствует.</p>";
}
}