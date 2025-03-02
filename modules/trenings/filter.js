import { getStorage } from "./storage.js"
import { renderRow } from "./render.js"

export const filterTrainings = (table) => {
    const typeFilter = document.querySelector(".filter-type")
    const intensityFilter = document.querySelector(".filter-intensity")

    const applyFilter = () => {
        const selectedType = typeFilter.value;
        const selectedIntensity = intensityFilter.value;
        let trainings = getStorage("training") || [];

        const filteredTrainings = trainings.filter((training) => {
            const typeMatch = selectedType === "all" || training.Training_type === selectedType;
            const intensityMatch = selectedIntensity === "all" || training.Intensive === selectedIntensity;
            return typeMatch && intensityMatch;
        });
        
        renderRow(filteredTrainings, table);
    }
    typeFilter.addEventListener("change", applyFilter);
    intensityFilter.addEventListener("change", applyFilter);
}