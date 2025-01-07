export type ContainerProps = {
  children: React.ReactNode;
};

export type PrimaryInputProps = {
  name: string;
  label: string;
  placeholder: string;
  isNumber?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

export type NewItemProps = {
  name: string;
  qty: number;
  price: number;
  amount: number;
};

export type DisplayProps = {
  items: NewItemProps[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
