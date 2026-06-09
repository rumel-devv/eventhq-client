const DashboardHeading = ({ title, description }) => {
  return (
    <div className="mb-8 border-b border-white/10 pb-6">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          {title}
        </h1>

        {description && (
          <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardHeading;