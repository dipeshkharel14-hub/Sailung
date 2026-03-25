import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";

const auth = getAuth();

// 1. Set Persistence so you don't have to login every time the page refreshes
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session will persist.");
  });

// 2. The Login Function
async function loginDipesh() {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, "dipeshkharel14@gmail.com", "Dipesh9860");
    console.log("Welcome Captain Dipesh!");
    // The Auth Observer (below) will handle the redirect automatically
  } catch (error) {
    console.error("Login Error:", error.code, error.message);
    document.getElementById('auth-error').innerText = "Login failed: " + error.message;
    document.getElementById('auth-error').classList.add('show');
  }
}

// 3. The Auth Observer (Sticks the user to the app)
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (user.email === "dipeshkharel14@gmail.com") {
      // Redirect to your Admin Dashboard
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('on'));
      document.getElementById('s-app').classList.add('on'); 
    }
  } else {
    // Show login screen if not logged in
    document.getElementById('s-auth').classList.add('on');
  }
});
