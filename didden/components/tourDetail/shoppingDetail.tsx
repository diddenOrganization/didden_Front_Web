import React from 'react';

export default function hotelDetail({ detail }: any) {
  return (
    <React.Fragment>
      <div>
        <p>
          주소 : {detail?.address} {detail?.area}
        </p>
        <p>연락처 : {detail?.cellphone}</p>
        <p>영업시간 : {detail?.opentime}</p>
        <p>주차시설 : {detail?.parkingshopping}</p>
        <p>쉬는날 : {detail?.restdateshopping}</p>
        <p>판매품목 : {detail?.saleitem}</p>
      </div>
    </React.Fragment>
  );
}
