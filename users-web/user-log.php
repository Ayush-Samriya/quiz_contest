<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz-Contestians</title>
</head>
<body>
    <?php
        // SQL conn
        $srvrname = 'localhost';
        $srvruname = 'root';
        $pass = 'jo1ke2r';
        $db = 'mysite';

        $conn = new mysqli($srvrname, $srvruname, $pass, $db);

        // CHECK conn
        if (!$conn) {
            die("Connection failed: " . mysqli_error($conn));
        }
        // echo "<br>Conn Successfully established";

        // query the db for user
        $uid = $_GET['target'];
        
        $query = "select * from signup where uid='$uid'";
        if (mysqli_query($conn, $query)){

            $result = mysqli_query($conn, $query);
            if($row = $result->fetch_row()){
                // if want to fetch row then : 
                while($row){
                    $name = $row[0];
                    $mail = $row[1];
                    break;
                }
            }
        }        
        echo "Welcome user $name<br>";
    ?>
</body>
</html>