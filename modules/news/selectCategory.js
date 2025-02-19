import { displayNews } from "./displayNews.js";
export const selectCategory = (news) => {
    const categorySelect = document.querySelector(".hero__select")
    categorySelect.innerHTML = "";

    const allOptions = document.createElement("option")
    allOptions.classList.add("hero__option")
    allOptions.value = "all"
    allOptions.textContent = "All categories"
    categorySelect.appendChild(allOptions)
    const categories = new Set(news.map(item => item.category));

    categories.forEach(category => {
        const categoryOption = document.createElement("option")
        categoryOption.classList.add("hero__option")
        categoryOption.value = category
        categoryOption.textContent = category
    categorySelect.appendChild(categoryOption)
    })

    categorySelect.addEventListener("change", (e) => {
        const selectedCategory = e.target.value
        filterByCategory(news, selectedCategory)
    })
}   

const filterByCategory = (news, selectedCategory) => {
    if (selectedCategory === "all") {
        displayNews(news)
    } else {
        const filteredNews = news.filter(item => item.category === selectedCategory)
        displayNews(filteredNews)
    }
}