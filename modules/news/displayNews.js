import { createNewsCard } from "./createNewsCard.js";

export const displayNews = (news) => {
    const newsList = document.querySelector(".news__list")
    newsList.innerHTML = ''
    const cards = news.map(createNewsCard)
    newsList.append(...cards)
}



