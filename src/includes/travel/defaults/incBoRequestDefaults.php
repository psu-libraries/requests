<?php

//if ($page == '/travel/boView.php'):
//    $request = getViewRequest($conn, $id);
//elseif ($page == '/travel/boModify.php'):
//    $request = getSingleRequest($conn, $id);
    $request = getRequestInfo($conn, $id);
//endif;

if ($request):

//    $general = getGeneral($conn, $id);
//    $expenses = getExpenses($conn, $id);
//    $fleet = getFleet($conn, $id);
//    $financials = getFinancial($conn, $id);
    $approval = getWorkflow($conn, $id, $userId);
    $prevComments = getComments($conn, $id);

    $nextApprover = '';

    require_once $defaults . 'incDefaultVariables.php';

else:
    $errorFlag = 4;
endif;