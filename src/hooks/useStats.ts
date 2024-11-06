import useSWR from 'swr';
import { jobAPI } from '../services/api';

export interface Stats {
  totalJobs: number;
  averageSalary: number;
  activeCompanies: number;
  industriesCount: number;
  trends: {
    jobs: string;
    salary: string;
    companies: string;
    industries: string;
  };
}

export function useStats() {
  const { data, error, isLoading } = useSWR<Stats>('stats', jobAPI.getStats);

  return {
    stats: data,
    isLoading,
    isError: error
  };
}