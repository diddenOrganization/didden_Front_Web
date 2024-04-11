import React from 'react';

export default function tourismDetail({ detail }: any) {
  return (
    <React.Fragment>
      <div>
        <p>
          주소 : {detail?.address} {detail?.area}
        </p>
        <p>연락처 : {detail?.cellphone}</p>
        <p>애완동물 동반 가능 정보 : {detail?.chkpet}</p>
        <p>문의 및 안내 : {detail?.infocenter}</p>
        <p>개장일 : {detail?.opendate}</p>
        <p>주차시설 : {detail?.parking}</p>
        <p>쉬는날 : {detail?.restdate}</p>
        <p>이용시간 : {detail?.usetime}</p>
      </div>
    </React.Fragment>
  );
}
