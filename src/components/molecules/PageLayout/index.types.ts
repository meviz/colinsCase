import { BreadcrumbItem } from "components/atoms/Breadcrumb/index.types";
import { ReactNode } from "react";

export interface PageLayoutProps {
    backLink?: string;
    title: string;
    children: ReactNode;
    breadcrumbItems?: BreadcrumbItem[];
}
