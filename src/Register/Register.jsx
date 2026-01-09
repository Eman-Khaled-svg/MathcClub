import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // التحقق من تطابق كلمات المرور
    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      // حفظ التوكن في localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // الانتقال للصفحة الرئيسية
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'حدث خطأ في التسجيل');
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
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-person-plus text-success" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h2 className="fw-bold text-dark mb-2">إنشاء حساب جديد</h2>
                  <p className="text-muted">انضم إلينا اليوم!</p>
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
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      <i className="bi bi-person me-2"></i>
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="أدخل اسمك الكامل"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
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

                  <div className="mb-3">
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
                      minLength={6}
                    />
                    <small className="text-muted">يجب أن تكون 6 أحرف على الأقل</small>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="bi bi-lock-fill me-2"></i>
                      تأكيد كلمة المرور
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control form-control-lg"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label text-muted small" htmlFor="terms">
                      أوافق على <Link to="/terms" className="text-primary">الشروط والأحكام</Link> و
                      <Link to="/privacy" className="text-primary"> سياسة الخصوصية</Link>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-success btn-lg w-100 mb-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        جاري إنشاء الحساب...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check-circle me-2"></i>
                        إنشاء حساب
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <span className="text-muted">لديك حساب بالفعل؟ </span>
                    <Link to="/login" className="text-primary text-decoration-none fw-bold">
                      سجل دخولك
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

export default Register;