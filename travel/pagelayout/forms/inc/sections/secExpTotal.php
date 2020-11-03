<tr class="grid-x">
    <td class="medium-6 cell">
        <div class="grid-x">

            <div class="medium-10 cell">
                <label for="total" class="text-right middle">
                    <b>Total</b>
                </label>
            </div>

            <div class="medium-14 cell">


                    <input type="text"
                           name="total"
                           id="total"
                           size="5"
                           value="<?php echo $total; ?>"
                           class="text-right"
                           disabled>

            </div>

        </div>
    </td>
    <td class="medium-18 cell">

        <?php require 'pagelayout/forms/inc/sections/secPersTravel.php';?>

        <div class="grid-containter">
            <div class="grid-x">
                <div class="cell">
                    <p>
                        If yes, contact Travel Coordinator for more information
                        PRIOR to making arrangements.
                    </p>
                    <p>If foreign travel, register with TSN.</p>
                </div>
            </div>
        </div>
    </td>
</tr>
