import '../../styles/CommunitySearch/CommunitySearchHeader.css'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface PropFunc{
    onTextFieldClick: () => void;
}

function CommunitySearchHeader({onTextFieldClick}: PropFunc){

        const navigate = useNavigate();

        const handleMyPage = () => {
            navigate('/community/myArticles')
        }
    
    
        return(
            <>
            <div className='community-search-container'>
                <div className='search-my-profile' onClick={handleMyPage}>MY</div> {/* 누르면 마이페이지로 이동*/}
            </div>

            <TextField id="outlined-basic"  variant="outlined" type="search" placeholder='검색'
            sx={{
                marginLeft: '5%',
                marginTop: '5%', 
                width: '90%',
                '& .MuiOutlinedInput-root': {
                    height: '2.7rem' // 여기서 높이를 설정
                },
                backgroundColor:'#F8FAF8'
            }}
            onClick={onTextFieldClick}
            />
            {/* <Button variant="contained" sx={{color: 'white', backgroundColor: '#5B8E55', marginTop:'5%', marginRight:'5%', marginLeft:'2%', height: '2.5rem'}}>검색</Button> */}
            </> 
        )
    
}


export default CommunitySearchHeader;
