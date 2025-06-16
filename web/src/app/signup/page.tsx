import Link from "next/link";
import { CloudDrizzle } from "lucide-react";
import { SignupForm } from "./components/forms/signupForm";
import { Logo } from "@/components/logo";
import { UserRegisterAction } from "@/actions/auth/signup";
import { useAction } from "next-safe-action/hooks";

export default function SignupPage() {


  return (
    <div className="w-full h-full flex flex-row items-center justify-center">
      <div className="w-[50%] h-full flex items-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <Logo />
            <h1 className="text-3xl font-bold">Cadastre-se</h1>
            <p className="text-balance text-muted-foreground">
              Crie sua conta para começar a usar o MyCloud
            </p>
          </div>
          <SignupForm />

          <div className="mt-4 text-center text-sm">
            Já tem uma conta?{" "}
            <Link href="/login" className="underline">
              Faça login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-zinc-900 w-[50%] h-full">
        <div className="text-center">
          <CloudDrizzle className="mx-auto h-32 w-32 text-gray-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Junte-se à Nuvem
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Crie sua conta e acesse seus arquivos de qualquer lugar.
          </p>
        </div>
      </div>
    </div>
  );
}
