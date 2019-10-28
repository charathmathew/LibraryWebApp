import firebase from "firebase";
import "firebase/database";


// Your web app's Firebase configuration
var firebaseConfig = {
    //put firebase sdk here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppDB = firebase.database();
export { AppDB }; // Make this name available to other modules