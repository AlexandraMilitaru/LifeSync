class LocalStorageUtils {
    public static getItem = (key: string): object | null => {
        const item = localStorage.getItem(key);

        if (!item) {
            return null;
        }

        return JSON.parse(item);
    }

    public static setItem = (key: string, data: object) => {
        localStorage.setItem(key, JSON.stringify(data));
    }

    public static setItemProperty = (key: string, property: string, value: string) => {
        const item = localStorage.getItem(key);

        if (!item) {
            return;
        }

        const json = JSON.parse(item);
        json[property] = value;
        localStorage.setItem(key, JSON.stringify(json));
    }
}

export default LocalStorageUtils;