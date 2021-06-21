$(function () {

    deals = $(".deal")
    const rooms = document.querySelector("#rooms");
    const type = document.querySelector("#type");
    const district = document.querySelector("#district");
    

    function getValue(filter) {
        filter.addEventListener("change", function () {
            let val = $(filter).val();
            console.log(val);
        })
    }
    getValue(district);
    getValue(type);
    getValue(rooms);
});