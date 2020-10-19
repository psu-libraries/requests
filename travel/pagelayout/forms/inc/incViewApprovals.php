<?php
  $previousComments = [
      0 => 'This is where the first previous comment would go.',
      1 => 'This is where the second previous comment would go.',
      2 => 'This is where the third previous comment would go.'
  ];
?>
<div class="grid-container">
  <fieldset class="fieldset">
    <legend>APPROVALS</legend>

    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <div class="small-24 cell">
          <p>
            This request supports our objectives and is appropriate within
            University
            Policy for the purpose indicated above.
          </p>
        </div>

      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <div class="small-24 medium-shrink cell float-left">
          Cost Object Type<br>
          <input type="radio"
                 name="costType"
                 id="cc"
                 value="Cost Center"
                 <?php
                  if ($costType == 'cc'):
                    echo 'checked';
                  endif;
                 ?>>
          <label for="cc">Cost Center</label>

          <input type="radio"
                 name="costType"
                 id="io"
                 value="Internal Order"
                 <?php
                  if ($costType == 'io'):
                    echo 'checked';
                  endif;
                 ?>>
          <label for="io">Internal Order</label>
        </div>

        <div class="small-24 medium-shrink cell float-center">
          <label>Cost Object Number</label>
          <input type="text"
                 value="<?php echo $costObjNumber ?? ''; ?>"
                 readonly>
        </div>

        <div class="small-24 medium-shrink cell float-right">
          <label>Next Approver User ID:</label>
          <input type="text"
                 value="<?php echo $nextApprover ?? ''; ?>"
                 readonly>
          <p class="help-text" id="approverHelpText">
            If Business Office, leave blank.
          </p>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <div class="small-24 cell">
          <p>Previous Comments:</p>
          <ul class="no-bullet">
            <?php
              for ($a = 0; $a < count($previousComments); $a++):
                if ($a % 2 == 0):
                  $even = 'even';
                else:
                  $even = '';
                endif;
                echo "<li class='{$even}'>{$previousComments[$a]}</li>";
              endfor;

            ?>
          </ul>
        </div>

      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x">

        <div class="small-24 cell">
          <label>Comments:</label>
          <textarea rows="2" readonly>
              <?php echo $comments ?? '';?>
            </textarea>

        </div>
      </div>
    </div>
  </fieldset>
</div>