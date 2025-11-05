import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings as SettingsIcon, Bell, Cloud, Lock, User, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";


const Settings = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div className="space-y-6 animate-slide-up pb-24 md:pb-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-secondary">
          <SettingsIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{t.settings.title}</h1>
          <p className="text-muted-foreground">{t.settings.subtitle}</p>
        </div>
      </div>

      {/* Language Selection */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-primary" />
            {t.settings.language}
          </CardTitle>
          <CardDescription>{t.settings.languageDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="language" className="text-base">
              {t.settings.selectLanguage}
            </Label>
            <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
              <SelectTrigger id="language" className="h-12 text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">{t.settings.languages.en}</SelectItem>
                <SelectItem value="uk">{t.settings.languages.uk}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Profile Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            {t.settings.profile}
          </CardTitle>
          <CardDescription>{t.settings.profileDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full h-12 justify-start">
            {t.settings.editProfile}
          </Button>
          <Button variant="outline" className="w-full h-12 justify-start">
            {t.settings.changePassword}
          </Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            {t.settings.notifications}
          </CardTitle>
          <CardDescription>{t.settings.notificationsDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="inspection-reminders" className="text-base">
                {t.settings.inspectionReminders}
              </Label>
              <p className="text-sm text-muted-foreground">
                {t.settings.inspectionRemindersDesc}
              </p>
            </div>
            <Switch id="inspection-reminders" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="weather-alerts" className="text-base">
                {t.settings.weatherAlerts}
              </Label>
              <p className="text-sm text-muted-foreground">
                {t.settings.weatherAlertsDesc}
              </p>
            </div>
            <Switch id="weather-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="activity-updates" className="text-base">
                {t.settings.activityUpdates}
              </Label>
              <p className="text-sm text-muted-foreground">
                {t.settings.activityUpdatesDesc}
              </p>
            </div>
            <Switch id="activity-updates" />
          </div>
        </CardContent>
      </Card>

      {/* Data & Backup */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
            {t.settings.dataBackup}
          </CardTitle>
          <CardDescription>{t.settings.dataBackupDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-backup" className="text-base">
                {t.settings.autoBackup}
              </Label>
              <p className="text-sm text-muted-foreground">
                {t.settings.autoBackupDesc}
              </p>
            </div>
            <Switch id="auto-backup" defaultChecked />
          </div>
          
          <Button variant="outline" className="w-full h-12">
            {t.settings.exportData}
          </Button>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            {t.settings.privacy}
          </CardTitle>
          <CardDescription>{t.settings.privacyDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full h-12 justify-start">
            {t.settings.privacyPolicy}
          </Button>
          <Button variant="outline" className="w-full h-12 justify-start">
            {t.settings.termsOfService}
          </Button>
          <Button variant="destructive" className="w-full h-12">
            {t.settings.deleteAccount}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
