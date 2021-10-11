(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{14:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),s=i(8),r=i.n(s),o=(i(14),i(9)),c=i(2),l=i(3),h=i(6),p=i(5),j=i(4),u=i(0),d=function(t){Object(p.a)(i,t);var e=Object(j.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.handleChange;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"General information"}),Object(u.jsx)("input",{type:"text",placeholder:"First name",name:"firstName",onChange:t}),Object(u.jsx)("input",{type:"text",placeholder:"Last Name",name:"lastName",onChange:t}),Object(u.jsx)("input",{type:"text",placeholder:"Title",name:"title",onChange:t}),Object(u.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:t}),Object(u.jsx)("input",{type:"number",placeholder:"Phone Number",name:"phoneNumber",onChange:t})]})}}]),i}(n.Component),m=d,b=function(t){Object(p.a)(i,t);var e=Object(j.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.handleChange;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Education"}),Object(u.jsx)("input",{type:"text",placeholder:"Qualifications",name:"qualifications",onChange:t}),Object(u.jsx)("input",{type:"text",placeholder:"University",name:"university",onChange:t}),Object(u.jsx)("input",{type:"date",placeholder:"From",name:"fromEducation",onChange:t}),Object(u.jsx)("input",{type:"date",placeholder:"Until",name:"untilEducation",onChange:t})]})}}]),i}(n.Component),O=b,x=function(t){Object(p.a)(i,t);var e=Object(j.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.handleChange;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Work Experience"}),Object(u.jsx)("input",{type:"text",placeholder:"Company name",name:"company",onChange:t}),Object(u.jsx)("input",{type:"text",placeholder:"Position title",name:"position",onChange:t}),Object(u.jsx)("input",{type:"text",placeholder:"Main activities",name:"activities",onChange:t}),Object(u.jsx)("input",{type:"date",placeholder:"From",name:"fromWork",onChange:t}),Object(u.jsx)("input",{type:"date",placeholder:"Until",name:"untilWork",onChange:t})]})}}]),i}(n.Component),y=x,f=function(t){Object(p.a)(i,t);var e=Object(j.a)(i);function i(){return Object(c.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props.formDisplay?"notDisplayed":"display";return Object(u.jsxs)("div",{className:t,children:[Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["First name: ",this.props.firstName]}),Object(u.jsxs)("li",{children:["Last name:",this.props.lastName]}),Object(u.jsxs)("li",{children:["Title: ",this.props.title]}),Object(u.jsxs)("li",{children:["Email: ",this.props.email]}),Object(u.jsxs)("li",{children:["Phone Number: ",this.props.phoneNumber]}),Object(u.jsxs)("li",{children:["Qualifications:",this.props.qualifications]}),Object(u.jsxs)("li",{children:["University: ",this.props.university]}),Object(u.jsxs)("li",{children:["From: ",this.props.fromEducation]}),Object(u.jsxs)("li",{children:["Until: ",this.props.untilEducation]}),Object(u.jsxs)("li",{children:["Company Name: ",this.props.company]}),Object(u.jsxs)("li",{children:["Position Title: ",this.props.position]}),Object(u.jsxs)("li",{children:["Main Activities: ",this.props.activities]}),Object(u.jsxs)("li",{children:["From: ",this.props.workFrom]}),Object(u.jsxs)("li",{children:["Until: ",this.props.workUntil]})]}),Object(u.jsx)("button",{onClick:this.props.redoForm,children:"Redo"})]})}}]),i}(n.Component),v=f,C=function(t){Object(p.a)(i,t);var e=Object(j.a)(i);function i(){var t;return Object(c.a)(this,i),(t=e.call(this)).state={firstName:"",lastName:"",title:"",email:"",phoneNumber:"",qualifications:"",university:"",fromEducation:"",untilEducation:"",company:"",position:"",activities:"",fromWork:"",untilWork:"",formDisplay:!0,cvDisplay:!1},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(h.a)(t)),t.redoForm=t.redoForm.bind(Object(h.a)(t)),t}return Object(l.a)(i,[{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState({formDisplay:!this.state.formDisplay})}},{key:"handleChange",value:function(t){this.setState(Object(o.a)({},t.target.name,t.target.value))}},{key:"redoForm",value:function(){this.setState({formDisplay:!this.state.formDisplay})}},{key:"render",value:function(){var t=this.state.formDisplay?"display":"notDisplayed";return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{className:t,onSubmit:this.handleSubmit,children:[Object(u.jsx)(m,{handleChange:this.handleChange}),Object(u.jsx)(O,{handleChange:this.handleChange}),Object(u.jsx)(y,{handleChange:this.handleChange}),Object(u.jsx)("button",{type:"submit",value:"Submit",children:"Submit"})]}),Object(u.jsx)(v,{firstName:this.state.firstName,lastName:this.state.lastName,title:this.state.title,email:this.state.email,phoneNumber:this.state.phoneNumber,qualifications:this.state.qualifications,university:this.state.university,fromEducation:this.state.fromEducation,untilEducation:this.state.untilEducation,company:this.state.company,position:this.state.position,activities:this.state.activities,fromWork:this.state.fromWork,untilWork:this.state.untilWork,formDisplay:this.state.formDisplay,redoForm:this.redoForm})]})}}]),i}(a.a.Component);var g=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(C,{})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6c2ef456.chunk.js.map