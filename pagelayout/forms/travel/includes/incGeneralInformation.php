<fieldset class="fieldset grid-container">
    <legend>GENERAL INFORMATION</legend>
    <div class="grid-x">
        <div class="medium-9 cell">

            <label class="<?php echo $arrDest['label']; ?>">
                Destination (City, State): <span class="required">*</span>

                <input type="text"
                       name="destination"
                       class="<?php echo $arrDest['input']; ?>"
                       maxlength="100"
                       size="55"
                       value="<?php echo $destination; ?>">
            </label>

            <label class="<?php echo $arrDest['error']; ?>">
                <?php echo $arrDest['errorMsg']; ?>
            </label>

            <label class="<?php echo $arrConf['label']; ?>">
                Conference Name: <span class="required">*</span>

                <input type="text"
                       name="conference"
                       class="<?php echo $arrConf['input']; ?>"
                       maxlength="250"
                       value="<?php echo $conference; ?>"
                       size="53">
            </label>

            <label class="<?php echo $arrConf['error']; ?>">
                <?php echo $arrConf['errorMsg']; ?>
            </label>

        </div>

        <?php
            // Departure date/time fields
            $arrDateTime = [
                "legend" => "Departure",
                "required" => true,
                "asterisk" => "required",
                "dateLabel" => $arrDepDate['label'],
                "dateName" => "departureDate",
                "dateInput" => $arrDepDate['input'],
                "date" => $departureDate,
                "dateError" => $arrDepDate['error'],
                "dateMsg" => $arrDepDate['errorMsg'],
                "timeLabel" => $arrDepTime['label'],
                "timeName" => "departureTime",
                "timeInput" => $arrDepTime['input'],
                "time" => $departureTime,
                "timeError" => $arrDepTime['error'],
                "timeMsg" => $arrDepTime['errorMsg'],
                "error" => $arrDeparture['error'],
                "errorMsg" => $arrDeparture['errorMsg']
            ];

            require $root . '/pagelayout/templates/dateTime.php';
            unset($arrDateTime);

            // Return date/time fields
            $arrDateTime = [
                "legend" => "Return",
                "required" => true,
                "asterisk" => "required",
                "dateLabel" => $arrRetDate['label'],
                "dateName" => "returnDate",
                "dateInput" => $arrRetDate['input'],
                "date" => $returnDate,
                "dateError" => $arrRetDate['error'],
                "dateMsg" => $arrRetDate['errorMsg'],
                "timeLabel" => $arrRetTime['label'],
                "timeName" => "returnTime",
                "timeInput" => $arrRetTime['input'],
                "time" => $returnTime,
                "timeError" => $arrRetTime['error'],
                "timeMsg" => $arrRetTime['errorMsg'],
                "error" => $arrReturn['error'],
                "errorMsg" => $arrReturn['errorMsg']
            ];

            require $root . '/pagelayout/templates/dateTime.php';
            unset($arrDateTime);
        ?>
    </div>

    <div class="grid-x">
        <div class="medium-10 cell">

            <label class="<?php echo $arrSpons['label']; ?>">
                Sponsoring Organization: <span class="required">*</span>

                <input type="text"
                       name="sponsor"
                       class="<?php echo $arrSpons['input']; ?>"
                       maxlength="250"
                       size="58"
                       value="<?php echo $sponsor; ?>"
                       required>
            </label>

            <label class="<?php echo $arrSpons['error']; ?>">
                <?php echo $arrSpons['errorMsg']; ?>
            </label>
        </div>

        <div class="medium-8 cell">
            <br>
            <?php
                $mainLabel = "Are you a member?";
                $error = $arrMember['error'];
                $errorMsg = $arrMember['errorMsg'];
                $required = true;

                $arrRadios = [
                    0 => [
                        'label' => $arrMember['label'],
                        'name' => 'member',
                        'input' => $arrMember['input'],
                        'id' => 'memberY',
                        'value' => 'Yes',
                        'var' => $member,
                        'labelText' => 'Yes'
                    ],
                    1 => [
                        'label' => $arrMember['label'],
                        'name'  => 'member',
                        'input' => $arrPersTravel['input'],
                        'id' => 'memberN',
                        'value' => 'No',
                        'var' => $member,
                        'labelText' => 'No'
                    ]
                ];

                require $root . '/pagelayout/templates/radioButtons.php';
                unset($arrRadios);
            ?>
        </div>
    </div>

    <div class="grid-x">
        <div class="cell">
            <?php
                $arrNotes = [
                    'label' => $arrGiNotes['label'],
                    'labelText' => 'Roles, Goals, Attendance, and other additional helpful notes:',
                    'input' => $arrGiNotes['input'],
                    'id' => 'gINotes',
                    'value' => $gINotes,
                    'error' => $arrGiNotes['error'],
                    'errorMsg' => $arrGiNotes['errorMsg']
                ];
                require $root . '/pagelayout/templates/notes.php';
                unset($arrNotes);
            ?>
        </div>
    </div>
</fieldset>
