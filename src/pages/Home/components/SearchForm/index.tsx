import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Entender o motivo do resolvers
import { zodResolver } from "@hookform/resolvers/zod";

// Aqui já seria a validação?
const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  async function handleSubmitSearchTransaction(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitSearchTransaction)}>
      <input placeholder='Busque por transações' {...register("query")} />
      <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}
