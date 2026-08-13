const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container mb-4">
        {icon}
      </div>
      <h3 className="text-lg text-black mb-2">{title}</h3>
      <p className="text-sm text-text-black">{description}</p>
    </div>
  );
};

export default Card;
