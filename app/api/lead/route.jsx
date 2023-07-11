import { google } from "googleapis";

//http://localhost:3000/api/lead

export async function GET(request) {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  return new Response(JSON.stringify(users));
}


// const { name, email, number, title, buy, budget, trade } = req.body;
// console.log(name, email, number, title, buy, budget, trade);

// export async function POST(request) {
//   console.log(request.body)

//   return new Response(JSON.stringify({ id: 1, name: "John" }));

//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: process.env.CLIENT_EMAIL,
//       client_id: process.env.CLIENT_ID,
//       private_key: process.env.PRIVATE_KEY,
//     },
//     scopes: [
//       "https://www.googleapis.com/auth/drive",
//       "https://www.googleapis.com/auth/drive.file",
//       "https://www.googleapis.com/auth/spreadsheets",
//     ],
//   });

//   const sheets = google.sheets({
//     auth,
//     version: "v4",
//   });

//   const response = await sheets.spreadsheets.values.append({
//     spreadsheetId: process.env.GOOGLE_SHEET_ID,
//     range: "Sheet1!A2:G2",
//     valueInputOption: "USER_ENTERED",
//     requestBody: {
//       values: [
//         [
//           body.name,
//           body.email,
//           body.number,
//           body.title,
//           body.buy,
//           body.budget,
//           body.trade,
//         ],
//       ],
//     },
//   });
//   res
//     .status(201)
//     .json({ message: "Data successfully entered into Google Sheets" });
// }
