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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

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
      <SidebarHeader className="px-8 flex">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
      </SidebarHeader>
      <SidebarContent className="px-8" >
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
      <Separator />
      <SidebarFooter>
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
