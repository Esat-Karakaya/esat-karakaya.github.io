import { useEffect } from "react";
import { modalAtom } from "../jotai/atoms";
import { useAtom } from "jotai";
const ContactForm=()=>{
    const [visible]=useAtom(modalAtom);
    useEffect(()=>{
        const contactForm=document.querySelector("#contactForm")
        if (visible) {
            contactForm.showModal()
        } else {
            contactForm.close()
        }
    },[visible])
    return(
        <dialog id="contactForm">
            Hellooo World
        </dialog>
    )
}
export default ContactForm;