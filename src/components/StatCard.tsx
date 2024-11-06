import React from 'react';
import { Loader2 } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  isLoading?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, isLoading }) => {
  const isPositive = trend.startsWith('+');
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-indigo-50 rounded-lg">
          {icon}
        </div>
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
        ) : (
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      {isLoading ? (
        <div className="h-8 bg-gray-200 rounded animate-pulse mt-1"></div>
      ) : (
        <p className="text-2xl font-semibold mt-1">{value}</p>
      )}
    </div>
  );
};

export default StatCard;