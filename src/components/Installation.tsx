
import { Check, CalendarRange, FileSpreadsheet, ArrowRight, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    title: "Free Consultation",
    description: "Our experts evaluate your energy needs and roof specifications to design the perfect system.",
    icon: <CalendarRange className="w-10 h-10 text-solar-500" />,
  },
  {
    id: 2,
    title: "Custom Proposal",
    description: "Receive a detailed proposal with system design, energy production estimates, and financial analysis.",
    icon: <FileSpreadsheet className="w-10 h-10 text-solar-500" />,
  },
  {
    id: 3,
    title: "Professional Installation",
    description: "Our certified technicians install your system with minimal disruption to your daily routine.",
    icon: <Truck className="w-10 h-10 text-solar-500" />,
  },
  {
    id: 4,
    title: "System Activation",
    description: "After inspection and utility approval, we activate your system and show you how to monitor it.",
    icon: <Zap className="w-10 h-10 text-solar-500" />,
  },
];

const Installation = () => {
  return (
    <section id="installation" className="section-padding bg-gradient-to-b from-sky-50 to-white" aria-labelledby="installation-heading">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="installation-heading" className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Installation Process
          </h2>
          <p className="text-lg text-gray-600">
            We make going solar simple with our streamlined, hassle-free installation process throughout India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <ol className="space-y-12">
              {steps.map((step) => (
                <li key={step.id} className="flex gap-6 animate-slide-right">
                  <div className="flex-shrink-0 bg-solar-100 h-16 w-16 rounded-full flex items-center justify-center" aria-hidden="true">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <Button 
                className="bg-solar-600 hover:bg-solar-700 text-white px-8 py-6 text-lg"
                aria-label="Schedule a free solar consultation"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="bg-solar-100 rounded-lg p-6 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-solar-900">Our Quality Guarantees</h3>
            <ul className="space-y-4">
              <GuaranteeItem text="25-year performance guarantee on all solar panels" />
              <GuaranteeItem text="10-year comprehensive system warranty" />
              <GuaranteeItem text="2-year workmanship warranty on all installations" />
              <GuaranteeItem text="Free system monitoring for the life of your system" />
              <GuaranteeItem text="Performance monitoring and production guarantees" />
              <GuaranteeItem text="24/7 customer support for any issues" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const GuaranteeItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <Check className="h-5 w-5 text-eco-600 mt-1 flex-shrink-0" aria-hidden="true" />
    <span>{text}</span>
  </li>
);

export default Installation;
