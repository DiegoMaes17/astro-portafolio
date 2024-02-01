import spanish from './es.json'
import ingles from './en.json'

const LANGUAGES = {
    SPANISH : 'es',
    INGLES: 'en'
}

export const getI18N = ({ currentLocale}: {currentLocale: string | undefined}) =>{
    if (currentLocale === LANGUAGES.INGLES) return ingles
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    return spanish
}