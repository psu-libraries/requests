<?php
require_once 'config/config.php';

include $dataBase . 'myQueries.php';

$pending = getRequests($conn, $userId, "Pending");
$changes = getRequests($conn, $userId, "Change");
$approved = getRequests($conn, $userId, "Approved");
$reviewed = getRequests($conn, $userId, "Reviewed");
$rejected = getRequests($conn, $userId, "Rejected");
$closed = getRequests($conn, $userId, "Closed");

require_once 'pagelayout/templates/header.php';
?>

<div class="grid-x">

  <section class="medium-5 cell bordered">
    <?php require_once $forms . 'frmSearch.php'; ?>
  </section>

  <section class="medium-19 cell">
    <table class="responsive-card-table">
      <?php include_once $templates . 'tmpSearchColumns.php';?>

      <tbody>
        <?php
          if ($pending):
            echo buildReportTable($pending, 'myView.php');
          endif;

          if ($changes):
            echo buildReportTable($changes, 'myModify.php');
          endif;

          if ($approved):
            echo buildReportTable($approved, 'myView.php');
          endif;

          if ($reviewed):
            echo buildReportTable($reviewed, 'myView.php');
          endif;

          if ($rejected):
            echo buildReportTable($rejected, 'myView.php');
          endif;
          
          if ($closed):
            echo buildReportTable($closed, 'myView.php');
          endif;
        ?>
      </tbody>
    </table>    
  </section>

</div>

<?php 
require_once 'pagelayout/templates/footer.php';
