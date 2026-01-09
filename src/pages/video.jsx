import React, { useState } from 'react';

function Video() {
  const [activeTab, setActiveTab] = useState('video');
  const [isEnrolled, setIsEnrolled] = useState(false);

  // بيانات الدرس
  const video = {
    id: 1,
    title: 'أساسيات الإنشاءات الخرسانية',
    collegeId: 'engineering',
    collegeName: 'هندسة عام',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
    instructor: 'د. أحمد محمود',
    views: '12,450',
    duration: '45:30',
    price: 299,
    originalPrice: 499,
    isFree: false,
    rating: 4.8,
    studentsCount: 1250,
    description: 'في هذا الدرس سنتعلم الأساسيات الهامة في الإنشاءات الخرسانية وكيفية تطبيقها عمليا في المشاريع الهندسية. سيتم شرح المفاهيم النظرية مع أمثلة تطبيقية واقعية.',
    materials: {
      videos: [
        { id: 1, title: 'المقدمة والنظرة العامة', duration: '15:30', completed: true },
        { id: 2, title: 'الجزء الأول: الأساسيات النظرية', duration: '20:45', completed: true },
        { id: 3, title: 'الجزء الثاني: التطبيقات العملية', duration: '25:15', completed: false },
        { id: 4, title: 'الجزء الثالث: أمثلة من الواقع', duration: '30:00', completed: false },
        { id: 5, title: 'الخلاصة والمراجعة النهائية', duration: '18:20', completed: false },
      ],
      pdfs: [
        { id: 1, title: 'ملخص الدرس الكامل', pages: 25, size: '2.5 MB' },
        { id: 2, title: 'جداول ومعادلات هامة', pages: 8, size: '1.2 MB' },
        { id: 3, title: 'أمثلة محلولة بالتفصيل', pages: 15, size: '3.8 MB' },
        { id: 4, title: 'مراجع إضافية', pages: 12, size: '2.1 MB' },
      ],
      notes: [
        { id: 1, title: 'نقاط هامة للحفظ', content: 'القوانين والمعادلات الأساسية التي يجب حفظها للامتحان وكيفية تطبيقها.' },
        { id: 2, title: 'نصائح للامتحان', content: 'أهم النقاط التي تركز عليها لجان الامتحانات وكيفية التعامل معها.' },
        { id: 3, title: 'أخطاء شائعة', content: 'الأخطاء الأكثر شيوعا التي يقع فيها الطلاب وكيفية تجنبها.' },
      ],
      exercises: [
        { id: 1, title: 'تمرين 1: حساب الأحمال الأساسية', difficulty: 'سهل', questions: 5 },
        { id: 2, title: 'تمرين 2: تصميم العناصر الإنشائية', difficulty: 'متوسط', questions: 8 },
        { id: 3, title: 'تمرين 3: مشروع شامل متكامل', difficulty: 'صعب', questions: 3 },
        { id: 4, title: 'امتحان تجريبي شامل', difficulty: 'صعب', questions: 12 },
      ]
    },
    requirements: [
      'معرفة أساسية بالرياضيات والفيزياء',
      'فهم مبادئ الهندسة المدنية الأساسية',
      'جهاز كمبيوتر أو هاتف للمشاهدة',
      'الرغبة في التعلم والتطوير الذاتي'
    ],
    outcomes: [
      'فهم شامل لأساسيات الإنشاءات الخرسانية',
      'القدرة على حل المسائل العملية بثقة',
      'معرفة كيفية تطبيق المفاهيم في مشاريع حقيقية',
      'الاستعداد الكامل للامتحانات',
      'تطوير مهارات التفكير الهندسي',
      'إمكانية العمل على مشاريع فعلية'
    ]
  };

  const relatedVideos = [
    {
      id: 2,
      title: 'تصميم الكمرات الخرسانية',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400',
      instructor: 'د. محمد أحمد',
      duration: '38:15',
      price: 249
    },
    {
      id: 3,
      title: 'حساب الأحمال الإنشائية',
      thumbnail: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=400',
      instructor: 'م. سارة علي',
      duration: '42:00',
      price: 199
    }
  ];

  const handleEnroll = () => {
    setIsEnrolled(true);
    alert(video.isFree ? 'تم التسجيل بنجاح!' : 'تم إضافة الدورة إلى السلة');
  };

  const discount = video.originalPrice ? Math.round((1 - video.price / video.originalPrice) * 100) : 0;

  return (
    <div className="min-vh-100 bg-light" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <div className="container py-4">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb bg-transparent p-0 mb-0">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-primary">
                <i className="fas fa-home ms-1"></i>
                الرئيسية
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href={`/college/${video.collegeId}`} className="text-decoration-none text-primary">
                {video.collegeName}
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {video.title}
            </li>
          </ol>
        </nav>

        <div className="row g-4">
          {/* Main Content */}
          <div className="col-lg-8">
            {/* Video Player Card */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="ratio ratio-16x9 bg-dark">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            </div>

            {/* Video Info */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h1 className="h3 fw-bold text-dark mb-3">{video.title}</h1>
                
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-warning text-dark">
                      <i className="fas fa-star"></i> {video.rating}
                    </span>
                    <span className="text-muted small">({video.studentsCount} طالب)</span>
                  </div>
                  <div className="text-muted small">
                    <i className="fas fa-chalkboard-teacher ms-1"></i>
                    {video.instructor}
                  </div>
                  <div className="text-muted small">
                    <i className="fas fa-eye ms-1"></i>
                    {video.views} مشاهدة
                  </div>
                  <div className="text-muted small">
                    <i className="fas fa-clock ms-1"></i>
                    {video.duration}
                  </div>
                </div>

                <p className="text-muted">{video.description}</p>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white border-bottom">
                <ul className="nav nav-tabs card-header-tabs" role="tablist">
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'video' ? 'active' : ''}`}
                      onClick={() => setActiveTab('video')}
                    >
                      <i className="fas fa-play-circle ms-1"></i>
                      محتوى الدرس
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'pdf' ? 'active' : ''}`}
                      onClick={() => setActiveTab('pdf')}
                    >
                      <i className="fas fa-file-pdf ms-1"></i>
                      ملفات PDF
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'notes' ? 'active' : ''}`}
                      onClick={() => setActiveTab('notes')}
                    >
                      <i className="fas fa-sticky-note ms-1"></i>
                      ملاحظات
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'exercises' ? 'active' : ''}`}
                      onClick={() => setActiveTab('exercises')}
                    >
                      <i className="fas fa-dumbbell ms-1"></i>
                      تمارين
                    </button>
                  </li>
                </ul>
              </div>

              <div className="card-body p-4">
                {/* Videos Tab */}
                {activeTab === 'video' && (
                  <div>
                    <h5 className="fw-bold mb-4">
                      قائمة الفيديوهات ({video.materials.videos.length})
                    </h5>
                    <div className="list-group">
                      {video.materials.videos.map((vid, index) => (
                        <div key={vid.id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-3">
                            <div className={`rounded-circle d-flex align-items-center justify-content-center ${vid.completed ? 'bg-success' : 'bg-secondary'}`} 
                                 style={{ width: '40px', height: '40px', color: 'white' }}>
                              {vid.completed ? <i className="fas fa-check"></i> : index + 1}
                            </div>
                            <div>
                              <div className="fw-semibold">{vid.title}</div>
                              <small className="text-muted">
                                <i className="fas fa-clock ms-1"></i>
                                {vid.duration}
                              </small>
                            </div>
                          </div>
                          {!isEnrolled && !video.isFree && (
                            <span className="badge bg-secondary">
                              <i className="fas fa-lock"></i>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PDFs Tab */}
                {activeTab === 'pdf' && (
                  <div>
                    <h5 className="fw-bold mb-4">
                      الملفات التعليمية ({video.materials.pdfs.length})
                    </h5>
                    <div className="row g-3">
                      {video.materials.pdfs.map(pdf => (
                        <div key={pdf.id} className="col-md-6">
                          <div className="card border h-100">
                            <div className="card-body">
                              <div className="d-flex align-items-start gap-3">
                                <div className="text-danger fs-1">
                                  <i className="fas fa-file-pdf"></i>
                                </div>
                                <div className="flex-grow-1">
                                  <h6 className="fw-bold mb-2">{pdf.title}</h6>
                                  <div className="small text-muted mb-2">
                                    <div>
                                      <i className="fas fa-file-alt ms-1"></i>
                                      {pdf.pages} صفحة
                                    </div>
                                    <div>
                                      <i className="fas fa-hdd ms-1"></i>
                                      {pdf.size}
                                    </div>
                                  </div>
                                  <button className="btn btn-sm btn-outline-primary" disabled={!isEnrolled && !video.isFree}>
                                    <i className={`fas ${isEnrolled || video.isFree ? 'fa-download' : 'fa-lock'} ms-1`}></i>
                                    {isEnrolled || video.isFree ? 'تحميل' : 'مقفل'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes Tab */}
                {activeTab === 'notes' && (
                  <div>
                    <h5 className="fw-bold mb-4">
                      ملاحظات مهمة ({video.materials.notes.length})
                    </h5>
                    <div className="accordion" id="notesAccordion">
                      {video.materials.notes.map((note, index) => (
                        <div key={note.id} className="accordion-item border mb-2">
                          <h2 className="accordion-header">
                            <button 
                              className="accordion-button collapsed" 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target={`#note${note.id}`}
                            >
                              <i className="fas fa-thumbtack ms-2"></i>
                              {note.title}
                            </button>
                          </h2>
                          <div id={`note${note.id}`} className="accordion-collapse collapse" data-bs-parent="#notesAccordion">
                            <div className="accordion-body">
                              {isEnrolled || video.isFree ? (
                                <p className="text-muted mb-0">{note.content}</p>
                              ) : (
                                <p className="text-muted fst-italic">
                                  <i className="fas fa-lock ms-1"></i>
                                  يجب التسجيل في الدرس لعرض الملاحظات
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exercises Tab */}
                {activeTab === 'exercises' && (
                  <div>
                    <h5 className="fw-bold mb-4">
                      التمارين والاختبارات ({video.materials.exercises.length})
                    </h5>
                    <div className="row g-3">
                      {video.materials.exercises.map(exercise => (
                        <div key={exercise.id} className="col-12">
                          <div className="card border">
                            <div className="card-body">
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                  <h6 className="fw-bold mb-2">{exercise.title}</h6>
                                  <div className="d-flex gap-3">
                                    <span className={`badge ${
                                      exercise.difficulty === 'سهل' ? 'bg-success' : 
                                      exercise.difficulty === 'متوسط' ? 'bg-warning text-dark' : 
                                      'bg-danger'
                                    }`}>
                                      {exercise.difficulty}
                                    </span>
                                    <span className="text-muted small">
                                      <i className="fas fa-question-circle ms-1"></i>
                                      {exercise.questions} سؤال
                                    </span>
                                  </div>
                                </div>
                                <button className="btn btn-primary btn-sm" disabled={!isEnrolled && !video.isFree}>
                                  {isEnrolled || video.isFree ? (
                                    <>
                                      <i className="fas fa-play ms-1"></i>
                                      ابدأ الحل
                                    </>
                                  ) : (
                                    <>
                                      <i className="fas fa-lock ms-1"></i>
                                      مقفل
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="card shadow-sm border-0 mt-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4">
                  <i className="fas fa-bullseye text-primary ms-2"></i>
                  ما الذي ستتعلمه
                </h5>
                <div className="row g-2">
                  {video.outcomes.map((outcome, index) => (
                    <div key={index} className="col-md-6">
                      <div className="d-flex gap-2">
                        <span className="text-success">
                          <i className="fas fa-check-circle"></i>
                        </span>
                        <span className="text-muted small">{outcome}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="card shadow-sm border-0 mt-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4">
                  <i className="fas fa-list-check text-primary ms-2"></i>
                  المتطلبات
                </h5>
                <ul className="list-unstyled mb-0">
                  {video.requirements.map((req, index) => (
                    <li key={index} className="mb-2 text-muted">
                      <i className="fas fa-circle ms-2" style={{ fontSize: '6px' }}></i>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Price Card */}
            <div className="card shadow-sm border-0 mb-4 sticky-top" style={{ top: '20px' }}>
              <div className="card-body p-4">
                {video.isFree ? (
                  <div className="text-center mb-4">
                    <span className="badge bg-success fs-4 py-2 px-4">
                      <i className="fas fa-gift ms-1"></i>
                      مجاني
                    </span>
                  </div>
                ) : (
                  <div className="text-center mb-4">
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                      <span className="display-4 fw-bold text-primary">{video.price}</span>
                      <span className="fs-5 text-muted">جنيه</span>
                    </div>
                    {video.originalPrice && (
                      <div className="text-muted">
                        <del>{video.originalPrice} جنيه</del>
                        <span className="badge bg-danger me-2">
                          <i className="fas fa-tag ms-1"></i>
                          خصم {discount}%
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {isEnrolled ? (
                  <div className="alert alert-success text-center mb-3">
                    <i className="fas fa-check-circle ms-1"></i>
                    أنت مسجل في هذا الدرس
                  </div>
                ) : (
                  <button 
                    className="btn btn-primary btn-lg w-100 mb-3"
                    onClick={handleEnroll}
                  >
                    {video.isFree ? (
                      <>
                        <i className="fas fa-graduation-cap ms-1"></i>
                        سجل مجاناً
                      </>
                    ) : (
                      <>
                        <i className="fas fa-shopping-cart ms-1"></i>
                        اشترِ الآن
                      </>
                    )}
                  </button>
                )}

                <div className="d-grid gap-2">
                  <button className="btn btn-outline-secondary">
                    <i className="fas fa-heart ms-1"></i>
                    أضف للمفضلة
                  </button>
                  <button className="btn btn-outline-secondary">
                    <i className="fas fa-share-alt ms-1"></i>
                    شارك الدرس
                  </button>
                </div>

                <hr className="my-4" />

                <h6 className="fw-bold mb-3">
                  <i className="fas fa-box-open text-primary ms-2"></i>
                  هذا الدرس يتضمن:
                </h6>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <i className="fas fa-check text-success ms-2"></i>
                    {video.materials.videos.length} فيديو تعليمي
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-success ms-2"></i>
                    {video.materials.pdfs.length} ملف PDF
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-success ms-2"></i>
                    {video.materials.exercises.length} تمرين عملي
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-success ms-2"></i>
                    وصول مدى الحياة
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-success ms-2"></i>
                    شهادة إتمام
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-success ms-2"></i>
                    دعم فني
                  </li>
                </ul>
              </div>
            </div>

            {/* Related Videos */}
            {relatedVideos.length > 0 && (
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">
                    <i className="fas fa-video text-primary ms-2"></i>
                    دروس مشابهة
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {relatedVideos.map(relatedVideo => (
                      <a
                        key={relatedVideo.id}
                        href={`#video-${relatedVideo.id}`}
                        className="text-decoration-none"
                      >
                        <div className="d-flex gap-3 p-2 rounded" style={{ transition: 'all 0.2s' }}>
                          <img
                            src={relatedVideo.thumbnail}
                            alt={relatedVideo.title}
                            className="rounded"
                            style={{ width: '100px', height: '75px', objectFit: 'cover' }}
                          />
                          <div>
                            <h6 className="small fw-semibold text-dark mb-1">
                              {relatedVideo.title}
                            </h6>
                            <p className="text-muted small mb-1">
                              <i className="fas fa-chalkboard-teacher ms-1"></i>
                              {relatedVideo.instructor}
                            </p>
                            <div className="d-flex gap-2 align-items-center">
                              <span className="badge bg-primary small">
                                {relatedVideo.price} جنيه
                              </span>
                              <span className="text-muted small">
                                <i className="fas fa-clock ms-1"></i>
                                {relatedVideo.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;