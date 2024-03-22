export const HIGH_CODE_TYPES = {
  자연: 'NATURE',
  관광지인문: 'TOURIST_LIBERAL_ARTS',
  문화시설인문: 'CULTURAL_LIBERAL_ARTS',
  행사_인문: 'EVENT_LIBERAL_ARTS',
  추천코스: 'RECOMMENDED_COURSE',
  레포츠: 'LEPORTS',
  숙박: 'ACCOMMODATION',
  쇼핑: 'SHOPPING',
  음식: 'FOOD',
} as const;

export type HighCodeType = (typeof HIGH_CODE_TYPES)[keyof typeof HIGH_CODE_TYPES];

export const HighCodeTypeToText = (key: HighCodeType) => {
  switch (key) {
    case HIGH_CODE_TYPES.자연:
      return '자연';
    case HIGH_CODE_TYPES.관광지인문:
      return '관광지';
    case HIGH_CODE_TYPES.문화시설인문:
      return '문화시설';
    case HIGH_CODE_TYPES.행사_인문:
      return '행사';
    case HIGH_CODE_TYPES.추천코스:
      return '추천코스';
    case HIGH_CODE_TYPES.레포츠:
      return '레포츠';
    case HIGH_CODE_TYPES.숙박:
      return '숙박';
    case HIGH_CODE_TYPES.쇼핑:
      return '쇼핑';
    case HIGH_CODE_TYPES.음식:
      return '음식';
    default:
      return '';
  }
};

const HighCodeTypeArray = Object.values(HIGH_CODE_TYPES);

export const HighCodeTypeArraySet = new Set(HighCodeTypeArray);

export const HighCodeTypeOptions = HighCodeTypeArray.map((highCodeType) => ({
  value: highCodeType,
  text: HighCodeTypeToText(highCodeType),
}));
