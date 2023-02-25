(() => {
  // src/app.ts
  var ICONS = [
    {
      v: "TXT",
      s: "fill: gray; stroke: purple; stroke-width: 10",
      p: "30,75 153,75 153,150 30,150",
      x: "35"
    },
    {
      v: "PDF",
      s: "fill: brown; stroke: purple; stroke-width: 10",
      p: "30,75 153,75 153,150 30,150",
      x: "35"
    },
    {
      v: "DOC",
      s: "fill: blue; stroke: purple; stroke-width: 10",
      p: "20,75 153,75 153,150 20,150",
      x: "25"
    },
    {
      v: "XML",
      s: "fill: green; stroke: purple; stroke-width: 10",
      p: "15,75 153,75 153,150 15,150",
      x: "19"
    },
    {
      v: "PSD",
      s: "fill: darkblue; stroke: purple; stroke-width: 10",
      p: "30,75 153,75 153,150 30,150",
      x: "35"
    },
    {
      v: "ZIP",
      s: "fill: darkred; stroke: purple; stroke-width: 10",
      p: "50,75 153,75 153,150 50,150",
      x: "55"
    }
  ];
  window.onload = () => {
    const { body } = document;
    const temp = body.querySelector("svg");
    if (!temp) {
      console.error("Template svg is missing");
      return;
    }
    body.removeChild(temp);
    ICONS.forEach(({ s, v, p, x }) => {
      const el = temp.cloneNode(true);
      const pl = el.querySelector("polygon");
      pl.setAttribute("style", s);
      const plT = el.querySelector('polygon[class="name"]');
      plT.setAttribute("points", p);
      const text = el.querySelector("text");
      text.innerHTML = v;
      text.setAttribute("x", x);
      body.appendChild(el);
    });
  };
})();
