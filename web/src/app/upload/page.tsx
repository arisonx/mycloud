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
  X,
  FileText,
  FileImage,
  FileVideo,
  Archive,
  CheckCircle,
  AlertCircle,
  ArrowRight,
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
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function UploadPage() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col w-full h-full">
        <header className="flex w-full h-14 items-center gap-4 border-b bg-background px-4 sticky lg:h-[60px] lg:px-6">
          <div className="flex-1">
            <h1 className="text-xl font-bold">Upload de Arquivos</h1>
            <p className="text-sm text-muted-foreground">Envie seus arquivos para a nuvem</p>
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
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Carregar Arquivos</CardTitle>
                  <CardDescription>
                    Arraste e solte arquivos ou clique para selecionar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-primary/20 rounded-lg p-12 flex flex-col items-center justify-center">
                    <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-1">Arraste e solte seus arquivos aqui</h3>
                    <p className="text-sm text-muted-foreground mb-4">Suporta qualquer tipo de arquivo até 2GB</p>
                    <Button>Selecionar Arquivos</Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    65GB de 100GB usados
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    Opções Avançadas <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Uploads Recentes</h2>
            <Tabs defaultValue="all">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="active">Em andamento</TabsTrigger>
                  <TabsTrigger value="completed">Concluídos</TabsTrigger>
                  <TabsTrigger value="failed">Falhas</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-50 p-2 rounded">
                          <FileText className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Relatório_Q4_2024.pdf</p>
                              <p className="text-sm text-muted-foreground">2.4 MB • Concluído</p>
                            </div>
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Concluído</Badge>
                          </div>
                          <Progress value={100} className="h-1.5 mt-2" />
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-50 p-2 rounded">
                          <FileImage className="h-6 w-6 text-purple-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">IMG_20240601.jpg</p>
                              <p className="text-sm text-muted-foreground">8.7 MB • 75% concluído</p>
                            </div>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Enviando</Badge>
                          </div>
                          <Progress value={75} className="h-1.5 mt-2" />
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-green-50 p-2 rounded">
                          <FileVideo className="h-6 w-6 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Video_Apresentacao.mp4</p>
                              <p className="text-sm text-muted-foreground">345 MB • Pausado</p>
                            </div>
                            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Pausado</Badge>
                          </div>
                          <Progress value={42} className="h-1.5 mt-2" />
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-50 p-2 rounded">
                          <Archive className="h-6 w-6 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Arquivos_Projeto.zip</p>
                              <p className="text-sm text-muted-foreground">218 MB • Falha no upload</p>
                            </div>
                            <Badge className="bg-red-100 text-red-700 hover:bg-red-200">Falha</Badge>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xs text-red-500">
                            <AlertCircle className="h-3 w-3" />
                            <span>Erro ao conectar com o servidor. Tente novamente.</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">Destino do Upload</h2>
            <Card>
              <CardHeader>
                <CardTitle>Selecione o destino</CardTitle>
                <CardDescription>
                  Escolha onde seus arquivos serão armazenados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="mycloud" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger value="mycloud" className="flex-1">MyCloud</TabsTrigger>
                    <TabsTrigger value="amazon" className="flex-1">Amazon S3</TabsTrigger>
                    <TabsTrigger value="cloudflare" className="flex-1">Cloudflare R2</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="mycloud" className="mt-4">
                    <div className="flex items-center gap-4 p-4 rounded-lg border">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Package2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">MyCloud Storage</h3>
                        <p className="text-sm text-muted-foreground">Armazenamento padrão</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <Badge className="mb-1 bg-blue-50 text-blue-600 border border-blue-200">Padrão</Badge>
                        <p className="text-xs text-muted-foreground">35GB livres</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Input placeholder="Pasta de destino (opcional)" className="flex-1" />
                      <Button variant="outline">Escolher</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <Separator />
              <CardFooter className="flex flex-col items-start gap-2 pt-4">
                <h3 className="font-medium text-sm">Opções de Upload</h3>
                <div className="flex flex-wrap gap-4 w-full">
                  <Button variant="outline" size="sm" className="gap-1">
                    <CheckCircle className="h-3.5 w-3.5 mr-1" /> Verificar duplicatas
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    Compressão automática
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    Processar após upload
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    Criptografar arquivos
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