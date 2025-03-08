var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// extension.js
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);

// node_modules/@peaceroad/markdown-it-hr-sandwiched-semantic-container/semantics.json
var semantics_default = [
  {
    name: "abstract",
    as: "\u8981\u65E8,\u6284\u9332",
    tag: "section",
    attrs: [["role", "doc-abstract"]]
  },
  {
    name: "acknowledgments",
    as: "\u8B1D\u8F9E",
    tag: "section",
    attrs: [["role", "doc-acknowledgments"]]
  },
  {
    name: "afterword",
    as: "\u5F8C\u66F8\u304D,\u3042\u3068\u304C\u304D,\u8DCB\u6587",
    tag: "section",
    attrs: [["role", "doc-afterword"]]
  },
  {
    name: "agenda",
    as: "\u8B70\u984C,\u691C\u8A0E\u8AB2\u984C,\u30A2\u30B8\u30A7\u30F3\u30C0",
    tag: "section",
    attrs: []
  },
  {
    name: "alert",
    as: "\u8B66\u5831,\u30A2\u30E9\u30FC\u30C8",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "annotation",
    as: "\u6CE8\u91C8",
    tag: "aside",
    attrs: []
  },
  {
    name: "answer",
    as: "answers,\u56DE\u7B54,\u7B54\u3048?",
    tag: "section",
    attrs: []
  },
  {
    name: "appendix",
    as: "(\u4ED8\u9332|\u4ED8\u5C5E)",
    tag: "section",
    attrs: [["role", "doc-appendix"]]
  },
  {
    name: "assessments",
    as: "\u8A55\u4FA1,\u63A1\u70B9",
    tag: "section",
    attrs: []
  },
  {
    name: "author",
    as: "\u8457\u8005",
    tag: "section",
    attrs: []
  },
  {
    name: "bibliography",
    as: "(\u53C2\u8003)?\u6587\u732E(\u4E00\u89A7)?",
    tag: "section",
    attrs: [["role", "doc-bibliography"]]
  },
  {
    name: "book",
    as: "magazine,(\u66F8\u7C4D|\u96D1\u8A8C)(\u60C5\u5831|\u6848\u5185)?,\u66F8\u8A8C(\u60C5\u5831)?",
    tag: "section",
    attrs: []
  },
  {
    name: "caution",
    as: "\u6CE8\u610F",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "chapter-toc",
    as: "chapter toc,\u7AE0\u76EE\u6B21",
    tag: "nav",
    attrs: [["role", "doc-nav"]]
  },
  {
    name: "check",
    as: "\u30C1\u30A7\u30C3\u30AF,\u78BA\u8A8D\u4E8B\u9805",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "colophon",
    as: "\u5965\u4ED8",
    tag: "section",
    attrs: [["role", "doc-colophon"]]
  },
  {
    name: "column",
    as: "\u30B3\u30E9\u30E0",
    tag: "aside",
    attrs: []
  },
  {
    name: "conclusion",
    as: "\u7D42\u308F\u308A\u306B,\u304A\u308F\u308A\u306B,\u7D50\u3073,\u7D50\u8AD6",
    tag: "section",
    attrs: [["role", "doc-conclusion"]]
  },
  {
    name: "credits",
    as: "\u30AF\u30EC\u30B8\u30C3\u30C8",
    tag: "section",
    attrs: [["role", "doc-credits"]]
  },
  {
    name: "danger",
    as: "\u5371\u967A",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "dedication",
    as: "\u732E\u5448",
    tag: "section",
    attrs: [["role", "doc-dedication"]]
  },
  {
    name: "editornote",
    as: "editor('s)? note,\u7DE8\u6CE8",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "endnotes",
    as: "\u5F8C\u6CE8,\u7AE0\u672B\u6CE8,\u5DFB\u672B\u6CE8",
    tag: "section",
    attrs: [["role", "doc-endnotes"]]
  },
  {
    name: "epigraph",
    as: "\u984C\u8F9E,\u984C\u53E5,\u984C\u8A00",
    tag: "section",
    attrs: [["role", "doc-epigraph"]]
  },
  {
    name: "epilogue",
    as: "\u30A8\u30D4\u30ED\u30FC\u30B0,\u7D42\u5E55,\u7D42\u7AE0",
    tag: "section",
    attrs: [["role", "doc-epilogue"]]
  },
  {
    name: "errata",
    as: "\u6B63\u8AA4\u8868",
    tag: "section",
    attrs: [["role", "doc-example"]]
  },
  {
    name: "event",
    as: "\u30A4\u30D9\u30F3\u30C8(\u60C5\u5831|\u6848\u5185)?,\u884C\u4E8B(\u60C5\u5831|\u6848\u5185)?,\u50AC\u3057\u7269(\u60C5\u5831|\u6848\u5185)?,\u51FA\u6765\u4E8B",
    tag: "section",
    attrs: []
  },
  {
    name: "example",
    as: "\u4F8B",
    tag: "figure",
    attrs: [["role", "doc-example"]]
  },
  {
    name: "faq",
    as: "\uFF26\uFF21\uFF31,\u3088\u304F\u3042\u308B(\u8CEA\u554F|\u554F\u3044\u5408\u308F\u305B)",
    tag: "section",
    attrs: [["role", "doc-qna"]]
  },
  {
    name: "feedback",
    as: "\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF",
    tag: "section",
    attrs: []
  },
  {
    name: "first-published",
    as: "first (published|publication),\u521D\u51FA",
    tag: "section",
    attrs: []
  },
  {
    name: "foreword",
    as: "((\u672C\u66F8|\u65E5\u672C\u8A9E\u7248)?\u306E)?(\u520A\u884C|\u767A\u884C|\u767A\u520A)\u306B\u5BC4\u305B\u3066",
    tag: "section",
    attrs: [["role", "doc-foreword"]]
  },
  {
    name: "hint",
    as: "\u30D2\u30F3\u30C8",
    tag: "section",
    attrs: [["role", "doc-tip"]]
  },
  {
    name: "importance",
    as: "important, (\u91CD\u8981|\u91CD\u5927)(\u60C5\u5831|\u306A\u3053\u3068)?",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "information",
    as: "info,\u6848\u5185,(\u53C2\u8003)?\u60C5\u5831,\u30A4\u30F3\u30D5\u30A9\u30E1\u30FC\u30B7\u30E7\u30F3",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "index",
    as: "\u7D22\u5F15",
    tag: "section",
    attrs: [["role", "doc-index"]]
  },
  {
    name: "interview",
    as: "\u30A4\u30F3\u30BF\u30D3\u30E5\u30FC",
    tag: "section",
    attrs: [["role", "doc-qna"]]
  },
  {
    name: "introduction",
    as: "\u5E8F\u8AD6,\u5E8F\u8AAC,\u306F\u3058\u3081\u306B,\u59CB\u3081\u306B",
    tag: "section",
    attrs: [["role", "doc-introduction"]]
  },
  {
    name: "issue",
    as: "\u554F\u984C\u70B9,\u4E89\u70B9,\u8AD6\u70B9,\u30A4\u30B7\u30E5\u30FC",
    tag: "section",
    attrs: []
  },
  {
    name: "keywords",
    as: "\u30AD\u30FC\u30EF\u30FC\u30C9,\u624B\u304C\u304B\u308A(\u8A9E)?",
    tag: "section",
    attrs: []
  },
  {
    name: "lead",
    as: "\u30EA\u30FC\u30C9(\u6587)?,\u5C0E\u5165(\u6587)?",
    tag: "section",
    attrs: [["aria-label", "NAME"]]
  },
  {
    name: "lesson",
    as: "\u30EC\u30C3\u30B9\u30F3,\u6559\u8A13",
    tag: "section",
    attrs: []
  },
  {
    name: "memo",
    as: "\u30E1\u30E2",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "note",
    as: "\u30CE\u30FC\u30C8",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "notice",
    as: "\u901A\u77E5,\u901A\u544A,\u544A\u77E5,\u63B2\u793A,\u6CE8\u76EE,(\u304A)?(\u3057|\u77E5)\u3089\u305B",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "opinion",
    as: "\u610F\u898B,\u898B\u89E3,\u30AA\u30D4\u30CB\u30AA\u30F3",
    tag: "section",
    attrs: []
  },
  {
    name: "outline",
    as: "\u6982\u7565,\u30A2\u30A6\u30C8\u30E9\u30A4\u30F3",
    tag: "section",
    attrs: []
  },
  {
    name: "overview",
    as: "\u6982\u89B3,\u5927\u8981,\u3042\u3089\u307E\u3057",
    tag: "section",
    attrs: []
  },
  {
    name: "planning",
    as: "plan,\u8A08\u753B,\u6848",
    tag: "section",
    attrs: []
  },
  {
    name: "point",
    as: "\u30DD\u30A4\u30F3\u30C8,\u8981\u70B9",
    tag: "section",
    attrs: [["role", "doc-tip"]]
  },
  {
    name: "postscript",
    as: "(([0-9]+\u5E74)?[0-9]+\u6708[0-9]+\u65E5)?\u8FFD\u8A18",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "preamble",
    as: "\u5E8F,\u5E8F\u6587",
    tag: "section",
    attrs: [["role", "doc-introduction"]]
  },
  {
    name: "preface",
    as: "\u524D\u66F8\u304D,\u307E\u3048\u304C\u304D",
    tag: "section",
    attrs: [["role", "doc-preface"]]
  },
  {
    name: "problem",
    as: "\u554F[\u3044\u984C]?",
    tag: "section",
    attrs: []
  },
  {
    name: "profile",
    as: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB,\u4EBA\u7269\u7D39\u4ECB",
    tag: "section",
    attrs: []
  },
  {
    name: "prologue",
    as: "\u30D7\u30ED\u30ED\u30FC\u30B0,\u5E8F\u5E55,\u5E8F\u7AE0",
    tag: "section",
    attrs: [["role", "doc-prologue"]]
  },
  {
    name: "proposal",
    as: "\u30D7\u30ED\u30DD\u30FC\u30B6\u30EB,\u63D0\u8A00",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "pull-quote",
    as: "pull quote, \u30D7\u30EB(\u30FB)?\u30AF[\u30AA\u30A9]\u30FC\u30C8,\u629C\u7C8B",
    tag: "aside",
    attrs: [["role", "doc-pullquote"], ["aria-hidden", "true"]]
  },
  {
    name: "qna",
    as: "Q&A,\uFF31\uFF06\uFF21,\u8CEA\u7591\u5FDC\u7B54,\u4E00\u554F\u4E00\u7B54,(\u554F(\u984C)?|\u8CEA\u554F)\u3068(\u56DE\u7B54|\u7B54\u3048)",
    tag: "section",
    attrs: [["role", "doc-qna"]]
  },
  {
    name: "question",
    as: "\u8CEA\u554F,\u554F(\u984C)?",
    tag: "div",
    attrs: []
  },
  {
    name: "reference",
    as: "[\u30EC\u30EA]\u30D5\u30A1\u30EC\u30F3\u30B9,\u53C2\u7167,\u53C2\u8003",
    tag: "section",
    attrs: []
  },
  {
    name: "related-book",
    as: "related (book|magazine),\u95A2\u9023(\u3057\u305F)?(\u672C|\u66F8\u7C4D|\u96D1\u8A8C)",
    tag: "aside",
    attrs: []
  },
  {
    name: "related-article",
    as: "related article,\u95A2\u9023(\u3057\u305F)?\u8A18\u4E8B",
    tag: "aside",
    attrs: []
  },
  {
    name: "related-link",
    as: "related link,\u95A2\u9023(\u3057\u305F)?\u30EA\u30F3\u30AF",
    tag: "aside",
    attrs: []
  },
  {
    name: "relation",
    as: "related,\u95A2\u9023",
    tag: "aside",
    attrs: []
  },
  {
    name: "recommendation",
    as: "recommend(ed)?,\u52E7\u544A,\u52E7\u3081,\u63A8\u85A6,\u30EA\u30B3\u30E1\u30F3\u30C9",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "supplement",
    as: "supplements,\u88DC\u8DB3(\u60C5\u5831)?",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "solution",
    as: "\u89E3\u7B54,\u89E3\u6C7A(\u65B9\u6CD5)?,\u89E3\u6CD5",
    tag: "section",
    attrs: []
  },
  {
    name: "suggestion",
    as: "suggest,\u63D0\u6848,\u30B5\u30B8\u30A7\u30B9\u30C8",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  },
  {
    name: "summary",
    as: "\u8981\u7D04,\u307E\u3068\u3081,\u3042\u3089\u3059\u3058",
    tag: "section",
    attrs: [["role", "doc-conclusion"]]
  },
  {
    name: "task",
    as: "\u8AB2\u984C,\u4F5C\u696D,\u30BF\u30B9\u30AF",
    tag: "section",
    attrs: []
  },
  {
    name: "tip",
    as: "tips,\u30B3\u30C4,\u79D8\u8A23,\u52A9\u8A00",
    tag: "section",
    attrs: [["role", "doc-tip"]]
  },
  {
    name: "toc",
    as: "\u76EE\u6B21",
    tag: "nav",
    attrs: [["role", "doc-nav"]]
  },
  {
    name: "topic",
    as: "\u30C8\u30D4\u30C3\u30AF,\u8A71\u984C",
    tag: "section",
    attrs: []
  },
  {
    name: "warning",
    as: "warn,\u8B66\u544A",
    tag: "section",
    attrs: [["role", "doc-notice"]]
  }
];

// node_modules/@peaceroad/markdown-it-hr-sandwiched-semantic-container/index.js
var semanticsHalfJoint = "[:.]";
var semanticsFullJoint = "[\u3000\uFF1A\u3002\uFF0E]";
var sNumber = "(?:[ \u3000](?:[0-9]{1,6}|[A-Z]{1,2})(?:[.-](?:[0-9]{1,6}|[A-Z]{1,2})){0,6})?";
var strongMark = "[*_]{2}";
var checkSematicContainerCore = (state, n, hrType, sc, checked) => {
  const nextToken = state.tokens[n + 1];
  let sn = 0;
  let actualName = null;
  while (sn < semantics_default.length) {
    let semanticsAltRegStr = "";
    if (semantics_default[sn].as) {
      const ts = semantics_default[sn].as.split(",");
      ts.forEach((x) => {
        x = x.replace(/\(/g, "(?:");
        semanticsAltRegStr += "|" + x.trim();
      });
    }
    actualName = nextToken.content.match(new RegExp(
      "^(" + strongMark + ")?((?:" + semantics_default[sn].name + semanticsAltRegStr + ")" + sNumber + ")(?:(" + semanticsHalfJoint + ") *?\\1(?: |$)| *?\\1 *?(" + semanticsHalfJoint + ") |(" + semanticsFullJoint + ") *?\\1| *?\\1 *?(" + semanticsFullJoint + ") *?)",
      "i"
    ));
    if (actualName) break;
    sn++;
  }
  if (!actualName) {
    return false;
  }
  let actualNameJoint = "";
  let hasLastJoint = false;
  let hasHalfJoint = false;
  if (actualName[3]) {
    hasHalfJoint = true;
    actualNameJoint = actualName[3];
  } else if (actualName[4]) {
    hasHalfJoint = true;
    hasLastJoint = true;
    actualNameJoint = actualName[4];
  } else if (actualName[5]) {
    actualNameJoint = actualName[5];
  } else if (actualName[6]) {
    hasLastJoint = true;
    actualNameJoint = actualName[6];
  }
  let en = n;
  let hasEndSemanticsHr = false;
  let pCloseN = -1;
  while (en < state.tokens.length) {
    const eToken = state.tokens[en];
    if (eToken.type !== "hr") {
      if (eToken.type === "paragraph_close" && pCloseN == -1) {
        pCloseN = en;
      }
      en++;
      continue;
    }
    if (hrType !== "") {
      if (new RegExp("\\" + hrType).test(eToken.markup)) {
        hasEndSemanticsHr = true;
        break;
      }
    }
    en++;
  }
  if (hrType !== "" && !hasEndSemanticsHr) {
    return false;
  }
  sc.push({
    range: [n, en],
    continued: checked,
    sn,
    hrType,
    actualCont: actualName[0],
    actualContNoStrong: actualName[0].replace(/[*_]{2}/g, ""),
    actualName: actualName[2],
    actualNameJoint,
    hasLastJoint,
    hasHalfJoint
  });
  if (hrType === "" && pCloseN !== -1) {
    sc[sc.length - 1].range[1] = pCloseN + 1;
  }
  return true;
};
var checkSemanticContainer = (state, n, hrType, sc) => {
  let continued = 0;
  if (!checkSematicContainerCore(state, n, hrType, sc, continued)) {
    return false;
  }
  let cn = sc[sc.length - 1].range[1] + 1;
  while (cn < state.tokens.length - 1) {
    continued = true;
    if (!checkSematicContainerCore(state, cn, hrType, sc, continued)) {
      return true;
    }
    cn = sc[sc.length - 1].range[1] + 1;
    continued++;
  }
  return true;
};
var setSemanticContainer = (state, n, hrType, sc, sci, opt) => {
  let nJump = 0;
  let moveToAriaLabel = false;
  let rs = sc.range[0];
  let re = sc.range[1];
  const sn = sc.sn;
  if (sci > 1) {
    let s = 1;
    while (s < sci) {
      rs++;
      re++;
      s++;
    }
  }
  const nextToken = state.tokens[rs + 1];
  const sToken = new state.Token("html_block", "", 0);
  sToken.content = "<" + semantics_default[sn].tag;
  sToken.content += ' class="sc-' + semantics_default[sn].name + '"';
  if (semantics_default[sn].attrs.length > 0) {
    let ai = 0;
    while (ai < semantics_default[sn].attrs.length) {
      if (!moveToAriaLabel) {
        moveToAriaLabel = semantics_default[sn].attrs[ai][0] === "aria-label";
        if (moveToAriaLabel) {
          semantics_default[sn].attrs[ai][1] = sc.actualName;
        }
      }
      sToken.content += " " + semantics_default[sn].attrs[ai][0] + '="' + semantics_default[sn].attrs[ai][1] + '"';
      ai++;
    }
  }
  sToken.content += ">\n";
  sToken.block = true;
  state.tokens.splice(rs, 0, sToken);
  const eToken = new state.Token("html_block", "", 0);
  eToken.content = "</" + semantics_default[sn].tag + ">\n";
  eToken.block = true;
  if (sci !== -1) {
    state.tokens.splice(re + 1, 1, eToken);
    if (!sc.continued) {
      state.tokens.splice(rs - 1, 1);
    }
  } else {
    state.tokens.splice(re + 1, 0, eToken);
  }
  if (moveToAriaLabel) {
    nextToken.content = nextToken.content.replace(new RegExp("^" + sc.actualContNoStrong), "");
    nextToken.children[0].content = nextToken.children[0].content.replace(new RegExp("^" + sc.actualContNoStrong + " *"), "");
    nextToken.content = nextToken.content.replace(new RegExp("^ *"), "");
    return nJump;
  }
  if (/^#+/.test(nextToken.content)) {
    nJump += 2;
  }
  if (/^[*_]{2}/.test(nextToken.content)) {
    if (opt.mditStrongJa && nextToken.children.length > 2) {
      if (nextToken.children[0].type === "strong_open" && nextToken.children[2].type === "strong_close") {
        const hasStrongJa = nextToken.children[1].content.match(new RegExp("^" + sc.actualName + "(" + semanticsHalfJoint + "|" + semanticsFullJoint + ")?( *)$"));
        if (hasStrongJa) {
          if (hasStrongJa[2]) {
          }
          nextToken.children.splice(0, 3);
          if (hasStrongJa[1]) {
          } else {
            nextToken.children[0].content = nextToken.children[0].content.replace(new RegExp("^(?:" + semanticsHalfJoint + "|" + semanticsFullJoint + ")"), "");
          }
        }
      }
    }
    if (nextToken.children[1]) {
      if (nextToken.children[1].type === "strong_open") {
        nextToken.children[1].attrJoin("class", "sc-" + semantics_default[sn].name + "-label");
        if (sc.hasLastJoint) {
          nextToken.children[4].content = nextToken.children[4].content.replace(new RegExp("^\\" + sc.actualNameJoint), "");
        } else {
          nextToken.children[2].content = nextToken.children[2].content.replace(new RegExp("\\" + sc.actualNameJoint + "$"), "");
        }
      } else {
        const strongBefore = new state.Token("text", "", 0);
        const strongOpen = new state.Token("strong_open", "strong", 1);
        const strongContent = new state.Token("text", "", 0);
        strongContent.content = sc.actualName;
        const strongClose = new state.Token("strong_close", "strong", -1);
        strongOpen.attrJoin("class", "sc-" + semantics_default[sn].name + "-label");
        if (!opt.mditStrongJa) {
          nextToken.children[0].content = nextToken.children[0].content.replace(new RegExp("[*_]{2} *?" + sc.actualName + " *[*_]{2}"), "");
          if (sc.hasLastSpace || sc.hasHalfJoint) {
            nextToken.children[0].content = " " + nextToken.children[0].content.replace(new RegExp("^" + sc.actualCont.replace(/\*/g, "\\*")), "");
          } else {
            nextToken.children[0].content = nextToken.children[0].content.replace(new RegExp("^" + sc.actualCont.replace(/\*/g, "\\*")), "");
          }
        }
        nextToken.content = nextToken.content.replace(new RegExp("^" + sc.actualCont.replace(/\*/g, "\\*")), "");
        nextToken.children.splice(0, 0, strongBefore, strongOpen, strongContent, strongClose);
      }
      nJump += 3;
    } else {
      const strongBefore = new state.Token("text", "", 0);
      const strongOpen = new state.Token("strong_open", "strong", 1);
      const strongContent = new state.Token("text", "", 0);
      strongContent.content = sc.actualName;
      const strongClose = new state.Token("strong_close", "strong", -1);
      strongOpen.attrJoin("class", "sc-" + semantics_default[sn].name + "-label");
      if (!opt.mditStrongJa) {
        nextToken.children[0].content = nextToken.children[0].content.replace(new RegExp("[*_]{2} *?" + sc.actualName + " *[*_]{2}"), "");
        nextToken.children[0].content = nextToken.children[0].content.replace(new RegExp("^" + sc.actualCont.replace(/\*/g, "\\*")), "");
      }
      nextToken.content = nextToken.content.replace(new RegExp("^" + sc.actualCont.replace(/\*/g, "\\*")), "");
      nextToken.children.splice(0, 0, strongBefore, strongOpen, strongContent, strongClose);
    }
  } else {
    const lt_first = new state.Token("text", "", 0);
    const lt_span_open = new state.Token("span_open", "span", 1);
    lt_span_open.attrJoin("class", "sc-" + semantics_default[sn].name + "-label");
    const lt_span_content = new state.Token("text", "", 0);
    lt_span_content.content = sc.actualName;
    const lt_span_close = new state.Token("span_close", "span", -1);
    if (sc.hasHalfJoint) {
      nextToken.children[0].content = " " + nextToken.children[0].content.replace(new RegExp("^" + sc.actualContNoStrong), "");
    } else {
      nextToken.children[0].content = nextToken.children[0].content.replace(new RegExp("^" + sc.actualContNoStrong), "");
    }
    nextToken.children.splice(0, 0, lt_first, lt_span_open, lt_span_content, lt_span_close);
    nJump += 3;
  }
  if (opt.removeJointAtLineEnd) {
    let jointIsAtLineEnd = false;
    if (nextToken.children) {
      if (nextToken.children[nextToken.children.length - 1].type === "text" && /^ *$/.test(nextToken.children[nextToken.children.length - 1].content)) {
        jointIsAtLineEnd = true;
        nextToken.children[nextToken.children.length - 1].content = "";
      } else {
        if (nextToken.children[nextToken.children.length - 1].type === "strong_close") {
          jointIsAtLineEnd = true;
        }
      }
    }
    if (jointIsAtLineEnd) return nJump;
  }
  const ljt_span_open = new state.Token("span_open", "span", 1);
  ljt_span_open.attrJoin("class", "sc-" + semantics_default[sn].name + "-label-joint");
  const ljt_span_content = new state.Token("text", sc.actualNameJoint, 0);
  ljt_span_content.content = sc.actualNameJoint;
  const ljt_span_close = new state.Token("span_close", "span", -1);
  nextToken.children.splice(3, 0, ljt_span_open, ljt_span_content, ljt_span_close);
  return nJump;
};
var semanticContainerCore = (state, n, cn, opt) => {
  let sc = [];
  let sci = 0;
  let hrType = "";
  let alreadyChecked = false;
  let nJumps = [];
  const prevToken = state.tokens[n - 1];
  const token = state.tokens[n];
  if (n === 0 || n === state.tokens.length - 1) {
    if (!opt.requireHrAtOneParagraph && token.type === "paragraph_open") {
      if (checkSematicContainerCore(state, n, hrType, sc, false)) {
        nJumps.push(setSemanticContainer(state, n, hrType, sc[0], -1, opt));
        return n += nJumps[0];
      }
    }
    n++;
    return n;
  }
  if (prevToken.type !== "hr") {
    if (!opt.requireHrAtOneParagraph && token.type === "paragraph_open") {
      cn.forEach((cni) => {
        if (n === cni + 1) {
          alreadyChecked = true;
        }
      });
      if (alreadyChecked) {
        n++;
        return n;
      }
      if (state.tokens[n - 1].type === "list_item_open") {
        n++;
        return n;
      }
      if (checkSematicContainerCore(state, n, hrType, sc, false)) {
        nJumps.push(setSemanticContainer(state, n, hrType, sc[0], -1, opt));
        n += nJumps[0];
        return n;
      }
    }
    n++;
    return n;
  }
  if (/\*/.test(prevToken.markup)) hrType = "*";
  if (/-/.test(prevToken.markup)) hrType = "-";
  if (/_/.test(prevToken.markup)) hrType = "_";
  if (!checkSemanticContainer(state, n, hrType, sc)) {
    n++;
    return n;
  }
  sci = 0;
  while (sci < sc.length) {
    nJumps.push(setSemanticContainer(state, n, hrType, sc[sci], sci, opt));
    cn.push(sc[sci].range[1] + sci + 1);
    sci++;
  }
  n += nJumps[0];
  return n;
};
var semanticContainer = (state, opt) => {
  let n = 0;
  let cn = [];
  while (n < state.tokens.length) {
    n = semanticContainerCore(state, n, cn, opt);
  }
  return true;
};
var mditSemanticContainer = (md, option) => {
  let opt = {
    requireHrAtOneParagraph: false,
    removeJointAtLineEnd: false,
    mditStrongJa: false
  };
  if (option) Object.assign(opt, option);
  md.core.ruler.after("inline", "semantic_container", (state) => {
    semanticContainer(state, opt);
  });
};
var markdown_it_hr_sandwiched_semantic_container_default = mditSemanticContainer;

// extension.js
var import_fs = __toESM(require("fs"));
var import_vscode = require("vscode");
var config = import_vscode.workspace.getConfiguration("p7dMarkdownItHrSandwichedSemanticContainer");
function activate(context) {
  const cacheCssFile = (cssFilePath2, cachedCssFilePath2) => {
    if (!import_fs.default.existsSync(cachedCssFilePath2)) {
      import_fs.default.writeFileSync(cachedCssFilePath2, import_fs.default.readFileSync(cssFilePath2));
    }
    return;
  };
  const opt = {
    requireHrAtOneParagraph: config.get("requireHrAtOneParagraph"),
    removeJointAtLineEnd: config.get("removeJointAtLineEnd")
  };
  const cssFile = "hr-sandwiched-semantic-container.css";
  const cssFilePath = __dirname + "/style/" + cssFile;
  const cachedCssFilePath = __dirname + "/style/_" + cssFile;
  import_vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("p7dMarkdownItHrSandwichedSemanticContainer.disableStyle")) {
      if (config.get("disableStyle")) {
        cacheCssFile(cssFilePath, cachedCssFilePath);
        import_fs.default.writeFileSync(cssFilePath, "");
      } else {
        cacheCssFile(cssFilePath, cachedCssFilePath);
        import_fs.default.writeFileSync(cssFilePath, import_fs.default.readFileSync(cachedCssFilePath));
      }
      import_vscode.commands.executeCommand("workbench.action.reloadWindow");
    }
    if (event.affectsConfiguration("p7dMarkdownItHrSandwichedSemanticContainer.requireHrAtOneParagraph")) {
      opt.requireHrAtOneParagraph = config.get("requireHrAtOneParagraph");
      import_vscode.commands.executeCommand("workbench.action.reloadWindow");
    }
    if (event.affectsConfiguration("p7dMarkdownItHrSandwichedSemanticContainer.removeJointAtLineEnd")) {
      opt.removeJointAtLineEnd = config.get("removeJointAtLineEnd");
      import_vscode.commands.executeCommand("workbench.action.reloadWindow");
    }
  });
  return {
    extendMarkdownIt(md) {
      return md.use(markdown_it_hr_sandwiched_semantic_container_default, {
        requireHrAtOneParagraph: opt.requireHrAtOneParagraph,
        removeJointAtLineEnd: opt.removeJointAtLineEnd
      });
    }
  };
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
