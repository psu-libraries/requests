<?php

require_once 'pagelayout/forms/inc/incVehicleArray.php';

?>

<fieldset class="fieldset">
  <legend>FLEET RESERVATION</legend>

  <div class="grid-container">
    <div class="grid-x">
      <div class="small-24 medium-9 cell">
        <label>Vehicle</label>
        <select readonly>
          <option value="">- Select Vehicle -</option>
          <?php
              foreach ($vehicles as $value => $key):
                if ($key == $vehicle):
                  echo "<option value='{$value}' selected>{$key}</option>";
                else:
                  echo "<option value='{$value}'>{$key}</option>";
                endif;
              endforeach;
            ?>
        </select>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="small-24 medium-3 cell">
        <label>Pick-up Date:</label>
        <input type="text"
               value="<?php echo $pickupDate ?? ''; ?>"
               readonly>
      </div>

      <div class="small-24 medium-3 cell">
        <label>Pick-up Time</label>
        <input type="text"
               value="<?php echo $pickupTime ?? ''; ?>"
               readonly>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="small-24 medium-3 cell">
        <label>Return Date:</label>
        <input type="text"
               value="<?php echo $dropoffDate ?? ''; ?>"
               readonly>
      </div>

      <div class="small-24 medium-3 cell">
        <label>Return Time</label>
        <input type="text"
               value="<?php echo $dropoffTime ?? ''; ?>"
               readonly>
      </div>

    </div>
  </div>
  <div class="grid-container">
    <div class="grid-x">

      <div class="small-24 medium-shrink cell">
        <label>Carpooling? List other employees</label>
        <input type="text"
               value="<?php echo $carpool ?? ''; ?>"
               readonly>
      </div>

    </div>
  </div>
</fieldset>