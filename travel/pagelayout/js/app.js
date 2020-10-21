$(document).ready(function () {

  $('input[type=submit').click(function () {
    window.scrollTo(0, 0);
  });

  // ***************************** BEGIN FUNCTIONS *****************************

  /**
   * Gets all fields of the class passed into the function and totals all
   * the values. Also looks for the "$" and "," characters and removes them
   * if they have been entered.
   *
   * @param {string} className - Class name of the fields to be calculated
   *
   * return {number}
   */
  function calcTotal(className) {
    var total = 0;
    $("." + className).each(function () {

      if ($(this).val() != '') {
        var expVal = $(this).val();

        expVal = expVal.replaceAll('$', '');
        expVal = expVal.replaceAll(',', '');

        $(this).val(expVal);

        total += Number(expVal);
      }
    });

    return Number(total);
  }

  /**
   * Gets all of the fields using the class name and adds the attribute to all
   * of the selected fields.
   *
   * @param {string} className - Class to get the fields
   * @param {string} attribute - Attribute to be added
   *
   * return {void}
   */
  function setAttr(className, attribute) {
    $("." + className).each(function () {
      $(this).attr(attribute, true);
    });
  }

  /**
   * Gets all of the fields using the class name and removes the attribute
   * from all of the selected fields.
   *
   * @param {string} className - Class used to get the fields
   * @param {string} attribute - Attribute to be removed
   *
   * return {void}
   */
  function remAttr(className, attribute) {
    $("." + className).each(function () {
      $(this).removeAttr(attribute);
    });
  }

  /**
   * Gets all of the fields using the class name and clears any values entered
   * into them.
   *
   * @param {string} className - Class used to get the fields
   *
   * return {void}
   */
  function clearValue(className) {
    $("." + className).each(function () {
      $(this).val('');
    });
  }

  /**
   * Gets all of the fields using the class name and adds a new class to those
   * fields.
   *
   * @param {string} className - Class used to get the fields
   * @param {string} newClass     - Class to be added
   *
   * return {void}
   */
  function addClass(className, newClass) {
    $("." + className).each(function () {
      $(this).addClass(newClass);
    });
  }

  /**
   * Gets all of the fields using the class name and removes another class
   * from those fields.
   *
   * @param {string} className - Class used to get the fields
   * @param {string} class     - Class to be removed
   *
   * return {void}
   */
  function remClass(className, oldClass) {
    $("." + className).each(function () {
      $(this).removeClass(oldClass);
    });
  }

  function parseDateTime(dateId, timeId) {

    // Get the values of both the date and time field
    var tmpDate = $("#" + dateId).val();
    var tmpTime = $("#" + timeId).val();

    // Trim off any blank spaces that may have been entered
    tmpDate = tmpDate.trim();
    tmpTime = tmpTime.trim();

    // When formatted properly, the length of the date is 10 characters, and
    // length of the time is 8 characters.
    if (tmpDate.length === 10 && tmpTime.length === 8) {

      // Split both the date string and the time string and assign those values
      // into arrays.
      var arrDate = tmpDate.split("/");
      var arrTime = tmpTime.split(":");

      // Extract the AM/PM characters from the last element of the arrTime
      // array.
      var amPm = arrTime[1].substr(3, 4);

      // Remove the last 3 characters " AM/PM" from the value of the last
      // element of the arrTime array.
      arrTime[1] = arrTime[1].substr(0, 2);

      // If the value of the variable 'amPm' is "PM", then 12 needs to be added
      // to the hour value. This will be needed when parsing the date and
      // time into milliseconds from January 1, 1970.
      if (amPm === 'PM') {
        arrTime[0] = parseInt(arrTime[0]) + 12;
      }

      // Using the different elements of the arrDate and arrTime arrays,
      // create a new date object.
      var varDateTime = new Date(arrDate[2], arrDate[0] - 1, arrDate[1], arrTime[0], arrTime[1]);

      // Formats the date/time as 'mm/d/yyyy, h:m:00 AM/PM'
      var varDate = varDateTime.toLocaleString('en-US');

      // Takes the date/time and returns the milliseconds from 1/1/1970
      return Date.parse(varDate);
    } else {
      return 0;
    }
  }

  function showDateTimeError(section) {
    var label = section + "Label";
    var err = section + "Error";
    var dateInput = section + "Date";
    var timeInput = section + "Time";

    $("." + label).addClass('is-invalid-label');
    $("#" + dateInput).addClass('is-invalid-input');
    $("#" + timeInput).addClass('is-invalid-input');
    $("#" + err).addClass('is-visible');
  }

  function hideDateTimeError(section) {
    var label = section + "Label";
    var err = section + "Error";
    var dateInput = section + "Date";
    var timeInput = section + "Time";

    $("." + label).removeClass('is-invalid-label');
    $("#" + dateInput).removeClass('is-invalid-input');
    $("#" + timeInput).removeClass('is-invalid-input');
    $("#" + err).removeClass('is-visible');
  }

  $('.travelForm').on('submit', function () {

    var errorFlag = 0;
    var vehicle = $('vehicle').val();

    var tmpToday = new Date().toLocaleString('en-US');
    var today = Date.parse(tmpToday);

    // Convert all of the date/time fields into miliseconds since 1/1/1970.
    var parsedDeparture = parseDateTime('departureDate', 'departureTime');
    var parsedReturn = parseDateTime('returnDate', 'returnTime');
    var parsedPickup = parseDateTime('pickupDate', 'pickupTime');
    var parsedDropoff = parseDateTime('dropoffDate', 'dropoffTime');

    // Check if departure date/time is earlier than the current date/time.
    if (parsedDeparture != 0 && today > parsedDeparture) {
      showDateTimeError("departure");
    } else if (today < parsedDeparture) {
      hideDateTimeError("departure");
      errorFlag = 1;
    }

    if (parsedDeparture != 0 && parsedReturn != 0 &&
      parsedDeparture > parsedReturn) {
      showDateTimeError("return");
    } else if (parsedDeparture < parsedReturn) {
      hideDateTimeError("return");
      errorFlag = 1;
    }

    if (vehicle != "") {
      if (parsedPickup != 0 && parsedDeparture != 0 &&
        parsedDeparture > parsedPickup) {
        showDateTimeError("pickup");
      } else if (parsedDeparture < parsedPickup) {
        hideDateTimeError("pickup");
        errorFlag = 1;
      }

      if (parsedDropoff != 0 && parsedPickup != 0 &&
        parsedPickup > parsedDropoff) {
        showDateTimeError("dropoff");
      } else if (parsedPickup < parsedDropoff) {
        hideDateTimeError("dropoff");
        errorFlag = 1;
      }
    }

    if (errorFlag === 1) {
      $(".travelForm").submit(function (e) {
        e.preventDefault();
      })
    }

  });
  // ****************************** END FUNCTIONS ******************************


  $(".expense").on("change", function () {
    var sum = calcTotal("expense");

    $('#total').val(Number(sum).toFixed(2));
  });

  /* ******************** REGISTRATION BUTTONS ******************** */
  if ($("#registration").val() == '') {
    $("#prepayY").removeAttr("required");
    $(".prepay").prop("disabled", true);
    //    setAttr("prepay", "disbled");
    remAttr("prepay", "required");
  }
  $("#registration").on("change", function () {

    var registration = $("#registration").val();
    console.log('amount: ' + registration);

    if (registration == "" || registration == 0) {
      $(".prepay").prop("disabled", true);
      //      setAttr("prepay", "disabled");
      addClass("ppreq", "hide");
      remAttr("prepay", "required");
      remClass("prepay", "is-visible");

      $(".ppreq").checked = false;

    } else {

      $("#prepayY").prop("required", true);
      remAttr("prepay", "disabled");
      remClass("ppreq", "hide");
    }
  });

  /* ******************** FLEET RESERVATION ******************** */

  if (document.getElementById('vehicle').value == '') {
    setAttr("fleet", "readonly");
  }

  /**
   * When there is a change of value in the "Vehicle" field, determine if a
   * vehicle selected, or if one was removed
   */
  $("#vehicle").on("change", function () {

    var vehicle = document.getElementById('vehicle').value;

    // If the vehicle field is empty, make the pick-up date/time and
    // drop-off date/time fields readonly. Clear any value that may be in
    // them. Hide the asterisk marking them as required fields.
    if (vehicle == "") {
      setAttr("fleet", "readonly");
      clearValue("fleet");
      addClass("flreq", "hide");
      remAttr("fleet", "required");

      // If there were errors while a vehicle was selected, then remove all
      // of the error messages.
      remClass("pickup", "is-visible");
      hideDateTimeError("pickup");
      remClass("dropoff", "is-visible");
      hideDateTimeError("dropoff");

    } else {
      // If the vehicle field does have a value, make the pick=up date/time
      // and drop-off date/time fields editable. Show the asterisk marking
      // them as required fields.
      remAttr("fleet", "readonly");
      remClass("flreq", "hide");
      setAttr("fleet", "required");
    }
  });
});
