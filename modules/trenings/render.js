import { createRow } from "./createElement.js"

export const renderRow = (arr, table) => {
    table.textContent = ""
    const allRow = arr.map(createRow)
    table.append(...allRow)
    return allRow
}