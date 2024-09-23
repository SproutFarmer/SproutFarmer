import Modal from 'react-modal'
import { useEffect, useRef, useState } from 'react';
import '../../styles/RegisterGarden/gardenModal.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DaumPostcodeEmbed from 'react-daum-postcode';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setLocationData, setPlantData } from '../../store/store';
import { RootState } from '../../store/store';

interface GardenModalProps {
    placeId: number |null;
    onClose: () => void; // onClose는 함수 타입
    onLoading: () => void;
}

const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      width: "100%",
      zIndex: 10,
    },
    content: {
      width: "100%",
      height: "40%",
      zIndex: 150,
      position: "absolute",
      top: "72.7%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
    },
};

function GardenModal({ placeId, onClose, onLoading }: GardenModalProps) {
  const dispatch = useDispatch();
  const addressRef = useRef<HTMLInputElement>(null); // 주소 입력 필드 참조
  const [isScriptLoaded, setIsScriptLoaded] = useState(false); // 스크립트 로드 상태
  const [postcodeData, setPostcodeData] = useState<any>(null); // 우편번호 데이터 상태
  const farmData = useSelector((state: RootState) => state.farmSelect.farm)

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;

    script.onload = () => {
      setIsScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePostcode = () => {
    if (window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: function (data: any) {
          let addr = '';

          if (data.userSelectedType === 'R') {
            addr = data.roadAddress;
          } else {
            addr = data.jibunAddress;
          }
          
          // post요청 보낼것들 console로 찍어보기
          // console.log(data.sido)  //도
          // console.log(data.sigungu)  // 시
          // console.log(data.bname1) //법정리의 읍/면 이름 ("동"지역일 경우에는 공백, "리"지역일 경우에는 "읍" 또는 "면" 정보가 들어갑니다.)
          // console.log(data.bname2)
          // console.log(data.bunji)
          // console.log(data.jibunAddress) //
          // console.log(data.zonecode)
    

           // 우편번호 데이터 저장
           setPostcodeData({
            sido: data.sido,
            sigungu: data.sigungu,
            bname1: data.bname1,
            bname2: data.bname2,
            jibun: data.jibunAddress,
            zonecode: data.zonecode,
          });


          if (addressRef.current) {
            addressRef.current.value = addr; // 주소 필드에 값 설정
            dispatch(setPlantData(addr))
          }
        }
      }).open();
    }
  };

  const handleSubmit = async () => {
    if (postcodeData) {
      const payload = {
        placeId,
        address: {
          sido: postcodeData.sido,
          sigungu: postcodeData.sigungu,
          bname1: postcodeData.bname1,
          bname2: postcodeData.bname2,
          jibun: postcodeData.jibun,
          zonecode: postcodeData.zonecode,
        }
      };

      try {
        const response = await axios.post('/your-endpoint', payload);
        console.log(response.data); // 응답 처리
        onClose(); // 모달 닫기
      } catch (error) {
        console.error("Error posting data:", error);
      }
    }
  };

  return (
    <Modal isOpen={true} style={customModalStyles} onRequestClose={onClose}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
        <div className='instruction'>텃밭에 적합한 작물을 알려드려요</div>
        <div className='box-color'>
          <div className='box-title'>텃밭</div>
          <div className='box-content'>{farmData}</div>
        </div>
        <div className='box-color'>
          <div className='box-title'>위치</div>
          <div className='box-content'>
            <TextField
              id="sample2_address"
              variant="standard"
              inputRef={addressRef}
              sx={{
              '& .MuiInput-underline:before': {
                borderBottom: 'none', // 비활성화 상태에서의 밑줄 제거
              },
              '& .MuiInput-underline:after': {
                borderBottom: 'none', // 활성화 상태에서의 밑줄 제거
              },
            }}
              style={{ flex: 1, position: 'absolute', left: '25%' }}
            />
            <Button
              variant="contained"
              onClick={handlePostcode}
              color="success"
              disabled={!isScriptLoaded} // 스크립트가 로드되기 전에는 버튼 비활성화
              sx={{opacity:1, position:'absolute', left: '70%'}}
              
            >
              주소 찾기
            </Button>
          </div>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
          <ButtonGroup sx={{ width: '100%', padding: 0, margin: 0, boxSizing: 'border-box' }}>
            <Button
              sx={{
                backgroundColor: 'white',
                border: '1px solid #E2E2E2',
                color: '#71717A',
                padding: '10px 20px',
                flexGrow: 1,
                width: '50%',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
              onClick={onClose}
            >
              취소
            </Button>
            <Button
              sx={{
                backgroundColor: '#B0D085',
                border: '1px solid #E2E2E2',
                color: 'white',
                padding: '10px 20px',
                flexGrow: 1,
                width: '50%',
                '&:hover': {
                  backgroundColor: '#A0C075',
                },
              }}
              onClick={() => {
                // 선택완료 버튼 클릭 시 동작 추가
                // 예: 주소를 상위 컴포넌트로 전달하거나 상태 업데이트
                handleSubmit();  // post 요청 보내기
                // onClose();
                onLoading();
              }}
            >
              선택완료
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Modal>
  );
}

export default GardenModal;
