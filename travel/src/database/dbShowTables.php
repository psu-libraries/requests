<?php

$sql = "SHOW TABLES";
 $results = $conn->query($sql);
 $show = $results->fetch_all();
 //displayArray($show);

 for ($a = 0; $a < count($show); $a++):
    echo "<h4>" . $show[$a][0] . "</h4>";
    $sqla = "DESCRIBE " . $show[$a][0];
    $resultsa = $conn->query($sqla);
    $showa = $resultsa->fetch_all();
?>
    <table>
    <tr>
        <th>Column</th>
        <th>Type/Size</th>
        <th>Null</th>
        <th>Key</th>
        <th>Default</th>
        <th>Increment</th>
        <?php for ($b = 0; $b < count($showa); $b++): ?>
            <tr>
                <td><?php echo $showa[$b][0]; ?></td>
                <td class="text-center"><?php echo $showa[$b][1]; ?></td>
                <td class="text-center"><?php echo $showa[$b][2]; ?></td>
                <td class="text-center"><?php echo $showa[$b][3]; ?></td>
                <td class="text-center"><?php echo $showa[$b][4]; ?></td>
                <td class="text-center"><?php echo $showa[$b][5]; ?></td>
            </tr>
<?php
            unset($sqlb);
            unset($resultsb);
            unset($showb);
         endfor; ?>
    </tr>
 </table>
<?php
    unset($sqla);
    unset($resultsa);
    unset($showa);

 endfor;
