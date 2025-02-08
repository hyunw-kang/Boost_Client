import React ,{useState,useEffect} from "react";
import Header from "../components/common/Header";
import * as S from "../components/group/styled";

const MakeGroupppage =() => {
    const [isPublic, setIsPublic] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          /*groupName,*/
          /*groupDescription,*/
          isPublic,
          /*password,
          selectedFile,*/
        };
        console.log("Form Data:", formData);
      };
    return(
        <>
            <Header/>
            <S.GroupContainer>
                <S.Title>그룹만들기</S.Title>
                <S.ToggleContainer>
                    <S.ToggleTitle>그룹 공개 선택</S.ToggleTitle>
                    <S.ToggleLabel>공개</S.ToggleLabel>
                    <S.ToggleSwitch>
                     <input
                        type="checkbox"
                        checked={isPublic}
                        onChange={() => setIsPublic(!isPublic)}
                    />
                    <span></span>
                    </S.ToggleSwitch>
                </S.ToggleContainer>
                <S.SubmitButton onClick={handleSubmit}>만들기</S.SubmitButton>
            </S.GroupContainer>
        </>

    )
}

export default MakeGroupppage;
