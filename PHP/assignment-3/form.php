<!DOCTYPE html>
<html>
<head>
	<title>Registration Form</title>
	<style>
		* {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		body {
			font-family: Arial, sans-serif;
			background-color: #f5f5f5;
			color: #444;
			line-height: 1.4;
			font-size: 16px;
		}

		h1 {
			text-align: center;
			margin-top: 20px;
		}

		form {
			max-width: 500px;
			margin: 0 auto;
			padding: 20px;
			background-color: offwhite;
			border-radius: 5px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		}

		input[type=text], input[type=email], textarea {
			width: 100%;
			padding: 12px 20px;
			margin: 8px 0;
			box-sizing: border-box;
			border: 2px solid #ccc;
			border-radius: 4px;
			resize: vertical;
		}

		label {
			font-weight: bold;
			display: block;
			margin-bottom: 10px;
			color: #444;
		}

		.row {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 20px;
		}

		.col-50 {
			width: 50%;
			padding: 0 10px;
			box-sizing: border-box;
		}

		.col-50:last-child {
			padding-right: 0;
		}

		input[type=submit], input[type=button] {
			padding: 12px 20px;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			margin-right: 10px;
			color: #fff;
			font-weight: bold;
			transition: background-color 0.3s ease;
		}

		input[type=submit] {
			background-color: #4CAF50;
		}

		input[type=submit]:hover {
			background-color: #3e8e41;
		}

		input[type=button] {
			background-color: #f44336;
		}

		input[type=button]:hover {
			background-color: #cc2f25;
		}
	</style>
</head>
<body>
	<h1>Registration Form</h1>
	<form id="registration-form" action="form-handel.php" method="POST" enctype="multipart/form-data">
		<div class="row">
			<div class="col-50">
				<label for="first-name">First Name:</label>
				<input type="text" id="first-name" name="first-name" required>
			</div>
			<div class="col-50">
				<label for="last-name">Last Name:</label>
				<input type="text" id="last-name" name="last-name" required>
			</div>
		</div>

		<label for="email">Email:</label>
		<input type="email" id="email" name="email" required>

		<label for="address">Address:</label>
		<textarea id="address" name="address" required></textarea>

		<label for="photo">Photo:</label>
		<input type="file" class="image" name='image' required>

		<div style="text-align: center; padding-top: 15px;">
            <input type="button" value="Cancel" onclick="clearForm()">
			<input type="submit" value="Submit">
		</div>
	</form>

	<script>
		function clearForm() {
			document.getElementById("registration-form").reset();
		}
	</script>
</body>
</html>
