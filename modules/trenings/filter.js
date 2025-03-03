import { getStorage } from "./storage.js"
import { renderRow } from "./render.js"

export const filterTrainings = (table) => {
    const typeFilter = document.querySelector(".filter-type")
    const intensityFilter = document.querySelector(".filter-intensity")

    const applyFilter = () => {
        let trainings = getStorage("training");
        if (!trainings || !trainings.length) {
            renderRow([], table);
            return;
        }
        const selectedType = typeFilter.value;
        const selectedIntensity = intensityFilter.value;

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