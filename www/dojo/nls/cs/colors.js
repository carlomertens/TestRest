/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2013. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
//>>built
define(
"dojo/nls/cs/colors", ({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.
	//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color (e.g. gray / grey).
	//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
	aliceblue: "modravá",
	antiquewhite: "krémově bílá",
	aqua: "azurová",
	aquamarine: "akvamarínová",
	azure: "bledě azurová",
	beige: "bledě béžová",
	bisque: "bledě oranžová",
	black: "černá",
	blanchedalmond: "mandlová",
	blue: "modrá",
	blueviolet: "modrofialová",
	brown: "červenohnědá",
	burlywood: "krémová",
	cadetblue: "šedomodrá",
	chartreuse: "chartreuska",
	chocolate: "hnědobéžová",
	coral: "korálová červená",
	cornflowerblue: "chrpově modrá",
	cornsilk: "režná",
	crimson: "karmínová",
	cyan: "azurová",
	darkblue: "tmavě modrá",
	darkcyan: "tmavě azurová",
	darkgoldenrod: "tmavě béžová",
	darkgray: "tmavě šedá",
	darkgreen: "tmavě zelená",
	darkgrey: "tmavě šedá", // same as darkgray
	darkkhaki: "pískově hnědá",
	darkmagenta: "tmavě purpurová",
	darkolivegreen: "tmavě olivová",
	darkorange: "tmavě oranžová",
	darkorchid: "tmavě orchidejová",
	darkred: "tmavě červená",
	darksalmon: "tmavě lososová",
	darkseagreen: "tmavá mořská zelená",
	darkslateblue: "tmavá břidlicová modrá",
	darkslategray: "tmavá břidlicová šedá",
	darkslategrey: "tmavá břidlicová šedá", // same as darkslategray
	darkturquoise: "tmavě tyrkysová",
	darkviolet: "tmavě fialová",
	deeppink: "sytě růžová",
	deepskyblue: "sytá nebeská modrá",
	dimgray: "kouřově šedá",
	dimgrey: "kouřově šedá", // same as dimgray
	dodgerblue: "jasně modrá",
	firebrick: "cihlová",
	floralwhite: "květinově bílá",
	forestgreen: "lesní zelená",
	fuchsia: "fuchsiová",
	gainsboro: "bledě šedá",
	ghostwhite: "modravě bílá",
	gold: "zlatá",
	goldenrod: "béžová",
	gray: "šedá",
	green: "zelená",
	greenyellow: "zelenožlutá",
	grey: "šedá", // same as gray
	honeydew: "nazelenalá",
	hotpink: "jasně růžová",
	indianred: "indiánská červená",
	indigo: "indigově modrá",
	ivory: "slonovinová",
	khaki: "písková",
	lavender: "levandulová",
	lavenderblush: "levandulová růžová",
	lawngreen: "jasně zelená",
	lemonchiffon: "světle citrónová",
	lightblue: "světle modrá",
	lightcoral: "světle korálová",
	lightcyan: "světle azurová",
	lightgoldenrodyellow: "světle žlutá",
	lightgray: "světle šedá",
	lightgreen: "světle zelená",
	lightgrey: "světle šedá", // same as lightgray
	lightpink: "světle růžová",
	lightsalmon: "světle lososová",
	lightseagreen: "světlá mořská zelená",
	lightskyblue: "světlá nebeská modrá",
	lightslategray: "světlá břidlicová šedá",
	lightslategrey: "světlá břidlicová šedá", // same as lightslategray
	lightsteelblue: "světlá ocelová modrá",
	lightyellow: "bledě žlutá",
	lime: "limetková",
	limegreen: "limetkově zelená",
	linen: "bledě šedobéžová",
	magenta: "purpurová",
	maroon: "kaštanová",
	mediumaquamarine: "střední akvamarínová",
	mediumblue: "středně modrá",
	mediumorchid: "středně orchidejová",
	mediumpurple: "středně nachová",
	mediumseagreen: "střední mořská zelená",
	mediumslateblue: "střední břidlicová modrá",
	mediumspringgreen: "střední jarní zelená",
	mediumturquoise: "středně tyrkysová",
	mediumvioletred: "středně fialovočervená",
	midnightblue: "temně modrá",
	mintcream: "mentolová",
	mistyrose: "růžovobílá",
	moccasin: "bledě krémová",
	navajowhite: "světle krémová",
	navy: "námořnická modrá",
	oldlace: "světle béžová",
	olive: "olivová",
	olivedrab: "khaki",
	orange: "oranžová",
	orangered: "oranžovočervená",
	orchid: "orchidejová",
	palegoldenrod: "bledě písková",
	palegreen: "bledě zelená",
	paleturquoise: "bledě tyrkysová",
	palevioletred: "bledě fialovočervená",
	papayawhip: "papájová",
	peachpuff: "broskvová",
	peru: "karamelová",
	pink: "růžová",
	plum: "švestková",
	powderblue: "bledě modrá",
	purple: "nachová",
	red: "červená",
	rosybrown: "růžovohnědá",
	royalblue: "královská modrá",
	saddlebrown: "hnědá",
	salmon: "lososová",
	sandybrown: "oranžovohnědá",
	seagreen: "mořská zelená",
	seashell: "lasturová",
	sienna: "siena",
	silver: "stříbrná",
	skyblue: "nebeská modrá",
	slateblue: "břidlicová modrá",
	slategray: "břidlicová šedá",
	slategrey: "břidlicová šedá", // same as slategray
	snow: "sněhobílá",
	springgreen: "jarní zelená",
	steelblue: "ocelová modrá",
	tan: "šedobéžová",
	teal: "šedozelená",
	thistle: "bodláková",
	tomato: "tomatová",
	transparent: "průhledná",
	turquoise: "tyrkysová",
	violet: "fialová",
	wheat: "zlatohnědá",
	white: "bílá",
	whitesmoke: "kouřově bílá",
	yellow: "žlutá",
	yellowgreen: "žlutozelená"
})
);
