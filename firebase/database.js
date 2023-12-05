import { child, get, getDatabase, ref } from "firebase/database";

export function getPurchasesByUserId(uid) {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `purchases/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    }

    return "No data available";
  });
}
