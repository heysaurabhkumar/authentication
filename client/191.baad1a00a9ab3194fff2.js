(self.webpackChunkclient=self.webpackChunkclient||[]).push([[191],{2191:(e,r,i)=>{"use strict";i.r(r),i.d(r,{UsersModule:()=>O});var n=i(665),o=i(8583),t=i(6440),s=i(639),l=i(1228);let u=(()=>{class e{constructor(e){this._authService=e}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)(s.Y36(l.e))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-sidebar"]],decls:43,vars:0,consts:[[1,"container-fluid"],[1,"row","flex-nowrap"],[1,"col-auto","col-md-3","col-xl-2","px-sm-2","px-0","bg-dark"],[1,"d-flex","flex-column","align-items-center","align-items-sm-start","px-3","pt-2","text-white","new"],["id","menu",1,"nav","nav-pills","flex-column","mb-sm-auto","mb-0","align-items-center","align-items-sm-start"],[1,"nav-item"],["routerLink","/users/profile",1,"nav-link","align-middle","px-0"],[1,"ms-1","d-none","d-sm-inline","left-space"],["href","#submenu2","data-bs-toggle","collapse",1,"nav-link","px-0","align-middle"],[1,"ms-1","d-none","d-sm-inline"],["id","submenu2","data-bs-parent","#menu",1,"collapse","nav","flex-column","ms-1"],[1,"w-100"],["routerLink","/resumes/resume",1,"nav-link","px-0"],[1,"d-none","d-sm-inline"],["routerLink","/resumes/template",1,"nav-link","px-0"],[1,"dropdown","pb-4"],["href","#","id","dropdownUser1","data-bs-toggle","dropdown","aria-expanded","false",1,"d-flex","align-items-center","text-white","text-decoration-none","dropdown-toggle"],[1,"d-none","d-sm-inline","mx-1"],[1,"dropdown-menu","dropdown-menu-dark","text-small","shadow"],["routerLink","/users/edit",1,"dropdown-item"],[1,"dropdown-divider"],[1,"dropdown-item",3,"click"],[1,"col","py-3"]],template:function(e,r){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"ul",4),s.TgZ(5,"li",5),s.TgZ(6,"a",6),s._uU(7," U"),s.TgZ(8,"span",7),s._uU(9,"ser Profile"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"li"),s.TgZ(11,"a",8),s._uU(12," R"),s.TgZ(13,"span",9),s._uU(14,"esume Builder"),s.qZA(),s.qZA(),s.TgZ(15,"ul",10),s.TgZ(16,"li",11),s.TgZ(17,"a",12),s._uU(18," E"),s.TgZ(19,"span",13),s._uU(20,"dit Resume"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"li"),s.TgZ(22,"a",14),s._uU(23," M"),s.TgZ(24,"span",13),s._uU(25,"y Resume"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(26,"hr"),s.TgZ(27,"div",15),s.TgZ(28,"a",16),s._uU(29," U"),s.TgZ(30,"span",17),s._uU(31,"ser Settings"),s.qZA(),s.qZA(),s.TgZ(32,"ul",18),s.TgZ(33,"li"),s.TgZ(34,"a",19),s._uU(35,"Edit Profile"),s.qZA(),s.qZA(),s.TgZ(36,"li"),s._UZ(37,"hr",20),s.qZA(),s.TgZ(38,"li"),s.TgZ(39,"a",21),s.NdJ("click",function(){return r._authService.logoutUser()}),s._uU(40,"Sign out"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(41,"div",22),s._UZ(42,"router-outlet"),s.qZA(),s.qZA(),s.qZA())},directives:[t.yS,t.lC],styles:[".new[_ngcontent-%COMP%]{height:93vh}.left-space[_ngcontent-%COMP%]{padding-left:0;margin-left:0}"]}),e})(),a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-users"]],decls:1,vars:0,template:function(e,r){1&e&&s._UZ(0,"app-sidebar")},directives:[u],styles:[""]}),e})();var d=i(5069);function c(e,r){1&e&&(s.TgZ(0,"div"),s._uU(1," Email is required. "),s.qZA())}function m(e,r){1&e&&(s.TgZ(0,"div"),s._uU(1," This is not a valid Email!!! "),s.qZA())}function p(e,r){if(1&e&&(s.TgZ(0,"div",24),s.YNc(1,c,2,0,"div",25),s.YNc(2,m,2,0,"div",25),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",null==e.user.controls.email.errors?null:e.user.controls.email.errors.required),s.xp6(1),s.Q6J("ngIf",null==e.user.controls.email.errors?null:e.user.controls.email.errors.email)}}function Z(e,r){1&e&&(s.TgZ(0,"div"),s._uU(1," Username is required. "),s.qZA())}function g(e,r){if(1&e&&(s.TgZ(0,"div"),s._uU(1),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.hij(" Username should be at least ",null==e.user.controls.username.errors||null==e.user.controls.username.errors.minlength?null:e.user.controls.username.errors.minlength.requiredLength," characters. ")}}function f(e,r){if(1&e&&(s.TgZ(0,"div",24),s.YNc(1,Z,2,0,"div",25),s.YNc(2,g,2,1,"div",25),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",null==e.user.controls.username.errors?null:e.user.controls.username.errors.required),s.xp6(1),s.Q6J("ngIf",null==e.user.controls.username.errors?null:e.user.controls.username.errors.minlength)}}function v(e,r){1&e&&(s.TgZ(0,"div"),s._uU(1," Password is required. "),s.qZA())}function b(e,r){if(1&e&&(s.TgZ(0,"div"),s._uU(1),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.hij(" Password should be at least ",null==e.user.controls.password.errors||null==e.user.controls.password.errors.minlength?null:e.user.controls.password.errors.minlength.requiredLength," characters. ")}}function h(e,r){if(1&e&&(s.TgZ(0,"div",24),s.YNc(1,v,2,0,"div",25),s.YNc(2,b,2,1,"div",25),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",null==e.user.controls.password.errors?null:e.user.controls.password.errors.required),s.xp6(1),s.Q6J("ngIf",null==e.user.controls.password.errors?null:e.user.controls.password.errors.minlength)}}function q(e,r){1&e&&(s.TgZ(0,"div"),s._uU(1," Mobile is required. "),s.qZA())}function A(e,r){1&e&&(s.TgZ(0,"div"),s._uU(1," This is not a valid Mobile Number!!! "),s.qZA())}function T(e,r){if(1&e&&(s.TgZ(0,"div",24),s.YNc(1,q,2,0,"div",25),s.YNc(2,A,2,0,"div",25),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",null==e.mobileVerify.controls.mobile.errors?null:e.mobileVerify.controls.mobile.errors.required),s.xp6(1),s.Q6J("ngIf",null==e.mobileVerify.controls.mobile.errors?null:e.mobileVerify.controls.mobile.errors.pattern)}}function _(e,r){1&e&&(s.TgZ(0,"div",26),s._uU(1," Otp hass been sent to your mobile number. "),s.qZA())}function w(e,r){1&e&&(s.TgZ(0,"div"),s._uU(1," Otp is required. "),s.qZA())}function x(e,r){if(1&e&&(s.TgZ(0,"div"),s._uU(1),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.hij(" Otp should be at least ",null==e.mobileVerify.controls.otp.errors||null==e.mobileVerify.controls.otp.errors.minlength?null:e.mobileVerify.controls.otp.errors.minlength.requiredLength," characters. ")}}function U(e,r){if(1&e&&(s.TgZ(0,"div",24),s.YNc(1,w,2,0,"div",25),s.YNc(2,x,2,1,"div",25),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",null==e.mobileVerify.controls.otp.errors?null:e.mobileVerify.controls.otp.errors.required),s.xp6(1),s.Q6J("ngIf",null==e.mobileVerify.controls.otp.errors?null:e.mobileVerify.controls.otp.errors.minlength)}}let y=(()=>{class e{constructor(e,r,i){this._auth=e,this._router=r,this._verifyOtp=i,this.otpSent=!1,this.user=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),username:new n.NI("",[n.kI.required,n.kI.minLength(4)]),password:new n.NI("",[n.kI.required,n.kI.minLength(6)])}),this.mobileVerify=new n.cw({mobile:new n.NI("",[n.kI.required,n.kI.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),otp:new n.NI("",[n.kI.required,n.kI.minLength(5)])})}ngOnInit(){this._auth.getProfile().subscribe(e=>{this.user.patchValue({email:e.email,username:e.username}),this.mobileVerify.patchValue({mobile:e.mobile})},e=>console.error(e))}editUser(){this._auth.editUser(this.user.value).subscribe(e=>{this._router.navigate(["users/profile"])},e=>{"Email already exists"===e.error?alert("Email already exists"):console.error(e)})}sendOtp(){this._verifyOtp.sendOtp(this.mobileVerify.value.mobile).subscribe(e=>{this.otpSent=!0},e=>{console.log(e)})}verify(){this._verifyOtp.verifyOtp(this.mobileVerify.value).subscribe(e=>{this._router.navigate(["/users/profile"]),this._verifyOtp.verified=!0},e=>{console.log(e)})}}return e.\u0275fac=function(r){return new(r||e)(s.Y36(l.e),s.Y36(t.F0),s.Y36(d.Z))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-edit-profile"]],decls:48,vars:11,consts:[[1,"row","pt-5"],[1,"col-md-6","mx-auto"],[1,"card","rounded-0"],[1,"card-header"],[1,"mb-0"],[1,"card-body"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","emailInput"],["id","emailInput","type","email","formControlName","email",1,"form-control","rounded-0"],["class","alert alert-danger",4,"ngIf"],["for","usernameInput"],["id","usernameInput","type","text","formControlName","username",1,"form-control","rounded-0"],["for","passwordInput"],["id","passwordInput","type","password","formControlName","password","placeholder","Enter password",1,"form-control","rounded-0"],["type","submit",1,"btn","btn-primary","float-right",3,"disabled"],["for","mobileInput"],["id","mobileInput","type","tel","formControlName","mobile",1,"form-control","rounded-0"],[1,"container","text-center"],["type","button",1,"btn","btn-primary","btn-sm",3,"disabled","click"],["class","alert alert-success mt-2",4,"ngIf"],["for","otpInput"],["id","otpInput","type","text","formControlName","otp",1,"form-control","rounded-0"],["type","submit",1,"btn","btn-success","float-right",3,"disabled"],[1,"alert","alert-danger"],[4,"ngIf"],[1,"alert","alert-success","mt-2"]],template:function(e,r){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"h3",4),s._uU(5,"Edit Profile"),s.qZA(),s.qZA(),s.TgZ(6,"div",5),s.TgZ(7,"form",6),s.NdJ("ngSubmit",function(){return r.editUser()}),s.TgZ(8,"div",7),s.TgZ(9,"label",8),s._uU(10,"New Email"),s.qZA(),s._UZ(11,"input",9),s.YNc(12,p,3,2,"div",10),s.qZA(),s.TgZ(13,"div",7),s.TgZ(14,"label",11),s._uU(15,"New Username"),s.qZA(),s._UZ(16,"input",12),s.YNc(17,f,3,2,"div",10),s.qZA(),s.TgZ(18,"div",7),s.TgZ(19,"label",13),s._uU(20,"Password or New Password (If you want to change.)"),s.qZA(),s._UZ(21,"input",14),s.YNc(22,h,3,2,"div",10),s.qZA(),s.TgZ(23,"button",15),s._uU(24," Update Profile "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(25,"div",1),s.TgZ(26,"div",2),s.TgZ(27,"div",3),s.TgZ(28,"h3",4),s._uU(29,"Profile Verification"),s.qZA(),s.qZA(),s.TgZ(30,"div",5),s.TgZ(31,"form",6),s.NdJ("ngSubmit",function(){return r.verify()}),s.TgZ(32,"div",7),s.TgZ(33,"label",16),s._uU(34,"Mobile Number"),s.qZA(),s._UZ(35,"input",17),s.YNc(36,T,3,2,"div",10),s.qZA(),s.TgZ(37,"div",18),s.TgZ(38,"button",19),s.NdJ("click",function(){return r.sendOtp()}),s._uU(39," Send OTP "),s.qZA(),s.qZA(),s.YNc(40,_,2,0,"div",20),s.TgZ(41,"div",7),s.TgZ(42,"label",21),s._uU(43,"OTP"),s.qZA(),s._UZ(44,"input",22),s.YNc(45,U,3,2,"div",10),s.qZA(),s.TgZ(46,"button",23),s._uU(47," Verify "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(7),s.Q6J("formGroup",r.user),s.xp6(5),s.Q6J("ngIf",r.user.controls.email.touched&&r.user.controls.email.invalid),s.xp6(5),s.Q6J("ngIf",r.user.controls.username.touched&&r.user.controls.username.invalid),s.xp6(5),s.Q6J("ngIf",r.user.controls.password.touched&&r.user.controls.password.invalid),s.xp6(1),s.Q6J("disabled",r.user.invalid),s.xp6(8),s.Q6J("formGroup",r.mobileVerify),s.xp6(5),s.Q6J("ngIf",r.mobileVerify.controls.mobile.touched&&r.mobileVerify.controls.mobile.invalid),s.xp6(2),s.Q6J("disabled",r.mobileVerify.controls.mobile.invalid),s.xp6(2),s.Q6J("ngIf",r.otpSent),s.xp6(5),s.Q6J("ngIf",r.mobileVerify.controls.otp.touched&&r.mobileVerify.controls.otp.invalid),s.xp6(1),s.Q6J("disabled",r.mobileVerify.invalid))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,o.O5],styles:[""]}),e})();var I=i(1841);function N(e,r){1&e&&(s.TgZ(0,"div",11),s.TgZ(1,"h2"),s._uU(2," Mobile is not verified! Click here to verify now "),s.TgZ(3,"a",12),s._uU(4,"here"),s.qZA(),s.qZA(),s.qZA())}function J(e,r){1&e&&(s.TgZ(0,"h6"),s._uU(1,"Verified Account"),s.qZA())}let k=(()=>{class e{constructor(e,r){this._auth=e,this._router=r,this.user={}}ngOnInit(){this._auth.getProfile().subscribe(e=>{this.user=e},e=>{e instanceof I.UA&&401===e.status&&this._router.navigate(["auth/login"])})}}return e.\u0275fac=function(r){return new(r||e)(s.Y36(l.e),s.Y36(t.F0))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-profile"]],decls:16,vars:5,consts:[[1,"row","pt-5"],[1,"col-md-6","mx-auto"],["class","alert alert-danger",4,"ngIf"],[1,"card","rounded-0"],[1,"card-header"],[1,"mb-0"],[1,"verified","mt-2"],[4,"ngIf"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"alert","alert-danger"],["routerLink","/users/edit"]],template:function(e,r){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.YNc(2,N,5,0,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.TgZ(5,"h3",5),s._uU(6," User Profile "),s.TgZ(7,"div",6),s.YNc(8,J,2,0,"h6",7),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"div",8),s.TgZ(10,"h5",9),s._uU(11),s.qZA(),s.TgZ(12,"p",10),s._uU(13),s.qZA(),s.TgZ(14,"p",10),s._uU(15),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("ngIf",!r.user.verified),s.xp6(6),s.Q6J("ngIf",r.user.verified),s.xp6(3),s.hij("Hello ",r.user.username,""),s.xp6(2),s.hij("Email: ",r.user.email,""),s.xp6(2),s.hij("Mobile: ",r.user.mobile,""))},directives:[o.O5,t.yS],styles:[".verified[_ngcontent-%COMP%]{color:green}"]}),e})();var V=i(6525);const Y=[{path:"",component:a,children:[{path:"profile",component:k,canActivate:[V.a]},{path:"edit",component:y,canActivate:[V.a]}]}];let Q=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[t.Bz.forChild(Y)],t.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,Q,n.UX]]}),e})()}}]);