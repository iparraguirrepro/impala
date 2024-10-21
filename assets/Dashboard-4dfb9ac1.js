import{d as h,r as l,o as r,c as _,a as e,b as t,e as x,f as s,t as b,_ as f,g as C,w as a,h as k,n as w,i as $,F as y,u as g,V as D,j as S,k as I,l as T,m as v}from"./index-eb5b4f51.js";const V={class:"va-timeline-item"},z={class:"va-timeline-item__icon-cell"},N={class:"va-timeline-item__icon"},B={class:"va-timeline-item__content-cell"},O={class:"va-timeline-item__content"},j={class:"va-timeline-item__date-cell"},A=h({__name:"TimelineItem",props:{date:{type:String,default:""}},setup(m){return(o,c)=>{const n=l("VaIcon");return r(),_("tr",V,[e("td",z,[e("div",N,[t(n,{name:"schedule",size:"18px",color:"backgroundBorder"})])]),e("td",B,[e("div",O,[x(o.$slots,"default",{},void 0,!0)])]),e("td",j,[x(o.$slots,"date",{},()=>[s(b(o.$props.date),1)],!0)])])}}});const u=f(A,[["__scopeId","data-v-ab6d7c7a"],["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/admin/dashboard/cards/TimelineItem.vue"]]),q=e("h1",{class:"card-title text-secondary font-bold uppercase"},[s(" Notificaciónes de "),e("span",{class:"font-extrabold rounded py-0.5"},"HOY")],-1),L={class:"mt-4"},H=e("span",{class:"cursor-pointer text-primary font-bold"},"Lizbeth Hidalgo",-1),M=e("span",{class:"text-primary font-bold cursor-pointer"},"Administrador",-1),U=e("span",{class:"text-primary font-bold cursor-pointer"},"Administrador",-1),F=e("span",{class:"text-primary font-bold cursor-pointer"},"Administrador",-1),P=e("span",{class:"cursor-pointer text-primary font-bold"},"Lizbeth Hidalgo",-1),R=e("span",{class:"cursor-pointer text-primary font-bold"},"Ariel SaC",-1),Y=e("span",{class:"cursor-pointer text-primary font-bold"},"Antamina",-1),E=h({__name:"Timeline",setup(m){return(o,c)=>{const n=l("VaCardTitle"),d=l("RouterLink"),p=l("VaCardContent"),i=l("VaCard");return r(),C(i,null,{default:a(()=>[t(n,{class:"flex justify-between"},{default:a(()=>[q]),_:1}),t(p,{class:"overflow-y-scroll"},{default:a(()=>[e("table",L,[e("tbody",null,[t(u,{class:"text-sm",date:"Nov 15, 2023"},{default:a(()=>[s(" Se ha registrado la cotización "),t(d,{class:"va-link font-semibold",to:"/projects"},{default:a(()=>[s("#0023")]),_:1}),s(" asociada al cliente "),H]),_:1}),t(u,{class:"text-sm",date:"Nov 15, 2023"},{default:a(()=>[M,s(" Ha actualizado las rutas ")]),_:1}),t(u,{class:"text-sm",date:"Nov 15, 2023"},{default:a(()=>[U,s(" Ha actualizado los precios de vehiculos ")]),_:1}),t(u,{class:"text-sm",date:"Nov 15, 2023"},{default:a(()=>[F,s(" Ha actualizado los viaticos ")]),_:1}),t(u,{class:"text-sm",date:"Nov 15, 2023"},{default:a(()=>[s(" Se ha registrado un nuevo usuario de tipo comercial "),t(d,{class:"va-link font-semibold",to:"/projects"},{default:a(()=>[s("Pedro Cateriano")]),_:1}),s(" creado por "),P]),_:1}),t(u,{class:"text-sm",date:"Nov 15, 2023"},{default:a(()=>[s(" Se ha registrado la cotización "),t(d,{class:"va-link font-semibold",to:"/projects"},{default:a(()=>[s("#0022")]),_:1}),s(" asociada al cliente "),R]),_:1}),t(u,{class:"text-sm",date:"Nov 15, 2023"},{default:a(()=>[s(" Orden finalizada "),t(d,{class:"va-link font-semibold",to:"/projects"},{default:a(()=>[s("#0019")]),_:1}),s(" asociada al cliente "),Y]),_:1})])])]),_:1})]),_:1})}}}),G=f(E,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/admin/dashboard/cards/Timeline.vue"]]),J={class:"flex items-center justify-between"},K={class:"text-lg font-semibold grow"},Q={class:"mb-2 text-sm"},W={class:"text-xs text-secondary"},X=e("span",{class:"ml-2 px-1 text-white py-0.5 rounded uppercase text-xxs font-bold bg-primary"},"60 días",-1),Z=h({__name:"DataSectionItem",props:{title:{type:String,required:!0},value:{type:[String,Number],required:!0},changeText:{type:String,required:!0},up:{type:Boolean,required:!0},iconBackground:{type:String,required:!0},iconColor:{type:String,required:!0}},setup(m){const o=m,c=k(()=>({"text-success":o.up,"text-red-600":!o.up}));return(n,d)=>{const p=l("VaCardContent");return r(),C(g(D),null,{default:a(()=>[t(p,null,{default:a(()=>[e("section",null,[e("header",J,[e("div",K,b(n.value),1),e("div",{class:"p-1 rounded",style:w({backgroundColor:n.iconBackground,color:n.iconColor})},[x(n.$slots,"icon")],4)]),e("div",null,[e("p",Q,b(n.title),1),e("p",W,[e("span",{class:$(c.value)},[n.up?(r(),_(y,{key:0},[s("↑")],64)):(r(),_(y,{key:1},[s("↓")],64)),s(" "+b(n.changeText),1)],2),X])])])]),_:3})]),_:3})}}}),ee=f(Z,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/admin/dashboard/DataSectionItem.vue"]]),te={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"},se=h({__name:"DataSection",setup(m){const{getColor:o}=S(),c=k(()=>[{id:"openInvoices",title:"Cotizaciones",value:"S/ 35.548",icon:"mso-attach_money",changeText:"S/ 1, 450",changeDirection:"down",iconBackground:o("success"),iconColor:o("on-success")},{id:"ongoingProjects",title:"Ordenes de trabajo activas",value:"15",icon:"list_alt",changeText:"25",changeDirection:"up",iconBackground:o("info"),iconColor:o("on-info")},{id:"employees",title:"Nuevos Clientes",value:"25",icon:"mso-account_circle",changeText:"2",changeDirection:"up",iconBackground:o("primary"),iconColor:o("on-info")}]);return(n,d)=>{const p=l("VaIcon");return r(),_("div",te,[(r(!0),_(y,null,I(c.value,i=>(r(),C(ee,{key:i.id,title:i.title,value:i.value,"change-text":i.changeText,up:i.changeDirection==="up","icon-background":i.iconBackground,"icon-color":i.iconColor},{icon:a(()=>[t(p,{name:i.icon,size:"medium"},null,8,["name"])]),_:2},1032,["title","value","change-text","up","icon-background","icon-color"]))),128))])}}}),oe=f(se,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/admin/dashboard/DataSection.vue"]]),ae={class:"py-5"},ne=e("h1",{class:"h5 m-0"},"Dashboard",-1),ie={class:"columns-1 sm:columns-5 mt-5"},re={class:"flex flex-row flex-wrap flex-wrap mt-5"},ce={class:"w-full flex flex-col sm:flex-row gap-5 mb-4 min-h-[858px] sm:min-h-[300px] max-h-[300px]"},le={class:"w-full p-2 bg-white border border-gray-100 rounded-lg relative min-h-[230px]"},de=T('<h5 class="mb-2 text-sm1 font-semibold tracking-tight">Servicios más cotizados</h5><div class="w-full absolute top-10 pt-4 flex flex-wrap gap-1 items-center justify-center"><span class="bg-blue-100 text-xs text-white font-bold me-2 px-2.5 py-0.5 rounded" style="background:rgb(0, 143, 251);">Transporte de personal</span><span class="bg-blue-100 text-xs text-dark font-bold me-2 px-2.5 py-0.5 rounded" style="background:rgb(0, 227, 150);">Transporte de materiales</span><span class="bg-blue-100 text-xs text-dark font-bold me-2 px-2.5 py-0.5 rounded" style="background:rgb(254, 176, 25);">Alquiler de vehiculos</span></div>',2),ue={clasS:"w-full absolute -bottom-20 -mb-4 flex items-center justify-center left-0"},pe={class:"w-full p-2 bg-white border border-gray-100 rounded-lg relative min-h-[290px]"},_e=e("h5",{class:"mb-2 text-sm1 font-semibold tracking-tight"},"Cotizaciones cerradas",-1),me={class:"absolute bottom-1 w-full left-0"},he={class:"w-full p-2 bg-white border border-gray-100 rounded-lg relative min-h-[290px]"},fe=e("h5",{class:"mb-2 text-sm1 font-semibold tracking-tight"},"Ordenes activas",-1),be={class:"absolute bottom-1 w-full left-0"},ge=h({__name:"Dashboard",setup(m){const o={chartOptions:{xaxis:{categories:["12/10","13/10","14/10","15/10","16/10","17/10","18/10","19/10"]}},series:[{name:"series-1",data:[13,24,18,7,15,6,22,9]}]},c={chartOptions:{xaxis:{categories:["12/10","13/10","14/10","15/10","16/10","17/10","18/10","19/10"]}},series:[{name:"series-1",data:[3,4,5,1,9,6,2,9]}]},n={series:[44,55,13],chartOptions:{legend:{show:!1},plotOptions:{pie:{startAngle:-90,endAngle:90,offsetY:10}},labels:["Transporte de personal","Transporte turistico","Alquiler de vehiculos"],responsive:[{breakpoint:480,options:{chart:{width:250},dataLabels:{enabled:!1},legend:{position:"bottom"}}}]}};return(d,p)=>{const i=l("VaDateInput");return r(),_("div",ae,[ne,e("div",ie,[e("div",null,[t(i,{label:"Filtrar por fecha",placeholder:"Ingresa una fecha",mode:"range",background:"#fff"})])]),e("div",re,[t(oe,{class:"w-full mb-4"}),e("div",ce,[e("div",le,[de,e("div",ue,[t(g(v),{type:"donut",options:n.chartOptions,series:n.series},null,8,["options","series"])])]),e("div",pe,[_e,e("div",me,[t(g(v),{type:"bar",options:o.chartOptions,series:o.series},null,8,["options","series"])])]),e("div",he,[fe,e("div",be,[t(g(v),{type:"bar",options:c.chartOptions,series:c.series},null,8,["options","series"])])])]),t(G,{class:"w-full"})])])}}}),xe=f(ge,[["__file","C:/Users/ID-04/Documents/Main/vuestic-impala/src/pages/admin/dashboard/Dashboard.vue"]]);export{xe as default};
//# sourceMappingURL=Dashboard-4dfb9ac1.js.map