import React from 'react';

export default function foodDetail({ detail }: any) {
  return (
    <React.Fragment>
      <div>
        <p>
          주소 : {detail?.address} {detail?.area}
        </p>
        <p>연락처 : {detail?.cellphone}</p>
        <p>대표메뉴 : {detail?.firstmenu}</p>
        <p>영업시간 : {detail?.opentimefood}</p>
        <p>주차시설 : {detail?.parkingfood}</p>
        <p>쉬는날 : {detail?.restdatefood}</p>
      </div>
    </React.Fragment>
  );
}
