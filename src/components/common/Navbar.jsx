import { Link, useLocation } from 'react-router-dom';
// import '../public/css/all.min.css';
function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/college/engineering', label: 'هندسة عام' },
    { path: '/college/azhar-engineering', label: 'هندسة أزهر' },
    { path: '/college/technical-education', label: 'تربية فنية' },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-primary shadow-lg sticky-top" dir="rtl">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-3 text-white" to="/">
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
            <span className="fs-3"><i className="fa-solid fa-graduation-cap" style={{color:'blue'}}></i></span>
          </div>
          <div>
            <span className="fw-bold fs-4">منصة التعليم الهندسي</span>
            <p className="mb-0 small opacity-75">تعلم بذكاء، انجح بتميز</p>
          </div>
        </Link>

        {/* Toggler للموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="فتح/إغلاق القائمة"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* المحتوى اللي بي collaps في الموبايل */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* الروابط الوسط */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className={`nav-link text-white fw-semibold px-3 py-2 rounded-3 ${
                    isActive(link.path)
                      ? 'bg-white bg-opacity-25 active'
                      : 'opacity-75 hover-bg-white hover-bg-opacity-10'
                  }`}
                  to={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

       <div className="d-flex gap-2" dir="rtl">
  <Link 
    to="/"
    className="btn btn-light text-primary fw-bold shadow-sm text-decoration-none"
    aria-label="ابدأ رحلة التعلم"
  >
    ابدأ التعلم
  </Link>
  
  <Link 
    to="/Login"
    className="btn btn-outline-light fw-semibold text-decoration-none"
    aria-label="تسجيل الدخول إلى حسابك"
  >
    تسجيل الدخول
  </Link>
</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;