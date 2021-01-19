<fieldset class="fieldset grid-container">
    <legend>FINANCIALS</legend>

    <div class="grid-x grid-padding-x">

        <div class="medium-7 cell">
            <div class="grid-x">
                <div class="medium-12 cell">
                    <label>Cost Object Type:</label>                    
                </div>
                <div class="medium-12 cell view bordered">
                    <?php echo $financials['cost_type'];?>
                </div>
            </div>
        </div>
        <div class="medium-12 cell float-center">
            <div class="grid-containter">
                <div class="grid-x">
                    <div class="medium-12 text-right cell">
                        <label>Cost Object Number:</label>
                    </div>
                    <div class="medium-6 cell view bordered">
                        <?php echo $financials['cost_object_number'];?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</fieldset>
