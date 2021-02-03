<?php

function buildDirectory($root, $folder, $requestId) {
  $dir = $root . "/src/uploads/" . $folder . $requestId . "/";

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
    if ($size > 500000) {
        return 1;
    }
    return 0;
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

function getFiles($root, $folder, $requestId) {
    $files = [];

    $dir = $root . '/src/uploads/' . $folder . $requestId;
    $directory = dir($dir);

    $counter = 0;

    while (($file = $directory->read()) !== false):
        if ($file !== '.' && $file !== '..'):
            $files[$counter]['filename'] = $file;
            $counter++;
        endif;
    endwhile;

    return $files;
}

function getHost() {
    return $_SERVER['HTTP_HOST'];
}

function displayFiles($root, $folder, $requestId) {

    $dirPath = $root . '/src/uploads/' . $folder . $requestId;

    if (!is_dir($dirPath)):
        return false;
    endif;

    if (isset($_SERVER['HTTPS'])):
        $urlPrefix = "https://";
      else:
        $urlPrefix = "http://";
      endif;

      $hostName = getHost();

      $url = $urlPrefix . $hostName . '/src/uploads/' . $folder . $requestId . '/';
      $files = getFiles($root, $folder, $requestId);

    echo '<div class="grid-container">';
        echo '<div class="grid-x">';
            echo '<div class="small-1 cell">&nbsp;</div>';
              echo '<ul class="vertical menu align-left">';
                foreach ($files as $file):
                    $filePath = $url . $file['filename'];
                    echo '<li>';
                        echo '<a href="' . $filePath .'">';
                            echo $file['filename'];
                        echo '</a>';
                    echo '</li>';
                endforeach;
            echo '</ul>';
        echo '</div>';
    echo '</div>';
}