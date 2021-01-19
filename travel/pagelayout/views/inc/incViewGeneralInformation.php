<fieldset class="fieldset">
  <legend>GENERAL INFORMATION</legend>

  <div class="grid-container">
    <div class="grid-x grid-padding-y">

      <div class="medium-10 cell">
        <label>Destination (City, State): </label>
        <div class="view bordered">
          <?php echo $destination;?>
        </div>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="medium-3 cell">
        <label>Departure Date: </label>
        <div class="view bordered">
          <?php echo fmtDisplayDate($departureDate);?>
        </div>
      </div>

      <div class="medium-3 cell">
        <label>Departure Time: </label>
        <div class="view bordered">
          <?php echo fmtDisplayTime($departureTime);?>
        </div>
      </div>

      <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

      <div class="medium-3 cell">
        <label>Return Date: </label>
        <div class="view bordered">
          <?php echo fmtDisplayDate($returnDate);?>
        </div>
      </div>

      <div class="medium-3 cell">
        <label>Return Time: </label>
        <div class="view bordered">
          <?php echo fmtDisplayTime($returnTime);?>
        </div>
      </div>

    </div>
  </div>

  <div class="grid-container">
    <div class="grid-x grid-padding-y">

      <div class="medium-10 cell">
        <label>Conference Name: </label>
        <div class="view bordered">
          <?php echo $conference;?>
        </div>
      </div>

      <div class="medium-10 cell">
        <label>Sponsoring Organization: </label>
        <div class="view bordered">
          <?php echo $sponsor;?>
        </div>
      </div>

      <div class="medium-4 cell">
        <label>Are you a member? </label>
        <div class="view bordered">
          <?php echo $member;?>
        </div>
      </div>

    </div>
  </div>

  <div class="grid-container">
    <div class="grid-x grid-padding-y">

      <div class="cell">
        <label>
          Roles, Goals, Attendance, and other additional helpful notes:
        </label>
        <div class="view bordered">
          <?php echo $gINotes;?>
        </div>
      </div>
    </div>
  </div>
</fieldset>