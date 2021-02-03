<div class="grid-container">
    <div class="grid-x">

        <div class="medium-12 cell float-center">
        <?php if ($errorFlag === 0 && isset($_GET['success'])):?>

                <div class="callout success">
                    <p class="text-center">
                        Your request has been successfully submitted.
                    </p>
                </div>
        <?php elseif ($errorFlag > 0): ?>

                <div class="callout alert">
                    <p class="text-center">
                        <?php
                            switch ($errorFlag):
                                case 1:
                                    echo "Your request has errors in it and has not been submitted.";
                                    break;
                                case 2:
                                    echo "The system has encountered an error. Try again later.";
                                    break;
                                case 3:
                                    echo $errorMessage;
                                    break;
                                case 4:
                                    echo "Request not found.";
                                    break;
                                default:
                                    break;
                            endswitch;
                        ?>
                    </p>
                </div>
            <?php endif; ?>    
        </div>
    </div>
</div>
