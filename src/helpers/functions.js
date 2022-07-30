import { set, ref, onValue, remove, update } from "firebase/database";
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
    id: uuid,
  });
};

export const getCardData = (setCardInfo, cardInfo) => {
  onValue(ref(db), (snapshot) => {
    setCardInfo([]);
    const data = snapshot.val();
    if (data !== null) {
      Object.values(data).map((card) => {
        setCardInfo((oldArray) => [card, ...oldArray]);
      });
    }
  });
};

export const deleteData = (filteredInfo) => {
  remove(ref(db, `${filteredInfo.id}`));
};

export const UpdateCardData = (
  editTitle,
  editImageURL,
  editContent,
  email,
  id
) => {
  update(ref(db, `/${id}`), {
    title: editTitle,
    imgURL: editImageURL,
    content: editContent,
    email: email,
    id: id,
  });
};
