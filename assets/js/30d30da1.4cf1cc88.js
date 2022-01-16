"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[9017],{3905:function(e,r,t){t.d(r,{Zo:function(){return a},kt:function(){return y}});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},a=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,p=e.originalType,s=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),d=i(t),y=l,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||p;return t?n.createElement(m,o(o({ref:r},a),{},{components:t})):n.createElement(m,o({ref:r},a))}));function y(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var p=t.length,o=new Array(p);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6989:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return a},default:function(){return d}});var n=t(3117),l=t(102),p=(t(7294),t(3905)),o=["components"],c={title:"SleepyDiscord::json::ComplexPair"},s=void 0,i={unversionedId:"reference/Classes/struct_sleepy_discord_1_1json_1_1_complex_pair",id:"reference/Classes/struct_sleepy_discord_1_1json_1_1_complex_pair",title:"SleepyDiscord::json::ComplexPair",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_complex_pair.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1json_1_1_complex_pair",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_complex_pair",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::json::ComplexPair"},sidebar:"Reference",previous:{title:"SleepyDiscord::json::ClassTypeHelper< uint64_t >",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_class_type_helper_3_01uint64__t_01_4"},next:{title:"SleepyDiscord::json::ContainerTypeHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1json_1_1_container_type_helper"}},a=[{value:"Detailed Description",id:"detailed-description",children:[],level:2},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"using ComplexTypeHelper",id:"using-complextypehelper",children:[],level:3}],level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function pair",id:"function-pair",children:[],level:3}],level:2}],u={toc:a};function d(e){var r=e.components,t=(0,l.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"#detailed-description"},"More...")),(0,p.kt)("h2",{id:"detailed-description"},"Detailed Description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"template <template< class, template< class... > class > class TypeHelper,\ntemplate< class, template< class... > class > class TypeHelper2,\ntemplate< class... > class TypeHelper3 =ClassTypeHelper>\nstruct SleepyDiscord::json::ComplexPair;\n")),(0,p.kt)("h2",{id:"public-types-documentation"},"Public Types Documentation"),(0,p.kt)("h3",{id:"using-complextypehelper"},"using ComplexTypeHelper"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Type >\nusing SleepyDiscord::json::ComplexPair< TypeHelper, TypeHelper2, TypeHelper3 >::ComplexTypeHelper =  TypeHelper2<Type, TypeHelper3>;\n")),(0,p.kt)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),(0,p.kt)("h3",{id:"function-pair"},"function pair"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"template <class Class ,\nclass Type >\nstatic inline constexpr PairImpl< Class, Type, TypeHelper< Type, ComplexTypeHelper > > pair(\n    Type Class::* member,\n    const char * name,\n    FieldType type\n)\n")),(0,p.kt)("hr",null),(0,p.kt)("p",null,"Updated on 16 January 2022 at 23:41:20 UTC"))}d.isMDXComponent=!0}}]);