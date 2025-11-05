import { Home, Map, Plus, BookOpen, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const { t } = useLanguage();
  
  const navItems = [
    { id: "dashboard", icon: Home, label: t.nav.dashboard },
    { id: "map", icon: Map, label: t.nav.map },
    { id: "add", icon: Plus, label: t.nav.addHive },
    { id: "notes", icon: BookOpen, label: t.nav.notes },
    { id: "settings", icon: Settings, label: t.nav.settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-soft z-50 md:relative md:border-0 md:shadow-none md:bg-transparent">
      <div className="flex justify-around items-center h-20 md:h-auto md:flex-col md:space-y-2 md:p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              variant={isActive ? "default" : "ghost"}
              size="lg"
              className={`flex flex-col items-center justify-center h-16 min-w-[80px] gap-1 transition-all md:flex-row md:w-full md:justify-start md:gap-3 ${
                isActive ? "scale-105" : "hover:scale-105"
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "animate-float" : ""}`} />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
