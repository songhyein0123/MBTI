import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const updatedUser = await updateProfile({ nickname }, token);

      // 사용자 상태를 업데이트
      setUser(updatedUser);

      // 성공 메시지 표시
      setFeedbackMessage("프로필이 성공적으로 업데이트되었습니다.");
    } catch (error) {
      console.error("프로필 업데이트 중 오류 발생:", error);
      setFeedbackMessage(
        "프로필 업데이트 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    }
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              required
            />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
        {feedbackMessage && <p>{feedbackMessage}</p>}
      </div>
    </div>
  );
};

export default Profile;
