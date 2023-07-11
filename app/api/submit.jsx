import { sendStatusCode } from 'next/dist/server/api-utils'
import { google } from 'googleapis'
import React from 'react'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(statusCode: 405).send(body: {message: 'Only POST requests are allowed'})
    }

    const body = req.body;

    try  {
        const auth = new google.auth.GoogleAuth( opts: {
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });
        const sheets = google.sheets({
            auth,
            version: 'v4' 
        })

        const response = await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'Sheet1!A2:G2',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [
                        [body.name, body.email, body.number, body.title,
                        body.buy, body.budget, body.trade]
                    ]
                }
        });

        return res.status(statusCode: 200).json(body: {
            data: response.data
        })

    } catch (e) {
        return res.status(statusCode: 500).send(body: {message: e.message ?? 'Something went wrong'})
    }
}