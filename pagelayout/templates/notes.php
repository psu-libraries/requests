<div class="cell">
    <label class="<?php echo $arrNotes['label']; ?>">
        <?php echo $arrNotes['labelText'];?>

        <textarea name="<?php echo $arrNotes['id'];?>"
                  class="<?php echo $arrNotes['input']; ?>"
                  id="<?php echo $arrNotes['id'];?>"
                  maxlength="500"
                  rows="1"><?php echo $value; ?></textarea>
    </label>

    <label class="<?php echo $arrNotes['error']; ?>">
        <?php echo $arrNotes['errorMsg']; ?>
    </label>
</div>
