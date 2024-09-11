import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Props 로 꼭 children 만 받을 필요는 없답니다.
const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();

  // 이곳에서 로그인 하지 않은 사용자를 login 페이지로 보내줄 거에요.
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/profile">프로필페이지</Link>
          <Link to="/test">테스트페이지</Link>
          <Link to="/results">결과페이지</Link>
          <div className="space-x-4">
            {user ? (
              <>
                <span>환영합니다, {user.name}!</span>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
