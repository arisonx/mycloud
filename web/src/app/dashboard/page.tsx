import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package2,
  Users,
  Folder,
  Upload,
  Search,
  Plus,
  MoreHorizontal,
  Trash2,
  Share2,
  Download,
  Grid,
  List,
  FileImage,
  FileText,
  FileVideo,
  Cloud,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-card md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">MyCloud</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <div className="px-4 py-2">
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">
                NAVEGAÇÃO
              </h3>
            </div>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/visao-geral"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <BarChart className="h-4 w-4" />
                Visão Geral
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
              >
                <Folder className="h-4 w-4" />
                Meus Arquivos
              </Link>
              <Link
                href="/upload"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Upload className="h-4 w-4" />
                Upload
              </Link>
              <Link
                href="/downloads"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Download className="h-4 w-4" />
                Downloads
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Share2 className="h-4 w-4" />
                Compartilhados
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Trash2 className="h-4 w-4" />
                Lixeira
              </Link>
            </nav>
            
            <div className="px-4 py-2 mt-6">
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">
                INTEGRAÇÕES
              </h3>
            </div>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Cloud className="h-4 w-4" />
                Amazon S3
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Cloud className="h-4 w-4" />
                Cloudflare R2
              </Link>
            </nav>
            
            <div className="px-4 py-2 mt-6">
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">
                CONFIGURAÇÕES
              </h3>
            </div>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <MoreHorizontal className="h-4 w-4" />
                Configurações
              </Link>
            </nav>
          </div>
          
          <div className="mt-auto p-4">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
              <CardHeader className="p-3 pb-0">
                <CardTitle className="text-sm font-bold">Armazenamento</CardTitle>
                <CardDescription className="text-xs">
                  65% do seu espaço utilizado
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3">
                <Progress value={65} className="h-2 mb-2" />
                <div className="flex justify-between items-center text-xs">
                  <span>65GB de 100GB</span>
                  <Button variant="link" className="p-0 h-auto text-xs">Upgrade</Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-4 flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5 text-xs">
                <div className="font-medium">Usuário</div>
                <div className="text-muted-foreground">usuario@email.com</div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Menu de usuário</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Configurações</DropdownMenuItem>
                  <DropdownMenuItem>Suporte</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 sticky top-0 z-10 lg:h-[60px] lg:px-6">
          <div className="flex-1">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Gerencie seus arquivos na nuvem</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar arquivos..."
                className="pl-8 rounded-full"
              />
            </div>
            
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Novo Upload
            </Button>
          </div>
        </header>
        
        <main className="flex flex-1 flex-col gap-4 p-4 overflow-auto lg:gap-6 lg:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">Armazenamento Usado</CardTitle>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <FileText className="h-4 w-4 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65 GB</div>
                <Progress value={65} className="h-2 mt-2 mb-1" max={100} />
                <p className="text-xs text-muted-foreground">100 GB total</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">Total de Arquivos</CardTitle>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <Folder className="h-4 w-4 text-green-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.847</div>
                <p className="text-xs text-muted-foreground mt-1">+12% desde o mês passado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">Compartilhamentos</CardTitle>
                </div>
                <div className="bg-purple-100 p-2 rounded-full">
                  <Share2 className="h-4 w-4 text-purple-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground mt-1">Arquivos compartilhados</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">Integrações Ativas</CardTitle>
                </div>
                <div className="bg-orange-100 p-2 rounded-full">
                  <Cloud className="h-4 w-4 text-orange-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">Serviços conectados</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Arquivos Recentes</CardTitle>
                <CardDescription>Seus arquivos mais recentemente modificados</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-2 rounded">
                      <FileText className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Relatório_Q4_2024.pdf</p>
                      <div className="text-xs text-muted-foreground">2.4 MB • 2 horas atrás</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-50 p-2 rounded">
                      <FileText className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Apresentação_Vendas.pptx</p>
                      <div className="text-xs text-muted-foreground">15.7 MB • 5 horas atrás</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-green-50 p-2 rounded">
                      <FileText className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Planilha_Orçamento.xlsx</p>
                      <div className="text-xs text-muted-foreground">1.2 MB • 1 dia atrás</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-50 p-2 rounded">
                      <FileText className="h-6 w-6 text-pink-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Projeto_Design.zip</p>
                      <div className="text-xs text-muted-foreground">45.3 MB • 2 dias atrás</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Integrações da Nuvem</CardTitle>
                <CardDescription>Gerencie suas conexões com serviços de nuvem</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-4 border rounded-lg p-4">
                    <div className="bg-yellow-50 p-2 rounded">
                      <Cloud className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Amazon S3</p>
                      <div className="text-xs text-muted-foreground">Conectado • 1.2 TB disponível</div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Ativo</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 border rounded-lg p-4">
                    <div className="bg-blue-50 p-2 rounded">
                      <Cloud className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Cloudflare R2</p>
                      <div className="text-xs text-muted-foreground">Conectado • 500 GB disponível</div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">Ativo</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 border rounded-lg p-4">
                    <div className="bg-gray-50 p-2 rounded">
                      <Cloud className="h-6 w-6 text-gray-500" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">Google Cloud Storage</p>
                      <div className="text-xs text-muted-foreground">Não conectado</div>
                    </div>
                    <Button variant="outline" size="sm">Conectar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
