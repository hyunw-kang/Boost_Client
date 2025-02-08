import React, { useState,useEffect } from "react";
import * as S from "./Styled";

const Search =()=>{
    const [isPublic, setIsPublic] = useState(true);
    return(
        <S.ButtonContainer>
            <S.ToggleButton active={isPublic} onClick={() => setIsPublic(true)}>공개</S.ToggleButton>
            <S.ToggleButton active={!isPublic} onClick={() => setIsPublic(false)}>비공개</S.ToggleButton>

            <S.Dropdown>
                <option>최신순</option>
                <option>댓글순</option>
                <option>공감순</option>
            </S.Dropdown>
        </S.ButtonContainer>
    ) 
}
export default Search;