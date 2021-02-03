<?php
require_once 'config/config.php';

$action = "view";

include_once $rootFunc . 'fncFiles.php';
include_once $dataBase . 'myQueries.php';
require_once $defaults . 'incDefaultTravelClasses.php';
require_once $defaults . 'incMyRequestDefaults.php';

require_once 'pagelayout/templates/header.php'; 

require_once $views . 'vTravelRequest.php';
require_once 'pagelayout/templates/footer.php';



