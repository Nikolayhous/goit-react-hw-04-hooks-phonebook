(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={section__form:"Form_section__form__Z4TiH",form:"Form_form__4zoJL",label:"Form_label__351_K",label__agree:"Form_label__agree__3pjm6",checkbox:"Form_checkbox__1gZde",inputName:"Form_inputName__1SsV-",btn:"Form_btn__2n3w3"}},function(e,t,n){e.exports={contactList:"ContactList_contactList__3vOQY",list:"ContactList_list__2DLZ3",item:"ContactList_item__g0dCl",info:"ContactList_info__1dmw6",text:"ContactList_text__2x6NT",total__number:"ContactList_total__number__nxeCn",btn:"ContactList_btn__1Exq3"}},,,,function(e,t,n){e.exports={filter:"Filter_filter__1QmDw",label:"Filter_label__HuSD9",input:"Filter_input__3b6Ls"}},,function(e,t,n){e.exports={title:"App_title__2PFCW"}},,function(e,t,n){e.exports={container:"Container_container__2zkta"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=n(13),o=n(4),l=n(9),b=n.n(l),u=n(11),m=n.n(u),_=n(0);var d=function(e){var t=e.children;return Object(_.jsx)("div",{className:m.a.container,children:t})},j=n(22),h=n(2),f=n.n(h);var x=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),b=l[0],u=l[1],m=Object(a.useState)(!1),d=Object(o.a)(m,2),h=d[0],x=d[1],p=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":u(a);break;default:return}},O=function(){s(""),u(""),x(!1)};return Object(_.jsx)("div",{className:f.a.section__form,children:Object(_.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault();var n={id:Object(j.a)(),name:r,number:b};t(n),O()},children:[Object(_.jsxs)("label",{className:f.a.label,children:["Name",Object(_.jsx)("input",{className:f.a.inputName,value:r,type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:p})]}),Object(_.jsxs)("label",{className:f.a.label,children:["Number",Object(_.jsx)("input",{className:f.a.inputName,type:"tel",value:b,name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:p})]}),Object(_.jsxs)("label",{className:f.a.label__agree,children:[Object(_.jsx)("input",{className:f.a.checkbox,value:h,type:"checkbox",name:"agree",checked:h,onChange:function(e){x(e.target.checked)}}),"agree"]}),Object(_.jsx)("button",{className:f.a.btn,disabled:!h,children:"Add contact"})]})})},p=n(7),O=n.n(p);var N=function(e){var t=e.filter,n=e.onChange;return Object(_.jsx)("div",{className:O.a.filter,children:Object(_.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(_.jsx)("input",{className:O.a.input,type:"text",name:"name",value:t,onChange:n})]})})},v=n(3),C=n.n(v);var g=function(e){var t=e.contacts,n=e.onDeleteContactList,a=t.length;return Object(_.jsxs)("div",{className:C.a.contactList,children:[Object(_.jsx)("ul",{className:C.a.list,children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(_.jsxs)("li",{className:C.a.item,children:[Object(_.jsxs)("p",{className:C.a.text,children:[t,":"]}),Object(_.jsx)("p",{className:"".concat(C.a.text," ").concat(C.a.number),children:a}),Object(_.jsx)("button",{className:C.a.btn,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))}),Object(_.jsxs)("p",{className:C.a.total__number,children:["Total number of subscribers:",a]})]})},L=n(12);var k=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:L})),s=Object(o.a)(r,2),l=s[0],u=s[1];return Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(l))}),[l]),Object(_.jsxs)(d,{children:[Object(_.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(_.jsx)(x,{onSubmit:function(e){if(l.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("This contact has already been added to the list");u([e].concat(Object(i.a)(l)))}}),Object(_.jsx)("h2",{className:b.a.title,children:"Contacts"}),Object(_.jsx)(N,{filter:n,onChange:function(e){c(e.target.value)}}),Object(_.jsx)(g,{contacts:function(){var e=n.toLowerCase();return l.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContactList:function(e){u(l.filter((function(t){return t.id!==e})))}})]})};n(19);s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(k,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.dd55a2f9.chunk.js.map