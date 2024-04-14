import React from 'react';

export default function leportsDetail({ detail }: any) {
  return (
    <React.Fragment>
      <div>
        <p>
          주소 : {detail?.address} {detail?.area}
        </p>
        <p>연락처 : {detail?.cellphone}</p>
        <p>애완동물동반가능정보 : {detail?.chkpetleports}</p>
        <p>개장시간 : {detail?.openperiod}</p>
        <p>
          예약안내 : <span dangerouslySetInnerHTML={{ __html: detail?.reservation }} />
        </p>
        <p>이용시간 : {detail?.usetimeleports}</p>
      </div>
    </React.Fragment>
  );
}
