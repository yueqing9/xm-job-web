import React from 'react';
import { useIndustryDistribution } from '../hooks/useIndustryDistribution';
import { Loader2 } from 'lucide-react';

const IndustryDistribution = () => {
  const { data, isLoading, isError } = useIndustryDistribution();

  if (isLoading) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <p className="text-red-500">加载数据时出错</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <p className="text-gray-500">暂无数据</p>
      </div>
    );
  }

  return (
    <div className="h-[300px] overflow-y-auto">
      <div className="space-y-4">
        {data.map((industry, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{industry.name}</span>
              <span className="text-sm text-gray-500">{industry.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${industry.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryDistribution;