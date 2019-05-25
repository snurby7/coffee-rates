import { ICoffeeProfile } from './ICoffeeProfile';

export interface ICoffeePageResponse {
  data: ICoffeeProfile[];
  pageStart: number;
  pageEnd: number;
  totalResults: number;
}
