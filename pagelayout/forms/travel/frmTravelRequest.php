<?php // Displays error and success messages
    include_once $rootInc . 'incErrorSuccessMessage.php';
?>
<h1 class="text-center">Travel Request Form</h1>
<p class="text-center"><span class="required">*</span> Denotes required field</p>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>"
      method="post"
      class="travelForm"
      id="travelform"
      enctype="multipart/form-data"
      novalidate>

  <?php 
    require_once $formInc . 'incPersonalInfo.php';
    require_once $formInc . 'incGeneralInformation.php';
    require_once $formInc . 'incExpenses.php'; 
    require_once $formInc . 'incFleetReservation.php';
    require_once $formInc . 'incFinancials.php';
    require_once $formInc . 'incApprovals.php';
  ?>

  <div class="grid-container">
    <div class="grid-x grid-padding-x">

    <?php 
      require_once $formInc . 'incFormButtons.php';
    ?>
    </div>
  </div>
</form>
