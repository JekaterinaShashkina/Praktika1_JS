import { displayNews } from "./displayNews.js"

export const searchNews = (news) => {
    const searchInput = document.querySelector(".search__input")
    const searchButton = document.querySelector(".search__submit")
    searchButton.addEventListener("click", (e) => {
        e.preventDefault()
        filteredNewsSearch(news, searchInput)
    })
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            filteredNewsSearch(news, searchInput)
        }
    })
}   

const filteredNewsSearch = (news, searchInput) => {
    const searchText = searchInput.value.toLowerCase().trim()
    const filteredNews = news.filter(item => {
        return item.title.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText)
    })
    // newsList.innerHTML = ""
    displayNews(filteredNews)
}