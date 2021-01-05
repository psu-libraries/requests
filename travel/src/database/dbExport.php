<?php

// ************************ Approval Comments **************************

$sql = "CREATE TABLE IF NOT EXISTS TrApprovalComments (
  comments_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL,
  commenter_id varchar(10) NOT NULL,
  comments text NOT NULL,
  date_entered varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql)):
  echo "Table TrApprovalComments created successfully.";
else:
  echo "Error creating TrApprovalComments: " . $conn->error . "<br>";
endif;

echo "<br>";
unset($sql);

// ************************ Approval Workflow **************************

$sql = "CREATE TABLE IF NOT EXISTS TrApprovalWorkflows (
  workflow_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL ,
  approver_id varchar(10) DEFAULT NULL,
  next_approver_id varchar(10) NOT NULL DEFAULT 'BusOff',
  approval_status varchar(25) NOT NULL,
  date_entered varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql)):
  echo "Table TrApprovalWorkflow created successfully.";
else:
  echo "Error creating table TrApprovalWorkflows: " . $conn->error . "<br>";
endif;

echo "<br>";
unset($sql);

// ************************ Expenses **************************

$sql = "CREATE TABLE IF NOT EXISTS TrExpenses (
  expense_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id INT(11) NOT NULL,
  transportation DECIMAL(10,2) DEFAULT '0.00',
  estimated_mileage INT(11) DEFAULT NULL,
  lodging DECIMAL(10,2) DEFAULT '0.00',
  food DECIMAL(10,2) DEFAULT '0.00',
  registration DECIMAL(10,2) DEFAULT '0.00',
  prepay_registration VARCHAR(3) NOT NULL DEFAULT 'No',
  other DECIMAL(10,2) DEFAULT '0.00',
  personal_travel VARCHAR(3) NOT NULL DEFAULT 'No',
  notes TEXT,
  date_entered VARCHAR(10) NOT NULL,
  date_last_updated VARCHAR(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql)):
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

if ($conn->query($sql)):
  echo "Table TrFinancials created successfully.";
else:
  echo "Error creating TrFinancials: " . $conn->error . "<br>";
endif;

echo "<br>";
unset($sql);

// ************************ Fleet **************************

$sql = "CREATE TABLE IF NOT EXISTS TrFleet (
  fleet_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL,
  vehicle varchar(50) DEFAULT NULL,
  pickup_date varchar(10) DEFAULT NULL,
  pickup_time varchar(10) DEFAULT NULL,
  dropoff_date varchar(10) DEFAULT NULL,
  dropoff_time varchar(10) DEFAULT NULL,
  carpooling varchar(500) DEFAULT NULL,
  date_entered varchar(10) NOT NULL,
  date_last_updated varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql)):
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
  requestor_name varchar(50) NOT NULL,
  access_id varchar(10) NOT NULL,
  department varchar(250) NOT NULL,
  submission_date varchar(10) NOT NULL,
  destination varchar(100) NOT NULL,
  departure_date varchar(10) NOT NULL,
  departure_time varchar(10) NOT NULL,
  return_date varchar(10) NOT NULL,
  return_time varchar(10) NOT NULL,
  conference varchar(200) NOT NULL,
  sponsor varchar(200) NOT NULL,
  member varchar(3) NOT NULL,
  notes text,
  date_last_updated varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql)):
  echo "Table TrRequests created successfully.";
else:
  echo "Error creating table TrRequests: " . $conn->error . "<br>";
endif;


echo "<br>";
unset($sql);


// ************************ Uploaded Files **************************

$sql = "CREATE TABLE IF NOT EXISTS TrUploadedFiles (
  upload_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  request_id int(11) NOT NULL,
  file_name varchar(100) NOT NULL,
  date_uploaded date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8";

if ($conn->query($sql)):
  echo "Table TrUploadedFiles created successfully.";
else:
  echo "Error creating table TrUploadedFiles: " . $conn->error . "<br>";
endif;

unset($sql);

//$conn->close();
//require_once 'pagelayout/templates/footer.php';
