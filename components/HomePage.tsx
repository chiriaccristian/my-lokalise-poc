import LanguageSwitcher from "@/components/LanguageSwitcher";
import {getTranslations} from 'next-intl/server';

export default async function HomePage() {
    const t = await getTranslations('Home');
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <LanguageSwitcher />
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <div className="flex justify-around w-full gap-4">
                    <button className="bg-sky-500 px-4 py-2 rounded-sm">{t('save')}</button>
                    <button className="bg-sky-500 px-4 py-2 rounded-sm">{t('close')}</button>
                </div>
            </main>
        </div>
    )
}