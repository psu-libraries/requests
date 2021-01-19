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
    <?php endif;?>

    <div class="grid-x">
        <?php
            $arrNotes = [
                'label' => $arrComments['label'],
                'labelText' => 'Comments:',
                'input' => $arrComments['input'],
                'id' => 'comments',
                'value' => $comments,
                'error' => $arrComments['error'],
                'errorMsg' => $arrComments['errorMsg']
            ];

            require $root . '/pagelayout/templates/notes.php';
        ?>
    </div>

</fieldset>
