(()=>{"use strict";var e=[{id:"week",label:"Week",minutes:{current:38,more:12},streak:{current:4,best:12},list:[{name:"Walter Wynne",minutes:105,status:"up"},{name:"Annabel Ferdinand",minutes:52,status:""},{name:"Marty MvFly",minutes:50,status:"up"},{name:"You!",minutes:38,status:"up",is_me:!0}]},{id:"month",label:"Month",minutes:{current:12,more:186},streak:{current:7,best:44},list:[{name:"Annabel Ferdinand",minutes:45,status:""},{name:"Walter Wynne",minutes:2,status:"up"},{name:"You!",minutes:12,status:"up",is_me:!0},{name:"Marty MvFly",minutes:56,status:""}]}];window.addEventListener("DOMContentLoaded",(function(t){function n(e,t){var n,r,u,a,s=e[t],c=document.querySelector("#circle .svg svg"),o=document.querySelector("#minutes_current"),i=document.querySelector("#minutes_more"),m=document.querySelector("#streak_current"),l=document.querySelector("#streak_best"),d=document.querySelector("#list"),y=document.querySelector("#list_item_template");n=c,r=s.minutes.current/50,u=Math.round(490*r),a="".concat(u," ").concat(490),n.querySelector(".active").style.strokeDasharray=a,o.innerHTML="".concat(s.minutes.current,"m"),i.innerHTML="".concat(s.minutes.more),m.innerHTML="".concat(s.streak.current),l.innerHTML="".concat(s.streak.best),d.innerHTML="",s.list.forEach((function(e,t){var n=y.cloneNode(!0);n.id="";var r=n.querySelector(".count"),u=n.querySelector(".name"),a=n.querySelector(".result"),s=n.querySelector(".icon");r.innerHTML="".concat(t+1),u.innerHTML=e.name,a.innerHTML="".concat(e.minutes,"m"),e.status&&s.classList.add(e.status),e.is_me&&n.classList.add("me"),d.append(n)}))}var r=document.querySelector("#leaderboard_select");e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.text=e.label,r.options.add(t)})),r.value=e[0].id,r.onchange=function(t){var u=e.findIndex((function(e){return e.id===r.value}));-1!==u&&n(e,u)},n(e,0)}))})();