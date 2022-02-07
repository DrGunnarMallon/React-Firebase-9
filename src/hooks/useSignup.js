import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = (props) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();

  const signupWithEmail = async (username, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const credentials = await createUserWithEmailAndPassword(
        projectAuth,
        username,
        password
      ).catch((error) => {
        if (!isCancelled) {
          setIsPending(false);
          throw new Error("Email already in use");
        }
      });

      const user = { credentials };
      await updateProfile(user, { displayName });

      dispatch({ type: "LOGIN", payload: user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signupWithEmail, error, isPending };
};
