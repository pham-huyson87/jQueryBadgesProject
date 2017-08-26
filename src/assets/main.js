$(function() {

    $.ajax({
        url: 'https://www.codeschool.com/users/user13373.json',
        dataType: 'jsonp',
        success: function (response)
        {
            var divBadges = $("#badges");

            response
                .courses.completed.forEach(function (course) {

                var divCourse = $("<div class=\"course\"></div>");

                // Build the Course
                divCourse
                    .append("<h3>" + course.title + "</h3>");

                divCourse
                    .append("<img src=\"" + course.badge + "\" />");

                divCourse
                    .append("<a href=\"" + course.url + "\" target=\"_blank\" class=\"btn btn-primary\">See Course</a>");


                // Add the Course to the Badges
                divCourse
                    .appendTo(divBadges);
            });


        }
    });


});
