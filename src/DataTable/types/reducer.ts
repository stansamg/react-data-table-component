import { SortOrder } from './base';
import { TableColumn } from './column';

// Reducer Actions
export interface AllRowsAction<T> {
	type: 'SELECT_ALL_ROWS';
	keyField: string;
	rows: T[];
	rowCount: number;
	mergeSelections: boolean;
}

export interface SingleRowAction<T> {
	type: 'SELECT_SINGLE_ROW';
	keyField: string;
	row: T;
	isSelected: boolean;
	rowCount: number;
	singleSelect: boolean;
}

export interface MultiRowAction<T> {
	type: 'SELECT_MULTIPLE_ROWS';
	keyField: string;
	selectedRows: T[];
	totalRows: number;
	mergeSelections: boolean;
}

export interface SortAction<T> {
	type: 'SORT_CHANGE';
	sortDirection: SortOrder;
	selectedColumn: TableColumn<T>;
	clearSelectedOnSort: boolean;
}

export interface PaginationPageAction {
	type: 'CHANGE_PAGE';
	page: number;
	paginationServer: boolean;
	visibleOnly: boolean;
	persistSelectedOnPageChange: boolean;
}

export interface PaginationRowsPerPageAction {
	type: 'CHANGE_ROWS_PER_PAGE';
	rowsPerPage: number;
	page: number;
}

export interface ClearSelectedRowsAction {
	type: 'CLEAR_SELECTED_ROWS';
	selectedRowsFlag: boolean;
}

export interface ColumnsAction<T> {
	type: 'UPDATE_COLUMNS';
	cols: TableColumn<T>[];
}

export type Action<T> =
	| AllRowsAction<T>
	| SingleRowAction<T>
	| MultiRowAction<T>
	| SortAction<T>
	| PaginationPageAction
	| PaginationRowsPerPageAction
	| ClearSelectedRowsAction;
