<?php
require_once 'config/config.php';

$errorFlag = 0;

require_once $rootFunc . 'fncFiles.php';
require_once $dataBase . 'approverQueries.php';
require_once $defaults . 'incDefaultTravelClasses.php';
require_once $defaults . 'incApproverRequestDefaults.php';
require_once $includes . 'incVehicleArray.php';

if (isset($_POST['submit'])) :

    require_once $includes . 'incSanitizeValidate.php';

    $oldStatus = '';
    if ($_POST['submit'] == "Request Change"):
        $newStatus = 'Change';
        $nextApprover = '';
    elseif ($_POST['submit'] == 'Approve'):
        $oldStatus = "Approved";
        $newStatus = "Approved";
        if (isset($nextApprover) && length($nextApprover) > 0):
            $newStatus = "Pending";
        else:
            $nextApprover = "Busoff";
        endif;
          
    elseif ($_POST['submit'] == 'Reject'):
        $newStatus = 'Rejected';
        $nextApprover = '';
    endif;

    if ($errorFlag === 0):

        require_once $dataBase . 'modifyApproverRequest.php';

        if ($errorFlag === 0):
            header("Location: approverView.php?id=" . $id . "&success=1");
            exit;
        endif;
    endif;
endif;

require_once 'pagelayout/templates/header.php'; 
?>
  <input type="hidden" 
         name="id" 
         value="<?php echo $id;?>" 
         form="travelform">

  <input type="hidden" 
         name="workflowid" 
         value="<?php echo $approval['workflow_id'];?>" 
         form="travelform">

<?php 
    require_once $forms . 'frmTravelRequest.php';
require_once 'pagelayout/templates/footer.php';
