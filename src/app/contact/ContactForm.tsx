"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { messageSchema, mappedContries } from "./validators/messajeSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDefaultMessage } from "@/store/defaultMessage";
import { toast } from "sonner";
import { KEDEVS_PHONE_NUMBER_WSP } from "@/utils/whatsappUtils";
import { BtnContact } from "../components/common/btn-contact";

function ContactForm() {
  const { message, resetMessage } = useDefaultMessage();

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: message,
  });

  const optionsCountries = Object.entries(mappedContries).map(
    ([key, value]) => (
      <SelectItem value={key} key={key}>
        {value}
      </SelectItem>
    ),
  );

  const onSubmit: SubmitHandler<z.infer<typeof messageSchema>> = async (
    data,
  ) => {
    const dataMail = { ...data, subject: "Quiero información" };
    const sendMail = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataMail),
    });
    const messageToast = sendMail.ok
      ? "Correo enviado satisfactoriamente, por favor espera la respuesta del equipo de kedevs"
      : "Hubo un error al enviar el correo, por favor intente más tarde.";
    sendMail.ok ? toast.success(messageToast) : toast.error(messageToast);
    form.reset();
    resetMessage();
  };

  const handleWhatsappClick = () => {
    const message = encodeURIComponent(
      "Hola Equipo de Kedevs, quisiera información acerca de sus servicios.",
    );
    const whatsappLink = `https://wa.me/${KEDEVS_PHONE_NUMBER_WSP}?text=${message}`;
    window.open(whatsappLink, "_blank");
    resetMessage();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 grid grid-cols-1"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className="mt-0">
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input placeholder="manuel rojas muri.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="mt-0">
                  <FormLabel>Numero de telefono</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="96012322" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="ejemplo@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>País</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione país" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {optionsCountries && optionsCountries}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ubicación</FormLabel>
              <FormControl>
                <Input placeholder="arequipa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hola equipo de Kedevs, quiero ..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <BtnContact title="Enviar correo" />
        <div className="flex justify-end">
          <Button
            onClick={() => handleWhatsappClick()}
            className="bg-green-600 hover:bg-green-700"
            type="button"
          >
            Enviar Whatsapp
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
