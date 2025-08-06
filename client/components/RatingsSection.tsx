export function RatingsSection() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-sm">
            <div className="flex items-center space-x-4">
              {/* Student Images */}
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
                  alt="Student 1" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                  alt="Student 2" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face" 
                  alt="Student 3" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              
              {/* Rating Content */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                  <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">Ratings</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">From our students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
