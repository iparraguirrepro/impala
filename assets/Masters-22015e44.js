import{d as Ce,u as xe,i as o,j as O,k as he,r as u,o as w,c as R,a as t,b as l,w as s,f as _,m as n,p as M,g as X,F as ke,_ as we,A as fe,h as W}from"./index-b45d4e71.js";import{g as Me,d as Ee,n as Be,a as ze,b as je,c as Ie,e as Oe,f as Re,h as Fe,i as Ge,j as He,k as Le}from"./Services-414ecf00.js";import{v as p}from"./utils-17deefef.js";import{l as Y}from"./lodash-29f837a1.js";import{o as De,a as Pe}from"./helpers-a12fb3e4.js";const Qe={class:"flex flex-col space-y-6 md:space-y-4"},Je={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},Ke={class:"flex gap-1"},We=t("h4",{class:"text-base mb-4"},"Nuevo Viatico",-1),Xe={class:"flex flex-col"},Ye=t("span",{class:"pr-2 font-bold text-sm"},"S/",-1),Ze={class:"flex"},el=t("span",{class:"ml-2"},"Registrar",-1),ll=t("p",{class:"text-sm"},"¿Deseas continuar?",-1),al=Ce({__name:"Expenses",setup(N){const m=De,{notify:y}=xe(),C=[{key:"Tipo",sortable:!0},{key:"Valor",sortable:!0},{key:"Acciones",width:80}],F=o([]),G=o(null),E=o(!1),$=o(!1),H=o(!1),x=o(!1),h=o({}),{validate:A,reset:B}=O("formExpense");he(async()=>{await U()});async function U(){x.value=!0;const V=await Me();F.value=V.map(r=>({...r,Tipo:r.name,Valor:`S/ ${r.value||"0.00"}`})),x.value=!1}const z=async()=>{await Ee(G.value),await U(),$.value=!1},j=async()=>{try{A(),x.value=!0,await Be({...h.value}),await U(),x.value=!1,B(),y({message:"Registrado correctamente",color:"success"}),E.value=!1}catch(V){console.log(V)}},D=V=>{$.value=!!V,G.value=V};return(V,r)=>{const g=u("VaButton"),d=u("VaCardTitle"),k=u("VaDataTable"),q=u("VaCardContent"),c=u("VaCard"),L=u("VaInput"),Z=u("VaForm"),P=u("VaModal");return w(),R(ke,null,[t("div",Qe,[l(c,null,{default:s(()=>[l(d,{class:"flex justify-between"},{default:s(()=>[_(" Viaticos "),l(g,{class:"ml-3 pr-2 pl-1",icon:"add",color:"primary",onClick:r[0]||(r[0]=v=>E.value=!0)},{default:s(()=>[_("Agregar")]),_:1})]),_:1}),l(q,null,{default:s(()=>[t("div",Je,[l(k,{items:F.value,columns:C,class:"text-xs",loading:x.value},{"cell(Acciones)":s(({row:v})=>[t("div",Ke,[l(g,{icon:"delete",color:"danger",round:"",onClick:ge=>{var Q;return D((Q=v==null?void 0:v.rowData)==null?void 0:Q.id)}},null,8,["onClick"])])]),_:1},8,["items","loading"])])]),_:1})]),_:1}),l(P,{modelValue:E.value,"onUpdate:modelValue":r[4]||(r[4]=v=>E.value=v),"hide-default-actions":"",size:"300px","close-button":"",blur:"","no-dismiss":"",onOk:j},{default:s(()=>[t("div",null,[We,t("div",Xe,[l(Z,{ref:"formExpense",immediate:"",class:"gap-2"},{default:s(()=>[l(L,{modelValue:h.value.name,"onUpdate:modelValue":r[1]||(r[1]=v=>h.value.name=v),stateful:"",name:"name",clearable:"",label:"Tipo de viatico",class:"mb-4",rules:[n(p).required]},null,8,["modelValue","rules"]),M((w(),X(L,{modelValue:h.value.value,"onUpdate:modelValue":r[2]||(r[2]=v=>h.value.value=v),stateful:"",name:"value",clearable:"",label:"Valor promedio",class:"mb-5",rules:[n(p).required],onChange:r[3]||(r[3]=()=>{h.value.value=n(Y.ceil)(h.value.value,2)})},{prependInner:s(()=>[Ye]),_:1},8,["modelValue","rules"])),[[n(m)]])]),_:1},512)]),t("div",Ze,[l(g,{class:"pr-2 pl-1",icon:"save",color:"primary",loading:x.value,onClick:j},{default:s(()=>[el]),_:1},8,["loading"])])])]),_:1},8,["modelValue"])]),l(P,{modelValue:$.value,"onUpdate:modelValue":r[6]||(r[6]=v=>$.value=v),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:s(()=>[l(g,{size:"small",preset:"secondary",class:"mr-1",onClick:r[5]||(r[5]=v=>D(null))},{default:s(()=>[_(" Cancelar")]),_:1}),l(g,{size:"small",loading:H.value,onClick:z},{default:s(()=>[_(" Continuar")]),_:1},8,["loading"])]),default:s(()=>[ll]),_:1},8,["modelValue"])],64)}}}),sl=we(al,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/settings/pages/Expenses.vue"]]),pe={list:fe+"/currencies",delete:fe+"/currencies",register:fe+"/currencies"},Ve=localStorage.getItem("__token");async function tl(){const N={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Ve}};let m=null;return await fetch(pe.list,N).then(y=>{m=y.json()}),m}async function ol(N){const m={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Ve},body:JSON.stringify(N)};let y=null;return await fetch(pe.register,m).then(C=>{y=C.json()}),y}async function nl(N){const m={method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Ve}};let y=null;return await fetch(`${pe.delete}/${N}`,m).then(C=>{y=C.json()}),y}const il={class:"flex flex-col space-y-6 md:space-y-4"},rl={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},ul={class:"flex gap-1"},cl=t("h4",{class:"text-base mb-4"},"Nuevo vehiculo",-1),dl={class:"flex flex-col"},vl=t("span",{class:"font-bold text-sm"},"S/",-1),ml={class:"flex"},fl=t("span",{class:"ml-2"},"Registrar",-1),pl={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},Vl={class:"flex gap-1"},gl=t("h4",{class:"text-base mb-4"},"Nuevo tipo de conductor",-1),bl={class:"flex flex-col"},_l=t("span",{class:"pr-2 font-bold text-sm"},"S/",-1),yl={class:"flex"},Cl=t("span",{class:"ml-2"},"Registrar",-1),xl=t("h4",{class:"text-base mb-4"},"Nueva Moneda",-1),hl={class:"flex flex-col"},kl={class:"flex"},wl=t("span",{class:"ml-2"},"Registrar",-1),Dl={class:"flex flex-col p-4 bg-backgroundSecondary rounded-lg"},Sl={class:"flex gap-1"},Tl={key:0,class:"text-base mb-4"},Nl={key:1,class:"text-base mb-4"},$l={class:"flex flex-col"},Al={class:"columns-2"},Ul=t("span",{class:"pr-2 font-bold text-sm"},"S/",-1),ql={class:"mb-5"},Ml=t("p",{style:{"font-size":"11px","font-weight":"600",color:"var(--va-primary)"}},"Condiciones especificas:",-1),El={key:2,class:"flex"},Bl=t("span",{class:"ml-2"},"Registrar",-1),zl=t("p",{class:"text-sm"},"¿Deseas continuar?",-1),jl=Ce({__name:"Masters",setup(N){const m=De,y=Pe,{notify:C}=xe(),F=[{key:"Vehiculo",sortable:!0},{key:"Fabricación",sortable:!0},{key:"Capacidad",sortable:!0},{key:"Gal/Hr",sortable:!0},{key:"Maquina Seca",sortable:!0},{key:"Acciones",width:80}],G=[{key:"Tipo Conductor",sortable:!0},{key:"Tarifa",sortable:!0},{key:"Acciones",width:80}],E=[{key:"Servicio",sortable:!0},{key:"Descripción",sortable:!0},{key:"Tarifa base",sortable:!0},{key:"Acciones",width:80}],$=o([]),H=o([]),x=o([]),h=o([]),A=o(null),B=o(!1),U=o(!1),z=o(!1),j=o(!1),D=o(!1),V=o(!1),r=o(!1),g=o(null),d=o({}),k=o({}),q=o({}),c=o({}),{validate:L,reset:Z}=O("fgVehicle"),{validate:P,reset:v}=O("fgDriver"),{validate:ge,reset:Q}=O("fgCurrency"),{validate:Se,reset:Te}=O("fgService");he(()=>{se(),oe(),ne(),le()});const ee=o(!1);async function le(){ee.value=!0;const i=await ze();x.value=i.map(e=>({...e,Servicio:e.service,Descripción:e.description,"Tarifa base":e.fee?`S/ ${e.fee||"0.00"}`:"-"})),ee.value=!1}const ae=o(!1);async function se(){ae.value=!0;const i=await je();$.value=i.map(e=>({...e,Vehiculo:e.name,Fabricación:e.year,Capacidad:e.capacity,"Gal/Hr":`${e.cost||0}`,"Maquina Seca":e.fee?`S/ ${e.fee||"0.00"}`:"-"})),ae.value=!1}const te=o(!1);async function oe(){te.value=!0;const i=await Ie();H.value=i.map(e=>({...e,"Tipo Conductor":e.type,Tarifa:e.fee?`S/ ${e.fee||"0.00"}`:"-"})),te.value=!1}async function ne(){const i=await tl();h.value=i.map(e=>({...e,Moneda:e.label,"Tipo de Cambio":e.value}))}const Ne=async()=>{g.value==="vehicles"&&(await Fe(A.value),await se()),g.value==="currencies"&&(await nl(A.value),await ne()),g.value==="drivers"&&(await Ge(A.value),await oe()),g.value==="service"&&(await He(A.value),await le()),g.value=null,V.value=!1},be=async()=>{U.value=!0;try{L(),await Oe({...d.value}),await se(),C({message:"Vehiculo registrado correctamente",color:"success"}),U.value=!1,Z(),B.value=!1}catch(i){console.log(i)}},ie=o(!1),_e=async()=>{try{P(),ie.value=!0,await Re({...k.value}),await oe(),C({message:"Conductor registrado correctamente",color:"success"}),ie.value=!1,v(),z.value=!1}catch(i){console.log(i)}},re=o(!1),$e=async()=>{try{Se(),re.value=!0,await Le({...c.value}),await le(),C({message:"Servicio registrado correctamente",color:"success"}),re.value=!1,Te(),c.value={},D.value=!1}catch(i){console.log(i)}},ye=async()=>{try{ge(),await ol({...q.value}),await ne(),C({message:"Moneda registrado correctamente",color:"success"}),Q(),j.value=!1}catch(i){console.log(i)}},J=(i,e)=>{V.value=!!i,A.value=i,g.value=e},S=o(!1),Ae=i=>{D.value=!0,S.value=!0,c.value=i},Ue=()=>{c.value={},S.value=!1};return(i,e)=>{const f=u("VaButton"),ue=u("VaCardTitle"),ce=u("VaDataTable"),de=u("VaCardContent"),ve=u("VaCard"),b=u("VaInput"),K=u("VaForm"),I=u("VaModal"),qe=u("QuillEditor");return w(),R(ke,null,[t("div",il,[l(ve,null,{default:s(()=>[l(ue,{class:"flex justify-between"},{default:s(()=>[_(" Vehiculos "),l(f,{class:"ml-3 pr-2 pl-1",icon:"add",color:"primary",onClick:e[0]||(e[0]=a=>B.value=!0)},{default:s(()=>[_("Agregar")]),_:1})]),_:1}),l(de,null,{default:s(()=>[t("div",rl,[l(ce,{items:$.value,columns:F,class:"text-xs",loading:ae.value},{"cell(Acciones)":s(({row:a})=>[t("div",ul,[l(f,{icon:"delete",color:"danger",round:"",onClick:me=>{var T;return J((T=a==null?void 0:a.rowData)==null?void 0:T.id,"vehicles")}},null,8,["onClick"])])]),_:1},8,["items","loading"])])]),_:1})]),_:1}),l(I,{modelValue:B.value,"onUpdate:modelValue":e[7]||(e[7]=a=>B.value=a),"hide-default-actions":"",size:"300px","close-button":"",blur:"","no-dismiss":"",onOk:be},{default:s(()=>[t("div",null,[cl,t("div",dl,[l(K,{ref:"fgVehicle",immediate:"",class:"gap-2"},{default:s(()=>[l(b,{modelValue:d.value.name,"onUpdate:modelValue":e[1]||(e[1]=a=>d.value.name=a),stateful:"",name:"name",clearable:"",label:"Nombre de Vehiculo",class:"mb-3",rules:[n(p).required]},null,8,["modelValue","rules"]),M(l(b,{modelValue:d.value.capacity,"onUpdate:modelValue":e[2]||(e[2]=a=>d.value.capacity=a),stateful:"",name:"capacity",type:"number",clearable:"",label:"Capacidad",class:"mb-3",rules:[n(p).required]},null,8,["modelValue","rules"]),[[n(m)]]),M(l(b,{modelValue:d.value.year,"onUpdate:modelValue":e[3]||(e[3]=a=>d.value.year=a),stateful:"",name:"year",type:"text",clearable:"",label:"Año",class:"mb-3",rules:[n(p).required]},null,8,["modelValue","rules"]),[[n(y)]]),M((w(),X(b,{modelValue:d.value.fee,"onUpdate:modelValue":e[4]||(e[4]=a=>d.value.fee=a),stateful:"",name:"fee",clearable:"",label:"Maquina Seca",class:"mb-3",rules:[n(p).required],onChange:e[5]||(e[5]=()=>{d.value.fee=n(Y.ceil)(d.value.fee,2)})},{prependInner:s(()=>[vl]),_:1},8,["modelValue","rules"])),[[n(m)]]),M(l(b,{modelValue:d.value.cost,"onUpdate:modelValue":e[6]||(e[6]=a=>d.value.cost=a),stateful:"",type:"number",name:"cost",clearable:"",label:"Consumo por kilometro (gal/hr)",class:"mb-5"},null,8,["modelValue"]),[[n(m)]])]),_:1},512)]),t("div",ml,[l(f,{class:"pr-2 pl-1",icon:"save",color:"primary",loading:U.value,onClick:be},{default:s(()=>[fl]),_:1},8,["loading"])])])]),_:1},8,["modelValue"]),l(ve,null,{default:s(()=>[l(ue,{class:"flex justify-between"},{default:s(()=>[_(" Conductores "),l(f,{class:"ml-3 pr-2 pl-1",icon:"add",color:"primary",onClick:e[8]||(e[8]=a=>z.value=!0)},{default:s(()=>[_("Agregar")]),_:1})]),_:1}),l(de,null,{default:s(()=>[t("div",pl,[l(ce,{items:H.value,columns:G,class:"text-xs",loading:te.value},{"cell(Acciones)":s(({row:a})=>[t("div",Vl,[l(f,{icon:"delete",color:"danger",round:"",onClick:me=>{var T;return J((T=a==null?void 0:a.rowData)==null?void 0:T.id,"drivers")}},null,8,["onClick"])])]),_:1},8,["items","loading"])])]),_:1})]),_:1}),l(I,{modelValue:z.value,"onUpdate:modelValue":e[12]||(e[12]=a=>z.value=a),"hide-default-actions":"",size:"300px","close-button":"",blur:"","no-dismiss":"",onOk:_e},{default:s(()=>[t("div",null,[gl,t("div",bl,[l(K,{ref:"fgDriver",immediate:"",class:"gap-2"},{default:s(()=>[l(b,{modelValue:k.value.type,"onUpdate:modelValue":e[9]||(e[9]=a=>k.value.type=a),stateful:"",name:"type",clearable:"",label:"Tipo de chofer",class:"mb-3",rules:[n(p).required]},null,8,["modelValue","rules"]),M((w(),X(b,{modelValue:k.value.fee,"onUpdate:modelValue":e[10]||(e[10]=a=>k.value.fee=a),stateful:"",name:"fee",clearable:"",label:"Tarifa por Hora",class:"mb-5",rules:[n(p).required],onChange:e[11]||(e[11]=()=>{k.value.fee=n(Y.ceil)(k.value.fee,2)})},{prependInner:s(()=>[_l]),_:1},8,["modelValue","rules"])),[[n(m)]])]),_:1},512)]),t("div",yl,[l(f,{class:"pr-2 pl-1",icon:"save",color:"primary",loading:ie.value,onClick:_e},{default:s(()=>[Cl]),_:1},8,["loading"])])])]),_:1},8,["modelValue"]),W(` <VaCard>
      <VaCardTitle class="flex justify-between">
        Monedas
        <VaButton class="ml-3 pr-2 pl-1" icon="add" color="primary" @click="showNewCurrency = true">Agregar</VaButton>
      </VaCardTitle>
      <VaCardContent>
        <div class="flex flex-col p-4 bg-backgroundSecondary rounded-lg">
          <VaDataTable :items="currencies" :columns="currenciesColumns" class="text-xs">
            <template #cell(actions)="{ row, isExpanded }">
              <div class="flex gap-1">
                <VaButton
                  icon="delete"
                  color="danger"
                  @click="needConfirm(row?.rowData?.id, 'currencies')"
                  round
                ></VaButton>
              </div>
            </template>
          </VaDataTable>
        </div>
      </VaCardContent>
    </VaCard> `),l(I,{modelValue:j.value,"onUpdate:modelValue":e[15]||(e[15]=a=>j.value=a),"hide-default-actions":"",size:"300px","close-button":"",blur:"",onOk:ye},{default:s(()=>[t("div",null,[xl,t("div",hl,[l(K,{ref:"fgCurrency",immediate:"",class:"gap-2"},{default:s(()=>[l(b,{modelValue:q.value.label,"onUpdate:modelValue":e[13]||(e[13]=a=>q.value.label=a),stateful:"",name:"label",clearable:"",label:"Moneda",class:"mb-4",rules:[n(p).required]},null,8,["modelValue","rules"]),l(b,{modelValue:q.value.value,"onUpdate:modelValue":e[14]||(e[14]=a=>q.value.value=a),stateful:"",name:"value",clearable:"",label:"Tipo de Cambio",class:"mb-5",rules:[n(p).required]},null,8,["modelValue","rules"])]),_:1},512)]),t("div",kl,[l(f,{class:"pr-2 pl-1",icon:"save",color:"primary",onClick:ye},{default:s(()=>[wl]),_:1})])])]),_:1},8,["modelValue"]),l(ve,null,{default:s(()=>[l(ue,{class:"flex justify-between"},{default:s(()=>[_(" Servicios "),l(f,{class:"ml-3 pr-2 pl-1",icon:"add",color:"primary",onClick:e[16]||(e[16]=a=>D.value=!0)},{default:s(()=>[_("Agregar")]),_:1})]),_:1}),l(de,null,{default:s(()=>[t("div",Dl,[l(ce,{items:x.value,columns:E,class:"text-xs",loading:ee.value},{"cell(Acciones)":s(({row:a})=>[t("div",Sl,[l(f,{icon:"visibility",color:"info",round:"",onClick:me=>Ae(a==null?void 0:a.rowData)},null,8,["onClick"]),l(f,{icon:"delete",color:"danger",round:"",onClick:me=>{var T;return J((T=a==null?void 0:a.rowData)==null?void 0:T.id,"service")}},null,8,["onClick"])])]),_:1},8,["items","loading"])])]),_:1})]),_:1}),l(I,{modelValue:D.value,"onUpdate:modelValue":e[22]||(e[22]=a=>D.value=a),"hide-default-actions":"",size:"400px","close-button":"","no-dismiss":"",blur:"",onBeforeClose:Ue},{default:s(()=>[t("div",null,[S.value?W("v-if",!0):(w(),R("h4",Tl,"Nuevo Servicio")),S.value?(w(),R("h4",Nl,"Detalle de Servicio")):W("v-if",!0),t("div",$l,[l(K,{ref:"fgService",immediate:"",class:"gap-2"},{default:s(()=>[l(b,{modelValue:c.value.service,"onUpdate:modelValue":e[17]||(e[17]=a=>c.value.service=a),stateful:"",name:"service",clearable:"",label:"Tipo de servicio",class:"mb-3",readonly:S.value,rules:[n(p).required]},null,8,["modelValue","readonly","rules"]),t("div",Al,[t("div",null,[l(b,{modelValue:c.value.description,"onUpdate:modelValue":e[18]||(e[18]=a=>c.value.description=a),stateful:"",name:"description",clearable:"",label:"Detalle del servicio",class:"mb-3",readonly:S.value,rules:[n(p).required]},null,8,["modelValue","readonly","rules"])]),t("div",null,[M((w(),X(b,{modelValue:c.value.fee,"onUpdate:modelValue":e[19]||(e[19]=a=>c.value.fee=a),stateful:"",name:"fee",clearable:"",label:"Tarifa base",class:"mb-3",readonly:S.value,rules:[n(p).required],onChange:e[20]||(e[20]=()=>{c.value.fee=n(Y.ceil)(c.value.fee,2)})},{prependInner:s(()=>[Ul]),_:1},8,["modelValue","readonly","rules"])),[[n(m)]])])]),t("div",ql,[Ml,l(qe,{content:c.value.specifications,"onUpdate:content":e[21]||(e[21]=a=>c.value.specifications=a),theme:"snow","content-type":"html",toolbar:["bold","italic"]},null,8,["content"])])]),_:1},512)]),S.value?W("v-if",!0):(w(),R("div",El,[l(f,{class:"pr-2 pl-1",icon:"save",color:"primary",loading:re.value,onClick:$e},{default:s(()=>[Bl]),_:1},8,["loading"])]))])]),_:1},8,["modelValue"]),l(sl)]),l(I,{modelValue:V.value,"onUpdate:modelValue":e[24]||(e[24]=a=>V.value=a),size:"250px","hide-default-actions":"","no-dismiss":"",blur:""},{footer:s(()=>[l(f,{size:"small",preset:"secondary",class:"mr-1",onClick:e[23]||(e[23]=a=>J(null,""))},{default:s(()=>[_(" Cancelar")]),_:1}),l(f,{size:"small",loading:r.value,onClick:Ne},{default:s(()=>[_(" Continuar")]),_:1},8,["loading"])]),default:s(()=>[zl]),_:1},8,["modelValue"])],64)}}}),Hl=we(jl,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/settings/Masters.vue"]]);export{Hl as default};
//# sourceMappingURL=Masters-22015e44.js.map