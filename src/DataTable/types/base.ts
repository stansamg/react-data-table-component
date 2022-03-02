export type { CSSObject } from 'styled-components';

export enum SortOrder {
	ASC = 'asc',
	DESC = 'desc',
}

export type Primitive = string | number | boolean | bigint;
export type ColumnSortFunction<T> = (a: T, b: T) => number;
export type ExpandRowToggled<T> = (expanded: boolean, row: T) => void;
export type Format<T> = (row: T, rowIndex: number) => React.ReactNode;
export type RowState<T> = ((row: T) => boolean) | null;
export type Selector<T> = (row: T, rowIndex?: number) => Primitive;
export type SortFunction<T> = (rows: T[], field: Selector<T>, sortDirection: SortOrder) => T[];
export type TableRow = Record<string, unknown>;
export type ComponentProps = Record<string, unknown>;
export type ExpanderComponentProps<T> = { data: T };
export type ExpandableRowsComponent<T> = React.ComponentType<ExpanderComponentProps<T>>;

export interface ExpandableIcon {
	collapsed: React.ReactNode;
	expanded: React.ReactNode;
}

export interface ContextMessage {
	singular: string;
	plural: string;
	message?: string;
}

export type Nullable<T> = T | null | undefined;
