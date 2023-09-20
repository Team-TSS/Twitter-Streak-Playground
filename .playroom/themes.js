import React from 'react';
import { ThemeProvider } from '../path/to/your/theming-system';

export default function FrameComponent({ theme, children }) {
	return <div theme={theme}>{children}</div>;
}
