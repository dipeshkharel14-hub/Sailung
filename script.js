import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

// This runs automatically whenever the app loads or the user state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("Logged in as:", user.email);
    
    // Redirect to dashboard if they are on the login page
    if (window.location.pathname.includes("login.html")) {
        window.location.href = "dashboard.html";
    }
  } else {
    // No user is signed in, redirect to login if they try to access protected pages
    if (window.location.pathname.includes("dashboard.html")) {
        window.location.href = "login.html";
    }
  }
});

