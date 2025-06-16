import { CloudDrizzle } from "lucide-react";
import { LoginForm } from "./components/forms/loginForm";
import { LogoLink } from "@/components/logo/logoLink";

export default function LoginPage() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center">
      {/* Left Side */}
      <div className="w-[50%] h-full flex items-center">
        <div className="flex flex-col items-center justify-center py-12 w-full h-full gap-2">
          <div className="w-[350px] flex justify-center">
            <LogoLink />
          </div>
          <div className="flex flex-col items-center w-[350px]">
            <div className="grid gap-4  text-center pb-8">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Digite seu e-mail e senha abaixo para fazer login em sua conta
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex items-center justify-center bg-zinc-900 w-[50%] h-full">
        <div className="text-center mt-[-10rem]">
          <CloudDrizzle className="mx-auto h-32 w-32 text-gray-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Seu Refúgio Digital
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Seguro, rápido e sempre acessível.
          </p>
        </div>
      </div>
    </div>
  );
}
