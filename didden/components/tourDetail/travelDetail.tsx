import React from 'react';

export default function travelDetail({ detail }: any) {
  return (
    <React.Fragment>
      <div>
        <p>
          주소 : {detail?.address} {detail?.area}
        </p>
        <p>연락처 : {detail?.cellphone}</p>
        <p>문의 및 안내 : {detail?.infocentertourcourse}</p>
        <p>코스일정 : {detail?.schedule}</p>
        <p>코스총소요시간 : {detail?.taketime}</p>
        <p>코스테마 : {detail?.theme}</p>
      </div>
    </React.Fragment>
  );
}
