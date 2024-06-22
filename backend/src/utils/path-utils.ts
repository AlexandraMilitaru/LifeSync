import path from "path"

class PathUtils {
    static getFilePath(fileName: string): string {
        return path.join(__dirname, '..', 'files', fileName);
    }

    static getCodePath(fileName: string): string {
        return path.join(__dirname, '..', 'code', fileName);
    }
}

export default PathUtils;