var deals_grid = document.querySelector(".deals_grid");
var descriptions_list = document.querySelectorAll(".description");

function getParent(clickPlace, className) {
    var node = clickPlace;

    if (node.classList.contains(className)) {
        return node;
    } else {
        node1 = node.parentElement;
        node2 = node1.parentElement;
        return node2
    }



};

deals_grid.addEventListener("click", function (e) {
    var target = e.target;




    if (target.classList.contains("show_more_btn")) {

        var deal = getParent(target, "deal_title");
        var popup = document.querySelector(".popup");

        var title = deal.querySelector(".deal_title").textContent || element.innerText;
        var price =deal.querySelector(".deal_price").textContent || element.innerText;
        var description =  deal.querySelector(".hidden_text").textContent || element.innerText;
        var address =  deal.querySelector(".address").textContent || element.innerText;

        var rooms = deal.querySelector("#rooms").textContent || element.innerText;
        var floor = deal.querySelector("#floor").textContent || element.innerText;
        var area = deal.querySelector("#area").textContent || element.innerText;
        var built = deal.querySelector("#built").textContent || element.innerText;

        popup.querySelector("h2").innerHTML = title;
        popup.querySelector(".item_address").innerHTML = address;
        popup.querySelector(".item_price").innerHTML = price;
        popup.querySelector(".item_description").innerHTML = description;
        popup.querySelector("#rooms_value").innerHTML = rooms;
        popup.querySelector("#floor_value").innerHTML = floor;
        popup.querySelector("#area_value").innerHTML = area  + "М²";
        popup.querySelector("#built_value").innerHTML = built;
    }
});