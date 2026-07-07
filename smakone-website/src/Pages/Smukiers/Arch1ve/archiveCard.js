const ArchiveCard = ({ event }) => {
  return (
    <div className="group">
      {/* Only image is clickable */}
      <a href={event.driveLink} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={event.cover}
            alt={event.title}
            className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </a>

      <div className="flex items-end justify-between mt-5">
        <div>
          <h3 className="text-2xl font-bold">{event.title}</h3>
          <p className="text-gray-500">{event.date}</p>
        </div>

        {/* Only View is clickable */}
        <a
          href={event.driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#0A167F] hover:underline"
        >
          View ↗
        </a>
      </div>
    </div>
  );
};

export default ArchiveCard;
