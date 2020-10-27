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

        var floatVal = parseFloat(expVal).toFixed(2);

        $(this).val(floatVal);

        total += parseFloat(floatVal);
      }
    });

    return Number(total);
  }


  // ****************************** END FUNCTIONS ******************************


  $(".expense").on("change", function () {
    var sum = calcTotal("expense");

    $('#total').val(Number(sum).toFixed(2));
  });

  /* ******************** REGISTRATION BUTTONS ******************** */

  if ($("#registration").val() == '') {
    $("#prepayY").removeAttr("required");
    $(".prepay").prop("disabled", true);
    $(".ppreq").addClass("hide");

    $(".prepayView").addClass("hide");
  }
  $("#registration").on("change", function () {

    var registration = $("#registration").val();

    if (registration == "" || registration == 0) {
      $(".prepay").prop("disabled", true);
      $(".ppreq").addClass("hide");
      $(".prepay").removeAttr("required");
      $(".prepay").removeClass("is-visible");

      $(".prepayN").checked = false;

    } else {

      $("#prepayY").attr("required", true);
      $(".prepay").removeAttr("disabled");
      $(".ppreq").removeClass("hide");
      $(".prepayView").removeClass("hide");

      //      $(".prepayN").checked = true;
    }
  });

  /* ******************** FLEET RESERVATION ******************** */

  if (document.getElementById('vehicle').value == '') {
    $(".fleet").prop("readonly", true);
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
      $(".fleet").prop("readonly", true);
      $(".fleet").val("");
      $(".flreq").addClass("hide");
      $(".fleet").removeAttr("required");

      // If there were errors while a vehicle was selected, then remove all
      // of the error messages.
      $(".pickup").removeClass("is-visible");
      $(".dropoff").removeClass("is-visible");

    } else {
      // If the vehicle field does have a value, make the pick=up date/time
      // and drop-off date/time fields editable. Show the asterisk marking
      // them as required fields.
      $(".fleet").removeAttr("readonly");
      $(".flreq").removeClass("hide");
      $(".fleet").prop("required", true);
    }
  });
});
