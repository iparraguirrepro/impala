import{d as w,I as O,r as d,o as c,c as S,b as i,u as e,g as p,w as a,J as g,x as b,f as n,a as r,t as x,z as B,_ as I}from"./index-eb5b4f51.js";import{u as N}from"./oportunities-store-e0c593ed.js";import{v as k}from"./utils-17deefef.js";import{o as D}from"./helpers-a12fb3e4.js";import{l as U}from"./lodash-14e13292.js";const P={class:"py-4"},R={class:"text-sm"},T={class:"text-sm"},M={class:"bg-blue-100 p-2 pb-4 rounded mt-3"},q=r("span",{class:"px-0 font-bold text-sm"},"S/",-1),E=w({__name:"OportunitiesPage",setup($){const v=D,u=N(),{showConfirm:l,isOnChangeStatus:f,activeOportunity:o}=O(u);return(A,t)=>{var C,V;const y=d("RouterView"),m=d("VaButton"),_=d("VaModal"),h=d("VaTextarea"),z=d("VaInput");return c(),S("div",P,[i(y),((C=e(o))==null?void 0:C.status)!=4?(c(),p(_,{key:0,modelValue:e(l),"onUpdate:modelValue":t[0]||(t[0]=s=>g(l)?l.value=s:null),size:"250px","hide-default-actions":"","no-dismiss":""},{footer:a(()=>[i(m,{size:"small",preset:"secondary",class:"mr-1",onClick:e(u).hideConfirm},{default:a(()=>[n(" Cancelar")]),_:1},8,["onClick"]),i(m,{size:"small",loading:e(f),onClick:e(u).doChangeStatus},{default:a(()=>[n(" Continuar ")]),_:1},8,["loading","onClick"])]),default:a(()=>[r("p",R,[n(" ¿Deseas cambiar el estado de la cotización "),r("b",null,"#"+x(e(o).id),1),n("? ")])]),_:1},8,["modelValue"])):b("",!0),((V=e(o))==null?void 0:V.status)===4?(c(),p(_,{key:1,modelValue:e(l),"onUpdate:modelValue":t[4]||(t[4]=s=>g(l)?l.value=s:null),size:"350px","hide-default-actions":"","no-dismiss":""},{footer:a(()=>[i(m,{size:"small",preset:"secondary",class:"mr-1",onClick:e(u).hideConfirm},{default:a(()=>[n(" Cancelar")]),_:1},8,["onClick"]),i(m,{size:"small",loading:e(f),onClick:e(u).doChangeStatus},{default:a(()=>[n(" Continuar ")]),_:1},8,["loading","onClick"])]),default:a(()=>[r("p",T,[n(" Aprobación de cotización "),r("b",null,"#"+x(e(o).id),1)]),r("div",M,[i(h,{modelValue:e(o).comments,"onUpdate:modelValue":t[1]||(t[1]=s=>e(o).comments=s),class:"mt-2 w-full text-xs",background:"#fff",clearable:"",label:"Ingresa un comentario",rules:[e(k).required]},null,8,["modelValue","rules"]),B((c(),p(z,{modelValue:e(o).total,"onUpdate:modelValue":t[2]||(t[2]=s=>e(o).total=s),class:"mt-2 font-bold",background:"primary",label:"Precio final",rules:[e(k).required],onChange:t[3]||(t[3]=()=>{e(o).total=e(U.ceil)(e(o).total,2)})},{prependInner:a(()=>[q]),_:1},8,["modelValue","rules"])),[[e(v)]])])]),_:1},8,["modelValue"])):b("",!0)])}}}),K=I(E,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/oportunities/OportunitiesPage.vue"]]);export{K as default};
//# sourceMappingURL=OportunitiesPage-df9f595e.js.map