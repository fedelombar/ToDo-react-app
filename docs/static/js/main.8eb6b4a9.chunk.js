(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(8),d=n.n(a),r=n(3),l=(n(14),n(6)),i=n(2),s=n(0),u=function(e){var t=e.handleAddTodo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(r.a)(t,2),o=n[0],a=n[1];return[o,function(e){var t=e.target;a(Object(i.a)(Object(i.a)({},o),{},Object(l.a)({},t.name,t.value)))},function(){a(e)}]}({description:""}),o=Object(r.a)(n,3),a=o[0].description,d=o[1],u=o[2];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Add TODO"}),Object(s.jsx)("hr",{}),Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(a.trim().length<=1)){var n={id:(new Date).getTime(),desc:a,done:!1};t(n),u()}},children:[Object(s.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Learn...",autoComplete:"off",value:a,onChange:d}),Object(s.jsx)("button",{className:"btn btn-outline-primary mt-1 btn-block",children:"Add"})]})]})},j=function(e){var t=e.todo,n=e.index,c=e.handleToggle,o=e.handleDelete;return Object(s.jsxs)("li",{className:"list-group-item",children:[Object(s.jsxs)("p",{className:"".concat(t.done&&"complete"),onClick:function(){return c(t.id)},children:[n+1,". ",t.desc]}),Object(s.jsx)("button",{onClick:function(){return o(t.id)},className:"btn btn-danger",children:"Delete"})]},t.id)},b=function(e){var t=e.todos,n=e.handleDelete,c=e.handleToggle;return Object(s.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(s.jsx)(j,{todo:e,index:t,handleToggle:c,handleDelete:n},e.id)}))})},h=n(9),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(h.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{done:!e.done}):e}));default:return e}},O=function(){return JSON.parse(localStorage.getItem("todos"))||[]},f=function(){var e=Object(c.useReducer)(p,[],O),t=Object(r.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["TodoApp (",n.length,")"]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-7",children:Object(s.jsx)(b,{todos:n,handleDelete:function(e){o({type:"delete",payload:e})},handleToggle:function(e){o({type:"toggle",payload:e})}})}),Object(s.jsx)("div",{className:"col-5",children:Object(s.jsx)(u,{handleAddTodo:function(e){o({type:"add",payload:e})}})})]})]})};d.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8eb6b4a9.chunk.js.map