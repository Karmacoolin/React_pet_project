(this["webpackJsonpreact-new"]=this["webpackJsonpreact-new"]||[]).push([[4],{301:function(e,s,t){"use strict";t.d(s,"a",(function(){return m}));var n=t(4),a=t(52),i=t(53),c=t(64),r=t(63),u=t(1),o=t.n(u),d=t(13),j=t(6),b=t(0),l=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var s=function(s){Object(c.a)(u,s);var t=Object(r.a)(u);function u(){return Object(a.a)(this,u),t.apply(this,arguments)}return Object(i.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(n.a)({},this.props)):Object(b.jsx)(j.a,{to:"/login"})}}]),u}(o.a.Component);return Object(d.b)(l)(s)}},302:function(e,s,t){e.exports={dialogs:"Messages_dialogs__3_9z1",ditems:"Messages_ditems__U9WdB",message:"Messages_message__-m1Aa",message2:"Messages_message2__3mjWT",dialog:"Messages_dialog__1OHaI"}},307:function(e,s,t){"use strict";t.r(s);var n=t(13),a=t(10),i=t(301),c=t(125),r=(t(1),t(127)),u=t(128),o=t(32),d=t(21),j=t(302),b=t.n(j),l=t(19),m=t(0),g=function(e){return Object(m.jsx)("div",{className:b.a.dialog,children:Object(m.jsx)(l.b,{to:"/dialogs/"+e.id,children:e.name})})},O=function(e){return Object(m.jsxs)("div",{className:b.a.message,children:[Object(m.jsx)("div",{children:e.message}),Object(m.jsxs)("div",{children:["like:",e.likesCount]})]})},h=Object(o.a)(20),f=Object(u.a)({form:"Message"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(m.jsx)(r.a,{component:d.b,name:"newMessText",placeholder:"Enter your message",validate:[o.b,h]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Send"})})]})})),x=function(e){var s=e.messagesPage,t=s.dialogData.map((function(e){return Object(m.jsx)(g,{name:e.name,id:e.id})})),n=s.messageData.map((function(e){return Object(m.jsx)(O,{message:e.message,likesCount:e.likesCount})}));return Object(m.jsxs)("div",{className:b.a.dialogs,children:[Object(m.jsx)("div",{className:b.a.ditems,children:t}),Object(m.jsxs)("div",{children:[n,Object(m.jsx)(f,{onSubmit:function(s){e.addMess(s.newMessText)}})," "]})]})};s.default=Object(a.d)(Object(n.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{addMess:function(s){e(Object(c.a)(s))}}})),i.a)(x)}}]);
//# sourceMappingURL=4.f5328151.chunk.js.map