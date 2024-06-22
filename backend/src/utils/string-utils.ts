class StringUtils {
    static camelCaseToSnakeCase = (str: string): string => {
        return str
            .replace(/([A-Z])/g, '_$1') // AnaAreMere -> _Ana_Are_Mere
            .toLowerCase() // _Ana_Are_Mere -> _ana_are_mere
            .replace(/^_/, ''); // ana_are_mere, pe scurt, sterge prima linie
    }

    static snakeCaseToCamelCase = (str: string): string => {
        return str.replace(/(_\w)/g, (match) => match[1].toUpperCase()); // sterge underscore si face prima litera mare de la ana_are_mere la anaAreMere
    };

    static spaceToCamelCase = (str: string): string => {
        // din Ana are mere -> anaAreMere
        const words = str.split(' ');
        const camelCaseWords = words.map((word, index) => {
            word = word.toLowerCase();
            if (index > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        });
        return camelCaseWords.join('');
    }
}

export default StringUtils;