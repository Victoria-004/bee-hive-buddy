import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hexagon, TrendingUp, Activity, Droplet } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Hive {
  id: string;
  name: string;
  status: "healthy" | "warning" | "critical";
  lastInspection: string;
  honeyProduction: number;
  queenStatus: string;
  location: string;
}

const mockHives: Hive[] = [
  {
    id: "1",
    name: "Hive Alpha",
    status: "healthy",
    lastInspection: "2 days ago",
    honeyProduction: 85,
    queenStatus: "Active",
    location: "North Field",
  },
  {
    id: "2",
    name: "Hive Beta",
    status: "warning",
    lastInspection: "5 days ago",
    honeyProduction: 62,
    queenStatus: "Low Activity",
    location: "East Garden",
  },
  {
    id: "3",
    name: "Hive Gamma",
    status: "healthy",
    lastInspection: "1 day ago",
    honeyProduction: 92,
    queenStatus: "Active",
    location: "South Meadow",
  },
];

const Dashboard = () => {
  const totalHives = mockHives.length;
  const healthyHives = mockHives.filter(h => h.status === "healthy").length;
  const avgProduction = Math.round(
    mockHives.reduce((acc, h) => acc + h.honeyProduction, 0) / totalHives
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-500/20 text-green-700 border-green-300";
      case "warning":
        return "bg-yellow-500/20 text-yellow-700 border-yellow-300";
      case "critical":
        return "bg-red-500/20 text-red-700 border-red-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6 animate-slide-up pb-24 md:pb-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Hexagon className="h-8 w-8 fill-primary text-primary animate-pulse-soft" />
            BeeTrack
          </h1>
          <p className="text-muted-foreground mt-1">Manage your hives with care</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Hives</CardTitle>
            <Hexagon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalHives}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {healthyHives} healthy
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Production</CardTitle>
            <TrendingUp className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{avgProduction}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Above target
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-hover transition-all duration-300 sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Queens</CardTitle>
            <Activity className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalHives}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All queens active
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Hives List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Hives</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {mockHives.map((hive) => (
            <Card
              key={hive.id}
              className="shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-secondary group-hover:scale-110 transition-transform">
                      <Hexagon className="h-6 w-6 fill-primary text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{hive.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{hive.location}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(hive.status)}>
                    {hive.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Inspection:</span>
                  <span className="font-medium">{hive.lastInspection}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Queen Status:</span>
                  <span className="font-medium">{hive.queenStatus}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Droplet className="h-4 w-4" />
                      Honey Production:
                    </span>
                    <span className="font-medium">{hive.honeyProduction}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${hive.honeyProduction}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
