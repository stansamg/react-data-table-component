import { Alignment, Direction } from '../constants';
import { TableColumn, TableColumnResizeEvent } from './column';
import { ConditionalStyles, TableStyles, Themes } from './theme';
import {
	ComponentProps,
	ContextMessage,
	CSSObject,
	ExpandableIcon,
	ExpandableRowsComponent,
	ExpandRowToggled,
	RowState,
	SortFunction,
	SortOrder,
} from './base';
import {
	PaginationChangePage,
	PaginationChangeRowsPerPage,
	PaginationOptions,
	PaginationComponent,
	PaginationServerOptions,
} from './pagination';
import {IStorage, TableStoreType} from "./storage";

export type TableStorageProps = { storage?: never; storageKey?: never }
															| { storage: IStorage<TableStoreType>; storageKey: string };

export type TableProps<DataType> = TableStorageProps & {
	actions?: React.ReactNode | React.ReactNode[];
	className?: string;

	//columns
	columns: TableColumn<DataType>[];
	defaultSortAsc?: boolean;
	defaultSortFieldId?: string | number | null | undefined;
	direction?: Direction;
	onSort?: (selectedColumn: TableColumn<DataType>, sortDirection: SortOrder) => void;
	onColumnOrderChange?: (nextOrder: TableColumn<DataType>[]) => void;
	minColumnsWidth?: string;
	onColumnResize?: (e: TableColumnResizeEvent<DataType>) => void;

	//rows
	clearSelectedRows?: boolean;
	conditionalRowStyles?: ConditionalStyles<DataType>[];
	onChangeRowsPerPage?: PaginationChangeRowsPerPage;
	onRowClicked?: (row: DataType, e: React.MouseEvent) => void;
	onRowDoubleClicked?: (row: DataType, e: React.MouseEvent) => void;
	onRowExpandToggled?: ExpandRowToggled<DataType>;
	onSelectedRowsChange?: (selected: { allSelected: boolean; selectedCount: number; selectedRows: DataType[] }) => void;
	selectableRowDisabled?: RowState<DataType>;
	selectableRows?: boolean;
	selectableRowsComponent?: 'input' | React.ReactNode;
	selectableRowsComponentProps?: ComponentProps;
	selectableRowSelected?: RowState<DataType>;
	selectableRowsHighlight?: boolean;
	selectableRowsNoSelectAll?: boolean;
	selectableRowsVisibleOnly?: boolean;
	selectableRowsSingle?: boolean;

	contextActions?: React.ReactNode | React.ReactNode[];
	contextComponent?: React.ReactNode;
	contextMessage?: ContextMessage;
	customStyles?: TableStyles;
	data: DataType[];

	dense?: boolean;

	disabled?: boolean;
	expandableIcon?: ExpandableIcon;
	expandableInheritConditionalStyles?: boolean;
	expandableRowDisabled?: RowState<DataType>;
	expandableRowExpanded?: RowState<DataType>;
	expandableRows?: boolean;
	expandableRowsComponent?: ExpandableRowsComponent<DataType>;
	expandableRowsComponentProps?: ComponentProps;
	expandableRowsHideExpander?: boolean;
	expandOnRowClicked?: boolean;
	expandOnRowDoubleClicked?: boolean;
	fixedHeader?: boolean;
	fixedHeaderScrollHeight?: string;
	highlightOnHover?: boolean;
	keyField?: string;
	noContextMenu?: boolean;
	noDataComponent?: React.ReactNode;
	noHeader?: boolean;
	noTableHead?: boolean;
	onChangePage?: PaginationChangePage;

	// pagination
	pagination?: boolean;
	paginationComponent?: PaginationComponent;
	paginationComponentOptions?: PaginationOptions;
	paginationDefaultPage?: number;
	paginationIconFirstPage?: React.ReactNode;
	paginationIconLastPage?: React.ReactNode;
	paginationIconNext?: React.ReactNode;
	paginationIconPrevious?: React.ReactNode;
	paginationPerPage?: number;
	paginationResetDefaultPage?: boolean;
	paginationRowsPerPageOptions?: number[];
	paginationServer?: boolean;
	paginationServerOptions?: PaginationServerOptions;
	paginationTotalRows?: number;
	persistTableHead?: boolean;
	pointerOnHover?: boolean;
	progressComponent?: React.ReactNode;
	progressPending?: boolean;
	responsive?: boolean;

	sortFunction?: SortFunction<DataType> | null;
	sortIcon?: React.ReactNode;
	sortServer?: boolean;
	striped?: boolean;
	style?: CSSObject;
	subHeader?: React.ReactNode | React.ReactNode[];
	subHeaderAlign?: Alignment;
	subHeaderComponent?: React.ReactNode | React.ReactNode[];
	subHeaderWrap?: boolean;
	theme?: Themes;
	/**
	 *  Shows and displays a header with a title
	 *  */
	title?: string | React.ReactNode;
};



export type TableState<T> = {
	allSelected: boolean;
	contextMessage: ContextMessage;
	selectedCount: number;
	selectedRows: T[];
	selectedColumn: TableColumn<T>;
	sortDirection: SortOrder;
	currentPage: number;
	rowsPerPage: number;
	selectedRowsFlag: boolean;
	/* server-side pagination and server-side sorting will cause selectedRows to change
	 because of this behavior onSelectedRowsChange useEffect is triggered (by design it should notify if there was a change)
	 however, when using selectableRowsSingle
	*/
	toggleOnSelectedRowsChange: boolean;
};
