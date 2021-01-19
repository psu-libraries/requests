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

    <?php require_once 'pagelayout/views/inc/incViewApprovals.php'; ?>

  <div class="grid-container">
    <div class="grid-x grid-padding-x">

    <?php if ($_SERVER['PHP_SELF'] == '/travel/new.php') : ?>
        <div class="hide-for-small-only medium-auto cell">&nbsp;</div>

        <div class="medium-4 cell">
          <input type="submit"
                 name="submit"
                 value="Submit Request"
                 class="button round text-center">
        </div>

        <div class="hide-for-small-only medium-auto cell">&nbsp;</div>

    <?php elseif ($_SERVER['PHP_SELF'] == '/travel/modify.php'): ?>
      <div class="hide-for-small-only medium-6 cell">&nbsp;</div>

      <div class="medium-4 cell">
        <input type="submit"
               name="accept"
               value="Accept Request"
               class="button rounded success">
      </div>

      <div class="medium-4 cell">
        <input type="submit"
               name="change"
               value="Request Change"
               class="button rounded warning">
      </div>

      <div class="medium-2 cell">
        <input type="submit" name="reject" value="Reject Request"
               class="button rounded alert">
      </div>

      <div class="hide-for-small-only cell auto">&nbsp;</div>

    <?php endif; ?>
    </div>
  </div>
</form>
