'use client';

import { useEffect, useState } from 'react';

export const runtime = 'edge';

export default function TestCSV() {
    const [jsonResult, setJsonResult] = useState<any>(null);
    const [csvData, setCsvData] = useState<string>('');

    useEffect(() => {
        const fetchCSV = async () => {
            const response = await fetch('/rawData/Gaszähler.csv');
            const text = await response.text();
            setCsvData(text);
        };

        fetchCSV();
    }, []);

    useEffect(() => {
        const fetchCSV = async () => {
            const response = await fetch(`/rawData/Gaszähler.csv`);
            const text = new TextDecoder('utf-8').decode(await response.arrayBuffer());
            setCsvData(text);
        };

        fetchCSV();
    }, []);

    const handleConvert = async () => {
        const response = await fetch('/api/csv-to-json', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: csvData,
        });

        const jsonData = await response.json();
        setJsonResult(jsonData);
    };

    return (
        <div>
            <button onClick={handleConvert}>Convert CSV to JSON</button>
            {jsonResult && <pre>{JSON.stringify(jsonResult, null, 2)}</pre>}
        </div>
    );
}
