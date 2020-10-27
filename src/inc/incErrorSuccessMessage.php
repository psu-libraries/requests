<div class="grid-container">
    <div class="grid-x">

        <div class="medium-12 cell float-center">
            <?php if ($errorFlag === 0) :
            // Display the success message.
            ?>
                <div class="callout success">
                    <p class="text-center">
                        Your request has been successfully submitted.
                    </p>
                </div>
            <?php else:
               // Display any error messages.
            ?>
               <div class="callout alert">
                    <p class="text-center">
                    Your request has errors in it and has not been submitted.
                    </p>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>
