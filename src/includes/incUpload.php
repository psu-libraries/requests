<?php

$arraySize = count($_FILES['files']['name']);
$valNumberOfElements = numberBetween($arraySize, 1, 3);


if ($valNumberOfElements === true):

    // Flag variable to determine if error occured during upload
    $uploadOk = 0;
    $existsOk = 0;
    $sizeOk = 0;
    $typeOk = 0;

    // Build the name of the directory the files are to go into
    $targetDir = buildDirectory($root, 'TR', $requestId);

    // Take the information for the files to be uploaded and rearrange them
    // so that they are grouped together
    $arrFiles = rearrangeFilesArray($_FILES['files']);

    for ($a = 0; $a < $arraySize; $a++):

        $fileFlag = 0;

        // Get the information required to run control checks. If they pass,
        // then the file can be uploaded into the system.
        $fileName = getFileName($arrFiles[$a]['name']);
        $targetFile = $targetDir . $fileName;
        $fileType = getFileType($fileName);
        $fileSize = $arrFiles[$a]['size'];

        // Check to see if the file exists, the size is under the maximum limit,
        // and the mime type is of an accepted type. Each of these will return
        // a value of one if the criteria is not met.
        $existsOk = fileExists($targetFile);
        $sizeOk = checkFileSize($fileSize);
        $typeOk = checkMimeType($fileType);

        if ($existsOk == 1) {
            $fileFlag = 100;
            $errorMessage = "The file $fileName already exists.";
            break;
        }
        if ($sizeOk === 1) {
            $fileFlag = 100;
            $errorMessage = "The size of $fileName is too large. Must be smaller than 500MB.";
            break;
        }
        if ($typeOk === 1) {
            $fileFlag = 100;
            $errorMessage = "The file type of $fileName is not an accepted file type.";
            break;
        }

        // If any of the flag variables for the file upload come back with a
        // value of one, then the file upload did not complete properly.
        if ($existsOk === 1 || $sizeOk === 1 || $typeOk === 1):
            $uploadOk = 1;
            break;
        endif;

        if ($uploadOk === 0):
            $tmpName = $_FILES["files"]["tmp_name"][$a];
            move_uploaded_file($tmpName, $targetDir . $fileName);
        endif;
    endfor;
endif;
