<fieldset class="fieldset">
  <legend>FINANCIALS</legend>
  <div class="grid-container">
    <div class="grid-x grid-padding-x">

      <div class="medium-shrink cell float-left">
        <label class="<?php echo $arrCostType['label']; ?>">
          Cost Object Type
        </label>
        <input type="radio"
               name="costType"
               class="<?php echo $arrCostType['input']; ?>"
               id="cc"
               value="Cost Center"
               <?php
               if ($costType == 'cc') :
                   echo 'checked';
               endif;
                ?>>
        <label for="cc" class="<?php echo $arrCostType['label'];?>">
          Cost Center
        </label>
        <input type="radio"
               name="costType"
               class="<?php echo $arrCostType['input'];?>"
               id="io"
               value="Internal Order"
               <?php
                if ($costType == 'io') :
                      echo 'checked';
                endif;
                ?>>
        <label for="io" class="<?php echo $arrCostType['label'];?>">
          Internal Order
        </label>
        <label class="<?php echo $arrCostType['error'];?>">
            <?php echo $arrCostType['errorMsg'];?>
        </label>
      </div>

      <div class="medium-shrink cell float-center">
        <label class="<?php echo $arrCostNumber['label'];?>">
          Cost Object Number
          <input type="text"
                 name="costObjNumber"
                 class="<?php echo $arrCostNumber['input'];?>"
                 maxlength="12"
                 size="15"
                 value="<?php echo $costObjNumber; ?>">
        </label>
        <label class="<?php echo $arrCostNumber['error'];?>">
            <?php echo $arrCostNumber['errorMsg']; ?>
        </label>
      </div>
    </div>
  </div>
</fieldset>
