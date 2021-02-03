<fieldset class="fieldset">
  <legend>FLEET RESERVATION</legend>

  <div class="grid-container">
    <div class="grid-x grid-padding-y">
      <div class="medium-9 cell view">
        <label>Vehicle</label>
        <div class="view bordered">
          <?php echo $fleet;?>
        </div>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="medium-3 cell view">
      <?php if (length($pickupDate) > 0): ?>
        <label>Pick-up Date:</label>
        <div class="view text-center bordered">
          <?php echo fmtDisplayDate($pickupDate);?>
        </div>
        <?php endif; ?>
      </div>

      <div class="medium-3 cell view">
      <?php if (length($pickupTime) > 0): ?>
        <label>Pick-up Time</label>
        <div class="view text-center bordered">
          <?php echo fmtDisplayTime($pickupTime);?>
        </div>
        <?php endif; ?>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="medium-3 cell view">
      <?php if (length($dropoffDate) > 0): ?>
        <label>Return Date:</label>
        <div class="view text-center bordered">
          <?php echo fmtDisplayDate($dropoffDate);?>
        </div>
        <?php endif; ?>
      </div>

      <div class="medium-3 cell view">
      <?php if (length($dropoffTime) > 0): ?>
        <label>Return Time</label>
        <div class="view text-center bordered">
          <?php echo fmtDisplayTime($dropoffTime);?>        </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div class="grid-container">
    <div class="grid-x grid-padding-y">

      <div class="cell view">
        <label>Carpooling? List other employees</label>
        <div class="view bordered">
          <?php echo $carpool;?>
        </div>        
      </div>

    </div>
  </div>
</fieldset>