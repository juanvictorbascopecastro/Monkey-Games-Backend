import{K as q,_ as V,r as a,o as r,e as I,w as o,a as s,b as l,d as n,c as v,i as M,F as x,t as p,j as A,L as U,M as P,N as z,m as H,O as W,P as et,S as j,k as st,I as Y,Q as G,T as ot,l as nt}from"./index-67878955.js";import{a as at,c as it,b as E,d as Z,s as lt}from"./format-date-ea6389fa.js";import{w as ct,c as dt,m as rt,v as ut}from"./phone-571dee88.js";import{I as mt,A as _t}from"./AddVenta-5043bece.js";import{g as pt}from"./sockets-50f3849b.js";import"./picture-093c9837.js";import"./Paginador-d0e0f757.js";import"./user-account-441e03f2.js";import"./AddClient-f8c810cc.js";import"./input-45862cdb.js";import"./InputPhone-0f6203d5.js";const ht={emits:["visible"],props:{visible:{type:Boolean,default:!1},data:{type:Object,default:null}},data(){return{list:[],isLoading:!1}},methods:{...q("register",["loadHistory"]),getTime:at,convertDate:it,whatsapp:ct,call:dt,mail:rt},watch:{visible:{immediate:!0,async handler(t){t&&this.data&&(this.list=await this.loadHistory(this.data.id))}}},components:{vueQr:ut}},ft=t=>(U("data-v-ba21148e"),t=t(),P(),t),Ct={class:"row g-3"},vt={class:"col-12 col-md-8 col-xl-9"},gt=ft(()=>n("h6",null,"No hay registros!",-1)),bt={class:"col-12 col-md-4 col-xl-3"},yt={class:"card-user"},wt={class:"code"},It={class:"nombre"},$t={key:0,class:"detalle text-end"};function Dt(t,e,c,y,i,d){const u=a("CModalTitle"),m=a("CModalHeader"),g=a("CTableHeaderCell"),b=a("CTableRow"),w=a("CTableHead"),h=a("CTableDataCell"),D=a("CBadge"),k=a("CTableBody"),T=a("CSpinner"),C=a("CTable"),R=a("vue-qr"),S=a("CIcon"),_=a("CButton"),$=a("CModalBody"),B=a("CModalFooter"),N=a("CModal");return r(),I(N,{alignment:"center",visible:c.visible,backdrop:"static",size:"xl",onClose:e[4]||(e[4]=()=>{t.$emit("visible",!1)})},{default:o(()=>[s(m,null,{default:o(()=>[s(u,null,{default:o(()=>[l("HISTORIAL DE REGISTRO ")]),_:1})]),_:1}),s($,null,{default:o(()=>{var f,L,K,Q;return[n("div",Ct,[n("div",vt,[s(C,{responsive:"",size:"sm"},{default:o(()=>[s(w,null,{default:o(()=>[s(b,null,{default:o(()=>[s(g,{scope:"col"},{default:o(()=>[l("Fecha ingreso")]),_:1}),s(g,{scope:"col"},{default:o(()=>[l("Tiempo solicitado")]),_:1}),s(g,{scope:"col"},{default:o(()=>[l("Tiempo ocupado")]),_:1}),s(g,{scope:"col"},{default:o(()=>[l("Descripción")]),_:1}),s(g,{scope:"col"},{default:o(()=>[l("Estado")]),_:1}),s(g,{scope:"col"},{default:o(()=>[l("Usuario")]),_:1})]),_:1})]),_:1}),i.list.length>0?(r(),I(k,{key:0},{default:o(()=>[(r(!0),v(x,null,M(i.list,(F,tt)=>(r(),I(b,{key:tt},{default:o(()=>[s(h,null,{default:o(()=>[l(p(d.convertDate(F.date)),1)]),_:2},1024),s(h,null,{default:o(()=>[l(p(F.minutes)+" min",1)]),_:2},1024),s(h,null,{default:o(()=>[l(p(d.getTime(F)),1)]),_:2},1024),s(h,null,{default:o(()=>[l(p(F.description),1)]),_:2},1024),s(h,null,{default:o(()=>[F.status?(r(),I(D,{key:1,color:"secondary"},{default:o(()=>[l("Finalizado")]),_:1})):(r(),I(D,{key:0,color:"success"},{default:o(()=>[l(" En curso")]),_:1}))]),_:2},1024),s(h,{scope:"row"},{default:o(()=>{var X,J;return[l(p((X=F.User)==null?void 0:X.name)+" "+p((J=F.User)==null?void 0:J.lastName),1)]}),_:2},1024)]),_:2},1024))),128))]),_:1})):i.isLoading?(r(),I(k,{key:1},{default:o(()=>[s(b,null,{default:o(()=>[s(h,{colspan:"7",class:"text-center p-4"},{default:o(()=>[s(T,{color:"primary"})]),_:1})]),_:1})]),_:1})):(r(),I(k,{key:2},{default:o(()=>[s(b,null,{default:o(()=>[s(h,{colspan:"7",class:"text-center p-4"},{default:o(()=>[gt]),_:1})]),_:1})]),_:1}))]),_:1})]),n("div",bt,[n("div",yt,[s(R,{text:(f=c.data)==null?void 0:f.code,size:150},null,8,["text"]),n("div",wt,"Codigo: "+p((L=c.data)==null?void 0:L.code),1),n("div",It,p((K=c.data)==null?void 0:K.name)+" "+p(((Q=c.data)==null?void 0:Q.lastName)||""),1),c.data.phone?(r(),v("div",$t,[s(_,{color:"success",class:"ms-2 btn-social",onClick:e[0]||(e[0]=F=>d.whatsapp(c.data.phone))},{default:o(()=>[s(S,{icon:"cib-whatsapp",height:"22"})]),_:1}),s(_,{color:"secondary",class:"ms-2 btn-social",onClick:e[1]||(e[1]=F=>d.call(c.data.phone))},{default:o(()=>[s(S,{icon:"cil-phone",height:"22"})]),_:1}),s(_,{color:"info",class:"ms-2 btn-social",onClick:e[2]||(e[2]=F=>d.mail(c.data.phone))},{default:o(()=>[s(S,{icon:"cil-envelope-closed",height:"22"})]),_:1})])):A("",!0)])])])]}),_:1}),s(B,null,{default:o(()=>[s(_,{color:"primary",type:"button",onClick:e[3]||(e[3]=f=>t.$emit("visible",!1))},{default:o(()=>[l(" Aceptar ")]),_:1})]),_:1})]),_:1},8,["visible"])}const kt=V(ht,[["render",Dt],["__scopeId","data-v-ba21148e"]]);const Tt={props:{data:{type:Object,default:null}},emits:["remove"]},Ft={class:"badge-btn"},St={class:"text"};function Bt(t,e,c,y,i,d){var m;const u=a("CIcon");return r(),v("div",Ft,[n("div",St,[l(p(c.data.amount)+" "+p((m=c.data)==null?void 0:m.name)+" ",1),s(u,{icon:"cil-x",size:"sm",style:{cursor:"pointer"},class:"ms-2 mt-1",onClick:e[0]||(e[0]=g=>t.$emit("remove",c.data))})])])}const xt=V(Tt,[["render",Bt],["__scopeId","data-v-749900d7"]]),Rt={emits:["visible"],props:{visible:{type:Boolean,default:!1},client:{type:Object,default:null}},data(){return{category:null,productSelected:[],COIN:z,total:0,discount:0}},computed:{...H("product",["list","isLoading"]),getCambio(){const t=parseFloat(this.total),e=this.importe-t;return e>=0?e:`Falta ${e*-1}!`}},mounted(){this.list.length<=0&&this.loadData()},methods:{...q("product",["loadData"]),removeItem(t){this.productSelected=this.productSelected.filter(e=>t.id!==e.id),this.total=this.productSelected.reduce((e,c)=>e+c.amount*c.price,0)},incremenProduct(t){const e=this.productSelected.findIndex(c=>c.id==t.id);if(e!==-1){if(this.productSelected[e].amount+1>this.productSelected[e].stock){swalSmoll(`En stock solo cuenta con ${this.productSelected[e].stock} unidades!`,"warning");return}this.productSelected[e].amount++}else this.productSelected.push({amount:1,...t});this.total=this.productSelected.reduce((c,y)=>c+y.amount*y.price,0)},saveData(){if(!this.$store.state.caja.caja){this.$emit("visible",!1),W("warning");return}if(this.productSelected.length<=0){et("No hay productos agregados para la venta!","warning");return}const t={date:new Date,discount:this.discount,total:this.total,products:this.productSelected.map(e=>({amount:e.amount,idProducts:e.id,price:e.price})),importe:this.total};this.$store.state.caja.caja.idOpened?this.saving(t):j.fire({title:"No se ha efectuado la apertura de caja ¿Desea continuar?",icon:"question",showCancelButton:!0,confirmButtonColor:"#321fdb",cancelButtonColor:"#bdbdbd",confirmButtonText:"ACEPTAR",cancelButtonText:"CANCELAR"}).then(e=>{e.isConfirmed&&this.saving(t)})},async saving(t){this.client&&(t.idClients=this.client.id);let e;this.data?e=await this.$store.dispatch("venta/update",{id:this.data.id,...t}):e=await this.$store.dispatch("venta/create",t),e&&(this.total=0,this.productSelected=[],this.$emit("visible",!1))}},components:{BadgeButton:xt}},Vt={class:"ms-3 d-flex"},Nt={class:"row g-1"},Mt={class:"col-12"},At={class:"row justify-content-md-center"},Lt=["onClick"],Et=["src"],jt={class:"card-content"},Ht={class:"d-flex justify-content-between align-items-center"},Ot={class:"card-title mb-0 text-center"},Gt={class:"text-secondary"},qt={class:"d-flex align-items-center"},Ut={class:"row"},Pt={class:"col-12 col-sm-6"},zt={class:"col-sm-12 col-md-6"};function Kt(t,e,c,y,i,d){const u=a("badge-button"),m=a("CModalTitle"),g=a("CModalHeader"),b=a("CBadge"),w=a("CModalBody"),h=a("CInputGroupText"),D=a("CFormInput"),k=a("CInputGroup"),T=a("CIcon"),C=a("CButton"),R=a("CModalFooter"),S=a("CModal");return r(),I(S,{alignment:"center",visible:c.visible,backdrop:"static",size:"xl",scrollable:"",onClose:e[3]||(e[3]=()=>{t.$emit("visible",!1)})},{default:o(()=>[s(g,null,{default:o(()=>[s(m,{class:"d-flex"},{default:o(()=>[l("VENTA RAPIDA "),n("div",Vt,[(r(!0),v(x,null,M(i.productSelected,(_,$)=>(r(),I(u,{key:$,data:_,onRemove:e[0]||(e[0]=B=>d.removeItem(B))},null,8,["data"]))),128))])]),_:1})]),_:1}),s(w,null,{default:o(()=>[n("div",Nt,[n("div",Mt,[n("div",At,[(r(!0),v(x,null,M(t.list,(_,$)=>(r(),v("div",{key:$,class:"col col-12 col-sm-6 col-md-4 col-lg-3"},[n("div",{class:"card-product",onClick:B=>d.incremenProduct(_)},[n("img",{src:_.image?t.$store.getters["product/getSrcImage"](_):t.imageDefault,class:"card-image"},null,8,Et),n("div",jt,[n("div",Ht,[n("div",null,[n("h3",Ot,p(_.name),1),n("span",Gt,p(_.Category.name),1)]),s(b,{color:"success",shape:"rounded-pill",style:{"font-size":"15px"}},{default:o(()=>[l(p(_.price)+" "+p(i.COIN),1)]),_:2},1024)])])],8,Lt)]))),128))])])])]),_:1}),s(R,null,{default:o(()=>[n("div",qt,[n("div",Ut,[n("div",Pt,[s(k,null,{default:o(()=>{var _,$;return[s(h,null,{default:o(()=>[l("Cliente")]),_:1}),s(D,{type:"text",value:`${((_=c.client)==null?void 0:_.name)||"Ninguno!"} ${(($=c.client)==null?void 0:$.lastName)||""}`,disabled:""},null,8,["value"])]}),_:1})]),n("div",zt,[s(k,{class:""},{default:o(()=>[s(h,null,{default:o(()=>[l(" Total ")]),_:1}),s(D,{type:"number",class:"text-center",modelValue:i.total,"onUpdate:modelValue":e[1]||(e[1]=_=>i.total=_)},null,8,["modelValue"]),s(h,null,{default:o(()=>[l(p(i.COIN),1)]),_:1})]),_:1})])]),s(C,{color:"secondary",type:"button",class:"ms-1",onClick:e[2]||(e[2]=_=>t.$emit("visible",!1))},{default:o(()=>[s(T,{icon:"cil-X"}),l(" Cancelar ")]),_:1}),s(C,{color:"primary",type:"button",class:"ms-1",disabled:i.productSelected.length<=0,onClick:d.saveData},{default:o(()=>[s(T,{icon:"cil-save"}),l(" REGISTRAR ")]),_:1},8,["disabled","onClick"])])]),_:1})]),_:1},8,["visible"])}const Qt=V(Rt,[["render",Kt]]);const Xt={props:{data:{type:Object,default:null},ventaRapida:{type:Boolean,default:!1}},emits:["setData","hideVentaRapida"],data(){return{COIN:z,inputData:{description:null,time:E(new Date().setSeconds(new Date().getSeconds()+20)),minutes:20},client:null,socketClientCode:null,validateForm:null,showModal:!1}},computed:{...H("price",["list","isLoading"]),getClass(){if(!this.data)return"";const t=this.getMinutesRestante(this.data);return t>=0?t<=2?"bg-warning-tr":"bg-success-tr":"bg-danger-tr"},getPrice(){const t=this.list.find(e=>e.minutes===parseFloat(this.inputData.minutes));return t?t.price:0},getUpdate(){return this.list.length<=0?!0:this.list.some(t=>t.minutes===parseFloat(this.inputData.minutes))}},methods:{getSocket:pt,getMinutesRestante:Z,async Validate(t){t.preventDefault(),t.currentTarget.checkValidity()===!1&&(t.preventDefault(),t.stopPropagation()),this.validateForm=!0,this.inputData.time&&this.inputData.minutes&&this.preguntar()},preguntar(){if(!this.$store.state.caja.caja){W("warning");return}this.$store.state.caja.caja.idOpened?this.saving():j.fire({title:"No se ha efectuado la apertura de caja ¿Desea continuar?",icon:"question",showCancelButton:!0,confirmButtonColor:"#321fdb",cancelButtonColor:"#bdbdbd",confirmButtonText:"ACEPTAR",cancelButtonText:"CANCELAR"}).then(async t=>{t.isConfirmed&&this.saving()})},async saving(){var i;const t=this.inputData.time.split(":"),e=new Date;e.setHours(t[0]),e.setMinutes(t[1]);const c={date:e,minutes:this.inputData.minutes,description:this.inputData.description};this.client&&(c.idClients=(i=this.client)==null?void 0:i.id);let y;this.data?y=await this.$store.dispatch("register/update",{id:this.data.id,...c}):y=await this.$store.dispatch("register/create",c),y&&(this.getSocket()&&this.socketClientCode&&(this.getSocket().emit(st,this.socketClientCode,d=>this.$store.state.socket.qrRead=d),this.$store.state.socket.clientNew=null),this.validateForm=!1,this.setData(null))},changueFocus(t){const e=element("form-ingreso",t);e&&e.focus()},setData(t=null){var e;if(!t){this.$router.replace({name:"control-tiempos"}),this.socketClientCode=null,this.inputData.description=null,this.getUpdate||(this.inputData.minutes=(e=this.list[0])==null?void 0:e.minutes),this.inputData.time=E(new Date().setSeconds(new Date().getSeconds()+20)),this.client=null,this.$emit("setData",null);return}this.inputData.description=t.description,this.inputData.time=E(new Date(t.date)),this.inputData.minutes=t.minutes,t.Client?this.client=t.Client:this.client=null},async endData(){if(this.getMinutesRestante(this.data)<0){await this.$store.dispatch("register/endRegister",this.data.id)&&this.setData();return}j.fire({title:"¿Desea concluir este registro?",text:"No ha llegado todavía al tiempo límite!",icon:"question",showCancelButton:!0,confirmButtonColor:"#2eb85c",cancelButtonColor:"#bdbdbd",confirmButtonText:"CONCLUIR",cancelButtonText:"CANCELAR"}).then(async e=>{e.isConfirmed&&this.$store.dispatch("register/endRegister",this.data.id)&&this.setData()})},setClientFromSocket(t){this.socketClientCode=t.codeEmit,this.client=t.client,this.$store.state.socket.clientNew=null},async searchCode(){let t;this.$store.state.socket.qrRead.length>0>0&&this.$route.query.code&&(t=this.$store.getters["socket/getClietQr"](this.$route.query.code),t&&this.setClientFromSocket(t)),this.$route.query.code&&!t&&(this.client=await this.$store.dispatch("client/getByCode",this.$route.query.code))}},mounted(){this.searchCode()},watch:{data:{immediate:!0,handler(t){t?this.setData(t):this.setData()}},"$store.state.socket.clientNew"(t){t&&this.setClientFromSocket(t)},"$route.query.code"(t){const e=this.$store.getters["socket/getClietQr"](t);e&&this.setClientFromSocket(e)},async"$store.state.socket.qrRead"(t){this.searchCode()}},components:{InputSearchClient:mt,HistoryClient:kt,VentaRapida:Qt}},O=t=>(U("data-v-b4ba237e"),t=t(),P(),t),Jt={class:"row"},Wt=O(()=>n("div",{class:"col col-sm-12 col-md-8"},[n("h6",{class:"mt-1"},[n("strong",null,"REGISTRAR INGRESO")])],-1)),Yt={class:"col col-sm-12 col-md-4 text-end"},Zt={class:"row g-3"},te={class:"col-12"},ee={class:"col-12"},se=O(()=>n("span",{class:"text-danger"},"*",-1)),oe={class:"col-12 col-sm-6"},ne=O(()=>n("span",{class:"text-danger"},"*",-1)),ae=["value"],ie={class:"col-12 col-sm-6"},le=O(()=>n("span",{class:"text-danger"},"*",-1)),ce={class:"col-12"},de={class:"col-12 text-end mt-2"},re={class:"col col-12"};function ue(t,e,c,y,i,d){const u=a("CIcon"),m=a("CButton"),g=a("CCardHeader"),b=a("InputSearchClient"),w=a("CFormLabel"),h=a("CFormInput"),D=a("CFormFeedback"),k=a("CFormSelect"),T=a("CInputGroupText"),C=a("CInputGroup"),R=a("CFormTextarea"),S=a("CForm"),_=a("CCardBody"),$=a("CCard"),B=a("history-client"),N=a("VentaRapida");return r(),v(x,null,[s($,null,{default:o(()=>[s(g,null,{default:o(()=>[n("div",Jt,[Wt,n("div",Yt,[i.client?(r(),I(m,{key:0,color:"info",size:"sm",variant:"outline",onClick:e[0]||(e[0]=f=>i.showModal=!0)},{default:o(()=>[s(u,{icon:"cil-address-book"}),l(" Historial ")]),_:1})):A("",!0)])])]),_:1}),s(_,{class:"p-0"},{default:o(()=>[s(S,{class:Y(["needs-validation p-2 ps-3 pe-3",d.getClass]),novalidate:"",validated:i.validateForm,onSubmit:G(d.Validate,["prevent"]),id:"form-ingreso"},{default:o(()=>[n("div",Zt,[n("div",te,[s(b,{data:i.client,onSetClient:e[1]||(e[1]=f=>i.client=f)},null,8,["data"])]),n("div",ee,[s(w,{for:"validateForm",class:"mb-0"},{default:o(()=>[l("Hora "),se]),_:1}),s(h,{id:"validateForm",modelValue:i.inputData.time,"onUpdate:modelValue":e[2]||(e[2]=f=>i.inputData.time=f),type:"time",name:"time",required:"",onKeydown:e[3]||(e[3]=ot(G(f=>d.changueFocus("minutes"),["prevent"]),["enter"]))},null,8,["modelValue"]),s(D,{invalid:""},{default:o(()=>[l(" La hora de ingreso es requerido! ")]),_:1})]),n("div",oe,[s(w,{for:"validateForm",class:"mb-0"},{default:o(()=>[l("Tiempo "),ne]),_:1}),d.getUpdate?(r(),I(k,{key:0,id:"validateForm",name:"minutes",modelValue:i.inputData.minutes,"onUpdate:modelValue":e[4]||(e[4]=f=>i.inputData.minutes=f)},{default:o(()=>[(r(!0),v(x,null,M(t.list,(f,L)=>(r(),v("option",{key:L,value:f.minutes},p(f.minutes)+" minutos ",9,ae))),128))]),_:1},8,["modelValue"])):(r(),I(h,{key:1,id:"validateForm",value:i.inputData.minutes,type:"number",disabled:""},null,8,["value"])),s(D,{invalid:""},{default:o(()=>[l(" Seleccionar el tiempo! ")]),_:1})]),n("div",ie,[s(w,{for:"validateForm",class:"mb-0"},{default:o(()=>[l("Costo "),le]),_:1}),s(C,{class:"ms-1 max-md"},{default:o(()=>{var f;return[d.getUpdate?(r(),I(h,{key:0,type:"text",class:"text-center",disabled:"",value:d.getPrice},null,8,["value"])):(r(),I(h,{key:1,type:"text",class:"text-center",disabled:"",value:(f=c.data)==null?void 0:f.price},null,8,["value"])),s(T,null,{default:o(()=>[l(p(i.COIN),1)]),_:1})]}),_:1})]),n("div",ce,[s(w,{for:"validateForm",class:"mb-0"},{default:o(()=>[l("Descripción ")]),_:1}),s(R,{id:"validateForm",modelValue:i.inputData.description,"onUpdate:modelValue":e[5]||(e[5]=f=>i.inputData.description=f),placeholder:"Descripción...",name:"come",rows:"2"},null,8,["modelValue"])])]),n("div",de,[s(m,{color:"secondary",type:"button",class:"me-2",onClick:e[6]||(e[6]=f=>d.setData())},{default:o(()=>[s(u,{icon:"cil-X"}),l(" Limpiar ")]),_:1}),c.data?(r(),I(m,{key:0,color:"success",type:"button",class:"me-2",onClick:e[7]||(e[7]=f=>d.endData())},{default:o(()=>[s(u,{icon:"cil-check"}),l(" Concluir ")]),_:1})):A("",!0),s(m,{color:"primary",type:"submit",disabled:!d.getUpdate},{default:o(()=>[s(u,{icon:"cil-save"}),l(" "+p(c.data?"Actualizar":"Aceptar"),1)]),_:1},8,["disabled"])])]),_:1},8,["validated","onSubmit","class"])]),_:1})]),_:1}),n("div",re,[s(B,{visible:i.showModal,onVisible:e[8]||(e[8]=f=>i.showModal=f),data:i.client},null,8,["visible","data"]),s(N,{client:i.client,visible:c.ventaRapida,onVisible:e[9]||(e[9]=f=>t.$emit("hideVentaRapida",f))},null,8,["client","visible"])])],64)}const me=V(Xt,[["render",ue],["__scopeId","data-v-b4ba237e"]]);const _e={data(){return{intervalId:null,data:null}},emits:["setData"],computed:{...H("register",["list"]),...nt("register",["getById"])},async mounted(){this.list.length<=0&&await this.loadData(),this.decrementarTiempo(),this.intervalId=setInterval(()=>{this.decrementarTiempo()},2e3)},beforeUnmount(){clearInterval(this.intervalId)},methods:{...q("register",["loadData"]),getHours:E,sumHours:lt,decrementarTiempo(){console.log("actualizando"),this.list.forEach(t=>{const e=new Date(t.date),y=new Date-e,i=Math.floor(y/(1e3*60));document.getElementById(`time-${t.id}`).innerHTML=i<=-2?`Espera ${i*-1} min`:i<=0&&i>=-1?"0 min":`${i} min`;const d=t.minutes-i,u=document.getElementById(`card-time-${t.id}`);d>=0?(u.classList.contains("bg-danger")&&u.classList.remove("bg-danger"),u.classList.contains("bg-warning")&&u.classList.remove("bg-warning"),d<=1?u.classList.add("bg-warning"):u.classList.add("bg-success")):(u.classList.contains("bg-warning")&&u.classList.remove("bg-warning"),u.classList.add("bg-danger"))})},setItem(t){this.data=this.getById(t.id),this.$emit("setData",this.data)},msgDelete(t){j.fire({title:"¿Desea eliminar el registro?",icon:"question",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#bdbdbd",confirmButtonText:"ELIMINAR",cancelButtonText:"CANCELAR"}).then(async e=>{e.isConfirmed&&await this.$store.dispatch("register/remove",t.id)&&(this.data=null,this.$emit("setData",null))})},incrementarTiempo(t){console.log(t),this.$emit("increment",!0),this.$emit("setData",t)}},watch:{"$route.path":{immediate:!0,handler(t){t!=="/admin/control-tiempos"&&clearInterval(this.intervalId)}}}},pe=t=>(U("data-v-e59e12f3"),t=t(),P(),t),he=["id","onClick"],fe={class:"card-title"},Ce={class:"card-content"},ve={class:"time"},ge=["id"],be={class:"solicitado"},ye={class:"date"},we={class:"d-flex justify-content-md-center",style:{width:"100%"}},Ie=["onClick"],$e=["onClick"],De={key:0,class:"col-12 text-center"},ke=pe(()=>n("h5",null,"No hay registros",-1)),Te=[ke];function Fe(t,e,c,y,i,d){const u=a("CIcon");return r(),v(x,null,[(r(!0),v(x,null,M(t.list,(m,g)=>{var b,w;return r(),v("div",{class:"col-12 col-sm-12 col-md-6 col-lg-4",key:g},[n("div",{class:"card bg-success",id:`card-time-${m.id}`,onClick:h=>d.setItem(m)},[n("b",fe,p((b=m.Client)==null?void 0:b.name)+" "+p(((w=m.Client)==null?void 0:w.lastName)||""),1),n("div",Ce,[n("p",ve,[n("span",{id:`time-${m.id}`},null,8,ge)]),n("p",be," Tiempo: "+p(m.minutes<0?0:m.minutes)+" min ",1),n("p",ye,[s(u,{icon:"cil-av-timer"}),l(" DE: "),n("b",null,p(d.getHours(new Date(m.date))),1),l(" a "),n("b",null,p(d.sumHours(m.date,m.minutes)),1)]),n("div",we,[n("button",{type:"button",class:"btn btn-sm btn-danger text-white me-1",onClick:h=>d.msgDelete(m)},[s(u,{icon:"cil-trash"}),l(" Eliminar ")],8,Ie),n("button",{type:"button",class:"btn btn-sm btn-info text-white",onClick:h=>d.incrementarTiempo(m)},[s(u,{icon:"cil-av-timer"}),l(" Mas tiempo ")],8,$e)])])],8,he)])}),128)),t.list.length<=0?(r(),v("div",De,Te)):A("",!0)],64)}const Se=V(_e,[["render",Fe],["__scopeId","data-v-e59e12f3"]]),Be={props:{data:{type:Object,default:null}},data(){return{inputData:{minutes:20},COIN:z,validateForm:null}},computed:{...H("price",["list","isLoading"]),getClass(){if(!this.data)return"";const t=this.getMinutesRestante(this.data);return t>=0?t<=2?"bg-warning-tr":"bg-success-tr":"bg-danger-tr"},getPrice(){const t=this.list.find(e=>e.minutes===parseFloat(this.inputData.minutes));return t?t.price:0},getTotal(){return this.getPrice+this.data.price}},methods:{getMinutesRestante:Z,async Validate(t){if(t.preventDefault(),t.currentTarget.checkValidity()===!1&&(t.preventDefault(),t.stopPropagation()),this.validateForm=!0,!this.inputData.minutes)return;const c={id:this.data.id,minutes:this.data.minutes+parseFloat(this.inputData.minutes),price:this.data.price+this.getPrice};await this.$store.dispatch("register/update",c)&&(this.validateForm=!1,this.$emit("visible",!1))}}},xe=n("div",{class:"row"},[n("div",{class:"col col-sm-12"},[n("h6",{class:"mt-1"},[n("strong",null,"AUMENTAR TIEMPO")])])],-1),Re={class:"row g-3"},Ve={class:"col-12"},Ne=n("span",{class:"text-danger"},"*",-1),Me={class:"col-12 col-sm-12"},Ae=n("span",{class:"text-danger"},"*",-1),Le=["value"],Ee={class:"col-12"},je={class:"col-12 text-end mt-2"};function He(t,e,c,y,i,d){const u=a("CCardHeader"),m=a("CFormLabel"),g=a("CIcon"),b=a("CInputGroupText"),w=a("CFormInput"),h=a("CInputGroup"),D=a("CFormSelect"),k=a("CFormFeedback"),T=a("CButton"),C=a("CForm"),R=a("CCardBody"),S=a("CCard");return r(),I(S,null,{default:o(()=>[s(u,null,{default:o(()=>[xe]),_:1}),s(R,{class:"p-0"},{default:o(()=>[s(C,{class:Y(["needs-validation p-2 ps-3 pe-3",d.getClass]),novalidate:"",validated:i.validateForm,onSubmit:G(d.Validate,["prevent"]),id:"form-ingreso"},{default:o(()=>[n("div",Re,[n("div",Ve,[s(m,{for:"validateForm",class:"mb-0"},{default:o(()=>[l("Cliente "),Ne]),_:1}),s(h,{class:"ms-1"},{default:o(()=>{var _,$,B,N;return[s(b,null,{default:o(()=>[s(g,{icon:"cil-user"})]),_:1}),s(w,{type:"text",value:`${($=(_=c.data)==null?void 0:_.Client)==null?void 0:$.name} ${((N=(B=c.data)==null?void 0:B.Client)==null?void 0:N.lastName)||""}`,disabled:""},null,8,["value"])]}),_:1})]),n("div",Me,[s(m,{for:"validateForm",class:"mb-0"},{default:o(()=>[l("Tiempo a Aumentar "),Ae]),_:1}),s(D,{id:"validateForm",name:"minutes",modelValue:i.inputData.minutes,"onUpdate:modelValue":e[0]||(e[0]=_=>i.inputData.minutes=_)},{default:o(()=>[(r(!0),v(x,null,M(t.list,(_,$)=>(r(),v("option",{key:$,value:_.minutes},p(_.minutes)+" minutos ",9,Le))),128))]),_:1},8,["modelValue"]),s(k,{invalid:""},{default:o(()=>[l(" Monto inicial de apertura es requerido! ")]),_:1})]),n("div",Ee,[s(h,{class:"ms-1"},{default:o(()=>[s(b,null,{default:o(()=>[l("TOTAL")]),_:1}),s(w,{type:"text",value:c.data.minutes+parseFloat(i.inputData.minutes)+" min.",disabled:""},null,8,["value"]),s(b,null,{default:o(()=>[l(p(c.data.price+d.getPrice)+" "+p(i.COIN),1)]),_:1})]),_:1})])]),n("div",je,[s(T,{color:"secondary",type:"button",class:"me-2",onClick:e[1]||(e[1]=_=>t.$emit("visible",!1))},{default:o(()=>[s(g,{icon:"cil-X"}),l(" Cancelar ")]),_:1}),s(T,{color:"primary",type:"submit"},{default:o(()=>[s(g,{icon:"cil-save"}),l(" Aplicar ")]),_:1})])]),_:1},8,["validated","onSubmit","class"])]),_:1})]),_:1})}const Oe=V(Be,[["render",He]]),Ge={components:{NewIngreso:me,ListaRegistros:Se,AddVenta:_t,AddTime:Oe},data(){return{data:null,modalVenta:!1,modalVentaRapida:!1,showIncrementTime:!1,modalVentaRapida:!1}}},qe={class:"row"},Ue={key:0,class:"col col-12"},Pe=n("div",{class:"alert alert-warning",role:"alert"},[n("b",null,"Advertencia!"),l(" Seleccionar caja! ")],-1),ze=[Pe],Ke={key:1,class:"col col-12"},Qe={class:"alert alert-warning row",role:"alert"},Xe={class:"col-12 col-sm-8"},Je=n("b",null,"Advertencia!",-1),We={class:"col-12 col-sm-4 text-end"},Ye={class:"col col-12 col-sm-8"},Ze={class:"row"},ts=n("div",{class:"col col-sm-4"},[n("h5",{class:"mt-1"},[n("strong",null,"REGISTROS EN CURSO ")])],-1),es={class:"col col-sm-8 text-end"},ss={class:"row justify-content-md-center"},os={key:2,class:"col col-12 col-sm-4"},ns={key:3,class:"col col-12 col-sm-4"},as={class:"col col-12"};function is(t,e,c,y,i,d){const u=a("CIcon"),m=a("CButton"),g=a("CCardHeader"),b=a("ListaRegistros"),w=a("CCardBody"),h=a("CCard"),D=a("NewIngreso"),k=a("AddTime"),T=a("AddVenta");return r(),v("div",qe,[t.$store.state.caja.caja?A("",!0):(r(),v("div",Ue,ze)),t.$store.state.caja.caja&&!t.$store.state.caja.caja.idOpened?(r(),v("div",Ke,[n("div",Qe,[n("div",Xe,[s(u,{icon:"cil-warning",height:"20",class:"me-2"}),Je,l(" No se ha efectuado la apertura de caja! ")]),n("div",We,[s(m,{color:"warning",size:"sm",onClick:e[0]||(e[0]=C=>t.$router.push({name:"apertura"}))},{default:o(()=>[s(u,{icon:"cil-monitor",class:"me-1"}),l(" Aperturar")]),_:1})])])])):A("",!0),n("div",Ye,[s(h,{class:"mb-4"},{default:o(()=>[s(g,null,{default:o(()=>[n("div",Ze,[ts,n("div",es,[s(m,{color:"success",variant:"outline",class:"me-1",onClick:e[1]||(e[1]=C=>t.$router.push({name:"sala-juegos"}))},{default:o(()=>[s(u,{icon:"cil-clipboard",class:"me-1"}),l(" Registros")]),_:1}),s(m,{color:"primary",variant:"outline",class:"me-1",onClick:e[2]||(e[2]=C=>i.modalVentaRapida=!0)},{default:o(()=>[s(u,{icon:"cil-cart",class:"me-1"}),l(" Venta rápida")]),_:1}),s(m,{color:"primary",variant:"outline",onClick:e[3]||(e[3]=C=>i.modalVenta=!0)},{default:o(()=>[s(u,{icon:"cil-cart",class:"me-1"}),l(" Vender")]),_:1})])])]),_:1}),s(w,null,{default:o(()=>[n("div",ss,[s(b,{onSetData:e[4]||(e[4]=C=>i.data=C),onIncrement:e[5]||(e[5]=C=>i.showIncrementTime=C)})])]),_:1})]),_:1})]),i.showIncrementTime?(r(),v("div",ns,[s(k,{data:i.data,onVisible:e[8]||(e[8]=C=>{i.showIncrementTime=C,i.data=null})},null,8,["data"])])):(r(),v("div",os,[s(D,{data:i.data,onSetData:e[6]||(e[6]=C=>i.data=C),onHideVentaRapida:e[7]||(e[7]=C=>i.modalVentaRapida=C),ventaRapida:i.modalVentaRapida},null,8,["data","ventaRapida"])])),n("div",as,[s(T,{visible:i.modalVenta,onVisible:e[9]||(e[9]=C=>i.modalVenta=C)},null,8,["visible"])])])}const vs=V(Ge,[["render",is]]);export{vs as default};
