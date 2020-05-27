<?php
	$checker = $_POST['checker'];
	if($checker == 'signup'){
		$uname = $_POST['name'];
		$urepas = $_POST['re_pass'];
	}
	if ($ucheck = $_POST['agree-term'] ?? ''){
		$ucheck_re = 'on';
	}
	else{
		$ucheck_re = 'off';
	}

	$umail = $_POST['email'];
	$upass = $_POST['pass'];

	// prevent sql injection
	if ($checker == 'signup'){
		$uname = stripcslashes($uname);
		$urepas = stripcslashes($urepas);
	}
	$umail = stripcslashes($umail);
	$upass = stripcslashes($upass);

	// SQL conn
	$srvrname = 'localhost';
	$srvruname = 'root';
	$pass = 'jo1ke2r';
	$db = 'mysite';

	$conn = new mysqli($srvrname, $srvruname, $pass, $db);

	// prevention step : 2
	if ($checker == 'signup'){
		$uname = mysqli_real_escape_string($conn, $uname);
		$urepas = mysqli_real_escape_string($conn, $urepas);
	}
	$umail = mysqli_real_escape_string($conn, $umail);
	$upass = mysqli_real_escape_string($conn, $upass);

	// prevention step : 3
	if ($checker == 'signup'){
		$uname = htmlentities($uname);
		$urepas = htmlentities($urepas);
	}
	$umail = htmlentities($umail);
	$upass = htmlentities($upass);

	// prevention step : 4
	if ($checker == 'signup'){
		$uname = htmlspecialchars($uname);
		$urepas = htmlspecialchars($urepas);
	}
	$umail = htmlspecialchars($umail);
	$upass = htmlspecialchars($upass);

	// CHECK conn
	if (!$conn) {
  		die("Connection failed: " . mysqli_error($conn));
	}
	// echo "Connected successfully";

	// query the db for user
	if ($checker == 'signup'){

		// hashing the password and username
		$upass = hash('sha256', $upass);
		$urepas = hash('sha256', $urepas);
		$uid = uniqid();
		$uid = hash('sha512', $uid);

		$query = "INSERT INTO `signup` (`uname`, `umail`, `upass`, `urpass`, `uterms`, `uid`) VALUES ('$uname', '$umail', '$upass', '$urepas', '$ucheck_re', '$uid');";
		$result = mysqli_query($conn, $query);
		if ($result){
			echo 'Sign up successfully';
			header("location:users-web/user-log.php?target=".$uid."&terms=".$terms);
		}
		else{
			die('Sign up failed ' . mysqli_error($conn));
		}
	}
	else{
		// unhashing the password
		$upass = hash('sha256', $upass);

		$query = "select * from signup where umail='$umail' and upass='$upass'";
		if (mysqli_query($conn, $query)){

			$result = mysqli_query($conn, $query);
			if($row = $result->fetch_row()){
				echo 'Login Successfully';
				// if want to fetch row then : 
				while($row){
					$uid = $row[5];
					$terms = $row[4];
					break;
				}
				header("location:users-web/user-log.php?target=".$uid."&terms=".$terms);
				
			}
			else{
				die('Login failed ' . mysqli_error($conn));
			}
			$result->close();
		}
	}
	mysqli_close($conn)
?>