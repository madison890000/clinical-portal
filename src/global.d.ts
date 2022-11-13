declare interface Window {
    notificator: (message: string, severity: any) => void;
}
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
