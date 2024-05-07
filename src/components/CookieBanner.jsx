'use client';

import Link from 'next/link'
import {getLocalStorage, setLocalStorage} from '@/lib/storageHelper';
import {useState, useEffect} from 'react';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(null);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])


    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        /*window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });*/

        setLocalStorage("cookie_consent", cookieConsent)

        //For Testing
        console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);

    return (

        <div className={`pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 ${cookieConsent != null ? "hidden" : "flex"}`}>
            <div className="pointer-events-auto max-w-xs rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
                <p className="text-sm leading-6 text-gray-900">
                    We value your privacy. We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Allow Cookies&quot;, you consent to our use of cookies. See our{' '}
                    <Link
                        href='/privacy-policy'
                        className="font-semibold text-indigo-600"
                    >
                        cookie policy
                    </Link>
                    .
                </p>
                <div className="mt-4 flex items-center gap-x-5">
                    <button
                        type="button"
                        className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                        onClick={() => setCookieConsent(true)}
                    >
                        Allow Cookies
                    </button>
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setCookieConsent(false)}>
                        Decline
                    </button>
                </div>
            </div>
        </div>
)
}
