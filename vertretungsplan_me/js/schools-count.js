$(function () {
    $.ajax({
        type: "GET",
        url: "https://api.vertretungsplan.me/v2/schools/count",
        cache: true,
        success: function (response) {
            var schools = parseInt(response);
            $('.schools-count').each(function() {
                $(this).html(schools)
            })
        }
    });
});