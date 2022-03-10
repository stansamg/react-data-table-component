export interface IStorage<T extends {} = {}> {
	getItem(key: string): T | null;
	setItem(key: string, value: T): void;
}

export type ColumnWidthObjectType = {
	[key: string]: string;
};

export type TableStoreType = {
	initialSize?: ColumnWidthObjectType;
	initialSortColumn?: string;
	initialSortType?: "asc" | "desc";
};
