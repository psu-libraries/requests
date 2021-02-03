<?php
require_once 'config/config.php';

include_once $dataBase . 'boQueries.php';

$approved = getRequests($conn, 'Approved');
$reviewed = getRequests($conn, 'Reviewed');
$closed = getRequests($conn, 'Closed');

require_once 'pagelayout/templates/header.php'; ?>

<div class="grid-x">

  <section class="medium-5 cell bordered">
    <?php require_once $forms . 'frmSearch.php'; ?>
  </section>

  <section class="medium-19 cell">
     <table class="responsive-card-table">
      <?php include_once $templates . 'tmpSearchColumns.php';?>

      <tbody>
        <?php
          if ($approved):
            echo buildReportTable($approved, 'boModify.php');
          endif;
          if ($reviewed):
            echo buildReportTable($reviewed, 'boModify.php');
          endif;
          if ($closed):
            echo buildReportTable($closed, 'boView.php');
          endif;
        ?>
      </tbody>
    </table>
  </section>

</div>

<?php require_once 'pagelayout/templates/footer.php';
