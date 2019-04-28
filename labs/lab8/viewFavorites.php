<!DOCTYPE HTML>
<html>
    <head>
        <title> </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <style>
            body {
                text-align: center;
                color: violet;
            }
            img {
                border-radius: 20px;
                padding:15px;
            }
        </style>
        
        <script>
            function displayFavorites(keywordLink) {
                
               // alert($(keywordLink).html());
               var keyword = $(keywordLink).html();
               //alert(keyword);
               
                $.ajax({
                    method: "get",
                    url: "api/favoritesAPI.php",
                    dataType: "json",
                    data: {
                        "action": "favorites",
                        "keyword": keyword
                            },
                    success: function(data, status) {
                        //alert(data[0].keyword);
                        
                         $("#favorites").html("");
                          data.forEach(function(i){
                            
                           $("#favorites").append("<img width='200' src='" + i.imageURL+ "'> ");
                            
                        });
                    },
                    complete: function(data, status) { //optional, used for debugging purposes
                     // alert(status);
                    }
                  });//ajax
            }
            
            
            $(document).ready(function(){
                $.ajax({
                    type: "get",
                    url: "api/favoritesAPI.php",
                    dataType: "json",
                    data: {
                      "action": "keyword",
                    },
                    success: function(data, status) {
                        data.forEach(function(i){
                            $("#keywords").append("<a class='favorites'  href='#'>" + i.keyword+ "</a> ");
                        });
                    },
                    complete: function(data, status) { //optional, used for debugging purposes
                      //alert(status);
                    }
                });//ajax
                
                $("#keywords").on("click", ".favorites", function(){
                    displayFavorites(this);
                });
            });
        </script>
    </head>
    <body>
        <h1> Favorite Images </h1>
        <div id="keywords"></div>
        <div id="favorites"></div>
    </body>
</html>