<?php

function sanitizer($string)
{
    $string= trim($string);
    $string = strip_tags($string);
    $string = stripslashes($string);
    $string = htmlspecialchars($string);
    return $string;
}
