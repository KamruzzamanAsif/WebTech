<html>
	<body>
		<p>
		<?php
			$name = "Kamruzzaman Asif";
			echo $name;
			echo "<br>";

			$cgpa = array("Peter"=>"3.00", "Ben"=>"3.75", "Joe"=>"4.00");

			foreach($cgpa as $x => $x_value) {
				echo "Name=" . $x . ", CGPA=" . $x_value;
				echo "<br>";
			}

			echo $cgpa['Peter'];
		?>
		</p>
	</body>
</html>



