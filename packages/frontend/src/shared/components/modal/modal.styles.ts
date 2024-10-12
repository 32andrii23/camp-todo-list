import { css } from "@emotion/css";
import { colors } from "~shared/styles";
import { SHADOWS } from "~shared/styles/theme";

export const modalOverlayStyles = css`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const modalContentStyles = css`
	background: white;
	padding: 20px;
	border-radius: 8px;
	width: 400px;
	max-width: 80%;
	position: relative;
`;

export const closeButtonStyles = css`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	color: black;
`;
