(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{7199:function(e,t){"use strict";t.Z={src:"/_next/static/media/Leaves.933949aa.svg",height:432,width:250}},5638:function(e,t){"use strict";t.Z={src:"/_next/static/media/bird_1.59db4ff8.svg",height:149,width:227}},5355:function(e,t){"use strict";t.Z={src:"/_next/static/media/bird_2.97356f78.svg",height:73,width:138}},1210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,s){var i=n(8875).normalizeLocalePath,a=n(8748).detectDomainLocale,l=t||i(e,r).detectedLocale,o=a(s,void 0,l);if(o){var c="http".concat(o.http?"":"s","://"),d=l===o.defaultLocale?"":"/".concat(l);return"".concat(c).concat(o.domain).concat("").concat(d).concat(e)}return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(2648).Z,i=n(7273).Z,a=s(n(7294)),l=n(6273),o=n(2725),c=n(3462),d=n(1018),x=n(7190),u=n(1210),f=n(8684),p={};function h(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var s=r&&void 0!==r.locale?r.locale:e&&e.locale;p[t+"%"+n+(s?"%"+s:"")]=!0}}var m=a.default.forwardRef(function(e,t){var n,s,m=e.href,v=e.as,g=e.children,w=e.prefetch,b=e.passHref,j=e.replace,y=e.shallow,N=e.scroll,A=e.locale,E=e.onClick,C=e.onMouseEnter,F=e.onTouchStart,R=e.legacyBehavior,L=void 0===R?!0!==Boolean(!1):R,_=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,L&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var k=!1!==w,T=a.default.useContext(c.RouterContext),P=a.default.useContext(d.AppRouterContext);P&&(T=P);var D=a.default.useMemo(function(){var e=r(l.resolveHref(T,m,!0),2),t=e[0],n=e[1];return{href:t,as:v?l.resolveHref(T,v):n||t}},[T,m,v]),O=D.href,Z=D.as,B=a.default.useRef(O),z=a.default.useRef(Z);L&&(s=a.default.Children.only(n));var M=L?s&&"object"==typeof s&&s.ref:t,S=r(x.useIntersection({rootMargin:"200px"}),3),I=S[0],q=S[1],U=S[2],Y=a.default.useCallback(function(e){(z.current!==Z||B.current!==O)&&(U(),z.current=Z,B.current=O),I(e),M&&("function"==typeof M?M(e):"object"==typeof M&&(M.current=e))},[Z,M,O,U,I]);a.default.useEffect(function(){var e=q&&k&&l.isLocalURL(O),t=void 0!==A?A:T&&T.locale,n=p[O+"%"+Z+(t?"%"+t:"")];e&&!n&&h(T,O,Z,{locale:t})},[Z,O,q,A,k,T]);var H={ref:Y,onClick:function(e){L||"function"!=typeof E||E(e),L&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,i,o,c,d,x){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(f=(u=e).currentTarget.target)||"_self"===f)&&!u.metaKey&&!u.ctrlKey&&!u.shiftKey&&!u.altKey&&(!u.nativeEvent||2!==u.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var u,f,p=function(){"beforePopState"in t?t[s?"replace":"push"](n,r,{shallow:i,locale:c,scroll:o}):t[s?"replace":"push"](n,{forceOptimisticNavigation:!x})};d?a.default.startTransition(p):p()}}(e,T,O,Z,j,y,N,A,Boolean(P),k)},onMouseEnter:function(e){L||"function"!=typeof C||C(e),L&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),!(!k&&P)&&l.isLocalURL(O)&&h(T,O,Z,{priority:!0})},onTouchStart:function(e){L||"function"!=typeof F||F(e),L&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),!(!k&&P)&&l.isLocalURL(O)&&h(T,O,Z,{priority:!0})}};if(!L||b||"a"===s.type&&!("href"in s.props)){var W=void 0!==A?A:T&&T.locale,Q=T&&T.isLocaleDomain&&u.getDomainLocale(Z,W,T.locales,T.domainLocales);H.href=Q||f.addBasePath(o.addLocale(Z,W,T&&T.defaultLocale))}return L?a.default.cloneElement(s,H):a.default.createElement("a",Object.assign({},_,H),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8875:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;var r=function(e,t){return n(4317).normalizeLocalePath(e,t)};t.normalizeLocalePath=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),s=r.default.createContext(null);t.AppRouterContext=s;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=r.default.createContext(null);t.TemplateContext=l},6130:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(5893),s=n(7294),i=n(5675),a=n.n(i),l=n(1163),o=n(7771),c=n(5697),d=n.n(c),x={src:"/_next/static/media/sreLogo.3e9be75a.png",height:397,width:1122,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPElEQVR42gXAsQmAMBAAwB/MPSycQBAtJQhapBEstBLBOiNkvSOEIpm8VoNPDski+11OnT1sHrfeaFYdDZYbI63JVWWYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},u={src:"/_next/static/media/iyrefLogo.a2b05062.png",height:561,width:1080,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAPElEQVR42mP4F/PP9x8DAjL82/jP6Z/ev+R/2f8q/xX8K2X45/Jvyr/0f47/gv4V/iv+58/wj/9fC7IWAFCZJ09uEeqHAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},f=function(e){var t=e.state,n=e.onToggle,i=(0,s.useState)(t),a=i[0],l=i[1],o=function(){var e=!a;l(e),n(e)};return(0,r.jsxs)("label",{htmlFor:"toggle",className:"flex items-center cursor-pointer ".concat(a?"bg-green6":"bg-green8"," w-[110px] h-[40px] rounded-full p-1 transition-all duration-300"),children:[(0,r.jsx)("img",{src:a?x.src:u.src,alt:a?"SRE Logo":"IYREF Logo",className:"w-14 mr-2 transition-all duration-300 transform ".concat(a?"translate-x-[38px]":"translate-x-[10px]")}),(0,r.jsx)("div",{className:"bg-white w-7 h-7 rounded-full shadow-md transform transition-all duration-300 ".concat(a?"translate-x-[-61px]":"translate-x-[7px]")}),(0,r.jsx)("input",{type:"checkbox",id:"toggle",className:"hidden",checked:a,onChange:o})]})},p=n(1799),h=n(9396),m=n(9534),v={white:"#FFFFFF",black:"#000000",gray200:"#F9F9F9",gray300:"#C4C4C4",gray400:"#9B9B9B",gray500:"#777676",gray600:"#535252",gray700:"#2F2E2E",yellow200:"#FFD271",yellow300:"#FEB20E",yellow400:"#DF9800",red200:"#FF634B",red300:"#F43518",red400:"#B71800",green200:"#E6FEED",green300:"#069154",green400:"#01703F",blue200:"#6979BE",blue300:"#1F307C",blue400:"#0B1A5C",cream200:"#FFF2EB",cream300:"#FFEADF",cream400:"#F5D5C4",pink200:"#FEE9E6",pink300:"#E28281",pink400:"#C86564"},g=function(e){var t=e.size,n=void 0===t?16:t,s=e.title,i=(0,m.Z)(e,["size","title"]);return(0,r.jsxs)("svg",(0,h.Z)((0,p.Z)({fill:"currentColor",stroke:"currentColor",strokeWidth:"0",height:n,width:n,color:v.black},i),{children:[!!s&&(0,r.jsx)("title",{children:s}),e.children]}))},w=function(e){var t=e.color,n=(0,m.Z)(e,["color"]);return(0,r.jsx)(g,(0,h.Z)((0,p.Z)({viewBox:"0 0 1024 1024"},n),{children:(0,r.jsx)("path",{d:"M768.686 350.007l-205.471 193.251-205.472-193.251-63.119 59.495 268.591 253.17 268.59-253.17-63.119-59.495z",fill:void 0===t?"black":t})}))},b=[{text:"Home",href:"/"},{text:"About",href:"/about"},{text:"Activity",href:"/activity"},{text:"Student",href:"/student"},{text:"Merchandise",href:"/merchandise"},{text:"REFWON",href:"/iyref/refwon"},{text:"Competitions",href:"/iyref/compe/bcc",contents:[{text:"Business Case Competition",href:"/iyref/compe/bcc"},{text:"Business Plan Competition",href:"/iyref/compe/bpc"},{text:"National Essay Competition",href:"/iyref/compe/nec"}]},{text:"Comvis",href:"/iyref/comvis"},{text:"Summit",href:"/iyref/summit"}];function j(e){var t=e.open,n=e.setOpen,s=e.contents,i=e.dropdownIdx,a=e.idx;return(0,r.jsx)("div",{className:"".concat(i===a?"":"hidden"," flex flex-col text-left"),children:s.map(function(e,s){return(0,r.jsx)("a",{className:"py-2 pl-5 text-white opacity-90 hover:opacity-70 font-bold cursor-pointer",onClick:function(){n(!t)},href:e.href,children:e.text},s)})})}function y(e){var t=e.contents;return(0,r.jsx)("div",{className:"hidden peer-hover:absolute peer-hover:flex hover:absolute hover:flex flex-col w-64 py-3 top-20 left-1/2 transform -translate-x-1/2 border-solid border-2 border-green rounded-lg bg-white z-50",children:t.map(function(e,t){return(0,r.jsx)("a",{className:"px-5 py-3 hover:bg-green5 text-green2 hover:text-white font-bold cursor-pointer",href:e.href,children:e.text},t)})})}function N(e){var t=e.open,n=e.setOpen,i=e.dropdownIdx,a=e.setDropdownIdx,l=e.handleToggle,o=e.menuList,c=e.page,d=(0,s.useState)(!0),x=d[0],u=d[1];return(0,s.useEffect)(function(){var e=function(){u(window.innerWidth>1024)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),(0,r.jsx)("div",{className:"fixed overflow-y-auto top-0 left-0 z-10 h-screen w-screen lg:hidden bg-green5 transform ".concat(t?"-translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out"),children:(0,r.jsxs)("div",{className:"flex flex-col h-screen justify-center",children:[o.map(function(e,s){return(0,r.jsxs)("div",{className:"w-40 text-center mx-auto",onClick:function(){a(i===s?-1:s)},children:[(0,r.jsx)("a",{className:"cursor-pointer hover:opacity-80 inline-block py-2 text-white font-bold",onClick:function(){e.contents||n(!t)},href:e.contents?void 0:e.href,children:(0,r.jsxs)("div",{className:"py-2 inline-flex items-center",children:[e.text,e.contents?(0,r.jsx)(w,{color:"white",className:"ml-1"}):""]})}),e.contents?(0,r.jsx)(j,{open:t,setOpen:n,contents:e.contents,dropdownIdx:i,idx:s}):""]},s)}),x?null:(0,r.jsx)("div",{className:"flex justify-center mt-[15px] px-6 mx-2",children:(0,r.jsx)(f,{state:"iyref"===c,onToggle:l})})]})})}var A=function(e){var t=e.e,n=(0,s.useState)(!1),i=n[0],c=n[1],d=(0,s.useState)(-1),p=d[0],h=d[1],m=(0,s.useState)(!1),v=m[0],g=m[1],j=(0,s.useState)(b),A=j[0],E=j[1],C=(0,l.useRouter)(),F=C.pathname.split("/")[1]||"home",R=C.pathname.split("/")[2];(0,s.useEffect)(function(){"iyref"===F?E(b.filter(function(e){return"iyref"===e.href.split("/")[1]})):E(b.filter(function(e){return"iyref"!==e.href.split("/")[1]}))},[F]);var L=function(e){e?setTimeout(function(){C.push("/iyref/refwon")},200):setTimeout(function(){C.push("/")},200)};return(0,s.useEffect)(function(){var e=function(){0!==window.scrollY?g(!0):g(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),(0,r.jsx)(o.E.nav,{className:"fixed flex top-0 w-full justify-center z-50 font-montserrat",initial:{backgroundColor:t?"#2C9A7F":"rgba(0, 0, 0, 0)"},animate:{backgroundColor:v||t?"#2C9A7F":"rgba(0, 0, 0, 0)"},transition:{duration:.3,ease:"easeInOut"},children:(0,r.jsxs)("div",{className:"".concat(i?"h-screen":""," w-full h-[80px] flex"),children:[(0,r.jsx)(N,{open:i,setOpen:c,dropdownIdx:p,setDropdownIdx:h,handleToggle:L,menuList:A,page:F}),(0,r.jsx)("div",{className:"w-[70px] sm:w-[90px] ml-[30px] sm:ml-[5vw] flex items-center",children:"iyref"===F?(0,r.jsx)(a(),{src:u,alt:"IYREF logo"}):(0,r.jsx)(a(),{src:x,alt:"SRE logo"})}),(0,r.jsxs)("div",{className:"flex fixed z-20 w-full justify-end",children:[(0,r.jsxs)("div",{className:"".concat(i?"fixed right-0":""," right-0 top-0 mr-[15px] z-50 flex flex-col w-10 h-6 justify-between cursor-pointer lg:hidden mt-[30px]"),onClick:function(){c(!i)},children:[(0,r.jsx)("span",{className:"h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ".concat(i?"w-7 bg-white rotate-45 translate-y-2.5":"")}),(0,r.jsx)("span",{className:"h-1 w-6 bg-white rounded-lg transition-all duration-300 ease-in-out ".concat(i?"h-0 w-0":"w-6")}),(0,r.jsx)("span",{className:"h-1 w-6 bg-white rounded-lg transform transition duration-300 ease-in-out ".concat(i?"w-7 bg-white -rotate-45 -translate-y-2.5":"")})]}),(0,r.jsxs)("div",{className:"hidden lg:flex",children:[A.map(function(e,t){return(0,r.jsxs)("div",{className:"relative inline-flex items-center mt-[-7px]",children:[(0,r.jsx)("a",{className:"active px-6 mx-2 py-8 ".concat(e.contents?"peer":"inline-block"," text-white hover:opacity-80 cursor-pointer"),href:e.href,children:(0,r.jsxs)("div",{className:"".concat(0===t&&"home"===F||1===t&&"about"===F||2===t&&"activity"===F||3===t&&"student"===F||4===t&&"merchandise"===F||0===t&&"refwon"===R||1===t&&"compe"===R||2===t&&"comvis"===R||3===t&&"summit"===R?"rounded-[20px] bg-green7 py-[4px] px-[15px] font-bold":""," inline-flex items-center"),children:[e.text,e.contents?(0,r.jsx)(w,{color:"white"}):""]})}),e.contents?(0,r.jsx)(y,{contents:e.contents}):""]},t)}),(0,r.jsx)("div",{className:"inline-flex items-center mt-[-7px] px-6 mx-2",children:(0,r.jsx)(f,{state:"iyref"===F,onToggle:L})})]})]})]})})};A.propTypes={e:d().string};var E=A},5905:function(e,t,n){"use strict";var r=n(5893);n(7294);var s=n(9008),i=n.n(s),a=function(e){var t=e.title,n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),n]})};t.Z=a},5290:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),s=n(5675),i=n.n(s),a=n(1664),l=n.n(a),o={src:"/_next/static/media/leaves.99f8747d.svg",height:432,width:298},c={src:"/_next/static/media/stars.1aaa07ff.svg",height:85,width:68},d=function(e){var t=e.contacts,n=e.registerLink,s=e.guidebookLink,a=e.events;return(0,r.jsx)("div",{className:"overflow-hidden flex flex-col items-center justify-center relative",children:(0,r.jsxs)("section",{className:"w-[175vw] h-[850px] lg:h-[1300px] bg-green8 flex flex-col justify-between items-center font-montserrat py-40 lg:py-52 ".concat(a?"rounded-t-[50%]":""),children:[(0,r.jsxs)("div",{className:"flex flex-col justify-between items-center w-full h-[227px] lg:h-[310px]",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-between items-center text-center text-white",children:[(0,r.jsx)("h3",{className:"text-[24px] lg:text-[40px] font-light",children:"What Are You Waiting For?"}),(0,r.jsx)("h1",{className:"text-[28px] lg:text-[78px] font-bold",children:"Go Register Yourself"})]}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-evenly gap-5",children:[(0,r.jsx)(l(),{href:n,children:(0,r.jsx)("button",{className:"border-[2px] border-white font-semibold bg-white hover:-translate-y-1 rounded-xl text-green8 duration-75 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]",children:"Register Now"})}),(0,r.jsx)(l(),{href:s,children:(0,r.jsx)("button",{className:"border-[2px] border-white font-semibold bg-green8 hover:-translate-y-1 rounded-xl text-white duration-75 w-[225px] lg:w-[275px] h-[45px] lg:h-[65px] text-[16px] lg:text-[20px]",children:"Download Guidebook"})})]})]}),(0,r.jsxs)("div",{className:"w-screen h-auto flex flex-col justify-between gap-6 items-center text-white",children:[(0,r.jsx)("h2",{className:"text-[28px] lg:text-[32px] font-bold",children:"CONTACT PERSON"}),(0,r.jsx)("div",{className:"w-full flex flex-col justify-between gap-3 items-center text-center px-[15px]",children:t.map(function(e,t){return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:e.split("(")[0]}),(0,r.jsxs)("p",{children:["(",e.split("(")[1]]})]},t)})})]}),(0,r.jsx)("div",{className:"w-[40px] lg:w-[70px] top-[60px] lg:top-[150px] right-[24vw] absolute",children:(0,r.jsx)(i(),{src:c,alt:"plant",className:""})}),(0,r.jsx)("div",{className:"w-[120px] lg:w-[270px] left-[-5vw] bottom-[-10px] absolute",children:(0,r.jsx)(i(),{src:o,alt:"plant",className:""})})]})})}},9377:function(e,t,n){"use strict";var r=n(5893),s=n(7294),i=n(5675),a=n.n(i),l=n(1163),o=function(e){var t=e.title,n=e.desc,i=e.background,o=e.linkRegister,c=(0,s.useState)(!1),d=c[0],x=c[1];(0,s.useEffect)(function(){var e=function(){x(window.innerWidth>540)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]);var u=(0,l.useRouter)().pathname.split("compe/")[1];return(0,r.jsx)("div",{className:"h-screen flex flex-col justify-center items-center overflow-x-hidden",children:(0,r.jsxs)("div",{className:"relative w-full h-full",children:[(0,r.jsx)(a(),{src:i,alt:"Background",layout:"fill",objectFit:"cover",placeholder:"blur"}),(0,r.jsx)("div",{className:"w-full h-full opacity-30 bg-[#000000]"}),(0,r.jsx)("div",{className:"absolute inset-0 justify-center items-center flex flex-col",children:(0,r.jsxs)("div",{className:"font-montserrat text-center text-white",children:[(0,r.jsx)("h1",{className:"xl:text-[48px] md:text-[38px] text-[28px] font-bold leading-[40px] md:leading-[60px] animate__animated animate__fadeInUp",children:d?(0,r.jsxs)(r.Fragment,{children:[t," Competition",(0,r.jsx)("br",{}),"IYREF 2024"]}):(0,r.jsxs)(r.Fragment,{children:[t," ",(0,r.jsx)("br",{}),"Competition IYREF 2024"]})}),(0,r.jsx)("h2",{className:"xl:text-[20px] md:text-[16px] text-[13px] px-[10vw] mt-[30px] animate__animated animate__fadeInUp",children:n}),(0,r.jsx)("div",{className:"translate-y-[15px] flex justify-center",children:(0,r.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:(0,r.jsxs)("button",{className:"font-normal mt-[50px] outline outline-1 text-[#FFFFFF] xl:text-[20px] md:text-[18px] text-[16px] px-[50px] py-[5px] rounded-full hover:bg-[#169470] hover:text-white transition-all cursor-pointer animate-bounce",children:["Join Now ","bpc"===u?"(FREE)":""]})})})]})})]})})};t.Z=o},2782:function(e,t,n){"use strict";var r=n(5893),s=n(5697),i=n.n(s),a=function(e){var t=e.title,n=e.subtitle,s=e.desc;return(0,r.jsxs)("div",{className:"bg-white bg-opacity-25 py-[5vh] px-[6vw] xl:px-[3vw] rounded-xl",children:[(0,r.jsx)("h1",{className:"font-semibold md:font-bold text-[20px]",children:t}),(0,r.jsx)("p",{className:"mt-[4vh] text-[16px] font-semibold",children:n}),(0,r.jsx)("p",{className:"mt-[4vh] font-light text-[14px] md:text-[16px]",children:s})]})};a.propTypes={title:i().string.isRequired,subtitle:i().string.isRequired,desc:i().string.isRequired};var l=function(e){var t=e.title,n=e.desc,s=e.cards;return(0,r.jsx)("div",{className:"overflow-x-hidden font-montserrat",children:(0,r.jsxs)("div",{className:"relative w-screen bg-gradient p-[5vw] pb-[10vw] text-center items-center text-white",children:[(0,r.jsx)("h1",{className:"font-bold text-[28px] xl:text-[48px] p-[3vw]",children:t}),(0,r.jsx)("p",{className:"px-[6vw] text-[15px] xl:text-[20px] mt-[4vh]",children:n}),(0,r.jsx)("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-[4vh] mx-[4vw] mt-[5vw]",children:s.map(function(e){return(0,r.jsx)(a,{title:e.title,subtitle:e.subtitle,desc:e.desc},e.title)})})]})})};l.propTypes={title:i().string.isRequired,desc:i().string.isRequired,cards:i().arrayOf(i().shape({title:i().string.isRequired,subtitle:i().string.isRequired,desc:i().string.isRequired})).isRequired},t.Z=l},7766:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893);n(7294);var s=n(5675),i=n.n(s),a=function(e){var t=e.text;return(0,r.jsx)("div",{className:"z-10 relative w-[380px] py-[5vw] max-h-[200px] bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[2%] rounded-[10px] flex items-center justify-center drop-shadow mb-10",children:(0,r.jsx)("p",{className:"font-montserrat text-[20px] text-white px-5 text-center font-medium",children:t})})},l=function(e){var t=e.title,n=e.contents;return(0,r.jsxs)("div",{className:"h-auto w-full sm:w-[500px] bg-white border-[2px] border-green9 z-10 p-[25px] flex flex-col items-center text-green11 text-center rounded-2xl drop-shadow",children:[(0,r.jsx)("h3",{className:"w-full text-[20px] lg:text-[24px] text-green7 font-semibold mb-[30px]",children:t}),n.map(function(e,t){return(0,r.jsx)("div",{className:"relative mb-2 py-[15px] w-full bg-gradient-to-r from-green7 to-green8 overflow-hidden mx-[5%] rounded-[10px] flex items-center justify-center drop-shadow",children:(0,r.jsx)("p",{className:"font-montserrat text-[17px] text-white px-[30px] text-center font-medium",children:e})},t)})]})},o=n(5638),c=n(5355),d=n(7199),x={src:"/_next/static/media/Hexagon.93827147.svg",height:432,width:229},u=function(e){var t=e.type,n=e.theme,s=e.subtheme,u=e.addText,f=e.benefits;return(0,r.jsxs)("div",{className:"relative font-montserrat h-auto flex flex-col justify-center items-center overflow-y-hidden",children:[(0,r.jsxs)("div",{className:"relative w-full z-10 mt-20",children:[(0,r.jsxs)("div",{className:"my-[50px] space-y-3 mx-[10vw]",children:[(0,r.jsxs)("h2",{className:"text-green11 text-center text-[16px]",children:[t," IYREF 2024's THEME"]}),(0,r.jsxs)("p",{className:"font-gradient text-[24px] lg:text-[30px] xl:text-[32px] text-center font-bold px-5 lg:px-0 leading-[30px] sm:leading-normal",children:['"',n,'"']})]}),(0,r.jsx)("div",{className:"flex-wrap flex mt-[10px] justify-center mb-[5vw] mx-[10vw] z-10",children:null==s?void 0:s.map(function(e,t){return(0,r.jsx)(a,{text:e},t)})}),(0,r.jsx)("div",{className:"w-[300px] bottom-0 absolute left-0 z-[-5]",children:(0,r.jsx)(i(),{src:d.Z,alt:"leaves",className:""})}),(0,r.jsx)("div",{className:"w-[250px] hidden lg:block bottom-0 right-[70px] absolute z-[-5]",children:(0,r.jsx)(i(),{src:o.Z,alt:"bird1",className:""})})]}),(0,r.jsxs)("div",{className:"space-y-5 mb-[80px] lg:mb-[100px] z-10 mt-[5vw] mx-[5vw]",children:[(0,r.jsx)("h2",{className:"text-green11 text-center text-[20px] md:text-[28px] lg:text-[32px] font-bold",children:"Total Competition Prize Up To"}),(0,r.jsx)("p",{className:"font-gradient text-[48px] md:text-[72px] lg:text-[96px] text-center font-bold leading-[50px] sm:leading-normal",children:"IDR 30.000.000"})]}),(0,r.jsxs)("div",{className:"mb-[100px] lg:mb-[300px] px-[5vw] w-full relative",children:[(0,r.jsx)("div",{className:"mb-[20px]",children:(0,r.jsx)("p",{className:"text-green11 text-[16px] text-center",children:u})}),(0,r.jsxs)("div",{className:"gap-5 ".concat(f.some(function(e){return e.contents&&e.contents.length>0})?"flex-wrap flex justify-center":"mx-[10vw] flex flex-col"),children:[f.map(function(e,t){return e.contents&&e.contents.length>0?(0,r.jsx)(l,{title:e.title,contents:e.contents},t):(0,r.jsx)("div",{className:"w-auto py-5 bg-white border-[2px] border-green9 px-[25px] rounded-2xl text-center flex justify-center items-center drop-shadow-green",children:e.title})}),(0,r.jsx)("div",{className:"w-[280px] hidden lg:flex justify-end bottom-0 right-[10vw] absolute z-[-5]",children:(0,r.jsx)(i(),{src:x,alt:"hexagon",className:""})})]})]}),(0,r.jsx)("div",{className:"w-[70px] lg:w-[340px] bottom-[5vw] left-[20vw] absolute",children:(0,r.jsx)(i(),{src:c.Z,alt:"bird2",className:""})})]})}},8614:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),s=n(5675),i=n.n(s),a=n(5697),l=n.n(a),o={src:"/_next/static/media/Pot.e6d0373e.svg",height:1488,width:1e3},c=function(e){var t=e.timeline,n=new Date,s=n.getDate(),a=n.getMonth()+1,l=n.getFullYear(),c="".concat(l,"-").concat(a<10?"0":"").concat(a,"-").concat(s<10?"0":"").concat(s),d=function(e,t,n){var r=new Date(e),s=new Date(t),i=new Date(n);return r>=s&&r<=i};return(0,r.jsxs)("div",{className:"overflow-x-hidden font-montserrat relative",children:[(0,r.jsxs)("div",{className:"md:grid grid-cols-2 gap-[8vw] p-[5vw] pb-0",children:[(0,r.jsx)("p",{className:"row-start-1 col-start-1 text-transparent font-bold bg-clip-text ml-auto md:mr-[3vw] text-center bg-gradient-to-r from-green1 to-green8 text-[36px] md:text-[64px]",children:"Timeline"}),(0,r.jsxs)("div",{className:"row-start-1 col-start-2 mt-[4vh] md:mt-0 ml-[5vw] md:ml-0 relative mb-[10vw]",children:[t.map(function(e,t){var n=d(c,e.startDate,e.endDate);return(0,r.jsxs)("div",{className:"flex relative items-center",children:[(0,r.jsx)("div",{className:"w-5 h-5 aspect-square bg-green8 rounded-full"}),(0,r.jsxs)("div",{className:"ml-[3vw] p-5 ".concat(n?"bg-green8 rounded-r-xl":""),children:[(0,r.jsx)("p",{className:"text-transparent font-bold bg-clip-text text-[18px] md:text-[24px] ".concat(n?"text-[#FFFFFF]":"text-green8"),children:e.title}),(0,r.jsx)("p",{className:"text-transparent bg-clip-text bg-green1 text-[16px] md:text-[22px]",children:e.desc})]})]},t)}),(0,r.jsx)("div",{className:"absolute h-full w-[4px] ml-[8px] bg-green8 top-0 rounded-full"})]})]}),(0,r.jsx)("div",{className:"hidden md:block absolute w-[35vw] max-w-[600px] bottom-0",children:(0,r.jsx)(i(),{src:o,alt:"Pot-Image"})})]})};c.propTypes={timeline:l().arrayOf(l().shape({title:l().string.isRequired,desc:l().string.isRequired})).isRequired};var d=c},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}}]);