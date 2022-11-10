import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),

  actions: {
    // register a new user
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      // add user details to firestore database
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      });

      // updating the display name and photo url
      await userCred.user.updateProfile({
        displayName: values.name,
      });

      this.userLoggedIn = true;
    },
    // sign in user
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password);

      this.userLoggedIn = true;
    },
    // sign out user
    async signOut() {
      await auth.signOut();

      this.userLoggedIn = false;
    },
  },
});
