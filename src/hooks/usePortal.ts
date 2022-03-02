import { useEffect, useMemo, useRef } from 'react';

const createRootElement = (id: string) => {
	const root = document.createElement('div');
	root.setAttribute('id', id);
	return root;
};

export const usePortal = (id: string): HTMLElement => {
	const ref = useRef<HTMLElement | null>(null);

	const portalElement = useMemo(() => {
		if (!ref.current) {
			ref.current = document.createElement('div');
		}
		return ref.current;
	}, []);

	useEffect(() => {
		const existingParent = document.getElementById(id);
		const parentElement = existingParent || createRootElement(id);

		if (!existingParent) document.body.appendChild(parentElement);

		parentElement.appendChild(portalElement);

		return () => {
			portalElement.remove();
			if (parentElement.childNodes.length === 0) parentElement.remove();
		};
	}, [id, portalElement]);

	return portalElement;
};
