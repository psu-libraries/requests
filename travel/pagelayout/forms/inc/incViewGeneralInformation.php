<fieldset class="fieldset">
  <legend>GENERAL INFORMATION</legend>

  <div class="grid-container">
    <div class="grid-x">

      <div class="small-24 medium-10 cell">
        <label>Destination (City, State): </label>
        <input type="text"
               value="<?php echo $destination ?? ''; ?>"
               readonly>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="small-24 medium-3 cell">
        <label>Departure Date: </label>
        <input type="text"
               value="<?php echo $departureDate ?? ''; ?>"
               readonly>
      </div>

      <div class="small-24 medium-3 cell">
        <label>Departure Time: </label>
        <input type="text"
               value="<?php echo $departureTime ?? ''; ?>"
               readonly>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="small-24 medium-3 cell">
        <label>Return Date: </label>
        <input type="text"
               value="<?php echo $returnDate ?? ''; ?>"
               readonly>
      </div>

      <div class="small-24 medium-3 cell">
        <label>Return Time: </label>
        <input type="text"
               value="<?php echo $returnTime ?? ''; ?>"
               readonly>
      </div>

    </div>
  </div>

  <div class="grid-container">
    <div class="grid-x">

      <div class="small-24 medium-10 cell">
        <label>Conference Name: </label>
        <input type="text"
               value="<?php echo $conferenceName ?? ''; ?>"
               readonly>
      </div>

      <div class="small-24 medium-10 cell">
        <label>Sponsoring Organization: </label>
        <input type="text"
               value="<?php echo $sponsor ?? ''; ?>"
               readonly>
      </div>

      <div class="small-24 medium-4 cell">
        <label>Are you a member? </label>
        <?php
          if ($member == 'yes'):
            echo 'Yes';
          elseif ($member == 'no'):
            echo 'No';
          endif;
        ?>
      </div>

    </div>
  </div>

  <div class="grid-container">
    <div class="grid-x">

      <div class="small-24 cell">
        <label>
          Roles, Goals, Attendance, and other additional helpful notes:
        </label>
        <textarea rows="1" readonly>
          <?php echo $giNotes ?? ''; ?>
        </textarea>
      </div>
    </div>
  </div>
</fieldset>