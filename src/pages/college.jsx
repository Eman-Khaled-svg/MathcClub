import { useParams, Link } from 'react-router-dom';
import colleges from '../data/collages';
import videos from '../data/videos';
import { useState } from 'react';

function College() {
  const { collegeId } = useParams();
  const college = colleges.find(c => c.id === collegeId);
  const [selectedDept, setSelectedDept] = useState(null);

  if (!college) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
     
        
        <div className="text-center">
          <div className="display-1 mb-4">
            <i className="bi bi-emoji-frown text-muted"></i>
          </div>
          <h2 className="display-4 fw-bold text-dark mb-4">الكلية غير موجودة</h2>
          <p className="text-dark mb-5 fs-5">عذراً، لم نتمكن من العثور على هذه الكلية</p>
          <Link to="/" className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow">
            <i className="bi bi-house-door me-2"></i>
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const collegeVideos = selectedDept 
    ? videos.filter(v => v.collegeId === collegeId && v.departmentId === selectedDept)
    : videos.filter(v => v.collegeId === collegeId);

  return (
    <div className="min-vh-100 bg-light">
    
      
      {/* Header */}
      <header className="bg-gradient text-white py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(to right, #0d6efd, #6610f2)' }}>
        <div className="container py-5 position-relative">
          <Link 
            to="/" 
            className="d-inline-flex align-items-center text-white text-decoration-none mb-4"
          >
            <i className="bi bi-arrow-right me-2 text-dark"></i>
            <span className="fw-bold text-dark">العودة للرئيسية</span>
          </Link>
          
          <div className="row align-items-center">
            <div className="col-md-2 text-center">
              <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '150px', height: '150px' }}>
                <i className={`${college.icon}`} style={{ fontSize: '5rem',color:'black' }}></i>
              </div>
            </div>
            <div className="col-md-10 text-center text-md-end">
              <h1 className="display-4 fw-bold mb-3 text-dark">{college.name}</h1>
              <p className="lead mb-4 text-dark">{college.description}</p>
              <div className="d-inline-block bg-white bg-opacity-25 px-4 py-2 rounded-pill">
                <strong className='text-dark'>
                  <i className="bi bi-list-ul me-1"></i>
                  {college.departments.length} قسم متاح
                </strong>
                <span className="mx-2 text-dark">•</span>
                <strong className="text-dark">
                  <i className="bi bi-play-circle me-1"></i>
                  {collegeVideos.length} فيديو
                </strong> 
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container py-5">
        {/* Departments Filter */}
        <div className="mb-5">
          <h3 className="h4 fw-bold mb-4">
            <i className="bi bi-funnel me-2"></i>
            تصفية حسب القسم
          </h3>
          <div className="d-flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedDept(null)}
              className={`btn ${selectedDept === null ? 'btn-primary' : 'btn-outline-secondary'} px-4 py-2`}
            >
              <i className="bi bi-grid-3x3-gap me-1"></i>
              جميع الأقسام ({videos.filter(v => v.collegeId === collegeId).length})
            </button>
            {college.departments.map(dept => {
              const deptVideosCount = videos.filter(v => v.collegeId === collegeId && v.departmentId === dept.id).length;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className="btn px-4 py-2 text-white"
                  style={{
                    backgroundColor: selectedDept === dept.id ? dept.color : '#6c757d',
                    opacity: selectedDept === dept.id ? 1 : 0.8
                  }}
                >
                  {dept.name} ({deptVideosCount})
                </button>
              );
            })}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="mb-4">
          <h2 className="h3 fw-bold mb-3">
            <i className="bi bi-collection-play me-2"></i>
            الفيديوهات المتاحة
          </h2>
          <p className="text-muted">
            <i className="bi bi-file-play me-1"></i>
            {collegeVideos.length} فيديو متاح
            {selectedDept && ` في قسم ${college.departments.find(d => d.id === selectedDept)?.name}`}
          </p>
        </div>
        
        {collegeVideos.length === 0 ? (
          <div className="text-center py-5 bg-white rounded shadow">
            <div className="display-1 mb-4">
              <i className="bi bi-inbox text-muted"></i>
            </div>
            <p className="h4 fw-bold text-dark mb-3">لا توجد فيديوهات متاحة</p>
            <p className="text-muted">جرب اختيار قسم آخر أو تحقق لاحقاً</p>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {collegeVideos.map((video, index) => (
              <div key={video.id} className="col">
                <Link
                  to={`/video/${video.id}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 shadow-sm hover-shadow-lg transition-shadow">
                    <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="card-img-top h-100 w-100 object-fit-cover"
                      />
                      <div className="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white px-3 py-1 rounded m-3">
                        <i className="bi bi-clock me-1"></i>
                        {video.duration}
                      </div>
                      <div className="position-absolute inset-0 d-flex align-items-center justify-content-center bg-black bg-opacity-50 opacity-0 hover-opacity-100 transition-opacity">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                          <i className="bi bi-play-fill text-primary" style={{ fontSize: '2rem' }}></i>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold text-dark mb-3">{video.title}</h5>
                      
                      <div className="d-flex justify-content-between text-muted small mb-3">
                        <span>
                          <i className="bi bi-person-video3 me-1"></i>
                          {video.instructor}
                        </span>
                      </div>
                      
                      <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                        <span className="text-muted small">
                          <i className="bi bi-eye me-1"></i>
                          {video.views} مشاهدة
                        </span>
                        <span className="text-primary fw-bold small">
                          شاهد الآن
                          <i className="bi bi-arrow-left me-1"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default College;