 <fieldset class="fieldset grid-container">
    <legend>EXPENSES</legend>

    <table class="stack">
        <caption>EXPENSES TABLE</caption>
        <thead>
            <tr class="grid-x">
                <th class="medium-6 text-center">Expenses</th>
                <th class="medium-18 text-center">Instructions</th>
            </tr>
        </thead>
        <tbody>

            <?php
            require $formSec . 'secExpTransportation.php';
            require $formSec . 'secExpLodging.php';
            require $formSec . 'secExpFood.php';
            require $formSec . 'secExpRegistration.php';
            require $formSec . 'secExpOther.php';
            require $formSec . 'secExpTotal.php';
            ?>
        </tbody>
    </table>

    <?php if ($_SERVER['PHP_SELF'] != '/travel/new.php') : ?>
        <div class="grid-x">
            <div class="cell">
                <p><b>Files previously uploaded for this request:</b></p>
            </div>
        </div>

        <?php displayFiles($root, 'TR', $id); ?>
    <?php endif; ?>
    
    <div class="grid-X">

        <div class="medium-8 cell">
            <label>
                <strong>Select file to upload</strong>
                <input type="file" name="files[]" multiple="multiple">
            </label>
        </div>
    </div>

    <div class="grid-x">

    <?php
        $arrNotes = [
            'label' => $arrExpNotes['label'],
            'labelText' => 'Notes:',
            'input' => $arrExpNotes['input'],
            'id' => 'expNotes',
            'value' => $expNotes,
            'error' => $arrExpNotes['error'],
            'errorMsg' => $arrExpNotes['errorMsg']
        ];

        require $root . '/pagelayout/templates/notes.php';
    ?>

    </div>

</fieldset>
