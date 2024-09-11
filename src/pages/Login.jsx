import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // 로그인 API 호출
      const response = await login(formData);

      if (response) {
        // 프로필 정보를 가져와서 사용자 상태를 업데이트
        const userProfile = await getUserProfile(response.token);
        setUser(userProfile);

        // 로그인 성공 시 홈으로 이동
        navigate("/");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="text-center mt-4">
          <p className="text-gray-600">
            계정이 없으신가요?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
