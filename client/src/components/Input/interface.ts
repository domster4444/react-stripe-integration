export interface InputPropsI {
  elementSize?: string;
  type: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // types for rest parameter
  [key: string]: any;
}
