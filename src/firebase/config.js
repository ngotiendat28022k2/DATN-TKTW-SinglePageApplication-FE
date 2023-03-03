import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCace9x3Po4GToeT8RSM3z-mQTYjoHxXFo",
  authDomain: "datn-sp23.firebaseapp.com",
  projectId: "datn-sp23",
  storageBucket: "datn-sp23.appspot.com",
  messagingSenderId: "808384936079",
  appId: "1:808384936079:web:c95c0df01fcbeec25798fa",
  measurementId: "G-PRX2SZXZ13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      const User = {
        name: user.displayName,
        email: user.email,
        token: user.stsTokenManager.accessToken,
      };
      const refreshToken = user.stsTokenManager.refreshToken;
      document.cookie = `refreshToken=${refreshToken}`;
      localStorage.setItem("User", JSON.stringify(User));
      const navigate = useNavigate();
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
