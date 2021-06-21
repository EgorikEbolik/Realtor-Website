$(document).ready(function () {


    $(".description").each(function () {


        var description = $(this).text();

        if (description.length < 380) {
            $(this).text(description);
            hidden = $(this).siblings(".hidden_text")
            hidden.text(description)


        } else {
            var cuttedDescription = description.slice(0, 380) + "..."
            $(this).text(cuttedDescription);
            hidden = $(this).siblings(".hidden_text")
            hidden.text(description)
        }


    });

})

