<?php

function buildReportTable($requests, $nextPage) {
    $output = '';
    foreach ($requests as $request):
        if (isset($request['request_id']) && is_numeric($request['request_id'])):
            $output .= "<tr>"
                . "<td data-label='Name of Requestor'>"
                    . $request['name']
                . "</td>"
                . "<td data-label='Access ID' class='text-center'>"
                    . $request['access_id']
                . "</td>"
                . "<td data-label='Date Submitted' class='text-center'>"
                    . $request['submission_date']
                . "</td>"
                . "<td data-label='Conference' class='text-wrap'>"
                    . $request['conference']
                . "</td>"
                . "<td data-label='Status' class='text-center'>"
                    . "<a href='$nextPage?id=" . $request['request_id'] . "'>" 
                    . $request['status'] . "</a>"
                . "</td>"
            . "</tr>";
        endif;
    endforeach;

    return $output;
}