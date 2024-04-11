import React from 'react';

export default function shoppingDetail({ detail }: any) {
  return (
    <React.Fragment>
      <div>
        <p>
          주소 : {detail?.address} {detail?.area}
        </p>
        <p>연락처 : {detail?.infocenterlodging}</p>
        <p>입실시간 : {detail?.checkintime}</p>
        <p>퇴실시간 : {detail?.checkouttime}</p>
        <p>주차시설 : {detail?.parkinglodging}</p>
        <p>예약안내홈페이지 : {detail?.reservationurl}</p>
        <p>부대시설 : {detail?.subfacility}</p>
      </div>
    </React.Fragment>
  );
}
