(() => {
  // src/app.ts
  var ICONS = [
    {
      v: "TXT",
      s: "fill: gray; stroke: lavender;",
      p: "30,75 153,75 153,150 30,150",
      x: "35",
      f: "font-size: 60px",
      c: "white",
      t: "text/plain"
    },
    {
      v: "PDF",
      s: "fill: brown; stroke: indianred;",
      p: "30,75 153,75 153,150 30,150",
      x: "35",
      f: "font-size: 60px",
      c: "white",
      t: "application/pdf"
    },
    {
      v: "DOC",
      s: "fill: blue; stroke: navy;",
      p: "20,75 153,75 153,150 20,150",
      x: "26",
      f: "font-size: 60px",
      c: "white",
      t: "application/msword"
    },
    {
      v: "XML",
      s: "fill: purple; stroke: magenta;",
      p: "15,75 153,75 153,150 15,150",
      x: "21",
      f: "font-size: 60px",
      c: "white",
      t: "application/xml"
    },
    {
      v: "PSD",
      s: "fill: darkblue; stroke: mediumblue;",
      p: "30,75 153,75 153,150 30,150",
      x: "35",
      f: "font-size: 60px",
      c: "white",
      t: "application/octet-stream"
    },
    {
      v: "ZIP",
      s: "fill: darkred; stroke: maroon;",
      p: "50,75 153,75 153,150 50,150",
      x: "56",
      f: "font-size: 60px",
      c: "white",
      t: "application/zip"
    },
    {
      v: "JSON",
      s: "fill: yellow; stroke: orange;",
      p: "10,82 153,82 153,150 10,150",
      x: "19",
      f: "font-size: 52px",
      c: "white",
      t: "application/json"
    },
    {
      v: "XLSX",
      s: "fill: green; stroke: lime;",
      p: "10,80 153,80 153,150 10,150",
      x: "15",
      f: "font-size: 55px",
      c: "white",
      t: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    },
    {
      v: "CSV",
      s: "fill: lightblue; stroke: lightskyblue;",
      p: "26,75 153,75 153,150 26,150",
      x: "30",
      f: "font-size: 60px",
      c: "white",
      t: "text/csv"
    },
    {
      v: "7z",
      s: "fill: cadetblue; stroke: mediumturquoise;",
      p: "50,65 153,65 153,150 50,150",
      x: "58",
      f: "font-size: 80px",
      c: "white",
      t: "application/x-7z-compressed"
    },
    {
      v: "PPT",
      s: "fill: antiquewhite; stroke: mistyrose;",
      p: "26,75 153,75 153,150 26,150",
      x: "31",
      f: "font-size: 60px",
      c: "white",
      t: "application/vnd.ms-powerpoint"
    },
    {
      v: "TAR",
      s: "fill: coral; stroke: tomato;",
      p: "30,75 153,75 153,150 30,150",
      x: "35",
      f: "font-size: 60px",
      c: "white",
      t: "application/x-tar"
    },
    {
      v: "RAR",
      s: "fill: firebrick; stroke: red;",
      p: "29,75 153,75 153,150 29,150",
      x: "33",
      f: "font-size: 60px",
      c: "white",
      t: "application/vnd.rar"
    },
    {
      v: "GZ",
      s: "fill: darkslategray; stroke: slategray;",
      p: "42,65 153,65 153,150 42,150",
      x: "46",
      f: "font-size: 80px",
      c: "white",
      t: "application/gzip"
    },
    {
      v: "HTML",
      s: "fill: indigo; stroke: darkslateblue;",
      p: "16,85 153,85 153,150 16,150",
      x: "20",
      f: "font-size: 47px",
      c: "white",
      t: "text/html"
    },
    {
      v: "HTM",
      s: "fill: darkslateblue; stroke: indigo;",
      p: "15,75 153,75 153,150 15,150",
      x: "17",
      f: "font-size: 60px",
      c: "white",
      t: "application/html"
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
    ICONS.forEach(({ s, v, p, x, f, c, t }) => {
      const el = temp.cloneNode(true);
      const pl = el.querySelector("polygon");
      pl.setAttribute("style", s);
      const plT = el.querySelector('polygon[class="name"]');
      plT.setAttribute("points", p);
      const text = el.querySelector("text");
      text.innerHTML = v;
      text.setAttribute("x", x);
      text.setAttribute("fill", c);
      text.setAttribute("style", f);
      body.appendChild(el);
      fetch(
        `http://127.0.0.1:3001?d=${encodeURI(el.outerHTML)}&c=${encodeURI(t)}`
      );
    });
  };
})();
