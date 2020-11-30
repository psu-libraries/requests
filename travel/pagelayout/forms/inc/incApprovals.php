<fieldset class="fieldset grid-container">
    <legend>APPROVALS</legend>

    <div class="grid-x grid-padding-x">
        <p class="cell">
            This request supports our objectives and is appropriate
            within University Policy for the purpose indicated above.
        </p>
        <div class="medium-4 cell">
            <label class="<?php echo $arrApprover['label'];?>">
                Next Approver User ID:
            </label>
        </div>
        <div class="medium-shrink cell">
            <input type="text"
                   class="<?php echo $arrApprover['input'];?>"
                   name="nextApprover"
                   maxlength="10"
                   size="10"
                   value="<?php echo $nextApprover; ?>">

            <label class="<?php echo $arrApprover['error'];?>">
                <?php echo $arrApprover['errorMsg'];?>
            </label>

            <p class="help-text" id="approverHelpText">
                If Business Office, leave blank.
            </p>
        </div>
    </div>

    <?php if ($_SERVER['PHP_SELF'] != '/travel/new.php'): ?>
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell">

                    <p>Previous Comments:</p>
                    <ul class="no-bullet">
                        <?php
  /*            for ($a = 0; $a < count($previousComments); $a++) :
  if ($a % 2 == 0) :
  $even = 'even';
  else :
  $even = '';
  endif;
  echo "<li class='{$even}'>{$previousComments[$a]}</li>";
  endfor;
  */
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    <?php endif;?>

    <div class="grid-x">

        <?php require 'pagelayout/forms/inc/sections/secAppComments.php';?>

    </div>

</fieldset>
