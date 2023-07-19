//http://localhost:3000/api/questions

export async function GET(request) {
  const faqs = [
    {
      id: 1,
      question: "What is a loan?",
      answer:
        "A loan is a sum of money borrowed from a lender with the agreement that it will be repaid, typically with interest, over a specified period of time.",
    },
    {
      id: 2,
      question: "What types of loans are available?",
      answer:
        "There are various types of loans, including personal loans, home mortgages, auto loans, student loans, business loans, and more. Each type serves a specific purpose and has its own terms and conditions.",
    },
    {
      id: 3,
      question: "How do I qualify for a loan?",
      answer:
        "Loan eligibility criteria vary depending on the type of loan and the lender's requirements. Generally, lenders consider factors such as credit history, income, employment stability, and debt-to-income ratio when determining loan eligibility.",
    },
    {
      id: 4,
      question: "What is the difference between secured and unsecured loans?",
      answer:
        "Secured loans require collateral, such as a house or car, which the lender can claim if the borrower defaults. Unsecured loans, on the other hand, don't require collateral but often have higher interest rates due to the increased risk for the lender.",
    },
    {
      id: 5,
      question: "How is interest calculated on a loan?",
      answer:
        "The interest on a loan is calculated based on the loan amount, interest rate, and the loan term. It can be calculated using various methods, including simple interest or compound interest.",
    },
    // Add more FAQs here...
  ];
  return new Response(JSON.stringify(faqs));
}
