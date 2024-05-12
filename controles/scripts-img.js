$(document).ready(function() {
    // Evento para maximizar la imagen al hacer clic en ella
    $(".img-fluid").click(function() {
        var modal = $("#myModal");
        var modalImg = $("#img01");

        // Mostrar el modal
        modal.css("display", "block");

        // Establecer la imagen en el modal
        modalImg.attr("src", $(this).attr("src"));
    });

    // Obtener el elemento span que cierra el modal
    var span = $(".close");

    // Cerrar el modal cuando se hace clic en el span (x)
    span.click(function() {
        $("#myModal").css("display", "none");
    });

    // Cerrar el modal cuando se hace clic fuera del modal
    $(window).click(function(event) {
        if (event.target.id === "myModal") {
            $("#myModal").css("display", "none");
        }
    });
});
