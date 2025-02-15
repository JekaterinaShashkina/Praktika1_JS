import { openModal } from "../modal.js";

export const createButton = (text, direction) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.classList.add(
        "btn"
    );
    btn.dataset.direction = direction;
    return btn;
}

export const createCategoryCard = (categoryData) => {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add(
        "bg-gray-800", "hover:bg-gray-700", "text-white",
        "p-3", "rounded-lg", "cursor-pointer", "transition",
        "justify-center", "items-center", "text-center",
        "w-60", "shadow-lg", "hover:shadow-xl", "flex", "flex-col"
    );

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = categoryData.category;
    categoryTitle.classList.add("category__title", "text-lg", "font-bold", "mb-2", "text-center");

    const topicList = createTopicList(categoryData.members);

    categoryCard.appendChild(categoryTitle);
    categoryCard.appendChild(topicList);

    return categoryCard;
}

export const createTopicList = (members) => {
    const topicList = document.createElement("ul");
    topicList.classList.add("topic__list", "space-y-2", "w-full");

    members.forEach(topic => {
        const li = document.createElement("li");
        li.textContent = topic.name;
        li.classList.add(
            "topic__item", "bg-gray-700", "hover:bg-gray-600", "p-2", "rounded-md",
            "text-sm", "w-full", "text-center", "flex",
            "items-center", "justify-center"
        );
        openModal(li, topic.name, topic.description, topic.video)
        topicList.appendChild(li);
    });

    return topicList;
}