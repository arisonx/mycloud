import Link from "next/link";
import {
  Package2,
  BarChart,
  HardDrive,
  Upload,
  Download,
  Users,
  Folder,
  Search,
  Plus,
  FileText,
  FileImage,
  FileVideo,
  Archive,
  MoreHorizontal,
  Clock,
  Calendar,
  ArrowDown,
  DownloadCloud,
  PauseCircle,
  PlayCircle,
  XCircle,
  CheckCircle,
  Filter,
  SortAsc,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DownloadsPage() {
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
                className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all"
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
                <CardTitle className="text-sm font-bold">
                  Armazenamento
                </CardTitle>
                <CardDescription className="text-xs">
                  65% do seu espaço utilizado
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3">
                <Progress value={65} className="h-2 mb-2" />
                <div className="flex justify-between items-center text-xs">
                  <span>65GB de 100GB</span>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Upgrade
                  </Button>
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
            <h1 className="text-xl font-bold">Downloads</h1>
            <p className="text-sm text-muted-foreground">
              Gerencie seus downloads
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar downloads..."
                className="pl-8 rounded-full"
              />
            </div>

            <Button className="gap-2">
              <ArrowDown className="h-4 w-4" /> Novo Download
            </Button>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 overflow-auto lg:gap-6 lg:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">
                    Downloads em Andamento
                  </CardTitle>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <ArrowDown className="h-4 w-4 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">
                  1.2 GB restantes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">
                    Downloads Concluídos
                  </CardTitle>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="text-xs text-muted-foreground mt-1">Este mês</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-sm font-medium">
                    Velocidade Média
                  </CardTitle>
                </div>
                <div className="bg-purple-100 p-2 rounded-full">
                  <DownloadCloud className="h-4 w-4 text-purple-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.2 MB/s</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Última hora
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Downloads Ativos</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-3.5 w-3.5" /> Filtrar
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <SortAsc className="h-3.5 w-3.5" /> Ordenar
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-2">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-50 p-2 rounded">
                      <FileVideo className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">
                            Tutorial_Avançado_2024.mp4
                          </p>
                          <p className="text-sm text-muted-foreground">
                            512 MB • 8.2 MB/s • 75% concluído
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <PauseCircle className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Progress value={75} className="h-1.5 mt-2" />
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          384 MB / 512 MB
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Restante: 15 segundos
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-2">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-2 rounded">
                      <Archive className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Backup_Projeto.zip</p>
                          <p className="text-sm text-muted-foreground">
                            850 MB • 6.4 MB/s • 42% concluído
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <PauseCircle className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Progress value={42} className="h-1.5 mt-2" />
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          357 MB / 850 MB
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Restante: 1 minuto
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-50 p-2 rounded">
                      <FileImage className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Imagens_Produto.rar</p>
                          <p className="text-sm text-muted-foreground">
                            240 MB • Pausado
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <PlayCircle className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Progress value={22} className="h-1.5 mt-2" />
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          52.8 MB / 240 MB
                        </span>
                        <span className="text-xs text-yellow-500">
                          Download pausado
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Histórico de Downloads</h2>
              <Tabs defaultValue="today" className="w-auto">
                <TabsList>
                  <TabsTrigger value="today">Hoje</TabsTrigger>
                  <TabsTrigger value="week">Semana</TabsTrigger>
                  <TabsTrigger value="month">Mês</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Arquivo</TableHead>
                      <TableHead>Tamanho</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">
                            Relatório_Q4_2024.pdf
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>2.4 MB</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>2 horas atrás</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">
                          Concluído
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              Baixar novamente
                            </DropdownMenuItem>
                            <DropdownMenuItem>Abrir arquivo</DropdownMenuItem>
                            <DropdownMenuItem>
                              Mostrar no Finder
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              Remover do histórico
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-indigo-500" />
                          <span className="font-medium">
                            Apresentação_Vendas.pptx
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>15.7 MB</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>5 horas atrás</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">
                          Concluído
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-green-500" />
                          <span className="font-medium">
                            Planilha_Orçamento.xlsx
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>1.2 MB</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>Ontem</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700">
                          Concluído
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Archive className="h-4 w-4 text-red-500" />
                          <span className="font-medium">
                            Software_Instalação.exe
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>156.8 MB</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          <span>Ontem</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-yellow-100 text-yellow-700">
                          Cancelado
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between px-6 py-4">
                <div className="text-sm text-muted-foreground">
                  Mostrando 4 de 125 downloads
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Anterior
                  </Button>
                  <Button variant="outline" size="sm">
                    Próximo
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
