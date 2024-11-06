import React from 'react';
import { LineChart, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <LineChart className="w-8 h-8 text-indigo-600" />
            <h1 className="text-xl font-semibold">南京招聘数据分析</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索职位、公司..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600">数据概览</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">职位分析</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">薪资趋势</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">企业分布</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;