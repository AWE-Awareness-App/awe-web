const LocationMap = () => {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.7921500000003!2d-73.717185!3d45.4972159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI5JzQ5.OCLCtzM3JzA0LjMiTiA3M8KwNDInNTEuOCJX!5e0!3m2!1sen!2sca!4v1625859200000!5m2!1sen!2sca';
  
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapUrl}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="AWE Location"
      ></iframe>
    </div>
  );
};

export default LocationMap;
