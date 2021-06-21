const showMoreBtn = document.querySelectorAll(".show_more_btn");
const bnt_lenght = showMoreBtn.length;
const popup = document.querySelector(".popup")
const closeBtn = document.querySelector(".popup_close_btn")

function showPopup() {
    showMoreBtn.forEach(element => {
        element.addEventListener("click", function() {
            popup.classList.add("show_popup")
        })
    });
}

function closePopup() {
    closeBtn.addEventListener("click", function() {
        setTimeout("popup.classList.remove('show_popup')", 300)
    })
}


showPopup();
closePopup()