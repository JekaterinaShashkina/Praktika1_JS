export const createNewsCard = (item) => {
    const {title, category, description, datetime, imageURL} = item
    
    const newsItem = document.createElement("li")
    newsItem.classList.add("news__item")
    
    const newsImage = new Image(250, 200)
    newsImage.classList.add("news__image")
    newsImage.src = imageURL
    newsImage.alt = title
    
    const newsTitle = document.createElement("h3")
    newsTitle.classList.add("news__title")
    
    const titleLink = document.createElement("a")
    titleLink.classList.add("news__link")
    titleLink.textContent = title
    newsTitle.append(titleLink)
    
    const newsCategory = document.createElement("p")
    newsCategory.classList.add("news-category")
    newsCategory.textContent = category
    
    const newsTime = document.createElement("time")
    newsTime.classList.add("news-datetime")
    newsTime.datetime = datetime
    
    const newsDate = document.createElement("span")
    newsDate.classList.add("news-date")
    newsDate.textContent = `${new Date(item.datetime).toLocaleDateString("ru-RU")}`
    newsTime.append(newsDate)
    
    const newsDescription = document.createElement("p")
    newsDescription.classList.add("news-description", "truncated")
    newsDescription.textContent = description 
    
    titleLink.addEventListener("click", (e) => {
        // e.preventDefault()
        newsDescription.classList.toggle("truncated")
    })
    newsItem.append(newsImage,newsTitle, newsCategory, newsTime, newsDescription);
    return newsItem
}