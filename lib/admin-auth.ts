import { auth } from './firebase-client';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

// Admin authentication using Firebase Auth
export async function signInAdmin(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error('Admin sign-in error:', error);
    return { success: false, error: 'Invalid credentials' };
  }
}

export async function signOutAdmin() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Admin sign-out error:', error);
    return { success: false, error: 'Failed to sign out' };
  }
}

export function getCurrentAdminUser() {
  return auth.currentUser;
}

export function onAdminAuthStateChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
