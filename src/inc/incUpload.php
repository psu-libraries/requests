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
    $target_dir = buildDirectory($folder, $requestId);

    // Take the information for the files to be uploaded and rearrange them
    // so that they are grouped together
    $arrFiles = rearrangeFilesArray($_FILES['files']);

    for ($a = 0; $a < $arraySize; $a++):
        // Get the information required to run control checks. If they pass,
        // then the file can be uploaded into the system.
        $fileName = getFileName($arrFiles[$a]['name']);
        $target_file = $target_dir . $fileName;
        $fileType = getFileType($fileName);
        $fileSize = $arrFiles[$a]['size'];

        // Check to see if the file exists, the size is under the maximum limit,
        // and the mime type is of an accepted type. Each of these will return
        // a value of one if the criteria is not met.
        $existsOk = fileExists($fileName);
        $sizeOk = checkFileSize($fileSize);
        $typeOk = checkMimeType($fileType);

        if ($existsOk === 1) {
            $errorFlag = 3;
            $errorMessage = "The file $fileName already exists.";
        }
        if ($sizeOk === 1) {
            $errorFlag = 3;
            $errorMessage = "The size of $fileName is too large. Must be smaller than 500MB.";
        }
        if ($typeOk === 1) {
            $errorFlag = 3;
            $errorMessage = "The file type of $fileName is not an accepted file type.";
        }

        // If any of the flag variables for the file upload come back with a
        // value of one, then the file upload did not complete properly.
        if ($existsOk === 1 || $sizeOk === 1 || $typeOk === 1):
            $uploadOk = 1;
            break;
        endif;

    endfor;

    if ($uploadOk === 0):
        foreach ($_FILES["files"]["error"] as $key => $error):
            if ($error == UPLOAD_ERR_OK):
                $tmp_name = $_FILES["files"]["tmp_name"][$key];

                $name = basename($_FILES["files"]["name"][$key]);
                move_uploaded_file($tmp_name, $target_dir . $name);
            endif;

            $fileError = $_FILES["files"]["error"];

            switch ($fileError) {
                case 'UPLOAD_ERR_PARTIAL':
                    $errorFlag = 3;
                    $errorMessage = "The file $name only partially uploaded.";
                    break;
                case 'UPLOAD_ERR_NO_FILE':
                    $errorFlag = 3;
                    $errorMessage = "The file named $name was not uploaded";
                    break;
                default:
                    # code...
                    break;
            }

        endforeach;
    endif;
endif;
