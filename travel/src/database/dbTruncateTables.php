<?php

$sql = "SHOW TABLES";
$results = $conn->query($sql);
$show = $results->fetch_all();

//displayArray($show);

foreach ($show as $key => $value):
    $truncateFlag = 0;

    try {
        $sqla = "TRUNCATE " . $show[$key][0];
        $resultsa = $conn->query($sqla);
    } catch (mysqli_sql_exception $e) {
        echo "Problem truncating " . $show[$key][0] . "<br>";
        $truncateFlag = 1;
    }

    if ($truncateFlag === 0):
        echo $show[$key][0] . " table has been truncated.<br>";
    endif;
endforeach;
