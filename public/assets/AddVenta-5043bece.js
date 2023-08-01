import{K as N,_ as A,r as l,o as d,c as b,d as a,p as M,Z as j,a as o,j as G,$ as E,F as D,i as B,t as u,m as R,w as s,I as U,L as q,M as z,N as V,a0 as L,b as c,e as k,O as K,P as X,S as Z}from"./index-67878955.js";import{i as H}from"./picture-093c9837.js";import{P as J}from"./Paginador-d0e0f757.js";import{d as Q}from"./user-account-441e03f2.js";import{A as W}from"./AddClient-f8c810cc.js";import{b as Y}from"./format-date-ea6389fa.js";const tt={props:{data:{type:Object,default:null}},emits:["setClient"],data(){return{list:[],textSearch:null,imageDefault:Q,showList:!1,isLoading:!1,timerId:null,modalOpen:!1}},methods:{...N("client",["search"]),async searching(){this.textSearch&&this.textSearch.trim()?(this.isLoading=!0,this.list=[],clearTimeout(this.timerId),this.timerId=setTimeout(async()=>{const e=await this.search(this.textSearch);Array.isArray(e)?this.list=e:this.list=[],this.isLoading=!1},500)):this.list=[]},hideList(){setTimeout(()=>this.showList=!1,400)}},watch:{data:{immediate:!0,handler(e){e?this.textSearch=`${e.name} ${e.lastName||""}`:this.textSearch=null}}},components:{AddClient:W}},et={class:"col-md-12 search-content"},ot=a("label",null,"Cliente ",-1),st={class:"input-group"},nt=["disabled"],lt={class:"input-group-append"},it={class:"results-search"},at={key:0,class:"list-client"},ct=["onClick"],dt=["src"],rt={class:"informacion-item-client"},ut={class:"nombre"},pt={class:"correo"},mt={key:1,class:"no-result text-center p-2"},_t={key:0},ht={key:1},Ct={key:2};function ft(e,t,i,h,n,p){const y=l("CIcon"),C=l("add-client");return d(),b("div",et,[ot,a("div",st,[M(a("input",{type:"text",class:"form-control",placeholder:"Buscar cliente...",onInput:t[0]||(t[0]=(...r)=>p.searching&&p.searching(...r)),"onUpdate:modelValue":t[1]||(t[1]=r=>n.textSearch=r),onFocus:t[2]||(t[2]=r=>n.showList=!0),disabled:i.data,onBlur:t[3]||(t[3]=r=>p.hideList(r))},null,40,nt),[[j,n.textSearch]]),a("div",lt,[a("button",{class:"btn btn-primary",type:"button",onClick:t[4]||(t[4]=r=>n.modalOpen=!0)},[o(y,{icon:"cil-plus"})]),i.data?(d(),b("button",{key:0,class:"btn btn-danger",type:"button",onClick:t[5]||(t[5]=r=>e.$emit("setClient",null))},[o(y,{icon:"cil-x"})])):G("",!0)])]),M(a("div",it,[n.list.length>0?(d(),b("div",at,[(d(!0),b(D,null,B(n.list,(r,m)=>(d(),b("div",{class:"item-client",key:m,onClick:v=>e.$emit("setClient",r)},[a("img",{src:n.imageDefault,alt:"Avatar",class:"avatar"},null,8,dt),a("div",rt,[a("h3",ut,u(r.name)+" "+u(r.lastName||""),1),a("p",pt,u(r.code),1)])],8,ct))),128))])):(d(),b("div",mt,[n.textSearch?n.list.length<=0&&!n.isLoading?(d(),b("span",ht,"No hay registros encontrados!")):(d(),b("span",Ct," Buscando... ")):(d(),b("span",_t,"Buscar cliente!"))]))],512),[[E,n.showList]]),o(C,{visible:n.modalOpen,code:n.textSearch,onSetData:t[6]||(t[6]=r=>e.$emit("setClient",r)),onVisible:t[7]||(t[7]=r=>n.modalOpen=r)},null,8,["visible","code"])])}const gt=A(tt,[["render",ft]]);const bt={props:{data:{type:Object,default:null}},emits:["setData"],computed:{...R("category",["list","isLoading"])},mounted(){this.list.length<=0&&this.loadData()},methods:{...N("category",["loadData"])}},yt=e=>(q("data-v-9ca4b20a"),e=e(),z(),e),vt=yt(()=>a("b",null,"MOSTRAR PRODUCTOS POR CATEGORIA",-1)),St={class:"col-12 row justify-content-md-end"},kt=["onClick"];function Tt(e,t,i,h,n,p){const y=l("CCard");return d(),b(D,null,[vt,o(y,{class:"p-2"},{default:s(()=>[a("div",St,[(d(!0),b(D,null,B(e.list,(C,r)=>{var m;return d(),b("div",{key:r,class:U(["col-4 col-sm-3 col-md-2 card-item text-center",{"bg-primary text-white":((m=i.data)==null?void 0:m.id)===C.id}]),onClick:v=>e.$emit("setData",C)},u(C.name),11,kt)}),128))])]),_:1})],64)}const xt=A(bt,[["render",Tt],["__scopeId","data-v-9ca4b20a"]]),It={props:{productSelected:{default:[],type:Array}},emits:["setProducts","setTotal"],data(){return{COIN:V,imageDefault:H,discount:0}},computed:{getTotal(){return this.$emit("total",this.totalPagar-this.discount),this.$emit("setTotal",this.totalPagar-this.discount),this.$emit("setDiscount",this.discount),this.totalPagar-this.discount},totalPagar(){let e=0;return this.productSelected.forEach(t=>{e+=t.price*t.amount}),this.$emit("setTotal",e),e}},methods:{remove(e){this.$emit("setProducts",this.productSelected.filter(t=>e.id!==t.id))},incremenProduct(e){const t=this.productSelected,i=t.findIndex(h=>h.id==e.id);if(i!==-1){if(t[i].amount+1>t[i].stock){L(`En stock solo cuenta con ${t[i].stock} unidades!`,"warning");return}t[i].amount++,this.$emit("setProducts",t)}},decrementProduct(e){const t=this.productSelected,i=t.findIndex(h=>h.id==e.id);if(i!==-1)if(t[i].amount<=1){L("¡La cantidad mínima permitida es 1!","warning");return}else t[i].amount--,this.$emit("setProducts",t)}}},Pt=a("b",null,"PRODUCTOS AGREGADO",-1),wt=["src"],Dt=a("h6",null,"No hay productos agregado!",-1),At={class:"row p-2"},Ot={class:"col-4"},Ft={class:"col-4"},Bt={class:"col-4"};function $t(e,t,i,h,n,p){const y=l("CTableHeaderCell"),C=l("CTableRow"),r=l("CTableHead"),m=l("CTableDataCell"),v=l("CIcon"),S=l("CInputGroupText"),T=l("CFormInput"),x=l("CInputGroup"),w=l("CButton"),_=l("CTableBody"),I=l("CTable"),P=l("CFormLabel"),O=l("CCard");return d(),b("div",null,[Pt,o(O,null,{default:s(()=>[o(I,{responsive:"",class:"mb-0"},{default:s(()=>[o(r,null,{default:s(()=>[o(C,null,{default:s(()=>[o(y,{scope:"col"},{default:s(()=>[c("Producto")]),_:1}),o(y,{scope:"col"},{default:s(()=>[c("Cantidad")]),_:1}),o(y,{scope:"col"},{default:s(()=>[c("Total")]),_:1}),o(y,{scope:"col"},{default:s(()=>[c("Accion")]),_:1})]),_:1})]),_:1}),i.productSelected.length>0?(d(),k(_,{key:0},{default:s(()=>[(d(!0),b(D,null,B(i.productSelected,(f,$)=>(d(),k(C,{key:$},{default:s(()=>[o(m,{scope:"row",class:"p-0 ps-1"},{default:s(()=>[a("img",{src:f.image?e.$store.getters["product/getSrcImage"](f):n.imageDefault,class:"image-table"},null,8,wt),c(" "+u(f.name),1)]),_:2},1024),o(m,null,{default:s(()=>[o(x,{style:{"max-width":"140px","min-width":"80px"}},{default:s(()=>[o(S,{onClick:F=>p.decrementProduct(f)},{default:s(()=>[o(v,{icon:"cil-minus"})]),_:2},1032,["onClick"]),o(T,{type:"number",class:"text-center",disabled:"",value:f.amount},null,8,["value"]),o(S,{onClick:F=>p.incremenProduct(f)},{default:s(()=>[o(v,{icon:"cil-plus"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),o(m,null,{default:s(()=>[c(u(f.amount)+" x "+u(f.price)+" = "+u(f.amount*f.price)+" "+u(n.COIN),1)]),_:2},1024),o(m,null,{default:s(()=>[o(w,{color:"danger",variant:"outline",type:"button",size:"sm",onClick:F=>p.remove(f)},{default:s(()=>[o(v,{icon:"cil-trash"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):(d(),k(_,{key:1},{default:s(()=>[o(C,null,{default:s(()=>[o(m,{colspan:"7",class:"text-center p-3"},{default:s(()=>[Dt]),_:1})]),_:1})]),_:1}))]),_:1}),a("div",At,[a("div",Ot,[o(P,{for:"validatedCustom01",class:"mb-0"},{default:s(()=>[c("Sub Total ")]),_:1}),o(x,null,{default:s(()=>[o(T,{type:"number",class:"text-center",disabled:"",value:p.totalPagar},null,8,["value"]),o(S,null,{default:s(()=>[c(u(n.COIN),1)]),_:1})]),_:1})]),a("div",Ft,[o(P,{for:"validatedCustom01",class:"mb-0"},{default:s(()=>[c("Descuento ")]),_:1}),o(x,null,{default:s(()=>[o(T,{type:"number",class:"text-center",modelValue:n.discount,"onUpdate:modelValue":t[0]||(t[0]=f=>n.discount=f)},null,8,["modelValue"]),o(S,null,{default:s(()=>[c(u(n.COIN),1)]),_:1})]),_:1})]),a("div",Bt,[o(P,{for:"validatedCustom01",class:"mb-0"},{default:s(()=>[c("Total ")]),_:1}),o(x,null,{default:s(()=>[o(T,{type:"number",class:"text-center",disabled:"",value:p.getTotal},null,8,["value"]),o(S,null,{default:s(()=>[c(u(n.COIN),1)]),_:1})]),_:1})])])]),_:1})])}const Lt=A(It,[["render",$t]]),Nt={props:{productsAdded:{default:[],type:Array},category:{default:null,type:Object}},emits:["setProducts"],data(){return{COIN:V,imageDefault:H,modalHistory:!1,listFilter:[]}},computed:{...R("product",["list","isLoading"]),getStock(){return e=>{const t=this.productsAdded.find(i=>i.id===e.id);return t?e.stock-t.amount:e.stock}}},async mounted(){this.list.length<=0&&await this.loadData(),this.listFilter=this.list},methods:{...N("product",["loadData"]),setItem(e){e={amount:e.amount,description:e.description,id:e.id,idCategories:e.idCategories,image:e.image,name:e.name,price:e.price,status:e.status,stock:e.stock};const t=this.productsAdded,i=t.findIndex(h=>h.id==e.id);if(i!==-1){if(t[i].amount+1>t[i].stock){L(`En stock solo cuenta con ${t[i].stock} unidades!`,"warning");return}t[i].amount++}else e.amount=1,t.push(e);this.$emit("setProducts",t)},getColor(e){return this.productsAdded.some(t=>t.id===e.id)?"primary":""}},watch:{category:{immediate:!0,handler(e){e?this.listFilter=this.list.filter(t=>t.idCategories===e.id):this.listFilter=this.list}}},components:{Paginador:J}},Vt=a("b",null,"PRODUCTOS",-1),Mt=["src"],Rt=a("h6",null,"No hay registros!",-1);function Ht(e,t,i,h,n,p){const y=l("CTableHeaderCell"),C=l("CTableRow"),r=l("CTableHead"),m=l("CTableDataCell"),v=l("CBadge"),S=l("CTableBody"),T=l("CSpinner"),x=l("CTable"),w=l("CCard");return d(),b("div",null,[Vt,o(w,null,{default:s(()=>[o(x,{responsive:"",hover:"",striper:"",class:"mb-0"},{default:s(()=>[o(r,null,{default:s(()=>[o(C,null,{default:s(()=>[o(y,{scope:"col"},{default:s(()=>[c("Producto")]),_:1}),o(y,{scope:"col"},{default:s(()=>[c("Precio")]),_:1}),o(y,{scope:"col"},{default:s(()=>[c("Stock")]),_:1})]),_:1})]),_:1}),n.listFilter.length>0?(d(),k(S,{key:0},{default:s(()=>[(d(!0),b(D,null,B(n.listFilter,(_,I)=>(d(),k(C,{key:I,onClick:P=>p.setItem(_),color:p.getColor(_)},{default:s(()=>[o(m,{scope:"row",class:"p-0 ps-1"},{default:s(()=>[a("img",{src:_.image?e.$store.getters["product/getSrcImage"](_):n.imageDefault,class:"image-table"},null,8,Mt),c(" "+u(_.name),1)]),_:2},1024),o(m,null,{default:s(()=>[c(u(_.price)+" "+u(n.COIN),1)]),_:2},1024),o(m,null,{default:s(()=>[_.stock>10?(d(),k(v,{key:0,color:"success"},{default:s(()=>[c(u(p.getStock(_))+" und.",1)]),_:2},1024)):_.stock<=10&&_.stock>0?(d(),k(v,{key:1,color:"warning"},{default:s(()=>[c(u(p.getStock(_))+" und.",1)]),_:2},1024)):(d(),k(v,{key:2,color:"danger"},{default:s(()=>[c(u(p.getStock(_))+" und.",1)]),_:2},1024))]),_:2},1024)]),_:2},1032,["onClick","color"]))),128))]),_:1})):e.isLoading?(d(),k(S,{key:1},{default:s(()=>[o(C,null,{default:s(()=>[o(m,{colspan:"7",class:"text-center p-4"},{default:s(()=>[o(T,{color:"primary"})]),_:1})]),_:1})]),_:1})):(d(),k(S,{key:2},{default:s(()=>[o(C,null,{default:s(()=>[o(m,{colspan:"7",class:"text-center p-4"},{default:s(()=>[Rt]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})])}const jt=A(Nt,[["render",Ht]]),Gt={emits:["visible"],props:{visible:{type:Boolean,default:!1},data:{type:Object,default:null}},data(){return{category:null,productSelected:[],COIN:V,importe:0,total:0,client:null,discount:0,time:Y(new Date().setSeconds(new Date().getSeconds()+40))}},computed:{getCambio(){const e=parseFloat(this.total),t=this.importe-e;return t>=0?t:`Falta ${t*-1}!`}},methods:{setTotal(e){this.total=e,(this.importe===0||this.total>this.importe)&&(this.importe=e)},saveData(){if(!this.$store.state.caja.caja){this.$emit("visible",!1),K("warning");return}if(this.productSelected.length<=0){X("No hay productos agregados para la venta!","warning");return}const e=this.time.split(":"),t=new Date;t.setHours(e[0]),t.setMinutes(e[1]);const i={date:t,discount:this.discount,total:this.total,products:this.productSelected.map(h=>({amount:h.amount,idProducts:h.id,price:h.price})),importe:this.importe};this.$store.state.caja.caja.idOpened?this.saving(i):Z.fire({title:"No se ha efectuado la apertura de caja ¿Desea continuar?",icon:"question",showCancelButton:!0,confirmButtonColor:"#321fdb",cancelButtonColor:"#bdbdbd",confirmButtonText:"ACEPTAR",cancelButtonText:"CANCELAR"}).then(h=>{h.isConfirmed&&this.saving(i)})},async saving(e){this.client&&(e.idClients=this.client.id);let t;this.data?t=await this.$store.dispatch("venta/update",{id:this.data.id,...e}):t=await this.$store.dispatch("venta/create",e),t&&(this.client=null,this.total=0,this.importe=0,this.productSelected=[],this.discount=0,this.$emit("visible",!1))},setData(e){if(!e){this.total=0,this.importe=0,this.discount=0,this.client=null,this.productSelected=[];return}this.total=e.total,this.importe=e.importe,this.discount=e.discount,e.Client?this.client=e.Client:this.client=null,this.productSelected=e.VentaProducts.map(t=>({amount:t.amount,price:t.price,description:t.Product.description,id:t.Product.id,idCategories:t.Product.idCategories,image:t.Product.image,name:t.Product.name,status:t.Product.status,stock:t.Product.stock}))}},watch:{data(e){this.setData(e)}},components:{CategorySelect:xt,ProductAdded:Lt,ProductSelect:jt,InputSearchClient:gt}},Et={class:"row g-1"},Ut={class:"col-12 col-sm-6"},qt={class:"col-12 col-sm-6"},zt=a("span",{class:"text-danger"},"*",-1),Kt={class:"col-sm-12 col-md-12"},Xt={class:"col-12 col-md-7"},Zt={class:"col-12 col-md-5"},Jt={class:"d-flex align-items-center"};function Qt(e,t,i,h,n,p){const y=l("CModalTitle"),C=l("CModalHeader"),r=l("InputSearchClient"),m=l("CFormLabel"),v=l("CFormInput"),S=l("CFormFeedback"),T=l("category-select"),x=l("ProductAdded"),w=l("ProductSelect"),_=l("CModalBody"),I=l("CInputGroupText"),P=l("CInputGroup"),O=l("CIcon"),f=l("CButton"),$=l("CModalFooter"),F=l("CModal");return d(),k(F,{alignment:"center",visible:i.visible,backdrop:"static",size:"xl",onClose:t[9]||(t[9]=()=>{e.$emit("visible",!1)})},{default:s(()=>[o(C,null,{default:s(()=>[o(y,null,{default:s(()=>[c("VENDER ")]),_:1})]),_:1}),o(_,null,{default:s(()=>[a("div",Et,[a("div",Ut,[o(r,{data:n.client,onSetClient:t[0]||(t[0]=g=>n.client=g)},null,8,["data"])]),a("div",qt,[o(m,{for:"validateForm",class:"mb-0"},{default:s(()=>[c("Hora "),zt]),_:1}),o(v,{id:"validateForm",modelValue:n.time,"onUpdate:modelValue":t[1]||(t[1]=g=>n.time=g),type:"time",name:"time",required:""},null,8,["modelValue"]),o(S,{invalid:""},{default:s(()=>[c(" La hora de ingreso es requerido! ")]),_:1})]),a("div",Kt,[o(T,{data:n.category,onSetData:t[2]||(t[2]=g=>n.category=g)},null,8,["data"])]),a("div",Xt,[o(x,{productSelected:n.productSelected,onSetTotal:t[3]||(t[3]=g=>p.setTotal(g)),onSetDiscount:t[4]||(t[4]=g=>n.discount=g),onSetProducts:t[5]||(t[5]=g=>n.productSelected=g)},null,8,["productSelected"])]),a("div",Zt,[o(w,{category:n.category,productsAdded:n.productSelected,onSetProducts:t[6]||(t[6]=g=>n.productSelected=g)},null,8,["category","productsAdded"])])])]),_:1}),o($,null,{default:s(()=>[a("div",Jt,[o(P,{class:"max-md"},{default:s(()=>[o(I,null,{default:s(()=>[c(" Importe ")]),_:1}),o(v,{type:"number",class:"text-center",modelValue:n.importe,"onUpdate:modelValue":t[7]||(t[7]=g=>n.importe=g)},null,8,["modelValue"]),o(I,null,{default:s(()=>[c(u(n.COIN),1)]),_:1})]),_:1}),o(P,{class:"ms-1 max-md"},{default:s(()=>[o(I,{class:"text-danger"},{default:s(()=>[c(" Cambio ")]),_:1}),o(v,{type:"text",class:"text-center text-danger",disabled:"",value:p.getCambio},null,8,["value"]),o(I,{class:"text-danger"},{default:s(()=>[c(u(n.COIN),1)]),_:1})]),_:1}),o(f,{color:"secondary",type:"button",class:"ms-1",onClick:t[8]||(t[8]=g=>e.$emit("visible",!1))},{default:s(()=>[o(O,{icon:"cil-X"}),c(" Cancelar ")]),_:1}),o(f,{color:"primary",type:"button",class:"ms-1",onClick:p.saveData},{default:s(()=>[o(O,{icon:"cil-save"}),c(" "+u(i.data?"Guardar":"Registrar"),1)]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["visible"])}const ne=A(Gt,[["render",Qt]]);export{ne as A,gt as I};
