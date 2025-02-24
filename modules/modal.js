export const onModal = (btn, data, renderContent) => {
    const overlay = document.querySelector(".overlay")
    const modalContent = document.querySelector(".modal__content")
    const modalVideo = document.querySelector(".modal__video");

    btn.addEventListener("click", () => {
        modalContent.innerHTML= ""
        renderContent(modalContent, data)
        overlay.classList.remove("hidden")
    })
    overlay.addEventListener("click", (event) => {
        const target = event.target;
        if (overlay === target || target.closest(".modal__close")) {
        overlay.classList.add("hidden");
        if (modalVideo) {
            modalVideo.innerHTML = "";
        }
        }
    });

}

