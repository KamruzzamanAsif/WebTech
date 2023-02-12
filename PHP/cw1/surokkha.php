<html>
<body>

    <form action="surokkha-form-handler.php" method="post">  
        <ul>
            <li>NID: <input type="number" name="nid"></li>
            <li>Date of Birth: <input type="date" name="dob"></li>
            <!-- php code to generate random captcha as string -->
            <?php
                $n=10;
                function getName($n) {
                    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    $randomString = '';

                    for ($i = 0; $i < $n; $i++) {
                        $index = rand(0, strlen($characters) - 1);
                        $randomString .= $characters[$index];
                    }

                    return $randomString;
                }
                echo "Type this Captcha: ". getName($n);
            ?>

            <li>Captcha: <input type="text" name="captcha"></li>
        </ul> 
        <input type="submit">
    </form>

</body>
</html> 