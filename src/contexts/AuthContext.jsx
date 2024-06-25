import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Assuming you have imported auth
import { auth } from '../util/firebase';
const AuthContext = createContext({
  uid: null,
});

export const AuthProvider = ({ children }) => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });

    return unsubscribe; // Cleanup function to prevent memory leaks
  }, []);

  return (
    <AuthContext.Provider value={{ uid }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext
