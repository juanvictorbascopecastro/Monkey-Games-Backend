import{_ as U,r as n,o as d,e as h,w as o,a as e,b as i,t as g,d as c,T as w,c as D,j as b,Q as F,m as E,K as H,S as K,F as L,i as R,I as j}from"./index-67878955.js";import{e as z}from"./input-45862cdb.js";import{I as O}from"./InputPhone-0f6203d5.js";import{d as G}from"./user-account-441e03f2.js";const Q={emits:["visible"],props:{visible:{type:Boolean,default:!1},user:{type:Object,default:null}},data(){return{inputData:{id:null,name:null,lastName:null,email:null,ci:null,phone:null,password:null,rol:"cajero"},validateForm:null,dataPhone:null,submited:!1}},methods:{async Validate(t){var k;if(t.preventDefault(),t.currentTarget.checkValidity()===!1&&(t.preventDefault(),t.stopPropagation()),this.submited=!0,!this.inputData.name){this.changueFocus("name");return}if(!this.inputData.email){this.changueFocus("email");return}if(!this.inputData.password&&!this.user){this.changueFocus("password");return}if((k=this.dataPhone)!=null&&k.number){if(!this.dataPhone.isValid||!this.dataPhone.number){this.changueFocus("phone");return}if(!this.dataPhone.number.includes("+")){const l="+"+this.dataPhone.country+this.dataPhone.number;this.inputData.phone=l}}let u;this.user?u=await this.$store.dispatch("user/update",this.inputData):u=await this.$store.dispatch("user/create",this.inputData),u&&(this.$emit("visible",!1),this.setData(null))},changueFocus(t){const s=z("form-user",t);s&&s.focus()},setData(t=null){if(!t){this.inputData={id:null,name:null,lastName:null,email:null,ci:null,phone:null,password:null,rol:"cajero"},this.dataPhone=null;return}t!=null&&t.id&&(this.inputData.id=t.id),t!=null&&t.name&&(this.inputData.name=t.name),t!=null&&t.lastName&&(this.inputData.lastName=t.lastName),t!=null&&t.phone&&(this.inputData.phone=t.phone,this.dataPhone={number:t.phone,isValid:!0}),t!=null&&t.doc&&(this.inputData.doc=t.doc),t!=null&&t.email&&(this.inputData.email=t.email),t!=null&&t.rol&&(this.inputData.rol=t.rol)}},watch:{user:{immediate:!0,handler(t){this.setData(t)}}},components:{InputPhone:O}},J={class:"row g-3"},W=c("span",{class:"text-danger"},"*",-1),X={key:0,class:"invalid-text"},Y=c("span",{class:"text-danger"},"*",-1),Z=c("span",{class:"text-danger"},"*",-1),$=c("option",{value:"cajero"},"Cajero",-1),ee=c("option",{value:"admin"},"Administrador",-1),te={key:0,class:"invalid-text"},oe={key:0,class:"invalid-text"},se=c("span",{class:"text-danger"},"*",-1),le={key:0,class:"invalid-text"},ne=c("span",{class:"text-danger"},"*",-1),ae={key:0,class:"invalid-text"};function ie(t,s,u,k,l,p){const y=n("CModalTitle"),v=n("CModalHeader"),C=n("CFormLabel"),m=n("CFormInput"),f=n("CCol"),B=n("CFormSelect"),I=n("InputPhone"),_=n("CModalBody"),N=n("CButton"),P=n("CIcon"),V=n("CModalFooter"),T=n("CForm"),x=n("CModal");return d(),h(x,{alignment:"center",visible:u.visible,backdrop:"static",onClose:s[13]||(s[13]=()=>{t.$emit("visible",!1)})},{default:o(()=>[e(T,{class:"needs-validation",novalidate:"",validated:l.validateForm,onSubmit:F(p.Validate,["prevent"]),id:"form-user"},{default:o(()=>[e(v,null,{default:o(()=>[e(y,null,{default:o(()=>[i(g(u.user?"Editar usuario":"Agregar nuevo usuario"),1)]),_:1})]),_:1}),e(_,null,{default:o(()=>[c("div",J,[e(f,{md:6},{default:o(()=>[e(C,{for:"validateForm",class:"mb-0"},{default:o(()=>[i("Nombre de usuario "),W]),_:1}),e(m,{id:"validateForm",modelValue:l.inputData.name,"onUpdate:modelValue":s[0]||(s[0]=r=>l.inputData.name=r),required:"",type:"text",name:"name",onKeydown:s[1]||(s[1]=w(F(r=>p.changueFocus("lastName"),["prevent"]),["enter"]))},null,8,["modelValue"]),l.submited&&!l.inputData.name?(d(),D("div",X," El nombre del usuario es requerido! ")):b("",!0)]),_:1}),e(f,{md:6},{default:o(()=>[e(C,{for:"validateForm",class:"mb-0"},{default:o(()=>[i("Apellido "),Y]),_:1}),e(m,{id:"validateForm",modelValue:l.inputData.lastName,"onUpdate:modelValue":s[2]||(s[2]=r=>l.inputData.lastName=r),type:"text",name:"lastName",onKeydown:s[3]||(s[3]=w(F(r=>p.changueFocus("rol"),["prevent"]),["enter"]))},null,8,["modelValue"])]),_:1}),e(f,{md:12},{default:o(()=>[e(C,{for:"validateForm",class:"mb-0"},{default:o(()=>[i("Rol "),Z]),_:1}),e(B,{feedbackInvalid:"Please select a valid state.",id:"validationCustom04",name:"rol",modelValue:l.inputData.rol,"onUpdate:modelValue":s[4]||(s[4]=r=>l.inputData.rol=r),required:""},{default:o(()=>[$,ee]),_:1},8,["modelValue"]),l.submited&&!l.inputData.rol?(d(),D("div",te," El rol de usuario es requerido! ")):b("",!0)]),_:1}),e(f,{sm:12,md:6},{default:o(()=>[e(C,{for:"validateForm",class:"mb-0"},{default:o(()=>[i("Numero de carnet")]),_:1}),e(m,{id:"validateForm",modelValue:l.inputData.ci,"onUpdate:modelValue":s[5]||(s[5]=r=>l.inputData.ci=r),type:"text",name:"ci",onKeydown:s[6]||(s[6]=w(F(r=>p.changueFocus("phone"),["prevent"]),["enter"]))},null,8,["modelValue"])]),_:1}),e(f,{sm:12,md:6},{default:o(()=>[e(I,{value:l.dataPhone,onSetValue:s[7]||(s[7]=r=>l.dataPhone=r),onKeypress:s[8]||(s[8]=w(F(r=>p.changueFocus("email"),["prevent"]),["enter"]))},null,8,["value"]),l.submited&&l.dataPhone&&!l.dataPhone.isValid?(d(),D("div",oe," El numero de telefono no es valido! ")):b("",!0)]),_:1}),e(f,{md:12},{default:o(()=>[e(C,{for:"validateForm",class:"mb-0"},{default:o(()=>[i("Correo electronico "),se]),_:1}),e(m,{id:"validateForm",modelValue:l.inputData.email,"onUpdate:modelValue":s[9]||(s[9]=r=>l.inputData.email=r),required:!u.user,disabled:!!u.user,type:"email",name:"email",onKeydown:s[10]||(s[10]=w(F(r=>p.changueFocus("password"),["prevent"]),["enter"]))},null,8,["modelValue","required","disabled"]),!u.user&&l.submited&&!l.inputData.email?(d(),D("div",le," El email es requerido! ")):b("",!0)]),_:1}),e(f,{md:12},{default:o(()=>[e(C,{for:"validateForm",class:"mb-0"},{default:o(()=>[i("Contraseña "),ne]),_:1}),e(m,{id:"validateForm",modelValue:l.inputData.password,"onUpdate:modelValue":s[11]||(s[11]=r=>l.inputData.password=r),required:!u.user,disabled:!!u.user,type:"password",name:"password"},null,8,["modelValue","required","disabled"]),!u.user&&l.submited&&!l.inputData.password?(d(),D("div",ae," La contraseña es requerido! ")):b("",!0)]),_:1})])]),_:1}),e(V,null,{default:o(()=>[e(N,{color:"secondary",type:"button",onClick:s[12]||(s[12]=r=>t.$emit("visible",!1))},{default:o(()=>[i(" Cerrar ")]),_:1}),e(N,{color:"primary",type:"submit"},{default:o(()=>[e(P,{icon:"cil-save"}),i(" Guardar ")]),_:1})]),_:1})]),_:1},8,["validated","onSubmit"])]),_:1},8,["visible"])}const re=U(Q,[["render",ie]]),de={components:{AddUser:re},data(){return{modalVisible:!1,paramsSelected:null,defaultImgUser:G}},computed:{...E("user",["list"])},mounted(){this.list.length<=0&&this.loadData()},methods:{...H("user",["loadData"]),getPermissions(t,s){const u=this.$store.getters["auth/getUser"]();return s.rol==="admin"?u.id!==s.id:!t.includes(u.rol)},setItem(t){if(this.$store.getters["auth/getUser"]().id===t.id){this.$router.push({name:"perfil"});return}this.modalVisible=!0,setTimeout(()=>{this.paramsSelected=t},300)},msgDelete(t){K.fire({title:`¿Desea eliminar el usuario ${t.name} ${t.lastName||""}?`,icon:"question",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#bdbdbd",confirmButtonText:"ELIMINAR",cancelButtonText:"CANCELAR"}).then(s=>{s.isConfirmed&&this.$store.dispatch("user/remove",t.id)})}}},ue={class:"row"},ce={class:"col"},me={class:"row"},pe=c("div",{class:"col col-sm-6"},[c("h4",{class:"mt-1"},[c("strong",null,"USUARIOS")])],-1),fe={class:"col col-sm-6 text-end"},_e=c("h6",null,"No hay registros!",-1),he={class:"col col-12"};function Ce(t,s,u,k,l,p){const y=n("CIcon"),v=n("CButton"),C=n("CCardHeader"),m=n("CTableHeaderCell"),f=n("CTableRow"),B=n("CTableHead"),I=n("CAvatar"),_=n("CTableDataCell"),N=n("CFormSwitch"),P=n("CBadge"),V=n("CTableBody"),T=n("CSpinner"),x=n("CTable"),r=n("CCardBody"),M=n("CCard"),q=n("add-user");return d(),D("div",ue,[c("div",ce,[e(M,{class:"mb-4"},{default:o(()=>[e(C,null,{default:o(()=>{var a;return[c("div",me,[pe,c("div",fe,[((a=t.$store.getters["auth/getUser"]())==null?void 0:a.rol)==="admin"?(d(),h(v,{key:0,color:"primary",size:"md",class:"me-1",onClick:s[0]||(s[0]=A=>{l.paramsSelected=null,l.modalVisible=!0})},{default:o(()=>[e(y,{icon:"cil-plus",class:"me-2"}),i(" Nuevo ")]),_:1})):b("",!0)])])]}),_:1}),e(r,null,{default:o(()=>[e(x,{responsive:""},{default:o(()=>[e(B,null,{default:o(()=>[e(f,null,{default:o(()=>[e(m,{class:"text-center"},{default:o(()=>[e(y,{name:"cil-people"})]),_:1}),e(m,{scope:"col"},{default:o(()=>[i("Nombre")]),_:1}),e(m,{scope:"col"},{default:o(()=>[i("Correo")]),_:1}),e(m,{scope:"col"},{default:o(()=>[i("Celular")]),_:1}),e(m,{scope:"col"},{default:o(()=>[i("Doc. Identidad")]),_:1}),e(m,{scope:"col"},{default:o(()=>[i("Acceso al sistema")]),_:1}),e(m,{scope:"col"},{default:o(()=>[i("Rol")]),_:1}),e(m,{scope:"col"},{default:o(()=>[i("Acciones")]),_:1})]),_:1})]),_:1}),t.list.length>0?(d(),h(V,{key:0},{default:o(()=>[(d(!0),D(L,null,R(t.list,(a,A)=>(d(),h(f,{key:A},{default:o(()=>[e(_,{class:"text-center"},{default:o(()=>[e(I,{size:"md",src:l.defaultImgUser},null,8,["src"])]),_:1}),e(_,{scope:"row"},{default:o(()=>[i(g(a.name)+" "+g(a.lastName),1)]),_:2},1024),e(_,null,{default:o(()=>[i(g(a.email),1)]),_:2},1024),e(_,null,{default:o(()=>[i(g(a.phone),1)]),_:2},1024),e(_,null,{default:o(()=>[i(g(a.doc),1)]),_:2},1024),e(_,{class:j([a.rol?"":"pt-1 pb-1"])},{default:o(()=>[a.rol?(d(),h(N,{key:0,disabled:p.getPermissions(["admin"],a),label:a.active?"Activo":"Inactivo",id:"formSwitchCheckDefault",onChange:S=>t.onActive(S,a),checked:a.active},null,8,["disabled","label","onChange","checked"])):(d(),h(v,{key:1,color:"info",class:"m-0",disabled:p.getPermissions(["admin"],a),onClick:S=>t.activeUser(a)},{default:o(()=>[i("Activar")]),_:2},1032,["disabled","onClick"]))]),_:2},1032,["class"]),e(_,null,{default:o(()=>[a.rol?(d(),h(P,{key:0,color:a.rol==="admin"?"info":"dark"},{default:o(()=>[i(g(a.rol),1)]),_:2},1032,["color"])):b("",!0),a.rol?b("",!0):(d(),h(P,{key:1,color:"danger"},{default:o(()=>[i("SIN ACCESO")]),_:1}))]),_:2},1024),e(_,null,{default:o(()=>[e(v,{color:"info",size:"sm",class:"me-1",disabled:p.getPermissions(["admin"],a),onClick:S=>p.setItem(a)},{default:o(()=>[e(y,{icon:"cil-pencil"})]),_:2},1032,["disabled","onClick"]),e(v,{color:"danger",size:"sm",onClick:S=>p.msgDelete(a),disabled:p.getPermissions(["admin"],a)},{default:o(()=>[e(y,{icon:"cil-trash"})]),_:2},1032,["onClick","disabled"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):t.$store.state.user.isLoading?(d(),h(V,{key:1},{default:o(()=>[e(f,null,{default:o(()=>[e(_,{colspan:"8",class:"text-center p-4"},{default:o(()=>[e(T,{color:"primary"})]),_:1})]),_:1})]),_:1})):(d(),h(V,{key:2},{default:o(()=>[e(f,null,{default:o(()=>[e(_,{colspan:"8",class:"text-center p-4"},{default:o(()=>[_e]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})]),c("div",he,[e(q,{visible:l.modalVisible,user:l.paramsSelected,onVisible:s[1]||(s[1]=a=>{l.modalVisible=a,l.paramsSelected=null})},null,8,["visible","user"])])])}const ve=U(de,[["render",Ce]]);export{ve as default};
