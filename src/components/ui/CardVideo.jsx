import { Link } from 'react-router-dom';

function VideoCard({ video }) {
  return (
    <Link
      to={`/video/${video.id}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition-all transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-semibold">
          {video.duration}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">
          {video.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span className="flex items-center gap-1">
            👨‍🏫 {video.instructor}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            👁️ {video.views} مشاهدة
          </span>
          <span className="text-blue-600 font-semibold hover:underline">
            مشاهدة ←
          </span>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;