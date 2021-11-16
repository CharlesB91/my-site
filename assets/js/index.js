// Nav Bar

$(document).ready(function () {
  $(".sidenav").sidenav();
});

// Portfolio Cards

$(document).ready(function () {
  $(".modal").modal();
});

$("").css("overflow", "hidden");

// Contact Form

$("#name, #email, #textarea1").bind("keyup", function () {
  if (allFilled()) $("#register").removeAttr("disabled");
});

function allFilled() {
  var filled = true;
  $("body input").each(function () {
    if ($(this).val() == "") filled = false;
  });
  return filled;
}

function sendMail() {
  emailjs
    .send("service_gswmfxa", "template_fh1r3js", {
      from_name: document.getElementById("first_name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("textarea1").value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}