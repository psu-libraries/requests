<?php
require_once 'config/config.php';

include $rootFunc . 'fncFiles.php';
require_once $dataBase . 'approverQueries.php';
require_once $defaults . 'incDefaultTravelClasses.php';
require $defaults . 'incApproverRequestDefaults.php';

$action = "view";

require_once 'pagelayout/templates/header.php'; 
require_once $views . 'vTravelRequest.php';
require_once 'pagelayout/templates/footer.php';



