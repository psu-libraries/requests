<fieldset class="fieldset grid-container">
  <legend>APPROVALS</legend>

    <div class="grid-container">
      <div class="grid-x grid-padding-y">

        <div class="cell">
            This request supports our objectives and is appropriate within
            University Policy for the purpose indicated above.
        </div>

      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x">
        <div class="medium-4 cell float-right">
          <label>Next Approver User ID:</label>          
        </div>
        <div class="medium-2 cell view bordered">
          <?php echo $nextApprover; ?>
          </div>       
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x grid-padding-y">
        <div class="cell">
          <div class="view">Previous Comments:</div>
          <ul class="no-bullet align-left bordered">
            <?php
              for ($a = 0; $a < count($prevComments); $a++):
                if ($a % 2 == 0):
                  $even = 'even';
                else:
                  $even = '';
                endif;
            ?>
                <li class="<?php echo $even;?> view">
                  <p>
                    <?php echo $prevComments[$a]['comments']; ?>
                  </p>
                  <div class="cell text-right">
                    <small>
                      <?php 
                        echo $prevComments[$a]['commenter_id'] . ' - ' 
                          . fmtDisplayDate($prevComments[$a]['date_entered']);
                      ?>
                    </small>
                  </div>
                </li>
            <?php endfor;?>
          </ul>
        </div>

      </div>
    </div>
</fieldset>