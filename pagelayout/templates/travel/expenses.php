<td class="medium-6 cell">
        <div class="grid-x">
            <div class="medium-10 cell">
                <label for="<?php echo $arrExpense['id'];?>"
                       class="<?php echo $arrExpense['label']; ?>"
                       id="<?php echo $arrExpense['id'];?>Label">
                    <?php echo $arrExpense['labelText'];?>
                </label>
            </div>

            <div class="medium-14 cell">
                <input type="text"
                       name="<?php echo $arrExpense['id'];?>"
                       class="<?php echo $arrExpense['input']; ?>"
                       id="<?php echo $arrExpense['id'];?>"
                       size="5"
                       max="10000"
                       value="<?php echo $arrExpense['value']; ?>"
                       placeholder="00000.00">

                <?php
                    if (isset($help)):
                        echo $help;
                    endif;
                    unset($help);
                ?>
            </div>

        </div>
            <?php $errorId = $arrExpense['id'] . "Error";?>
            <label id="<?php echo $errorId;?>" class="<?php echo $arrExpense['error']; ?> text-right">
                   <?php echo $arrExpense['errorMsg']; ?>
            </label>
    </td>
<?php
    unset($arrExpense);
