import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  descricao: string;
  preco: number;
  categoria: string;
};

export function Modal() {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
          <input type='number' placeholder='Preço' {...register("preco")} />
          <input
            type='text'
            placeholder='Categoria'
            {...register("categoria")}
          />

          <TransactionType>
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type='submit'>Cadastrar</button>
        </form>

        <Close>
          <X size={24} />
        </Close>
      </Content>
    </Dialog.Portal>
  );
}
