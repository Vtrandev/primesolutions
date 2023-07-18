//http://localhost:3000/api/testimonial

export async function GET(request) {
  const users = [
    {
      id: 1,
      name: "John",
      testimonial: "I couldn't be happier with the loan service provided by PrimeSolutions Financing. Their team was incredibly supportive throughout the entire process, guiding me every step of the way. Thanks to their competitive interest rates and flexible repayment options, I was able to secure the funds I needed quickly and efficiently. Highly recommended!",
    },
    {
      id: 2,
      name: "Joe",
      testimonial: "I had a fantastic experience with PrimeSolutions Financing. From the moment I reached out to them, their staff was attentive, knowledgeable, and responsive to all my inquiries. They helped me navigate the loan application process smoothly and secured me a loan with favorable terms. I am grateful for their professionalism and would confidently recommend them to anyone in need of financial assistance.",
    },
    {
      id: 3,
      name: "Bob",
      testimonial: "PrimeSolutions Financing exceeded my expectations with their loan services. Their team was not only prompt and efficient but also displayed genuine care and understanding for my financial needs. They worked diligently to find the best loan options for me and made the entire process hassle-free. I am extremely satisfied with their services and would choose them again without hesitation.",
    },
    {
      id: 4,
      name: "Billy",
      testimonial: "I want to express my gratitude to PrimeSolutions Financing for their exceptional loan service. They went above and beyond to assist me in obtaining the funds I needed for my personal expenses. Their transparent communication, competitive rates, and flexible repayment plans made it a stress-free experience. I highly recommend PrimeSolutions Financing to anyone seeking reliable and customer-oriented lending solutions.",
    },
    {
      id: 5,
      name: "Michael",
      testimonial: "PrimeSolutions Financing has been a trusted partner in my financial journey. Their dedicated team took the time to understand my unique circumstances and provided tailored loan options that aligned perfectly with my needs. Their professionalism, integrity, and promptness were truly commendable. I am grateful for PrimeSolutions Financing's support and would wholeheartedly recommend their services to anyone in search of a reliable loan provider.",
    },
  ];
  return new Response(JSON.stringify(users));
}
