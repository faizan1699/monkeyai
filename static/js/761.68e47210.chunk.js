"use strict";(self.webpackChunkai_ai=self.webpackChunkai_ai||[]).push([[761],{4761:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(2791),l=a(7689),n=a(1087),d=a(184);const o=()=>{const e=(0,l.s0)(),[s,a]=(0,t.useState)(!1),[o,i]=(0,t.useState)(""),[c,r]=(0,t.useState)(""),[m,u]=(0,t.useState)(0),[p,x]=(0,t.useState)(""),[h,f]=(0,t.useState)(""),[g,j]=(0,t.useState)("password"),[b,w]=(0,t.useState)(""),[N,v]=(0,t.useState)({email:"",password:""}),y=e=>{const{name:s,value:a}=e.target;v((e=>({...e,[s]:a})))};return(0,d.jsx)("div",{className:"ms-md-5",style:{marginTop:"5%"},children:(0,d.jsx)("div",{className:"d-flex justify-content-center",children:(0,d.jsxs)("div",{className:"col-md-4 col-10 col-lg-4",children:[(0,d.jsx)("h2",{className:"mb-3 text-center text-success text-uppercase mt-3",children:"Login - Monkey-Ai"}),(0,d.jsx)("div",{className:"small text-center text-danger mb-3",children:b}),(0,d.jsxs)("form",{onSubmit:s=>{s.preventDefault();const t=localStorage.getItem("employeLogin"),l=JSON.parse(t)||[],n=l.find((e=>e.email===N.email)),d=l.find((e=>e.password===N.password)),o=l.find((e=>e.email===N.email&&e.password===N.password));n||d?d?n?(e("/dashboard"),localStorage.setItem("employeLogindata",JSON.stringify(o)),sessionStorage.setItem("token",!0)):(i("Invalid Email"),r("danger"),setTimeout((()=>{i(""),r("")}),5e3)):(x("Invalid Password"),f("danger"),setTimeout((()=>{x(""),f("")}),5e3)):(w("data not found"),u(m+1),m>=3&&a(!0),setTimeout((()=>{w("")}),5e3))},children:[(0,d.jsxs)("div",{className:"form-floating mb-2",children:[(0,d.jsx)("input",{type:"email",name:"email",value:N.email,onChange:y,className:"form-control rounded-0 border-".concat(c),id:"floatingInput",placeholder:"name@example.com"}),(0,d.jsx)("div",{className:"d-flex justify-content-end text-danger small",children:o}),(0,d.jsx)("label",{htmlFor:"floatingInput",children:"Email address"})]}),(0,d.jsxs)("div",{className:"form-floating",children:[(0,d.jsx)("input",{type:g,min:"4",name:"password",value:N.password,onChange:y,className:"form-control rounded-0 border-".concat(h),id:"floatingPassword",autoComplete:"on",placeholder:"Password"}),(0,d.jsx)("div",{className:"d-flex justify-content-end text-danger small",children:p}),(0,d.jsx)("label",{htmlFor:"floatingPassword",children:"Password"}),(0,d.jsxs)("div",{className:"d-flex justify-content-between small align-items-center me-2",children:[(0,d.jsxs)("div",{className:"mt-2 ",children:[(0,d.jsx)("input",{type:"checkbox",className:"form-check-input border-danger",id:"Checkbox",onClick:()=>{document.getElementById("Checkbox").checked?j("text"):j("password")}})," ",(0,d.jsx)("span",{className:"text-dark disabled",children:" Show password"})]}),(0,d.jsx)("div",{children:(0,d.jsx)("div",{className:"d-flex justify-content-end pe-1 mt-2",style:{cursor:"pointer"},children:(0,d.jsx)(n.rU,{to:"/signup",className:"small pe-1 fw-bold","data-toggle":"tooltip","data-placement":"top",title:"create a new Accout",children:"Create new account"})})})]})]}),(0,d.jsx)("div",{className:"my-3",children:(0,d.jsx)("button",{disabled:s,className:"btn btn-success w-100 rounded-0",type:"submit",children:"Login"})})]})]})})})}}}]);
//# sourceMappingURL=761.68e47210.chunk.js.map