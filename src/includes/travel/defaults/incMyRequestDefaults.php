<?php

//$request = getSingleRequest($conn, $id, $userId);
$request = getRequestInfo($conn, $id, $userId);

if ($request):
    
//    $general = getGeneral($conn, $id);
//    $expenses = getExpenses($conn, $id);
//    $fleet = getFleet($conn, $id);
//    $financials = getFinancial($conn, $id);
//    $approval = selectMyWorkflow($conn, $id, $userId);
    $prevComments = getComments($conn, $id);
    $workflowId = $request['workflow_id'];
    $nextApprover = $request['next_approver_id'];

    require_once $defaults . 'incDefaultVariables.php';

else:
    $errorFlag = 4;
endif;