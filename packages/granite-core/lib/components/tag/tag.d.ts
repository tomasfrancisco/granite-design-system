import { FC, ReactNode } from "react";
type TagProps = {
    children: ReactNode;
    className?: string;
    level: "success" | "danger" | "warning" | "info";
};
export declare const Tag: FC<TagProps>;
export {};
