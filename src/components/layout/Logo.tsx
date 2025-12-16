import { Globe } from "lucide-react";

export default function Logo() {
  return (
    <div className="relative h-8 w-8">
      <div className="absolute inset-0 animate-revolve rounded-full border-2 border-transparent border-t-amber-400 border-l-amber-400"></div>
      <div className="absolute inset-0 animate-spin-slow">
        <Globe className="h-full w-full text-primary" />
      </div>
    </div>
  );
}
