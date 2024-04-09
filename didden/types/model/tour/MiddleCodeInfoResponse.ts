import { HighCodeType } from '@/types/const-objects/HighCodeType';
import { MiddleCodeType } from '@/types/const-objects/MiddleCodeType';

export interface MiddleCodeInfo {
  code: string;
  title: string;
  contentTypeCode: string;
  codeName: MiddleCodeType;
  serviceHighCode: HighCodeType;
}
