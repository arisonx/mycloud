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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-screen">
      <div className="flex flex-col w-full">
        
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
