import { news } from "./modules/news/newsData.js"
import { displayNews } from "./modules/news/displayNews.js"
import { searchNews } from "./modules/news/newsSearch.js"
import { selectCategory } from "./modules/news/selectCategory.js"

const init = (news) => {
    displayNews(news)
    selectCategory(news)
    searchNews(news)
}

init(news)