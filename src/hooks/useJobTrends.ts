import useSWR from 'swr';
import { jobAPI } from '../services/api';

export interface TrendData {
  date: string;
  jobCount: number;
  averageSalary: number;
}

export function useJobTrends() {
  const { data, error, isLoading } = useSWR<TrendData[]>(
    'job-trends',
    jobAPI.getJobTrends
  );

  return {
    data,
    isLoading,
    isError: error
  };
}