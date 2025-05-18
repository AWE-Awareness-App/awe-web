import React from "react";

const PromoSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-16 px-4 py-16">

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="images/pexels-jack-sparrow-4045033.jpg"
          className="rounded-2xl object-contain md:w-1/2"
        />
        <div className="flex flex-col justify-center items-center text-center md:w-1/2">
          <h2 className="text-blue-800 font-extrabold text-2xl md:text-4xl">How can we help?</h2>
          <p className="text-xl my-4">
            Our team of world-class experts help people regain control over their screen time by focusing on <span className="text-blue-800 text-3xl">awareness</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="images/pexels-javaistan-17471057.jpg"
          className="rounded-2xl object-contain md:w-1/2"
        />
        <div className="flex flex-col justify-center items-center text-center md:w-1/2">
          <h2 className="text-blue-800 font-extrabold text-2xl md:text-4xl">Community and People First</h2>
          <p className="text-xl my-4">
            Join the AWE Community and share your progress with family, friends or other like-minded people!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="images/pexels-cottonbro-5999069.jpg"
          className="rounded-2xl object-contain md:w-1/2"
        />
        <div className="flex flex-col justify-center items-center text-center md:w-1/2">
          <h2 className="text-blue-800 font-extrabold text-2xl md:text-4xl">Using Technology for Good</h2>
          <p className="text-xl my-4">
            Leveraging AI + Fun Assessments + Device healthcare tracking, we are able to help guide and give better options to our users during their day-to-day lives.
          </p>
        </div>
      </div>
    </div>
  );
};


export default PromoSection;
