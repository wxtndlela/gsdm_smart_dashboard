// import { ToastController } from '@ionic/angular';
// import { Injectable } from '@angular/core';
// import * as moment from 'moment';
// import { environment } from '../environments/environment';

// import { GlobalSettings } from "../services/global.service";


// // Import the functions you need from the SDKs you need
// import { getApp } from "firebase/app";

// import { getFirestore, deleteDoc, addDoc, updateDoc, collection, doc, getDocs, getDoc, query, where, DocumentReference, orderBy } from "firebase/firestore";
// import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
// import { threadId } from 'worker_threads';
// import { Storage  } from "@ionic/storage";

// @Injectable({
//     providedIn: 'root'
// })

// export class FirebaseService {

//     db = getFirestore();
//     datetime = moment().format().toString();
//     // Get a non-default Storage bucket
//     storage = getStorage();

//     constructor(
//         private toastController: ToastController,
//         public global: GlobalSettings,
//         private _storage: Storage,
//     ) {

//     }

//     /**
//      * 
//      * SET METHODS
//      */

//     //add user document
//     async createUser(user_id, tag, name, surname, email, contact,address, nok, nok_contact, nok2, nok_contact2, blood, doctor, donor, will, willinfo,medical, photo_url, state) {
//         try {

//             let company = 'MEDIC';

//             let filteri = name+surname+tag;
//             const docRef = await addDoc(collection(this.db, "users"), {
//                 user_id: user_id,
//                 tag: tag,
//                 name: name,
//                 surname: surname,
//                 email: email,
//                 contact: contact,
//                 address: address,
//                 medical: medical,
//                 nok: nok,
//                 nok_contact: nok_contact,
//                 nok2: nok2,
//                 nok_contact2: nok_contact2,
//                 blood: blood,
//                 doctor: doctor,
//                 donor: donor,
//                 will: will,
//                 willinfo: willinfo,

//                 company: company,
//                 photo_url: photo_url,
//                 datetime: this.datetime,
//                 filterindex: filteri,
//                 fingerid: 0,
//                 state: state
//             });

//             this._storage.get("username").then(val=>{
//                 //AUDIT TRAIL
//                 this.add_audit('NEW USER',company,'SUCCESS',val,name+" "+surname);
//             });

            

//             console.log("Document written with ID: ", docRef.id);
//             return docRef.id;
//         } catch (e) {
//             this._storage.get("username").then(val=>{
//                 //AUDIT TRAIL
//                 this.add_audit('NEW USER','MEDIC','FAIL',val,name+" "+surname);
//             });
//             console.error("Error adding document: ", e);
//             return undefined;
//         }
//     }

//     //add device document
//     async createDevice(ref, name, company, photo_url, state) {
//         try {
//             const docRef = await addDoc(collection(this.db, "device"), {
//                 name: name,
//                 company: company,
//                 ref: ref,
//                 photo_url: photo_url,
//                 datetime: this.datetime,
//                 state: state
//             });

//             console.log("Document written with ID: ", docRef.id);
//             return docRef.id;
//         } catch (e) {
//             console.error("Error adding document: ", e);
//             return undefined;
//         }
//     }

//     //add company document
//     async createCompany(name, contact_person, contact_nr, contact_email, state) {
//         try {

//             const q = query(collection(this.db, "company"), where("name", "==", name));
//             const querySnapshot = await getDocs(q);

//             if( querySnapshot.size > 0){
//                 return undefined;
//             }

//             const docRef = await addDoc(collection(this.db, "company"), {
//                 name: name,
//                 contact_person: contact_person,
//                 contact_nr: contact_nr,
//                 contact_email: contact_email,
//                 datetime: this.datetime,
//                 state: state
//             });

//             console.log("Document written with ID: ", docRef.id);
//             return docRef.id;
//         } catch (e) {
//             console.error("Error adding document: ", e);
//             return undefined;
//         }
//     }

//     async enrollFinger(id){
        
//         try{
//             const docRef = doc(this.db, "sfm", 'command');
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'user':id,'command':'enroll','direction':'toscanner','read':false})
//             }
//             console.log("Document updated with ID: ", docRef.id);
//             return docRef.id;
//         }catch (e) {
//             console.error("Error updating document: ", e);
//             return undefined;
//         }
       
//     }

//     async clearScanner(){
        
//         try{
//             const docRef = doc(this.db, "sfm", 'command');
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'command':'clear','direction':'toscanner','read':false})
//             }
//             console.log("Document updated with ID: ", docRef.id);
//             return docRef.id;
//         }catch (e) {
//             console.error("Error updating document: ", e);
//             return undefined;
//         }
       
//     }

//     async scanCommand(){

//         try{
//             const docRef = doc(this.db, "sfm", 'command');
//             const docSnap = await getDoc(docRef);

//             let pass = false;

//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'command':'ident','direction':'toscanner','read':false,'result':null});

//                 let Data = [];


//                 await this.delay(5000);


//                 let q = null;
//                 q = query(collection(this.db, "sfm"), where("direction", "==", 'tocloud'), where("command", "==", 'ident'), where("read", "==", false));
//                 const querySnapshot = await getDocs(q)
//                 let cnt = 0;
//                 querySnapshot.forEach((_doc) => {
//                     //console.log();
//                     Data.push(_doc.data());
//                 });

//                 if( querySnapshot.size <= 0){
//                     Data.push({'result':'NO FINGER'});
//                 }

//                 return Data;
        
//             }
//         }catch (e) {
//             console.error("Error sending command: ", e);
//             return undefined;
//         }
        
//     }

//     async delay(ms: number) {
//         return new Promise( resolve => setTimeout(resolve, ms) );
//     }

//     async UpdateUser(id, tag, name,surname,address,nok,nok_contact,nok2,nok_contact2,blood, doctor,donor,will,willinfo,medical){
//         try{
//             console.log(id);
                
//             const docRef = doc(this.db, "users", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'tag':tag,'name':name,'surname':surname,'address':address,'nok':nok,'nok_contact':nok_contact,'nok2':nok2,'nok_contact2':nok_contact2,'blood':blood,'doctor':doctor,'donor':donor,'will':will,'willinfo':willinfo, 'medical':medical})
//                 console.log("Updated User")
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('USER UPDATE',val2,'SUCCESS',val,name+" "+surname);
//                     });
                    
//                 });
//                 return 0
    
//             } else {
//                 // doc.data() will be undefined in this case
//                 console.log("No such document!");
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('USER UPDATE',val2,'FAIL',val,name+" "+surname);
//                     });
                    
//                 });
//             }

//             return 0;
//         } catch (e) {
//             console.error("Error updating document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('USER UPDATE',val2,'FAIL',val,name+" "+surname);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     async UpdateKey(id, name){
//         try{
//             console.log(id);
                
//             const docRef = doc(this.db, "key", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'name':name})
//                 console.log("Updated key")
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('KEY UPDATE',val2,'SUCCESS',val,name);
//                     });
                    
//                 });
//                 return 0
    
//             } else {
//                 // doc.data() will be undefined in this case
//                 console.log("No such document!");
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('KEY UPDATE',val2,'FAIL',val,name);
//                     });
                    
//                 });
//             }

//             return 0;
//         } catch (e) {
//             console.error("Error updating document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('KEY UPDATE',val2,'FAIL',val,name);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     async UpdateDept(id, name){
//         try{
//             console.log(id);
                
//             const docRef = doc(this.db, "dept", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'name':name})
//                 console.log("Updated Dept")
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('DEPARTMENT UPDATE',val2,'SUCCESS',val,name);
//                     });
                    
//                 });
//                 return 0
    
//             } else {
//                 // doc.data() will be undefined in this case
//                 console.log("No such document!");
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('DEPARTMENT UPDATE',val2,'FAIL',val,name);
//                     });
                    
//                 });
//             }

//             return 0;
//         } catch (e) {
//             console.error("Error updating document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('DEPARTMENT UPDATE',val2,'FAIL',val,name);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     async UpdateGroup(id, name){
//         try{
//             console.log(id);
                
//             const docRef = doc(this.db, "group", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'name':name})
//                 console.log("Updated Group")
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('GROUP UPDATE',val2,'SUCCESS',val,name);
//                     });
                    
//                 });
//                 return 0
    
//             } else {
//                 // doc.data() will be undefined in this case
//                 console.log("No such document!");
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('GROUP UPDATE',val2,'FAIL',val,name);
//                     });
                    
//                 });
//             }

//             return 0;
//         } catch (e) {
//             console.error("Error updating document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('GROUP UPDATE',val2,'FAIL',val,name);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     //enable/disable group document
//     async enableDisableGroup(id) {
//         try {
//             console.log(id);
            
//             const docRef = doc(this.db, "group", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 if( docSnap.data().state == 0){
//                     await updateDoc(docRef,{'state':1})
//                     console.log("Enabled Group")
//                     this._storage.get("username").then(val=>{
//                         this._storage.get("company").then(val2=>{
//                             //AUDIT TRAIL
//                             this.add_audit('ENABLE GROUP',val2,'SUCCESS',val,docSnap.data().name);
//                         });
                        
//                     });
//                     return 1
//                 }else{
//                     await updateDoc(docRef,{'state':0})
//                     this._storage.get("username").then(val=>{
//                         this._storage.get("company").then(val2=>{
//                             //AUDIT TRAIL
//                             this.add_audit('DISABLE GROUP',val2,'SUCCESS',val,docSnap.data().name);
//                         });
                        
//                     });
//                     console.log("Disabled Group")
//                     return 0
//                 }
     
//             } else {
//                 // doc.data() will be undefined in this case
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('ENABLE/DISABLE GROUP',val2,'FAIL',val,id);
//                     });
                    
//                 });
//             }

//             return 0;
//         } catch (e) {
//             console.error("Error enabling/disabling document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('ENABLE/DISABLE GROUP',val2,'FAIL',val,e);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     async removeDept(id) {
//         try {
//             console.log(id);
            
//             const docRef = doc(this.db, "dept", id);
//             const docSnap = await getDoc(docRef);
//             await deleteDoc(docRef);
          
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('REMOVE DEPARTMENT',val2,'SUCCESS',val,docSnap.data().name);
//                 });
                
//             });

//             console.log("Document Deleted");
//             return 0;
//         } catch (e) {
//             console.error("Error removing document: ", e);
      
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('REMOVE DEPARTMENT',val2,'FAIL',val,e);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     //remove group document
//     async removeGroup(id) {
//         try {
//             console.log(id);
            
//             const docRef = doc(this.db, "group", id);
//             const docSnap = await getDoc(docRef);
//             await deleteDoc(docRef);
          
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('REMOVE GROUP',val2,'SUCCESS',val,docSnap.data().name);
//                 });
                
//             });

//             console.log("Document Deleted");
//             return 0;
//         } catch (e) {
//             console.error("Error removing document: ", e);
      
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('REMOVE GROUP',val2,'FAIL',val,e);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     async replaceUser(user_id) {
//         const q = query(collection(this.db, "users"), where("user_id", "==", user_id));
//         const querySnapshot = await getDocs(q);
//         let Data = [];
//         let doc_id = '';

//         querySnapshot.forEach((_doc) => {
//             doc_id = _doc.id;
//             const docRef = doc(this.db, "users", _doc.id);
            
//             updateDoc(docRef,{'state':0})
//             console.log("Document Replaced");
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('UNDELETE USER',val2,'SUCCESS',val,user_id);
//                 });
                
//             });
//             return doc_id;
//             // deleteDoc(docRef).then(()=>{
//             //     console.log("Document Deleted");
//             //     return doc_id;
//             // });

//         });
//     }

//     async add_audit(action, company, result, user, value){
//         try {

//             const docRef = await addDoc(collection(this.db, "audit"), {
//                 action: action,
//                 company: company,
//                 result: result,
//                 user: user,
//                 value: value,
//                 datetime: this.datetime
//             });

//             console.log("Document written with ID: ", docRef.id);
//             return docRef.id;
//         } catch (e) {
//             console.error("Error adding document: ", e);
//             return undefined;
//         }
//     }

//     async removeUser(user_id) {
//         const q = query(collection(this.db, "users"), where("user_id", "==", user_id));
//         const querySnapshot = await getDocs(q);
//         let Data = [];
//         let doc_id = '';

//         querySnapshot.forEach((_doc) => {
//             doc_id = _doc.id;
//             const docRef = doc(this.db, "users", _doc.id);
//             updateDoc(docRef,{'state':1})
//             console.log("Document Deleted");
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('DELETE USER',val2,'SUCCESS',val,user_id);
//                 });
                
//             });
//             return doc_id;
//             // deleteDoc(docRef).then(()=>{
//             //     console.log("Document Deleted");
//             //     return doc_id;
//             // });

//         });
//     }

//     async getUserDocID(user_id){
  
//         const q = query(collection(this.db, "users"));
//         const querySnapshot = await getDocs(q);
//         let Data = [];
//         let doc_id = '';

//         querySnapshot.forEach((_doc) => {

//             Data.push({'id':_doc.id,'user_id':_doc.data().user_id});

//         });

//         var cnt = Data.length;
//         let _id = '';
//         for(let i = 0; i < cnt; i++){
//             if( Data[i]['user_id'] == user_id){
//                 _id = Data[i]['id'];
//             }
//         }

//         return _id;

//     }

//     async removeKeyAllocation(id) {
//         try {
//             console.log(id);
            
//             const docRef = doc(this.db, "key-alloc", id);
//             await deleteDoc(docRef);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('REMOVE KEY ALLOCATION',val2,'SUCCESS',val,id);
//                 });
                
//             });

//             console.log("Document Deleted");
//             return 0;
//         } catch (e) {
//             console.error("Error removing document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('REMOVE KEY ALLOCATION',val2,'FAIL',val,id);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     async removeKey(id) {
//         try {
//             console.log(id);
            
//             const docRef = doc(this.db, "key", id);
//             await deleteDoc(docRef);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('REMOVE KEY',val2,'SUCCESS',val,id);
//                 });
                
//             });

//             console.log("Document Deleted");
//             return 0;
//         } catch (e) {
//             console.error("Error removing document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('REMOVE KEY',val2,'FAIL',val,id);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     //add key document
//     async createKey(name, ref, company, photo_url, state) {
//         try {

//             const q = query(collection(this.db, "key"), where("ref", "==", ref));
//             const querySnapshot = await getDocs(q);

//             if( querySnapshot.size > 0){
//                 return undefined;
//             }

//             const docRef = await addDoc(collection(this.db, "key"), {
//                 name: name,
//                 ref: parseInt(ref),
//                 photo_url: photo_url,
//                 company: company,
//                 datetime: this.datetime,
//                 state: 1,
//                 cpos: ref
//             });

//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('ADD KEY',val2,'SUCCESS',val,name);
//                 });
                
//             });

//             console.log("Document written with ID: ", docRef.id);
//             return docRef.id;
//         } catch (e) {
//             console.error("Error adding document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('ADD KEY',val2,'FAIL',val,e);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     async getAuditsSearchx(search, company) {

//         search = search.toUpperCase();

//         const arr = search.split(" ");

//         for (var i = 0; i < arr.length; i++) {
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//         }

//         search = arr.join(" ");

//         console.log(search);

//         let q = null;

//         if( company == 0 ){
//             q = query(collection(this.db, "audit"), where("action", ">=", search));
//         }else{
//             q = query(collection(this.db, "audit"), where("action", ">=", search), where("company", "==", company));
//         }

//         const querySnapshot = await getDocs(q);
//             let Data = []
//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 querySnapshot.forEach((doc) => {
//                     Data.push(doc.data())
//                 });
//                 return Data;
//             } else {
              
//                 return Data;
//             }
//     }

//     async getRecsSearchx(search, company) {

//         const arr = search.split(" ");

//         for (var i = 0; i < arr.length; i++) {
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//         }

//         search = arr.join(" ");

//         console.log(search);

//         let q = null;

//         if( company == 0 ){
//             q = query(collection(this.db, "records"), where("names", ">=", search));
//         }else{
//             q = query(collection(this.db, "records"), where("names", ">=", search), where("company", "==", company));
//         }

//         const querySnapshot = await getDocs(q);
//             let Data = []
//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 querySnapshot.forEach((doc) => {
//                     Data.push(doc.data())
//                 });
//                 return Data;
//             } else {
              
//                 return Data;
//             }
//     }

//     async getKeysSearchx(search, company) {

//         const arr = search.split(" ");

//         for (var i = 0; i < arr.length; i++) {
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//         }

//         search = arr.join(" ");

//         console.log(search);

//         let q = null;

//         if( company == 0 ){
//             q = query(collection(this.db, "key"), where("name", ">=", search));
//         }else{
//             q = query(collection(this.db, "key"), where("name", ">=", search), where("company", "==", company));
//         }
  
//         const querySnapshot = await getDocs(q);
//             let Data = []
//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 querySnapshot.forEach((doc) => {
//                     Data.push(doc.data())
//                 });
//                 return Data;
//             } else {
              
//                 return Data;
//             }
//     }

//     async getGroupsSearchx(search, company) {

//         const arr = search.split(" ");

//         for (var i = 0; i < arr.length; i++) {
//             arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//         }

//         search = arr.join(" ");

//         console.log(search);

//         let q = null;

//         if( company == 0 ){
//             q = query(collection(this.db, "group"), where("name", ">=", search));
//         }else{
//             q = query(collection(this.db, "group"), where("name", ">=", search), where("company", "==", company));
//         }
  
//         const querySnapshot = await getDocs(q);
//             let Data = []
//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 querySnapshot.forEach((doc) => {
//                     Data.push(doc.data())
//                 });
//                 return Data;
//             } else {
              
//                 return Data;
//             }
//     }

//     async getUsersSearchx(search,company) {

//         let q = null;

//         if( search == "ALL" || search == "All" || search == "all" ){
            

//             if( company == 0 ){
//                 q = query(collection(this.db, "users"));
//             }else{
//                 q = query(collection(this.db, "users"),where("company", "==", company));
//             }
//         }else{
//             const arr = search.split(" ");

//             for (var i = 0; i < arr.length; i++) {
//                 arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//             }

//             search = arr.join(" ");

//             console.log(search);


//             if( company == 0 ){
//                 q = query(collection(this.db, "users"), where("filterindex", ">=", search), where("state", "==", 0));
//             }else{
//                 q = query(collection(this.db, "users"), where("filterindex", ">=", search), where("company", "==", company), where("state", "==", 0));
//             }
  
//         }

//         const querySnapshot = await getDocs(q);
//             let Data = []
//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 querySnapshot.forEach((doc) => {
//                     Data.push(doc.data())
//                 });
//                 return Data;
//             } else {
              
//                 return Data;
//             }
//     }

//     //add Group Allocation document
//     async createUserGroupAlloc(id, group_id, state) {
     
//         try {

//             //check first if relationship exists
//             const q = query(collection(this.db, "group-alloc"), where("group_id", "==", group_id), where("user_id", "==", id));
//             const querySnapshot = await getDocs(q);

//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 //If Found, remove
//                 querySnapshot.forEach((_doc) => {
//                     const docRef = doc(this.db, "group-alloc", _doc.id);
//                     deleteDoc(docRef);
//                 })
                
//                 return undefined;
//             } else {
//                 //add new key allocation
//                 const docRef = await addDoc(collection(this.db, "group-alloc"), {
//                     group_id: group_id,
//                     user_id: id,
//                     datetime: this.datetime,
//                     state: state
//                 });

//                 console.log("Document written with ID: ", docRef.id);
//                 return docRef.id;
//             }




//         } catch (e) {
//             console.error("Error adding document: ", e);
//             return undefined;
//         }
//     }

//     //add Key Allocation document
//     async createKeyAlloc(group_id, id, state) {
//         try {
//             //Get ref from id
//             let ref = await this.getKeyByID(id);

//             //check first if relationship exists
//             const q = query(collection(this.db, "key-alloc"), where("group_id", "==", group_id), where("ref", "==", ref[0].ref));
//             const querySnapshot = await getDocs(q);

//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 return undefined;
//             } else {
//                 //add new key allocation
//                 const docRef = await addDoc(collection(this.db, "key-alloc"), {
//                     group_id: group_id,
//                     ref: ref[0].ref,
//                     datetime: this.datetime,
//                     state: state
//                 });

//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('ALLOCATE KEY',val2,'SUCCESS',val,group_id);
//                     });
                    
//                 });

//                 console.log("Document written with ID: ", docRef.id);
//                 return docRef.id;
//             }




//         } catch (e) {
//             console.error("Error adding document: ", e);
//             return undefined;
//         }
//     }

//     async createDept(name, state) {
//         try {

//             //check first if dept exists
//             const q = query(collection(this.db, "dept"), where("name", "==", name));
//             const querySnapshot = await getDocs(q);

//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 return undefined;
//             }
            
//             const docRef = await addDoc(collection(this.db, "dept"), {
//                 name: name,
//                 state: 1
//             });

//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('ADD DEPARTMENT',val2,'SUCCESS',val,name);
//                 });
                
//             });

//             console.log("Document written with ID: ", docRef.id);
//             return docRef.id;
//         } catch (e) {
//             console.error("Error adding document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('ADD DEPARTMENT',val2,'FAIL',val,name);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//       //add group document
//       async createGroup(name, company, photo_url, startdt, enddt, dow, state) {
//         try {

//             //check first if group exists
//             const q = query(collection(this.db, "group"), where("name", "==", name));
//             const querySnapshot = await getDocs(q);

//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 return undefined;
//             }
            
//             const docRef = await addDoc(collection(this.db, "group"), {
//                 name: name,
//                 photo_url: photo_url,
//                 company: company,
//                 datetime: this.datetime,
//                 startdt: startdt,
//                 enddt: enddt, 
//                 usedow: dow,
//                 state: state
//             });

//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('ADD GROUP',val2,'SUCCESS',val,name);
//                 });
                
//             });

//             console.log("Document written with ID: ", docRef.id);
//             return docRef.id;
//         } catch (e) {
//             console.error("Error adding document: ", e);
//             this._storage.get("username").then(val=>{
//                 this._storage.get("company").then(val2=>{
//                     //AUDIT TRAIL
//                     this.add_audit('ADD GROUP',val2,'FAIL',val,name);
//                 });
                
//             });
//             return undefined;
//         }
//     }

//     async checkIfAllocationExists(group_id,key_ref) {
//         let ref = await this.getKeyByID(key_ref);

//             //check first if relationship exists
//             const q = query(collection(this.db, "key-alloc"), where("group_id", "==", group_id), where("ref", "==", ref[0].ref));
//             const querySnapshot = await getDocs(q);

//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//     }

//     async checkIfGroupUserAllocationExists(group_id,user_id) {

//             //check first if relationship exists
//             const q = query(collection(this.db, "group-alloc"), where("group_id", "==", group_id), where("user_id", "==", user_id));
//             const querySnapshot = await getDocs(q);

//             console.log('Size:', querySnapshot.size)

//             if (querySnapshot.size > 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//     }

//     /**
//      * 
//      * GET METHODS
//      */

//     async get_user_groups(user_id) {
//         console.log('User ID',user_id);
//         const q = query(collection(this.db, "group-alloc"), where("user_id", "==", user_id));
//         const querySnapshot = await getDocs(q);
//         let Data = [];

//         querySnapshot.forEach((_doc) => {
//             console.log(_doc.data().group_id);
            
//             const docRef = doc(this.db, "group", _doc.data().group_id);
//             getDoc(docRef).then((snapShot)=>{

//                 Data.push({'id':snapShot.id,'name':snapShot.data().name,'company':snapShot.data().company});

//             });
        
//         });
//         return Data;
//     }

//     async getUser(id) {
//         let Data = [];
//         const docRef = doc(this.db, "users", id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             Data.push({'id':docSnap.id,'name':docSnap.data().name,'surname':docSnap.data().surname,'state':docSnap.data().state,'tag':docSnap.data().tag,'user_id':docSnap.data().user_id, 'photo_url':docSnap.data().photo_url,'datetime':docSnap.data().datetime, 'contact':docSnap.data().contact, 'company':docSnap.data().company, 'address':docSnap.data().address, 'nok':docSnap.data().nok, 'nok_contact':docSnap.data().nok_contact, 'nok2':docSnap.data().nok2, 'nok_contact2':docSnap.data().nok_contact2, 'blood':docSnap.data().blood, 'doctor':docSnap.data().doctor, 'donor':docSnap.data().donor, 'will':docSnap.data().will, 'willinfo':docSnap.data().willinfo, 'medical':docSnap.data().medical, 'fingerid':docSnap.data().fingerid});
//         }

//         return Data;

//     }

//     async getScannedUserUID(id) {
//         let Data = [];


//         let querySnapshot = null;

//         const q = query(collection(this.db, "users"), where("user_id", "==", id));
//         querySnapshot = await getDocs(q);
        
//         querySnapshot.forEach((doc) => {

//             Data.push({'id':doc.id,'name':doc.data().name,'surname':doc.data().surname,'state':doc.data().state,'tag':doc.data().tag,'user_id':doc.data().user_id, 'photo_url':doc.data().photo_url,'datetime':doc.data().datetime, 'contact':doc.data().contact, 'dept':doc.data().dept, 'company':doc.data().company,'address':doc.data().address, 'nok':doc.data().nok, 'nok_contact':doc.data().nok_contact, 'nok2':doc.data().nok2, 'nok_contact2':doc.data().nok_contact2, 'blood':doc.data().blood, 'doctor':doc.data().doctor, 'donor':doc.data().donor, 'will':doc.data().will, 'willinfo':doc.data().willinfo, 'medical':doc.data().medical, 'fingerid':doc.data().fingerid});

//         });

      
        
//         return Data;
//     }

//     async getScannedUser(id) {
//         let Data = [];


//         let querySnapshot = null;

//         const q = query(collection(this.db, "users"), where("fingerid", "==", id));
//         querySnapshot = await getDocs(q);
        
//         querySnapshot.forEach((doc) => {

//             Data.push({'id':doc.id,'name':doc.data().name,'surname':doc.data().surname,'state':doc.data().state,'tag':doc.data().tag,'user_id':doc.data().user_id, 'photo_url':doc.data().photo_url,'datetime':doc.data().datetime, 'contact':doc.data().contact, 'dept':doc.data().dept, 'company':doc.data().company,'address':doc.data().address, 'nok':doc.data().nok, 'nok_contact':doc.data().nok_contact, 'nok2':doc.data().nok2, 'nok_contact2':doc.data().nok_contact2, 'blood':doc.data().blood, 'doctor':doc.data().doctor, 'donor':doc.data().donor, 'will':doc.data().will, 'willinfo':doc.data().willinfo, 'medical':doc.data().medical, 'fingerid':doc.data().fingerid});

//         });

      
        
//         return Data;
//     }

//     async getUsers(group_id, company) {
//         let Data = [];

//         if(group_id !== null && group_id !== undefined){

//             let querySnapshot = null;

//             if(company == 0){
//                 const q = query(collection(this.db, "users"), where("state", "==", 0), orderBy("name", "asc"));
//                 querySnapshot = await getDocs(q);
//             }else{
//                 const q = query(collection(this.db, "users"), where("company", "==", company), where("state", "==", 0), orderBy("name", "asc"));
//                 querySnapshot = await getDocs(q);
//             }
            
            
//             querySnapshot.forEach((doc) => {
//                 //console.log("Group:",group_id);
//                 //console.log("User:",doc.data().user_id);
//                 //Check if already allocated
//                 this.checkIfGroupUserAllocationExists(group_id, doc.data().user_id).then((res) => {
//                     Data.push({'id':doc.id,'name':doc.data().name,'surname':doc.data().surname,'state':doc.data().state,'tag':doc.data().tag,'user_id':doc.data().user_id, 'photo_url':doc.data().photo_url,'allocexists':res,'datetime':doc.data().datetime, 'contact':doc.data().contact, 'dept':doc.data().dept, 'company':doc.data().company,'address':doc.data().address, 'nok':doc.data().nok, 'nok_contact':doc.data().nok_contact, 'nok2':doc.data().nok2, 'nok_contact2':doc.data().nok_contact2, 'blood':doc.data().blood, 'doctor':doc.data().doctor, 'donor':doc.data().donor, 'will':doc.data().will, 'willinfo':doc.data().willinfo, 'medical':doc.data().medical, 'fingerid':doc.data().fingerid});
//                 });

//                 //Data.push(doc.data())
//             });

//         }else{
//             let querySnapshot = null;

//             if(company == 0){
//                 const q = query(collection(this.db, "users"), where("state", "==", 0), orderBy("name", "asc"));
//                 querySnapshot = await getDocs(q);
//             }else{
//                 const q = query(collection(this.db, "users"), where("company", "==", company), where("state", "==", 0), orderBy("name", "asc"));
//                 querySnapshot = await getDocs(q);
//             }
            
//             querySnapshot.forEach((doc) => {
//                 Data.push({'id':doc.id,'name':doc.data().name,'surname':doc.data().surname,'state':doc.data().state,'tag':doc.data().tag,'user_id':doc.data().user_id, 'photo_url':doc.data().photo_url,'datetime':doc.data().datetime, 'contact':doc.data().contact, 'dept':doc.data().dept, 'company':doc.data().company,'address':doc.data().address, 'nok':doc.data().nok, 'nok_contact':doc.data().nok_contact, 'nok2':doc.data().nok2, 'nok_contact2':doc.data().nok_contact2, 'blood':doc.data().blood, 'doctor':doc.data().doctor, 'donor':doc.data().donor, 'will':doc.data().will, 'willinfo':doc.data().willinfo, 'medical':doc.data().medical, 'fingerid':doc.data().fingerid})
//             });
//         }
        
//         return Data;
//     }

//     async getCompanys() {
//         const querySnapshot = await getDocs(collection(this.db, "company"));
//         let Data = [];
//         querySnapshot.forEach((doc) => {
//             Data.push(doc.data())
//         });
//         return Data;
//     }

//     async getDevices() {
//         const querySnapshot = await getDocs(collection(this.db, "device"));
//         let Data = [];
//         querySnapshot.forEach((doc) => {
//             Data.push(doc.data())
//         });
//         return Data;
//     }

//     async getKeys(company) {

//         let querySnapshot = null;
//         if( company == "0" ){
//             const q = query(collection(this.db, "key"), orderBy("ref", "asc"));
//             querySnapshot = await getDocs(q);
//         }else{
//             const q = query(collection(this.db, "key"), where("company", "==", company), orderBy("ref", "asc"));
//             querySnapshot = await getDocs(q);
//         }
        
//         let Data = [];

        
//         querySnapshot.forEach((doc) => {
//             Data.push({'id':doc.id,'name':doc.data().name,'company':doc.data().company,'state':doc.data().state,'datetime':doc.data().datetime,'photo_url':doc.data().photo_url,'ref':doc.data().ref,'cpos':doc.data().cpos});
//         });
//         return Data;
//     }

//     async getTagTrans() {

//         let querySnapshot = null;

//         const q = query(collection(this.db, "tagrecords"), orderBy("datetime", "desc"));
//             querySnapshot = await getDocs(q);

//         let Data = [];
//         //console.log(querySnapshot.size)
//         querySnapshot.forEach((doc) => {
//             Data.push({'id':doc.id,'tag':doc.data().tag,'device':doc.data().device,'datetime':doc.data().datetime});
//         });
//         return Data;
//     }

//     async getTrans(company) {

//         let querySnapshot = null;

//         if(company == 0){

//             const q = query(collection(this.db, "records"), orderBy("datetime", "desc"));
//             querySnapshot = await getDocs(q);
//         }else{
//             const q = query(collection(this.db, "records"), where("company", "==", company), orderBy("timeout", "desc"));
//             querySnapshot = await getDocs(q);
//         }

//         let Data = [];
//         //console.log(querySnapshot.size)
//         querySnapshot.forEach((doc) => {
//             Data.push({'id':doc.id,'name':doc.data().name,'surname':doc.data().surname,'policy':doc.data().policy,'datetime':doc.data().datetime});
//         });
//         return Data;
//     }

//     async getAudits(company) {

//         console.log(company)

//         let querySnapshot = null;

//         if(company == 0){
     
//             const q = query(collection(this.db, "audit"), orderBy("datetime", "desc"));
//             querySnapshot = await getDocs(q);
//         }else{
//             const q = query(collection(this.db, "audit"), where("company", "==", company), orderBy("datetime", "desc"));
//             querySnapshot = await getDocs(q);
//         }

//         let Data = [];
//         //console.log(querySnapshot.size)
//         querySnapshot.forEach((doc) => {
//             Data.push({'id':doc.id,'user':doc.data().user,'company':doc.data().company,'action':doc.data().action,'datetime':doc.data().datetime,'result':doc.data().result,'value':doc.data().value});
//         });
//         return Data;
//     }

//     async getDept(id) {
//         let Data = [];
//         const docRef = doc(this.db, "dept", id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             Data.push({'id':docSnap.id,'name':docSnap.data().name,'state':docSnap.data().state});
//         }

//         return Data;
//     }

//     async getDepts() {

//         let querySnapshot = null;
//         const q = query(collection(this.db, "dept"), orderBy("name", "asc"));
//         querySnapshot = await getDocs(q);
//         let Data = [];

//         querySnapshot.forEach((doc) => {
    
//              Data.push({'id':doc.id,'name':doc.data().name,'state':doc.data().state});
 
//         });
  

//         return Data;
//     }

//     async getGroups(company) {
        

//         console.log("COMP:",company);

//         let querySnapshot = null;
//         if( company == "0" ){

//             const q = query(collection(this.db, "group"), orderBy("name", "asc"));
//             querySnapshot = await getDocs(q);
//         }else{
//             const q = query(collection(this.db, "group"), where("company", "==", company), orderBy("name", "asc"));
//             querySnapshot = await getDocs(q);
//         }
        
//         let Data = [];

//         querySnapshot.forEach((doc) => {
//             if (doc.data().ref === doc.data().ref) {
//                 let startdt = doc.data().startdt.substring(0,16).replace('T',' ');
//                 let enddt = doc.data().enddt.substring(0,16).replace('T',' ');

//                 //get number of users in ths group
//                 this.getGroupUsers(doc.id).then((res) => {
//                     Data.push({'id':doc.id,'name':doc.data().name,'company':doc.data().company,'state':doc.data().state,'startdt':startdt,'enddt':enddt, 'users':res});
//                 })
                

//             }
//         });

//         return Data;
//     }

//     async getGroupUsers(group_id) {
//         const q = query(collection(this.db, "group-alloc"), where("group_id", "==", group_id));
//         const querySnapshot = await getDocs(q);
//         let Data = [];

//         return querySnapshot.size;
//     }

//     async getGroupsEn(key_ref, company ) {

//         let querySnapshot = null;

//         if( company == "0" ){
//             const q = query(collection(this.db, "group"), where("state", "==", 1));
//             querySnapshot = await getDocs(q);
//         }else{
//             const q = query(collection(this.db, "group"), where("company", "==", company), where("state", "==", 1));
//             querySnapshot = await getDocs(q);
//         }

//         let Data = [];

//         querySnapshot.forEach((doc) => {
//             if (doc.data().ref === doc.data().ref) {
//                 let startdt = doc.data().startdt.substring(0,16).replace('T',' ');
//                 let enddt = doc.data().enddt.substring(0,16).replace('T',' ');
//                 var allocexists = false;
//                 //Check if already allocated
//                 this.checkIfAllocationExists(doc.id, key_ref).then((res) => {
//                     Data.push({'id':doc.id,'name':doc.data().name,'company':doc.data().company,'state':doc.data().state,'startdt':startdt,'enddt':enddt, 'photo_url':doc.data().photo_url,'allocexists':res});
//                 });

//             }
//         });

//         return Data;
//     }

//     async getKeyByID(id) {
      
//         const docRef = doc(this.db, "key", id);
//         const docSnap = await getDoc(docRef);
//         let Data = [];

//         if (docSnap.exists()) {
//             Data.push(docSnap.data());
 
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }

//         return Data;
//     }

//     async getGroup(id) {
      
//         const docRef = doc(this.db, "group", id);
//         const docSnap = await getDoc(docRef);
//         let Data = [];

//         if (docSnap.exists()) {
//             let startdt = docSnap.data().startdt.substring(0,16).replace('T',' ');
//             let enddt = docSnap.data().enddt.substring(0,16).replace('T',' ');
//             Data.push({'id':docSnap.id,'name':docSnap.data().name,'company':docSnap.data().company,'state':docSnap.data().state,'startdt':startdt,'enddt':enddt, 'photo_url':docSnap.data().photo_url});
 
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }

//         return Data;
//     }

//     async get_group_keys(group_id) {

//         const q1 = query(collection(this.db, "key-alloc"), where("group_id", "==", group_id));
//         const querySnapshot1 = await getDocs(q1);

//         const q2 = query(collection(this.db, "key"));
//         const querySnapshot2 = await getDocs(q2);

//         let Data = [];
//         querySnapshot1.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             querySnapshot2.forEach((doc1) => {
//                 // doc.data() is never undefined for query doc snapshots
//                 if (doc1.data().ref === doc.data().ref) {
//                     Data.push({'id':doc.id,'name':doc1.data().name,'company':doc1.data().company,'state':doc1.data().state,'datetime':doc1.data().datetime,'photo_url':doc1.data().photo_url,'ref':doc1.data().ref});
//                 }
//             });
//         });

//         return Data;
//     }

//     async updateProfImgB64(id, data) {
//         try {
//             console.log(id);
            
//             const docRef = doc(this.db, "users", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'photo_url_b64':data})
//                 console.log("Updated Profile Picture Base64")
//                 return 0 
     
//             } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//             }

//             return 0;
//         } catch (e) {
//             console.error("Error updating document: ", e);
//             return undefined;
//         }
//     }

//     async getLogin(user,pass){
//         console.log(user)
//         console.log(pass)

//         let shaObj = new jsSHA("SHA-512", "TEXT");
//         shaObj.update(pass);
//         let hash = shaObj.getHash("HEX");
//         hash = hash.toUpperCase();
      
//         const q = query(collection(this.db, "admin"), where("username", "==", user), where("password", "==", hash));
//         const querySnapshot = await getDocs(q);

        

//         if(querySnapshot.size > 0){
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.data());
//                 this.global.company = doc.data().level;
//                 this.global.username = doc.data().username.toUpperCase();
//                 this._storage.set('username',this.global.username);
//                 this._storage.set('company',this.global.company);
//             });
//             this._storage.get("username").then(val=>{
//                 //AUDIT TRAIL
//                 this.add_audit('LOGIN',this.global.company,'SUCCESS',user,user);
//             });
//             return true;
//         }else{
//             this._storage.get("username").then(val=>{
//                 //AUDIT TRAIL
//                 this.add_audit('LOGIN',this.global.company,'FAIL',user,user);
//             });
//             return false;
//         }
 
//     }

//     async updateProfImg(id, url) {
//         try {
//             console.log(id);
            
//             const docRef = doc(this.db, "users", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 await updateDoc(docRef,{'photo_url':url})
//                 this._storage.get("username").then(val=>{
//                     this._storage.get("company").then(val2=>{
//                         //AUDIT TRAIL
//                         this.add_audit('UPDATE USER IMAGE',val2,'SUCCESS',val,docSnap.data().name + " " + docSnap.data().surname);
//                     });
                    
//                 });
//                 console.log("Updated Profile Picture")
//                 return 0 
     
//             } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//             }

//             return 0;
//         } catch (e) {
//             console.error("Error updating document: ", e);
//             return undefined;
//         }
//     }

//     /**
//      * UPLOAD FILES
//      * 
//      * @param path 'avater', 'key', 'company'
//      * @param file dataURI
//      */
//     async upload_file(path, file, filename) {
//         const storageRef = ref(this.storage, `${path}/${filename}` );

//         // 'file' comes from the Blob or File API
//         uploadString(storageRef, file, 'data_url').then((snapshot) => {
//             console.log('Uploaded a blob or file!', snapshot);
//         });
//     }

// }