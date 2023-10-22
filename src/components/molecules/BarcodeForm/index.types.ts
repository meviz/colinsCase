export interface BarcodeFormProps {
    disabled?: boolean;
    barcodeList?: string[];
    value?: string;
    onInputChange?: (value: string) => void;
    onBarcodeClick?: () => void;
}
