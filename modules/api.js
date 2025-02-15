export const  fetchData = async(jsonFile) => {
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("JSON file load error:", error);
        return null; 
    }
}