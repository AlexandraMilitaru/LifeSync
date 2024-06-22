// {
//     firstName: "Alexandra",
//     lastName: "Militaru"
// }
// o sa-l transforme in
// {
//     first_name: "Alexandra",
//     last_name: "Militaru"
// }

import StringUtils from "./string-utils";

class ObjectUtils {
    static camelCaseKeysToSnakeCase = (obj: Record<string, any>): Record<string, any> => {
        const result: Record<string, any> = {};

        Object.entries(obj).forEach(([key, value]) => {
            const snakeCaseKey = StringUtils.camelCaseToSnakeCase(key);
            result[snakeCaseKey] = value;
        });

        return result;
    }

    static snakeCaseKeysToCamelCase = (obj: Record<string, any>): Record<string, any> => {
        const result: Record<string, any> = {};
    
            Object.entries(obj).forEach(([key, value]) => {
                const snakeCaseKey = StringUtils.snakeCaseToCamelCase(key);
                result[snakeCaseKey] = value;
            });
    
            return result;
    }

};

export default ObjectUtils;