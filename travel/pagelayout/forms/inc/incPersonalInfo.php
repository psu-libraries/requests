<div class="grid-container">
  <div class="grid-x">
    <fieldset class="cell">
      <legend>
        <span id="ttLegend" class="<?php echo $arrTravel['label']; ?>">Type of Travel:</span>
        <span class="required">*</span>
      </legend>
      <input type="checkbox"
             name="travelType"
             class = "<?php echo $arrTravel['input']; ?>"
             id="admin"
             value="Administrative"
             <?php if ($travelType == 'Administrative') {echo 'checked';
             } ?>
             required>
      <label for="admin" class="<?php echo $arrTravel['label']; ?>">Administrative</label>

      <input type="checkbox"
             name="travelType"
             class = "<?php echo $arrTravel['input']; ?>"
             id="prof"
             value="Professional"
             <?php if ($travelType == 'Professional') {echo 'checked';
             } ?>
             >
      <label for="prof" class="<?php echo $arrTravel['label']; ?>">Professional</label>

      <label id="travelTypeError" class="<?php echo $arrTravel['error']; ?>">
        <?php echo $arrTravel['errorMsg']; ?>
      </label>
    </fieldset>
  </div>
</div>

<div class="grid-container">
  <div class="grid-x">

    <div class="medium-7 cell">
      <label class="<?php echo $arrEmpName['label']; ?>">
        Name: <span class="required">*</span>
        <input type="text"
               name="empName"
               class="<?php echo $arrEmpName['input']; ?>"
               maxlength="50"
               size="30"
               value="<?php echo $empName; ?>"
               placeholder="Firstname Lastname">

        <label class="<?php echo $arrEmpName['error'];?>">
            <?php echo $arrEmpName['errorMsg']; ?>
        </label>
      </label>
    </div>

    <div class="small-24 medium-3 cell" id="accessId">
      <label class="<?php echo $arrAccessId['label']; ?>">
        Access ID: <span class="required">*</span>
        <input type="text"
               name="accessId"
               class="<?php echo $arrAccessId['input']; ?>"
               size="10"
               value="<?php echo $accessId; ?>"
               disabled>

        <label class="<?php echo $arrAccessId['error']; ?>">
            <?php echo $arrAccessId['errorMsg'];?>
        </label>
      </label>
    </div>

    <div class="small-24 medium-auto cell" id="department">
      <label class="<?php echo $arrDept['label']; ?>">
        Department: <span class="required">*</span>
        <input type="text"
               name="department"
               class="<?php echo $arrDept['input']; ?>"
               value="<?php echo $department; ?>"
               minlength="3"
               maxlength="250"
               size="70"
               pattern="^[\w \d,\-&']+$"
               required>

        <span class="<?php echo $arrDept['error']; ?>"">
            <?php echo $arrDept['errorMsg'];?>
        </span>

      </label>
    </div>

    <div class="small-24 medium-3 cell" id="submissionDate">
      <label>Date:</label>
      <?php echo $submissionDate; ?>
    </div>

  </div>
</div>
