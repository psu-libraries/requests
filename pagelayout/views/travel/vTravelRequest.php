<?php
    // Displays error and success messages
    include_once $rootInc . 'incErrorSuccessMessage.php';
?>

<h1 class="text-center">Travel Request Form</h1>
<p class="text-center"><span class="required">*</span> Denotes required field</p>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>"
      method="post"
      class="travelForm"
      enctype="multipart/form-data"
      novalidate>

    <?php 
      require_once $viewsInc . 'incViewPersonalInfo.php';
      require_once $viewsInc . 'incViewGeneralInformation.php';
      require_once $viewsInc . 'incViewExpenses.php';
      require_once $viewsInc . 'incViewFleetReservation.php';
      require_once $viewsInc . 'incViewFinancials.php';
    ?>

    <?php 
      if (isset($approvalStatus) && $approvalStatus == 'Approved'):
        require_once $formInc . 'incApprovals.php';
      else:
        require_once $viewsInc . 'incViewApprovals.php';
      endif;
    ?>


 <?php if ($page == '/travel/boReview.php'): ?>
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
