ymaps.ready(init);

function init() {

    // Создание карты.
    var myMap = new ymaps.Map("map", {
        center: [56.022798299805636, 92.89742899999986],
        zoom: 11,
    });

    var deals_grid = document.querySelector(".deals_grid");

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
            var dealAddress = deal.querySelector(".address");

            var address = "Красноярск, " + dealAddress.textContent || element.innerText;

            var geocoder = ymaps.geocode(address);

            geocoder.then(
                function (res) {

                    var coordinates = res.geoObjects.get(0).geometry.getCoordinates();

                    console.log(coordinates)
                    var placemark = new ymaps.Placemark(
                        coordinates, {
                            'hintContent': address
                        }, {
                            'preset': 'islands#redDotIcon'
                        }
                    );

                    var closeBtn = document.querySelector(".popup_close_btn")


                    closeBtn.addEventListener("click", function () {
                        setTimeout("popup.classList.remove('show_popup')", 300);
                        myMap.geoObjects.remove(placemark);
                        console.log("removed");
                    })
                    myMap.geoObjects.add(placemark);
                    console.log("add");


                }
            );




        }

    });


}