export const CONTENT_CODE_TYPES = {
  관광지1: 'TOURISM_TYPE_A01',
  관광지2: 'TOURISM_TYPE_A02',
  문화시설: 'CULTURAL_FACILITIES_TYPE',
  행사_공연_축제: 'FESTIVAL_TYPE',
  여행코스: 'TRAVEL_TYPE',
  레포츠: 'LEPORTS_TYPE',
  숙박: 'HOTEL_TYPE',
  쇼핑: 'SHOPPING_TYPE',
  음식: 'FOOD_TYPE',
} as const;

export type ContentCodeType = (typeof CONTENT_CODE_TYPES)[keyof typeof CONTENT_CODE_TYPES];

export const ContentCodeTypeToText = (key: ContentCodeType) => {
  switch (key) {
    case CONTENT_CODE_TYPES.관광지1:
      return '관광지';
    case CONTENT_CODE_TYPES.관광지2:
      return '관광지';
    case CONTENT_CODE_TYPES.문화시설:
      return '문화시설';
    case CONTENT_CODE_TYPES.행사_공연_축제:
      return '행사';
    case CONTENT_CODE_TYPES.여행코스:
      return '여행코스';
    case CONTENT_CODE_TYPES.레포츠:
      return '레포츠';
    case CONTENT_CODE_TYPES.숙박:
      return '숙박';
    case CONTENT_CODE_TYPES.쇼핑:
      return '쇼핑';
    case CONTENT_CODE_TYPES.음식:
      return '음식';
    default:
      return '';
  }
};

const ContentCodeTypeArray = Object.values(CONTENT_CODE_TYPES);

export const ContentCodeTypeArraySet = new Set(ContentCodeTypeArray);

export const ContentCodeTypeOptions = ContentCodeTypeArray.map((contentCodeType) => ({
  value: contentCodeType,
  text: ContentCodeTypeToText(contentCodeType),
}));
