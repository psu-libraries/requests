<?php
  $appCommentsFlag = 0;
  $appWorkflowsFlag = 0;
  $expensesFlag = 0;
  $financialsFlag = 0;
  $fleetFlag = 0;
  $generalFlag = 0;
  $requestsFlag = 0;
  $uploadedFilesFlag = 0;
  $permissionsFlag = 0;
// ************************ Approval Comments **************************
try {
  $sql = "CREATE TABLE IF NOT EXISTS TrApprovalComments (
    comments_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    request_id int(11) NOT NULL,
    commenter_id varchar(10) NOT NULL,
    comments text NOT NULL,
    date_entered varchar(10) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

  $stmt = $conn->query($sql);

} catch (PDOException $e) {
  $appCommentsFlag = 1;
  echo "Error creating TrApprovalComments: " . $e->getMessage();
}
  if ($appCommentsFlag == 0):
    echo "Table TrApprovalComments created successfully.";
  endif;

echo "<br>";
unset($sql);
unset($stmt);

// ************************ Approval Workflow **************************
try {
  $sql = "CREATE TABLE IF NOT EXISTS TrApprovalWorkflows (
    workflow_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    request_id int(11) NOT NULL ,
    approver_id varchar(10) DEFAULT NULL,
    next_approver_id varchar(10) DEFAULT NULL,
    date_entered varchar(10) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

  $stmt = $conn->query($sql);

} catch (PDOException $e) {
  $appWorkflowsFlag = 1;
  echo "Error creating table TrApprovalWorkflows: " . $e->getMessage();
}
  if ($appWorkflowsFlag == 0):
    echo "Table TrApprovalWorkflow created successfully.";
  endif;

echo "<br>";
unset($sql);
unset($stmt);

// ************************ Expenses **************************
try {
  $sql = "CREATE TABLE IF NOT EXISTS TrExpenses (
    request_id INT(11) NOT NULL PRIMARY KEY,
    transportation varchar(10) DEFAULT '0.00',
    estimated_mileage VARCHAR(5),
    lodging VARCHAR(10) DEFAULT '0.00',
    food VARCHAR(10) DEFAULT '0.00',
    registration VARCHAR(10) DEFAULT '0.00',
    prepay_registration VARCHAR(3) NOT NULL DEFAULT 'No',
    other VARCHAR(10) DEFAULT '0.00',
    personal_travel VARCHAR(3) NOT NULL DEFAULT 'No',
    notes TEXT
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

  $stmt = $conn->query($sql);
} catch (PDOException $e) {
  $expensesFlag = 1;
  echo "Error creating table TrExpenses: " . $e->getMessage();
}

if ($expensesFlag == 0):
  echo "Table TrExpenses created successfully.";
endif;

echo "<br>";
unset($sql);
unset($stmt);

// ************************ Financials **************************
try {
  $sql= "CREATE TABLE IF NOT EXISTS TrFinancials (
    request_id int(11) NOT NULL PRIMARY KEY,
    cost_type varchar(15) DEFAULT NULL,
    cost_object_number varchar(12) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

  $stmt = $conn->query($sql);
} catch (PDOException $e) {
  $financialsFlag = 1;
  echo "Error creating TrFinancials: " . $e->getMessage();
}

if ($financialsFlag == 0):
  echo "Table TrFinancials created successfully.";
endif;

echo "<br>";
unset($sql);
unset($stmt);

// ************************ Fleet **************************
try {
  $sql = "CREATE TABLE IF NOT EXISTS TrFleet (
    request_id int(11) NOT NULL PRIMARY KEY,
    vehicle varchar(50) DEFAULT NULL,
    pickup_date varchar(10) DEFAULT NULL,
    pickup_time varchar(10) DEFAULT NULL,
    dropoff_date varchar(10) DEFAULT NULL,
    dropoff_time varchar(10) DEFAULT NULL,
    carpooling varchar(500) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

  $stmt = $conn->query($sql);
} catch (PDOException $e) {
  $fleetFlag = 1;
  echo "Error creating TrFleet table: " . $e->getMessage();
}

if ($fleetFlag == 0):
  echo "Table TrFleet created successfully.";
endif;

echo "<br>";
unset($sql);
unset($stmt);

try {
   $sql = "CREATE TABLE IF NOT EXISTS TrGeneral (
    request_id int(11) NOT NULL PRIMARY KEY,
    destination varchar(100) NOT NULL,
    departure_date varchar(10) NOT NULL,
    departure_time varchar(10) NOT NULL,
    return_date varchar(10) NOT NULL,
    return_time varchar(10) NOT NULL,
    conference varchar(200) NOT NULL,
    sponsor varchar(200) NOT NULL,
    member varchar(3) NOT NULL,
    notes text
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

    $stmt = $conn->query($sql);
} catch (PDOException $e) {
  $generalFlag = 1;
  echo "Error creating table TrGeneral: " . $e->getMessage();
}

if ($generalFlag == 0):
  echo "Table TrGeneral successfully created.";
endif;

echo "<br>";
unset($sql);
unset($stmt);


// ************************ Request **************************
try {
  $sql = "CREATE TABLE IF NOT EXISTS TrRequests (
    request_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    travel_type varchar(15) NOT NULL,
    requestor_name varchar(50) NOT NULL,
    access_id varchar(10) NOT NULL,
    department varchar(250) NOT NULL,
    request_status varchar(25) NOT NULL,
    submission_date varchar(10) NOT NULL, 
    submitter_id varchar(10) NOT NULL,   
    date_last_updated varchar(10) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

  $stmt = $conn->query($sql);
} catch (PDOException $e) {
  $requestsFlag = 1;
  echo "Error creating table TrRequests: " . $e->getMessage();
}

if ($requestsFlag == 0):
  echo "Table TrRequests created successfully.";
endif;

echo "<br>";
unset($sql);
unset($stmt);


// ************************ Permissions **************************

try {
  $sql = "CREATE TABLE IF NOT EXISTS permissions (
    userid varchar(10) NOT NULL PRIMARY KEY,
    user_status varchar(10) NOT NULL DEFAULT 'Active',
    date_entered varchar(10) NOT NULL,    
    date_last_updated varchar(10) DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

    $stmt = $conn->query($sql);
} catch (PDOException $e) {
  $permissionsFlag = 1;
  echo "Error creating table Permissions: " . $e->getMessage();
}

if ($permissionsFlag == 0):
  echo "Table Permissions created successfully.";
endif;

echo "<br>";
unset($sql);
unset($stmt);
