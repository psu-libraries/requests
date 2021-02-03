<?php
   
// Sanitize all of the values in the $_POST array.
include_once $rootFunc . 'fncSanitizer.php';

// Validation functions specific for travel request.
require_once $validations . 'fncValidations.php';

// Validate all of the values in the $_POST array.
include_once $validations . 'validations.php';