import { set, ref, onValue } from "firebase/database";
import firebase from "./firebase";
import { db } from "./firebase";
import { uid } from "uid";

export const writeCardData = (title, imgURL, content, email) => {
  const uuid = uid();
  set(ref(db, `/${uuid}`), {
    title: title,
    imgURL: imgURL,
    content: content,
    email: email,
  });
};

export const getCardData = (setCardInfo, cardInfo) => {
  onValue(ref(db), (snapshot) => {
    const data = snapshot.val();
    if (data !== null) {
      Object.values(data).map((card) => {
        setCardInfo((oldArray) => [...oldArray, card]);
      });
    }
  });
  console.log(cardInfo);
};
