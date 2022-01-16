"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[1438],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),v=i,f=p["".concat(o,".").concat(v)]||p[v]||d[v]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8685:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),c=["components"],l={title:"SleepyDiscord::Invite"},o=void 0,s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_invite",id:"reference/Classes/struct_sleepy_discord_1_1_invite",title:"SleepyDiscord::Invite",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_invite.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_invite",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_invite",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::Invite"},sidebar:"Reference",previous:{title:"SleepyDiscord::InteractionData::ResolvedData::Data",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_interaction_data_1_1_resolved_data_1_1_data"},next:{title:"SleepyDiscord::InviteMetadata",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_invite_metadata"}},u=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function Invite",id:"function-invite",children:[],level:3},{value:"function Invite",id:"function-invite-1",children:[],level:3},{value:"function Invite",id:"function-invite-2",children:[],level:3},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable code",id:"variable-code",children:[],level:3},{value:"variable server",id:"variable-server",children:[],level:3},{value:"variable channel",id:"variable-channel",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Inherits from ",(0,a.kt)("a",{parentName:"p",href:"/sleepy-discord/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),(0,a.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,a.kt)("h3",{id:"function-invite"},"function Invite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Invite() =default\n")),(0,a.kt)("h3",{id:"function-invite-1"},"function Invite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Invite(\n    const json::Value & json\n)\n")),(0,a.kt)("h3",{id:"function-invite-2"},"function Invite"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"inline Invite(\n    const nonstd::string_view & json\n)\n")),(0,a.kt)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD \n)\n')),(0,a.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,a.kt)("h3",{id:"variable-code"},"variable code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::string code;\n")),(0,a.kt)("h3",{id:"variable-server"},"variable server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Server server;\n")),(0,a.kt)("h3",{id:"variable-channel"},"variable channel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"Channel channel;\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Updated on 16 January 2022 at 23:41:19 UTC"))}p.isMDXComponent=!0}}]);