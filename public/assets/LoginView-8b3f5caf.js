import{_ as F,A as I,r as o,c as k,a as e,w as t,o as B,Q as p,T as x,b as s,d as l,t as A}from"./index-0487b031.js";import{e as G}from"./input-45862cdb.js";const L={data(){return{validated:null,data:{email:null,password:null,session:!0},APP_NAME:I}},methods:{Login:function(){event.currentTarget.checkValidity()===!1&&(event.preventDefault(),event.stopPropagation()),this.validated=!0,this.data.email&&this.data.password&&this.$store.dispatch("auth/login",this.data)},changueFocus:i=>{const n=G("form-login",i);n&&n.focus()}}},N={class:"bg-light min-vh-100 d-flex flex-row align-items-center"},q=l("h1",null,"Acceso",-1),P=l("p",{class:"text-medium-emphasis"},"Inicia sesión en tu cuenta",-1),T=l("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",-1);function E(i,n,K,M,a,d){const m=o("CIcon"),_=o("CInputGroupText"),f=o("CFormInput"),C=o("CFormFeedback"),h=o("CInputGroup"),u=o("CButton"),c=o("CCol"),g=o("CRow"),y=o("CForm"),v=o("CCardBody"),w=o("CCard"),b=o("CCardGroup"),V=o("CContainer");return B(),k("div",N,[e(V,null,{default:t(()=>[e(g,{class:"justify-content-center"},{default:t(()=>[e(c,{md:8},{default:t(()=>[e(b,null,{default:t(()=>[e(w,{class:"p-4"},{default:t(()=>[e(v,null,{default:t(()=>[e(y,{id:"form-login",validated:a.validated,onSubmit:p(d.Login,["prevent"])},{default:t(()=>[q,P,e(h,{class:"mb-3"},{default:t(()=>[e(_,null,{default:t(()=>[e(m,{icon:"cil-user"})]),_:1}),e(f,{id:"email",name:"email",placeholder:"Correo electrónico...",autocomplete:"email",autofocus:"",modelValue:a.data.email,"onUpdate:modelValue":n[0]||(n[0]=r=>a.data.email=r),onKeypress:n[1]||(n[1]=x(p(r=>d.changueFocus("password"),["prevent"]),["enter"])),required:""},null,8,["modelValue"]),e(C,{invalid:""},{default:t(()=>[s(" El correo electrónico es requerida! ")]),_:1})]),_:1}),e(h,{class:"mb-4"},{default:t(()=>[e(_,null,{default:t(()=>[e(m,{icon:"cil-lock-locked"})]),_:1}),e(f,{id:"password",name:"password",type:"password",placeholder:"Contraseña...",onKeypress:x(p(d.Login,["prevent"]),["enter"]),autocomplete:"current-password",modelValue:a.data.password,"onUpdate:modelValue":n[2]||(n[2]=r=>a.data.password=r),required:""},null,8,["onKeypress","modelValue"]),e(C,{invalid:""},{default:t(()=>[s(" La contraseña es requerida! ")]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(c,{xs:6},{default:t(()=>[e(u,{color:"primary",type:"submit",class:"px-4"},{default:t(()=>[s(" Ingresar ")]),_:1})]),_:1}),e(c,{xs:6,class:"text-right"},{default:t(()=>[e(u,{color:"link",class:"px-0"},{default:t(()=>[s(" ¿Olvidó su contraseña? ")]),_:1})]),_:1})]),_:1})]),_:1},8,["validated","onSubmit"])]),_:1})]),_:1}),e(w,{class:"text-white bg-app py-5",style:{width:"44%"}},{default:t(()=>[e(v,{class:"text-center"},{default:t(()=>[l("div",null,[l("h2",null,A(a.APP_NAME),1),T,e(u,{color:"primary",variant:"outline",class:"mt-3"},{default:t(()=>[s(" Register Now! ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const D=F(L,[["render",E]]);export{D as default};
