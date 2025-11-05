import { useState } from "react";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import MapView from "@/components/MapView";
import AddHive from "@/components/AddHive";
import Notes from "@/components/Notes";
import Settings from "@/components/Settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "map":
        return <MapView />;
      case "add":
        return <AddHive />;
      case "notes":
        return <Notes />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 min-h-screen border-r border-border bg-card/50 backdrop-blur-sm">
          <div className="sticky top-0 p-6">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Index;
