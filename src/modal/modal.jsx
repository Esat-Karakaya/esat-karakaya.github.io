import { useEffect } from "react";
import { modalAtom } from "../jotai/atoms";
import { useAtom } from "jotai"
const ContactForm=()=>{
    const [visible, changeVisibility]=useAtom(modalAtom);
    const onClose=()=>{
        changeVisibility(false)
    }
    useEffect(()=>{
        const modal=document.querySelector("#contactForm")
        if (visible) {
            modal.showModal()
            return;
        }
        modal.close()
    },[visible])
    return(
        <dialog id="contactForm" onCancel={onClose}>
            Hellooo World
        </dialog>
    )
}
export default ContactForm;