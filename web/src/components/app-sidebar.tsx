import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Settings,
  DownloadCloudIcon,
  ChartNoAxesColumnIncreasing,
  Folder,
  Share2,
  Upload,
  LogOut,
  Trash,
  Cloud,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { LogoLink } from "@/components/logo/logoLink";

type SidebarItem = {
  label: string;
  items: {
    title: string;
    url: string;
    icon: React.ElementType;
  }[];
};

const sidebarItems: SidebarItem[] = [
  // Navegação
  {
    label: "Navegação",
    items: [
      {
        title: "Visão Geral",
        url: "/dashboard",
        icon: ChartNoAxesColumnIncreasing,
      },
      {
        title: "Meus Arquivos",
        url: "#",
        icon: Folder,
      },
      {
        title: "Upload",
        url: "/upload",
        icon: Upload,
      },
      {
        title: "Downloads",
        url: "/downloads",
        icon: DownloadCloudIcon,
      },
      {
        title: "Compartilhados",
        url: "#",
        icon: Share2,
      },
      {
        title: "Lixeira",
        url: "#",
        icon: Trash,
      },
    ],
  },
  // Integrações
  {
    label: "Integrações",
    items: [
      {
        title: "Cloudflare R2",
        url: "#",
        icon: Cloud,
      },
      {
        title: "Amazon S3",
        url: "#",
        icon: Cloud,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-8">
        <LogoLink />
      </SidebarHeader>
      <SidebarContent className="px-8">
        {sidebarItems.map((item) => (
          <SidebarGroup key={item.label}>
            <SidebarGroupLabel>
              <h3 className="text-xs font-semibold uppercase text-muted-foreground">
                {item.label}
              </h3>
            </SidebarGroupLabel>

            <SidebarGroupContent className="px-2 py-1">
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="text-muted-foreground">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="flex flex-col items-start gap-2 w-full">
        <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20 w-full">
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
              <Button variant="link" className="p-0 h-auto text-xs">
                Upgrade
              </Button>
            </div>
          </CardContent>
        </Card>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center w-full justify-between py-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="font-medium text-sm">Usuário</div>
                  <div className="text-muted-foreground text-xs">
                    usuario@email.com
                  </div>
                </div>
              </div>
              <LogOut />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
