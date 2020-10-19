<?php
  $appName = "Travel Request";

  $arrTabs = [
    0 => ['title'=>'Home','url'=>'../index.php','class'=>''],
    1 => ['title'=>'New Request','url'=>'new.php','class' => ''],
    2 => ['title'=>'Request List','url'=>'requestList.php','class'=>'is-active'],
    3 => ['title'=>'Search Results','url'=>'search.php','class'=>'']
  ];
?>

<?php require_once 'pagelayout/templates/header.php'; ?>


<div class="grid-x">

  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="cell">
        <h1 class="text-center"> Your List of Requests</h1>
      </div>
    </div>
  </div>

  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="cell">
        <table class="responsive-card-table unstriped">
          <thead>
            <tr>
              <th>Name of Requstor</th>
              <th>Access ID</th>
              <th>Date Submitted</th>
              <th>Conference</th>
              <th>Departure Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            <tr class="even">
              <td data-label="Name of Requestor">Bugs Bunny</td>
              <td data-label="Access ID">bbb1</td>
              <td data-label="Date Submitted">
                08/10/2020
              </td>
              <td data-label="Conference">
                Carrots, the other white meat. Or is that dark meat?
              </td>
              <td data-label="Departure Date">
                12/25/2020
              </td>
              <td data-label="Return Date">12/27/2020</td>
              <td data-label="Status">Needs Reviewed</td>
              <td data-label="Review">
                <a href="modify.php?id=1" class="button rounded">Review</a>
              </td>
            </tr>
            <tr>
              <td data-label="Name of Requestor">Elmer Fudd</td>
              <td data-label="Access ID">ehf21</td>
              <td data-label="Date Submitted">
                08/11/2020
              </td>
              <td data-label="Conference">
                How to Hunt Rabbits at a Carrot Convention
              </td>
              <td data-label="Departure Date">
                12/25/2020
              </td>
              <td data-label="Return Date">12/27/2020</td>
              <td data-label="Status">Needs Reviewed</td>
              <td data-label="Review">
                <a href="review.php?id=2" class="button rounded">Review</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>



<?php require_once 'pagelayout/templates/footer.php';
