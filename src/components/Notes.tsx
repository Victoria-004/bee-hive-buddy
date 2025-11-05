import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, Calendar, Hexagon } from "lucide-react";

interface Note {
  id: string;
  hiveId: string;
  hiveName: string;
  date: string;
  content: string;
  tags: string[];
}

const mockNotes: Note[] = [
  {
    id: "1",
    hiveId: "1",
    hiveName: "Hive Alpha",
    date: "2024-01-15",
    content: "Strong colony with excellent brood pattern. Queen spotted and marked. Added second super due to high honey production.",
    tags: ["inspection", "queen-spotted", "honey"],
  },
  {
    id: "2",
    hiveId: "2",
    hiveName: "Hive Beta",
    date: "2024-01-10",
    content: "Lower activity observed. Need to monitor queen performance. Colony seems healthy but less active than usual.",
    tags: ["inspection", "monitoring", "queen"],
  },
  {
    id: "3",
    hiveId: "3",
    hiveName: "Hive Gamma",
    date: "2024-01-14",
    content: "Excellent progress! Bees are very active and filling frames quickly. No signs of disease. Weather has been ideal.",
    tags: ["inspection", "healthy", "progress"],
  },
];

const Notes = () => {
  return (
    <div className="space-y-6 animate-slide-up pb-24 md:pb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Observation Notes</h1>
          <p className="text-muted-foreground">Track your hive inspections and observations</p>
        </div>
        <Button size="lg" className="h-12 hidden md:flex">
          <Plus className="h-5 w-5 mr-2" />
          Add Note
        </Button>
      </div>

      <Button size="lg" className="w-full h-14 md:hidden">
        <Plus className="h-5 w-5 mr-2" />
        Add New Note
      </Button>

      <div className="space-y-4">
        {mockNotes.map((note) => (
          <Card key={note.id} className="shadow-card hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Hexagon className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{note.hiveName}</CardTitle>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(note.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed">{note.content}</p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockNotes.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No notes yet</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Start documenting your hive observations and inspections to track their progress
            </p>
            <Button size="lg">
              <Plus className="h-5 w-5 mr-2" />
              Add Your First Note
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Notes;
