<?php

//session_start();

//$appName = "Travel Request";

//$arrTabs = [
//    0 => ['title' => 'Home', 'url' => '../index.php', 'class' => ''],
//    1 => ['title' => 'New Request', 'url' => 'new.php', 'class' => 'is-active'],
//    2 => ['title' => 'Request List', 'url' => 'requestList.php', 'class' => ''],
//    3 => ['title' => 'Search Results', 'url' => 'search.php', 'class' => '']
//  ];

// ************************ Approval Comments **************************

$sql = "CREATE TABLE IF NOT EXISTS TrApprovalComments (
  comments_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL,
  comments text NOT NULL COMMENT 'Comment entered by approver',
  date_entered varchar(10) NOT NULL COMMENT 'Date comment was entered'
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE):
  echo "Table TrApprovalComments created successfully.";
else:
  echo "Error creating TrApprovalComments: " . $conn->error . "<br>";
endif;

echo "<br>";
unset($sql);

// ************************ Approval Workflow **************************

$sql = "CREATE TABLE IF NOT EXISTS TrApprovalWorkflows (
  workflow_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL COMMENT 'Record number of the request associated with this workflow record',
  approver_id varchar(10) DEFAULT NULL COMMENT 'PSU Asscess Id of the approver',
  next_approver_id varchar(10) NOT NULL DEFAULT 'BusOff' COMMENT 'PSU ID of the next approver',
  approval_status varchar(25) NOT NULL COMMENT 'Approval status: needs reviewed, approved, needs changed, rejected',
  date_entered varchar(10) DEFAULT NULL COMMENT 'Date of status change'
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE):
  echo "Table TrApprovalWorkflow created successfully.";
else:
  echo "Error creating table TrApprovalWorkflows: " . $conn->error . "<br>";
endif;

echo "<br>";
unset($sql);

// ************************ Expenses **************************

$sql = "CREATE TABLE IF NOT EXISTS TrExpenses (
  expense_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL COMMENT 'Record number of the request these expenses are associated with',
  transportation decimal(10,0) DEFAULT '0' COMMENT 'Cost of transportation',
  estimated_mileage int(11) DEFAULT NULL COMMENT 'If using personal vehicle, estimated miles for a round trip',
  lodging decimal(10,0) DEFAULT '0' COMMENT 'Cost of lodging during conference',
  food decimal(10,0) DEFAULT '0' COMMENT 'Cost of food during conference',
  registration decimal(10,0) DEFAULT '0' COMMENT 'Cost of registration for the conference',
  prepay_registration varchar(3) DEFAULT NULL COMMENT 'Does the requestor want the Travel Coordinator to prepay the registration',
  other decimal(10,0) DEFAULT '0' COMMENT 'Any other miscellaneous costs',
  personal_travel varchar(3) NOT NULL COMMENT 'Is there personal travel mixed in with the conference travel',
  notes text COMMENT 'Any miscellaneous information pertaining to expenses',
  date_entered varchar(10) NOT NULL,
  date_last_updated varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql) === true):
  echo "Table TrExpenses created successfully.";
else:
  echo "Error creating table TrExpenses: " . $conn->error . "<br>";
endif;

echo "<br>";
unset($sql);

// ************************ Financials **************************

$sql= "CREATE TABLE IF NOT EXISTS TrFinancials (
  financials_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL,
  cost_type varchar(15) DEFAULT NULL,
  cost_object_number int(11) DEFAULT NULL,
  date_entered varchar(10) NOT NULL,
  date_last_updated varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql) === true):
  echo "Table TrFinancials created successfully.";
else:
  echo "Error creating TrFinancials: " . $conn->error . "<br>";
endif;

echo "<br>";
unset($sql);

// ************************ Fleet **************************

$sql = "CREATE TABLE IF NOT EXISTS TrFleet (
  fleet_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL COMMENT 'Record number of the request this record is associated with',
  vehicle varchar(50) DEFAULT NULL COMMENT 'Type of vehicle to rent from fleet',
  pickup_date varchar(10) DEFAULT NULL COMMENT 'Date requestor will pick up vehicle',
  pickup_time varchar(10) DEFAULT NULL COMMENT 'Time requestor will pick up vehicle',
  dropoff_date varchar(10) DEFAULT NULL COMMENT 'Date requestor will drop off vehicle',
  dropoff_time varchar(10) DEFAULT NULL COMMENT 'Time requestor will drop off vehicle',
  carpooling varchar(500) DEFAULT NULL COMMENT 'List of people who are sharing the ride to the conference',
  date_added varchar(10) NOT NULL,
  date_last_updated varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql) === true):
  echo "Table TrFleet created successfully.";
else:
  echo "Error creating TrFleet table: " . $conn->error . "<br>";
endif;

echo "<br>";
unset($sql);

// ************************ Request **************************

$sql = "CREATE TABLE IF NOT EXISTS TrRequests (
  request_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  travel_type varchar(15) NOT NULL,
  requestor_name varchar(50) NOT NULL COMMENT 'Name of the person requesting the travel',
  access_id varchar(10) NOT NULL COMMENT 'PSU Access Id of the requestor',
  department varchar(250) NOT NULL COMMENT 'Department of the requestor',
  submission_date varchar(10) NOT NULL COMMENT 'Date request was submitted by the requestor',
  destination varchar(100) NOT NULL COMMENT 'City and state where conference is being held',
  departure_date varchar(10) NOT NULL COMMENT 'Date of departure',
  departure_time varchar(10) NOT NULL COMMENT 'Time of departure',
  return_date varchar(10) NOT NULL COMMENT 'Date of return',
  return_time varchar(10) NOT NULL COMMENT 'Time of return',
  conference varchar(200) NOT NULL COMMENT 'Name of conference requestor is attending',
  sponsor varchar(200) NOT NULL COMMENT 'Name of organization sponsoring the conference',
  member varchar(3) NOT NULL COMMENT 'Is the requestor a member of the sponsoring organization',
  notes text COMMENT 'Any relevant notes pertaining to the conference',
  date_last_updated varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql) === true):
  echo "Table TrRequests created successfully.";
else:
  echo "Error creating table TrRequests: " . $conn->error . "<br>";
endif;


echo "<br>";
unset($sql);


// ************************ Uploaded Files **************************

$sql = "CREATE TABLE IF NOT EXISTS TrUploadedFiles (
  upload_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL COMMENT 'Record number of the request these files are associated with',
  file_name varchar(100) NOT NULL COMMENT 'Name of the file uploaded',
  date_uploaded date NOT NULL COMMENT 'Date the file was uploaded'
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql) === TRUE):
  echo "Table TrUploadedFiles created successfully.";
else:
  echo "Error creating table TrUploadedFiles: " . $conn->error . "<br>";
endif;

unset($sql);

//$conn->close();
//require_once 'pagelayout/templates/footer.php';
