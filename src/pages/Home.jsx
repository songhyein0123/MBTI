import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">무료 성격 테스트</h1>
      <p className="text-lg text-gray-700 mb-8">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">성격 유형 검사</h2>
          <p>
            자신의 성격 유형을 알아보세요. 간단한 질문들에 답하고 나의 성향을
            파악하세요.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">성격 유형 이해</h2>
          <p>
            각 성격 유형의 특징과 강점을 이해하고, 다른 사람들과의 관계를
            개선하세요.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">팀 평가</h2>
          <p>
            팀의 성격 유형을 분석하고, 더 나은 협업을 위해 서로를 이해하세요.
          </p>
        </div>
      </div>

      <Link
        to="/login"
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        로그인하기
      </Link>
    </div>
  );
};

export default Home;
