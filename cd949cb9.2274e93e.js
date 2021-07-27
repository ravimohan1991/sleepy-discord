(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{262:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(323)),s={title:"Unicode and Emojis",sidebar_label:"Unicode and Emojis"},i={unversionedId:"unicode",id:"unicode",isDocsHomePage:!1,title:"Unicode and Emojis",description:"C++ code is usually in ASCII but many times you will want to send messages with Unicode and Emojis.",source:"@site/docs/unicode.md",slug:"/unicode",permalink:"/sleepy-discord/docs/unicode",version:"current",lastUpdatedAt:1627365843,sidebar_label:"Unicode and Emojis",sidebar:"Docs",previous:{title:"Voice",permalink:"/sleepy-discord/docs/voice"},next:{title:"Snowflakes and IDs",permalink:"/sleepy-discord/docs/snowflake"}},c=[{value:"Standard Unicode Emojis and Characters",id:"standard-unicode-emojis-and-characters",children:[]},{value:"C++20 and std::u8string",id:"c20-and-stdu8string",children:[]},{value:"Custom Emojis",id:"custom-emojis",children:[]}],d={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"C++ code is usually in ASCII but many times you will want to send messages with Unicode and Emojis."),Object(o.b)("h2",{id:"standard-unicode-emojis-and-characters"},"Standard Unicode Emojis and Characters"),Object(o.b)("p",null,"Sleepy Discord should store text content using UTF-8. As such, to use Unicode, you can use C++'s u8 string literals."),Object(o.b)("p",null,"String Literal"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'auto foo = u8"\u8a9e";\nsendMessage(channelID, u8"\u8a9e");\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The u8 string types are different in different C++ standards so auto is used and the above code may not work. ",Object(o.b)("a",{parentName:"p",href:"#c20-and-stdu8string"},"More info here.")))),Object(o.b)("p",null,"If you want to use ASCII in your source files, C++'s escape sequences also work. You'll want to look up the Unicode number for each character on a Unicode Character table. For example, \ud83d\udd34 has the Unicode number ",Object(o.b)("inlineCode",{parentName:"p"},"U+1F534"),", so it's escape sequence is ",Object(o.b)("inlineCode",{parentName:"p"},"\\U0001F534"),"."),Object(o.b)("p",null,"Unicode code points"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'auto foo = u8"\\u8A9E"; //use little u for 4 digits\nauto bar = u8"\\u00B5"; //use zeros to fill up to 4 digits\nauto fuu = u8"\\U0001F534"; //use big U for 8 digits\n')),Object(o.b)("p",null,"Numeric Hex escapes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'std::string foo = "\\xE8\\xAA\\x9E"; //one \\x for every byte in utf-8\n')),Object(o.b)("h2",{id:"c20-and-stdu8string"},"C++20 and std::u8string"),Object(o.b)("p",null,"In C++20, some of the above code will not work as the library currenty expects the std::string type instead of std::u8string."),Object(o.b)("p",null,"Taking a look at the paper ",Object(o.b)("a",{parentName:"p",href:"http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2019/p1423r2.html"},"char8_t backward compatibility remediation (P1423)"),", there are many ways to cast a u8 char array to a char array that has the same behavior of eariler C++ standards."),Object(o.b)("p",null,"Here's an example of explicit conversions from the paper."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"std::string from_u8string(const std::string &s) {\n  return s;\n}\nstd::string from_u8string(std::string &&s) {\n  return std::move(s);\n}\n#if defined(__cpp_lib_char8_t)\nstd::string from_u8string(const std::u8string &s) {\n  return std::string(s.begin(), s.end());\n}\n#endif\n\nstd::filesystem::path p = ...;\nstd::string s = from_u8string(p.u8string());  // C++17 or C++20\n")),Object(o.b)("h2",{id:"custom-emojis"},"Custom Emojis"),Object(o.b)("p",null,"If you want to insert Discord custom emojis into your text content, please prefer to ",Object(o.b)("a",{parentName:"p",href:"https://discord.com/developers/docs/reference#message-formatting"},"the Discord API Message formatting reference"),"."))}u.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(s,".").concat(b)]||l[b]||p[b]||o;return n?a.a.createElement(m,i(i({ref:t},d),{},{components:n})):a.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);