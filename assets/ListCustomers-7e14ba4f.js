import{d as ae,u as ie,i,y as ue,k as ce,r as f,o as u,c,a as e,t as o,m as V,b as s,w as n,h as r,H as de,f as d,F as Q,n as G,_ as re}from"./index-b45d4e71.js";import{N as me,a as pe}from"./NewOportunity-2125a7b7.js";import{g as fe,N as ve,E as _e,d as he,a as be}from"./EditCustomer-5d66d746.js";import{f as ye}from"./format-8e15a9c0.js";import"./utils-17deefef.js";import"./helpers-a12fb3e4.js";import"./Services-414ecf00.js";import"./InputAddress-fae9484f.js";import"./lodash-29f837a1.js";import"./oportunities-store-5a7168b3.js";import"./Orders-7a56ac88.js";const Ce={class:"py-4"},ge={class:"flex justify-between align-center justify-center"},Ve={class:"h5 m-0"},xe={class:"flex gap-2"},ke=e("span",{class:"px-1"},"Descargar",-1),Ne={class:"px-1"},we={class:"px-1"},Te={class:"mt-5"},ze={class:"columns-5 mb-7"},Ee={class:"w-full bg-white p-2"},Ue={class:"flex gap-1"},Ae={class:"font-bold text-primary"},Fe={colspan:"8"},Ie={class:"flex justify-end mt-4"},$e={class:"flex px-2 py-3 gap-2 bg-blue-50 mx-10 rounded my-2"},Be={class:"w-full pl-2"},Me={class:"gap-1"},Se={class:"text-base font-medium"},je={class:"uppercase font-black"},Pe={class:"w-full columns-6 mt-2 mb-1"},Re={key:0,class:"w-full items-center text-xs"},Le=e("b",null,"DNI:",-1),qe=e("br",null,null,-1),Oe={key:1,class:"w-full items-center text-xs"},He=e("b",null,"RUC:",-1),We=e("br",null,null,-1),Qe={key:2,class:"w-full items-center text-xs"},Ge=e("b",null,"Teléfono:",-1),Je=e("br",null,null,-1),Ke={key:3,class:"w-full items-center text-xs"},Xe=e("b",null,"WhatsApp:",-1),Ye=e("br",null,null,-1),Ze={key:4,class:"w-full items-center text-xs"},De=e("b",null,"Correo Electrónico:",-1),el=e("br",null,null,-1),ll={class:"flex flex-col bg-white mt-6 py-2 pb-5 px-4"},tl={key:0,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},sl={key:0,class:"bg-red-300 font-bold p-2 -mb-1"},ol={key:1,class:"va-table-responsive w-full"},nl={class:"va-table w-full"},al=e("thead",null,[e("tr",null,[e("th",null,"n° Cotización"),e("th",null,"Comercial"),e("th",null,"Servicios"),e("th",null,"Vehiculos"),e("th",null,"Fecha Creación"),e("th",null,"Estado")])],-1),il={key:1,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},ul=e("p",{class:"bg-red-300 font-bold p-2"},"El cliente no tiene ordenes de trabajo",-1),cl=e("div",{class:"va-table-responsive w-full"},[e("table",{class:"va-table w-full"},[e("thead",null,[e("tr",null,[e("th",null,"n° Orden"),e("th",null,"Responsable"),e("th",null,"Servicios"),e("th",null,"Vehiculos"),e("th",null,"Fecha Inicio"),e("th",null,"Fecha Fin")])]),e("tbody",null,[r(` <tr v-for="user in []" :key="user.id">
                            <td>{{ user.fullName }}</td>
                            <td>{{ user.fullName }}</td>
                            <td>{{ user.fullName }}</td>
                            <td>{{ user.fullName }}</td>
                            <td>{{ user.fullName }}</td>
                          </tr> `)])])],-1),dl=[ul,cl],rl={key:2,class:"bg-gray-100 p-3 rounded mt-4 pb-5"},ml={key:0,class:"bg-red-300 font-bold p-2 -mb-1"},pl={key:1,class:"va-table-responsive w-full"},fl={class:"va-table w-full"},vl=e("thead",null,[e("tr",null,[e("th",null,"Razón Social"),e("th",null,"RUC"),e("th",null,"Teléfono"),e("th",null,"WhatsApp"),e("th",null,"Fecha Creación")])],-1),_l={class:"mt-4"},hl=e("p",{class:"text-sm"},"¿Deseas archivar este cliente?",-1),bl={class:"mt-4"},yl={class:"mt-4"},Cl=e("p",{class:"text-sm"},"¿Deseas eliminar este cliente?",-1),gl=ae({__name:"ListCustomers",setup(Vl){const{notify:S}=ie(),b=i([]),x=i(!1),k=i(!1),N=i(!1),U=i(!1),v=i(null),A=i(!1),F=i(!1),j=i(!1),J=i(0),w=i(12),I=i(1),$=i(""),{t:T}=ue(),K=[{key:"id",sortable:!1},{key:"Nombres Completos",sortable:!1},{key:"Empresa",sortable:!1},{key:"Documento",sortable:!1},{key:"Teléfono",sortable:!1},{key:"Correo",sortable:!1},{key:"Fecha Creación",sortable:!1},{key:"Acciones",width:80,sortable:!1}];ce(()=>{B()});const B=async m=>{F.value=!0;const t=await fe(m);b.value=t.map(a=>{var E;return{...a,"Nombres Completos":a.fullname,Empresa:(E=a.company)==null?void 0:E.ruc,Documento:a.document,Teléfono:a.cellphone,Correo:a.email,"Fecha Creación":ye(a.created_at,"dd/MM/yyyy hh:mm aa"),Acciones:!0,activeTab:0}}),F.value=!1},X=m=>{N.value=!!m,v.value=m},P=m=>{U.value=!!m,v.value=m},R=()=>{x.value=!1,N.value=!1,B()},Y=async()=>{A.value=!0,await he(v.value),S({message:"Cliente eliminado correctamente",color:"success",duration:1e3}),setTimeout(()=>{A.value=!1,P(null),B()})},Z=()=>w.value&&w.value!==0?Math.ceil(b.value.length/w.value):b.value.length,M=i(!1),D=()=>{M.value=!0,setTimeout(()=>{M.value=!1},2e3),console.log("download")},ee=i(!1),z=i(!1),L=m=>{z.value=!!m,v.value=m},le=async()=>{await be(v.value),b.value=b.value.filter(m=>m.id!==v.value),v.value=null,z.value=!1,S({message:"Cliente archivado correctamente",color:"success",duration:1e3})};return(m,t)=>{const a=f("VaButton"),E=f("VaInput"),te=f("VaPagination"),g=f("VaIcon"),se=f("VaTab"),oe=f("VaTabs"),ne=f("VaDataTable");f("VaChip"),f("VaAlert");const C=f("VaModal");return u(),c("div",Ce,[e("div",ge,[e("h1",Ve,o(V(T)("contacts.allContacts"))+" ("+o(b.value.length)+")",1),e("div",xe,[s(a,{icon:"exit_to_app",color:"info",loading:M.value,href:V(de)+"/contacts/xls",onClick:D},{default:n(()=>[ke]),_:1},8,["loading","href"]),s(a,{icon:"domain_add",color:"primary",onClick:t[0]||(t[0]=l=>k.value=!0)},{default:n(()=>[e("span",Ne,o(V(T)("contacts.newCompany")),1)]),_:1}),s(a,{icon:"person_add",color:"primary",onClick:t[1]||(t[1]=l=>x.value=!0)},{default:n(()=>[e("span",we,o(V(T)("contacts.newContact")),1)]),_:1})])]),e("div",Te,[e("div",ze,[e("div",null,[s(E,{modelValue:$.value,"onUpdate:modelValue":t[2]||(t[2]=l=>$.value=l),label:V(T)("contacts.search"),placeholder:"Escribe lo que buscas",class:"text-xxs",clearable:"",background:"#fff"},null,8,["modelValue","label"])])]),e("div",Ee,[s(ne,{items:b.value,columns:K,class:"text-xs",hoverable:"","selected-color":"#eee",filter:$.value,"per-page":w.value,"current-page":I.value,loading:F.value,"no-data-html":"...",onFiltered:t[4]||(t[4]=l=>J.value=l.items.length)},{"cell(Acciones)":n(({row:l,isExpanded:y})=>[e("div",Ue,[s(a,{icon:"archive",color:"gray",round:"",onClick:_=>{var h;return L((h=l==null?void 0:l.rowData)==null?void 0:h.id)}},null,8,["onClick"]),r(' <VaButton icon="note_add" color="#a650de" round @click="viewQuotation(row?.rowData?.id)"></VaButton> '),s(a,{icon:"edit",color:"#158de3",round:"",onClick:_=>{var h;return X((h=l==null?void 0:l.rowData)==null?void 0:h.id)}},null,8,["onClick"]),s(a,{icon:y?"va-arrow-up":"va-arrow-down",preset:"primary",onClick:_=>l.toggleRowDetails()},null,8,["icon","onClick"])])]),"cell(Empresa)":n(({row:l})=>{var y,_;return[e("span",Ae,o((_=(y=l.rowData)==null?void 0:y.company)==null?void 0:_.ruc),1)]}),bodyAppend:n(()=>[e("tr",null,[e("td",Fe,[e("div",Ie,[s(te,{modelValue:I.value,"onUpdate:modelValue":t[3]||(t[3]=l=>I.value=l),size:"small",class:"text-xs mb-3 justify-center sm:justify-start","buttons-preset":"primary","active-page-color":"textPrimary",pages:Z()},null,8,["modelValue","pages"])])])])]),expandableRow:n(({rowData:l})=>{var y,_,h,q,O,H,W;return[e("div",$e,[e("div",Be,[e("div",Me,[e("span",Se,[e("span",je,o(l["Nombres Completos"]),1)])]),e("div",Pe,[l.Documento?(u(),c("div",Re,[Le,d(),qe,e("span",null,[d(o(l.Documento)+" ",1),s(g,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):r("v-if",!0),l.ruc?(u(),c("div",Oe,[He,d(),We,e("span",null,[d(o(l.ruc)+" ",1),s(g,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):r("v-if",!0),l.cellphone?(u(),c("div",Qe,[Ge,d(),Je,e("span",null,[d(o(l.cellphone)+" ",1),s(g,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):r("v-if",!0),l.whatsapp?(u(),c("div",Ke,[Xe,d(),Ye,e("span",null,[d(o(l.whatsapp)+" ",1),s(g,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):r("v-if",!0),l.email?(u(),c("div",Ze,[De,d(),el,e("span",null,[d(o(l.email)+" ",1),s(g,{size:"10px",class:"cursor-pointer",name:"content_copy"})])])):r("v-if",!0)]),e("div",ll,[s(oe,{modelValue:l.activeTab,"onUpdate:modelValue":p=>l.activeTab=p},{tabs:n(()=>[(u(),c(Q,null,G(["Empresa"],p=>s(se,{key:p},{default:n(()=>[d(o(p),1)]),_:2},1024)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),l.activeTab===1?(u(),c("div",tl,[(y=l.quotations)!=null&&y.length?r("v-if",!0):(u(),c("p",sl," El cliente no tiene cotizaciones ")),(_=l.quotations)!=null&&_.length?(u(),c("div",ol,[e("table",nl,[al,e("tbody",null,[(u(!0),c(Q,null,G(l.quotations,p=>(u(),c("tr",{key:p.id},[e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1),e("td",null,o(p.fullName),1)]))),128))])])])):r("v-if",!0)])):r("v-if",!0),l.activeTab===2?(u(),c("div",il,[...dl])):r("v-if",!0),l.activeTab===0?(u(),c("div",rl,[l.company?r("v-if",!0):(u(),c("p",ml," El cliente no está asociado a empresa ")),l.company?(u(),c("div",pl,[e("table",fl,[vl,e("tbody",null,[e("tr",null,[e("td",null,o((h=l.company)==null?void 0:h.socialreason),1),e("td",null,o((q=l.company)==null?void 0:q.ruc),1),e("td",null,o((O=l.company)==null?void 0:O.phone),1),e("td",null,o((H=l.company)==null?void 0:H.whatsapp),1),e("td",null,o((W=l.company)==null?void 0:W.created_at),1)])])])])):r("v-if",!0)])):r("v-if",!0)])])])]}),_:1},8,["items","filter","per-page","current-page","loading","no-data-html"]),r("v-if",!0)])]),s(C,{modelValue:k.value,"onUpdate:modelValue":t[6]||(t[6]=l=>k.value=l),"hide-default-actions":"",size:"340px","close-button":"",blur:"","no-dismiss":""},{default:n(()=>[e("div",null,[s(ve,{onClose:t[5]||(t[5]=l=>k.value=!1)})])]),_:1},8,["modelValue"]),s(C,{modelValue:x.value,"onUpdate:modelValue":t[7]||(t[7]=l=>x.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:n(()=>[e("div",_l,[s(me,{onClose:R})])]),_:1},8,["modelValue"]),s(C,{modelValue:z.value,"onUpdate:modelValue":t[9]||(t[9]=l=>z.value=l),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:n(()=>[s(a,{size:"small",preset:"secondary",class:"mr-1",onClick:t[8]||(t[8]=l=>L(null))},{default:n(()=>[d(" Cancelar")]),_:1}),s(a,{size:"small",loading:ee.value,onClick:le},{default:n(()=>[d(" Continuar")]),_:1},8,["loading"])]),default:n(()=>[hl]),_:1},8,["modelValue"]),s(C,{modelValue:N.value,"onUpdate:modelValue":t[10]||(t[10]=l=>N.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:n(()=>[e("div",bl,[s(_e,{id:v.value,onClose:R},null,8,["id"])])]),_:1},8,["modelValue"]),s(C,{modelValue:j.value,"onUpdate:modelValue":t[11]||(t[11]=l=>j.value=l),"hide-default-actions":"",size:"medium","close-button":"",blur:"","no-dismiss":""},{default:n(()=>[e("div",yl,[s(pe)])]),_:1},8,["modelValue"]),s(C,{modelValue:U.value,"onUpdate:modelValue":t[13]||(t[13]=l=>U.value=l),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:n(()=>[s(a,{size:"small",preset:"secondary",class:"mr-1",onClick:t[12]||(t[12]=l=>P(null))},{default:n(()=>[d(" Cancelar")]),_:1}),s(a,{size:"small",loading:A.value,onClick:Y},{default:n(()=>[d(" Continuar")]),_:1},8,["loading"])]),default:n(()=>[Cl]),_:1},8,["modelValue"])])}}}),$l=re(gl,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/customers/pages/ListCustomers.vue"]]);export{$l as default};
//# sourceMappingURL=ListCustomers-7e14ba4f.js.map