import React from 'react';
import { jobAPI } from '../services/api';
import useSWR from 'swr';
import { Loader2 } from 'lucide-react';

interface Company {
  name: string;
  jobs: number;
  trend: string;
}

const TopCompanies = () => {
  const { data, error, isLoading } = useSWR<Company[]>('top-companies', jobAPI.getTopCompanies);

  if (isLoading) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
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
    <div className="space-y-4">
      {data.map((company, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-600">{index + 1}</span>
            <span className="font-medium">{company.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{company.jobs} 个职位</span>
            <span className="text-sm text-green-600">{company.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCompanies;