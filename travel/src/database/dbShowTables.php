<?php

$sql = "SHOW TABLES";
 $results = $conn->query($sql);
 $show = $results->fetch_all();
 displayArray($show);
 unset($sql);
 unset($results);
