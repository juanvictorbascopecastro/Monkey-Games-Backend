import{K as N,_ as A,r as l,o as d,c as f,d as i,p as R,Y as j,a as o,j as G,Z as H,F as D,i as O,t as u,m as M,w as s,I as E,L as U,M as z,N as F,$,b as a,e as k,O as q,a0 as K,S as X}from"./index-2006f269.js";import{i as V}from"./picture-093c9837.js";import{P as Y}from"./Paginador-8381f521.js";import{d as Z}from"./user-account-441e03f2.js";import{A as J}from"./AddClient-421475f7.js";const Q={props:{data:{type:Object,default:null}},emits:["setClient"],data(){return{list:[],textSearch:null,imageDefault:Z,showList:!1,isLoading:!1,timerId:null,modalOpen:!1}},methods:{...N("client",["search"]),async searching(){this.textSearch&&this.textSearch.trim()?(this.isLoading=!0,this.list=[],clearTimeout(this.timerId),this.timerId=setTimeout(async()=>{const e=await this.search(this.textSearch);Array.isArray(e)?this.list=e:this.list=[],this.isLoading=!1},500)):this.list=[]},hideList(){setTimeout(()=>this.showList=!1,400)}},watch:{data:{immediate:!0,handler(e){e?this.textSearch=`${e.name} ${e.lastName||""}`:this.textSearch=null}}},components:{AddClient:J}},W={class:"col-md-12 search-content"},tt=i("label",null,"Cliente ",-1),et={class:"input-group"},ot=["disabled"],st={class:"input-group-append"},nt={class:"results-search"},lt={key:0,class:"list-client"},it=["onClick"],ct=["src"],at={class:"informacion-item-client"},dt={class:"nombre"},rt={class:"correo"},ut={key:1,class:"no-result text-center p-2"},pt={key:0},mt={key:1},_t={key:2};function ht(e,t,c,T,n,_){const g=l("CIcon"),h=l("add-client");return d(),f("div",W,[tt,i("div",et,[R(i("input",{type:"text",class:"form-control",placeholder:"Buscar cliente...",onInput:t[0]||(t[0]=(...r)=>_.searching&&_.searching(...r)),"onUpdate:modelValue":t[1]||(t[1]=r=>n.textSearch=r),onFocus:t[2]||(t[2]=r=>n.showList=!0),disabled:c.data,onBlur:t[3]||(t[3]=r=>_.hideList(r))},null,40,ot),[[j,n.textSearch]]),i("div",st,[i("button",{class:"btn btn-primary",type:"button",onClick:t[4]||(t[4]=r=>n.modalOpen=!0)},[o(g,{icon:"cil-plus"})]),c.data?(d(),f("button",{key:0,class:"btn btn-danger",type:"button",onClick:t[5]||(t[5]=r=>e.$emit("setClient",null))},[o(g,{icon:"cil-x"})])):G("",!0)])]),R(i("div",nt,[n.list.length>0?(d(),f("div",lt,[(d(!0),f(D,null,O(n.list,(r,p)=>(d(),f("div",{class:"item-client",key:p,onClick:y=>e.$emit("setClient",r)},[i("img",{src:n.imageDefault,alt:"Avatar",class:"avatar"},null,8,ct),i("div",at,[i("h3",dt,u(r.name)+" "+u(r.lastName||""),1),i("p",rt,u(r.code),1)])],8,it))),128))])):(d(),f("div",ut,[n.textSearch?n.list.length<=0&&!n.isLoading?(d(),f("span",mt,"No hay registros encontrados!")):(d(),f("span",_t," Buscando... ")):(d(),f("span",pt,"Buscar cliente!"))]))],512),[[H,n.showList]]),o(h,{visible:n.modalOpen,code:n.textSearch,onSetData:t[6]||(t[6]=r=>e.$emit("setClient",r)),onVisible:t[7]||(t[7]=r=>n.modalOpen=r)},null,8,["visible","code"])])}const Ct=A(Q,[["render",ht]]);const ft={props:{data:{type:Object,default:null}},emits:["setData"],computed:{...M("category",["list","isLoading"])},mounted(){this.list.length<=0&&this.loadData()},methods:{...N("category",["loadData"])}},gt=e=>(U("data-v-9ca4b20a"),e=e(),z(),e),bt=gt(()=>i("b",null,"MOSTRAR PRODUCTOS POR CATEGORIA",-1)),yt={class:"col-12 row justify-content-md-end"},vt=["onClick"];function St(e,t,c,T,n,_){const g=l("CCard");return d(),f(D,null,[bt,o(g,{class:"p-2"},{default:s(()=>[i("div",yt,[(d(!0),f(D,null,O(e.list,(h,r)=>{var p;return d(),f("div",{key:r,class:E(["col-4 col-sm-3 col-md-2 card-item text-center",{"bg-primary text-white":((p=c.data)==null?void 0:p.id)===h.id}]),onClick:y=>e.$emit("setData",h)},u(h.name),11,vt)}),128))])]),_:1})],64)}const kt=A(ft,[["render",St],["__scopeId","data-v-9ca4b20a"]]),Tt={props:{productSelected:{default:[],type:Array}},emits:["setProducts","setTotal"],data(){return{COIN:F,imageDefault:V,discount:0}},computed:{getTotal(){return this.$emit("total",this.totalPagar-this.discount),this.$emit("setTotal",this.totalPagar-this.discount),this.$emit("setDiscount",this.discount),this.totalPagar-this.discount},totalPagar(){let e=0;return this.productSelected.forEach(t=>{e+=t.price*t.amount}),this.$emit("setTotal",e),e}},methods:{remove(e){this.$emit("setProducts",this.productSelected.filter(t=>e.id!==t.id))},incremenProduct(e){const t=this.productSelected,c=t.findIndex(T=>T.id==e.id);if(c!==-1){if(t[c].amount+1>t[c].stock){$(`En stock solo cuenta con ${t[c].stock} unidades!`,"warning");return}t[c].amount++,this.$emit("setProducts",t)}},decrementProduct(e){const t=this.productSelected,c=t.findIndex(T=>T.id==e.id);if(c!==-1)if(t[c].amount<=1){$("¡La cantidad mínima permitida es 1!","warning");return}else t[c].amount--,this.$emit("setProducts",t)}}},xt=i("b",null,"PRODUCTOS AGREGADO",-1),It=["src"],Pt=i("h6",null,"No hay productos agregado!",-1),wt={class:"row p-2"},Dt={class:"col-4"},At={class:"col-4"},Ot={class:"col-4"};function Bt(e,t,c,T,n,_){const g=l("CTableHeaderCell"),h=l("CTableRow"),r=l("CTableHead"),p=l("CTableDataCell"),y=l("CIcon"),v=l("CInputGroupText"),x=l("CFormInput"),S=l("CInputGroup"),P=l("CButton"),m=l("CTableBody"),w=l("CTable"),I=l("CFormLabel"),B=l("CCard");return d(),f("div",null,[xt,o(B,null,{default:s(()=>[o(w,{responsive:"",class:"mb-0"},{default:s(()=>[o(r,null,{default:s(()=>[o(h,null,{default:s(()=>[o(g,{scope:"col"},{default:s(()=>[a("Producto")]),_:1}),o(g,{scope:"col"},{default:s(()=>[a("Cantidad")]),_:1}),o(g,{scope:"col"},{default:s(()=>[a("Total")]),_:1}),o(g,{scope:"col"},{default:s(()=>[a("Accion")]),_:1})]),_:1})]),_:1}),c.productSelected.length>0?(d(),k(m,{key:0},{default:s(()=>[(d(!0),f(D,null,O(c.productSelected,(b,C)=>(d(),k(h,{key:C},{default:s(()=>[o(p,{scope:"row",class:"p-0 ps-1"},{default:s(()=>[i("img",{src:b.image?e.$store.getters["product/getSrcImage"](b):n.imageDefault,class:"image-table"},null,8,It),a(" "+u(b.name),1)]),_:2},1024),o(p,null,{default:s(()=>[o(S,{style:{"max-width":"140px","min-width":"80px"}},{default:s(()=>[o(v,{onClick:L=>_.decrementProduct(b)},{default:s(()=>[o(y,{icon:"cil-minus"})]),_:2},1032,["onClick"]),o(x,{type:"number",class:"text-center",disabled:"",value:b.amount},null,8,["value"]),o(v,{onClick:L=>_.incremenProduct(b)},{default:s(()=>[o(y,{icon:"cil-plus"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),o(p,null,{default:s(()=>[a(u(b.amount)+" x "+u(b.price)+" = "+u(b.amount*b.price)+" "+u(n.COIN),1)]),_:2},1024),o(p,null,{default:s(()=>[o(P,{color:"danger",variant:"outline",type:"button",size:"sm",onClick:L=>_.remove(b)},{default:s(()=>[o(y,{icon:"cil-trash"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})):(d(),k(m,{key:1},{default:s(()=>[o(h,null,{default:s(()=>[o(p,{colspan:"7",class:"text-center p-3"},{default:s(()=>[Pt]),_:1})]),_:1})]),_:1}))]),_:1}),i("div",wt,[i("div",Dt,[o(I,{for:"validatedCustom01",class:"mb-0"},{default:s(()=>[a("Sub Total ")]),_:1}),o(S,null,{default:s(()=>[o(x,{type:"number",class:"text-center",disabled:"",value:_.totalPagar},null,8,["value"]),o(v,null,{default:s(()=>[a(u(n.COIN),1)]),_:1})]),_:1})]),i("div",At,[o(I,{for:"validatedCustom01",class:"mb-0"},{default:s(()=>[a("Descuento ")]),_:1}),o(S,null,{default:s(()=>[o(x,{type:"number",class:"text-center",modelValue:n.discount,"onUpdate:modelValue":t[0]||(t[0]=b=>n.discount=b)},null,8,["modelValue"]),o(v,null,{default:s(()=>[a(u(n.COIN),1)]),_:1})]),_:1})]),i("div",Ot,[o(I,{for:"validatedCustom01",class:"mb-0"},{default:s(()=>[a("Total ")]),_:1}),o(S,null,{default:s(()=>[o(x,{type:"number",class:"text-center",disabled:"",value:_.getTotal},null,8,["value"]),o(v,null,{default:s(()=>[a(u(n.COIN),1)]),_:1})]),_:1})])])]),_:1})])}const $t=A(Tt,[["render",Bt]]),Nt={props:{productsAdded:{default:[],type:Array},category:{default:null,type:Object}},emits:["setProducts"],data(){return{COIN:F,imageDefault:V,modalHistory:!1,listFilter:[]}},computed:{...M("product",["list","isLoading"])},async mounted(){this.list.length<=0&&await this.loadData(),this.listFilter=this.list},methods:{...N("product",["loadData"]),setItem(e){e={amount:e.amount,description:e.description,id:e.id,idCategories:e.idCategories,image:e.image,name:e.name,price:e.price,status:e.status,stock:e.stock};const t=this.productsAdded,c=t.findIndex(T=>T.id==e.id);if(c!==-1){if(t[c].amount+1>t[c].stock){$(`En stock solo cuenta con ${t[c].stock} unidades!`,"warning");return}t[c].amount++}else e.amount=1,t.push(e);this.$emit("setProducts",t)},getColor(e){return this.productsAdded.some(t=>t.id===e.id)?"primary":""}},watch:{category:{immediate:!0,handler(e){e?this.listFilter=this.list.filter(t=>t.idCategories===e.id):this.listFilter=this.list}}},components:{Paginador:Y}},Ft=i("b",null,"PRODUCTOS",-1),Lt=["src"],Rt=i("h6",null,"No hay registros!",-1);function Mt(e,t,c,T,n,_){const g=l("CTableHeaderCell"),h=l("CTableRow"),r=l("CTableHead"),p=l("CTableDataCell"),y=l("CBadge"),v=l("CTableBody"),x=l("CSpinner"),S=l("CTable"),P=l("CCard");return d(),f("div",null,[Ft,o(P,null,{default:s(()=>[o(S,{responsive:"",hover:"",striper:"",class:"mb-0"},{default:s(()=>[o(r,null,{default:s(()=>[o(h,null,{default:s(()=>[o(g,{scope:"col"},{default:s(()=>[a("Producto")]),_:1}),o(g,{scope:"col"},{default:s(()=>[a("Precio")]),_:1}),o(g,{scope:"col"},{default:s(()=>[a("Stock")]),_:1})]),_:1})]),_:1}),n.listFilter.length>0?(d(),k(v,{key:0},{default:s(()=>[(d(!0),f(D,null,O(n.listFilter,(m,w)=>(d(),k(h,{key:w,onClick:I=>_.setItem(m),color:_.getColor(m)},{default:s(()=>[o(p,{scope:"row",class:"p-0 ps-1"},{default:s(()=>[i("img",{src:m.image?e.$store.getters["product/getSrcImage"](m):n.imageDefault,class:"image-table"},null,8,Lt),a(" "+u(m.name),1)]),_:2},1024),o(p,null,{default:s(()=>[a(u(m.price)+" "+u(n.COIN),1)]),_:2},1024),o(p,null,{default:s(()=>[m.stock>10?(d(),k(y,{key:0,color:"success"},{default:s(()=>[a(u(m.stock)+" und.",1)]),_:2},1024)):m.stock<=10&&m.stock>0?(d(),k(y,{key:1,color:"warning"},{default:s(()=>[a(u(m.stock)+" und.",1)]),_:2},1024)):(d(),k(y,{key:2,color:"danger"},{default:s(()=>[a(u(m.stock)+" und.",1)]),_:2},1024))]),_:2},1024)]),_:2},1032,["onClick","color"]))),128))]),_:1})):e.isLoading?(d(),k(v,{key:1},{default:s(()=>[o(h,null,{default:s(()=>[o(p,{colspan:"7",class:"text-center p-4"},{default:s(()=>[o(x,{color:"primary"})]),_:1})]),_:1})]),_:1})):(d(),k(v,{key:2},{default:s(()=>[o(h,null,{default:s(()=>[o(p,{colspan:"7",class:"text-center p-4"},{default:s(()=>[Rt]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})])}const Vt=A(Nt,[["render",Mt]]),jt={emits:["visible"],props:{visible:{type:Boolean,default:!1},data:{type:Object,default:null}},data(){return{category:null,productSelected:[],COIN:F,importe:0,total:0,client:null,discount:0}},computed:{getCambio(){const e=parseFloat(this.total),t=this.importe-e;return t>=0?t:`Falta ${t*-1}!`}},methods:{setTotal(e){this.total=e,(this.importe===0||this.total>this.importe)&&(this.importe=e)},saveData(){if(!this.$store.state.caja.caja){this.$emit("visible",!1),q("warning");return}if(this.productSelected.length<=0){K("No hay productos agregados para la venta!","warning");return}const e={date:new Date,discount:this.discount,total:this.total,products:this.productSelected.map(t=>({amount:t.amount,idProducts:t.id,price:t.price})),importe:this.importe};this.$store.state.caja.caja.idOpened?this.saving(e):X.fire({title:"No se ha efectuado la apertura de caja ¿Desea continuar?",icon:"question",showCancelButton:!0,confirmButtonColor:"#321fdb",cancelButtonColor:"#bdbdbd",confirmButtonText:"ACEPTAR",cancelButtonText:"CANCELAR"}).then(t=>{t.isConfirmed&&this.saving(e)})},async saving(e){this.client&&(e.idClients=this.client.id);let t;this.data?t=await this.$store.dispatch("venta/update",{id:this.data.id,...e}):t=await this.$store.dispatch("venta/create",e),t&&(this.client=null,this.total=0,this.importe=0,this.productSelected=[],this.discount=0,this.$emit("visible",!1))},setData(e){if(!e){this.total=0,this.importe=0,this.discount=0,this.client=null,this.productSelected=[];return}this.total=e.total,this.importe=e.importe,this.discount=e.discount,e.Client?this.client=e.Client:this.client=null,this.productSelected=e.VentaProducts.map(t=>({amount:t.amount,price:t.price,description:t.Product.description,id:t.Product.id,idCategories:t.Product.idCategories,image:t.Product.image,name:t.Product.name,status:t.Product.status,stock:t.Product.stock}))}},watch:{data(e){this.setData(e)}},components:{CategorySelect:kt,ProductAdded:$t,ProductSelect:Vt,InputSearchClient:Ct}},Gt={class:"row g-1"},Ht={class:"col-sm-12 col-md-12"},Et={class:"col-sm-12 col-md-12"},Ut={class:"col-12 col-md-7"},zt={class:"col-12 col-md-5"},qt={class:"d-flex align-items-center"};function Kt(e,t,c,T,n,_){const g=l("CModalTitle"),h=l("CModalHeader"),r=l("InputSearchClient"),p=l("category-select"),y=l("ProductAdded"),v=l("ProductSelect"),x=l("CModalBody"),S=l("CInputGroupText"),P=l("CFormInput"),m=l("CInputGroup"),w=l("CIcon"),I=l("CButton"),B=l("CModalFooter"),b=l("CModal");return d(),k(b,{alignment:"center",visible:c.visible,backdrop:"static",size:"xl",onClose:t[8]||(t[8]=()=>{e.$emit("visible",!1)})},{default:s(()=>[o(h,null,{default:s(()=>[o(g,null,{default:s(()=>[a("VENDER ")]),_:1})]),_:1}),o(x,null,{default:s(()=>[i("div",Gt,[i("div",Ht,[o(r,{data:n.client,onSetClient:t[0]||(t[0]=C=>n.client=C)},null,8,["data"])]),i("div",Et,[o(p,{data:n.category,onSetData:t[1]||(t[1]=C=>n.category=C)},null,8,["data"])]),i("div",Ut,[o(y,{productSelected:n.productSelected,onSetTotal:t[2]||(t[2]=C=>_.setTotal(C)),onSetDiscount:t[3]||(t[3]=C=>n.discount=C),onSetProducts:t[4]||(t[4]=C=>n.productSelected=C)},null,8,["productSelected"])]),i("div",zt,[o(v,{category:n.category,productsAdded:n.productSelected,onSetProducts:t[5]||(t[5]=C=>n.productSelected=C)},null,8,["category","productsAdded"])])])]),_:1}),o(B,null,{default:s(()=>[i("div",qt,[o(m,{class:"max-md"},{default:s(()=>[o(S,null,{default:s(()=>[a(" Importe ")]),_:1}),o(P,{type:"number",class:"text-center",modelValue:n.importe,"onUpdate:modelValue":t[6]||(t[6]=C=>n.importe=C)},null,8,["modelValue"]),o(S,null,{default:s(()=>[a(u(n.COIN),1)]),_:1})]),_:1}),o(m,{class:"ms-1 max-md"},{default:s(()=>[o(S,{class:"text-danger"},{default:s(()=>[a(" Cambio ")]),_:1}),o(P,{type:"text",class:"text-center text-danger",disabled:"",value:_.getCambio},null,8,["value"]),o(S,{class:"text-danger"},{default:s(()=>[a(u(n.COIN),1)]),_:1})]),_:1}),o(I,{color:"secondary",type:"button",class:"ms-1",onClick:t[7]||(t[7]=C=>e.$emit("visible",!1))},{default:s(()=>[o(w,{icon:"cil-X"}),a(" Cancelar ")]),_:1}),o(I,{color:"primary",type:"button",class:"ms-1",onClick:_.saveData},{default:s(()=>[o(w,{icon:"cil-save"}),a(" "+u(c.data?"Guardar":"Registrar"),1)]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["visible"])}const Wt=A(jt,[["render",Kt]]);export{Wt as A,Ct as I};
