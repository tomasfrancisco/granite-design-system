import "./index.css";
import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { useId as g } from "react";
const b = "vPERyq_button _3VYmWa_text _3VYmWa_size--base", z = {
  button: b
}, V = ({ className: t, ...s }) => /* @__PURE__ */ e("button", { className: t ?? z.button, ...s }), H = "HLc00W_bodyFont", L = "HLc00W_headingFont", W = "HLc00W_text", h = {
  bodyFont: H,
  headingFont: L,
  "size--2xl": "HLc00W_size--2xl",
  "size--3xl": "HLc00W_size--3xl",
  "size--4xl": "HLc00W_size--4xl",
  "size--5xl": "HLc00W_size--5xl",
  "size--6xl": "HLc00W_size--6xl",
  "size--7xl": "HLc00W_size--7xl",
  "size--8xl": "HLc00W_size--8xl",
  "size--9xl": "HLc00W_size--9xl",
  "size--base": "HLc00W_size--base",
  "size--sm": "HLc00W_size--sm",
  "size--xl": "HLc00W_size--xl",
  "size--xs": "HLc00W_size--xs",
  text: W,
  "weight--bold": "HLc00W_weight--bold",
  "weight--light": "HLc00W_weight--light",
  "weight--normal": "HLc00W_weight--normal"
}, c = ({
  as: t = "span",
  size: s = "base",
  weight: n = "normal",
  className: r = "",
  isHeadingFont: o = !1,
  children: a,
  ...m
}) => {
  const l = {
    className: `${h.text} ${h[`size--${s}`]} ${h[`weight--${n}`]} ${o ? h.headingFont : h.bodyFont} ${r}`,
    ...m
  };
  switch (t) {
    case "h1":
      return /* @__PURE__ */ e("h1", { ...l, children: a });
    case "h2":
      return /* @__PURE__ */ e("h2", { ...l, children: a });
    case "h3":
      return /* @__PURE__ */ e("h3", { ...l, children: a });
    case "h4":
      return /* @__PURE__ */ e("h4", { ...l, children: a });
    case "h5":
      return /* @__PURE__ */ e("h5", { ...l, children: a });
    case "h6":
      return /* @__PURE__ */ e("h6", { ...l, children: a });
    case "p":
      return /* @__PURE__ */ e("p", { ...l, children: a });
    case "span":
    default:
      return /* @__PURE__ */ e("span", { ...l, children: a });
  }
}, p = "dHwU4a_h1", w = "dHwU4a_h2", q = "dHwU4a_h3", i = {
  h1: p,
  h2: w,
  h3: q
}, Y = ({ className: t, ...s }) => {
  switch (s.as) {
    default:
    case "h1":
      return /* @__PURE__ */ e(
        c,
        {
          isHeadingFont: !0,
          size: "4xl",
          weight: "bold",
          className: `${i.h1} ${t}`,
          ...s
        }
      );
    case "h2":
      return /* @__PURE__ */ e(
        c,
        {
          isHeadingFont: !0,
          size: "2xl",
          weight: "bold",
          className: `${i.h2} ${t}`,
          ...s
        }
      );
    case "h3":
      return /* @__PURE__ */ e(
        c,
        {
          size: "xl",
          weight: "bold",
          className: `${i.h3} ${t}`,
          ...s
        }
      );
    case "h4":
      return /* @__PURE__ */ e(
        c,
        {
          isHeadingFont: !0,
          className: `${i.h4} ${t}`,
          ...s
        }
      );
    case "h5":
      return /* @__PURE__ */ e(
        c,
        {
          isHeadingFont: !0,
          className: `${i.h5} ${t}`,
          ...s
        }
      );
    case "h6":
      return /* @__PURE__ */ e(
        c,
        {
          isHeadingFont: !0,
          className: `${i.h6} ${t}`,
          ...s
        }
      );
  }
}, v = "IJoQlq_container", N = "IJoQlq_input", F = "IJoQlq_label HLc00W_text HLc00W_size--base HLc00W_weight--normal", y = "IJoQlq_required", u = {
  container: v,
  input: N,
  label: F,
  required: y
}, A = ({
  className: t,
  label: s,
  required: n,
  id: r,
  ...o
}) => {
  const a = g();
  return /* @__PURE__ */ d("div", { className: `${u.container} ${t}`, children: [
    /* @__PURE__ */ e(
      "input",
      {
        id: r ?? a,
        className: u.input,
        pattern: ".*",
        placeholder: "",
        ...o
      }
    ),
    /* @__PURE__ */ d("label", { htmlFor: r ?? a, className: u.label, children: [
      s,
      n && /* @__PURE__ */ e("span", { "aria-hidden": !0, className: u.required, children: " * " })
    ] })
  ] });
}, G = {}, B = ({ className: t, children: s, ...n }) => /* @__PURE__ */ e("label", { className: `${G.label} ${t}`, ...n, children: /* @__PURE__ */ e(c, { as: "span", children: s }) }), $ = {}, C = (t) => {
  switch (t.as) {
    case "ol":
      return /* @__PURE__ */ e("ol", { className: $.ol, ...t });
    default:
    case "ul":
      return /* @__PURE__ */ e("ul", { className: $.ul, ...t });
  }
}, f = "tRCWiG_paragraph", I = {
  paragraph: f
}, E = ({
  className: t,
  as: s,
  ...n
}) => /* @__PURE__ */ e(
  c,
  {
    as: "p",
    size: "xl",
    className: `${I.paragraph} ${t}`,
    ...n
  }
), J = "_0onv_G_tag", x = {
  "level--danger": "_0onv_G_level--danger",
  "level--info": "_0onv_G_level--info",
  "level--success": "_0onv_G_level--success",
  "level--warning": "_0onv_G_level--warning",
  tag: J
}, k = ({ children: t, level: s, className: n }) => /* @__PURE__ */ e("span", { className: `${x.tag} ${x[`level--${s}`]} ${n}`, children: t }), M = "LqMpGa_container", Q = "LqMpGa_label", P = "LqMpGa_required", T = "LqMpGa_textarea", _ = {
  container: M,
  label: Q,
  required: P,
  textarea: T
}, D = ({
  className: t,
  label: s,
  required: n,
  id: r,
  ...o
}) => {
  const a = g();
  return /* @__PURE__ */ d("div", { className: `${_.container} ${t}`, children: [
    /* @__PURE__ */ e(
      "textarea",
      {
        id: r ?? a,
        className: _.textarea,
        placeholder: "",
        ...o
      }
    ),
    /* @__PURE__ */ d("label", { htmlFor: r ?? a, className: _.label, children: [
      s,
      n && /* @__PURE__ */ e("span", { "aria-hidden": !0, className: _.required, children: " * " })
    ] })
  ] });
};
export {
  V as Button,
  Y as Heading,
  A as Input,
  B as Label,
  C as List,
  E as Paragraph,
  k as Tag,
  c as Text,
  D as TextArea
};
