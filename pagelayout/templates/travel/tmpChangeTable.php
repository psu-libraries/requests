<?php 
    foreach ($changes as $change):
        $requestId = $change['request_id'];
?>
        <tr>
            <td data-label="Name of Requestor">
                <?php echo $change['name']; ?>
            </td>
            <td data-label="Access ID" class="text-center">
                <?php echo $change['access_id'];?>
            </td>
            <td data-label="Date Submitted" class="text-center">
                <?php echo $change['submission_date'];?>
            </td>
            <td data-label="Conference" class="text-wrap">
                <?php echo $change['conference'];?>
            </td>
            <td data-label="Status" class="text-center">
                <a href="myModify.php?id=" . $requestId .">Pending</a>
            </td>
        </tr>
<?php
    endforeach;
?>
