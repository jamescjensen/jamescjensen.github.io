import{c as l,h as g,g as M,d as J,e as q,f as Y,j as ie,F as se,C as I,r as $,s as h,G as y,A as t,H as K,v as f,I as R,J as ne,t as C,u as v,w as oe,a as re,T as le,K as ce,L as P,M as T,N as x,_ as ue,x as G,y as de,z as he,O as me}from"./index.680699ba.js";import{c as z,h as L,e as ge,f as pe}from"./dom.2d18a7d5.js";import{Q as F,a as fe,u as ve,b as ye,R as _e,c as Se}from"./QBtn.785b24d7.js";const E={dark:{type:Boolean,default:null}};function H(e,i){return l(()=>e.dark===null?i.dark.isActive:e.dark)}const be={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},V={xs:2,sm:4,md:8,lg:16,xl:24};var W=z({name:"QSeparator",props:{...E,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const i=M(),a=H(e,i.proxy.$q),s=l(()=>e.vertical===!0?"vertical":"horizontal"),n=l(()=>` q-separator--${s.value}`),r=l(()=>e.inset!==!1?`${n.value}-${be[e.inset]}`:""),o=l(()=>`q-separator${n.value}${r.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(a.value===!0?" q-separator--dark":"")),d=l(()=>{const m={};if(e.size!==void 0&&(m[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const _=e.spaced===!0?`${V.md}px`:e.spaced in V?`${V[e.spaced]}px`:e.spaced,S=e.vertical===!0?["Left","Right"]:["Top","Bottom"];m[`margin${S[0]}`]=m[`margin${S[1]}`]=_}return m});return()=>g("hr",{class:o.value,style:d.value,"aria-orientation":s.value})}});const we={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function ke(){const{props:e,proxy:{$q:i}}=M(),a=J(Y,q);if(a===q)return console.error("QPageSticky needs to be child of QLayout"),q;const s=l(()=>{const p=e.position;return{top:p.indexOf("top")>-1,right:p.indexOf("right")>-1,bottom:p.indexOf("bottom")>-1,left:p.indexOf("left")>-1,vertical:p==="top"||p==="bottom",horizontal:p==="left"||p==="right"}}),n=l(()=>a.header.offset),r=l(()=>a.right.offset),o=l(()=>a.footer.offset),d=l(()=>a.left.offset),m=l(()=>{let p=0,k=0;const b=s.value,j=i.lang.rtl===!0?-1:1;b.top===!0&&n.value!==0?k=`${n.value}px`:b.bottom===!0&&o.value!==0&&(k=`${-o.value}px`),b.left===!0&&d.value!==0?p=`${j*d.value}px`:b.right===!0&&r.value!==0&&(p=`${-j*r.value}px`);const w={transform:`translate(${p}, ${k})`};return e.offset&&(w.margin=`${e.offset[1]}px ${e.offset[0]}px`),b.vertical===!0?(d.value!==0&&(w[i.lang.rtl===!0?"right":"left"]=`${d.value}px`),r.value!==0&&(w[i.lang.rtl===!0?"left":"right"]=`${r.value}px`)):b.horizontal===!0&&(n.value!==0&&(w.top=`${n.value}px`),o.value!==0&&(w.bottom=`${o.value}px`)),w}),_=l(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function S(p){const k=L(p.default);return g("div",{class:_.value,style:m.value},e.expand===!0?k:[g("div",k)])}return{$layout:a,getStickyContent:S}}var xe=z({name:"QPageSticky",props:we,setup(e,{slots:i}){const{getStickyContent:a}=ke();return()=>a(i)}}),qe=z({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:i}){const{proxy:{$q:a}}=M(),s=J(Y,q);if(s===q)return console.error("QPage needs to be a deep child of QLayout"),q;if(J(ie,q)===q)return console.error("QPage needs to be child of QPageContainer"),q;const r=l(()=>{const d=(s.header.space===!0?s.header.size:0)+(s.footer.space===!0?s.footer.size:0);if(typeof e.styleFn=="function"){const m=s.isContainer.value===!0?s.containerHeight.value:a.screen.height;return e.styleFn(d,m)}return{minHeight:s.isContainer.value===!0?s.containerHeight.value-d+"px":a.screen.height===0?d!==0?`calc(100vh - ${d}px)`:"100vh":a.screen.height-d+"px"}}),o=l(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:o.value,style:r.value},L(i.default))}});function $e(){return J(se)}const Ce={key:0},N=I({__name:"ExpandableArea",props:{iconSize:{default:"14px"},initialExpanded:{type:Boolean,default:!0}},setup(e){const a=$(e.initialExpanded);function s(){a.value=!a.value}return(n,r)=>(h(),y("div",ne({class:"column"},n.$attrs),[t("div",{onClick:s},[t("span",null,[K(n.$slots,"title")]),t("span",null,[f(F,{size:n.iconSize,name:a.value?"expand_more":"chevron_right"},null,8,["size","name"])])]),a.value?(h(),y("div",Ce,[K(n.$slots,"default")])):R("",!0)],16))}}),Pe=t("span",{class:"text-title"}," Education ",-1),Te=t("div",{class:"row q-col-gutter-sm"},[t("div",{class:"col-12"},[t("span",{class:"text-title-subsection"},[t("span",{class:"text-title-subsection q-pr-sm"}," University of St. Thomas "),t("span",{class:"text-subtitle-subsection q-pr-sm"}," 3.6 / 4.0 "),t("span",{class:"text-subtitle-subsection"}," B.A. in Computer and Information Sciences, minor in Statistics. ")]),t("div",{style:{fontStyle:"italic"}}," St. Paul, MN, USA. Sep 2012 - Jun 2016. ")]),t("div",{class:"col-12"},[t("span",{class:"text-title-subsection"},[t("span",{class:"text-title-subsection q-pr-sm"}," Yonsei University "),t("span",{class:"text-subtitle-subsection"}," Study Abroad. ")]),t("div",{style:{fontStyle:"italic"}}," Seoul, South Korea. Summer 2015. ")])],-1),je=I({__name:"EducationSection",setup(e){return(i,a)=>(h(),C(N,{"icon-size":"20px"},{title:v(()=>[Pe]),default:v(()=>[Te]),_:1}))}}),Ie={ratio:[String,Number]};function ze(e,i){return l(()=>{const a=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const Be=16/9;var X=z({name:"QImg",props:{...Ie,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Be},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:i,emit:a}){const s=$(e.initialRatio),n=ze(e,s);let r=null,o=!1;const d=[$(null),$(c())],m=$(0),_=$(!1),S=$(!1),p=l(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),k=l(()=>({width:e.width,height:e.height})),b=l(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),j=l(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));oe(()=>w(),B);function w(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function c(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function B(u){r!==null&&(clearTimeout(r),r=null),S.value=!1,u===null?(_.value=!1,d[m.value^1].value=c()):_.value=!0,d[m.value].value=u}function Z({target:u}){o!==!0&&(r!==null&&(clearTimeout(r),r=null),s.value=u.naturalHeight===0?.5:u.naturalWidth/u.naturalHeight,O(u,1))}function O(u,A){o===!0||A===1e3||(u.complete===!0?ee(u):r=setTimeout(()=>{r=null,O(u,A+1)},50))}function ee(u){o!==!0&&(m.value=m.value^1,d[m.value].value=null,_.value=!1,S.value=!1,a("load",u.currentSrc||u.src))}function te(u){r!==null&&(clearTimeout(r),r=null),_.value=!1,S.value=!0,d[m.value].value=null,d[m.value^1].value=c(),a("error",u)}function U(u){const A=d[u].value,D={key:"img_"+u,class:b.value,style:j.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...A};return m.value===u?(D.class+=" q-img__image--waiting",Object.assign(D,{onLoad:Z,onError:te})):D.class+=" q-img__image--loaded",g("div",{class:"q-img__container absolute-full",key:"img"+u},g("img",D))}function ae(){return _.value!==!0?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},L(i[S.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[g(fe,{color:e.spinnerColor,size:e.spinnerSize})])}return B(w()),re(()=>{o=!0,r!==null&&(clearTimeout(r),r=null)}),()=>{const u=[];return n.value!==null&&u.push(g("div",{key:"filler",style:n.value})),S.value!==!0&&(d[0].value!==null&&u.push(U(0)),d[1].value!==null&&u.push(U(1))),u.push(g(le,{name:"q-transition--fade"},ae)),g("div",{class:p.value,style:k.value,role:"img","aria-label":e.alt},u)}}}),Ne="/assets/me.540c77c1.jpeg";const Qe={xs:8,sm:10,md:14,lg:20,xl:24};var Q=z({name:"QChip",props:{...E,...ve,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:i,emit:a}){const{proxy:{$q:s}}=M(),n=H(e,s),r=ye(e,Qe),o=l(()=>e.selected===!0||e.icon!==void 0),d=l(()=>e.selected===!0?e.iconSelected||s.iconSet.chip.selected:e.icon),m=l(()=>e.iconRemove||s.iconSet.chip.remove),_=l(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),S=l(()=>{const c=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(c?` text-${c} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(_.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(n.value===!0?" q-chip--dark q-dark":"")}),p=l(()=>{const c=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},B={...c,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||s.lang.label.remove};return{chip:c,remove:B}});function k(c){c.keyCode===13&&b(c)}function b(c){e.disable||(a("update:selected",!e.selected),a("click",c))}function j(c){(c.keyCode===void 0||c.keyCode===13)&&(ce(c),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function w(){const c=[];_.value===!0&&c.push(g("div",{class:"q-focus-helper"})),o.value===!0&&c.push(g(F,{class:"q-chip__icon q-chip__icon--left",name:d.value}));const B=e.label!==void 0?[g("div",{class:"ellipsis"},[e.label])]:void 0;return c.push(g("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},pe(i.default,B))),e.iconRight&&c.push(g(F,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&c.push(g(F,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:m.value,...p.value.remove,onClick:j,onKeyup:j})),c}return()=>{if(e.modelValue===!1)return;const c={class:S.value,style:r.value};return _.value===!0&&Object.assign(c,p.value.chip,{onClick:b,onKeyup:k}),ge("div",c,w(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[_e,e.ripple]])}}});const Re=t("span",{class:"text-title-subsection"}," Skills ",-1),Me={class:"row q-col-gutter-sm"},Le={class:"col-12"},Ae=t("div",{class:"text-title-subsubsection"},x(">=5 Years"),-1),De={class:"row q-col-gutter-sm"},Fe={class:"col-12"},Je=t("div",{class:"text-title-subsubsection"},x("2~5 Years"),-1),Ve={class:"row q-col-gutter-sm"},We={class:"col-12"},Ee=t("div",{class:"text-title-subsubsection"},x("<2 Years"),-1),He={class:"row q-col-gutter-sm"},Oe=I({__name:"SkillSubSection",setup(e){const i=["JavaScript","TypeScript","Node.js","AWS","HTML","CSS"],a=["Google Cloud","Quasar","Vue","React","Perl"],s=["C","C++","C#","Unity","Flutter / Dart","Capacitor","PHP","Laravel","Qt"];return(n,r)=>(h(),C(N,{"icon-size":"18px"},{title:v(()=>[Re]),default:v(()=>[t("div",Me,[t("div",Le,[Ae,t("div",De,[(h(),y(P,null,T(i,o=>t("div",{key:o,class:"col-auto"},[f(Q,{class:"skill-chip",dense:"",label:o},null,8,["label"])])),64))])]),t("div",Fe,[Je,t("div",Ve,[(h(),y(P,null,T(a,o=>t("div",{key:o,class:"col-auto"},[f(Q,{class:"skill-chip",dense:"",label:o},null,8,["label"])])),64))])]),t("div",We,[Ee,t("div",He,[(h(),y(P,null,T(s,o=>t("div",{key:o,class:"col-auto"},[f(Q,{class:"skill-chip",dense:"",label:o},null,8,["label"])])),64))])])])]),_:1}))}});const Ue=e=>(de("data-v-5617d604"),e=e(),he(),e),Ke=Ue(()=>t("span",{class:"text-title"}," Introduction ",-1)),Ye={class:"row q-col-gutter-sm items-center justify-between"},Ge={class:"col-xs-12 col-sm-9"},Xe={class:"col-xs-12 col-sm-3 row justify-center"},Ze=I({__name:"IntroductionSection",setup(e){return(i,a)=>(h(),C(N,{"icon-size":"20px"},{title:v(()=>[Ke]),default:v(()=>[t("div",Ye,[t("div",Ge,[G(" My name is James Jensen (nickname Jack) and I am a software engineer with 7 years of professional experience, living in Seoul, South Korea. I've done front-end engineering, back-end engineering, embedded engineering, server architecture.. and I'm always happy to try more. I'm most familiar with Node.js, but every job I've had has involved learning a new programming language on the spot, and again, always happy to try more. "),f(Oe)]),t("div",Xe,[f(X,{class:"image",fit:"cover","no-spinner":"",src:Ne})])])]),_:1}))}});var et=ue(Ze,[["__scopeId","data-v-5617d604"]]),tt=z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:i}){const a=l(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>g(e.tag,{class:a.value},L(i.default))}}),at=z({name:"QCard",props:{...E,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:i}){const{proxy:{$q:a}}=M(),s=H(e,a),n=l(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>g(e.tag,{class:n.value},L(i.default))}});const it={class:"text-title-subsubsection"},st={class:"row q-col-gutter-sm"},nt={key:0,class:"col-12"},ot={class:"col-12"},rt=["href"],lt=I({__name:"ProjectCard",props:{project:{}},setup(e){return(i,a)=>(h(),C(at,null,{default:v(()=>[f(tt,null,{default:v(()=>[t("div",it,x(i.project.title),1),t("div",st,[(h(!0),y(P,null,T(i.project.skills,s=>(h(),y("div",{key:s,class:"col-auto"},[f(Q,{class:"skill-chip",dense:"",label:s},null,8,["label"])]))),128)),i.project.imageUrl?(h(),y("div",nt,[f(X,{src:i.project.imageUrl},null,8,["src"])])):R("",!0),t("div",ot,x(i.project.description),1),(h(!0),y(P,null,T(i.project.externalLinks,s=>(h(),y("div",{key:s.url,class:"col-auto"},[t("a",{href:s.url},x(s.text),9,rt)]))),128))])]),_:1})]),_:1}))}}),ct=t("span",{class:"text-title"},"Job History",-1),ut={class:"row q-col-gutter-sm"},dt={class:"text-title-subsection q-pr-sm"},ht={class:"text-subtitle-subsection q-pr-sm"},mt={class:"text-subtitle-subsection",style:{fontStyle:"italic"}},gt={class:"row q-col-gutter-sm"},pt={class:"col-12"},ft={class:"col-12 row q-col-gutter-md"},vt=I({__name:"JobSection",setup(e){const i=[{company:"MXN Technology",title:"Software Engineer",dateRange:"Sep 2021 - Present",description:"Seoul, South Korea. MXN is an international logistics company, and I am an engineer on an R&D focused team, testing out technologies and projects new to the company. Lead effort to automate build pipelines; both within my direct team and helping other development teams. Worked with team to design and harden development practices towards a process that encouraged full participation of team members.",skills:["TypeScript","Node.js","Vue","Quasar","Flutter / Dart","Google Cloud","PHP","Laravel"],projects:[{title:"Proveneer",description:"Mobile app (built with Flutter) and webapp (built with Vue), with a Node.js server, for art galleries and collectors to track provenance of artworks.",skills:["JavaScript","TypeScript","Node.js","Vue","Quasar","Flutter / Dart","Google Cloud"]},{title:"Mintcode",description:"Mobile app (built with Flutter) with a Node.js server, for proving ownership history of collectibles. First time working with Flutter and Dart.",skills:["JavaScript","TypeScript","Node.js","Flutter / Dart","Google Cloud"],externalLinks:[{url:"mintcode.xyz",text:"Mintcode website"}]},{title:"Warehouse Management System for an individual vendor",description:"Inventory management webapp specifically made for a client company. Upgraded an existing webapp to Laravel 10 and PHP 8.2, rewriting and adding type-safety to much of it in the process. First time working in PHP.",skills:["PHP","Laravel","JavaScript","TypeScript","HTML"]},{title:"Mintfulfillment Warehouse Management System",description:"Warehouse management webapp and server. Designed from the ground up. Workers can manage warehouse inventory and fulfill orders.",skills:["TypeScript","Node.js","Vue","Quasar","Capacitor"]},{title:"Mintfulfillment Order Management System",description:"Order management webapp and server. Connects with Shopify, Naver SmartStore, and Coupang to import orders, which can then be sent to a WMS to fulfill. Worked through upgrade from Vue 2 to Vue 3, and later conversion from JS to TypeScript.",skills:["JavaScript","TypeScript","Node.js","Vue","Quasar"]}]},{company:"athenahealth",title:"Senior Software Engineer",dateRange:"Aug 2017 - Jun 2021",description:"Watertown, MA, USA. athenahealth creates an Electronic Medical Record (EMR) product, and I was on their Integration Services, and later, Clinicals teams. Our team built and maintained several RESTful microservices serving over 6 million requests per day. I was the subject matter expert on these services, and helped DevOps teams establish AWS best practices for the Clinicals engineering org, as well as the company at large. For some of this period I was the scrum master for a team spread across multiple timezones, and we still maintained productivity after switching to remote work with the outbreak of COVID.",skills:["JavaScript","AWS","TypeScript","Node.js","Perl","HTML / CSS"],projects:[{title:"NewSCRIPT",description:"Our team managed the upgrade to e-prescibing vendor Surescripts's new standard. This was a major change, rewriting much of our electronic prescription code, eliminating many dreaded bug factories along the way. This upgrade won athenahealth an award from Surescripts as one of the top ten companies in their network for prescription accuracy.",skills:["JavaScript","Perl"],externalLinks:[{url:"https://www.athenahealth.com/news/awards/athenahealth-wins-highest-accuracy-score-e-prescribing-quality-2020-surescripts-white-coat-award",text:"athenahealth wins highest accuracy score in e-prescribing quality in 2020 Surescripts White Coat Award"}]},{title:"Prescription Drug Monitoring Program",description:"Connects with state prescription monitoring programs to enable doctors to view patients' controlled drug history (required by law in most states) without leaving the prescription workflow. Before this, they had to go through the states' sites individually, taking 5-7 minutes, while our process took less than 10 seconds. The Node.js microservice supporting this took in millions of requests per day and scaled stably. I often interacted directly with vendors and developers on the states' systems as part of this project.",skills:["JavaScript","TypeScript","Node.js","Perl","AWS"],externalLinks:[{url:"https://www.athenahealth.com/knowledge-hub/clinical-trends/3-minute-case-study-smart-seamless-opioid-prescribing",text:"3-minute case study: Smart, seamless opioid prescribing"}]},{title:"Real-Time Benefit Check",description:"Shows doctors drug prices as part of their prescribing workflow, as well as cheaper alternatives. The microservice supporting this took 6 million requests on an average day, and scaled smoothly to support this through the day. This service goes out to several different vendors based on the patient's insurance, and supporting this project involved meeting with those vendors regularly. This service was also originally written in athenahealth's Perl monolith, but was successfully broken out into a Node.js microservice, one of the first microservices in the company to go GA.",skills:["JavaScript","TypeScript","Node.js","Perl","AWS"],externalLinks:[{url:"https://www.fiercehealthcare.com/payer/humana-athenahealth-team-to-embed-member-data-providers-ehr-workflows",text:"Humana, athenahealth team to embed member data in providers' EHR workflows"}]}]},{company:"Thales Visionix (now Thales InterSense)",title:"Associate Software Engineer",dateRange:"Jul 2016 - Jul 2017",description:"Billerica, MA, USA. Our division of Thales Visionix focused on motion trackers, and I was a generalist developer on software to support them, as well as doing customer service for researchers using them.",skills:["C","C++","C#","Qt","Unity"],projects:[{title:"Unity Plugin",description:"I was the sole developer on a plugin for the Unity 3D engine, retrieving data from the tracker to, for example, move the camera in-engine. This also involved building a demo that was showcased at several conferences and visiting one client site to help them test the tracker.",skills:["C#","Unity"],externalLinks:[{url:"https://www.athenahealth.com/news/awards/athenahealth-wins-highest-accuracy-score-e-prescribing-quality-2020-surescripts-white-coat-award",text:"athenahealth wins highest accuracy score in e-prescribing quality in 2020 Surescripts White Coat Award"}]},{title:"Tracker SDK",description:"I worked on the shared SDK for all of the company's trackers, taking ownership of and fixing bugs in the firmware, and upgrading the software used to display data to support more recent trackers.",skills:["C","C++","Qt"],externalLinks:[{url:"https://www.intersense.com/dev-tools",text:"InterSense"}]}]}];return(a,s)=>(h(),C(N,{"icon-size":"20px"},{title:v(()=>[ct]),default:v(()=>[t("div",ut,[(h(),y(P,null,T(i,(n,r)=>f(N,{key:n.company,class:"col-12","icon-size":"18px"},{title:v(()=>[t("span",dt,x(n.company),1),t("span",ht,x(n.title),1),t("span",mt,x(n.dateRange),1)]),default:v(()=>[t("div",gt,[t("div",pt,x(n.description),1),(h(!0),y(P,null,T(n.skills,o=>(h(),y("div",{key:o,class:"col-auto"},[f(Q,{class:"skill-chip",dense:"",label:o},null,8,["label"])]))),128)),n.projects.length?(h(),C(N,{key:0,class:"col-12 q-px-md","initial-expanded":!1},{title:v(()=>[G(" Projects ")]),default:v(()=>[t("div",ft,[(h(!0),y(P,null,T(n.projects,o=>(h(),y("div",{key:o.title,class:"col-xs-12 col-sm-4"},[f(lt,{project:o},null,8,["project"])]))),128))])]),_:2},1024)):R("",!0)]),r!==i.length-1?(h(),C(W,{key:0,class:"q-ma-md"})):R("",!0)]),_:2},1024)),64))])]),_:1}))}}),yt={class:"full-width"},wt=I({__name:"IndexPage",setup(e){const i=$e(),a=$(),s=$(!1),n=l(()=>i.screen.width>=1250),r=l(()=>s.value?{width:"100%"}:{width:"100%","max-width":"1000px"});function o(){s.value=!s.value}return(d,m)=>(h(),C(qe,{class:"column items-center q-pa-md"},{default:v(()=>[t("div",{ref_key:"containerDiv",ref:a,style:me(r.value)},[t("div",yt,[f(et,{id:"introduction-section"}),f(W,{color:"primary",class:"full-width q-my-md"}),f(vt,{id:"job-section"}),f(W,{color:"primary",class:"full-width q-my-md"}),f(je,{class:"q-pb-md",id:"education-section"})])],4),n.value?(h(),C(xe,{key:0,position:"bottom-right",offset:[18,18]},{default:v(()=>[f(Se,{dense:"",fab:"",icon:s.value?"width_full":"width_normal",color:"primary",onClick:o},null,8,["icon"])]),_:1})):R("",!0)]),_:1}))}});export{wt as default};
