
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Github, Code, GitBranch, Star, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex flex-col">
      {/* Hero Section */}
      <header className="container mx-auto py-16 md:py-24 px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <Github className="h-12 w-12 mr-2" />
          <h1 className="text-4xl md:text-6xl font-bold">GitHub JetStream</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Streamline your GitHub workflow and boost your productivity with powerful insights and automation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <Code className="h-4 w-4" />
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5" /> 
                Repository Insights
              </CardTitle>
              <CardDescription>Deep analytics on your repositories</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get comprehensive statistics and visualizations about your GitHub repositories, including commit frequency, code changes, and contributor metrics.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" /> 
                Workflow Automation
              </CardTitle>
              <CardDescription>Automate repetitive tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Set up custom workflows to automate issue management, pull request reviews, and other common GitHub tasks to save valuable development time.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" /> 
                Team Collaboration
              </CardTitle>
              <CardDescription>Enhance team productivity</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Improve collaboration with features designed for teams, including shared dashboards, progress tracking, and custom notifications.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} GitHub JetStream. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
