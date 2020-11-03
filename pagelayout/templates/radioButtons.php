<div class="medium-shrink cell">
    <div class="grid-container">
        <div class="grid-x">

            <div class="medium-shrink cell">
                <label class="<?php echo $arrRadios['label']; ?>">
                    <?php echo $mainLabel;?>
                <?php
                    if ($required === true) : ?>
                    <span class="required">* </span>
                <?php endif; ?>
                </label>
            </div>

            <div class="medium-shrink cell">
                <?php for ($a = 0; $a < count($arrRadios); $a++) : ?>
                    <input type="radio"
                           name="<?php echo $arrRadios[$a]['name'];?>",
                           class="<?php echo $arrRadios[$a]['input']; ?>"
                           id="<?php echo $arrRadios[$a]['id'];?>"
                           value="<?php echo $arrRadios[$a]['value'];?>"
                    <?php
                        if ($arrRadios[$a]['var'] == $arrRadios[$a]['value']) :
                            echo 'checked';
                        endif;
                    ?>>

                    <label for="<?php echo $arrRadios[$a]['id'];?>"
                        class="<?php echo $arrRadios[$a]['label'];?> bool-label">
                        <?php echo $arrRadios[$a]['labelText'];?>
                    </label>

                <?php endfor; ?>

                <label class="<?php echo $arrBools['error']; ?>">
                    <?php echo $arrBools['errorMsg']; ?>
                </label>
            </div>
        </div>
    </div>
</div>
