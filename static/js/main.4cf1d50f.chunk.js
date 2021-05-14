(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(18),s=n.n(c),i=n(8),r=(n(29),n(22)),u=n(2),l=n(3),p=n(0);var d=function(e){var t=e.headerEmail,n=e.path,a=e.linkText,o=e.isLoggedIn,c=e.handleLinkClick;return Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"logo"}),Object(p.jsxs)("div",{className:"header__text",children:[o&&Object(p.jsx)("p",{className:"header__email",children:t}),Object(p.jsx)("div",{children:Object(p.jsx)(i.b,{className:"header__link",to:n,onClick:c,children:a})})]})]})})},j=o.a.createContext();var h=function(e){var t=o.a.useContext(j),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id}));return Object(p.jsxs)("li",{className:"elements__item",children:[Object(p.jsx)("img",{className:"elements__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(p.jsxs)("div",{className:"elements__item-description",children:[Object(p.jsx)("h2",{className:"elements__title",children:e.card.name}),Object(p.jsxs)("div",{className:"elements__like-container",children:[Object(p.jsx)("button",{className:"elements__like-button ".concat(a?"elements__like-button_liked":""),type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(p.jsx)("span",{className:"elements__likes-count",children:e.card.likes.length})]})]}),Object(p.jsx)("button",{className:"elements__delete-button ".concat(n?"":"elements__delete-button_hidden"),type:"button",onClick:function(){e.onCardDel(e.card)}})]})};var f=function(e){var t=o.a.useContext(j);return o.a.useEffect((function(){e.handleHeaderChange("/sign-in","\u0412\u044b\u0445\u043e\u0434")}),[]),Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__container",children:[Object(p.jsxs)("div",{className:"profile__wrapper",children:[Object(p.jsx)("div",{className:"profile__cursor"}),Object(p.jsx)("div",{className:"profile__avatar-wrapper",onClick:e.onEditAvatar,children:Object(p.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsx)("h1",{className:"profile__name",children:t.name}),Object(p.jsx)("button",{className:"profile__button",type:"button",onClick:e.onEditProfile}),Object(p.jsx)("p",{className:"profile__text",children:t.about})]})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{children:Object(p.jsx)("ul",{className:"elements",children:e.cards.map((function(t){return Object(p.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDel:e.onCardDel},t._id)}))})})]})};var b=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("p",{className:"footer__text",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var m=function(e){return Object(p.jsx)("div",{className:"pop-up-container ".concat(e.isOpen?"pop-up-container_opened":"","  pop-up-container_type_").concat(e.name),children:Object(p.jsxs)("div",{className:"pop-up pop-up_type_".concat(e.name),children:[Object(p.jsx)("h2",{className:"pop-up__title",children:e.title}),Object(p.jsxs)("form",{name:"pop-up",className:"pop-up__form pop-up__form_type_".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(p.jsx)("button",{className:"pop-up__submit pop-up__submit_active",type:"submit",children:e.buttonText})]}),Object(p.jsx)("button",{className:"pop-up__close",type:"button",onClick:e.closePopup})]})})};var x=function(e){var t,n,a;return Object(p.jsx)("div",{className:"pop-up-container ".concat(e.card?"pop-up-container_opened":"","  pop-up-container_type_image"),children:Object(p.jsxs)("div",{className:"pop-up pop-up_type_image",children:[Object(p.jsx)("img",{className:"pop-up__image",src:null===(t=e.card)||void 0===t?void 0:t.link,alt:null===(n=e.card)||void 0===n?void 0:n.name}),Object(p.jsx)("p",{className:"pop-up__text",children:null===(a=e.card)||void 0===a?void 0:a.name}),Object(p.jsx)("button",{className:"pop-up__close",type:"button",onClick:e.onClose})]})})},v=n(20),g=n(21),O=new(function(){function e(t){Object(v.a)(this,e),this._url=t.url,this._authorizationToken=t.token}return Object(g.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"users/me"),{headers:{authorization:this._authorizationToken}}).then((function(t){return e._getResponseData(t)}))}},{key:"getDefaultCards",value:function(){var e=this;return fetch("".concat(this._url,"cards"),{headers:{authorization:this._authorizationToken}}).then((function(t){return e._getResponseData(t)}))}},{key:"patchUserInfo",value:function(e,t){var n=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"postCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e._id),{method:"DELETE",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"patchAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"addlikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/likes/").concat(e._id),{method:"PUT",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"removeLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/likes/").concat(e._id),{method:"DELETE",headers:{authorization:this._authorizationToken,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-21/",token:"ead2bc08-76d8-467e-bb45-32710c654284"});var C=function(e){var t=o.a.useContext(j),n=o.a.useState(""),a=Object(u.a)(n,2),c=a[0],s=a[1],i=o.a.useState(""),r=Object(u.a)(i,2),l=r[0],d=r[1];function h(){return Object(p.jsx)("input",{id:"name-input",className:"pop-up__input pop-up__input_type_name",type:"text",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:" 2",maxLength:"40",value:c,onChange:function(e){s(e.target.value)}})}function f(){return Object(p.jsx)("input",{id:"job-input",className:"pop-up__input pop-up__input_type_job",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"job",required:!0,minLength:"2",maxLength:"200",value:l,onChange:function(e){d(e.target.value)}})}return o.a.useEffect((function(){s(t.name),d(t.about)}),[t,e.isOpen]),Object(p.jsxs)(m,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,closePopup:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(c,l)},children:[Object(p.jsx)(h,{}),Object(p.jsx)("span",{className:"pop-up__input-error name-input-error"}),Object(p.jsx)(f,{}),Object(p.jsx)("span",{className:"pop-up__input-error job-input-error"})]})};var A=function(e){var t=o.a.useRef();return Object(p.jsxs)(m,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,closePopup:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},children:[Object(p.jsx)("input",{id:"avatar-link-input",className:"pop-up__input pop-up__input_type_avatar-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar-link",required:!0,ref:t}),Object(p.jsx)("span",{className:"pop-up__input-error avatar-link-input-error"})]})};var k=function(e){var t=o.a.useRef(),n=o.a.useRef();return Object(p.jsxs)(m,{name:"card-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,closePopup:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddCard(t.current.value,n.current.value)},children:[Object(p.jsx)("input",{id:"card-name-input",className:"pop-up__input pop-up__input_type_card-name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"card-name",required:!0,minLength:"2",maxLength:"20",ref:t}),Object(p.jsx)("span",{className:"pop-up__input-error card-name-input-error"}),Object(p.jsx)("input",{id:"card-link-input",className:"pop-up__input pop-up__input_type_card-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"card-link",required:!0,ref:n}),Object(p.jsx)("span",{className:"pop-up__input-error card-link-input-error"})]})};var y=function(e){var t=e.handleLogin,n=e.handleHeaderChange,a=o.a.useState(""),c=Object(u.a)(a,2),s=c[0],i=c[1],r=o.a.useState(""),l=Object(u.a)(r,2),d=l[0],j=l[1];return o.a.useEffect((function(){n("/sign-up","\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")}),[]),Object(p.jsxs)("div",{className:"auth",children:[Object(p.jsx)("h1",{className:"auth__header",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"auth__form",onSubmit:function(e){e.preventDefault(),t(s,d)},children:[Object(p.jsx)("input",{className:"auth__input",type:"email",placeholder:"E-mail",onChange:function(e){i(e.target.value)},value:s}),Object(p.jsx)("input",{className:"auth__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){j(e.target.value)},value:d}),Object(p.jsx)("button",{type:"submit",className:"auth__submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var L=function(){return Object(p.jsx)("div",{className:"loader",children:Object(p.jsxs)("div",{className:"lds-default",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})})},N="https://auth.nomoreparties.co";function U(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var q=function(e){var t=e.handleHeaderChange,n=e.handleRegister,a=o.a.useState(""),c=Object(u.a)(a,2),s=c[0],r=c[1],d=o.a.useState(""),j=Object(u.a)(d,2),h=j[0],f=j[1];return Object(l.g)(),o.a.useEffect((function(){t("/sign-in","\u0412\u043e\u0439\u0442\u0438")}),[]),Object(p.jsxs)("div",{className:"auth",children:[Object(p.jsx)("h1",{className:"auth__header",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{className:"auth__form",onSubmit:function(e){e.preventDefault(),n(s,h)},children:[Object(p.jsx)("input",{className:"auth__input",type:"email",placeholder:"E-mail",onChange:function(e){r(e.target.value)},value:s}),Object(p.jsx)("input",{className:"auth__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){f(e.target.value)},value:h}),Object(p.jsx)("button",{type:"submit",className:"auth__submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("p",{className:"auth__paragraph",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(p.jsx)(i.c,{className:"auth__link",activeClassName:"auth__link_active",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var R=function(e){return Object(p.jsx)("div",{className:"pop-up-container ".concat(e.isInfoPopupOpen?"pop-up-container_opened":"","  pop-up-container_type_info"),children:Object(p.jsxs)("div",{className:"pop-up pop-up_type_info",children:[Object(p.jsx)("img",{className:"pop-up_type_info__image",src:e.isRegisterConfirm?"data:image/png;base64,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":"data:image/png;base64,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",alt:""}),Object(p.jsx)("p",{className:"pop-up_type_info__text",children:e.isRegisterConfirm?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"}),Object(p.jsx)("button",{className:"pop-up__close",type:"button",onClick:e.closePopup})]})})},S=n(23),Q=n(24);var T=function(e){var t=e.component,n=Object(Q.a)(e,["component"]);return Object(p.jsx)(l.b,{children:n.loggedIn?Object(p.jsx)(t,Object(S.a)({},n)):Object(p.jsx)(l.a,{to:"/sign-in"})})};var z=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=o.a.useState(!1),s=Object(u.a)(c,2),i=s[0],h=s[1],v=o.a.useState(!1),g=Object(u.a)(v,2),S=g[0],Q=g[1],z=o.a.useState(null),E=Object(u.a)(z,2),F=E[0],H=E[1],P=o.a.useState(null),I=Object(u.a)(P,2),B=I[0],Y=I[1],w=o.a.useState([]),K=Object(u.a)(w,2),X=K[0],V=K[1],W=o.a.useState(!1),G=Object(u.a)(W,2),D=G[0],Z=G[1],M=Object(l.g)(),_=o.a.useState(""),J=Object(u.a)(_,2),$=J[0],ee=J[1],te=o.a.useState(""),ne=Object(u.a)(te,2),ae=ne[0],oe=ne[1],ce=o.a.useState(""),se=Object(u.a)(ce,2),ie=se[0],re=se[1],ue=o.a.useState(!1),le=Object(u.a)(ue,2),pe=le[0],de=le[1],je=o.a.useState(!1),he=Object(u.a)(je,2),fe=he[0],be=he[1];function me(){var e=localStorage.getItem("token");localStorage.getItem("token")&&function(e){return fetch("".concat(N,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return U(e)}))}(e).then((function(e){Z(!0),ee(e.data.email),M.push("/")})).catch((function(e){console.log(e)}))}function xe(e,t){oe(e),re(t)}function ve(){Q(!1),a(!1),h(!1),H(null),de(!1)}return o.a.useEffect((function(){Promise.all([O.getUserInfo(),O.getDefaultCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];Y(n),V(a)})).catch((function(e){return console.log(e)})),me()}),[]),null!==B?Object(p.jsx)(j.Provider,{value:B,children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(d,{headerEmail:$,path:ae,linkText:ie,isLoggedIn:D,handleLinkClick:function(){Z(!1),localStorage.getItem("token")&&localStorage.removeItem("token")}}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(T,{exact:!0,path:"/",loggedIn:D,component:f,onEditProfile:function(){a(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){Q(!0)},onCardClick:function(e){H(e)},cards:X,onCardLike:function(e){e.likes.some((function(e){return e._id===B._id}))?O.removeLikeCard(e).then((function(t){V((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)})):O.addlikeCard(e).then((function(t){V((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDel:function(e){O.deleteCard(e).then((function(t){V((function(t){return t.filter((function(t){return t!==e}))})),console.log(t)})).catch((function(e){return console.log(e)}))},handleHeaderChange:xe}),Object(p.jsx)(l.b,{path:"/sign-up",children:Object(p.jsx)(q,{handleHeaderChange:xe,handleRegister:function(e,t){(function(e,t){return fetch("".concat(N,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return U(e)}))})(e,t).then((function(e){console.log(e),be(!0),de(!0),M.push("/sign-in")})).catch((function(e){be(!1),de(!0),console.log(e)}))}})}),Object(p.jsx)(l.b,{path:"/sign-in",children:Object(p.jsx)(y,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(N,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return U(e)}))})(e,t).then((function(e){console.log(e),localStorage.setItem("token",e.token),Z(!0),me()})).catch((function(e){console.log(e)}))},handleHeaderChange:xe})})]}),Object(p.jsx)(b,{}),Object(p.jsx)(C,{isOpen:n,onClose:ve,onUpdateUser:function(e,t){O.patchUserInfo(e,t).then((function(e){Y(e),ve()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(A,{isOpen:S,onClose:ve,onUpdateAvatar:function(e){O.patchAvatar(e).then((function(e){Y(e),ve()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(k,{isOpen:i,onClose:ve,onAddCard:function(e,t){O.postCard(e,t).then((function(e){V([e].concat(Object(r.a)(X))),ve()})).catch((function(e){return console.log(e)}))}}),Object(p.jsx)(m,{name:"cards-del",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",buttonText:"\u0414\u0430",closePopup:ve}),Object(p.jsx)(x,{card:F,onClose:ve}),Object(p.jsx)(R,{isInfoPopupOpen:pe,isRegisterConfirm:fe,closePopup:ve})]})}):Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(d,{}),Object(p.jsx)(L,{}),Object(p.jsx)(b,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsx)(z,{})})}),document.getElementById("root")),E()}},[[36,1,2]]]);
//# sourceMappingURL=main.4cf1d50f.chunk.js.map