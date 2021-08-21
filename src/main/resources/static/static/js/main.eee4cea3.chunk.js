(this["webpackJsonppmt-react-client"]=this["webpackJsonppmt-react-client"]||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(20),n=a.n(s),i=(a(41),a(42),a(7)),o=a(0);var l=function(){return Object(o.jsx)(i.b,{to:"/addProject",className:"btn btn-lg btn-info mx-auto mx-md-0",children:"Create a Project"})},j=a(4),d=a(6),u=a.n(d),b=a(11),m=a(10),p=a.n(m),O="GET_ERRORS",h="GET_PROJECTS",v="GET_PROJECT",f="DELETE_PROJECT",x="GET_BACKLOG",g="GET_PROJECT_TASK",N="DELETE_PROJECT_TASK",y="SET_CURRENT_USER",k=function(e,t){return function(){var a=Object(b.a)(u.a.mark((function a(c){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.post("/api/project",e);case 3:a.sent,t.push("/dashboard"),c({type:O,payload:{}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),c({type:O,payload:a.t0.response.data});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()};var w=Object(j.b)(null,{deleteProject:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure? This will delete the project and all related data.")){t.next=4;break}return t.next=3,p.a.delete("/api/project/".concat(e));case 3:a({type:f,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.project;return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"card card-body bg-light mb-3",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-2 text-center",children:Object(o.jsx)("span",{children:t.identifier})}),Object(o.jsxs)("div",{className:"col-12 col-md-4 col-lg-6",children:[Object(o.jsx)("h3",{className:"text-center",children:t.name}),Object(o.jsx)("p",{className:"text-center",children:t.description})]}),Object(o.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(o.jsxs)("ul",{className:"list-group",children:[Object(o.jsx)(i.b,{to:"/projectBoard/".concat(t.identifier),children:Object(o.jsx)("li",{className:"list-group-item board",children:Object(o.jsx)("i",{className:"fa fa-flag-checkered pr-1",children:" Project Board "})})}),Object(o.jsx)(i.b,{to:"/updateProject/".concat(t.identifier),children:Object(o.jsx)("li",{className:"list-group-item update",children:Object(o.jsx)("i",{className:"fa fa-edit pr-1",children:" Update Project Info"})})}),Object(o.jsx)("li",{className:"list-group-item delete",onClick:function(){return a=t.identifier,void e.deleteProject(a);var a},children:Object(o.jsx)("i",{className:"fa fa-minus-circle pr-1",children:" Delete Project"})})]})})]})})})}));var S=Object(j.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/project/all");case 2:a=e.sent,t({type:h,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){Object(c.useEffect)((function(){e.getProjects()}),[]);var t=e.project.projects;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"projects",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-12 d-flex d-md-block flex-column flex-md-row",children:[Object(o.jsx)("h1",{className:"display-4 text-center",children:"Projects"}),Object(o.jsx)("br",{}),Object(o.jsx)(l,{}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),t.map((function(e){return Object(o.jsx)(w,{project:e},e.id)}))]})})})})})})),D=function(e){e?p.a.defaults.headers.common.Authorization=e:delete p.a.defaults.headers.common.Authorization},P=a(22),C=function(){return function(e){localStorage.removeItem("jwtToken"),D(!1),e({type:y,payload:{}})}};var T=Object(j.b)((function(e){return{security:e.security}}),{logout:C})((function(e){var t,a=e.security,c=a.validToken,r=a.user,s=Object(o.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"/register",children:"Sign Up"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"/login",children:"Login"})})]})}),n=Object(o.jsxs)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:[Object(o.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"/dashboard",children:"Dashboard"})})}),Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)(i.b,{className:"nav-link",to:"/dashboard",children:[Object(o.jsx)("i",{className:"fas fa-user-circle mr1"})," ",r.fullName]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"/logout",onClick:function(){e.logout(),window.location.href="/"},children:"Logout"})})]})]});return t=c&&r?n:s,Object(o.jsx)("nav",{class:"navbar navbar-expand-sm navbar-dark bg-primary mb-4",children:Object(o.jsxs)("div",{class:"container-fluid",children:[Object(o.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Personal Project Management Tool"}),Object(o.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{class:"navbar-toggler-icon"})}),t]})})})),E=(a(68),a(8)),_=a(2),I=a(3),R=a.n(I);var B=Object(j.b)((function(e){return{errors:e.errors}}),{createProject:k})((function(e){var t=Object(c.useState)(""),a=Object(_.a)(t,2),r=a[0],s=a[1],n=Object(c.useState)(""),i=Object(_.a)(n,2),l=i[0],j=i[1],d=Object(c.useState)(""),u=Object(_.a)(d,2),b=u[0],m=u[1],p=Object(c.useState)(""),O=Object(_.a)(p,2),h=O[0],v=O[1],f=Object(c.useState)(""),x=Object(_.a)(f,2),g=x[0],N=x[1],y=Object(c.useState)({}),k=Object(_.a)(y,2),w=k[0],S=k[1];Object(c.useEffect)((function(){S(e.errors)}),[e.errors]);var D=function(e){switch(e.target.name){case"name":s(e.target.value);break;case"identifier":j(e.target.value);break;case"description":m(e.target.value);break;case"startDate":v(e.target.value);break;case"endDate":N(e.target.value)}};return Object(o.jsx)("div",{className:"register",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(o.jsx)("h5",{className:"display-4 text-center",children:"Create Project form"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={name:r,identifier:l,description:b,startDate:h,endDate:g};e.createProject(a,e.history)},children:[Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg",{"is-invalid":w.name}),placeholder:"Project Name",name:"name",value:r,onChange:D}),w.name&&Object(o.jsx)("div",{className:"invalid-feedback",children:w.name})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg",{"is-invalid":w.identifier}),placeholder:"Unique Project ID",name:"identifier",value:l,onChange:D}),w.identifier&&Object(o.jsx)("div",{className:"invalid-feedback",children:w.identifier})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("textarea",{className:R()("form-control form-control-lg",{"is-invalid":w.description}),placeholder:"Project Description",name:"description",value:b,onChange:D}),w.description&&Object(o.jsx)("div",{className:"invalid-feedback",children:w.description})]}),Object(o.jsx)("h6",{className:"mt-3",children:"Start Date"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"date",className:R()("form-control form-control-lg",{"is-invalid":w.startDate}),name:"startDate",value:h,onChange:D}),w.startDate&&Object(o.jsx)("div",{className:"invalid-feedback",children:w.startDate})]}),Object(o.jsx)("h6",{className:"mt-3",children:"Estimated End Date"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"date",className:R()("form-control form-control-lg",{"is-invalid":w.endDate}),name:"endDate",value:g,onChange:D}),w.endDate&&Object(o.jsx)("div",{className:"invalid-feedback",children:w.endDate})]}),Object(o.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})})),U=a(17),A=a(35),L=a(9),G={project_tasks:[],project_task:{}},q={},F={projects:[],project:{}},J={user:{},validToken:!1},M=Object(U.b)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log(t.payload),t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(L.a)(Object(L.a)({},e),{},{projects:t.payload});case v:return Object(L.a)(Object(L.a)({},e),{},{project:t.payload});case f:return Object(L.a)(Object(L.a)({},e),{},{projects:e.projects.filter((function(e){return e.identifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(L.a)(Object(L.a)({},e),{},{project_tasks:t.payload});case g:return Object(L.a)(Object(L.a)({},e),{},{project_task:t.payload});case N:return Object(L.a)(Object(L.a)({},e),{},{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(L.a)(Object(L.a)({},e),{},{validToken:!0,user:t.payload});default:return e}}}),H={},X=[A.a],K=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),V=window.navigator.userAgent.includes("Chrome")&&K?Object(U.d)(M,H,Object(U.c)(U.a.apply(void 0,X),K)):Object(U.d)(M,H,Object(U.c)(U.a.apply(void 0,X)));var z=Object(j.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(){var a=Object(b.a)(u.a.mark((function a(c){var r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.get("/api/project/single/".concat(e));case 3:r=a.sent,c({type:v,payload:r.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},createProject:k})((function(e){console.log(e);var t=Object(E.g)().id,a=Object(c.useState)(e.project.id),r=Object(_.a)(a,2),s=r[0],n=(r[1],Object(c.useState)(e.project.name)),i=Object(_.a)(n,2),l=i[0],j=i[1],d=Object(c.useState)(e.project.identifier),u=Object(_.a)(d,2),b=u[0],m=u[1],p=Object(c.useState)(e.project.description),O=Object(_.a)(p,2),h=O[0],v=O[1],f=Object(c.useState)(e.project.startDate),x=Object(_.a)(f,2),g=x[0],N=x[1],y=Object(c.useState)(e.project.endDate),k=Object(_.a)(y,2),w=k[0],S=k[1],D=Object(c.useState)({}),P=Object(_.a)(D,2),C=P[0],T=P[1];Object(c.useEffect)((function(){e.getProject(t,e.history)}),[t]),Object(c.useEffect)((function(){T(e.errors)}),[e.errors]);var I=function(e){switch(e.target.name){case"name":j(e.target.value);break;case"identifier":m(e.target.value);break;case"description":v(e.target.value);break;case"startDate":N(e.target.value);break;case"endDate":S(e.target.value)}};return Object(o.jsx)("div",{className:"register",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(o.jsx)("h5",{className:"display-4 text-center",children:"Update Project form"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={id:s,name:l,identifier:b,description:h,startDate:g,endDate:w};e.createProject(a,e.history)},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg",{"is-invalid":C.name}),placeholder:"Project Name",name:"name",value:l,onChange:I}),C.name&&Object(o.jsx)("div",{className:"invalid-feedback",children:C.name})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg",{"is-invalid":C.identifier}),placeholder:"Unique Project ID",name:"identifier",value:b,onChange:I,disabled:!0}),C.identifier&&Object(o.jsx)("div",{className:"invalid-feedback",children:C.identifier})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("textarea",{className:R()("form-control form-control-lg",{"is-invalid":C.description}),placeholder:"Project Description",name:"description",value:h,onChange:I}),C.description&&Object(o.jsx)("div",{className:"invalid-feedback",children:C.description})]}),Object(o.jsx)("h6",{className:"mt-3",children:"Start Date"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"date",className:R()("form-control form-control-lg",{"is-invalid":C.startDate}),name:"startDate",value:g,onChange:I}),C.startDate&&Object(o.jsx)("div",{className:"invalid-feedback",children:C.startDate})]}),Object(o.jsx)("h6",{className:"mt-3",children:"Estimated End Date"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"date",className:R()("form-control form-control-lg",{"is-invalid":C.endDate}),name:"endDate",value:w,onChange:I}),C.endDate&&Object(o.jsx)("div",{className:"invalid-feedback",children:C.endDate})]}),Object(o.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}));var W=Object(j.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(b.a)(u.a.mark((function a(c){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return window.confirm("You are deleting project task ".concat(t,", this action cannot be undone.")),a.next=3,p.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:c({type:N,payload:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t,a,c=e.project_task;return 1===c.priority?(a="bg-danger text-light",t="HIGH"):2===c.priority?(a="bg-warning text-light",t="MEDIUM"):(a="bg-info text-light",t="LOW"),Object(o.jsxs)("div",{className:"card mb-1 bg-light",children:[Object(o.jsxs)("div",{className:"card-header text-primary ".concat(a),children:["ID: ",c.projectSequence," -- Priority: ",t]}),Object(o.jsxs)("div",{className:"card-body bg-light",children:[Object(o.jsx)("h5",{className:"card-title",children:c.summary}),Object(o.jsx)("p",{className:"card-text text-truncate ",children:c.acceptanceCriteria}),Object(o.jsx)(i.b,{to:"/updateProjectTask/".concat(c.identifier,"/").concat(c.projectSequence),className:"btn btn-primary",children:"View / Update"}),Object(o.jsx)("button",{className:"btn btn-danger ml-4",onClick:function(){return t=c.identifier,a=c.projectSequence,void e.deleteProjectTask(t,a);var t,a},children:"Delete"})]})]})}));var Y=function(e){var t=e.project_tasks.project_tasks;console.log(e.project_tasks);var a=t.map((function(e){return Object(o.jsx)(W,{project_task:e},e.id)}));console.log(e.project_tasks);var c=a.filter((function(e){return"TO_DO"===e.props.project_task.status})),r=a.filter((function(e){return"IN_PROGRESS"===e.props.project_task.status})),s=a.filter((function(e){return"DONE"===e.props.project_task.status}));return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-4",children:[Object(o.jsx)("div",{className:"card text-center mb-2",children:Object(o.jsx)("div",{className:"card-header bg-secondary text-white",children:Object(o.jsx)("h3",{children:"TO DO"})})}),c]}),Object(o.jsxs)("div",{className:"col-md-4",children:[Object(o.jsx)("div",{className:"card text-center mb-2",children:Object(o.jsx)("div",{className:"card-header bg-primary text-white",children:Object(o.jsx)("h3",{children:"In Progress"})})}),r]}),Object(o.jsxs)("div",{className:"col-md-4",children:[Object(o.jsx)("div",{className:"card text-center mb-2",children:Object(o.jsx)("div",{className:"card-header bg-success text-white",children:Object(o.jsx)("h3",{children:"Done"})})}),s]})]})})};var Q=Object(j.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("mpike"),t.next=4,p.a.get("/api/backlog/".concat(e));case 4:c=t.sent,console.log(c),a({type:x,payload:c.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:O,payload:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t,a=Object(c.useState)({}),r=Object(_.a)(a,2),s=r[0],n=r[1],l=Object(E.g)().id;return Object(c.useEffect)((function(){e.getBacklog(l)}),[]),Object(c.useEffect)((function(){e.errors&&n(e.errors)}),[e]),t=function(t,a){return console.log(a.project_tasks),a.project_tasks.length<1?t.projectNotFound||t.projectIdentifier?Object(o.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:t.projectNotFound?t.projectNotFound:t.projectIdentifier}):Object(o.jsx)("div",{className:"alert alert-info text-center",role:"alert",children:"No project tasks on this board."}):Object(o.jsx)(Y,{project_tasks:e.backlog})}(s,e.backlog),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(i.b,{to:"/addProjectTask/".concat(l),className:"btn btn-primary mb-3",children:Object(o.jsx)("i",{className:"fas fa-plus-circle",children:" Create Project Task"})}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),t]})}));var Z=Object(j.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(){var c=Object(b.a)(u.a.mark((function c(r){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,p.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),r({type:O,payload:{}}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),r({type:O,payload:c.t0.response.data});case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=Object(E.g)().id,a=Object(c.useState)(""),r=Object(_.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)(""),j=Object(_.a)(l,2),d=j[0],u=j[1],b=Object(c.useState)(""),m=Object(_.a)(b,2),p=m[0],O=m[1],h=Object(c.useState)(0),v=Object(_.a)(h,2),f=v[0],x=v[1],g=Object(c.useState)(""),N=Object(_.a)(g,2),y=N[0],k=N[1],w=Object(c.useState)(t),S=Object(_.a)(w,2),D=S[0],P=(S[1],Object(c.useState)({})),C=Object(_.a)(P,2),T=C[0],I=C[1];Object(c.useEffect)((function(){I(e.errors)}),[e.errors]);var B=function(e){switch(e.target.name){case"summary":n(e.target.value);break;case"acceptanceCriteria":u(e.target.value);break;case"status":O(e.target.value);break;case"priority":x(e.target.value);break;case"dueDate":k(e.target.value)}};return Object(o.jsx)("div",{className:"add-PBI",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(o.jsx)(i.b,{to:"/projectBoard/".concat(t),className:"btn btn-light",children:"Back to Project Board"}),Object(o.jsx)("h4",{className:"display-4 text-center",children:"Add Project Task"}),Object(o.jsx)("p",{className:"lead text-center",children:"Project Name + Project Code"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={summary:s,acceptanceCriteria:d,status:p,priority:f,dueDate:y};e.addProjectTask(D,a,e.history)},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg",{"is-invalid":T.summary}),name:"summary",value:s,onChange:B,placeholder:"Project Task summary"}),T.summary&&Object(o.jsx)("div",{className:"invalid-feedback",children:T.summary})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("textarea",{className:R()("form-control form-control-lg",{"is-invalid":T.acceptanceCriteria}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:d,onChange:B}),T.acceptanceCriteria&&Object(o.jsx)("div",{className:"invalid-feedback",children:T.acceptanceCriteria})]}),Object(o.jsx)("h6",{className:"mt-3",children:"Due Date"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"date",className:R()("form-control form-control-lg",{"is-invalid":T.dueDate}),name:"dueDate",value:y,onChange:B}),T.dueDate&&Object(o.jsx)("div",{className:"invalid-feedback",children:T.dueDate})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsxs)("select",{className:R()("form-control form-control-lg",{"is-invalid":T.priority}),name:"priority",value:f,onChange:B,children:[Object(o.jsx)("option",{value:0,children:"Select Priority"}),Object(o.jsx)("option",{value:1,children:"High"}),Object(o.jsx)("option",{value:2,children:"Medium"}),Object(o.jsx)("option",{value:3,children:"Low"})]}),T.priority&&Object(o.jsx)("div",{className:"invalid-feedback",children:T.priority})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsxs)("select",{className:R()("form-control form-control-lg",{"is-invalid":T.status}),name:"status",value:p,onChange:B,children:[Object(o.jsx)("option",{value:"",children:"Select Status"}),Object(o.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(o.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(o.jsx)("option",{value:"DONE",children:"DONE"})]}),T.status&&Object(o.jsx)("div",{className:"invalid-feedback",children:T.status})]}),Object(o.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}));var $=Object(j.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(){var c=Object(b.a)(u.a.mark((function c(r){var s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,p.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:return s=c.sent,r({type:g,payload:s.data}),console.log("teleiose"),c.abrupt("return",s);case 9:c.prev=9,c.t0=c.catch(0),console.log(c.t0),a.push("/dashboard");case 13:case"end":return c.stop()}}),c,null,[[0,9]])})));return function(e){return c.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,c){return function(){var r=Object(b.a)(u.a.mark((function r(s){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.sent,c.push("/projectBoard/".concat(e)),s({type:O,payload:{}}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),s({type:O,payload:r.t0.response.data});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=Object(c.useState)(e.project_task.id),a=Object(_.a)(t,2),r=a[0],s=(a[1],Object(c.useState)(e.project_task.sequence)),n=Object(_.a)(s,2),l=(n[0],n[1],Object(c.useState)("")),j=Object(_.a)(l,2),d=j[0],m=j[1],p=Object(c.useState)(""),O=Object(_.a)(p,2),h=O[0],v=O[1],f=Object(c.useState)(""),x=Object(_.a)(f,2),g=x[0],N=x[1],y=Object(c.useState)(""),k=Object(_.a)(y,2),w=k[0],S=k[1],D=Object(c.useState)(""),P=Object(_.a)(D,2),C=P[0],T=P[1],I=Object(c.useState)(e.project_task.identifier),B=Object(_.a)(I,2),U=B[0],A=(B[1],Object(c.useState)(e.project_task.createdAt)),L=Object(_.a)(A,2),G=L[0],q=(L[1],Object(c.useState)({})),F=Object(_.a)(q,2),J=F[0],M=F[1],H=Object(E.g)(),X=H.id,K=H.sequence,V=function(){var t=Object(b.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getProjectTask(X,K,e.history);case 2:a=t.sent,m(a.data.summary),v(a.data.acceptanceCriteria),T(a.data.dueDate),S(a.data.priority),N(a.data.status);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){V()}),[]),Object(c.useEffect)((function(){M(e.errors)}),[e.errors]);var z=function(e){switch(e.target.name){case"summary":m(e.target.value);break;case"acceptanceCriteria":v(e.target.value);break;case"dueDate":T(e.target.value);break;case"status":N(e.target.value);break;case"priority":S(e.target.value)}};return Object(o.jsx)("div",{className:"add-PBI",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-8 m-auto",children:[Object(o.jsx)(i.b,{to:"/projectBoard/".concat(U),className:"btn btn-light",children:"Back to Project Board"}),Object(o.jsx)("h4",{className:"display-4 text-center",children:"Update Project Task"}),Object(o.jsxs)("p",{className:"lead text-center",children:["Project Name: ",X," || Project Task ID: ",K]}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={id:r,sequence:K,summary:d,acceptanceCriteria:h,status:g,priority:w,dueDate:C,identifier:U,createdAt:G};e.updateProjectTask(U,K,a,e.history)},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg",{"is-invalid":J.summary}),name:"summary",placeholder:"Project Task summary",value:d,onChange:z}),J.summary&&Object(o.jsx)("div",{className:"invalid-feedback",children:J.summary})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsx)("textarea",{className:R()("form-control form-control-lg",{"is-invalid":J.acceptanceCriteria}),placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:h,onChange:z}),J.acceptanceCriteria&&Object(o.jsx)("div",{className:"invalid-feedback",children:J.acceptanceCriteria})]}),Object(o.jsx)("h6",{className:"mt-3",children:"Due Date"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"date",className:R()("form-control form-control-lg",{"is-invalid":J.dueDate}),name:"dueDate",value:C,onChange:z}),J.dueDate&&Object(o.jsx)("div",{className:"invalid-feedback",children:J.dueDate})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsxs)("select",{className:R()("form-control form-control-lg",{"is-invalid":J.priority}),name:"priority",value:w,onChange:z,children:[Object(o.jsx)("option",{value:0,children:"Select Priority"}),Object(o.jsx)("option",{value:1,children:"High"}),Object(o.jsx)("option",{value:2,children:"Medium"}),Object(o.jsx)("option",{value:3,children:"Low"})]}),J.priority&&Object(o.jsx)("div",{className:"invalid-feedback",children:J.priority})]}),Object(o.jsxs)("div",{className:"form-group mt-3",children:[Object(o.jsxs)("select",{className:R()("form-control form-control-lg",{"is-invalid":J.status}),name:"status",value:g,onChange:z,children:[Object(o.jsx)("option",{value:"",children:"Select Status"}),Object(o.jsx)("option",{value:"TO_DO",children:"TO DO"}),Object(o.jsx)("option",{value:"IN_PROGRESS",children:"IN PROGRESS"}),Object(o.jsx)("option",{value:"DONE",children:"DONE"})]}),J.status&&Object(o.jsx)("div",{className:"invalid-feedback",children:J.status})]}),Object(o.jsx)("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})]})]})})})})}));var ee=Object(j.b)((function(e){return{security:e.security}}))((function(e){return Object(c.useEffect)((function(){e.security.validToken&&e.history.push("/dashboard")}),[e.security]),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"landing",children:Object(o.jsx)("div",{className:"light-overlay landing-inner text-dark",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-12 text-center",children:[Object(o.jsx)("h1",{className:"display-3 mb-4",children:"Personal Project Management Tool"}),Object(o.jsx)("p",{className:"lead",children:"Create your account to join active projects or start your own"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"row flex-column flex-md-row justify-content-md-around",children:[Object(o.jsx)(i.b,{to:"/register",className:"btn btn-lg btn-primary mr-4 col-8 col-md-2 mx-auto mx-md-0 mb-2 mb-md-0",children:"Sign Up"}),Object(o.jsx)(i.b,{to:"/login",className:"btn btn-lg btn-secondary col-8 col-md-2 mx-auto mx-md-0",children:"Login"})]})]})})})})})})}));var te=Object(j.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(){var a=Object(b.a)(u.a.mark((function a(c){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.post("/api/users/register",e);case 3:t.push("/login"),c({type:O,payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),c({type:O,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=Object(c.useState)(""),a=Object(_.a)(t,2),r=a[0],s=a[1],n=Object(c.useState)(""),i=Object(_.a)(n,2),l=i[0],j=i[1],d=Object(c.useState)(""),u=Object(_.a)(d,2),b=u[0],m=u[1],p=Object(c.useState)(""),O=Object(_.a)(p,2),h=O[0],v=O[1],f=Object(c.useState)({}),x=Object(_.a)(f,2),g=x[0],N=x[1];Object(c.useEffect)((function(){N(e.errors)}),[e.errors]),Object(c.useEffect)((function(){e.security.validToken&&e.history.push("/dashboard")}),[e.security]);var y=function(e){switch(e.target.name){case"username":s(e.target.value);break;case"fullName":j(e.target.value);break;case"password":m(e.target.value);break;case"confirmPassword":v(e.target.value)}};return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"register",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-10 col-md-8 m-auto",children:[Object(o.jsx)("h1",{className:"display-4 text-center",children:"Sign Up"}),Object(o.jsx)("p",{className:"lead text-center",children:"Create your Account"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={username:r,fullName:l,password:b,confirmPassword:h};e.createNewUser(a,e.history)},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg",{"is-invalid":g.fullName}),placeholder:"Full Name",name:"fullName",value:l,onChange:y}),g.fullName&&Object(o.jsx)("div",{className:"invalid-feedback",children:g.fullName})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg mt-4",{"is-invalid":g.username}),placeholder:"Email Address (Username)",name:"username",value:r,onChange:y}),g.username&&Object(o.jsx)("div",{className:"invalid-feedback",children:g.username})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"password",className:R()("form-control form-control-lg mt-4",{"is-invalid":g.password}),placeholder:"Password",name:"password",value:b,onChange:y}),g.password&&Object(o.jsx)("div",{className:"invalid-feedback",children:g.password})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"password",className:R()("form-control form-control-lg mt-4",{"is-invalid":g.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:h,onChange:y}),g.confirmPassword&&Object(o.jsx)("div",{className:"invalid-feedback",children:g.confirmPassword})]}),Object(o.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})})}));var ae=Object(j.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var c,r,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.post("/api/users/login",e);case 3:c=t.sent,r=c.data.token,localStorage.setItem("jwtToken",r),D(r),s=Object(P.a)(r),a({type:y,payload:s}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:O,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(c.useState)(""),a=Object(_.a)(t,2),r=a[0],s=a[1],n=Object(c.useState)(""),i=Object(_.a)(n,2),l=i[0],j=i[1],d=Object(c.useState)({}),u=Object(_.a)(d,2),b=u[0],m=u[1];Object(c.useEffect)((function(){e.security.validToken&&e.history.push("/dashboard")}),[e.security]),Object(c.useEffect)((function(){m(e.errors)}),[e.errors]);var p=function(e){switch(e.target.name){case"username":s(e.target.value);break;case"password":j(e.target.value)}};return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"login",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-10 col-md-8 m-auto",children:[Object(o.jsx)("h1",{className:"display-4 text-center",children:"Log In"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={username:r,password:l};e.login(a)},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"text",className:R()("form-control form-control-lg mt-4",{"is-invalid":b.username}),placeholder:"Username",name:"username",value:r,onChange:p}),b.username&&Object(o.jsx)("div",{className:"invalid-feedback",children:b.username})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"password",className:R()("form-control form-control-lg mt-4",{"is-invalid":b.password}),placeholder:"Password",name:"password",value:l,onChange:p}),b.password&&Object(o.jsx)("div",{className:"invalid-feedback",children:b.password})]}),Object(o.jsx)("input",{type:"submit",className:"btn btn-info btn-block mt-4"})]})]})})})})})})),ce=a(36),re=Object(j.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,c=Object(ce.a)(e,["component","security"]);return Object(o.jsx)(E.b,Object(L.a)(Object(L.a)({},c),{},{render:function(e){return!0===a.validToken?Object(o.jsx)(t,Object(L.a)({},e)):Object(o.jsx)(E.a,{to:"/login"})}}))})),se=localStorage.jwtToken;if(se){D(se);var ne=Object(P.a)(se);V.dispatch({type:y,payload:ne});var ie=Date.now()/1e3;ne.exp<ie&&(V.dispatch(C()),window.location.href="/")}var oe=function(){return Object(o.jsx)(j.a,{store:V,children:Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(T,{}),Object(o.jsx)(E.b,{exact:!0,path:"/",component:ee}),Object(o.jsx)(E.b,{exact:!0,path:"/register",component:te}),Object(o.jsx)(E.b,{exact:!0,path:"/login",component:ae}),Object(o.jsxs)(E.d,{children:[Object(o.jsx)(re,{exact:!0,path:"/dashboard",component:S}),Object(o.jsx)(re,{exact:!0,path:"/addProject",component:B}),Object(o.jsx)(re,{exact:!0,path:"/updateProject/:id",component:z}),Object(o.jsx)(re,{exact:!0,path:"/projectBoard/:id",component:Q}),Object(o.jsx)(re,{exact:!0,path:"/addProjectTask/:id",component:Z}),Object(o.jsx)(re,{exact:!0,path:"/updateProjectTask/:id/:sequence",component:$})]})]})})})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),r(e),s(e),n(e)}))};n.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(oe,{})}),document.getElementById("root")),le()}},[[69,1,2]]]);
//# sourceMappingURL=main.eee4cea3.chunk.js.map