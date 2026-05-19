// DARK LIGHT MODE

    const toggle = document.getElementById("toggle");

    toggle.onclick = () => {
      document.body.classList.toggle("light-mode");
    };

    // STAR EFFECT

    const stars = document.getElementById("stars");

    for(let i = 0; i < 120; i++){

      let star = document.createElement("div");

      star.classList.add("star");

      star.style.left = Math.random() * window.innerWidth + "px";

      star.style.animationDuration =
      Math.random() * 3 + 2 + "s";

      star.style.opacity = Math.random();

      star.style.height =
      Math.random() * 100 + 50 + "px";

      stars.appendChild(star);
    }