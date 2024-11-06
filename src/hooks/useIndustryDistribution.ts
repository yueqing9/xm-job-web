import useSWR from 'swr';
import { jobAPI } from '../services/api';

export interface IndustryData {
  name: string;
  count: number;
  percentage: number;
}

export function useIndustryDistribution() {
  const { data, error, isLoading } = useSWR<IndustryData[]>(
    'industry-distribution',
    jobAPI.getIndustryDistribution
  );

  return {
    data,
    isLoading,
    isError: error
  };
}