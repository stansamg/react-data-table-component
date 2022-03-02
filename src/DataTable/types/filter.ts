import { ReactElement } from 'react';

export enum FilterTypes {
	TEXT_EQUAL = 'TEXT_EQUAL',
}

export interface TableFilterSearchProps {
	columnSelector: string;
	searchText: string;
	type: FilterTypes;
}

export interface TableFilterSubmitProps<T> {
	columnSelector: string;
	selectedValues: T[];
	type: FilterTypes;
}

export type SupportedLabelType = string | number | null;

export type LRWTableFilterProps<T> = {
	type: FilterTypes;
	isActive?: boolean;
	label?: (v: T) => SupportedLabelType;
	columnSelector: string;
	defaultSelectedValues?: T[];
	searchFunc: (v: TableFilterSearchProps) => Promise<T[]>;
	onSubmit: (v: TableFilterSubmitProps<T>) => void;
	children?: ReactElement;
};
