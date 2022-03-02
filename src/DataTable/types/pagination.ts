export type PaginationChangePage = (page: number, totalRows: number) => void;

export type PaginationChangeRowsPerPage = (currentRowsPerPage: number, currentPage: number) => void;

export type PaginationComponentProps = {
	rowsPerPage: number;
	rowCount: number;
	currentPage: number;
	onChangePage: PaginationChangePage;
	onChangeRowsPerPage: PaginationChangeRowsPerPage;
};

export type PaginationComponent = React.ComponentType<PaginationComponentProps>;

export interface PaginationOptions {
	noRowsPerPage?: boolean;
	rowsPerPageText?: string;
	rangeSeparatorText?: string;
	selectAllRowsItem?: boolean;
	selectAllRowsItemText?: string;
}

export interface PaginationServerOptions {
	persistSelectedOnSort?: boolean;
	persistSelectedOnPageChange?: boolean;
}
