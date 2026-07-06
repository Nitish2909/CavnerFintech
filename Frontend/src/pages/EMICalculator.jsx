import Seo from "../components/Seo";
import EmiCalculator from "../components/EmiCalculator";

const EMICalculator = () => {
  return (
    <>
      <Seo title="EMI Calculator" description="Calculate your loan EMI online. Free EMI calculator for personal, home, and business loans in India." path="/emi" keywords="EMI calculator, loan EMI, personal loan EMI, home loan EMI" />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">EMI Calculator</h1>
          <p className="text-slate-500">Calculate your monthly EMI for any loan</p>
        </div>
        <EmiCalculator />
      </div>
    </>
  );
};

export default EMICalculator;
