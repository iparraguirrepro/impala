import{A as J,d as S,u as G,i as V,j as L,k as M,r as i,o as g,c as U,b as t,w as u,f as D,a as e,h as w,_ as A,l as H,t as E,m as I,F as q,n as O,g as N}from"./index-b45d4e71.js";import K from"./Masters-22015e44.js";import W from"./General-8309294e.js";import X from"./Users-17f27922.js";import{E as B}from"./Employee-989edf47.js";import{v as F}from"./utils-17deefef.js";import{f as Y}from"./format-8e15a9c0.js";import"./Services-414ecf00.js";import"./lodash-29f837a1.js";import"./helpers-a12fb3e4.js";import"./InputAddress-fae9484f.js";import"./Auth-a8d1b519.js";const P={list:J+"/configurations/company"},Q=localStorage.getItem("__token"),Z=async $=>{const f={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Q},body:JSON.stringify($)};let a=null;return await fetch(P.list,f).then(m=>{a=m.json()}),a},ee=async()=>{const $={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Q}};let f=null;return await fetch(P.list,$).then(a=>{f=a.json()}),f},R={update:Z,getCompany:ee},ae={class:"flex flex-col space-y-6 md:space-y-4"},te={class:"flex flex-col mt-4 px-4"},le={class:"mb-4"},oe={key:0,class:"my-2 mb-4"},se=e("p",{class:"mb-2",style:{"font-size":"11px","font-weight":"600",color:"var(--va-primary)"}},"Firma:",-1),ne=["src"],ie={key:1,class:"text-xxs bg-red-100 px-2"},de={class:"mb-5"},ue=e("p",{style:{"font-size":"11px","font-weight":"600",color:"var(--va-primary)"}},"Condiciones Generales:",-1),ce={class:"flex justify-end"},re=e("span",{class:"ml-2"},"Actualizar",-1),me=S({__name:"Company",setup($){const{notify:f}=G(),a=V({}),{validate:m}=L("formCompany"),_=V([]),p=V(!1);M(async()=>{await c()});const C=async r=>new Promise((s,x)=>{const l=new FileReader;l.readAsDataURL(r),l.onload=()=>s(l.result),l.onerror=x});async function c(){p.value=!0;const r=await R.getCompany();a.value={name:r.name,signature:r.signature,social_reason:r.social_reason,ruc:r.ruc,office:r.office,email:r.email,phone:r.phone,conditions:r.conditions},p.value=!1}const v=async()=>{try{if(m(),_.value.length){const r=await C(_.value[0]);a.value.sign=r}await R.update(a.value),f({message:"Actualizado correctamente",color:"success"})}catch(r){console.log(r)}};return(r,s)=>{const x=i("VaButton"),l=i("VaCardTitle"),d=i("VaInput"),b=i("VaFileUpload"),h=i("QuillEditor"),y=i("VaForm"),k=i("VaCardContent"),z=i("VaCard");return g(),U("div",ae,[t(z,null,{default:u(()=>[t(l,{class:"flex justify-between"},{default:u(()=>[D(" Datos de Empresa "),t(x,{class:"ml-3 pr-2 pl-1",icon:"save",color:"primary",onClick:v},{default:u(()=>[D("Actualizar")]),_:1})]),_:1}),t(k,null,{default:u(()=>[e("div",null,[e("div",te,[t(y,{ref:"formCompany",immediate:"",class:"gap-2"},{default:u(()=>{var T,j,n;return[t(d,{modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=o=>a.value.name=o),stateful:"",name:"name",clearable:"",label:"Nombre de Empresa",class:"mb-4",loading:p.value},null,8,["modelValue","loading"]),t(d,{modelValue:a.value.social_reason,"onUpdate:modelValue":s[1]||(s[1]=o=>a.value.social_reason=o),stateful:"",name:"social_reason",clearable:"",label:"Razón Social",class:"mb-4",loading:p.value},null,8,["modelValue","loading"]),t(d,{modelValue:a.value.ruc,"onUpdate:modelValue":s[2]||(s[2]=o=>a.value.ruc=o),stateful:"",name:"ruc",clearable:"",label:"RUC",class:"mb-4",loading:p.value},null,8,["modelValue","loading"]),t(d,{modelValue:a.value.office,"onUpdate:modelValue":s[3]||(s[3]=o=>a.value.office=o),stateful:"",name:"office",clearable:"",label:"Dirección de Oficina",class:"mb-4",loading:p.value},null,8,["modelValue","loading"]),t(d,{modelValue:a.value.email,"onUpdate:modelValue":s[4]||(s[4]=o=>a.value.email=o),stateful:"",name:"email",clearable:"",label:"Correo de Contacto",class:"mb-4",loading:p.value},null,8,["modelValue","loading"]),t(d,{modelValue:a.value.phone,"onUpdate:modelValue":s[5]||(s[5]=o=>a.value.phone=o),stateful:"",name:"phone",clearable:"",label:"Teléfono de Contacto",class:"mb-4",loading:p.value},null,8,["modelValue","loading"]),e("div",le,[(T=a.value)!=null&&T.signature?(g(),U("div",oe,[se,e("img",{src:(j=a.value)==null?void 0:j.signature,style:{width:"120px"},alt:""},null,8,ne)])):w("v-if",!0),t(b,{modelValue:_.value,"onUpdate:modelValue":s[6]||(s[6]=o=>_.value=o),dropzone:"","drop-zone-text":"Arrastra o selecciona tu firma","upload-button-text":"Buscar","file-types":"jpg,jpeg,png"},null,8,["modelValue"]),((n=_.value)==null?void 0:n.length)>1?(g(),U("p",ie,"Solo se admite un archivo.")):w("v-if",!0)]),e("div",de,[ue,t(h,{content:a.value.conditions,"onUpdate:content":s[7]||(s[7]=o=>a.value.conditions=o),theme:"snow","content-type":"html",toolbar:["bold","italic"]},null,8,["content"])])]}),_:1},512)]),e("div",ce,[t(x,{class:"pr-2 pl-1",icon:"save",color:"primary",onClick:v},{default:u(()=>[re]),_:1})])])]),_:1})]),_:1})])}}});const pe=A(me,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/settings/pages/Company.vue"]]),_e={class:"bg-blue-50"},fe={class:"mb-4"},ve={class:"flex justify-between align-center justify-center"},ge={class:"h5 font-bold m-0"},ye={class:"new-employee gap-8"},Ve={class:"w-full bg-white p-2 pb-5 mb-4"},be={class:"gap-2"},he={class:"columns-1 mt-1"},Ce={class:"w-full mb-2"},xe={class:"w-full mb-2"},we={class:"w-full mb-4"},Ue={class:"w-full"},$e={class:"pb-3"},ke={class:"flex justify-end"},je={class:"flex gap-2"},Te=e("span",{class:"text-xs px-1"},"Grabar Trabajador",-1),Ee=S({__name:"NewEmployee",props:{data:{default:null,type:Object}},emits:["close"],setup($,{emit:f}){var s,x,l,d,b;const a=f,m=$,_=V(!1),{isValid:p,validate:C}=L("formRef"),c=H({...m.data&&{names:(s=m.data)==null?void 0:s.names,lastnames:(x=m.data)==null?void 0:x.lastnames,email:(l=m.data)==null?void 0:l.email,phone:(d=m.data)==null?void 0:d.phone,status:(b=m.data)==null?void 0:b.status}}),{notify:v}=G();M(()=>{console.log(m.data)});const r=async()=>{if(C()){_.value=!0;try{const h={...c,status:c.status?1:0};(m.data?await B.update(h,m.data.id):await B.register(h)).status==!0?(v({message:"Trabajador grabado correctamente",color:"primary"}),a("close")):v({message:"Error al grabar trabajador",color:"danger"})}catch(h){console.log(h)}_.value=!1}};return(h,y)=>{var n;const k=i("VaInput"),z=i("VaSwitch"),T=i("VaForm"),j=i("VaButton");return g(),U("div",_e,[e("div",fe,[e("div",ve,[e("h1",ge,E((n=h.$props.data)!=null&&n.username?"Editar":"Nuevo")+" Trabajador",1)])]),e("div",ye,[t(T,{ref:"formRef",immediate:"",class:"gap-2"},{default:u(()=>[e("div",Ve,[e("div",be,[e("div",he,[e("div",Ce,[t(k,{modelValue:c.names,"onUpdate:modelValue":y[0]||(y[0]=o=>c.names=o),rules:[I(F).required],stateful:"",clearable:"",label:"Nombres"},null,8,["modelValue","rules"])]),e("div",xe,[t(k,{modelValue:c.lastnames,"onUpdate:modelValue":y[1]||(y[1]=o=>c.lastnames=o),rules:[I(F).required],stateful:"",clearable:"",label:"Apellidos"},null,8,["modelValue","rules"])]),e("div",we,[t(k,{modelValue:c.phone,"onUpdate:modelValue":y[2]||(y[2]=o=>c.phone=o),rules:[I(F).required],stateful:"",clearable:"",label:"Teléfono"},null,8,["modelValue","rules"])]),e("div",Ue,[t(z,{modelValue:c.status,"onUpdate:modelValue":y[3]||(y[3]=o=>c.status=o),size:"small",label:"Estado"},null,8,["modelValue"])])])])])]),_:1},512)]),e("div",$e,[e("div",ke,[e("div",je,[t(j,{icon:"save",color:"primary",disabled:!I(p),loading:_.value,onClick:r},{default:u(()=>[Te]),_:1},8,["disabled","loading"])])])])])}}});const De=A(Ee,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/settings/employee/NewEmployee.vue"]]),ze={class:"flex flex-col space-y-6 md:space-y-4"},Ne=e("span",{class:"px-1"},"Nuevo Trabajador",-1),Be={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},Ie={class:"va-table-responsive"},Se={class:"va-table w-full text-xs"},Ae=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Nombres Completos"),w(" <th>Correo Electrónico</th> "),e("th",null,"Teléfono"),e("th",null,"Estado"),e("th")])],-1),Fe={class:"flex gap-1"},Me=e("p",{class:"text-sm"},"¿Deseas eliminar este trabajador?",-1),Re=S({__name:"Employees",setup($){const f=V([]),a=V(null),m=V(!1),_=V(!1),p=V(!1),C=V(null);M(()=>{c()});const c=async()=>{_.value=!0,p.value=!1;const l=await B.getAll();f.value=l.map(d=>({...d,status:!!d.status,loading:!1,created_at:Y(new Date(d.created_at),"dd/MM/yyyy")})),_.value=!1},v=async()=>{var l;m.value=!0,await B.delete((l=a.value)==null?void 0:l.id),a.value=null,c(),m.value=!1},r=async l=>{l.loading=!0,await B.update({names:l==null?void 0:l.names,lastnames:l==null?void 0:l.lastnames,phone:l==null?void 0:l.phone,status:l!=null&&l.status?1:0},l==null?void 0:l.id),c(),l.loading=!1},s=l=>{C.value=l,p.value=!0},x=()=>{p.value=!0,C.value=null};return(l,d)=>{const b=i("VaButton"),h=i("VaCardTitle"),y=i("VaSwitch"),k=i("VaCardContent"),z=i("VaCard"),T=i("VaInnerLoading"),j=i("VaModal");return g(),U("div",ze,[t(T,{loading:_.value},{default:u(()=>[t(z,null,{default:u(()=>[t(h,{class:"d-flex justify-between"},{default:u(()=>[D(" Administración de trabajadores "),t(b,{icon:"add",color:"primary",onClick:x},{default:u(()=>[Ne]),_:1})]),_:1}),t(k,null,{default:u(()=>[e("div",Be,[e("div",Ie,[e("table",Se,[Ae,e("tbody",null,[(g(!0),U(q,null,O(f.value,n=>(g(),U("tr",{key:n.id},[e("td",null,"00"+E(n.id),1),e("td",null,E(n.names)+" "+E(n.lastnames),1),w(" <td>{{ t.email }}</td> "),e("td",null,E(n.phone),1),e("td",null,[t(y,{modelValue:n.status,"onUpdate:modelValue":[o=>n.status=o,o=>r(n)],loading:n.loading,size:"small"},null,8,["modelValue","onUpdate:modelValue","loading"])]),e("td",null,[e("div",Fe,[t(b,{icon:"edit",color:"primary",round:"",onClick:o=>s(n)},null,8,["onClick"]),t(b,{icon:"delete",color:"danger",round:"",onClick:o=>a.value=n},null,8,["onClick"])])])]))),128))])])])])]),_:1})]),_:1})]),_:1},8,["loading"]),t(j,{modelValue:p.value,"onUpdate:modelValue":d[0]||(d[0]=n=>p.value=n),size:"360px","close-button":"","hide-default-actions":"",blur:"","no-dismiss":""},{default:u(()=>[e("div",null,[t(De,{data:C.value,onClose:c},null,8,["data"])])]),_:1},8,["modelValue"]),t(j,{modelValue:a.value,"onUpdate:modelValue":d[2]||(d[2]=n=>a.value=n),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:u(()=>[t(b,{size:"small",preset:"secondary",class:"mr-1",onClick:d[1]||(d[1]=n=>a.value=null)},{default:u(()=>[D(" Cancelar")]),_:1}),t(b,{loading:m.value,size:"small",onClick:v},{default:u(()=>[D(" Continuar")]),_:1},8,["loading"])]),default:u(()=>[Me]),_:1},8,["modelValue"])])}}}),Ge=A(Re,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/settings/employee/Employees.vue"]]),Le={class:"flex flex-col space-y-6 md:space-y-4"},qe=e("div",{class:"flex justify-between align-center justify-center"},[e("h1",{class:"h5 m-0"},"Configuración")],-1),Oe={class:"flex py-3"},Pe={class:"w-1/4"},Qe={class:"settings-section w-full bg-blue-50 px-6 py-5"},Je=S({__name:"Settings",setup($){const f=[{icon:"",title:"Datos de Empresa",content:""},{icon:"",title:"Configuración General",content:""},{icon:"",title:"Maestro de Rutas",content:""},{icon:"",title:"Trabajadores",content:""},{icon:"",title:"Usuarios",content:""}],a=V(f[0].title);return(m,_)=>{const p=i("VaIcon"),C=i("VaTab"),c=i("VaTabs");return g(),U("div",Le,[qe,e("div",Oe,[e("div",Pe,[t(c,{modelValue:a.value,"onUpdate:modelValue":_[0]||(_[0]=v=>a.value=v),vertical:"",grow:""},{tabs:u(()=>[(g(),U(q,null,O(f,v=>t(C,{key:v.title,class:"text-xs py-1 px-0",name:v.title},{default:u(()=>[t(p,{name:v.icon,size:"small",class:"mr-2"},null,8,["name"]),D(" "+E(v.title),1)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])]),e("section",Qe,[a.value==="Datos de Empresa"?(g(),N(pe,{key:0})):w("v-if",!0),a.value==="Maestro de Rutas"?(g(),N(W,{key:1})):w("v-if",!0),a.value==="Configuración General"?(g(),N(K,{key:2})):w("v-if",!0),a.value==="Usuarios"?(g(),N(X,{key:3})):w("v-if",!0),a.value==="Trabajadores"?(g(),N(Ge,{key:4})):w("v-if",!0)])])])}}});const na=A(Je,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/settings/Settings.vue"]]);export{na as default};
//# sourceMappingURL=Settings-d108c55e.js.map