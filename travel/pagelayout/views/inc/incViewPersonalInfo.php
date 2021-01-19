<div class="grid-container">
  <div class="grid-x grid-padding-y">
    <div class="cell">
      <div class="grid-x">

        <div class="medium-shrink cell">
          <label>Type of Travel: </label>
        </div>        
        <div class="medium-3 cell view bordered">
          <?php echo $travelType; ?>
        </div>

      </div>
    </div>
  </div>
</div>

<div class="grid-container">
  <div class="grid-x">

    <div class="medium-7 cell">
      <label>Name: </label>
      <div class="view bordered">
        <?php echo $empName; ?>
      </div>      
    </div>

    <div class="medium-3 cell">
      <label>Access ID: </label>
      <div class="view bordered">
        <?php echo $accessId; ?>
      </div>      
    </div>

    <div class="medium-auto cell">
      <label>Department:</label>
      <div class="view bordered">
        <?php echo $department; ?>
      </div>      
    </div>

    <div class="small-24 medium-3 cell">
      <label>Date:</label>
      <div class="view bordered">
        <?php echo $submissionDate; ?>
      </div>      
    </div>

  </div>
</div>
