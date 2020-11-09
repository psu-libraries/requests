<td class="medium-6 cell">
        <div class="grid-x">
            <div class="medium-10 cell">
                <label for="<?php echo $arrCurrency['id'];?>"
                       class="<?php echo $arrCurrency['label']; ?>"
                       id="<?php echo $arrCurrency['id'];?>Label">
                    <?php echo $arrCurrency['labelText'];?>
                </label>
            </div>

            <div class="medium-14 cell">

                <input type="text"
                       name="<?php echo $arrCurrency['id'];?>"
                       class="<?php echo $arrCurrency['input'];?>"
                       id="<?php echo $arrCurrency['id'];?>"
                       size="5"
                       max="10000"
                       value="<?php echo $arrCurrency['value']; ?>"
                       placeholder="00000.00">

                <?php
                    if (isset($help)):
                        echo $help;
                    endif;
                    unset($help);
                ?>
            </div>

        </div>
            <?php $errorId = $arrCurrency['id'] . "Error";?>
            <label id="<?php echo $errorId;?>" class="<?php echo $arrCurrency['error']; ?> text-right">
                   <?php echo $arrCurrency['errorMsg']; ?>
            </label>
    </td>
