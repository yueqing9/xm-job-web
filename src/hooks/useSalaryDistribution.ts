import useSWR from 'swr';
import { jobAPI } from '../services/api';

export interface SalaryData {
  range: string;
  count: number;
}

export function useSalaryDistribution() {
  const { data, error, isLoading } = useSWR<SalaryData[]>(
    'salary-distribution',
    jobAPI.getSalaryDistribution
  );

  return {
    data,
    isLoading,
    isError: error
  };
}