import app from 'firebase/app';
import 'firebase/firestore';

const fireBaseConfig = {
    apiKey: "AIzaSyDINh5EN2riEPo0cqvK6-qCWnpGCpN4XRM",
    authDomain: "jrportfolio-1f765.firebaseapp.com",
    databaseURL: "https://jrportfolio-1f765.firebaseio.com",
    projectId: "jrportfolio-1f765",
    storageBucket: "jrportfolio-1f765.appspot.com",
    messagingSenderId: "104742555231",
    appId: "1:104742555231:web:cd0fe7fdb3da4f4f8255ea",
    measurementId: "G-M7LFE86L77"
}

class Firebase {
    constructor() {
        app.initializeApp(fireBaseConfig)
        this.firestore = app.firestore();
    }
}

export default Firebase;