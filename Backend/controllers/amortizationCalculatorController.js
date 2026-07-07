
const amortizationCalculatorController = (req, res) => {

    try {
        //1. destructring the req
        const { loanAmount, interestRate, loanTerm } = req.body;
        //check
        if (!loanAmount || !interestRate || !loanTerm) {
            return res.status(400).json({ error: "Missing required parameters: loanAmount, interestRate, loanTerm" });
        }
        const principal = parseFloat(loanAmount);
        const calculatedInterest = parseFloat(interestRate) / 100 / 12;
        const calculatedPayments = parseFloat(loanTerm) * 12;

        // Monthly EMI formula
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

        if (!isFinite(monthlyPayment) || monthlyPayment <= 0) {
            return res.status(400).json({ error: "Invalid calculation parameters. Check numbers." });
        }

        let balance = principal;
        let totalInterest = 0;
        const schedule = [];
        for (let i = 1; i <= calculatedPayments; i++) {
            const interestPayment = balance * calculatedInterest;
            const principalPayment = monthlyPayment - interestPayment;
            balance -= principalPayment;
            totalInterest += interestPayment;
            schedule.push({
                month: i,
                payment: Math.round(monthlyPayment),
                principalPaid: Math.round(principalPayment),
                interestPaid: Math.round(interestPayment),
                remainingBalance: Math.max(0, Math.round(balance)),
            });
        }
        return res.status(200).json({
            monthlyPayment: Math.round(monthlyPayment),
            totalInterest: Math.round(totalInterest),
            totalPayment: Math.round(principal + totalInterest),
            schedule,
        });
    } catch (error) {
        res.status(500).json({
            message: " Internal Server Error!"
        })
    }
}

export default amortizationCalculatorController;
