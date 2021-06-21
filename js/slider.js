$(document).ready(function () {

    function showNextSlide() {

        let slideIndx = 0;
        let items = document.querySelectorAll(".slider_item");
        const next = document.querySelector(".next_btn");
        next.addEventListener("click", function () {
    
            slideIndx += 1;
            var currentItem = items[slideIndx - 1];
            var prevItem = items[slideIndx - 2];
            
            if (slideIndx > items.length) {
                slideIndx = 0;
                currentItem = items[slideIndx];
                prevItem = items[items.length-1];
            }
    
            prevItem.classList.remove("show_item");
            currentItem.classList.add("show_item");
    
        })
    
    }
    
    showNextSlide()


})

