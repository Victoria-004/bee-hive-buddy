import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Bell, Cloud, Lock, User } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6 animate-slide-up pb-24 md:pb-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-secondary">
          <SettingsIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your BeeTrack preferences</p>
        </div>
      </div>

      {/* Profile Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Profile
          </CardTitle>
          <CardDescription>Manage your account information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full h-12 justify-start">
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full h-12 justify-start">
            Change Password
          </Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Notifications
          </CardTitle>
          <CardDescription>Configure your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="inspection-reminders" className="text-base">
                Inspection Reminders
              </Label>
              <p className="text-sm text-muted-foreground">
                Get notified when it's time to inspect your hives
              </p>
            </div>
            <Switch id="inspection-reminders" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="weather-alerts" className="text-base">
                Weather Alerts
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive weather warnings that may affect your bees
              </p>
            </div>
            <Switch id="weather-alerts" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="activity-updates" className="text-base">
                Activity Updates
              </Label>
              <p className="text-sm text-muted-foreground">
                Stay informed about changes in your hives
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
            Data & Backup
          </CardTitle>
          <CardDescription>Manage your data and backups</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-backup" className="text-base">
                Automatic Backup
              </Label>
              <p className="text-sm text-muted-foreground">
                Automatically backup your data to the cloud
              </p>
            </div>
            <Switch id="auto-backup" defaultChecked />
          </div>
          
          <Button variant="outline" className="w-full h-12">
            Export Data
          </Button>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            Privacy & Security
          </CardTitle>
          <CardDescription>Control your privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full h-12 justify-start">
            Privacy Policy
          </Button>
          <Button variant="outline" className="w-full h-12 justify-start">
            Terms of Service
          </Button>
          <Button variant="destructive" className="w-full h-12">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
