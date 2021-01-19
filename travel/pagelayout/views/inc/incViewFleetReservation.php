<fieldset class="fieldset">
  <legend>FLEET RESERVATION</legend>

  <div class="grid-container">
    <div class="grid-x grid-padding-y">
      <div class="medium-9 cell view">
        <label>Vehicle</label>
        <div class="view bordered">
          <?php echo $fleet['vehicle'];?>
        </div>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="medium-3 cell view">
      <?php if (length($fleet['pickup_date']) > 0): ?>
        <label>Pick-up Date:</label>
        <div class="view text-center bordered">
          <?php echo fmtDisplayDate($fleet['pickup_date']);?>
        </div>
        <?php endif; ?>
      </div>

      <div class="medium-3 cell view">
      <?php if (length($fleet['pickup_time']) > 0): ?>
        <label>Pick-up Time</label>
        <div class="view text-center bordered">
          <?php echo fmtDisplayTime($fleet['pickup_time']);?>
        </div>
        <?php endif; ?>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="medium-3 cell view">
      <?php if (length($fleet['dropoff_date']) > 0): ?>
        <label>Return Date:</label>
        <div class="view text-center bordered">
          <?php echo fmtDisplayDate($fleet['dropoff_date']);?>
        </div>
        <?php endif; ?>
      </div>

      <div class="medium-3 cell view">
      <?php if (length($fleet['dropoff_time']) > 0): ?>
        <label>Return Time</label>
        <div class="view text-center bordered">
          <?php echo fmtDisplayTime($fleet['dropoff_time']);?>
        </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <div class="grid-container">
    <div class="grid-x grid-padding-y">

      <div class="cell view">
        <label>Carpooling? List other employees</label>
        <div class="view bordered">
          <?php echo $fleet['carpooling'];?>
        </div>        
      </div>

    </div>
  </div>
</fieldset>