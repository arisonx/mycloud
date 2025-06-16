import { Cloud } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-2">
        <Cloud className="h-6 w-6 text-white" />
      </div>
      <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        MyCloud
      </span>
    </div>
  );
};
