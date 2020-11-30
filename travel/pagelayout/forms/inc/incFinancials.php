<fieldset class="fieldset grid-container">
    <legend>FINANCIALS</legend>

    <div class="grid-x grid-padding-x">

        <?php require 'pagelayout/forms/inc/sections/secCostType.php'; ?>

        <div class="medium-shrink cell float-center">
            <div class="grid-containter">
                <div class="grid-x">
                    <div class="medium-12 cell">
                        <label class="<?php echo $arrCostNumber['label'];?> text-right middle">
                            Cost Object Number
                        </label>
                    </div>
                    <div class="medium-12 cell">
                        <input type="text"
                               name="costObjNumber"
                               class="<?php echo $arrCostNumber['input'];?>"
                               maxlength="12"
                               size="15"
                               value="<?php echo $costObjNumber; ?>">

                        <label class="<?php echo $arrCostNumber['error'];?>">
                            <?php echo $arrCostNumber['errorMsg']; ?>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</fieldset>
