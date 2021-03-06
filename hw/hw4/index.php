<html>
    <head>
        <title>Homework 4</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        
        <!--Bootstrap files-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        <link href="https://fonts.googleapis.com/css?family=Bubblegum+Sans" rel="stylesheet"> 
        
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <script>
        /* global $ */
        $(document).ready(function(){
            
            $("#submit").on("click", function(){
                $.ajax({
                    type: "GET",
                    url: "api/getCards.php",
                    dataType: "json",
                    data: {
                        "searchTerm" : $("#textSearch").val()
                    }, 
                    success: function(data, status) {
                        var htmlString = "";
                        
                        $("#cardImgs").html("");
                        
                        var invalidSearch = true;

                        for (var i = 0; i < 3; i++) {
                            if (data[i] != null) {
                                htmlString += "<img src='" + data[i] + "' style=height:400px>";
                                invalidSearch = false;
                            }
                        }
                        
                        $("#cardImgs").append(htmlString);
                        
                        if (!invalidSearch) {
                            $.ajax({
                                type: "GET",
                                url: "api/getSearchInfo.php",
                                dataType: "json",
                                data: {
                                    "searchTerm" : $("#textSearch").val()
                                }, 
                                success: function(data, status) {
                                    $("#searchCount").html("");
                                    $("#searchCount").html("This term has been searched " + data.count + " time(s)!");
                                }
                            }); //End of getSpecies
                        }
                        
                        else {
                            $("#searchCount").html("");
                            $("#searchCount").html("Invalid search term!");
                        }
                    }
                }); //End of getSpecies
            }); //End of submitData
            
        }); // End of $(document).ready()
    </script>
    <body>
        <header>
            <h1>Yugioh Card Searcher</h1>
        </header>
        <div id="wrapper">
            <div id="search">
                <span>Enter a search term: </span><input type="text" id="textSearch"/>
                <button id="submit">Submit</button>
            </div>
            <div id="searchCount"></div>
            <div id="deck">
                <div id="cardImgs"></div>
            </div>
        </div>
    </body>
</html>