<?php
$previousComments = [
    0 => 'This is where the first previous comment would go.',
    1 => 'This is where the second previous comment would go.',
    2 => 'This is where the third previous comment would go.',
];
?>

<fieldset class="fieldset">
  <legend>APPROVALS</legend>

  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="small-24 medium-auto cell">
        <p>
          This request supports our objectives and is appropriate within
          University
          Policy for the purpose indicated above.
        </p>
      </div>
      <div class="small-24 medium-shrink cell float-right">
        <label>
          Next Approver User ID:
          <input type="text"
                 name="nextApprover"
                 maxlength="10"
                 size="10"
                 value="<?php echo $nextApprover; ?>">
        </label>
        <p class="help-text" id="approverHelpText">
          If Business Office, leave blank.
        </p>
      </div>
    </div>
  </div>

  <?php if ($_SERVER['PHP_SELF'] != '/travel-request/new.php'): ?>
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <div class="small-24 cell">
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
  ;?>
          </ul>
        </div>

      </div>
    </div>
  <?php endif;?>
  <div class="grid-container">
    <div class="grid-x">

      <div class="small-24 cell">
        <label>
          Comments:
          <textarea name="comments"
                    id="comments"
                    rows="2"><?php echo $comments; ?></textarea>
        </label>

      </div>
    </div>
  </div>
</fieldset>
