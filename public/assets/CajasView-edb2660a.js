import{m as y,K as V,_ as w,r as o,o as m,e as B,w as s,a as t,b as d,d as l,Q as $,c as v,i as k,F as S,P as j,t as I,S as E,j as L,L as H,M as q}from"./index-2006f269.js";import{e as z}from"./input-45862cdb.js";const K={emits:["visible"],props:{visible:{type:Boolean,default:!1},caja:{type:Object,default:null}},data(){return{inputData:{name:null,details:null,idUsers:null},validateForm:null}},mounted(){this.list.length<=0&&this.loadData()},computed:{...y("user",["list"])},methods:{...V("user",["loadData"]),async Validate(e){if(e.preventDefault(),e.currentTarget.checkValidity()===!1&&(e.preventDefault(),e.stopPropagation()),this.validateForm=!0,!this.inputData.name)return;let u;this.caja?u=await this.$store.dispatch("caja/update",this.inputData):u=await this.$store.dispatch("caja/create",this.inputData),u&&(this.validateForm=!1,this.$emit("visible",!1))},changueFocus(e){const a=z("form-caja",e);a&&a.focus()},setData(e=null){if(this.validateForm=!1,!e){this.inputData={id:null,name:null,description:null,idUsers:null};return}e.id&&(this.inputData.id=e.id),e.name&&(this.inputData.name=e.name),e.description&&(this.inputData.description=e.description),e.idUsers&&(this.inputData.idUsers=e.idUsers)}},watch:{caja:{immediate:!0,handler(e){this.setData(e)}}}},R={class:"row g-3"},G=l("span",{class:"text-danger"},"*",-1),J=l("option",{value:"ninguno"},"Ninguno!",-1),O=["value"];function Q(e,a,u,M,n,r){const _=o("CModalTitle"),p=o("CModalHeader"),f=o("CFormLabel"),h=o("CFormInput"),b=o("CFormFeedback"),C=o("CCol"),c=o("CFormSelect"),F=o("CFormTextarea"),g=o("CModalBody"),D=o("CButton"),U=o("CIcon"),N=o("CModalFooter"),A=o("CForm"),T=o("CModal");return m(),B(T,{alignment:"center",visible:u.visible,backdrop:"static",onClose:a[5]||(a[5]=()=>{e.$emit("visible",!1)})},{default:s(()=>[t(A,{class:"needs-validation",novalidate:"",validated:n.validateForm,onSubmit:j(r.Validate,["prevent"]),id:"form-caja"},{default:s(()=>[t(p,null,{default:s(()=>[t(_,null,{default:s(()=>[d("Registrar caja ")]),_:1})]),_:1}),t(g,null,{default:s(()=>[l("div",R,[t(C,{md:12},{default:s(()=>[t(f,{for:"validateForm",class:"mb-0"},{default:s(()=>[d("Numero de caja "),G]),_:1}),t(h,{id:"validateForm",modelValue:n.inputData.name,"onUpdate:modelValue":a[0]||(a[0]=i=>n.inputData.name=i),required:"",type:"text",name:"name",onKeydown:a[1]||(a[1]=$(j(i=>r.changueFocus("idUsers"),["prevent"]),["enter"]))},null,8,["modelValue"]),t(b,{invalid:""},{default:s(()=>[d(" El numero de caja es requerido! ")]),_:1})]),_:1}),t(C,{md:12},{default:s(()=>[t(f,{for:"validateForm",class:"mb-0"},{default:s(()=>[d("Asignar responsable")]),_:1}),t(c,{feedbackInvalid:"Please select a valid state.",id:"validateForm",name:"idUsers",modelValue:n.inputData.idUsers,"onUpdate:modelValue":a[2]||(a[2]=i=>n.inputData.idUsers=i)},{default:s(()=>[J,(m(!0),v(S,null,k(e.list,(i,P)=>(m(),v("option",{key:P,value:i.id},I(i.name),9,O))),128))]),_:1},8,["modelValue"])]),_:1}),t(C,{md:12},{default:s(()=>[t(f,{for:"validateForm",class:"mb-0"},{default:s(()=>[d("Detalles ")]),_:1}),t(F,{id:"validateForm",modelValue:n.inputData.details,"onUpdate:modelValue":a[3]||(a[3]=i=>n.inputData.details=i),placeholder:"Detalles de caja...",name:"come",rows:"2"},null,8,["modelValue"])]),_:1})])]),_:1}),t(N,null,{default:s(()=>[t(D,{color:"secondary",type:"button",onClick:a[4]||(a[4]=i=>e.$emit("visible",!1))},{default:s(()=>[d(" Cerrar ")]),_:1}),t(D,{color:"primary",type:"submit"},{default:s(()=>[t(U,{icon:"cil-save"}),d(" Guardar ")]),_:1})]),_:1})]),_:1},8,["validated","onSubmit"])]),_:1},8,["visible"])}const W=w(K,[["render",Q]]),X="/assets/cashier-932de284.png";const Y={components:{AddCaja:W},data(){return{modalVisible:!1,paramsSelected:null}},computed:{...y("caja",["list"])},mounted(){},methods:{...V("caja",["loadData"]),setItem(e){this.paramsSelected=e,this.modalVisible=!0},msgDelete(e){E.fire({title:`¿Desea eliminar ${e.name} ${e.lastName||""}?`,icon:"question",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#bdbdbd",confirmButtonText:"ELIMINAR",cancelButtonText:"CANCELAR"}).then(a=>{a.isConfirmed&&this.$store.dispatch("caja/remove",e.id)})},getPermissions(e){const a=this.$store.getters["auth/getUser"]();return!e.includes(a.rol)}}},x=e=>(H("data-v-2267d472"),e=e(),q(),e),Z={class:"row"},ee={class:"col col-12"},te={class:"row"},ae=x(()=>l("div",{class:"col col-sm-6"},[l("h4",{class:"mt-1"},[l("strong",null,"CAJAS")])],-1)),se={class:"col col-sm-6 text-end"},oe={class:"row justify-content-md-center"},le={class:"card"},ne=x(()=>l("img",{class:"caja-image",src:X},null,-1)),ie={class:"card-body"},de={class:"card-text text-center mb-3 pt-0"},re={class:"text-end"},ce={class:"col col-12"};function me(e,a,u,M,n,r){const _=o("CIcon"),p=o("CButton"),f=o("CCardHeader"),h=o("CCardBody"),b=o("CCard"),C=o("add-caja");return m(),v("div",Z,[l("div",ee,[t(b,{class:"mb-4"},{default:s(()=>[t(f,null,{default:s(()=>[l("div",te,[ae,l("div",se,[r.getPermissions(["admin"])?L("",!0):(m(),B(p,{key:0,color:"primary",size:"md",class:"me-1",onClick:a[0]||(a[0]=c=>{n.modalVisible=!0,n.paramsSelected=null})},{default:s(()=>[t(_,{icon:"cil-plus",class:"me-2"}),d(" Nuevo ")]),_:1}))])])]),_:1}),t(h,null,{default:s(()=>[l("div",oe,[(m(!0),v(S,null,k(e.list,(c,F)=>(m(),v("div",{key:F,class:"col-12 col-sm-6 col-md-4 col-lg-3"},[l("div",le,[ne,l("div",ie,[l("h4",de,I(c.name),1),l("div",re,[t(p,{color:"info",size:"sm",class:"me-1",disabled:r.getPermissions(["admin"]),onClick:g=>r.setItem(c)},{default:s(()=>[t(_,{icon:"cil-pencil",class:"me-2"}),d(" Editar ")]),_:2},1032,["disabled","onClick"]),t(p,{color:"danger",size:"sm",class:"me-1",disabled:r.getPermissions(["admin"]),onClick:g=>r.msgDelete(c)},{default:s(()=>[t(_,{icon:"cil-trash",class:"me-2"}),d(" Eliminar ")]),_:2},1032,["disabled","onClick"])])])])]))),128))])]),_:1})]),_:1})]),l("div",ce,[t(C,{visible:n.modalVisible,onVisible:a[1]||(a[1]=c=>{n.modalVisible=c,n.paramsSelected=null}),caja:n.paramsSelected},null,8,["visible","caja"])])])}const pe=w(Y,[["render",me],["__scopeId","data-v-2267d472"]]);export{pe as default};
