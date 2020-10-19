<?php

// ************************ Approval Comments **************************

CREATE TABLE `approval_comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `request_id` int(11) NOT NULL,
  `comment` text NOT NULL COMMENT 'Comment entered by approver',
  `date_of_added` varchar(10) NOT NULL COMMENT 'Date comment was entered'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//ALTER TABLE `approval_comments`
//  ADD PRIMARY KEY (`comment_id`);

//ALTER TABLE `approval_comments`
//  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT;

// ************************ Approval Workflow **************************

CREATE TABLE `approval_workflow` (
  `workflow_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `request_id` int(11) NOT NULL COMMENT 'Record number of the request associated with this workflow record',
  `approver_id` varchar(10) DEFAULT NULL COMMENT 'PSU Asscess Id of the approver',
  `next_approver_id` varchar(10) NOT NULL DEFAULT 'BusOff' COMMENT 'PSU ID of the next approver',
  `approval_status` varchar(25) NOT NULL COMMENT 'Approval status: needs reviewed, approved, needs changed, rejected',
  `date_added` varchar(10) DEFAULT NULL COMMENT 'Date of status change'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//ALTER TABLE `approval_workflow`
//  ADD PRIMARY KEY (`workflow_id`);

//ALTER TABLE `approval_workflow`
//  MODIFY `workflow_id` int(11) NOT NULL AUTO_INCREMENT;

// ************************ Expenses **************************

CREATE TABLE `expenses` (
  `expense_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `request_id` int(11) NOT NULL COMMENT 'Record number of the request these expenses are associated with',
  `transportation` decimal(10,0) DEFAULT '0' COMMENT 'Cost of transportation',
  `estimated_mileage` int(11) DEFAULT NULL COMMENT 'If using personal vehicle, estimated miles for a round trip',
  `lodging` decimal(10,0) DEFAULT '0' COMMENT 'Cost of lodging during conference',
  `food` decimal(10,0) DEFAULT '0' COMMENT 'Cost of food during conference',
  `registration` decimal(10,0) DEFAULT '0' COMMENT 'Cost of registration for the conference',
  `prepay_registration` varchar(3) DEFAULT NULL COMMENT 'Does the requestor want the Travel Coordinator to prepay the registration',
  `other` decimal(10,0) DEFAULT '0' COMMENT 'Any other miscellaneous costs',
  `total` decimal(10,0) DEFAULT '0' COMMENT 'Total of the expenses',
  `personal_travel` varchar(3) NOT NULL COMMENT 'Is there personal travel mixed in with the conference travel',
  `notes` text COMMENT 'Any miscellaneous information pertaining to expenses',
  `date_added` varchar(10) NOT NULL,
  `date_last_updated` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//ALTER TABLE `expenses`
//  ADD PRIMARY KEY (`expense_id`);

//ALTER TABLE `expenses`
//  MODIFY `expense_id` int(11) NOT NULL AUTO_INCREMENT;

// ************************ Financials **************************

CREATE TABLE `financials` (
  `financials_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `request_id` int(11) NOT NULL,
  `cost_type` varchar(15) DEFAULT NULL,
  `cost_object_number` int(11) DEFAULT NULL,
  `date_added` varchar(10) NOT NULL,
  `date_last_updated` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//ALTER TABLE `financials`
//  ADD PRIMARY KEY (`financials_id`);

//ALTER TABLE `financials`
//  MODIFY `financials_id` int(11) NOT NULL AUTO_INCREMENT;

// ************************ Fleet **************************

CREATE TABLE `fleet` (
  `fleet_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `request_id` int(11) NOT NULL COMMENT 'Record number of the request this record is associated with',
  `vehicle` varchar(50) DEFAULT NULL COMMENT 'Type of vehicle to rent from fleet',
  `pickup_date` varchar(10) DEFAULT NULL COMMENT 'Date requestor will pick up vehicle',
  `pickup_time` varchar(10) DEFAULT NULL COMMENT 'Time requestor will pick up vehicle',
  `dropoff_date` varchar(10) DEFAULT NULL COMMENT 'Date requestor will drop off vehicle',
  `dropoff_time` varchar(10) DEFAULT NULL COMMENT 'Time requestor will drop off vehicle',
  `carpooling` varchar(500) DEFAULT NULL COMMENT 'List of people who are sharing the ride to the conference',
  `date_added` varchar(10) NOT NULL,
  `date_last_updated` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//ALTER TABLE `fleet`
//  ADD PRIMARY KEY (`fleet_id`);

//ALTER TABLE `fleet`
//  MODIFY `fleet_id` int(11) NOT NULL AUTO_INCREMENT;

// ************************ Request **************************

CREATE TABLE `request` (
  `request_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `travel_type_admin` varchar(15) NOT NULL,
  `travel_type_prof` varchar(15) NOT NULL,
  `requestor_name` varchar(50) NOT NULL COMMENT 'Name of the person requesting the travel',
  `access_id` varchar(10) NOT NULL COMMENT 'PSU Access Id of the requestor',
  `department` varchar(250) NOT NULL COMMENT 'Department of the requestor',
  `submission_date` varchar(10) NOT NULL COMMENT 'Date request was submitted by the requestor',
  `destination` varchar(100) NOT NULL COMMENT 'City and state where conference is being held',
  `departure_date` varchar(10) NOT NULL COMMENT 'Date of departure',
  `departure_time` varchar(10) NOT NULL COMMENT 'Time of departure',
  `return_date` varchar(10) NOT NULL COMMENT 'Date of return',
  `return_time` varchar(10) NOT NULL COMMENT 'Time of return',
  `conference` varchar(200) NOT NULL COMMENT 'Name of conference requestor is attending',
  `sponsor` varchar(200) NOT NULL COMMENT 'Name of organization sponsoring the conference',
  `member` varchar(3) NOT NULL COMMENT 'Is the requestor a member of the sponsoring organization',
  `notes` text COMMENT 'Any relevant notes pertaining to the conference',
  `date_last_updated` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//ALTER TABLE `request`
//  ADD PRIMARY KEY (`request_id`);

//ALTER TABLE `request`
//  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT;

// ************************ Uploaded Files **************************

CREATE TABLE `uploaded_files` (
  `upload_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `request_id` int(11) NOT NULL COMMENT 'Record number of the request these files are associated with',
  `file_name` varchar(100) NOT NULL COMMENT 'Name of the file uploaded',
  `date_uploaded` date NOT NULL COMMENT 'Date the file was uploaded'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

//ALTER TABLE `uploaded_files`
//  ADD PRIMARY KEY (`upload_id`);

//ALTER TABLE `uploaded_files`
//  MODIFY `upload_id` int(11) NOT NULL AUTO_INCREMENT;
