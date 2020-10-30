(function(e){function t(t){for(var n,i,c=t[0],o=t[1],u=t[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("HeaderComponent"),a("router-view")],1)},s=[],i=a("8c4f"),c=a("0ff2"),o=a("5887"),u=a.n(o),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-wrapper"},[a("div",{attrs:{id:"error"}},[e._v(e._s(e.errorMessage))]),a("div",{staticClass:"pb-5",attrs:{id:"new-class"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newClassName,expression:"newClassName"}],attrs:{type:"text",name:"add-new",placeholder:"Enter Class Name"},domProps:{value:e.newClassName},on:{input:function(t){t.target.composing||(e.newClassName=t.target.value)}}}),a("button",{on:{click:function(t){return e.addClass()}}},[e._v("save")])]),e._l(e.chickenClass,(function(t){return a("div",{key:t.id},[a("div",{staticClass:"class-wrapper"},[a("button",{staticClass:"button p-0 is-fullwidth is-primary m-5",on:{click:function(a){return e.selectClass(t.id)}}},[e._v(" "+e._s(t.className)+" ")])])])}))],2)},l=[],p=(a("7db0"),a("d81d"),a("96cf"),a("1da1")),m=a("2591"),v=(a("e71f"),{apiKey:"AIzaSyAaFsKdZmxEcdkGbdTY-DDloaern7iTCjc",authDomain:"chicken-1122b.firebaseapp.com",databaseURL:"https://chicken-1122b.firebaseio.com",projectId:"chicken-1122b",storageBucket:"chicken-1122b.appspot.com",messagingSenderId:"858563379585",appId:"1:858563379585:web:7ab6583ee5932bf7572880",measurementId:"G-G7HP0YKDLQ"}),f=m["a"].initializeApp(v).firestore(),h=f,b={name:"HomeComponent",data:function(){return{newClassName:"",errorMessage:"",chickenClass:[]}},firestore:{chickenClass:h.collection("chickenClass")},methods:{addClass:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.collection("chickenClass").get();case 2:if(a=t.sent.docs.map((function(e){return e.data()})),n=a.find((function(t){return t.className===e.newClassName})),!n){t.next=8;break}e.errorMessage="Class already existed",t.next=22;break;case 8:if(e.newClassName){t.next=12;break}e.errorMessage="Class name is not empty",t.next=22;break;case 12:return t.prev=12,t.next=15,h.collection("chickenClass").add({className:e.newClassName});case 15:e.newClassName="",e.errorMessage="",t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](12),e.errorMessage=t.t0;case 22:case"end":return t.stop()}}),t,null,[[12,19]])})))()},selectClass:function(e){this.$router.push({name:"class",params:{classId:e}})}}},g=b,C=(a("de3d"),a("2877")),w=Object(C["a"])(g,d,l,!1,null,"0068e9e5",null),k=w.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[a("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"}})]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("a",{staticClass:"navbar-item"},[e._v(" Home ")]),a("a",{staticClass:"navbar-item"},[e._v(" Documentation ")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[e._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item"},[e._v(" About ")]),a("a",{staticClass:"navbar-item"},[e._v(" Jobs ")]),a("a",{staticClass:"navbar-item"},[e._v(" Contact ")]),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[e._v(" Report an issue ")])])])]),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-primary"},[a("strong",[e._v("Sign up")])]),a("a",{staticClass:"button is-light"},[e._v(" Log in ")])])])])])])}],y={name:"HeaderComponent"},S=y,N=Object(C["a"])(S,_,x,!1,null,"e5b19a4c",null),M=N.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"class-detail-wrapper"}},[a("button",{staticClass:"button is-primary is-fullwidth is-block mb-5",on:{click:function(t){return e.gotoEdit()}}},[e._v("Edit")]),a("button",{staticClass:"button is-primary is-fullwidth is-block",on:{click:function(t){return e.gotoAttendance()}}},[e._v("Attendance")])])},O=[],R={name:"ClassDetailComponent",methods:{gotoEdit:function(){var e=this.$route.params.classId;this.$router.push({name:"edit",params:{classId:e}})},gotoAttendance:function(){var e=this.$route.params.classId;this.$router.push({name:"attendance",params:{classId:e}})}}},$=R,j=Object(C["a"])($,E,O,!1,null,"2badfde8",null),I=j.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"wrapper"}},[a("div",[e._v(e._s(e.errorMessage))]),a("div",{attrs:{id:"add-student"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newStudentName,expression:"newStudentName"}],staticClass:"input is-primary",attrs:{type:"text",placeholder:"Enter Student Name"},domProps:{value:e.newStudentName},on:{input:function(t){t.target.composing||(e.newStudentName=t.target.value)}}}),e.isEdited?e._e():a("button",{staticClass:"button",on:{click:function(t){return e.addStudent()}}},[e._v("Add")])]),e._l(e.students,(function(t){return a("div",{key:t.id,attrs:{id:"student-list"}},[e.editedStudent&&e.editedStudent.id===t.id?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.studentName,expression:"student.studentName"}],attrs:{type:"text"},domProps:{value:t.studentName},on:{onblur:function(a){return e.editStudent(t)},input:function(a){a.target.composing||e.$set(t,"studentName",a.target.value)}}}),a("button",{on:{click:function(a){return e.editStudent(t)}}},[e._v("Save")])]):a("div",[a("span",{staticClass:"student-name"},[e._v(e._s(t.studentName))]),e.isEdited?e._e():a("button",{on:{click:function(a){return e.onClickEditBtn(t)}}},[e._v("EditName")]),e.isEdited?e._e():a("button",{on:{click:function(a){return e.removeStudent(t.id)}}},[e._v("Remove")]),e.isEdited?e._e():a("button",{on:{click:function(a){return e.editAttendanceData(t.id)}}},[e._v("Attendance data")])])])}))],2)},D=[],P={name:"EditStudentInfoComponent",created:function(){var e=this.$route.params.classId;this.$bind("students",h.collection("chickenClass").doc(e).collection("data"))},data:function(){return{editedStudent:null,isEdited:!1,students:[],newStudentName:"",errorMessage:""}},computed:{studentsRef:function(){return h.collection("chickenClass").doc(this.$route.params.classId).collection("data")}},methods:{onClickEditBtn:function(e){this.isEdited||(this.editedStudent=e,this.isEdited=!0)},editStudent:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,!e.studentName){a.next=9;break}return a.next=4,t.studentsRef.doc(t.editedStudent.id).update({studentName:e.studentName});case 4:t.editedStudent=null,t.errorMessage="",t.isEdited=!1,a.next=10;break;case 9:t.errorMessage="Name can't empty";case 10:a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),t.errorMessage=a.t0;case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()},removeStudent:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.studentsRef.doc(e).delete();case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),t.errorMessage=a.t0;case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},addStudent:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.students.find((function(t){return t===e.newStudentName})),!a){t.next=5;break}e.errorMessage="Student already existed",t.next=19;break;case 5:if(t.prev=5,!e.newStudentName){t.next=13;break}return t.next=9,e.studentsRef.add({studentName:e.newStudentName});case 9:e.newStudentName="",e.errorMessage="",t.next=14;break;case 13:e.errorMessage="Student name can't empty";case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](5),e.errorMessage=t.t0;case 19:case"end":return t.stop()}}),t,null,[[5,16]])})))()},editAttendanceData:function(e){var t=this.$route.params.classId;this.$router.push({name:"edit_attendance",params:{studentId:e,classId:t}})}}},T=P,F=Object(C["a"])(T,A,D,!1,null,"47fa2905",null),H=F.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"wrapper"}},e._l(e.students,(function(t){return a("div",{key:t.id,attrs:{id:"student-list"}},[a("span",{staticClass:"student-name"},[e._v(e._s(t.studentName))]),a("input",{attrs:{type:"checkbox"},domProps:{checked:e.getAttendance(t)},on:{change:function(a){return e.onAttendance(t,a)}}})])})),0)},B=[],G=(a("99af"),a("4de4"),a("caad"),a("2532"),{name:"AttendanceComponent",created:function(){var e=this.$route.params.classId;this.$bind("students",h.collection("chickenClass").doc(e).collection("data"))},data:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n="".concat(t,"_").concat(a),r=e.getDate();return{students:[],errorMessage:"",key:n,date:r}},computed:{studentsRef:function(){return h.collection("chickenClass").doc(this.$route.params.classId).collection("data")}},methods:{onAttendance:function(e,t){var a=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.data=e.data||{},r=e.data,s=r[a.key]||[],t.currentTarget.checked?s.push(a.date):s=s.filter((function(e){return e!==a.date})),e.data[a.key]=s,n.prev=5,n.next=8,a.studentsRef.doc(e.id).update({data:e.data});case 8:n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](5),a.errorMessage=n.t0;case 13:case"end":return n.stop()}}),n,null,[[5,10]])})))()},getAttendance:function(e){return!(!e.data||!e.data[this.key])&&e.data[this.key].includes(this.date)}}}),K=G,J=Object(C["a"])(K,Y,B,!1,null,"850aadb6",null),L=J.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"wrapper"}},[a("div",[e._v(e._s(e.errorMessage))]),a("div",[e._v(e._s(e.dataStudent.studentName))]),a("div",{staticClass:"p-5"},[a("FullCalendar",{staticClass:"demo-app-calendar",attrs:{options:e.calendarOptions}})],1)])},Q=[],U=(a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("f5ff")),V=a("3cdd"),Z=a("a20c"),q={components:{FullCalendar:U["a"]},name:"StudentDataMonthComponent",created:function(){var e=this.$route.params.classId,t=this.$route.params.studentId;this.$bind("dataStudent",h.collection("chickenClass").doc(e).collection("data").doc(t))},data:function(){return{dataStudent:{},selectedDate:null,errorMessage:""}},computed:{studentsRef:function(){var e=this.$route.params.classId,t=this.$route.params.studentId;return h.collection("chickenClass").doc(e).collection("data").doc(t)},dates:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n="".concat(t,"_").concat(a),r=this.dataStudent["data"]||{},s=r[n]||[];return s.map((function(e){return e=e<10?"0"+e:e,"".concat(t,"-").concat(a,"-").concat(e)}))},calendarOptions:function(){var e=this.dates.map((function(e){return{title:"OK",date:e}}));return{plugins:[V["a"],Z["a"]],height:"70vh",initialView:"dayGridMonth",events:e,locale:"vn",firstDay:1,headerToolbar:{left:"",center:"title",right:""},dateClick:this.handleDateClick,eventClick:this.handleEventClick}}},methods:{handleDateClick:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.errorMessage="",n=e.date.getTime(),r=(new Date).getTime(),s=n>r,!s){a.next=7;break}return t.errorMessage="Cannot set time in future",a.abrupt("return");case 7:if(i=e.date.getDate(),!t.isAttDate(i)){a.next=13;break}return a.next=11,t.removeAtt(i);case 11:a.next=15;break;case 13:return a.next=15,t.addAtt(i);case 15:case"end":return a.stop()}}),a)})))()},isAttDate:function(e){var t=this.dates.map((function(e){var t=e.split("-");return t[t.length-1]}));return t.includes(e.toString())},handleEventClick:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.errorMessage="",n=e.event.start.getDate(),a.next=4,t.removeAtt(n);case 4:case"end":return a.stop()}}),a)})))()},removeAtt:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new Date,r=n.getFullYear(),s=n.getMonth()+1,i="".concat(r,"_").concat(s),c=t.dataStudent["data"],c[i]=c[i].filter((function(t){return t!==e})),a.prev=6,a.next=9,t.studentsRef.update({data:c});case 9:a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](6),t.errorMessage=a.t0;case 14:case"end":return a.stop()}}),a,null,[[6,11]])})))()},addAtt:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){var n,r,s,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new Date,r=n.getFullYear(),s=n.getMonth()+1,i="".concat(r,"_").concat(s),c=t.dataStudent["data"]||{},c[i]=c[i]||[],c[i].push(e),a.prev=7,a.next=10,t.studentsRef.update({data:c});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](7),t.errorMessage=a.t0;case 15:case"end":return a.stop()}}),a,null,[[7,12]])})))()}}},W=q,X=Object(C["a"])(W,z,Q,!1,null,"4c3e1090",null),ee=X.exports,te=[{path:"/",component:k},{path:"/class/:classId",name:"class",component:I},{path:"/class/:classId/edit",name:"edit",component:H},{path:"/class/:classId/attendance",name:"attendance",component:L},{path:"/class/:classId/edit/attendance/:studentId",name:"edit_attendance",component:ee}],ae=new i["a"]({routes:te});n["default"].use(c["a"]),n["default"].use(u.a),n["default"].use(i["a"]);var ne={router:ae,name:"App",components:{HeaderComponent:M}},re=ne,se=(a("034f"),Object(C["a"])(re,r,s,!1,null,null,null)),ie=se.exports;a("92c6");n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(ie)}}).$mount("#app")},"85ec":function(e,t,a){},a1d4:function(e,t,a){},de3d:function(e,t,a){"use strict";a("a1d4")}});
//# sourceMappingURL=app.8cf899f3.js.map