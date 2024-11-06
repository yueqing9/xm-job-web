import React from 'react';
import { useJobTrends } from '../hooks/useJobTrends';
import { Loader2 } from 'lucide-react';

const JobTrends = () => {
  const { data, isLoading, isError } = useJobTrends();

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
      {/* 这里可以使用 Chart.js 或其他图表库来展示趋势图 */}
      <div className="space-y-6">
        {data.map((point, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">{point.date}</span>
              <span className="text-sm font-medium">{point.jobCount} 个职位</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ 
                  width: `${(point.jobCount / Math.max(...data.map(d => d.jobCount))) * 100}%` 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobTrends;