const ICONS = [
  {
    v: "TXT",
    s: "fill: gray; stroke: purple;",
    p: "30,75 153,75 153,150 30,150",
    x: "35",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "PDF",
    s: "fill: brown; stroke: purple;",
    p: "30,75 153,75 153,150 30,150",
    x: "35",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "DOC",
    s: "fill: blue; stroke: purple;",
    p: "20,75 153,75 153,150 20,150",
    x: "26",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "XML",
    s: "fill: purple; stroke: purple;",
    p: "15,75 153,75 153,150 15,150",
    x: "21",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "PSD",
    s: "fill: darkblue; stroke: purple;",
    p: "30,75 153,75 153,150 30,150",
    x: "35",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "ZIP",
    s: "fill: darkred; stroke: purple;",
    p: "50,75 153,75 153,150 50,150",
    x: "56",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "JSON",
    s: "fill: yellow; stroke: purple;",
    p: "10,82 153,82 153,150 10,150",
    x: "15",
    f: "font-size: 52px",
    c: "white",
  },
  {
    v: "XLSX",
    s: "fill: green; stroke: purple;",
    p: "10,80 153,80 153,150 10,150",
    x: "15",
    f: "font-size: 55px",
    c: "white",
  },
  {
    v: "CSV",
    s: "fill: lightblue; stroke: purple;",
    p: "26,75 153,75 153,150 26,150",
    x: "30",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "7z",
    s: "fill: cadetblue; stroke: purple;",
    p: "50,65 153,65 153,150 50,150",
    x: "58",
    f: "font-size: 80px",
    c: "white",
  },
  {
    v: "PPT",
    s: "fill: antiquewhite; stroke: purple;",
    p: "26,75 153,75 153,150 26,150",
    x: "31",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "TAR",
    s: "fill: coral; stroke: purple;",
    p: "30,75 153,75 153,150 30,150",
    x: "35",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "RAR",
    s: "fill: firebrick; stroke: purple;",
    p: "29,75 153,75 153,150 29,150",
    x: "33",
    f: "font-size: 60px",
    c: "white",
  },
  {
    v: "GZ",
    s: "fill: darkslategray; stroke: purple;",
    p: "42,65 153,65 153,150 42,150",
    x: "46",
    f: "font-size: 80px",
    c: "white",
  },
  {
    v: "HTML",
    s: "fill: indigo; stroke: purple;",
    p: "16,85 153,85 153,150 16,150",
    x: "20",
    f: "font-size: 47px",
    c: "white",
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
  ICONS.forEach(({ s, v, p, x, f, c }) => {
    const el = temp.cloneNode(true) as HTMLElement;
    const pl = el.querySelector("polygon") as SVGPolygonElement;
    pl.setAttribute("style", s);

    const plT = el.querySelector('polygon[class="name"]') as SVGPolygonElement;
    plT.setAttribute("points", p);

    const text = el.querySelector("text") as SVGTextElement;
    text.innerHTML = v;
    text.setAttribute("x", x);
    text.setAttribute("fill", c);
    text.setAttribute("style", f);

    body.appendChild(el);
  });
};
