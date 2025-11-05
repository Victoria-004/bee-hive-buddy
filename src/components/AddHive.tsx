import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Hexagon, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";


const AddHive = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    queenStatus: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.name || !formData.location) {
      toast({
        title: t.addHive.missingInfo,
        description: t.addHive.fillRequired,
        variant: "destructive",
      });
      return;
    }

    // In production, this would save to database
    toast({
      title: t.addHive.success,
      description: `${formData.name} ${t.addHive.addedToApiary}`,
    });

    // Reset form
    setFormData({
      name: "",
      location: "",
      queenStatus: "",
      notes: "",
    });
  };

  return (
    <div className="space-y-6 animate-slide-up pb-24 md:pb-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-secondary">
          <Plus className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{t.addHive.title}</h1>
          <p className="text-muted-foreground">{t.addHive.subtitle}</p>
        </div>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hexagon className="h-5 w-5 fill-primary text-primary" />
            {t.addHive.hiveDetails}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">
                {t.addHive.hiveName} {t.addHive.required}
              </Label>
              <Input
                id="name"
                placeholder={t.addHive.hiveNamePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-base">
                {t.addHive.location} {t.addHive.required}
              </Label>
              <Input
                id="location"
                placeholder={t.addHive.locationPlaceholder}
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="queenStatus" className="text-base">
                {t.addHive.queenStatus}
              </Label>
              <Select
                value={formData.queenStatus}
                onValueChange={(value) => setFormData({ ...formData, queenStatus: value })}
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder={t.addHive.selectQueenStatus} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">{t.addHive.queenStatuses.active}</SelectItem>
                  <SelectItem value="low-activity">{t.addHive.queenStatuses.lowActivity}</SelectItem>
                  <SelectItem value="needs-replacement">{t.addHive.queenStatuses.needsReplacement}</SelectItem>
                  <SelectItem value="unknown">{t.addHive.queenStatuses.unknown}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-base">
                {t.addHive.initialNotes}
              </Label>
              <Textarea
                id="notes"
                placeholder={t.addHive.notesPlaceholder}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="min-h-[120px] text-base resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-base font-semibold"
            >
              <Plus className="h-5 w-5 mr-2" />
              {t.addHive.addButton}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-secondary/50 border-primary/20">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground text-center">
            <strong>{t.addHive.proTip}</strong> {t.addHive.proTipText}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddHive;
