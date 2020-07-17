import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC2StGMUW-_nBUijzP6V20X0Ut9qDPqK1M",
        authDomain: "clone-e0cbf.firebaseapp.com",
        databaseURL: "https://clone-e0cbf.firebaseio.com",
        projectId: "clone-e0cbf",
        storageBucket: "clone-e0cbf.appspot.com",
        messagingSenderId: "1002962107460",
        appId: "1:1002962107460:web:2c4fe5add11848b2cb1011",
        measurementId: "G-HJ71PXKXF2",
})

const auth = firebase.auth();

export { auth };