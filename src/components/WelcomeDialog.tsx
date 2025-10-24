import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export function WelcomeDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show welcome dialog on first visit
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenWelcome', 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Welcome to the CPO Policy Simulator
          </DialogTitle>
          <DialogDescription>
            Get started with advanced multi-dimensional predictive modeling for India's NMEO-OP strategy
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <p className="text-gray-700">
            This advanced multi-dimensional predictive modeling platform helps policymakers analyze 
            CPO import tariff scenarios for India's NMEO-OP self-reliance strategy.
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border border-indigo-200">
            <p className="font-medium text-indigo-900 mb-2">🚀 Quick Start Guide:</p>
            <div className="space-y-2 text-sm text-indigo-800">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Step 1:</span> Try the "Quick Scenario Presets" to load pre-configured examples</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Step 2:</span> Use the interactive sliders to adjust tariff, global price, yield gap, and volatility</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Step 3:</span> Watch the real-time impact graph update as you move sliders</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Step 4:</span> Click "Generate Executive Memo" for comprehensive AI analysis</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p><span className="font-medium">Step 5:</span> Explore the tabs: ABM simulation, state heatmap, historical data, and NMEO-OP calculator</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="font-medium text-yellow-900 mb-2">💡 Pro Tips:</p>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Click "Feature Guide" (top right) for detailed explanations of each feature</li>
              <li>• Use "View Sensitivity Analysis" to understand the mathematical model</li>
              <li>• Save scenarios for later comparison using the Scenario Manager</li>
              <li>• Higher volatility index (60+) simulates crisis scenarios like supply shocks</li>
            </ul>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button onClick={handleClose} className="flex-1">
              Get Started
            </Button>
            <Button onClick={handleClose} variant="outline" className="flex-1">
              Skip Tutorial
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
