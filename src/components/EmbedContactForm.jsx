"use client";

import { useEffect, useState } from 'react';
import { FadeIn } from '@/components/FadeIn'
import Script from 'next/script'


export function EmbedContactForm() {
    const [isClient, setIsClient] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setIsClient(true); // Set isClient to true once the component is mounted in the browser
        setLoading(false); // Once mounted, stop loading
    }, []);

    return (
        <FadeIn className="lg:order-last">
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Work inquiries
            </h2>
            <div className="space-y-10 mt-6 p-6 bg-white border border-neutral-300 rounded-t-2xl rounded-b-2xl">
                {loading && <div className="font-display text-xl text-center">Loading form...</div>}
                {isClient && !loading && (
                    <>
                        <div data-tf-live="01JDAF0MF0E0Y506J80M0Q8KSS"></div>
                        <Script strategy="afterInteractive" src="//embed.typeform.com/next/embed.js"/>
                    </>
                )}
            </div>
        </FadeIn>
    );
}
