import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';

export async function POST(req: NextRequest) {
    try {
        // CSV-Daten aus dem Request Body lesen
        const csvData = await req.text();

        console.log(csvData);

        // CSV-Daten parsen
        const parsedData = Papa.parse(csvData, {
            header: true, // Erste Zeile als Header behandeln
            dynamicTyping: true, // Typisierung der Felder automatisch erkennen
            skipEmptyLines: true, // Leere Zeilen überspringen (optional)
        });

        // Rückgabe als JSON-Antwort
        return NextResponse.json(parsedData.data);
    } catch (error) {
        // Fehlerbehandlung
        return NextResponse.json({ error: 'Failed to parse CSV' }, { status: 500 });
    }
}
