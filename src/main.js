$(document).ready(function () {
    $.ajax({
        url: 'https://www.codeschool.com/users/tschreindl.json',
        dataType: 'jsonp',
        success: function (response) {
            displayBadges(response.courses.completed)
        }
    });

    function displayBadges(courses)
    {
        courses.forEach(function (course)
        {
            var div = $("<div></div>").addClass("course");
            div.append("<h3>" + course.title + "</h3>");
            div.append("<a href='" + course.url + "' target='_blank' class='btn btn-primary'><img src='" + course.badge + "'/><See course</a>");

            $("#badges").append(div);

        })
    }


});
