<fieldset class="fieldset grid-container">
    <legend>GENERAL INFORMATION</legend>

<!--    <div class="grid-container"> -->
        <div class="grid-x">
            <div class="medium-9 cell">

                <label class="<?php echo $arrDest['label']; ?>">
                    Destination (City, State): <span class="required">*</span>

                    <input type="text"
                           name="destination"
                           class="<?php echo $arrDest['input']; ?>"
                           maxlength="100"
                           size="55"
                           value="<?php echo $destination; ?>">
                </label>

                <label class="<?php echo $arrDest['error']; ?>">
                    <?php echo $arrDest['errorMsg']; ?>
                </label>

                <label class="<?php echo $arrConf['label']; ?>">
                    Conference Name: <span class="required">*</span>

                    <input type="text"
                          name="conference"
                          class="<?php echo $arrConf['input']; ?>"
                          maxlength="250"
                          value="<?php echo $conference; ?>"
                          size="53">
                </label>

                <label class="<?php echo $arrConf['error']; ?>">
                    <?php echo $arrConf['errorMsg']; ?>
                </label>

            </div>

            <?php
                require_once 'pagelayout/forms/inc/sections/secDeparture.php';
                require_once 'pagelayout/forms/inc/sections/secReturn.php';
            ?>

        </div>
<!--    </div>

    <div class="grid-container">
-->
        <div class="grid-x">
            <div class="medium-10 cell">

                <label class="<?php echo $arrSpons['label']; ?>">
                    Sponsoring Organization: <span class="required">*</span>

                    <input type="text"
                          name="sponsor"
                          class="<?php echo $arrSpons['input']; ?>"
                          maxlength="250"
                          size="58"
                          value="<?php echo $sponsor; ?>"
                          required>
                </label>

                <label class="<?php echo $arrSpons['error']; ?>">
                    <?php echo $arrSpons['errorMsg']; ?>
                </label>
            </div>

            <?php require 'pagelayout/forms/inc/sections/secMember.php';?>
        </div>
        <div class="grid-x">

        <?php require 'pagelayout/forms/inc/sections/secGiNotes.php';?>
        </div>
<!--    </div> -->
</fieldset>
