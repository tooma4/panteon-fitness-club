/// <reference types="vite/client" />
import 'react';

declare module 'react' {
	interface CSSProperties {
		'--background-image'?: string;
	}

	interface CSSPropertiesWithMultiValues
		extends CSSProperties,
			CSS.Properties<string | number, string & {}> {}

	interface CSSPseudoElementProperties extends CSSPropertiesWithMultiValues {}

	interface CSSProperties {
		[K: `--${string}`]: string | number | undefined;
	}
}