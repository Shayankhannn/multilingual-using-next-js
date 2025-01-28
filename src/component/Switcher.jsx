"use client"
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

import React from 'react'

const Switcher = () => {
    const localeActive = useLocale();
    const router = useRouter();
    const onSelectChange = (e) => {
        const locale = e.target.value;
        router.replace(`/${locale}`);
    }
  return (
    <div>
        <label htmlFor="locale">Choose a locale:
            <select defaultValue={localeActive} id="locale" onChange={onSelectChange}>
                <option value="en">English</option>
                <option value="nl">Dutch</option>
                <option value="ar">Arabic</option>
            </select>
        </label>
    </div>
  )
}

export default Switcher