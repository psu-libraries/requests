<?php 
    
    $whichPage = $_SERVER['PHP_SELF'];

    switch ($whichPage):
        case '/travel/myModify.php':
        case '/travel/new.php':
            echo "<div class='hide-for-small-only medium-auto cell'>&nbsp;</div>";
            echo "<div class='medium-4 cell text-center'>";
                echo "<input type='submit'
                             name='submit'
                             value='Submit Request'
                             class='button round'>";
            echo "</div>";
            echo "<div class='hide-for-small-only medium-auto cell'>&nbsp;</div>";
            break;

        case '/travel/approverModify.php':
            echo "<div class='hide-for-small-only medium-7 cell'>&nbsp;</div>";
            echo "<div class='medium-3 cell text-center'>";
                echo "<input type='submit'
                             name='submit'
                             value='Approve'
                             class='button rounded success'>";
            echo "</div>";
            echo "<div class='medium-4 cell text-center'>";
                echo "<input type='submit'
                             name='submit'
                             value='Request Change'
                             class='button rounded warning'>";
            echo "</div>";
            echo "<div class='medium-3 cell text-center'>";
                echo "<input type='submit'
                             name='submit'
                             value='Reject'
                             class='button rounded alert'>";
            echo "</div>";
            echo "<div class='hide-for-small-only cell auto'>&nbsp;</div>";
            break;
        case '/travel/boModify.php':

            if ($requestStatus == "Approved"):
                echo "<div class='hide-for-small-only medium-auto cell'>&nbsp;</div>";
                echo "<div class='medium-4 cell text-center'>";
                    echo "<input type='submit'
                                name='submit'
                                value='Reviewed'
                                class='button round'>";
                echo "</div>";
                echo "<div class='hide-for-small-only medium-auto cell'>&nbsp;</div>";
                break;
            elseif ($requestStatus == "Reviewed"):
                echo "<div class='hide-for-small-only medium-auto cell'>&nbsp;</div>";
                echo "<div class='medium-4 cell text-center'>";
                    echo "<input type='submit'
                                name='submit'
                                value='Close'
                                class='button round'>";
                echo "</div>";
                echo "<div class='hide-for-small-only medium-auto cell'>&nbsp;</div>";
                break;
            endif;
    endswitch;
