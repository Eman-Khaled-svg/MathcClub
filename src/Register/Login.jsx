// Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // مسح الخطأ عند الكتابة
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/auth/login', formData);
      
      // حفظ التوكن في localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // الانتقال للصفحة الرئيسية
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'حدث خطأ في تسجيل الدخول');
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '80px', height: '80px' }}>
                    <img src="../assets/download.jfif" alt="" />
                  </div>
                  <h2 className="fw-bold text-dark mb-2">تسجيل الدخول</h2>
                  <p className="text-muted">مرحباً بك مرة أخرى!</p>
                </div>

                {/* Error Alert */}
                {error && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                    <button type="button" className="btn-close" onClick={() => setError('')}></button>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="bi bi-envelope me-2"></i>
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="bi bi-lock me-2"></i>
                      كلمة المرور
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-lg"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember" />
                      <label className="form-check-label text-muted" htmlFor="remember">
                        تذكرني
                      </label>
                    </div>
                    <Link to="/forgot-password" className="text-primary text-decoration-none small">
                      نسيت كلمة المرور؟
                    </Link>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100 mb-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        جاري تسجيل الدخول...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        تسجيل الدخول
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <span className="text-muted">ليس لديك حساب؟ </span>
                    <Link to="/Register" className="text-primary text-decoration-none fw-bold">
                      سجل الآن
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-4">
              <Link to="/" className="text-muted text-decoration-none">
                <i className="bi bi-arrow-right me-2"></i>
                العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


