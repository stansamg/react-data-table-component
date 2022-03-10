import { ColumnSortFunction, CSSObject, Format, Selector } from './base';
import { Media } from '../constants';
import { ConditionalStyles } from './theme';
export type TableColumnBase = {
	allowOverflow?: boolean;
	button?: boolean;
	center?: boolean;
	compact?: boolean;
	reorder?: boolean;
	grow?: number;
	hide?: number | ((value: number) => CSSObject) | Media;
	ignoreRowClick?: boolean;
	maxWidth?: string;
	minWidth?: string;
	name?: string | number | React.ReactNode;
	omit?: boolean;
	right?: boolean;
	sortable?: boolean;
	style?: CSSObject;
	width?: string;
	wrap?: boolean;
};

type TableColumnResizeProp<B> = B extends true
	? { resizable: B; id: string | number }
	: { resizable?: B; id?: string | number };

export type TableColumn<T, B = boolean> = TableColumnBase & TableColumnResizeProp<B> & {
	name?: string | number | React.ReactNode;
	sortField?: string;
	cell?: (row: T, rowIndex: number, column: TableColumn<T>, id: string | number) => React.ReactNode;
	conditionalCellStyles?: ConditionalStyles<T>[];
	format?: Format<T> | undefined;
	selector?: Selector<T>;
	sortFunction?: ColumnSortFunction<T>;
	filter?: React.ReactElement;
}

export type TableColumnResizeEvent<T> = Pick<TableColumn<T>, 'id' | 'width'>;
