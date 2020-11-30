<?php

$sql = "DROP TABLE IF EXISTS TrApprovalComments";
$query = $conn->query($sql);
unset($sql);
unset($query);

$sql = "DROP TABLE IF EXISTS TrApprovalWorkflows";
$query = $conn->query($sql);
unset($sql);
unset($query);

$sql = "DROP TABLE IF EXISTS TrExpenses";
$query = $conn->query($sql);
unset($sql);
unset($drop);

$sql = "DROP TABLE IF EXISTS TrFinancials";
$query = $conn->query($sql);
unset($sql);
unset($query);

$sql = "DROP TABLE IF EXISTS TrFleet";
$query = $conn->query($sql);
unset($sql);
unset($query);

$sql = "DROP TABLE IF EXISTS TrRequests";
$query = $conn->query($sql);
unset($sql);
unset($query);

$sql = "DROP TABLE IF EXISTS TrUploadedFiles";
$query = $conn->query($sql);
unset($sql);
unset($query);
