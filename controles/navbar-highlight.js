$(function () {
    // Obtener la URL actual
    var currentUrl = window.location.href;

    // Obtener el nombre del archivo actual
    var currentPage = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

    // Resaltar el enlace correspondiente en el navbar
    $(".nav-link").each(function () {
        var linkUrl = $(this).attr('href');
        var linkPage = linkUrl.substring(linkUrl.lastIndexOf('/') + 1);

        if (linkPage === currentPage) {
            $(this).addClass("active");
        }
    });
});

