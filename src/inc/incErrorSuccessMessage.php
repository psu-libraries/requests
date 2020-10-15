<div class="grid-container">
    <div class="grid-x">
        <div class="small-24 medium-12 cell float-center">
<?php
if (count($errorMessage) == 0) :
     // Display the success message.
    ?>
                <div class="callout success">
                    <h2 class="text-center">SUCCESS!</h2>
         <?php
            echo "<p>" . $successMessage . "</p>";
            ?>
                </div>

    <?php
else:
               // Display any error messages.
    ?>
               <div class="callout alert">
                    <h2 class="text-center">ERROR!</h2>
                <ul>
                <?php
                  $error = flattenArray($errorMessage);
                foreach ($error as $key):
                    echo "<li>" . $key . "</li>";
                endforeach;
                ?>

                </ul>
            </div>
    <?php
endif;
?>
        </div>
    </div>
</div>
