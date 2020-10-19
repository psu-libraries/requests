<div class="grid-container">
  <div class="grid-y">

    <div class="grid-x">
      <div class="small-24 cell">Type of Travel:</div>
      <div class="small-24 medium-12 cell">
        <label>
          <input type="checkbox" name="travelType" id="admin"
                 value="administrative">
          <i>Administrative</i>
        </label>
      </div>
      <div class="small-24 medium-12 cell">
        <label>
          <input type="checkbox" name="travelType" id="prof"
                 value="professional">
          <i>Professional</i>
        </label>
      </div>
    </div>

    <div class="small-24 cell even">
      <label>
        Name:
        <input type="text" name="empName" maxlength="50" value="">
      </label>
    </div>

    <div class="small-24 cell">
      <label>
        Access ID:
        <input type="text" name="accessId" maxlength="15" value=""
               placeholder="ex. abc123">
      </label>
    </div>

    <div class="small-24 cell even">
      <label>
        Department:
        <input type="text" name="department" value="" maxlength="250">
      </label>
    </div>

    <div class="small-24 cell">
      <label>
        Start Date Submitted:
        <input type="text" name="todaysDate" maxlength="10" value=""
               placeholder="<?php echo $currentDate; ?>">
      </label>
    </div>

    <div class="small-24 cell even">
      <label>
        End Date Submitted:
        <input type="text" name="todaysDate" maxlength="10"
               placeholder="<?php echo $currentDate; ?>">
      </label>
    </div>

    <div class="small-24 cell">
      <label>
        Destination:
        <input type="text" name="destination" maxlength="100" value="">
      </label>
    </div>

    <!--    <div class="small-24 cell even">
      <label>
        Departure Date:
        <input type="text" name="departure" maxlength="10" size="10" value=""
               placeholder="<?php echo $currentDate; ?>">
      </label>
    </div>

    <div class="small-24 cell">
      <label>
        Return Date:
        <input type="text" name="returnDate" maxlength="10" value=""
               placeholder="<?php echo $currentDate; ?>">
      </label>
    </div>
-->
    <div class="small-24 cell even">
      <label>
        Conference Name:
        <input type="text" name="purpose" maxlength="50" value="">
      </label>
    </div>

    <div class="small-24 cell">
      <label>
        Sponsoring Organization:
        <input type="text" name="sponsor" maxlength="250" value="">
      </label>
    </div>

    <div class="small-24 cell even">
      <div class="grid-x">
        <div class="small-24 cell">Cost Object Type:</div>
        <div class="small-24 medium-12 cell">
          <label>
            <input type="radio" name="costType" id="cc" value="Cost Center">
            Cost Center
          </label>
        </div>
        <div class="small-24 medium-12 cell">
          <label>
            <input type="radio" name="costType" id="io" value="Internal Order">
            Internal Order
          </label>
        </div>
      </div>
    </div>

    <div class="small-24 cell">
      <div class="grid-x">
        <div class="small-24 cell">Personal Travel:</div>
        <div class="small-24 medium-12 cell">
          <label>
            <input type="radio" name="personalTravel" id="ptYes" value="yes">
            Yes
          </label>
        </div>
        <div class="small-24 medium-12 cell">
          <label>
            <input type="radio" name="personalTravel" id="ptNo" value="no">
            No
          </label>
        </div>
      </div>
    </div>

    <div class="small-24 cell even">
      <label>
        Cost Object Number:
        <input type="text" name="costObjNumber" maxlength="15" value="">
      </label>
    </div>

  </div>
  <div>&nbsp;</div>
</div>