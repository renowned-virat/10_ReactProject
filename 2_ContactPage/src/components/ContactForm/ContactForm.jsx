import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { useState } from "react";

function ContactForm() {
    const [name,setName]=useState("virat");
    const [email,setEmail]=useState("renownedvirat@gmail.com")
    const [text,setText]=useState("he is the real hero.")
  
    
const onSubmit=(event)=>{
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value)
    
    event.preventDefault(); 
}
const onViaCallSubmit=()=> {
    console.log("clicked on via call");
}

  return (
    <section className={styles.container }>
        <div className={styles.contactForm}>
            <div className={styles.top_btn}>
            <Button 
            
             text="VIA SUPPORT CHAT" icon={<MdMessage/>}></Button>
            <Button 
            onClick={onViaCallSubmit}
             text="VIA CALL" icon={<IoCall/>}></Button>
            </div>
            <Button isOutline={true}text="VIA EMAIL FORM" icon={<IoMail/>}></Button>
            <form onSubmit={onSubmit}>
                <div className={styles.form_controller}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className={styles.form_controller}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email "/>
                </div>
                <div className={styles.form_controller}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows={8}/>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"end",
                    }}>
                <Button text="SUBMIT BUTTON" ></Button>
                </div>
                <div>
                    {name +" "+ email +" "+ text}
                </div>
            </form>
        </div>
        <div className={styles.contactImage}>
            <img src="contact.svg" alt="contact image"/>
        </div>
    </section>
  )
}

export default ContactForm