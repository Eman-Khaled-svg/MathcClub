import { Link } from 'react-router-dom';
import colleges from '../data/Collages';

function Home() {

  return (
    <div className="min-vh-100" dir="rtl">
      {/* Bootstrap Icons CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
      
      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-gradient text-white py-5" style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)'
      }}>
        <div className="position-absolute top-0 start-0 end-0 bottom-0 opacity-25">
          <div className="position-absolute top-0 end-0 translate-middle-x bg-primary rounded-circle filter blur-3xl" style={{width: '500px', height: '500px'}}></div>
          <div className="position-absolute bottom-0 start-0 translate-middle-x bg-indigo rounded-circle filter blur-3xl" style={{width: '600px', height: '600px'}}></div>
        </div>

        <div className="container py-5 position-relative">
          <div className="text-center py-5">
            <span className="badge bg-white bg-opacity-25 mb-4 px-4 py-2 rounded-pill fs-6 text-dark">
              <i className="bi bi-stars ms-1"></i>
              منصة التعليم الهندسي الأولى في مصر
            </span>
            <h1 className="display-4 display-md-3 fw-bold mb-4 text-dark">
              تعلم الهندسة
              <span className="d-block text-warning mt-2">بطريقة عصرية</span>
            </h1>
            <p className="lead mb-5 opacity-90 text-muted">
              محتوى تعليمي متميز لطلاب كليات الهندسة بجميع أنواعها
              <br />
              <span className="fs-5">
                <i className="bi bi-buildings ms-1"></i>
                هندسة عام • هندسة أزهر • تربية فنية
              </span>
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <Link to="/college/engineering" className="btn btn-light btn-lg fw-bold shadow-lg">
                <i className="bi bi-rocket-takeoff ms-2"></i>
                ابدأ التعلم الآن
              </Link>
              <button className="btn btn-outline-dark btn-lg fw-bold">
                <i className="bi bi-play-circle ms-2"></i>
                شاهد الفيديو التعريفي
              </button>
            </div>

            {/* Stats */}
            <div className="row g-4 justify-content-center">
              <div className="col-4 col-md-3">
                <div className="bg-white bg-opacity-10 rounded-4 p-4 text-center backdrop-blur">
                  <h3 className="fw-black">+3</h3>
                  <p className="mb-0 small opacity-75">كليات متاحة</p>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="bg-white bg-opacity-10 rounded-4 p-4 text-center backdrop-blur">
                  <h3 className="fw-black">+10</h3>
                  <p className="mb-0 small opacity-75">أقسام هندسية</p>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <div className="bg-white bg-opacity-10 rounded-4 p-4 text-center backdrop-blur">
                  <h3 className="fw-black">+100</h3>
                  <p className="mb-0 small opacity-75">فيديو تعليمي</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <svg className="position-absolute bottom-0 start-0 end-0" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </section>

      {/* Colleges Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              اختر <span className="text-primary">كليتك</span>
            </h2>
            <p className="lead text-muted">ابدأ رحلتك التعليمية في المجال الذي تحبه</p>
          </div>

          <div className="row g-4 justify-content-center">
            {colleges.map((college) => (
              <div key={college.id} className="col-md-6 col-lg-4">
                <Link to={`/college/${college.id}`} className="text-decoration-none">
                  <div className="card h-100 shadow-lg border-0 overflow-hidden transition-transform hover:shadow-2xl hover:-translate-y-2">
                    <div className="bg-gradient text-white text-center py-5 position-relative overflow-hidden" style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)'
                    }}>
                      <div className="position-absolute top-0 end-0 m-3 badge bg-white text-dark rounded-pill">
                        <i className="bi bi-list-ul ms-1"></i>
                        {college.departments.length} أقسام
                      </div>
                      <div style={{ fontSize: '4rem' ,color:'black'}}>
                        <i className={`${college.icon}`}></i>
                      </div>
                    </div>
                    <div className="card-body text-end">
                      <h3 className="card-title h4 fw-bold text-dark mb-3">{college.name}</h3>
                      <p className="text-muted mb-4">{college.description}</p>
                      <div className="d-flex flex-wrap gap-2 mb-4 justify-content-end">
                        {college.departments.slice(0, 3).map(dept => (
                          <span key={dept.id} className={`badge text-white py-2 px-3`} style={{ backgroundColor: dept.color }}>
                            {dept.name}
                          </span>
                        ))}
                      </div>
                      <div className="text-primary fw-bold d-flex align-items-center justify-content-end gap-2">
                        استكشف الآن
                        <i className="bi bi-arrow-left"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">
              لماذا <span className="text-primary">نحن الأفضل؟</span>
            </h2>
          </div>

          <div className="row g-4">
            {[
              { 
                icon: 'bi-bullseye', 
                iconColor: 'text-primary',
                title: 'محتوى متخصص', 
                desc: 'دروس مصممة خصيصاً لكل تخصص' 
              },
              { 
                icon: 'bi-person-video3', 
                iconColor: 'text-success',
                title: 'أساتذة خبراء', 
                desc: 'نخبة من أفضل المدرسين' 
              },
              { 
                icon: 'bi-phone', 
                iconColor: 'text-info',
                title: 'تعلم في أي وقت', 
                desc: 'وصول غير محدود من أي جهاز' 
              },
              { 
                icon: 'bi-trophy', 
                iconColor: 'text-warning',
                title: 'شهادات معتمدة', 
                desc: 'احصل على شهادة بعد الإنجاز' 
              }
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card text-center p-4 shadow border-0 h-100 hover:shadow-xl transition-shadow">
                  <div className="mb-3">
                    <i className={`bi ${feature.icon} ${feature.iconColor}`} style={{ fontSize: '3.5rem' }}></i>
                  </div>
                  <h4 className="fw-bold text-dark mb-2">{feature.title}</h4>
                  <p className="text-muted small">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;