export const openModal = (topicBtn, title, description, videoUrl) => {
    const overlay = document.querySelector(".overlay")
    const modalContent = document.querySelector(".modal__content")
    const modalVideo = document.querySelector(".modal__video")

    topicBtn.addEventListener("click", () => {
            modalContent.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${title}</h2>
            <p class="text-sm mb-4">${description}</p>
        `;
        if (videoUrl) {
            modalVideo.innerHTML = `
                <iframe class="w-full h-64 rounded-lg"
                    src="${videoUrl.replace("watch?v=", "embed/")}"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            `;
        } else {
            modalVideo.innerHTML = "<p class='text-gray-500'>Видео отсутствует.</p>";
        }
            overlay.classList.remove("hidden")
        })

    overlay.addEventListener("click", (event) => {
        const target = event.target;
        if (overlay === target || target.closest(".modal__close")) {
        overlay.classList.add("hidden");
        modalVideo.innerHTML = "";
        }
    });
}