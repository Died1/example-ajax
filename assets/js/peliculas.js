
$.ajax({
    url: "datos.json",
    type: "get",
    cache: "false",
    success: function (result) {
        var i = 0;
        var genero = $("h2").html();
        for (var i = 0; i < result.length; i++) {
            if (result[i].genero === genero) {
                var peliculas = result[i].videos;
            }
        }
        var pelicula = "";
        for (var j = 0; j < peliculas.length; j++) {
            pelicula += '<div class="col-md-4 col-sm-6">'+
                          '<div class="movie-card">' +
                            '<div class="movie-header">' +
                            '<img src="' + peliculas[j].url_img + '"></img>' +
                            '</div>' +
                            '<div class="movie-content">' +
                                '<div class="movie-content-header">' +
                                    '<a href="#">' +
                                        '<h3 class="movie-title">'+peliculas[j].titulo+'</h3>' +
                                    '</a>' +
                                    '<div class="imax-logo"></div>' +
                                '</div>' +
                                '<div class="movie-info">'+
                                '<div class="info-section">'+
                                        '<label>Date & Time</label>'+
                                        '<span>Tue 4 July - 05:00PM</span>'+
                                    '</div><!--date,time-->'+
                                    '<div class="info-section">'+
                                        '<label>Screen</label>'+
                                        '<span>01</span>'+
                                    '</div><!--screen-->'+
                                    '<div class="info-section">'+
                                        '<label>Row</label>'+
                                        '<span>H</span>'+
                                    '</div><!--row-->'+
                                    '<div class="info-section">'+
                                        '<label>Seat</label>'+
                                        '<span>15</span>'+
                                    '</div><!--seat-->'+
                                '</div>'+
                            '</div>' +
                            
                         '</div>'+   
                        '</div>';

        }
        $("#peliculas").html(pelicula);
    }
});
