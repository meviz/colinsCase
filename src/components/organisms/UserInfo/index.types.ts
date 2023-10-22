import { FormInstance } from "antd";
import { User } from "utils/index.types";

export interface UserInfoProps {
    form: FormInstance<User>;
    onFinish?: (value: User) => void;
}
