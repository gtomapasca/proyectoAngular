import{Eb as m,b as i,t as l,w as u,xb as h}from"./chunk-777HDVUW.js";import{C as c,d as s}from"./chunk-U7L4XMCF.js";var f=class n{constructor(e,t){this.afAuth=e;this.router=t}isAuthenticated=!1;login(e,t){return s(this,null,function*(){let r=yield this.afAuth.signInWithEmailAndPassword(e,t),a=yield r.user?.getIdToken();if(a){let o=r.user?.displayName||r.user?.email||"Desconocido";localStorage.setItem("authToken",a),localStorage.setItem("userName",o),this.isAuthenticated=!0}return a})}logout(){return s(this,null,function*(){yield this.afAuth.signOut(),this.isAuthenticated=!1,localStorage.removeItem("userName"),this.router.navigate(["/login"])})}get authState(){return this.afAuth.authState}isLoggedIn(){return s(this,null,function*(){return!!(yield this.afAuth.currentUser)})}isAuthenticatedToken(){return!!(typeof window<"u"&&localStorage.getItem("authToken"))}register(e,t){return new i(r=>{this.afAuth.createUserWithEmailAndPassword(e,t).then(a=>{r.next(a),r.complete()}).catch(a=>{r.error(a)})})}resetPassword(e){return new i(t=>{this.afAuth.sendPasswordResetEmail(e).then(()=>{t.next(),t.complete()}).catch(r=>{t.error(r)})})}loginWithGoogle(){let e=new c.auth.GoogleAuthProvider;return new i(t=>{this.afAuth.signInWithPopup(e).then(r=>s(this,null,function*(){let a=r.user;if(a){let o=yield a.getIdToken(),g=a.displayName||a.email||"Desconocido";localStorage.setItem("authToken",o||""),localStorage.setItem("userName",g),this.isAuthenticated=!0}t.next(a),t.complete()})).catch(r=>{t.error(r)})})}getCurrentUserId(){return s(this,null,function*(){let e=yield this.afAuth.currentUser;return e?e.uid:null})}getCurrentUser(){return s(this,null,function*(){let e=yield this.afAuth.currentUser;if(e){let t=e.displayName||e.email||"Desconocido";return localStorage.setItem("userName",t),e}return null})}static \u0275fac=function(t){return new(t||n)(u(m),u(h))};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})};export{f as a};
