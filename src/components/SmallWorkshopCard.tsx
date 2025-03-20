import { MainWorkshopsProps } from "../interfaces/Workshop";

const MainWorkshops = ({ id, type, title, workshops }: MainWorkshopsProps) => {
    return (
        <div
            className="p-6 rounded-lg shadow-md min-w-full md:min-w-1/3 h-[316px] justify-between flex flex-col m-10"
            style={{ backgroundColor: getColor(title) }}
        >
            <h2 className="text-lg font-bold text-[#252B61] mb-2">
                {id}. {title}
            </h2>
            <ul className="text-sm mb-4 h-[60%] overflow-y-auto">
                {workshops.map((topic, index) => (
                    <li
                        key={topic._id}
                        className="list-none text-[#252B61] font-semibold list-inside mb-1"
                    >
                        <span className="text-xl font-bold mr-1">+</span>
                        {topic.title}
                    </li>
                ))}
            </ul>
            <button className="p-3 bg-blue-950 text-white rounded-lg w-[75%] hover:bg-blue-700 transition self-center">
                {type === "individual" || type === "couples" || type === "family"
                    ? "Apply Now"
                    : "Inquire Now"}
            </button>
        </div>
    );
};

export default MainWorkshops;

const getColor = (title: string) => {
    const colors: { [key: string]: string } = {
        "Individual Workshops": "#A3DAC2",
        "Couples Workshops": "#F0DA69",
        "Family Workshops": "#E7C2D4",
        "Communities Workshops": "#F0DA69",
        "Organization Workshops": "#E7C2D4",
    };
    return colors[title] || "#ffffff";
};
