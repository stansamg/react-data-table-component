import styled, { css } from 'styled-components';
import React, { FC, useState } from 'react';
import Portal from './Portal';

const ColumnResizeBorderStyle = styled.div`
	height: 100%;
	width: 6px;
	border-style: dotted;
	border-color: #ccc;
	border-width: 0 2px 0 0;
	opacity: 0.5;
`;

const ColumnStyle = styled.div<{
	startPosition?: boolean;
}>`
	position: absolute;
	right: 0;
	height: 100%;
	width: 10px;
	cursor: col-resize;

	${ColumnResizeBorderStyle}:hover {
		opacity: 1;
	}

	${({ startPosition }) =>
		startPosition &&
		css`
			${ColumnResizeBorderStyle} {
				border-color: var(--main-text-color);
				opacity: 1;

				&:hover {
					border-color: var(--main-text-color);
					opacity: 1;
				}
			}
		`}
`;

const ControlAreaStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 999;
	cursor: col-resize;
`;

export interface ResizeElementProps {
	onWidthChange: (w: React.MouseEvent) => void;
}

const TableColResizeElement: FC<ResizeElementProps> = ({ onWidthChange }) => {
	const [startPosition, setStartPosition] = useState<boolean>(false);

	const onMouseMove = (event: React.MouseEvent) => {
		if (startPosition) {
			onWidthChange(event);
		}
	};

	const activateResize = () => {
		setStartPosition(true);
	};

	const deactivateResize = () => {
		setStartPosition(false);
	};

	return (
		<ColumnStyle
			startPosition={startPosition}
			onMouseUp={deactivateResize}
			onMouseDown={activateResize}
			onMouseMove={onMouseMove}
		>
			<ColumnResizeBorderStyle />
			<Portal id="resize-control">{startPosition && <ControlAreaStyle onMouseUp={deactivateResize} />}</Portal>
		</ColumnStyle>
	);
};

export default TableColResizeElement;
