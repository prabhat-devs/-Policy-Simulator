import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Users, TrendingUp, DollarSign } from 'lucide-react';

interface TradeOffScorecardProps {
  consumerWelfare: number;
  farmerUpliftment: number;
  fiscalStability: number;
}

export function TradeOffScorecard({ consumerWelfare, farmerUpliftment, fiscalStability }: TradeOffScorecardProps) {
  const overallScore = Math.round((consumerWelfare + farmerUpliftment + fiscalStability) / 3);

  const getScoreColor = (score: number) => {
    if (score >= 70) return { bg: 'bg-green-500', text: 'text-green-700', border: 'border-green-200' };
    if (score >= 50) return { bg: 'bg-yellow-500', text: 'text-yellow-700', border: 'border-yellow-200' };
    return { bg: 'bg-red-500', text: 'text-red-700', border: 'border-red-200' };
  };

  const overallColors = getScoreColor(overallScore);

  return (
    <Card className="p-6">
      <h3 className="mb-4">Policy Trade-Off Scorecard</h3>
      <p className="text-sm text-gray-600 mb-6">
        Quick assessment of policy efficacy across three key dimensions
      </p>

      {/* Overall Score */}
      <div className={`p-4 rounded-lg border-2 ${overallColors.border} mb-6`}>
        <p className="text-sm text-gray-600 mb-2">Overall Policy Score</p>
        <div className="flex items-end gap-3">
          <div className="text-4xl font-bold">{overallScore}</div>
          <div className="text-lg text-gray-500 mb-1">/100</div>
        </div>
        <Progress value={overallScore} className="h-2 mt-3" />
      </div>

      {/* Individual Scores */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium">Consumer Welfare</span>
            <span className="ml-auto text-sm font-bold">{consumerWelfare}/100</span>
          </div>
          <Progress value={consumerWelfare} className="h-2" />
          <p className="text-xs text-gray-600 mt-1">
            {consumerWelfare >= 70 ? 'Minimal price impact on consumers' :
             consumerWelfare >= 50 ? 'Moderate affordability concerns' :
             'Significant consumer price burden'}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium">Farmer Upliftment</span>
            <span className="ml-auto text-sm font-bold">{farmerUpliftment}/100</span>
          </div>
          <Progress value={farmerUpliftment} className="h-2" />
          <p className="text-xs text-gray-600 mt-1">
            {farmerUpliftment >= 70 ? 'Strong incentive for domestic production' :
             farmerUpliftment >= 50 ? 'Moderate farmer support' :
             'Insufficient farmer income protection'}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium">Fiscal Stability</span>
            <span className="ml-auto text-sm font-bold">{fiscalStability}/100</span>
          </div>
          <Progress value={fiscalStability} className="h-2" />
          <p className="text-xs text-gray-600 mt-1">
            {fiscalStability >= 70 ? 'Reduced import bill and forex outflow' :
             fiscalStability >= 50 ? 'Moderate impact on trade balance' :
             'High import dependency persists'}
          </p>
        </div>
      </div>
    </Card>
  );
}
