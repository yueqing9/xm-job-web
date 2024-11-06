import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Building2, TrendingUp, Users, Briefcase } from 'lucide-react';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import SalaryChart from '../components/SalaryChart';
import IndustryDistribution from '../components/IndustryDistribution';
import JobTrends from '../components/JobTrends';
import TopCompanies from '../components/TopCompanies';
import { useStats } from '../hooks/useStats';

const Dashboard = () => {
  const { user } = useAuth();
  const { stats, isLoading } = useStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">数据概览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="总职位数"
              value={stats?.totalJobs.toLocaleString() || '0'}
              icon={<Briefcase className="w-6 h-6 text-indigo-600" />}
              trend={stats?.trends.jobs || '+0%'}
              isLoading={isLoading}
            />
            <StatCard
              title="平均薪资"
              value={`¥${stats?.averageSalary.toLocaleString() || '0'}/月`}
              icon={<TrendingUp className="w-6 h-6 text-indigo-600" />}
              trend={stats?.trends.salary || '+0%'}
              isLoading={isLoading}
            />
            <StatCard
              title="活跃企业"
              value={stats?.activeCompanies.toLocaleString() || '0'}
              icon={<Building2 className="w-6 h-6 text-indigo-600" />}
              trend={stats?.trends.companies || '+0%'}
              isLoading={isLoading}
            />
            <StatCard
              title="覆盖行业"
              value={stats?.industriesCount.toLocaleString() || '0'}
              icon={<Users className="w-6 h-6 text-indigo-600" />}
              trend={stats?.trends.industries || '+0%'}
              isLoading={isLoading}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">薪资分布</h3>
            <SalaryChart />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">行业分布</h3>
            <IndustryDistribution />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">职位趋势</h3>
            <JobTrends />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">热门企业</h3>
            <TopCompanies />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;