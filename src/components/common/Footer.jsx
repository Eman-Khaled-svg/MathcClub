import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-5">
      <div className="container">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-4">
              <span className="fs-1">🎓</span>
              <h4 className="fw-bold mb-0">منصة التعليم الهندسي</h4>
            </div>
            <p className="text-white-50 small">
              منصة تعليمية متخصصة في تقديم محتوى هندسي عالي الجودة 
              لطلاب كليات الهندسة بمختلف أنواعها
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">روابط سريعة</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none hover-text-white transition">
                  الرئيسية
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/college/engineering" className="text-white-50 text-decoration-none hover-text-white transition">
                  هندسة عام
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/college/azhar-engineering" className="text-white-50 text-decoration-none hover-text-white transition">
                  هندسة أزهر
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/college/technical-education" className="text-white-50 text-decoration-none hover-text-white transition">
                  تربية فنية
                </Link>
              </li>
            </ul>
          </div>

          {/* Colleges */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">الكليات</h5>
            <ul className="list-unstyled text-white-50 small">
              <li>• هندسة مدني</li>
              <li>• هندسة ميكانيكا</li>
              <li>• هندسة كهرباء</li>
              <li>• هندسة عمارة</li>
              <li>• رسم فني</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">تواصل معنا</h5>
            <ul className="list-unstyled text-white-50 small mb-4">
              <li className="mb-2">📧 info@engineering-edu.com</li>
              <li className="mb-2">📱 +20 123 456 7890</li>
              <li className="mb-2">📍 القاهرة، مصر</li>
            </ul>

            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-light btn-floating rounded-circle" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-floating rounded-circle" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-floating rounded-circle" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="my-5 border-secondary" />
        <div className="text-center text-white-50 small">
          <p className="mb-0">© 2026 منصة التعليم الهندسي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;