(function() {
/*
 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
window.PR_SHOULD_USE_CONTINUATION=!0;window.PR_TAB_WIDTH=8;window.PR_normalizedHtml=void 0;window.PR=void 0;window.prettyPrintOne=void 0;window.prettyPrint=void 0;window._pr_isIE6=function(){var y=navigator&&navigator.userAgent&&navigator.userAgent.match(/\bMSIE ([678])\./),y=y?+y[1]:!1;window._pr_isIE6=function(){return y};return y};
(function(){function y(a){return a.replace(F,"&amp;").replace(G,"&lt;").replace(H,"&gt;")}function C(a,b,m){switch(a.nodeType){case 1:var n=a.tagName.toLowerCase();b.push("<",n);var h=a.attributes,r=h.length;if(r){if(m){for(var v=[],f=r;0<=--f;)v[f]=h[f];v.sort(function(a,b){return a.name<b.name?-1:a.name===b.name?0:1});h=v}for(f=0;f<r;++f)v=h[f],v.specified&&b.push(" ",v.name.toLowerCase(),'="',v.value.replace(F,"&amp;").replace(G,"&lt;").replace(H,"&gt;").replace(N,"&quot;"),'"')}b.push(">");for(h=
a.firstChild;h;h=h.nextSibling)C(h,b,m);!a.firstChild&&/^(?:br|link|img)$/.test(n)||b.push("</",n,">");break;case 3:case 4:b.push(y(a.nodeValue))}}function I(a){function b(a){if("\\"!==a.charAt(0))return a.charCodeAt(0);switch(a.charAt(1)){case "b":return 8;case "t":return 9;case "n":return 10;case "v":return 11;case "f":return 12;case "r":return 13;case "u":case "x":return parseInt(a.substring(2),16)||a.charCodeAt(1);case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":return parseInt(a.substring(1),
8);default:return a.charCodeAt(1)}}function m(a){if(32>a)return(16>a?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if("\\"===a||"-"===a||"["===a||"]"===a)a="\\"+a;return a}function n(a){var l=a.substring(1,a.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));a=[];for(var c=[],f="^"===l[0],e=f?1:0,p=l.length;e<p;++e){var k=l[e];switch(k){case "\\B":case "\\b":case "\\D":case "\\d":case "\\S":case "\\s":case "\\W":case "\\w":a.push(k);
continue}var k=b(k),d;e+2<p&&"-"===l[e+1]?(d=b(l[e+2]),e+=2):d=k;c.push([k,d]);65>d||122<k||(65>d||90<k||c.push([Math.max(65,k)|32,Math.min(d,90)|32]),97>d||122<k||c.push([Math.max(97,k)&-33,Math.min(d,122)&-33]))}c.sort(function(a,c){return a[0]-c[0]||c[1]-a[1]});l=[];k=[NaN,NaN];for(e=0;e<c.length;++e)p=c[e],p[0]<=k[1]+1?k[1]=Math.max(k[1],p[1]):l.push(k=p);c=["["];f&&c.push("^");c.push.apply(c,a);for(e=0;e<l.length;++e)p=l[e],c.push(m(p[0])),p[1]>p[0]&&(p[1]+1>p[0]&&c.push("-"),c.push(m(p[1])));
c.push("]");return c.join("")}function h(a){for(var b=a.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),c=b.length,d=[],e=0,f=0;e<c;++e){var k=b[e];"("===k?++f:"\\"===k.charAt(0)&&(k=+k.substring(1))&&k<=f&&(d[k]=-1)}for(e=1;e<d.length;++e)-1===d[e]&&(d[e]=++r);for(f=e=0;e<c;++e)k=b[e],"("===k?(++f,void 0===d[f]&&(b[e]="(?:")):"\\"===k.charAt(0)&&(k=+k.substring(1))&&
k<=f&&(b[e]="\\"+d[f]);for(f=e=0;e<c;++e)"^"===b[e]&&"^"!==b[e+1]&&(b[e]="");if(a.ignoreCase&&v)for(e=0;e<c;++e)k=b[e],a=k.charAt(0),2<=k.length&&"["===a?b[e]=n(k):"\\"!==a&&(b[e]=k.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return b.join("")}for(var r=0,v=!1,f=!1,t=0,d=a.length;t<d;++t){var w=a[t];if(w.ignoreCase)f=!0;else if(/[a-z]/i.test(w.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){v=!0;f=!1;break}}for(var s=[],t=0,d=a.length;t<
d;++t){w=a[t];if(w.global||w.multiline)throw Error(""+w);s.push("(?:"+h(w)+")")}return new RegExp(s.join("|"),f?"gi":"g")}function O(a){var b=0;return function(m){for(var n=null,h=0,r=0,v=m.length;r<v;++r){var f=m.charAt(r);switch(f){case "\t":n||(n=[]);n.push(m.substring(h,r));h=a-b%a;for(b+=h;0<=h;h-=16)n.push("                ".substring(0,h));h=r+1;break;case "\n":b=0;break;default:++b}}if(!n)return m;n.push(m.substring(h));return n.join("")}}function D(a,b,m,n){b&&(a={source:b,basePos:a},m(a),
n.push.apply(n,a.decorations))}function z(a,b){var m={},n;(function(){for(var h=a.concat(b),f=[],r={},d=0,w=h.length;d<w;++d){var s=h[d],u=s[3];if(u)for(var l=u.length;0<=--l;)m[u.charAt(l)]=s;s=s[1];u=""+s;r.hasOwnProperty(u)||(f.push(s),r[u]=null)}f.push(/[\0-\uffff]/);n=I(f)})();var h=b.length,r=function(a){for(var f=a.source,t=a.basePos,d=[t,"pln"],w=0,f=f.match(n)||[],s={},u=0,l=f.length;u<l;++u){var c=f[u],q=s[c],e=void 0,p;if("string"===typeof q)p=!1;else{var k=m[c.charAt(0)];if(k)e=c.match(k[1]),
q=k[0];else{for(p=0;p<h;++p)if(k=b[p],e=c.match(k[1])){q=k[0];break}e||(q="pln")}!(p=5<=q.length&&"lang-"===q.substring(0,5))||e&&"string"===typeof e[1]||(p=!1,q="src");p||(s[c]=q)}k=w;w+=c.length;if(p){p=e[1];var A=c.indexOf(p),g=A+p.length;e[2]&&(g=c.length-e[2].length,A=g-p.length);q=q.substring(5);D(t+k,c.substring(0,A),r,d);D(t+k+A,p,K(q,p),d);D(t+k+g,c.substring(g),r,d)}else d.push(t+k,q)}a.decorations=d};return r}function x(a){var b=[],m=[];a.tripleQuotedStrings?b.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):a.multiLineStrings?b.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):b.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&m.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var n=a.hashComments;n&&(a.cStyleComments?(1<n?b.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):b.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),m.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null])):b.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(m.push(["com",/^\/\/[^\r\n]*/,null]),m.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));a.regexLiterals&&m.push(["lang-regex",new RegExp("^"+P+"(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);a=a.keywords.replace(/^\s+|\s+$/g,"");a.length&&m.push(["kwd",new RegExp("^(?:"+a.replace(/\s+/g,"|")+
")\\b"),null]);b.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);m.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pun",/^.[^\s\w\.$@\'\"\`\/\#]*/,null]);return z(b,m)}function Q(a){function b(a){if(a>t){d&&d!==w&&(f.push("</span>"),d=null);!d&&w&&(d=w,f.push('<span class="',d,'">'));var b=y(l(m.substring(t,a))).replace(k?q:
c,"$1&#160;");k=p.test(b);f.push(b.replace(e,x));t=a}}var m=a.source,n=a.extractedTags,h=a.decorations,r=a.numberLines,v=a.sourceNode,f=[],t=0,d=null,w=null,s=0,u=0,l=O(window.PR_TAB_WIDTH),c=/([\r\n ]) /g,q=/(^| ) /gm,e=/\r\n?|\n/g,p=/[ \r\n]$/,k=!0,g=window._pr_isIE6(),v=g?v&&"PRE"===v.tagName?6===g?"&#160;\r\n":7===g?"&#160;<br />\r":8===g?"&#160;<br />":"&#160;\r":"&#160;<br />":"<br />",x;if(r){for(var J=[],g=0;10>g;++g)J[g]=v+'</li><li class="L'+g+'">';var z="number"===typeof r?r-1:0;f.push('<ol class="linenums"><li class="L',
z%10,'"');z&&f.push(' value="',z+1,'"');f.push(">");x=function(){var a=J[++z%10];return d?"</span>"+a+'<span class="'+d+'">':a}}else x=v;for(;;)if(v=s<n.length?u<h.length?n[s]<=h[u]:!0:!1)b(n[s]),d&&(f.push("</span>"),d=null),f.push(n[s+1]),s+=2;else if(u<h.length)b(h[u]),w=h[u+1],u+=2;else break;b(m.length);d&&f.push("</span>");r&&f.push("</li></ol>");a.prettyPrintedHtml=f.join("")}function g(a,b){for(var m=b.length;0<=--m;){var n=b[m];B.hasOwnProperty(n)?"console"in window&&console.warn("cannot override language handler %s",
n):B[n]=a}}function K(a,b){a&&B.hasOwnProperty(a)||(a=/^\s*</.test(b)?"default-markup":"default-code");return B[a]}function L(a){var b=a.sourceCodeHtml,m=a.langExtension;a.prettyPrintedHtml=b;try{var n,h=b.match(R),b=[],r=0,g=[];if(h)for(var f=0,t=h.length;f<t;++f){var d=h[f];if(1<d.length&&"<"===d.charAt(0)){if(!S.test(d))if(T.test(d))b.push(d.substring(9,d.length-3)),r+=d.length-12;else if(U.test(d))b.push("\n"),++r;else if(0<=d.indexOf("nocode")&&d.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g,
' $1="$2$3$4"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)){var w=d.match(M)[2],s=1,u;u=f+1;e:for(;u<t;++u){var l=h[u].match(M);if(l&&l[2]===w)if("/"===l[1]){if(0===--s)break e}else++s}u<t?(g.push(r,h.slice(f,u+1).join("")),f=u):g.push(r,d)}else g.push(r,d)}else{var c;var s=d,q=s.indexOf("&");if(0>q)c=s;else{for(--q;0<=(q=s.indexOf("&#",q+1));){var e=s.indexOf(";",q);if(0<=e){var p=s.substring(q+3,e),k=10;p&&"x"===p.charAt(0)&&(p=p.substring(1),k=16);var x=parseInt(p,k);isNaN(x)||(s=s.substring(0,
q)+String.fromCharCode(x)+s.substring(e+1))}}c=s.replace(V,"<").replace(W,">").replace(X,"'").replace(Y,'"').replace(Z," ").replace($,"&")}b.push(c);r+=c.length}}n={source:b.join(""),tags:g};var z=n.source;a.source=z;a.basePos=0;a.extractedTags=n.tags;K(m,z)(a);Q(a)}catch(y){"console"in window&&console.log(y&&y.stack?y.stack:y)}}function aa(a,b,m){a={sourceCodeHtml:a,langExtension:b,numberLines:m};L(a);return a.prettyPrintedHtml}function ba(a){function b(){for(var m=window.PR_SHOULD_USE_CONTINUATION?
f.now()+250:Infinity;t<n.length&&f.now()<m;t++){var h=n[t];if(h.className&&0<=h.className.indexOf("prettyprint")){var g=h.className.match(/\blang-(\w+)\b/);g&&(g=g[1]);for(var l=!1,c=h.parentNode;c;c=c.parentNode)if(("pre"===c.tagName||"code"===c.tagName||"xmp"===c.tagName)&&c.className&&0<=c.className.indexOf("prettyprint")){l=!0;break}if(!l){c=h;null===E&&(l=document.createElement("PRE"),l.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />')),E=!/</.test(l.innerHTML));
if(E)if(l=c.innerHTML,"XMP"===c.tagName)l=y(l);else{if("PRE"!==c.tagName&&ca.test(l)){var q="";c.currentStyle?q=c.currentStyle.whiteSpace:window.getComputedStyle&&(q=window.getComputedStyle(c,null).whiteSpace);c=!q||"pre"===q}else c=!0;c||(l=l.replace(/(<br\s*\/?>)[\r\n]+/g,"$1").replace(/(?:[\r\n]+[ \t]*)+/g," "))}else{l=[];for(c=c.firstChild;c;c=c.nextSibling)C(c,l);l=l.join("")}l=l.replace(/(?:\r\n?|\n)$/,"");c=h.className.match(/\blinenums\b(?::(\d+))?/);d={sourceCodeHtml:l,langExtension:g,sourceNode:h,
numberLines:c?c[1]&&c[1].length?+c[1]:!0:!1};L(d);if(h=d.prettyPrintedHtml)if(g=d.sourceNode,"XMP"===g.tagName){l=document.createElement("PRE");for(c=0;c<g.attributes.length;++c)if(q=g.attributes[c],q.specified){var e=q.name.toLowerCase();"class"===e?l.className=q.value:l.setAttribute(q.name,q.value)}l.innerHTML=h;g.parentNode.replaceChild(l,g)}else g.innerHTML=h}}}t<n.length?setTimeout(b,250):a&&a()}for(var m=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],
n=[],h=0;h<m.length;++h)for(var g=0,v=m[h].length;g<v;++g)n.push(m[h][g]);var m=null,f=Date;f.now||(f={now:function(){return(new Date).getTime()}});var t=0,d;b()}var P=function(){for(var a="! != !== # % %= & && &&= &= ( * *= += , -= -> / /= : :: ; < << <<= <= = == === > >= >> >>= >>> >>>= ? @ [ ^ ^= ^^ ^^= { | |= || ||= ~ break case continue delete do else finally instanceof return throw try typeof".split(" "),b="(?:^^|[+-]",g=0;g<a.length;++g)b+="|"+a[g].replace(/([^=<>:&a-z])/g,"\\$1");return b+=
")\\s*"}(),F=/&/g,G=/</g,H=/>/g,N=/\"/g,V=/&lt;/g,W=/&gt;/g,X=/&apos;/g,Y=/&quot;/g,$=/&amp;/g,Z=/&nbsp;/g,ca=/[\r\n]/g,E=null,R=RegExp("[^<]+|\x3c!--[\\s\\S]*?--\x3e|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>|</?[a-zA-Z](?:[^>\"']|'[^']*'|\"[^\"]*\")*>|<","g"),S=/^<\!--/,T=/^<!\[CDATA\[/,U=/^<br\b/i,M=/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/,da=x({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END break continue do else for if return while case done elif esac eval fi function in local set then until ",
hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),B={};g(da,["default-code"]);g(z([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));
g(z([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),
["in.tag"]);g(z([],[["atv",/^[\s\S]+/]]),["uq.val"]);g(x({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where ",
hashComments:!0,cStyleComments:!0}),"c cc cpp cxx cyc m".split(" "));g(x({keywords:"null true false"}),["json"]);g(x({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
hashComments:!0,cStyleComments:!0,verbatimStrings:!0}),["cs"]);g(x({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",
cStyleComments:!0}),["java"]);g(x({keywords:"break continue do else for if return while case done elif esac eval fi function in local set then until ",hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);g(x({keywords:"break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]);g(x({keywords:"caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",
hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);g(x({keywords:"break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);g(x({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN ",
cStyleComments:!0,regexLiterals:!0}),["js"]);g(x({keywords:"all and by catch class else extends false finally for if in is isnt loop new no not null of off on or return super then true try unless until when while yes ",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);g(z([],[["str",/^[\s\S]+/]]),["regex"]);window.PR_normalizedHtml=C;window.prettyPrintOne=aa;window.prettyPrint=ba;window.PR={combinePrefixPatterns:I,createSimpleLexer:z,registerLangHandler:g,
sourceDecorator:x,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
})();