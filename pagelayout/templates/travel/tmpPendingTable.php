<?php 
    foreach ($pendings as $pending):
        $requestId = $pending['request_id'];
?>
        <tr>
            <td data-label="Name of Requestor">
                <?php echo $pending['name']; ?>
            </td>
            <td data-label="Access ID" class="text-center">
                <?php echo $pending['access_id'];?>
            </td>
            <td data-label="Date Submitted" class="text-center">
                <?php echo $pending['submission_date'];?>
            </td>
            <td data-label="Conference" class="text-wrap">
                <?php echo $pending['conference'];?>
            </td>
            <td data-label="Status" class="text-center">
                <a href="myModify.php?id=" . $requestId .">Pending</a>
            </td>
        </tr>
<?php
    endforeach;
?>
