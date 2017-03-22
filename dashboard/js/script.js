
var journalEntries = 0;

$.ajax({
    url: "http://localhost/sugarizer/api/users/",
})
    .done(function (data) {
        // var journalEntries = 0;
        $("#numberOfUsers").text(data.length)
        for (var userIndex = 0; userIndex < data.length; userIndex++) {
            var userName = data[userIndex].name;
            $("#usersAPI").append('<a href="#" class="userName list-group-item list-group-item-action">' + userName + "</a>")

            $.ajax({
                url: "http://localhost/sugarizer/api/journal/" + data[userIndex].private_journal
            })
                .done(function (data) {
                    journalEntries += data.length;
                    $(".journal-entries").text(journalEntries);
                });

            // if (data[userIndex].private_journal)
        }
    });





$("#search-criteria").on("keyup", function() {
    var g = $(this).val().toLowerCase();
    $(".userName").each(function () {
        var s = $(this).text().toLowerCase();
        $(this).closest('.userName')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
    });
})


