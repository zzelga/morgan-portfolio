window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".footer", {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        {
          576: [0, "elHeight/2", "elHeight"],
          768: [0, "elHeight", "elHeight*2"],
        },
      ],
    },
  });
};
