import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Hexagon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Location {
  id: string;
  name: string;
  hives: number;
  coordinates: string;
  status: "active" | "inactive";
}

const mockLocations: Location[] = [
  {
    id: "1",
    name: "North Field",
    hives: 1,
    coordinates: "40.7128° N, 74.0060° W",
    status: "active",
  },
  {
    id: "2",
    name: "East Garden",
    hives: 1,
    coordinates: "40.7580° N, 73.9855° W",
    status: "active",
  },
  {
    id: "3",
    name: "South Meadow",
    hives: 1,
    coordinates: "40.6892° N, 74.0445° W",
    status: "active",
  },
];

const MapView = () => {
  return (
    <div className="space-y-6 animate-slide-up pb-24 md:pb-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Apiary Locations</h1>
        <p className="text-muted-foreground">View and manage your hive locations</p>
      </div>

      {/* Map Placeholder - In production, integrate with actual map API */}
      <Card className="shadow-card overflow-hidden">
        <div className="relative h-[400px] bg-gradient-to-br from-secondary to-muted honeycomb-pattern flex items-center justify-center">
          <div className="text-center space-y-3 bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
            <MapPin className="h-16 w-16 text-primary mx-auto animate-float" />
            <p className="text-lg font-semibold">Interactive Map</p>
            <p className="text-sm text-muted-foreground max-w-sm">
              Map integration will show all your hive locations with GPS coordinates
            </p>
          </div>
        </div>
      </Card>

      {/* Locations List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Your Apiaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockLocations.map((location) => (
            <Card
              key={location.id}
              className="shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-secondary group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant={location.status === "active" ? "default" : "secondary"}>
                    {location.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{location.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Hexagon className="h-4 w-4 text-primary fill-primary" />
                  <span className="font-medium">{location.hives} Hive{location.hives !== 1 ? 's' : ''}</span>
                </div>
                <p className="text-xs text-muted-foreground">{location.coordinates}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapView;
