"use strict";(self.webpackChunkeffective_mobile_test=self.webpackChunkeffective_mobile_test||[]).push([[683],{5683:(y,c,a)=>{a.r(c),a.d(c,{RegistrationModule:()=>w});var p=a(6814),g=a(4581),u=a(6223);function F(t,o){return s=>{const n=t.map(i=>s.get(i)).map(i=>i?.value);return 1===new Set(n).size?null:(o?.length&&o.forEach(i=>s.get(i)?.setErrors({mustmatch:!0})),{mustmatch:!0})}}var d=a(4748),r=a(5879),Z=a(9483),f=a(2939),h=a(2296),l=a(9157),C=a(2032),E=a(5195);function v(t,o){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"\u041f\u0443\u0441\u0442\u043e\u0439 email"),r.qZA())}function R(t,o){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email"),r.qZA())}function T(t,o){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"\u041c\u0435\u043d\u0435\u0435 7 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),r.qZA())}function I(t,o){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"\u041f\u0443\u0441\u0442\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),r.qZA())}function x(t,o){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"),r.qZA())}function A(t,o){1&t&&(r.TgZ(0,"mat-error"),r._uU(1,"\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),r.qZA())}const B=[{path:"",component:(()=>{var t;class o{constructor(n,e,m){this.auth=e,this.snackBar=m,this.RoutePaths=d.s,this.regForm=n.group({email:new u.NI("",[u.kI.email,u.kI.required]),password:new u.NI("",[u.kI.minLength(7),u.kI.required]),checkPassword:new u.NI("",[u.kI.required])},{validators:[F(["password","checkPassword"],["checkPassword"])],updateOn:"blur"})}register(){const n=this.regForm.controls.email.value,e=this.regForm.controls.password.value,m=this.regForm.controls.checkPassword.value;if(!n||!e||!m||e!==m)return;const i=this.auth.register(n,e,[d.s.POSTS]);i&&this.snackBar.open(i.message,void 0,{duration:2e3})}}return(t=o).\u0275fac=function(n){return new(n||t)(r.Y36(u.qu),r.Y36(Z.e),r.Y36(f.ux))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-registration"]],decls:23,vars:8,consts:[[3,"formGroup","ngSubmit"],["matInput","","type","email","placeholder","your@mail.ru","formControlName","email","required",""],[4,"ngIf"],["matInput","","type","password","placeholder","*******","formControlName","password","required",""],["matInput","","type","password","placeholder","*******","formControlName","checkPassword","required",""],["mat-button","","type","submit",3,"disabled"]],template:function(n,e){1&n&&(r.TgZ(0,"mat-card")(1,"form",0),r.NdJ("ngSubmit",function(){return e.register()}),r.TgZ(2,"mat-form-field")(3,"mat-label"),r._uU(4,"Email"),r.qZA(),r._UZ(5,"input",1),r.YNc(6,v,2,0,"mat-error",2),r.YNc(7,R,2,0,"mat-error",2),r.qZA(),r.TgZ(8,"mat-form-field")(9,"mat-label"),r._uU(10,"\u041f\u0430\u0440\u043e\u043b\u044c"),r.qZA(),r._UZ(11,"input",3),r.YNc(12,T,2,0,"mat-error",2),r.YNc(13,I,2,0,"mat-error",2),r.qZA(),r.TgZ(14,"mat-form-field")(15,"mat-label"),r._uU(16,"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),r.qZA(),r._UZ(17,"input",4),r.YNc(18,x,2,0,"mat-error",2),r.YNc(19,A,2,0,"mat-error",2),r.qZA(),r.TgZ(20,"button",5),r._uU(21,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.qZA()()(),r._uU(22,"> ")),2&n&&(r.xp6(1),r.Q6J("formGroup",e.regForm),r.xp6(5),r.Q6J("ngIf",e.regForm.controls.email.hasError("required")),r.xp6(1),r.Q6J("ngIf",e.regForm.controls.email.hasError("email")),r.xp6(5),r.Q6J("ngIf",e.regForm.controls.password.hasError("minlength")),r.xp6(1),r.Q6J("ngIf",e.regForm.controls.password.hasError("required")),r.xp6(5),r.Q6J("ngIf",e.regForm.controls.checkPassword.hasError("mustmatch")),r.xp6(1),r.Q6J("ngIf",e.regForm.controls.checkPassword.hasError("required")),r.xp6(1),r.Q6J("disabled",e.regForm.invalid))},dependencies:[p.O5,h.lW,l.KE,l.hX,l.TO,C.Nt,u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.sg,u.u,E.a8],styles:["mat-card[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f;padding:20px;background-color:var(--primary-clr)}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled){color:#fff}"]}),o})()}];let q=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[g.Bz.forChild(B),g.Bz]}),o})(),w=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[p.ez,q,h.ot,l.lN,C.c,u.UX,E.QW,f.ZX]}),o})()}}]);