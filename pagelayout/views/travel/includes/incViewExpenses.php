  <fieldset class="fieldset">
    <legend>EXPENSES</legend>

    <table class="grid-container">
      <tr class="grid-x">
        <td class="medium-3 cell">
          <label class="text-right">
            Transportation:
          </label>
        </td>
        <td class="medium-3 cell">
          <div class="view text-right bordered">
            <?php echo $transportation; ?>
          </div>
          <p class="help-text view" id="transHelpText">
            (air, auto, train, taxi)
          </p>
        </td>
        <td class="medium-18 cell">
          <p>
            If flying from airport other than your "home" airport, attach
            comparison.
          </p>
          <p>
            If choosing to drive over 750 miles roundtrip (personal vehicle or
            fleet), attach flight comaprison.
          </p>
          <div class="grid-container">
            <div class="grid-x">
              <label class="medium-11 cell text-right">
                For personal vehicle, estimated roundtrip mileage:&nbsp;
              </label>
              <div class="medium-2 cell view text-right bordered">
                <?php echo $estMileage; ?>
              </div>
              <span>&nbsp;miles</span>
            </div>
          </div>
        </td>
      </tr>

      <tr class="grid-x">
        <td class="medium-3 cell text-right">
          <label>Lodging:</label>
        </td>
        <td class="medium-3 cell">
          <div class="view text-right bordered">
            <?php echo $lodging; ?>
          </div>
        </td>
        <td class="medium-18 cell">
          <p>
            To utilize TA credit card, please make reservation and have hotel
            send credit card authorization from to mjw4@psu.edu.
          </p>
        </td>
      </tr>
      <tr class="grid-x">
        <td class="medium-3 cell text-right">
          <label class="text-right">Food:</label>
        </td>
        <td class="medium-3 cell">
          <div class="view text-right bordered">
            <?php echo $food; ?>
          </div>
        </td>
        <td class="medium-18 cell">
          <p>
            <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates">
              Per Diem Rates
            </a>
          </p>
        </td>
      </tr>

      <tr class="grid-x">
        <td class="medium-3 cell text-right">
          <label>Registration:</label>
        </td>
        <td class="medium-3 cell">
          <div class="view text-right bordered">
            <?php echo $registration; ?>
          </div>
        </td>
        <td class="medium-18 cell">
          <div class="grid-container">
            <div class="grid-x">
              <label class="medium-13 cell text-right">
                Do you want the Travel Coordinator to pre-pay registration?
              </label>
              <div class="medium-2 cell view text-center bordered">
                <?php echo $prepay;?>
              </div>
            </div>
          </div>
        </td>
      </tr>

      <tr class="grid-x">
        <td class="medium-3 cell text-right">
          <label>Other:</label>
        </td>
        <td class="medium-3 cell">
          <div class="view text-right bordered">
            <?php echo $other; ?>
          </div>
        </td>
        <td class="medium-18 cell">
          <p>
            (e.g. phone, internet connectivity, parking, tips, tolls, misc)
          </p>
          
        </td>
      </tr>

      <tr class="grid-x">
        <td class="medium-3 cell text-right">
          <label><b>Total:</b></label>
        </td>
        <td class="medium-3 cell">
          <div class="view text-right bordered">
            <?php echo $total ?? '0.00'; ?>
          </div>
        </td>
        <td class="medium-18 cell">
            <div class="grid-x">
              <label class="medium-11 cell text-right">
                Is personal travel combined with business trip?
              </label>
              <div class="medium-2 cell view text-center bordered">
                <?php echo $persTravel; ?>
              </div>
            </div>
            <p>
              If yes, contact Travel Coordinator for more information PRIOR to
              making arrangements.<br>
              If foreign travel, register with TSN.
            </p>
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

    <?php displayFiles($root, 'TR', $id); ?>      
    
    <div class="grid-container">
      <div class="grid-x">

        <div class="cell">
          <div class="grid-x">
            <div class="cell">
              <label>Notes</label>
              <div class="grid-x">
                <div class=" view cell bordered">
                <?php echo $expNotes ?? '&nbsp;'; ?>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  </fieldset>