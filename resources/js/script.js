function CallAPI() {

    var search_string = document.getElementById("TextS").value;

    var url =`http://www.omdbapi.com/?i=tt3896198&apikey=a2bb3516&s=${search_string}`;

    $.ajax({url:url, dataType:"json"}).then(function(data) {
      console.log(data);
      var img_movies = "";

      for(var i = 1; i < 10; i++ ){

        img_movies = "<div class='row'><div class='card' style='width:200px'>" +
                     "<div class='card-body'>" +
                      "<img class='card-img' src='" + data.Search[i].Poster + "' alt='image'>"+
                        "<h5 class ='card-title text-dark'> " + data.Search[i].Title + "</h5>" +
                        "<button type='button' class='btn btn-info' data-toggle='modal' data-target = 'Review_Modal'>Add Review</button>" +
                         "</div>" +"</div>" + "</div>" ;
        document.getElementById("movies").innerHTML += img_movies;
      }

    })

  };

function addReview(){

};
