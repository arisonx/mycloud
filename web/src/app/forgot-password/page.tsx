import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudDrizzle, Mountain } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <Link
              href="/"
              className="flex justify-center items-center gap-2 mb-4"
            >
              <Mountain className="h-6 w-6" />
              <span className="text-lg font-bold">MyCloud</span>
            </Link>
            <h1 className="text-3xl font-bold">Esqueceu sua senha?</h1>
            <p className="text-balance text-muted-foreground">
              Sem problemas! Digite seu e-mail para redefinir sua senha.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nome@exemplo.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar link de redefinição
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Lembrou sua senha?{" "}
            <Link href="/login" className="underline">
              Faça login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-center bg-zinc-900 p-10 lg:flex">
        <div className="text-center">
          <CloudDrizzle className="mx-auto h-32 w-32 text-gray-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Recupere seu acesso
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Siga os passos para voltar a ter controle sobre seus dados.
          </p>
        </div>
      </div>
    </div>
  );
} 