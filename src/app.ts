const ICONS = [
  {
    v: "TXT",
    b: "gray",
    s: "stroke: lavender;",
    p: "30,75 153,75 153,150 30,150",
    x: "35",
    f: "font-size: 60px;",
    c: "white",
    t: "text/plain",
  },
  {
    v: "PDF",
    b: "brown",
    s: "stroke: indianred;",
    p: "30,75 153,75 153,150 30,150",
    x: "35",
    f: "font-size: 60px;",
    c: "white",
    t: "application/pdf",
  },
  {
    v: "DOC",
    b: "blue",
    s: "stroke: navy;",
    p: "20,75 153,75 153,150 20,150",
    x: "26",
    f: "font-size: 60px;",
    c: "white",
    t: "application/msword",
  },
  {
    v: "XML",
    b: "purple",
    s: "stroke: magenta;",
    p: "15,75 153,75 153,150 15,150",
    x: "21",
    f: "font-size: 60px;",
    c: "white",
    t: "application/xml",
  },
  {
    v: "PSD",
    b: "darkblue",
    s: "stroke: mediumblue;",
    p: "30,75 153,75 153,150 30,150",
    x: "35",
    f: "font-size: 60px;",
    c: "white",
    t: "application/octet-stream",
  },
  {
    v: "ZIP",
    b: "darkred",
    s: "stroke: maroon;",
    p: "50,75 153,75 153,150 50,150",
    x: "56",
    f: "font-size: 60px;",
    c: "white",
    t: "application/zip",
  },
  {
    v: "JSON",
    b: "yellow",
    s: "stroke: orange;",
    p: "10,82 153,82 153,150 10,150",
    x: "19",
    f: "font-size: 52px;",
    c: "white",
    t: "application/json",
  },
  {
    v: "XLSX",
    b: "green",
    s: "stroke: lime;",
    p: "10,80 153,80 153,150 10,150",
    x: "15",
    f: "font-size: 55px;",
    c: "white",
    t: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    v: "CSV",
    b: "lightblue",
    s: "stroke: lightskyblue;",
    p: "26,75 153,75 153,150 26,150",
    x: "30",
    f: "font-size: 60px;",
    c: "white",
    t: "text/csv",
  },
  {
    v: "7z",
    b: "cadetblue",
    s: "stroke: mediumturquoise;",
    p: "50,65 153,65 153,150 50,150",
    x: "58",
    f: "font-size: 80px;",
    c: "white",
    t: "application/x-7z-compressed",
  },
  {
    v: "PPT",
    b: "antiquewhite",
    s: "stroke: mistyrose;",
    p: "26,75 153,75 153,150 26,150",
    x: "31",
    f: "font-size: 60px;",
    c: "white",
    t: "application/vnd.ms-powerpoint",
  },
  {
    v: "TAR",
    b: "coral",
    s: "stroke: tomato;",
    p: "30,75 153,75 153,150 30,150",
    x: "35",
    f: "font-size: 60px;",
    c: "white",
    t: "application/x-tar",
  },
  {
    v: "RAR",
    b: "firebrick",
    s: "stroke: red;",
    p: "29,75 153,75 153,150 29,150",
    x: "33",
    f: "font-size: 60px;",
    c: "white",
    t: "application/vnd.rar",
  },
  {
    v: "GZ",
    b: "darkslategray",
    s: "stroke: slategray;",
    p: "42,65 153,65 153,150 42,150",
    x: "46",
    f: "font-size: 80px;",
    c: "white",
    t: "application/gzip",
  },
  {
    v: "HTML",
    b: "indigo",
    s: "stroke: darkslateblue;",
    p: "16,85 153,85 153,150 16,150",
    x: "20",
    f: "font-size: 47px;",
    c: "white",
    t: "text/html",
  },
  {
    v: "HTM",
    b: "darkslateblue",
    s: "stroke: indigo;",
    p: "15,75 153,75 153,150 15,150",
    x: "17",
    f: "font-size: 60px;",
    c: "white",
    t: "application/html",
  },
];

window.onload = () => {
  const { body } = document;
  const temp = body.querySelector("svg");
  if (!temp) {
    console.error("Template svg is missing");
    return;
  }

  body.removeChild(temp);
  ICONS.forEach(({ s, v, p, x, f, c, t, b }) => {
    const el = temp.cloneNode(true) as HTMLElement;
    const pl = el.querySelector("polygon") as SVGPolygonElement;
    pl.setAttribute("style", `fill: ${b};${s}`);

    const plT = el.querySelector('polygon[class="name"]') as SVGPolygonElement;
    plT.setAttribute("points", p);

    const text = el.querySelector("text") as SVGTextElement;
    text.innerHTML = v;
    text.setAttribute("x", x);
    text.setAttribute("fill", c);
    const old = text.getAttribute("style");
    text.setAttribute("style", `${f}${old}`);

    body.appendChild(el);

    fetch(
      `http://127.0.0.1:3001?d=${encodeURI(el.outerHTML)}&t=${encodeURI(
        t
      )}&c=${b}`
    );
  });
};
