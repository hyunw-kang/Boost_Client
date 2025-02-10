import React ,{useState} from "react";
import Header from "../components/common/Header";
import * as S from "../components/group/styled";

console.log(S.GroupContainer);
console.log(S.Title);
console.log(S.ToggleContainer);

const MakeGroupPage =() => {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isPublic, setIsPublic] = useState(true);

    const addTag = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
          if (!tags.includes(inputValue.trim())) {
            setTags([...tags, inputValue.trim()]);
          }
          setInputValue("");
        }
      };
    
      const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
      };
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          /*groupName,*/
          /*groupDescription,*/
          isPublic,
          /*password,
          selectedFile,*/
          tags,
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
                <S.TagContainer>
                    {tags.map((tag, index) => (
                        <S.Tag key={index}>
                            {tag}
                             <S.RemoveButton onClick={() => removeTag(tag)}>×</S.RemoveButton>
                        </S.Tag>
                    ))}
                    <S.TagInput
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={addTag}
                        placeholder="태그 입력 후 Enter"
                    />
                </S.TagContainer>
                <S.SubmitButton onClick={handleSubmit}>만들기</S.SubmitButton>
            </S.GroupContainer>
        </>

    )
}

export default MakeGroupPage;
