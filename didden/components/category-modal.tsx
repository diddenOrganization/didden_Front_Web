import React from 'react';
import { Button, CustomFlowbiteTheme, Modal } from 'flowbite-react';

import { HighCodeInfo } from '@/types/model/tour/HighCodeInfoResponse';
import { MiddleCodeInfo } from '@/types/model/tour/MiddleCodeInfoResponse';
import { MiddleCodeType, MiddleCodeTypeToText } from '@/types/const-objects/MiddleCodeType';
import { HighCodeTypeToText } from '@/types/const-objects/HighCodeType';

const customModalTheme: CustomFlowbiteTheme['modal'] = {
  header: {
    close: {
      icon: 'size-20',
    },
  },
};

export default function CategoryModal({
  openModal,
  closeModal,
  highCodeList,
  middleCodeList,
  selectedCodeList,
  setSelectedCodeList,
}: {
  openModal: boolean;
  closeModal: Function;
  highCodeList: HighCodeInfo[];
  middleCodeList: MiddleCodeInfo[];
  selectedCodeList: MiddleCodeType[];
  setSelectedCodeList: Function;
}) {
  const clickHighCode = (highCode: HighCodeInfo) => {
    const childCodeList: MiddleCodeType[] = [];
    let hasChildCodeList: boolean = false;
    middleCodeList.forEach((middleCode: MiddleCodeInfo) => {
      if (highCode.codeName === middleCode.serviceHighCode) {
        if (selectedCodeList.indexOf(middleCode.codeName) !== -1) {
          childCodeList.push(middleCode.codeName);
          hasChildCodeList = true;
        } else {
          childCodeList.push(middleCode.codeName);
        }
      }
    });

    if (!hasChildCodeList) {
      setSelectedCodeList([...selectedCodeList, ...childCodeList]);
    } else {
      setSelectedCodeList(selectedCodeList.filter((data) => childCodeList.indexOf(data) === -1));
    }
  };

  const clickMiddleCode = (middleCode: MiddleCodeType) => {
    if (selectedCodeList.length > 0) {
      if (selectedCodeList.indexOf(middleCode) !== -1) {
        setSelectedCodeList(selectedCodeList.filter((data) => data !== middleCode));
      } else {
        setSelectedCodeList([...selectedCodeList, middleCode]);
      }
    } else {
      setSelectedCodeList([...selectedCodeList, middleCode]);
    }
  };

  return (
    <Modal show={openModal} onClose={() => closeModal()} theme={customModalTheme}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        {highCodeList.map((highCode: HighCodeInfo, highCodeIndex: number) => (
          <React.Fragment key={highCodeIndex}>
            {highCode.code !== '' && (
              <div className="mb-10" key={highCodeIndex}>
                <span className="text-20 font-bold" onClick={() => clickHighCode(highCode)}>
                  {HighCodeTypeToText(highCode.codeName)}
                </span>
                <div key={`${highCode.codeName}_${highCode}`}>
                  {middleCodeList.map((middleCode: MiddleCodeInfo, middleCodeIndex: number) => (
                    <React.Fragment key={middleCodeIndex}>
                      {highCode.codeName === middleCode.serviceHighCode && (
                        <span
                          className={`mr-7 ${selectedCodeList.indexOf(middleCode.codeName) !== -1 ? 'text-[#7a42f4]' : 'text-black'}`}
                          key={middleCodeIndex}
                          onClick={() => clickMiddleCode(middleCode.codeName)}
                        >
                          {MiddleCodeTypeToText(middleCode.codeName)}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </Modal.Body>
      <Modal.Footer className="justify-center">
        <Button color="light" className="mr-3" onClick={() => setSelectedCodeList([])}>
          초기화
        </Button>
        <Button style={{ backgroundColor: '#7a42f4' }} onClick={() => closeModal(selectedCodeList)}>
          원하는 곳 어디든!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
