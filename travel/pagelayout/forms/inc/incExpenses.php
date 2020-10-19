  <fieldset class="fieldset">
    <legend>EXPENSES</legend>

    <table class=" grid-container stack">
      <caption>EXPENSES TABLE</caption>
      <thead>
        <tr class="grid-x">
          <th class="medium-6 text-center">Expenses</th>
          <th class="medium-18 text-center">Instructions</th>
        </tr>
      </thead>
      <tbody>

      <?php
        require 'pagelayout/forms/inc/sections/secExpTransportation.php';
        require 'pagelayout/forms/inc/sections/secExpLodging.php';
        require 'pagelayout/forms/inc/sections/secExpFood.php';
        require 'pagelayout/forms/inc/sections/secExpRegistration.php';
        require 'pagelayout/forms/inc/sections/secExpOther.php';
        require 'pagelayout/forms/inc/sections/secExpTotal.php';
        ?>


      </tbody>
    </table>
    <?php if ($_SERVER['PHP_SELF'] != '/request/travel/new.php') : ?>
    <div class="grid-container">
      <div class="grid-x">
        <div class="cell">
          <p><b>Files previously uploaded for this request:</b></p>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x">
        <div class="small-1 cell">&nbsp;</div>
        <div class="medium-4 cell">
          <ul class="no-bullet">
            <li><a href="">Flight comparison</a></li>
            <li><a href="">Hotel comparison</a></li>
          </ul>
        </div>
      </div>
    </div>
    <?php endif;?>

    <div class="grid-container">
      <div class="grid-x">
        <div class="medium-8 cell">
          <label>
            <strong>Select file to upload</strong>
            <input type="file" name="files[]" multiple>
          </label>
          </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x">

        <div class="cell">
          <label for="expNotes" class="<?php echo $arrExpNotes['label']; ?>">
            Notes
            <textarea name="expNotes"
                      class="<?php echo  $arrExpNotes['input']; ?>"
                      id="expNotes"
                      rows="2"><?php echo $expNotes; ?></textarea>
          </label>
        </div>
        <label class="<?php echo $arrExpNotes['error']; ?>">
          <?php echo $arrExpNotes['errorMsg']; ?>
        </label>
      </div>
    </div>
  </fieldset>
