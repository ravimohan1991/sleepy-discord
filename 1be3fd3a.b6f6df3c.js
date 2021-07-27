(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{323:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,f=d["".concat(o,".").concat(b)]||d[b]||u[b]||c;return t?a.a.createElement(f,i(i({ref:n},p),{},{components:t})):a.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),c=(t(0),t(323)),o={title:"sleepy_discord/invite.cpp"},i={unversionedId:"reference/Files/invite_8cpp",id:"reference/Files/invite_8cpp",isDocsHomePage:!1,title:"sleepy_discord/invite.cpp",description:"Namespaces",source:"@site/docs/reference/Files/invite_8cpp.md",slug:"/reference/Files/invite_8cpp",permalink:"/sleepy-discord/docs/reference/Files/invite_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/http.h",permalink:"/sleepy-discord/docs/reference/Files/http_8h"},next:{title:"include/sleepy_discord/invite.h",permalink:"/sleepy-discord/docs/reference/Files/invite_8h"}},s=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Source code",id:"source-code",children:[]}],p={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"namespaces"},"Namespaces"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("strong",{parentName:"td"},Object(c.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(c.b)("h2",{id:"source-code"},"Source code"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'#include "invite.h"\n\nnamespace SleepyDiscord {\n    Invite::Invite(const json::Value & json) :\n        Invite(json::fromJSON<Invite>(json)) {\n    }\n    Invite::Invite(const nonstd::string_view & json) :\n        Invite(json::fromJSON<Invite>(json)) {\n    }\n\n    InviteMetadata::InviteMetadata(const json::Value & json) :\n        InviteMetadata(json::fromJSON<InviteMetadata>(json)) {\n    }\n    InviteMetadata::InviteMetadata(const nonstd::string_view & json) :\n        InviteMetadata(json::fromJSON<InviteMetadata>(json)) {\n    }\n}\n')),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on 27 July 2021 at 06:05:20 UTC"))}l.isMDXComponent=!0}}]);