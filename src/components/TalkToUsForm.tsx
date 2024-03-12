import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome muito curto" }).max(100, { message: "Nome muito longo" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.enum(["Reclamação", "Sugestão", "Dúvida"]).default("Dúvida"),
  message: z.string().min(10, {
    message: "Mensagem muito curta"
  }),
})

type FormValues = z.infer<typeof formSchema>


export function TalkToUsForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "Dúvida",
      message: ""
    }
  })

  function onSubmit(data: FormValues) {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 md:grid md:grid-cols-2 space-y-3 md:space-y-0 gap-6 container py-6 px-2 md:py-16 md:px-9">
        <div className="flex flex-1 flex-col gap-4">
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome" {...field} className="bg-[#F4F4F4] border-none text-[#333333] placeholder:text-[#333333]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} className="bg-[#F4F4F4] text-[#333333] placeholder:text-[#333333] border-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='subject'
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="bg-[#F4F4F4] text-[#333333] placeholder:text-[#333333] border-none">
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Reclamação">Reclamação</SelectItem>
                        <SelectItem value="Sugestão">Sugestão</SelectItem>
                        <SelectItem value="Dúvida">Dúvida</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className="h-full">
                <FormControl>
                  <Textarea
                    placeholder="Mensagem"
                    className="resize-none bg-[#F4F4F4] h-full border-none text-[#333333] placeholder:text-[#333333]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-2 flex justify-end items-center">
          <Button type="submit" className="px-4 py-2 rounded-lg mt-4 md:mt-0 bg-[#E42313] text-white">Enviar</Button>
        </div>
      </form>
    </Form>
  )
}