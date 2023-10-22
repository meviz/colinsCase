import { ReactNode } from "react";

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export interface BreadcrumbItem {
    title: ReactNode;
    url?: string;
}
