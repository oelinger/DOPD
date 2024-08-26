'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Chart from '@/app/code-demo/components/Chart/Chart';

export default function DeviceData() {
    const [jsonResult, setJsonResult] = useState<any>(null);
    const [csvData, setCsvData] = useState<string>('');
    const pathname = usePathname();
    const topic = decodeURIComponent(pathname.split('/')[2]);
    const topicCapitalized = topic.charAt(0).toUpperCase() + topic.slice(1);

    useEffect(() => {
        const fetchCSV = async () => {
            const response = await fetch(`/rawData/${topicCapitalized}.csv`);
            const text = await response.text();
            setCsvData(text);
        };

        fetchCSV();
    }, [topicCapitalized]);

    useEffect(() => {
        if (csvData) {
            handleConvert();
        }
    }, [csvData]);

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
        <PageContainer>
            {jsonResult ? <Chart data={jsonResult} /> : <button onClick={handleConvert}>Convert</button>}
        </PageContainer>
    );
}
