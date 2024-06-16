import { z } from "zod";

export const  Countries = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "CostaRica",
  "Cuba",
  "Ecuador",
  "ElSalvador",
  "Espana",
  "Guatemala",
  "Honduras",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "PuertoRico",
  "RepublicaDominicana",
  "Uruguay",
  "Venezuela",
  "Otro",
] as const;

export type ContriesType = (typeof Countries)[number]

export const mappedContries: {[key in ContriesType]: string} = {
  Argentina: "Argentina",
  Bolivia:   "Bolivia",
  Chile:   "Chile",
  Colombia:"Colombia",
  CostaRica: "Costa Rica",
  Cuba:   "Cuba",
  Ecuador:   "Ecuador",
  ElSalvador:   "El Salvador",
  Espana:   "España",
  Guatemala:   "Guatemala",
  Honduras:   "Honduras",
  Mexico:   "México",
  Nicaragua:   "Nicaragua",
  Panama:   "Panamá",
  Paraguay:   "Paraguay",
  Peru:   "Perú",
  PuertoRico:   "Puerto Rico",
  RepublicaDominicana:   "República Dominicana",
  Uruguay:   "Uruguay",
  Venezuela:   "Venezuela",
  Otro:   "Otro",
}

export const messageSchema = z.object({
  fullname: z.string().min(2, {
    message: "Ingrese nombres válidos",
  }),
  phoneNumber: z.string().refine((field) => !isNaN(parseInt(field)), {
    message: "Ingrese un numero de telefono válido",
  }),
  email: z.string().email({
    message: "Ingrese un correo electronico válido",
  }),
  country: z.enum(Countries, {
    errorMap: () => ({ message: "Seleccione un país válido" }),
  }),
  location: z.string().min(2, {
    message: "Ingrese su ubicación",
  }),
  message: z.string().min(2, {
    message: "Agregue mensaje",
  }),
});
