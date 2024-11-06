import React from 'react';
import { useSalaryDistribution } from '../hooks/useSalaryDistribution';
import { Loader2 } from 'lucide-react';

const SalaryChart = () => {
  const { data, isLoading, isError } = useSalaryDistribution();

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
    <div className="h-[300px]">
      {/* 这里可以使用 Chart.js 或其他图表库来展示数据 */}
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span className="w-24 text-sm text-gray-600">{item.range}</span>
            <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${(item.count / Math.max(...data.map(d => d.count))) * 100}%` }}
              ></div>
            </div>
            <span className="w-16 text-sm text-gray-600 text-right">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryChart;