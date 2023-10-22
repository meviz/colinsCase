import { ReactNode } from "react";

export interface SectionCardProps {
    title: string;
    action?: ReactNode[];
    children: ReactNode;
    divider?: boolean;
}
