<?php

CREATE DATABASE travel;

// ************************ Approval Comments **************************

CREATE TABLE `approval_comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `request_id` int(11) NOT NULL,
  `comment` text NOT NULL COMMENT 'Comment entered by approver',
  `date_of_added` varchar(10) NOT NULL COMMENT 'Date comment was entered',
  CONSTRAINT approval_comments_pk PRIMARY KEY (comment_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// ************************ Approval Workflow **************************

CREATE TABLE `approval_workflow` (
  `workflow_id` int(11) NOT NULL AUTO_INCREMENT,
  `request_id` int(11) NOT NULL COMMENT 'Record number of the request associated with this workflow record',
  `approver_id` varchar(10) DEFAULT NULL COMMENT 'PSU Asscess Id of the approver',
  `next_approver_id` varchar(10) NOT NULL DEFAULT 'BusOff' COMMENT 'PSU ID of the next approver',
  `approval_status` varchar(25) NOT NULL COMMENT 'Approval status: needs reviewed, approved, needs changed, rejected',
  `date_added` varchar(10) DEFAULT NULL COMMENT 'Date of status change',
  CONSTRAINT approval_workflow_pk PRIMARY KEY (workflow_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// ************************ Expenses **************************

CREATE TABLE `expenses` (
  `expense_id` int(11) NOT NULL AUTO_INCREMENT,
  `request_id` int(11) NOT NULL COMMENT 'Record number of the request these expenses are associated with',
  `transportation` decimal(10,0) DEFAULT '0' COMMENT 'Cost of transportation',
  `estimated_mileage` int(11) DEFAULT NULL COMMENT 'If using personal vehicle, estimated miles for a round trip',
  `lodging` decimal(10,0) DEFAULT '0' COMMENT 'Cost of lodging during conference',
  `food` decimal(10,0) DEFAULT '0' COMMENT 'Cost of food during conference',
  `registration` decimal(10,0) DEFAULT '0' COMMENT 'Cost of registration for the conference',
  `prepay_registration` varchar(3) DEFAULT NULL COMMENT 'Does the requestor want the Travel Coordinator to prepay the registration',
  `other` decimal(10,0) DEFAULT '0' COMMENT 'Any other miscellaneous costs',
  `personal_travel` varchar(3) NOT NULL COMMENT 'Is there personal travel mixed in with the conference travel',
  `notes` text COMMENT 'Any miscellaneous information pertaining to expenses',
  `date_added` varchar(10) NOT NULL,
  `date_last_updated` varchar(10) DEFAULT NULL,
  CONSTRAINT expenses_pk PRIMARY KEY (expense_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// ************************ Financials **************************

CREATE TABLE `financials` (
  `financials_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `request_id` int(11) NOT NULL,
  `cost_type` varchar(15) DEFAULT NULL,
  `cost_object_number` int(11) DEFAULT NULL,
  `date_added` varchar(10) NOT NULL,
  `date_last_updated` varchar(10) DEFAULT NULL,
  CONSTRAINT financials_pk PRIMARY KEY (financials_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// ************************ Fleet **************************

CREATE TABLE `fleet` (
  `fleet_id` int(11) NOT NULL AUTO_INCREMENT,
  `request_id` int(11) NOT NULL COMMENT 'Record number of the request this record is associated with',
  `vehicle` varchar(50) DEFAULT NULL COMMENT 'Type of vehicle to rent from fleet',
  `pickup_date` varchar(10) DEFAULT NULL COMMENT 'Date requestor will pick up vehicle',
  `pickup_time` varchar(10) DEFAULT NULL COMMENT 'Time requestor will pick up vehicle',
  `dropoff_date` varchar(10) DEFAULT NULL COMMENT 'Date requestor will drop off vehicle',
  `dropoff_time` varchar(10) DEFAULT NULL COMMENT 'Time requestor will drop off vehicle',
  `carpooling` varchar(500) DEFAULT NULL COMMENT 'List of people who are sharing the ride to the conference',
  `date_added` varchar(10) NOT NULL,
  `date_last_updated` varchar(10) DEFAULT NULL,
  CONSTRAINT fleet_pk PRIMARY KEY (fleet_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// ************************ Request **************************

CREATE TABLE `request` (
  `request_id` int(11) NOT NULL AUTO_INCREMENT,
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
  `date_last_updated` varchar(10) DEFAULT NULL,
  CONTSTRAINT request_pk PRIMARY KEY (request_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

// ************************ Uploaded Files **************************

CREATE TABLE `uploaded_files` (
  `upload_id` int(11) NOT NULL AUTO_INCREMENT,
  `request_id` int(11) NOT NULL COMMENT 'Record number of the request these files are associated with',
  `file_name` varchar(100) NOT NULL COMMENT 'Name of the file uploaded',
  `date_uploaded` date NOT NULL COMMENT 'Date the file was uploaded',
  CONSTRAINT uploaded_files_pk PRIMARY KEY (upload_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
