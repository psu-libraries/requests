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

    // Loop through all of the expenses text fields.
    $("." + className).each(function () {

      if ($(this).val() != '') {
        // Set the raw value.
        var expVal = $(this).val();

        // Create different ids for error purposes.
        var idName = "#" + $(this).attr('id');
        var labelId = "#" + $(this).attr('id') + "Label";
        var errorId = idName + "Error";

        // Check the raw value against this regular expression.
        var regex = /^\$?((\d{1,2})?,?(\d{1,3})?)*(\.?(\d{1,2})?)?$/;
        var numStr = expVal;

        // Test if the raw value passed the regular expression test.
        if (regex.test(numStr)) {

          expVal = expVal.replaceAll('$', '');
          expVal = expVal.replaceAll(',', '');

          var floatVal = parseFloat(expVal).toFixed(2);
          $(this).val(floatVal);

        } else {
          // Create a float value for "0" to be added to the total.
          floatVal = parseFloat(0).toFixed(2);
          // Assign the text box the raw value.
          $(this).val(expVal);

          // Add error classes to mark the error.
          $(labelId).addClass('is-invalid-label');
          $(idName).addClass('is-invalid-input');
          $(errorId).addClass('is-visible');
          $(errorId).text("Must be a number.");
        }

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

  if ($("#vehicle").val() == '') {
    $("#pickupId").addClass("hide");
    $("#dropoffId").addClass("hide");
  }

  /**
   * When there is a change of value in the "Vehicle" field, determine if a
   * vehicle selected, or if one was removed
   */
  $("#vehicle").on("change", function () {

    if ($('#vehicle').val() == '') {

      $(".fleet").val("");
      $("#pickupId").addClass("hide");
      $("#dropoffId").addClass("hide");

    } else {

      $("#pickupId").removeClass("hide");
      $("#dropoffId").removeClass("hide");
    }
  });
});
