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

  //  $('.travelForm').on('submit', function () {

  //    var errorFlag = 0;
  //    var vehicle = $('vehicle').val();


  //    if (errorFlag === 1) {
  //      $(".travelForm").submit(function (e) {
  //        e.preventDefault();
  //      })
  //    }

  //  });
  // ****************************** END FUNCTIONS ******************************


  $(".expense").on("change", function () {
    var sum = calcTotal("expense");

    $('#total').val(Number(sum).toFixed(2));
  });

  /* ******************** REGISTRATION BUTTONS ******************** */
  if ($("#registration").val() == '') {
    console.log("hello");
    $("#prepayY").removeAttr("required");
    $(".prepay").prop("disabled", true);
    //    setAttr("prepay", "disbled");
    remAttr("prepay", "required");
    addClass("ppreq", "hide");
  }
  $("#registration").on("change", function () {

    var registration = $("#registration").val();

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
      //      hideDateTimeError("pickup");
      remClass("dropoff", "is-visible");
      //      hideDateTimeError("dropoff");

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
