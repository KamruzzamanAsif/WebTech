<?php
	$nameErr = $emailErr = "";
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$fname = test_input($_POST['first-name']);
		$lname = test_input($_POST['last-name']);
		$name = $fname. ' '. $lname;
		if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
			$nameErr = "Only letters and white space allowed";
		}
		$email = test_input($_POST['email']);
		// check if e-mail address is well-formed
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$emailErr = "Invalid email format";
		}
		$address = test_input($_POST['address']);
		$imageName = $_FILES['image']['name'];
		$tmpName = $_FILES['image']['tmp_name'];
		$uploadLoc = '../img/'.$imageName;

		move_uploaded_file($tmpName, $uploadLoc);
	}

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<title>Registration Form Submitted</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<style>
		body {
			background-color: #f5f5f5;
			color: #444;
			font-family: Arial, sans-serif;
			line-height: 1.4;
			font-size: 16px;
		}
		h1 {
			text-align: center;
			margin-top: 20px;
		}
		table {
			background-color: #fff;
			border-collapse: collapse;
			border-radius: 5px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			margin: 0 auto;
			max-width: 700px;
			padding: 20px;
			width: 100%;
		}
		th, td {
			padding: 10px;
			text-align: left;
			vertical-align: top;
		}
		th {
			background-color: #f5f5f5;
			font-weight: bold;
		}
		img {
			display: block;
			margin: auto;
			max-width: 100%;
			height: auto;
		}
		.error {
			color: #FF0000;
		}
	</style>
</head>
<body>
	<div class="container" style="padding-top: 150px;">
		<table>
			<tr>
				<th>Name:</th>
				<td><?php echo $name; ?> <span class="error"> <?php echo '*'.' '.$nameErr;?></span></td>

                <td rowspan="3"><img src="../img/<?php echo $imageName; ?>" alt="image" width="100%" height="100%" style='border-radius: 50%; width: 10rem; min-height: 10rem;'></td>
			</tr>
			<tr>
				<th>Email:</th>
				<td><?php echo $email; ?> <span class="error"> <?php echo '*'.' '.$emailErr;?></td>
			</tr>
			<tr>
				<th>Address:</th>
				<td><?php echo $address; ?></td>
			</tr>
		</table>
	</div>
</body>
</html>
