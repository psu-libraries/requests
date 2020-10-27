<?php

session_start();

$appName = "Travel Request";

$arrTabs = [
    0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
    1 => ['title'=>'New Request','url'=>'new.php','class'=>''],
    2 => ['title'=>'Request List','url'=>'requestList.php','class'=>''],
    3 => ['title'=>'Search Results','url'=>'search.php','class'=>'is-active']
];
?>

<?php require_once 'pagelayout/templates/header.php'; ?>


<div class="grid-x">

  <section class="medium-7 cell bordered">
    <?php require_once 'pagelayout/forms/frmSearch.php'; ?>
  </section>


  <section class="medium-auto cell">
    <table class="responsive-card-table">
      <thead>
        <tr>
          <th>Name of Requstor</th>
          <th>Access ID</th>
          <th>Date Submitted</th>
          <th>Conference</th>
          <th>Status</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Name of Requestor">Bugs Bunny</td>
          <td data-label="Access ID">bbb1</td>
          <td data-label="Date Submitted">
            08/10/2020
          </td>
          <td data-label="Conference" class="text-wrap">
            Carrots, the other white meat. Or is that dark meat?
          </td>
          <td data-label="Status">Closed</td>
          <td data-label="Review">
            <a href="view.php?id=1" class="button rounded">View</a>
          </td>
        </tr>
        <tr>
          <td data-label="Name of Requestor">Elmer Fudd</td>
          <td data-label="Access ID">ehf21</td>
          <td data-label="Date Submitted">
            08/11/2020
          </td>
          <td data-label="Conference" class="text-wrap">
            How to Hunt Rabbits at a Carrot Convention
          </td>
          <td data-label="Status">Closed</td>
          <td data-label="Review">
            <a href="view.php?id=2" class="button rounded">View</a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

</div>

<?php require_once 'pagelayout/templates/footer.php';
