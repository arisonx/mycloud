import Link from "next/link";
import {
  Package2,
  BarChart,
  ArrowUp,
  ArrowDown,
  HardDrive,
  Upload,
  Download,
  FileText,
  Image,
  FileVideo,
  Clock,
  Users,
  Folder,
  Search,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VisaoGeral() {
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
                className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
              >
                <BarChart className="h-4 w-4" />
                Visão Geral
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
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
                <Users className="h-4 w-4" />
                Compartilhados
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <HardDrive className="h-4 w-4" />
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
                <Package2 className="h-4 w-4" />
                Amazon S3
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Package2 className="h-4 w-4" />
                Cloudflare R2
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
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 sticky top-0 z-10 lg:h-[60px] lg:px-6">
          <div className="flex-1">
            <h1 className="text-xl font-bold">Visão Geral</h1>
            <p className="text-sm text-muted-foreground">Estatísticas e resumo da sua conta</p>
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
                  <CardTitle className="text-sm font-medium">Uploads Este Mês</CardTitle>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">243</div>
                <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
                  <ArrowUp className="h-3 w-3" /> +15% em relação ao mês passado
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">Downloads Este Mês</CardTitle>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <ArrowDown className="h-4 w-4 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.289</div>
                <p className="text-xs text-blue-500 flex items-center gap-1 mt-1">
                  <ArrowUp className="h-3 w-3" /> +8% em relação ao mês passado
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
                </div>
                <div className="bg-purple-100 p-2 rounded-full">
                  <Users className="h-4 w-4 text-purple-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground mt-1">5 convidados este mês</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">Uso do Armazenamento</CardTitle>
                </div>
                <div className="bg-orange-100 p-2 rounded-full">
                  <HardDrive className="h-4 w-4 text-orange-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65%</div>
                <Progress value={65} className="h-2 mt-2" />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Suas ações mais recentes na plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-2 rounded-full">
                      <Upload className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Arquivo enviado</p>
                      <p className="text-xs text-muted-foreground">Você enviou o arquivo "Relatório_Q4_2024.pdf"</p>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">2 horas atrás</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-green-50 p-2 rounded-full">
                      <Users className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Compartilhamento</p>
                      <p className="text-xs text-muted-foreground">Você compartilhou "Apresentação_Vendas.pptx" com 3 usuários</p>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">5 horas atrás</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-50 p-2 rounded-full">
                      <Download className="h-4 w-4 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Download realizado</p>
                      <p className="text-xs text-muted-foreground">Você baixou o arquivo "Planilha_Orçamento.xlsx"</p>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">1 dia atrás</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-red-50 p-2 rounded-full">
                      <HardDrive className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Arquivo excluído</p>
                      <p className="text-xs text-muted-foreground">Você moveu "Rascunho_Final.docx" para a lixeira</p>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">2 dias atrás</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Armazenamento por Tipo</CardTitle>
                <CardDescription>Distribuição do seu espaço de armazenamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded">
                        <FileText className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Documentos</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">28.5 GB</div>
                  </div>
                  <Progress value={43} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 p-2 rounded">
                        <Image className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Imagens</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">15.8 GB</div>
                  </div>
                  <Progress value={23} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded">
                        <FileVideo className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Vídeos</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">12.2 GB</div>
                  </div>
                  <Progress value={18} className="h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 p-2 rounded">
                        <Folder className="h-4 w-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Outros</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">8.5 GB</div>
                  </div>
                  <Progress value={13} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Atividades</CardTitle>
              <Tabs defaultValue="today" className="w-full">
                <TabsList>
                  <TabsTrigger value="today">Hoje</TabsTrigger>
                  <TabsTrigger value="week">Esta Semana</TabsTrigger>
                  <TabsTrigger value="month">Este Mês</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <TabsContent value="today" className="m-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">10:45</div>
                    <div>
                      <p className="text-sm">Enviado <span className="font-medium">Relatório_Q4_2024.pdf</span> (2.4 MB)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">09:30</div>
                    <div>
                      <p className="text-sm">Compartilhado <span className="font-medium">Apresentação_Vendas.pptx</span> com o time de marketing</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div className="text-xs text-muted-foreground">08:15</div>
                    <div>
                      <p className="text-sm">Login realizado no sistema</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
} 