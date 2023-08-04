import{I as B}from"./InputPhone-652e83e5.js";import{e as I}from"./input-45862cdb.js";import{_ as x,S as U,r as s,e as K,w as a,o as A,a as e,Q as d,b as l,T as c,d as _}from"./index-0487b031.js";const S={name:"perfil",data(){return{inputData:{name:null,lastName:null,phone:null,doc:null,email:null,rol:"cajero",password:null,repeatPassword:null},validateForm:null,dataPhone:null,user:null}},mounted(){this.user=this.$store.getters["auth/getUser"](),this.setData(this.user)},methods:{async Validate(n){var v;if(n.preventDefault(),n.currentTarget.checkValidity()===!1&&(n.preventDefault(),n.stopPropagation()),this.validateForm=!0,!this.inputData.name||this.dataPhone&&(!this.dataPhone.isValid||!this.dataPhone.number)||!this.inputData.email||!this.inputData.rol||this.inputData.password&&this.inputData.password!==this.inputData.repeatPassword)return;const{value:h}=await U.fire({title:"Para continuar debe ingresar su contraseña actual",input:"password",icon:"warning",confirmButtonText:"Aceptar",confirmButtonColor:"#1565c0",cancelButtonText:"Cancelar",showCancelButton:!0,inputPlaceholder:"Ingrese su contraseña actual...",inputValidator:async o=>{if(!o)return"Ingrese su contraseña actual para continuar!"}});if(h){if((v=this.dataPhone)!=null&&v.number&&!this.dataPhone.number.includes("+")){const o="+"+this.dataPhone.country+this.dataPhone.number;this.inputData.phone=o}delete this.inputData.repeatPassword,this.$store.dispatch("auth/update",{...this.inputData,passwordReal:h,id:this.user.id})}},async setData(n){n.name&&(this.inputData.name=n.name),n.lastName&&(this.inputData.lastName=n.lastName),n.phone&&(this.inputData.phone=n.phone,this.dataPhone={number:n.phone,isValid:!0}),n.doc&&(this.inputData.doc=n.doc),n.email&&(this.inputData.email=n.email),n.cargo&&(this.inputData.cargo=n.cargo),n.rol&&(this.inputData.rol=n.rol)},changueFocus(n){const t=I("form-profile",n);t&&t.focus()}},components:{InputPhone:B}},k=_("strong",null,"Perfil de usuario",-1),R=_("option",{value:"cajero"},"Cajero",-1),T=_("option",{value:"admin"},"Administrador",-1);function j(n,t,h,v,o,u){const C=s("CCardHeader"),m=s("CFormLabel"),f=s("CFormInput"),p=s("CFormFeedback"),i=s("CCol"),D=s("InputPhone"),w=s("CFormSelect"),V=s("CIcon"),F=s("CButton"),P=s("CForm"),b=s("DocsExample"),g=s("CCardBody"),y=s("CCard"),N=s("CRow");return A(),K(N,null,{default:a(()=>[e(i,{xs:12},{default:a(()=>[e(y,{class:"mb-4"},{default:a(()=>[e(C,null,{default:a(()=>[k]),_:1}),e(g,null,{default:a(()=>[e(b,null,{default:a(()=>[e(P,{class:"row g-3 needs-validation",novalidate:"",validated:o.validateForm,id:"form-profile",onSubmit:d(u.Validate,["prevent"])},{default:a(()=>[e(i,{md:6},{default:a(()=>[e(m,{for:"name",class:"mb-0"},{default:a(()=>[l("Nombre")]),_:1}),e(f,{id:"name",modelValue:o.inputData.name,"onUpdate:modelValue":t[0]||(t[0]=r=>o.inputData.name=r),required:"",autofocus:"",name:"name",type:"text",onKeypress:t[1]||(t[1]=c(d(r=>u.changueFocus("lastName"),["prevent"]),["enter"]))},null,8,["modelValue"]),e(p,{invalid:""},{default:a(()=>[l(" Nombre es requerido! ")]),_:1})]),_:1}),e(i,{md:6},{default:a(()=>[e(m,{for:"validateForm",class:"mb-0"},{default:a(()=>[l("Apellido")]),_:1}),e(f,{id:"validateForm",modelValue:o.inputData.lastName,"onUpdate:modelValue":t[2]||(t[2]=r=>o.inputData.lastName=r),name:"lastName",onKeypress:t[3]||(t[3]=c(d(r=>u.changueFocus("phone"),["prevent"]),["enter"]))},null,8,["modelValue"])]),_:1}),e(i,{md:6},{default:a(()=>[e(D,{value:o.dataPhone,onSetValue:t[4]||(t[4]=r=>o.dataPhone=r),onKeypress:t[5]||(t[5]=c(d(r=>u.changueFocus("doc"),["prevent"]),["enter"]))},null,8,["value"]),e(p,{invalid:""},{default:a(()=>[l(" Telefono es requerido! ")]),_:1})]),_:1}),e(i,{md:6},{default:a(()=>[e(m,{for:"validateForm",class:"mb-0"},{default:a(()=>[l("Documentos de identidad")]),_:1}),e(f,{id:"validateForm",modelValue:o.inputData.doc,"onUpdate:modelValue":t[6]||(t[6]=r=>o.inputData.doc=r),name:"doc",onKeypress:t[7]||(t[7]=c(d(r=>u.changueFocus(n.$store.getters["auth/getUser"].rol==="admin"?"rol":"doc"),["prevent"]),["enter"]))},null,8,["modelValue"]),e(p,{invalid:""},{default:a(()=>[l(" Documento de identidad es requerido! ")]),_:1})]),_:1}),e(i,{md:6},{default:a(()=>{var r;return[e(m,{for:"validateForm",class:"mb-0"},{default:a(()=>[l("Accesos")]),_:1}),e(w,{id:"validationCustom04",disabled:((r=o.user)==null?void 0:r.rol)!=="admin",modelValue:o.inputData.rol,"onUpdate:modelValue":t[8]||(t[8]=q=>o.inputData.rol=q),name:"rol",required:""},{default:a(()=>[R,T]),_:1},8,["disabled","modelValue"]),e(p,{invalid:""},{default:a(()=>[l(" Asignar el cargo del usuario! ")]),_:1})]}),_:1}),e(i,{md:6},{default:a(()=>[e(m,{for:"validateForm",class:"mb-0"},{default:a(()=>[l("Correo electronico")]),_:1}),e(f,{id:"validateForm",modelValue:o.inputData.email,"onUpdate:modelValue":t[9]||(t[9]=r=>o.inputData.email=r),name:"email",required:"",onKeypress:t[10]||(t[10]=c(d(r=>u.changueFocus("password"),["prevent"]),["enter"])),type:"email"},null,8,["modelValue"]),e(p,{invalid:""},{default:a(()=>[l(" Correo electronico es requerido! ")]),_:1})]),_:1}),e(i,{md:6},{default:a(()=>[e(m,{for:"validateForm",class:"mb-0"},{default:a(()=>[l("Nueva contraseña")]),_:1}),e(f,{id:"validateForm",modelValue:o.inputData.password,"onUpdate:modelValue":t[11]||(t[11]=r=>o.inputData.password=r),name:"password",required:!!(o.inputData.password&&o.inputData.password.length<6),onKeypress:t[12]||(t[12]=c(d(r=>u.changueFocus("repeatPassword"),["prevent"]),["enter"])),type:"password"},null,8,["modelValue","required"]),e(p,{invalid:""},{default:a(()=>[l(" La contraseña debe ser mayor a 6 dijitos! ")]),_:1})]),_:1}),e(i,{md:6},{default:a(()=>[e(m,{for:"validateForm",class:"mb-0"},{default:a(()=>[l("Repetir contraseña")]),_:1}),e(f,{id:"validateForm",modelValue:o.inputData.repeatPassword,"onUpdate:modelValue":t[13]||(t[13]=r=>o.inputData.repeatPassword=r),name:"repeatPassword",required:!!(o.inputData.password&&!o.inputData.repeatPassword),onKeypress:c(d(u.Validate,["prevent"]),["enter"]),type:"repeatPassword"},null,8,["modelValue","required","onKeypress"]),e(p,{invalid:""},{default:a(()=>[l(" Este campo es necesario si quiere actualizar la contraseña! ")]),_:1})]),_:1}),e(i,{md:12,align:"end",class:"mt-3"},{default:a(()=>[e(F,{color:"primary",type:"buttom",class:"ms-2",onClick:u.Validate},{default:a(()=>[e(V,{icon:"cil-save"}),l(" GUARDAR CAMBIOS ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["validated","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const M=x(S,[["render",j]]);export{M as default};
