import { set, ref, onValue, remove, update } from "firebase/database";
import { db } from "./firebase";
import { uid } from "uid";
import { toastSuccessNotify } from "./toastNotify";

export const writeCardData = (title, imgURL, content, email, date) => {
  const uuid = uid();
  set(ref(db, `/${uuid}`), {
    title: title,
    imgURL: imgURL,
    content: content,
    email: email,
    id: uuid,
    date: date,
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

export const deleteData = (filteredInfo, navigate) => {
  remove(ref(db, `${filteredInfo.id}`));
  navigate("/");
  toastSuccessNotify("Card deleted successfully");
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
