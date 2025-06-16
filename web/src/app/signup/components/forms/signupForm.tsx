"use client";
import { UserRegisterAction } from "@/actions/auth/signup";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { execute: RegisterUser, isPending } = useAction(UserRegisterAction, {
    onSuccess: (resgiterUserResponse) => {
      if (resgiterUserResponse.data?.error) {
        console.log("LOG DO ERRO", resgiterUserResponse.data);
        /*
        toast({
          title: "Erro",
          description: resgiterUserResponse.data.message,
          variant: "destructive",
          duration: 2000,
        }); */
        return;
      }
      console.log("LOG DO SUCESSO", resgiterUserResponse.data);
      /* form.reset();
      setIsUserCreate(true); */
    },
    onError: (_error) => {
      console.log("LOG DO ERRO", _error);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    RegisterUser(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full gap-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start gap-2 w-[350px]">
              <FormLabel> Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start gap-2 w-[350px]">
              <FormLabel> Email</FormLabel>
              <FormControl>
                <Input placeholder="nome@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start gap-2 w-[350px]">
              <div className="flex items-center w-full">
                <FormLabel> Senha</FormLabel>
              </div>

              <FormControl>
                <Input placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col items-center gap-4 w-full">
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "Aguarde..." : "Cadastrar-se"}
          </Button>

          <Button variant="outline" className="w-full cursor-pointer" disabled={isPending}>
            Login com Google
          </Button>
        </div>
      </form>
    </Form>
  );
}
