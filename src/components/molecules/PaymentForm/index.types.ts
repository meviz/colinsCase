import { Payment } from "utils/index.types";

export interface PaymentFormProps {
    onAdd?: (value: Payment) => void;
}
