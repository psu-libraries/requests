  <fieldset class="fieldset">
    <legend>EXPENSES</legend>

    <table>
      <tr class="grid-container">
        <td class="grid-x grid-padding-x">

          <div class="small-24 medium-6 cell">
            <div class="grid-x">
              <div class="small-24 medium-9 cell">
                <label class="text-right middle">
                  Transportation:
                </label>
              </div>
              <div class="small-24 medium-15 cell">
                <div class="input-group">
                  <span class="input-group-label">$</span>
                  <input type="text"
                         value="<?php echo $transportation ?? '0.00'; ?>"
                         class="input-group-field text-right"
                         readonly>

                </div>
                <p class="help-text" id="transHelpText">
                  (air, auto, train, taxi)
                </p>
              </div>
            </div>
          </div>
          <div class="small-24 medium-auto cell">
            If flying from airport other than your "home" airport, attach
            comparison.<br>
            If choosing to drive over 750 miles roundtrip (personal vehicle or
            fleet), attach flight comaprison.<br>
            <div class="grid-container">
              <div class="grid-x grid-padding-y">

                <div class="small-24 medium-shrink cell">
                  <div class="grid-x">
                    <div class="small-24 medium-14 cell">
                      <label for="estMileage" class="text-right middle">
                        For personal vehicle, estimated roundtrip mileage:
                      </label>
                    </div>
                    <div class="small-24 medium-auto cell">
                      <div class="input-group">
                        <input type="text"
                               value="<?php echo $estMileage ?? ''; ?>"
                               class="input-group-field text-right"
                               readonly>
                        <span class="input-group-label">Miles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </td>
      </tr>
      <tr class="grid-container">
        <td class="grid-x grid-padding-x">

          <div class="small-24 medium-6 cell">
            <div class="grid-x">
              <div class="small-24 medium-9 cell">
                <label for="lodging" class="text-right middle">Lodging</label>
              </div>
              <div class="small-24 medium-15 cell">
                <div class="input-group">
                  <span class="input-group-label">$</span>
                  <input type="text"
                         value="<?php echo $lodging ?? '0.00'; ?>"
                         class="input-group-field text-right"
                         readonly>
                </div>
              </div>
            </div>
          </div>
          <div class="small-24 medium-auto cell">
            To utilize TA credit card, please make reservation and have hotel
            send credit card authorization from to mjw4@psu.edu.
          </div>

        </td>
      </tr>
      <tr class="grid-container">
        <td class="grid-x grid-padding-x">

          <div class="small-24 medium-6 cell">
            <div class="grid-x">
              <div class="small-24 medium-9 cell">
                <label for="food" class="text-right middle">Food</label>
              </div>
              <div class="small-24 medium-15 cell">
                <div class="input-group">
                  <span class="input-group-label">$</span>
                  <input type="text"
                         value="<?php echo $food ?? '0.00'; ?>"
                         class="input-group-field text-right"
                         readonly>
                </div>
              </div>
            </div>
          </div>
          <div class="small-24 medium-auto cell">
            <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates">
              Per Diem Rates
            </a>
          </div>

        </td>
      </tr>
      <tr class="grid-container">
        <td class="grid-x grid-padding-x">

          <div class="small-24 medium-6 cell">
            <div class="grid-x">
              <div class="small-24 medium-9 cell">
                <label for="registration" class="text-right middle">
                  Registration
                </label>
              </div>
              <div class="small-24 medium-15 cell">
                <div class="input-group">
                  <span class="input-group-label">$</span>
                  <input type="text"
                         value="<?php echo $registration ?? '0.00'; ?>"
                         class="input-group-field text-right"
                         readonly>
                </div>
              </div>
            </div>
          </div>

          <div class="small-24 medium-auto cell">
            <label>
              Do you want the Travel Coordinator to pre-pay registration?
            </label>
            <?php
              if ($prepay == 'yes'):
                echo 'Yes';
              elseif ($prepay == 'no'):
                echo 'No';
              endif;
            ?>

          </div>
        </td>
      </tr>
      <tr class="grid-container">
        <td class="grid-x grid-padding-x ">

          <div class="small-24 medium-6 cell">
            <div class="grid-x">
              <div class="small-24 medium-9 cell">
                <label for="other" class="text-right middle">Other</label>
              </div>
              <div class="small-24 medium-15 cell">
                <div class="input-group">
                  <span class="input-group-label">$</span>
                  <input type="text"
                         value="<?php echo $other ?? '0.00'; ?>"
                         class="input-group-field text-right"
                         readonly>
                </div>
              </div>
            </div>
          </div>
          <div class="small-24 medium-auto cell">
            (e.g. phone, internet connectivity, parking, tips, tolls, misc)
          </div>

        </td>
      </tr>
      <tr class="grid-container">
        <td class="grid-x grid-padding-x">

          <div class="small-24 medium-6 cell">
            <div class="grid-x">
              <div class="small-24 medium-9 cell">
                <label for="total" class="text-right middle">
                  <b>Total</b>
                </label>
              </div>
              <div class="small-24 medium-15 cell">
                <div class="input-group">
                  <span class="input-group-label">$</span>
                  <input type="text"
                         value="<?php echo $total ?? '0.00'; ?>"
                         class="input-group-field text-right"
                         readonly>
                </div>
              </div>
            </div>
          </div>
          <div class="small-24 medium-auto cell">
            <div class="grid-x">
              <div class="small-24 medium-12 cell">
                <label>Is personal travel combined with business trip?</label>
              </div>
              <div class="small-24 medium-12 cell">
                <?php
                  if ($persTravel == 'yes'):
                    echo 'Yes';
                  elseif ($persTravel == 'no'):
                    echo 'No';
                  endif;
                ?>
              </div>
            </div>
            <p>
              If yes, contact Travel Coordinator for more information PRIOR to
              making arrangements.<br>
              If foreign travel, register with TSN.
            </p>
          </div>

        </td>
      </tr>
    </table>

    <div class="grid-container">
      <div class="grid-x">
        <div class="cell">
          <p><b>Files previously uploaded for this request:</b></p>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x">
        <div class="small-1 cell">&nbsp;</div>
        <div class="medium-4 cell">
          <ul class="no-bullet">
            <li><a href="">Flight comparison</a></li>
            <li><a href="">Hotel comparison</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--    <div class="grid-container">
      <div class="grid-x">
        <div class="cell">
          <label for="upload" class="button rounded">
            <b>Select file to upload</b>
          </label>
          <input type="file" name="upload" id="upload" class="show-for-sr">
        </div>
      </div>
    </div>
-->
    <div class="grid-container">
      <div class="grid-x">

        <div class="small-24 cell">
          <div class="grid-x">
            <div class="small-24 cell">
              <label>Notes</label>
              <textarea rows="2" readonly>
              <?php echo $expNotes ?? '&nbsp;'; ?>
            </textarea>
              </label>
            </div>
          </div>

        </div>
      </div>
  </fieldset>