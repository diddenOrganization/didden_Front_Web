import React from 'react';

export default function festivalDetail({ detail }: any) {
  return (
    <React.Fragment>
      <div>
        <p>
          주소 : {detail?.address} {detail?.area}
        </p>
        <p>연락처 : {detail?.cellphone}</p>
        <p>행사 시작일 : {detail?.eventstartdate}</p>
        <p>행사 종료일 : {detail?.eventenddate}</p>
        <p>이용 요금 : {detail?.usetimefestival}</p>
      </div>
    </React.Fragment>
  );
}
