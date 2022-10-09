// Porfilio Opacity Feature

const wrapper = document.querySelectorAll(".example");

wrapper.forEach(wrap => {

  wrap.addEventListener("mouseover", function (e) {
    wrap.setAttribute('style', 'opacity:1;');
  })

  wrap.addEventListener("mouseout", function (e) {
    wrap.setAttribute('style', 'opacity:0.6;');
  })
})


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
        M.toast({
          html: "Thanks For Your Message. I Will Respond ASAP",
          classes: 'green'
        })
        var form = document.getElementById('contact-form');
        form.reset();
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
  return false; // To block from loading a new page
}

// Scroll Annimation

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    // markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});