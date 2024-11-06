import axios from 'axios';

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API接口
export const jobAPI = {
  // 获取统计数据
  getStats: () => axiosInstance.get('/stats'),
  
  // 获取薪资分布数据
  getSalaryDistribution: () => axiosInstance.get('/salary-distribution'),
  
  // 获取行业分布数据
  getIndustryDistribution: () => axiosInstance.get('/industry-distribution'),
  
  // 获取职位趋势数据
  getJobTrends: () => axiosInstance.get('/job-trends'),
  
  // 获取热门公司数据
  getTopCompanies: () => axiosInstance.get('/top-companies')
};

export const api = axiosInstance;

export default api;