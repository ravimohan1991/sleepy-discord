(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{323:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),s=(t(0),t(323)),o={title:"include/sleepy_discord/user.h"},i={unversionedId:"reference/Files/user_8h",id:"reference/Files/user_8h",isDocsHomePage:!1,title:"include/sleepy_discord/user.h",description:"Namespaces",source:"@site/docs/reference/Files/user_8h.md",slug:"/reference/Files/user_8h",permalink:"/sleepy-discord/docs/reference/Files/user_8h",version:"current",sidebar:"Reference",previous:{title:"sleepy_discord/user.cpp",permalink:"/sleepy-discord/docs/reference/Files/user_8cpp"},next:{title:"include/sleepy_discord/uwebsockets_connection.h",permalink:"/sleepy-discord/docs/reference/Files/uwebsockets__connection_8h"}},c=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Source code",id:"source-code",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"namespaces"},"Namespaces"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(s.b)("h2",{id:"classes"},"Classes"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null}),Object(s.b)("th",{parentName:"tr",align:null},"Name"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_user"},"SleepyDiscord::User")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_connection"},"SleepyDiscord::Connection")))))),Object(s.b)("h2",{id:"source-code"},"Source code"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include <string>\n#include "discord_object_interface.h"\n#include "snowflake.h"\n#include "permissions.h"\n\nnamespace SleepyDiscord {\n    /*\n    User Structure\n\n    Field           Type        Description                                                 Required OAuth2 Scope\n    id              snowflake   the user\'s id                                               identify\n    username        string      the user\'s username, not unique across the platform         identify\n    discriminator   string      the user\'s 4-digit discord-tag                              identify\n    avatar          string      the user\'s avatar hash                                      identify\n    bot             bool        whether the user belongs to an OAuth2 application           identify\n    mfa_enabled     bool        whether the user has two factor enabled on their account    identify\n    verified        bool        whether the email on this account has been verified         email\n    email           string      the user\'s email                                            email\n    */\n    struct User : public IdentifiableDiscordObject<User> {\n    public:\n        User() = default;\n        //~User();\n        //User(const std::string * rawJSON);\n        User(const nonstd::string_view & json);\n        User(const json::Value& json);\n        //User(const json::Values values);\n\n        enum class Flags {\n            None = 0,\n            Discord_Employee       = 1 << 0,\n            Discord_Partner        = 1 << 1,\n            HypeSquad_Events       = 1 << 2,\n            Bug_Hunter_Level_1     = 1 << 3,\n            House_Bravery          = 1 << 6,\n            House_Brilliance       = 1 << 7,\n            House_Balance          = 1 << 8,\n            Early_Supporter        = 1 << 9,\n            Team_User              = 1 << 10,\n            System                 = 1 << 12,\n            Bug_Hunter_Level_2     = 1 << 14,\n            Verified_Bot           = 1 << 16,\n            Verified_Bot_Developer = 1 << 17,\n            Discord_Certified_Moderator = 1 << 18,\n        };\n\n        enum class PremiumType : int {\n            None = 0,\n            Nitro_Classic = 1,\n            Nitro = 2,\n        };\n\n        std::string username;\n        std::string discriminator;\n        std::string avatar;         //base64 encoded jpeg image\n        //these are optional\n        bool bot = false;\n        bool mfa_enabled = false;   //true if two-factor authentication is enabled\n        bool verified = false;      //true if email has been verified\n        std::string email = "";\n        std::string locale = "";   //the user\'s chosen language\n        Flags flags = Flags::None;\n        PremiumType premiumType = PremiumType::None;\n        Flags publieFlags = Flags::None;\n\n        JSONStructStart\n            std::make_tuple(\n                json::pair                      (&User::ID           , "id"           , json::REQUIRIED_FIELD        ),\n                json::pair                      (&User::username     , "username"     , json::OPTIONAL_FIELD         ),\n                json::pair                      (&User::discriminator, "discriminator", json::OPTIONAL_FIELD         ),\n                json::pair                      (&User::avatar       , "avatar"       , json::OPTIONAL_NULLABLE_FIELD),\n                json::pair                      (&User::bot          , "bot"          , json::OPTIONAL_FIELD         ),\n                json::pair                      (&User::mfa_enabled  , "mfa_enabled"  , json::OPTIONAL_FIELD         ),\n                json::pair                      (&User::verified     , "verified"     , json::OPTIONAL_FIELD         ),\n                json::pair                      (&User::locale       , "locale"       , json::OPTIONAL_FIELD         ),\n                json::pair<json::EnumTypeHelper>(&User::flags        , "flags"        , json::OPTIONAL_FIELD         ),\n                json::pair<json::EnumTypeHelper>(&User::premiumType  , "premium_type" , json::OPTIONAL_FIELD         ),\n                json::pair<json::EnumTypeHelper>(&User::publieFlags  , "public_flags" , json::OPTIONAL_FIELD         ),\n                json::pair                      (&User::email        , "email"        , json::OPTIONAL_FIELD         )\n            );\n        JSONStructEnd\n    };\n\n    /*Connection Structure  The connection object that the user has attached.\n\n    Field           Type    Description\n    id              string  id of the connection account\n    name            string  the username of the connection account\n    type            string  the service of the connection (twitch, youtube)\n    revoked         bool    whether the connection is revoked\n    integrations    array   an array of partial server integrations\n    */\n    struct Connection : public IdentifiableDiscordObject<Connection> {\n    public:\n        Connection() = default;\n        Connection(const nonstd::string_view & json);\n        Connection(const json::Value& json);\n        std::string name;\n        std::string type;\n        bool revoked;\n\n        JSONStructStart\n            std::make_tuple(\n                json::pair(&Connection::ID     , "id"     , json::REQUIRIED_FIELD),\n                json::pair(&Connection::name   , "name"   , json::REQUIRIED_FIELD),\n                json::pair(&Connection::type   , "type"   , json::REQUIRIED_FIELD),\n                json::pair(&Connection::revoked, "revoked", json::REQUIRIED_FIELD)\n            );\n        JSONStructEnd\n    };\n}\n')),Object(s.b)("hr",null),Object(s.b)("p",null,"Updated on 27 July 2021 at 06:05:20 UTC"))}u.isMDXComponent=!0}}]);