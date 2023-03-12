interface SiteConfig {
	author: string;
	title: string;
	description: string;
	lang: string;
	ogLocale: string;
	themeColorLight: string;
	themeColorDark: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
}

export const siteConfig: SiteConfig = {
	author: "Renan Esteves",
	title: "Renan's website",
	description: "An opinionated starter theme for Astro",
	lang: "en-GB",
	ogLocale: "en_GB",
	themeColorLight: "#fafafa",
	themeColorDark: "#1d1f21",
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};
