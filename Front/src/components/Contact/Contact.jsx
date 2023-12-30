import styles from "./Contact.module.css";
import TextInput from "../TextInput/TextInput";
import Message from "../TextField/TextField";
import TextField from "../TextField/TextField";
import SendBtn from "../Sendbtn/Sendbtn";
export default function Contact() {
  return (
    <form className={styles.center}>
      <fieldset className={styles.all}>
        <div className={styles.title}>
          <h1>Contact Us</h1>
        </div>
        <TextInput title="NAME" placeholder="Jiara Martins" />
        <TextInput title="EMAIL" placeholder="hello@reallygreatsite.com" />
        <TextField
          title="MESSAGE"
          placeholder="Write your message here"
        ></TextField>
        <SendBtn textmessage="Send the message"></SendBtn>
      </fieldset>
    </form>
  );
}
