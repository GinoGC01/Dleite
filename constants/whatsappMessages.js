import contacts from "../sources/contact.json";

const phoneContact = contacts.find(
  (contact) => contact.socialNetwork === "WhatsApp"
);

const phoneContact1 = phoneContact.contact[0];

export const TEXT = (tipo, peso) => {
  if (tipo && peso) {
    const TEXT = `Hola,%20👋%20vengo%20de%20la%20página%20www.dleite.com,%20me%20interesa%20el%20*Yogurt%20${tipo}%20de%20${
      peso === 1000 ? 1 : peso
    }${
      peso === 1000 ? "kg" : "grs"
    }!*😋%20¿Puede%20brindarme%20más%20información%20acerca%20del%20precio?%20🤗
                `;

    return TEXT;
  } else {
    console.error("TEXT carece de parámetros (Tipo o Peso)");
  }
};

export const PHONE = phoneContact1;