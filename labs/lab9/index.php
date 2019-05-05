<?php

 if (!empty($_FILES)) {
    
    if ($_FILES['myFile']['size'] < 1000000) {
        move_uploaded_file( $_FILES['myFile']['tmp_name'], "gallery/" . $_FILES['myFile']['name']);
    } else {
        echo "File size too large!";
    }

}


    function displayImagesUploaded() {

        $images = scandir("gallery"); //returns all file names within a folder
        
        //print_r($images);
        
        for ($i = 2; $i < count($images); $i++) {
            
            echo "<img src='gallery/$images[$i]' width='100' />";
            
        }//for
    
    }//function


?>


<!DOCTYPE html>
<html>
    <head>
        <title> Lab 9: File Upload </title>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <style>
        
            body { text-align: center; }
            
            img { padding: 10px }
            
            img:hover { width: 250px; 
                border-radius: 30px;
            }
            
            h3 { color: blue; }
            
        </style>
    </head>
    <body>
        
        
        <form  method="POST" enctype="multipart/form-data">
        
            <input type="file" name="myFile" />
            <button> Upload File! </button>
            
        </form>

        <hr>
        <h3> Images uploaded: </h3>
        
        <?= displayImagesUploaded() ?>
        
    </body>
</html>