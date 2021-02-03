<?php

session_start();

// Set the user id as a session variable.
if (!isset($_SESSION['user']) && isset($_SERVER['REMOTE_USER'])):
    $_SESSION['user'] = $_SESSION['REMOTE_USER'];
elseif (!isset($_SESSION['user']) && !isset($_SESSION['REMOTE_USER'])): // For development only. Remove for production.
    $_SESSION['user'] = 'wse1';
endif;

// Used in modify forms and views.
if (isset($_GET['id']) && $_GET['id'] >= 1):
    $id = $_GET['id'];
elseif (isset($_POST['id']) && $_POST['id'] >= 1):
    $id = $_POST['id'];
else:
    $id = 0;
endif;
  
// Used after a new or modify form has been submitted.
if (isset($_GET['success']) && $_GET['success'] == 1):
    $errorFlag = 0;
endif;

$userId = $_SESSION['user'];
//$userId = "ful105";

$now = date('m/d/Y');
$page = $_SERVER['PHP_SELF'];

// Determines width of the usable area on the screen.
// s-main increases the width for request (search) tables.
switch ($page):
  case '/travel/search.php':
  case '/travel/approverRequests.php':
  case '/travel/myRequests.php':
  case '/travel/boRequests.php':
      $mainClass = "grid-container s-main";
      break;
  default:
      $mainClass = "grid-container l-main";
endswitch;

// Creates paths and assigns them to variables.
// Saves on typing when including or requiring files.
$root = $_SERVER['DOCUMENT_ROOT'] . '/';

$rootPage = $root . 'pagelayout/';
$rootSrc = $root . 'src/';

$rootForms = $rootPage . 'forms/';
$rootTemps = $rootPage . 'templates/';

$rootDb = $rootSrc . 'database/';
$rootFunc = $rootSrc . 'functions/';
$rootInc = $rootSrc . 'includes/';
$rootVal = $rootSrc . 'validations/';
$rootViews = $rootPage . 'views/';

// Travel request specific
$dataBase = $rootDb . 'travel/';
$functions = $rootFunc . 'travel/';
$includes = $rootInc . 'travel/';
$validations = $rootVal . 'travel/';
$views = $rootViews . 'travel/';

$defaults = $includes . 'defaults/';

$forms = $rootForms . 'travel/';
$formInc = $forms . 'includes/';
$formSec = $forms . 'sections/';

$templates = $rootTemps . 'travel/';

$viewsInc = $views . 'includes/';

// Requires common files
require_once $rootDb . 'connection.php';
require_once $root . "vendor/autoload.php";
require_once $rootFunc . 'fncFormatter.php';
require_once $rootFunc . "fncUtility.php";
require_once $functions . "fncPageFunctions.php";

// Dynamically determines which tab the user is on
// and highlights it.
$newtab = strpos($page, '/travel/new.php');
$mytab = strpos($page, '/travel/my');
$apptab = strpos($page, '/travel/approver');
$botab = strpos($page, '/travel/bo');
$adtab = strpos($page, '/admin/');

$newtab === 0 ? $newClass = 'is-active' : $newClass ='';
$mytab === 0 ? $myClass = 'is-active' : $myClass ='';
$apptab === 0 ? $appClass = 'is-active' : $appClass ='';
$botab === 0 ? $boClass = 'is-active' : $boClass ='';
$adtab === 0 ? $adClass = 'is-active' : $adClass = '';

$arrTabs = [
    0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
    1 => ['title'=>'New Request','url'=>'new.php','class'=> $newClass],
    2 => ['title' => 'My Requests', 'url' => 'myRequests.php', 'class' => $myClass],
    3 => ['title'=>'Search Requests (Approver)','url'=>'approverRequests.php','class'=>$appClass],
    4 => ['title'=>'Search Results (Business Office)','url'=>'boRequests.php','class'=>$boClass],
    5 => ['title' => 'Administration', 'url' => '../admin/index.php', 'class'=>$adClass]
];