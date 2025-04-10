import React from "react";
import PromoCard from "@components/PromoCard";
import EventCard from "@components/EventCard";
import StatCard from "@components/StatCard";

const PromoSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 py-16 space-y-8">
      <div>
        <img src="images/pexels-jack-sparrow-4045033.jpg" className="rounded-2xl object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-blue-800 font-extrabold text-6xl">How can we help?</h2>
        <p className="text-2xl my-4">
          Our team of world-class experts help people regain control over their screen time by focusing on awareness.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-blue-800 font-extrabold text-6xl">Community and People First</h2>
        <p className="text-2xl my-4">
          Join the AWE Community and share your progress with other like minded people!
        </p>
      </div>
      <div>
        <img src="images/pexels-javaistan-17471057.jpg" className="rounded-2xl object-contain" />
      </div>
      <div>
        <img src="images/pexels-cottonbro-5999069.jpg" className="rounded-2xl object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-blue-800 font-extrabold text-6xl">Using Technologie for good</h2>
        <p className="text-2xl my-4">
          Leaveraging AI + Device healthcare tracking, we are able to help guide and give alternate options our users to make during their day to day lives.
        </p>
      </div>
    </div>
  );
};

export default PromoSection;
