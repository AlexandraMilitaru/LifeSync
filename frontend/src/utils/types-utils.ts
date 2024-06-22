class TypesUtils {
    public static initRecord = <T extends string, U>(keys: T[], defaultValue: U): Record<T, U> => {
        const record: Partial<Record<T, U>> = {};
        for (const key of keys) {
            record[key] = defaultValue;
        }
        return record as Record<T, U>;
    }
}

export default TypesUtils;