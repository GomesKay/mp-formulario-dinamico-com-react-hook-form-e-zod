import { z } from "zod"

export const userRegisterSchema = z
  .object({
    name: z.string().min(1, "O campo nome precisa ser preenchido"),
    email: z
      .string()
      .min(1, "O campo email precisa ser preenchido")
      .email("Email inválido"),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    password_confirmation: z
      .string()
      .min(8, "A senha de confirmação deve ter no mínimo 8 caracteres"),
    phone: z.string().min(1, "O campo telefone precisa ser preenchido"),
    cpf: z.string().min(1, "O campo CPF precisa ser preenchido"),
    zipcode: z.string().min(1, "O campo CEP precisa ser preenchido"),
    city: z.string().min(1, "O campo cidade precisa ser preenchido"),
    address: z.string().min(1, "O campo estado precisa ser preenchido"),
    terms: z.boolean({ message: "Você precisa aceitar os termos de uso" }),
  })
  .refine(
    (data) => {
      return data.password === data.password_confirmation
    },
    {
      message: "As senhas devem coincidir",
      path: ["password_confirmation"],
    }
  )

export type UserRegister = z.infer<typeof userRegisterSchema>
