const colleges = [
  {
    id: 'engineering',
    name: 'هندسة عام',
    description: 'كليات الهندسة الحكومية والخاصة',
    icon: 'bi-tools', // بدل 🏗️
    departments: [
      { id: 'civil', name: 'مدني', color: '#3b82f6' },
      { id: 'mechanical', name: 'ميكانيكا', color: '#ef4444' },
      { id: 'electrical', name: 'كهرباء', color: '#f59e0b' },
      { id: 'architecture', name: 'عمارة', color: '#8b5cf6' },
    ]
  },
  {
    id: 'azhar-engineering',
    name: 'هندسة أزهر',
    description: 'كليات الهندسة جامعة الأزهر',
    icon: 'bi-building', // بدل 🕌
    departments: [
      { id: 'civil', name: 'مدني', color: '#3b82f6' },
      { id: 'mechanical', name: 'ميكانيكا', color: '#ef4444' },
      { id: 'electrical', name: 'كهرباء', color: '#f59e0b' },
    ]
  },
  {
    id: 'technical-education',
    name: 'تربية فنية',
    description: 'كليات التربية الفنية والرسم الهندسي',
    icon: 'bi-palette-fill', // بدل 🎨
    departments: [
      { id: 'technical-drawing', name: 'رسم فني', color: '#06b6d4' },
      { id: 'graphics', name: 'جرافيك', color: '#ec4899' },
    ]
  }
];

export default colleges;