import { Card } from './ui/card';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';

interface Preset {
  name: string;
  description: string;
  tariff: number;
  globalPrice: number;
  yieldGap: number;
  volatilityIndex: number;
  color: string;
}

interface QuickPresetsProps {
  onLoadPreset: (preset: Omit<Preset, 'name' | 'description' | 'color'>) => void;
}

export function QuickPresets({ onLoadPreset }: QuickPresetsProps) {
  const presets: Preset[] = [
    {
      name: 'Conservative Baseline',
      description: 'Low tariff, stable global prices - consumer-friendly approach',
      tariff: 8,
      globalPrice: 1050,
      yieldGap: 58,
      volatilityIndex: 25,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'NMEO-OP Aggressive',
      description: 'High tariff, focus on self-reliance - farmer upliftment priority',
      tariff: 18,
      globalPrice: 1180,
      yieldGap: 52,
      volatilityIndex: 45,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Crisis Scenario',
      description: 'Global supply shock simulation - stress test for resilience',
      tariff: 12,
      globalPrice: 1420,
      yieldGap: 60,
      volatilityIndex: 85,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Balanced Approach',
      description: 'Moderate tariff balancing all three objectives',
      tariff: 12,
      globalPrice: 1180,
      yieldGap: 55,
      volatilityIndex: 50,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-yellow-600" />
        <h3>Quick Scenario Presets</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Load pre-configured scenarios to explore different policy approaches
      </p>

      <div className="grid grid-cols-2 gap-3">
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => onLoadPreset({
              tariff: preset.tariff,
              globalPrice: preset.globalPrice,
              yieldGap: preset.yieldGap,
              volatilityIndex: preset.volatilityIndex
            })}
            className="text-left p-3 rounded-lg border-2 hover:border-indigo-400 transition-all hover:shadow-md group"
          >
            <div className={`w-full h-1 rounded-full bg-gradient-to-r ${preset.color} mb-2`} />
            <p className="font-medium text-sm mb-1 group-hover:text-indigo-600">
              {preset.name}
            </p>
            <p className="text-xs text-gray-600 mb-2">
              {preset.description}
            </p>
            <div className="flex gap-2 text-xs text-gray-500">
              <span>T: {preset.tariff}%</span>
              <span>P: ${preset.globalPrice}</span>
              <span>G: {preset.yieldGap}%</span>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}
