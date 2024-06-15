import { z } from "zod";

export const messageSchema = z.object({
  fullname: z.string().min(2, {
    message: "Ingrese nombres válidos",
  }),
  phoneNumber: z.number().positive({
    message: "Ingrese un numero de telefono válido",
  }),
  email: z.string().email({
    message: "Ingrese un correo electronico válido",
  }),
  location: z.string().min(2, {
    message: "Ingrese su ubicación",
  }),
  message: z.string().min(2, {
    message: "Agregue mensaje",
  }),
});
