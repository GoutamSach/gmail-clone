import React, { useEffect, useState } from "react";
import EmailRow from "./EmailRow";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

function MailList() {
  const [email, setEmail] = useState([]);
  useEffect(() => {
    const mailFromDatabase = collection(db, "mails");
    const mail = query(mailFromDatabase, orderBy("timestamp", "desc"));
    onSnapshot(mail, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        setEmail(
          snapshot.docs.map((doc) => ({
            id: doc.id,

            data: doc.data(),
          }))
        );
      });
    });
  }, []);
  return (
    <div>
      {" "}
      {email.map(
        ({ id, data: { message, subject, timestamp, to, key, userName } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            userName={userName}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        )
      )}
    </div>
  );
}

export default MailList;
