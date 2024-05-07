import { DEFAULTEXT, PHONE } from "../constants/whatsappMessages.js";
import { DEFAULTEMAIL } from "../constants/emailsMessages.js";

export function handlerSocialMedia(contact) {
  if (contact.socialNetwork === "Email") {
    return DEFAULTEMAIL();
  } else if (contact.socialNetwork === "WhatsApp") {
    const link = `https://api.whatsapp.com/send?phone=${PHONE}&text=${DEFAULTEXT()}`;
    return link;
  } else {
    return contact.url;
  }
}
