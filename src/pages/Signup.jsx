import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      // 회원가입 API 호출
      const response = await register(formData);

      if (response) {
        // 회원가입 성공 후 로그인 페이지로 리다이렉트
        navigate("/login");
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div className="text-center mt-4">
          <p className="text-gray-600">
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
