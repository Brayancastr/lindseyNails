// function for datePicker
$(function () {
  $("#datepicker").datepicker();
});

// function for AppointmentPicker
const appointmentPicker = new AppointmentPicker(
  document.getElementById("time-form"),
  {
    interval: 30,
    mode: "12h",
    startTime: 09,
    endTime: 17,
    disabled: ["12:00", "12:30"],
  }
);

