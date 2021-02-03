<?php

if ($page == '/travel/approverView.php'):
    $request = getViewRequest($conn, $id, $userId);
elseif ($page == '/travel/approverModify.php'):
    $request = getRequestInfo($conn, $id, $userId);
endif;

if ($request):

//    $general = getGeneral($conn, $id);
//    $expenses = getExpenses($conn, $id);
//    $fleet = getFleet($conn, $id);
//    $financials = getFinancial($conn, $id);
//    $approval = getWorkflow($conn, $id, $userId);

    $prevComments = getComments($conn, $id);

    $workflowId = $request['workflow_id'];
    $nextApprover = '';

    require_once $defaults . 'incDefaultVariables.php';
 
else:
    $errorFlag = 4;
endif;