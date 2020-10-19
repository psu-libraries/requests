<fieldset class="fieldset">
  <legend>GENERAL INFORMATION</legend>

    <div class="grid-container">
        <div class="grid-x">

            <div class="small-24 medium-10 cell">
                <label class="<?php echo $arrDest['label']; ?>">
                    Destination (City, State): <span class="required">*</span>
                    <input type="text"
                           name="destination"
                           class="<?php echo $arrDest['input']; ?>"
                           maxlength="100"
                           size="55"
                           value="<?php echo $destination; ?>">
                    <span class="<?php echo $arrDest['error']; ?>">
                        <?php echo $arrDest['errorMsg']; ?>
                    </span>
                </label>
            </div>

            <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

            <div class="medium-6 cell">
                <?php
                require_once 'pagelayout/forms/inc/sections/secDeparture.php';
                ?>
          </div>
          <div class="hide-for-small-only medium-1 cell">&nbsp;</div>

          <div class="medium-6 cell">
              <?php
                require_once 'pagelayout/forms/inc/sections/secReturn.php';
                ?>
          </div>
      </div>
  </div>

  <div class="grid-container">
    <div class="grid-x">
      <div class="small-24 medium-10 cell">
        <label class="<?php echo $arrConf['label']; ?>">
          Conference Name: <span class="required">*</span>
          <input type="text"
                 name="conference"
                 class="<?php echo $arrConf['input']; ?>"
                 maxlength="250"
                 value="<?php echo $conference; ?>"
                 size="53">
          <span class="<?php echo $arrConf['error']; ?>">
              <?php echo $arrConf['errorMsg']; ?>
          </span>
        </label>
      </div>

      <div class="small-24 medium-10 cell">
        <label class="<?php echo $arrSpons['label']; ?>">
          Sponsoring Organization: <span class="required">*</span>
          <input type="text"
                 name="sponsor"
                 class="<?php echo $arrSpons['input']; ?>"
                 maxlength="250"
                 size="58"
                 value="<?php echo $sponsor; ?>"
                 required>
                 <span class="<?php echo $arrSpons['error']; ?>">
                    <?php echo $arrSpons['errorMsg']; ?>
                </span>
        </label>
      </div>

      <div class="small-24 medium-4 cell">
      <label class="<?php echo $arrMember['label']; ?>">
        Are you a member?
        <span class="required">* </span>
      </label>
        <input type="radio"
               name="member"
               class="<?php echo $arrMember['input']; ?>"
               id="memberY"
               value="yes"
               <?php
                if ($member == 'yes') :
                    echo 'checked';
                endif;
                ?>>
        <label for="memberY" class="<?php echo $arrMember['label']; ?>">Yes</label>

        <input type="radio"
               name="member"
               class="<?php echo $arrMember['input']; ?>"
               id="memberN"
               value="no"
               <?php
                if ($member == 'no') :
                    echo 'checked';
                endif;
                ?>
                required>
        <label for="memberN" class="<?php echo $arrMember['label']; ?>">No</label>
        <span id="memberError" class="<?php echo $arrMember['error']; ?>">
           <?php echo $arrMember['errorMsg']; ?>
        </span>
      </div>

    </div>
  </div>

  <div class="grid-container">
    <div class="grid-x">

      <div class="small-24 cell">
        <label class="<?php echo $arrGiNotes['label']; ?>">
          Roles, Goals, Attendance, and other additional helpful notes:
          <textarea name="gINotes"
                    class="<?php echo $arrGiNotes['input']; ?>"
                    id="gINotes"
                    maxlength="500"
                    rows="1"
          ><?php echo $gINotes; ?></textarea>
          <span class="<?php echo $arrGiNotes['error']; ?>">
              <?php echo $arrGiNotes['errorMsg']; ?>
          </span>
        </label>
      </div>

    </div>
  </div>
</fieldset>
