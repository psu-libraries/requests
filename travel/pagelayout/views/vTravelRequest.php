<h1 class="text-center">Travel Request Form</h1>
<p class="text-center"><span class="required">*</span> Denotes required field</p>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>"
      method="post"
      class="travelForm"
      enctype="multipart/form-data"
      novalidate>

    <?php require_once 'pagelayout/views/inc/incViewPersonalInfo.php'; ?>

    <?php require_once 'pagelayout/views/inc/incViewGeneralInformation.php'; ?>

    <?php require_once 'pagelayout/views/inc/incViewExpenses.php'; ?>

    <?php require_once 'pagelayout/views/inc/incViewFleetReservation.php'; ?>

    <?php require_once 'pagelayout/views/inc/incViewFinancials.php'; ?>

    <?php 
      if (isset($approvalStatus) && $approvalStatus == 'Approved'):
        require_once 'pagelayout/forms/inc/incApprovals.php';
      else:
        require_once 'pagelayout/views/inc/incViewApprovals.php';
      endif;
    ?>


 <?php if ($_SERVER['PHP_SELF'] == '/travel/boReview.php'): ?>
  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="hide-for-small-only medium-8 cell">&nbsp;</div>

      <?php if (isset($approvalStatus) && $approvalStatus == 'Approved'):?>
        <div class="medium-4 cell text-center">

          <input type="submit"
                name="reviewed"
                value="Reviewed"
                class="button rounded success">
        </div>

        <div class="medium-4 cell text-center">
      <?php else: ?>
          <div class="medium-8 cell text-center">
      <?php endif; ?>

          <button onclick="goBack()" class="button rounded warning">
            Go Back
          </button>
        </div>

        <div class="hide-for-small-only medium-8 cell">&nbsp;</div>

      </div>
    </div>
  </div>
<?php endif; ?>
</form>
