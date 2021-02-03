<?php
require_once 'config/config.php';

require_once $dataBase . 'approverQueries.php';

$pending = getPending($conn, $userId);
//$changes = getChange($conn, $userId);
$approved = getApproved($conn, $userId);
$rejected = getRejected($conn, $userId);
$reviewed = getReviewed($conn, $userId);
$closed = getClosed($conn, $userId);

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
            echo buildReportTable($pending, 'approverModify.php');
          endif;
//          if ($changes):
//            echo buildReportTable($changes, 'approverModify.php');
//          endif;
          if ($approved):
            echo buildReportTable($approved, 'approverView.php');
          endif;
          if ($reviewed):
            echo buildReportTable($reviewed, 'approverView.php');
          endif;
          if ($rejected):
            echo buildReportTable($rejected, 'approverView.php');
          endif;
          if ($closed):
            echo buildReportTable($closed, 'approverView.php');
          endif;
        ?>
      </tbody>
    </table>    
  </section>

</div>

<?php require_once 'pagelayout/templates/footer.php';
