<?php

session_start();

$appName = "Travel Request";

$arrAppStatus = [
  "Pending", "Change", "Approved", "Rejected", "Closed"
];

$arrTabs = [
  0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
  1 => ['title'=>'New Request','url'=>'new.php','class'=>''],
  2 => ['title'=>'My Requests','url'=>'myRequests.php','class'=>''],
  3 => ['title'=>'Search Requests (Approver)','url'=>'approverRequests.php','class'=>''],
  4 => ['title'=>'Search Requests (Business)','url'=>'search.php','class'=>'is-active'],
  5 => ['title'=>'Administration','url'=>'../admin/index.php','class'=>'']
];

require_once 'src/database/connection.php';
require_once 'pagelayout/templates/header.php'; 
include 'src/database/dbReports.php';

require_once 'pagelayout/templates/header.php'; ?>


<div class="grid-x">

  <section class="medium-5 cell bordered">
    <?php require_once 'pagelayout/forms/frmSearch.php'; ?>
  </section>

  <section class="medium-19 cell">
  <?php 
    foreach ($arrAppStatus as $index => $appStatus): 

      $requests = getAllRequests($conn, $appStatus);
    ?>
  <section class="medium-auto cell">
     <table class="responsive-card-table">
      <caption><?php echo strtoupper($appStatus);?></caption>
       <thead>
         <tr>
          <th class="text-center">Name of Requstor</th>
          <th class="text-center">Access ID</th>
          <th class="text-center">Date Submitted</th>
          <th class="text-center">Conference</th>
          <th class="text-center">Action</th>
         </tr>
       </thead>

      <tbody>
      <?php
        foreach ($requests as $index => $request):
          $requestId = $request['request_id'];
      ?>
          <tr>
            <td data-label="Name of Requestor">
            <?php echo $request['name']; ?>
            </td>
            <td data-label="Access ID" class="text-center">
              <?php echo $request['access_id'];?>
            </td>
            <td data-label="Date Submitted" class="text-center">
              <?php echo $request['submission_date'];?>
            </td>
            <td data-label="Conference" class="text-wrap">
              <?php echo $request['conference'];?>
            </td>
            <td data-label="Action" class="text-center">
              <?php 
                switch ($request['approval_status']):
                  case 'Pending':
                  case "Change":
                      echo "<a href='modify.php?id=$requestId'>Modify</a>";
                      break;
                  case "Approved":
                  case "Rejected":
                  case "Closed":
                      echo "View";
                      break;
                endswitch;
              
              ?>
            </td>
          
          </tr>
      <?php
        endforeach;
      ?>

      </tbody>
    </table>
    <hr>
    <?php endforeach; ?>
  </section>

</div>

<?php require_once 'pagelayout/templates/footer.php';
