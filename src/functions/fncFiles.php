<?php

function buildDirectory($folder, $requestId) {
  $dir = "src/uploads/" . $folder . $requestId . "/";

  // If the directory doesn't exist, create it
    if (!is_dir($dir)):
        mkdir($dir);
    endif;

  return $dir;
}

function rearrangeFilesArray($arr) {
    foreach ($arr as $key => $all):
        foreach ($all as $i => $val):
            $arrFile[$i][$key] = $val;
        endforeach;
    endforeach;

    return $arrFile;
}

function getFileName($filename) {
  return basename($filename);
}

function getFileType($filename) {
  return strtolower(pathinfo($filename,PATHINFO_EXTENSION));
}

function fileExists($filename) {
    // Check to see if the file already exists.
    if (file_exists($filename)) return 1;
}

function checkFileSize($size) {
    // Check the size of the file
    if ($size > 32000) return 1;
}

function checkMimeType($type) {
    // Acceptable mime types to be uploaded
    $mimeTypes = [
        'txt' => 'text/plain',
        'png' => 'image/png',
        'jpe' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'jpg' => 'image/jpeg',
        'pdf' => 'application/pdf',
        'doc' => 'application/msword',
        'docx' => 'application/msword',
        'rtf' => 'application/rtf',
        'xls' => 'application/vnd.ms-excel',
        'xlm' => 'application/vnd.ms-excel',
        'odt' => 'application/vnd.oasis.opendocument.text',
        'ods' => 'application/vnd.oasis.opendocument.spreadsheet'
    ];

    if (!array_key_exists($type, $mimeTypes)) return 1;
}


function uploadFiles($arrFiles, $dir) {
    foreach ($_FILES["files"]["error"] as $key => $error):
        if ($error == UPLOAD_ERR_OK):
            $tmp_name = $_FILES["files"]["tmp_name"][$key];

            $name = basename($_FILES["files"]["name"][$key]);
            move_uploaded_file($tmp_name, $target_dir/$name);
        endif;
    endforeach;
}
