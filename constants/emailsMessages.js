import contacts from "../sources/contact.json";

const emailContact = contacts.find(
  (contact) => contact.socialNetwork === "Email"
);

export const DEFAULTEMAIL = () => {
  const subject = "Información sobre productos";
  const body = `Hola, vengo del sitio web de D'leite! quiero mas información sobre los productos. Gracias!`;
  const mailTo = `mailto:${emailContact.contact[0]}?subject=${subject}&body=${body}`;
  return mailTo;
};
