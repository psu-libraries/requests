<?php

function fmtDisplayDate($string) {
    return date('m/d/Y', strtotime($string));
}

function fmtDisplayTime($string) {
    return date('h:i A', strtotime($string));
}
