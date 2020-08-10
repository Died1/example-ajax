$(document).ready(function () {
    var generos = "";
    $.ajax({
        url: "datos.json",
        type: "get",
        cache: "false",
        success: function (result) {
            for (let i = 0; i < result.length; i++) {
                    generos += '<div class="col-md-4 col-sm-6">'+
                                    '<div class="movie-card" >' +
                                        '<div class="movie-header ">' +
                                            '<img src="' + result[i].url_img + '"></img>' +
                                        '</div>' +
                                        '<div class="movie-content">' +
                                            '<div class="movie-content-header">' +
                                                '<a href="?genero='+result[i].genero+'">' +
                                                    '<h3 class="movie-title">' + result[i].genero + '</h3>' +
                                                '</a>' +
                                                '<div class="imax-logo"></div>' +
                                            '</div>'+    
                                        '</div>' +
                                    '</div>' +   
                                '</div>';
            }
            $("#generos").html(generos);
        }
    });
});
