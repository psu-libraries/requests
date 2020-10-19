<div class="grid-container">
  <div class="grid-x grid-padding-y">
    <div class="small-24 cell">
      <label>Type of Travel: </label>
      <?php
        if ($travelType == 'admin'):
          echo 'Administrative';
        elseif ($travelType == 'prof'):
          echo 'Professional';
        endif;
      ?>
    </div>
  </div>
</div>

<div class="grid-container">
  <div class="grid-x">

    <div class="small-24 medium-7 cell">
      <label>Name: </label>
      <input type="text"
             value="<?php echo $empName ?? ''; ?>"
             class="no-border"
             readonly>
    </div>

    <div class="small-24 medium-3 cell">
      <label>Access ID: </label>
      <input type="text"
             value="<?php echo $accessId ?? ''; ?>"
             readonly>
    </div>

    <div class="small-24 medium-auto cell">
      <label>Department:</label>
      <input type="text"
             value="<?php echo $department ?? ''; ?>"
             readonly>
    </div>

    <div class="small-24 medium-3 cell">
      <label>Date:</label>
      <input type="text"
             value="<?php echo $submissionDate ?? ''; ?>"
             readonly>
    </div>

  </div>
</div>