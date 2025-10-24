import { Button } from './ui/button';
import { Card } from './ui/card';
import { TrendingUp, BarChart3, FileText } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="px-4 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm rounded-full">
            Multi-Dimensional Predictive Modeling + Real-Time XAI
          </span>
        </div>
        <h1 className="mb-4">AI Policy Forecast</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Advanced Agent-Based Modeling & Interactive Policy Simulation for India's NMEO-OP Self-Reliance Strategy
        </p>
      </div>

      {/* Main CTA Card */}
      <Card className="p-8 mb-8 bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-white">CPO Import Policy Simulator</h2>
          <p className="mb-6 text-blue-100">
            Generate professional executive memos analyzing the impact of tariff policies on consumer affordability, 
            farmer profitability, and import dependency using advanced AI-powered forecasting.
          </p>
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100"
          >
            Start Simulation
          </Button>
        </div>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="mb-2">Real-Time Interactive Sliders</h3>
          <p className="text-gray-600 text-sm">
            Drag sliders to instantly visualize policy trade-offs. Watch consumer prices and farmer income curves update in real-time.
          </p>
        </Card>

        <Card className="p-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="mb-2">Agent-Based Modeling</h3>
          <p className="text-gray-600 text-sm">
            Simulate behavior shifts of farmers, traders, investors, consumers, and importers using advanced ABM visualization.
          </p>
        </Card>

        <Card className="p-6">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="mb-2">State-Wise Impact Heatmap</h3>
          <p className="text-gray-600 text-sm">
            Analyze consumer affordability across all Indian states based on income levels and consumption patterns.
          </p>
        </Card>
      </div>

      {/* Additional Features */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <p className="text-sm font-medium text-green-900 mb-1">NMEO-OP Target Calculator</p>
          <p className="text-xs text-green-700">
            Reverse-engineer the policy mix needed to achieve self-reliance goals
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
          <p className="text-sm font-medium text-orange-900 mb-1">Historical Comparison</p>
          <p className="text-xs text-orange-700">
            Learn from 2019-2025 policy decisions and avoid past mistakes
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <p className="text-sm font-medium text-purple-900 mb-1">Sensitivity Analysis</p>
          <p className="text-xs text-purple-700">
            Explainable AI showing mathematical rigor and variable interactions
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <p className="text-sm font-medium text-blue-900 mb-1">Scenario Save & Share</p>
          <p className="text-xs text-blue-700">
            Save and compare multiple scenarios for collaborative policy review
          </p>
        </Card>
      </div>

      {/* Info Section */}
      <div className="text-center text-sm text-gray-600">
        <p>Designed for India's Ministry of Commerce policy analysis</p>
      </div>
    </div>
  );
}
