
import { CheckCircle, TrendingUp, ArrowDownRight, Clock, Shield } from "lucide-react";

const benefits = [
  {
    title: "Reduce Electricity Bills",
    description: "Cut your electricity costs by up to 90% with our high-efficiency solar panels.",
    icon: <TrendingUp className="w-12 h-12 text-sun-500" />,
  },
  {
    title: "Government Incentives",
    description: "Take advantage of tax credits and rebates for installing solar energy systems.",
    icon: <ArrowDownRight className="w-12 h-12 text-sun-500" />,
  },
  {
    title: "Increase Property Value",
    description: "Solar-equipped homes sell for 4.1% more on average than comparable non-solar homes.",
    icon: <TrendingUp className="w-12 h-12 text-sun-500" />,
  },
  {
    title: "Minimal Maintenance",
    description: "Our solar systems require very little maintenance and come with extensive warranties.",
    icon: <Clock className="w-12 h-12 text-sun-500" />,
  },
  {
    title: "Energy Independence",
    description: "Generate your own electricity and reduce dependence on the traditional power grid.",
    icon: <Shield className="w-12 h-12 text-sun-500" />,
  },
  {
    title: "Eco-friendly",
    description: "Reduce your carbon footprint by using clean, renewable energy from the sun.",
    icon: <CheckCircle className="w-12 h-12 text-sun-500" />,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-solar-950 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Go Solar With <span className="text-sun-400">Aditya</span>?
          </h2>
          <p className="text-lg text-gray-300">
            Switching to solar energy offers numerous benefits for homeowners and businesses alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit }: { benefit: any }) => {
  return (
    <div className="bg-solar-900 p-6 rounded-lg hover:bg-solar-800 transition-colors flex flex-col items-start animate-fade-in">
      <div className="mb-4">{benefit.icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
      <p className="text-gray-300">{benefit.description}</p>
    </div>
  );
};

export default Benefits;
