export const MIDDLE_CODE_TYPES = {
  자연관광지: 'NATURAL_TOURIST',
  관광자원: 'TOURISM_RESOURCES',
  역사관광지: 'HISTORICAL_TOURIST',
  휴양관광지: 'RECREATIONAL_RESORT',
  체험관광지: 'EXPERIENCE_TOURIST',
  산업관광지: 'INDUSTRIAL_TOURIST',
  건축_조형물: 'ARCHITECTURE_SCULPTURES',
  문화시설: 'CULTURAL_FACILITIES',
  축제: 'FESTIVAL',
  공연_행사: 'PERFORMANCE_EVENT',
  가족코스: 'FAMILY_COURSE',
  나홀로코스: 'SOLO_COURSE',
  힐링코스: 'HEALING_COURSE',
  도보코스: 'WALKING_COURSE',
  캠핑코스: 'CAMPING_COURSE',
  맛코스: 'TASTE_COURSE',
  레포츠소개: 'LEPORTS_COLLECTION',
  육상_레포츠: 'ATHLETICS_LEPORTS',
  수상_레포츠: 'WATER_LEPORTS',
  항공_레포츠: 'AIR_SPORTS',
  복합_레포츠: 'COMBINED_LEPORTS',
  숙박시설: 'ACCOMMODATION',
  쇼핑: 'SHOPPING',
  음식점: 'FOOD',
} as const;

export type MiddleCodeType = (typeof MIDDLE_CODE_TYPES)[keyof typeof MIDDLE_CODE_TYPES];

export const MiddleCodeTypeToText = (key: MiddleCodeType) => {
  switch (key) {
    case MIDDLE_CODE_TYPES.자연관광지:
      return '자연관광지';
    case MIDDLE_CODE_TYPES.관광자원:
      return '관광자원';
    case MIDDLE_CODE_TYPES.역사관광지:
      return '역사관광지';
    case MIDDLE_CODE_TYPES.휴양관광지:
      return '휴양관광지';
    case MIDDLE_CODE_TYPES.체험관광지:
      return '체험관광지';
    case MIDDLE_CODE_TYPES.산업관광지:
      return '산업관광지';
    case MIDDLE_CODE_TYPES.건축_조형물:
      return '건축';
    case MIDDLE_CODE_TYPES.문화시설:
      return '문화시설';
    case MIDDLE_CODE_TYPES.축제:
      return '축제';
    case MIDDLE_CODE_TYPES.공연_행사:
      return '공연';
    case MIDDLE_CODE_TYPES.가족코스:
      return '가족코스';
    case MIDDLE_CODE_TYPES.나홀로코스:
      return '나홀로코스';
    case MIDDLE_CODE_TYPES.힐링코스:
      return '힐링코스';
    case MIDDLE_CODE_TYPES.도보코스:
      return '도보코스';
    case MIDDLE_CODE_TYPES.캠핑코스:
      return '캠핑코스';
    case MIDDLE_CODE_TYPES.맛코스:
      return '맛코스';
    case MIDDLE_CODE_TYPES.레포츠소개:
      return '레포츠소개';
    case MIDDLE_CODE_TYPES.육상_레포츠:
      return '육상';
    case MIDDLE_CODE_TYPES.수상_레포츠:
      return '수상';
    case MIDDLE_CODE_TYPES.항공_레포츠:
      return '항공';
    case MIDDLE_CODE_TYPES.복합_레포츠:
      return '복합';
    case MIDDLE_CODE_TYPES.숙박시설:
      return '숙박시설';
    case MIDDLE_CODE_TYPES.쇼핑:
      return '쇼핑';
    case MIDDLE_CODE_TYPES.음식점:
      return '음식점';
    default:
      return '';
  }
};

const MiddleCodeTypeArray = Object.values(MIDDLE_CODE_TYPES);

export const MiddleCodeTypeArraySet = new Set(MiddleCodeTypeArray);

export const MiddleCodeTypeOptions = MiddleCodeTypeArray.map((middleCodeType) => ({
  value: middleCodeType,
  text: MiddleCodeTypeToText(middleCodeType),
}));
