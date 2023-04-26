import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const modalSchema = z.object({
  descricao: z.string(),
  preco: z.number(),
  categoria: z.string(),
  type: z.enum(["income", "outcome"]),
});

type InputModalSchema = z.infer<typeof modalSchema>;

export function Modal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<InputModalSchema>({
    resolver: zodResolver(modalSchema),
    defaultValues: {
      type: "income",
    },
  });
  const onSubmit: SubmitHandler<InputModalSchema> = (data) => console.log(data);

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Descrição'
            {...register("descricao")}
          />
          <input
            type='number'
            placeholder='Preço'
            {...register("preco", { valueAsNumber: true })}
          />
          <input
            type='text'
            placeholder='Categoria'
            {...register("categoria")}
          />

          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant='outcome' value='outcome'>
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type='submit' disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

        <Close>
          <X size={24} />
        </Close>
      </Content>
    </Dialog.Portal>
  );
}
