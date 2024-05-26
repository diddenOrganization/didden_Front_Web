import { HighCodeType } from '@/types/const-objects/HighCodeType';
import { MiddleCodeType } from '@/types/const-objects/MiddleCodeType';

export interface TourInfo {
  contentId: number;
  title: string;
  highCode: HighCodeType;
  middleCode: MiddleCodeType;
  serviceCode: string;
  address: string;
  detailImage?: string;
  
}
