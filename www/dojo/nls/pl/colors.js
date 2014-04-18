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
"dojo/nls/pl/colors", ({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.
	//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color (e.g. gray / grey).
	//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
	aliceblue: "bladoniebieski",
	antiquewhite: "biel antyczna",
	aqua: "morski",
	aquamarine: "akwamaryna",
	azure: "lazurowy",
	beige: "beżowy",
	bisque: "cielistobeżowy",
	black: "czarny",
	blanchedalmond: "obrany migdał",
	blue: "niebieski",
	blueviolet: "błękitnofiołkowy",
	brown: "brązowy",
	burlywood: "piaskowobeżowy",
	cadetblue: "szaroniebieski",
	chartreuse: "żółtooliwkowy",
	chocolate: "czekoladowy",
	coral: "koralowy",
	cornflowerblue: "niebieskochabrowy",
	cornsilk: "białożółty",
	crimson: "karmazynowy",
	cyan: "niebieskozielony",
	darkblue: "ciemnoniebieski",
	darkcyan: "ciemnoniebieskozielony",
	darkgoldenrod: "ciemne stare złoto",
	darkgray: "ciemnoszary",
	darkgreen: "ciemnozielony",
	darkgrey: "ciemnoszary", // same as darkgray
	darkkhaki: "ciemny khaki",
	darkmagenta: "ciemnoamarantowy",
	darkolivegreen: "ciemnooliwkowozielony",
	darkorange: "ciemnopomarańczowy",
	darkorchid: "ciemna orchidea",
	darkred: "ciemnoczerwony",
	darksalmon: "ciemnołososiowy",
	darkseagreen: "ciemna zieleń morska",
	darkslateblue: "ciemny gołębi",
	darkslategray: "ciemny mysi",
	darkslategrey: "ciemny mysi", // same as darkslategray
	darkturquoise: "ciemnoturkusowy",
	darkviolet: "ciemnofiołkowy",
	deeppink: "głęboki róż",
	deepskyblue: "intensywny błękit nieba",
	dimgray: "przyciemniony szary",
	dimgrey: "przyciemniony szary", // same as dimgray
	dodgerblue: "niebieski Dodgersów",
	firebrick: "podpalana cegła",
	floralwhite: "złamana biel",
	forestgreen: "leśna zieleń",
	fuchsia: "fuksjowy",
	gainsboro: "jasnoniebieskawoszary",
	ghostwhite: "sina biel",
	gold: "złoty",
	goldenrod: "stare złoto",
	gray: "szary",
	green: "zielony",
	greenyellow: "zielonożółty",
	grey: "szary", // same as gray
	honeydew: "miodowy",
	hotpink: "odblaskoworóżowy",
	indianred: "kasztanowy",
	indigo: "indygo",
	ivory: "kość słoniowa",
	khaki: "khaki",
	lavender: "lawendowy",
	lavenderblush: "lawendoworóżowy",
	lawngreen: "trawiasty",
	lemonchiffon: "babka cytrynowa",
	lightblue: "jasnoniebieski",
	lightcoral: "jasnokoralowy",
	lightcyan: "jasnoniebieskozielony",
	lightgoldenrodyellow: "jasne stare złoto",
	lightgray: "jasnoszary",
	lightgreen: "jasnozielony",
	lightgrey: "jasnoszary", // same as lightgray
	lightpink: "jasnoróżowy",
	lightsalmon: "jasnołososiowy",
	lightseagreen: "jasna zieleń morska",
	lightskyblue: "jasny błękit nieba",
	lightslategray: "jasny mysi",
	lightslategrey: "jasny mysi", // same as lightslategray
	lightsteelblue: "jasnostalowoniebieski",
	lightyellow: "jasnożółty",
	lime: "limonkowy",
	limegreen: "limonkowozielony",
	linen: "lniany",
	magenta: "amarantowy",
	maroon: "rdzawoczerwony",
	mediumaquamarine: "średnia akwamaryna",
	mediumblue: "średni niebieski",
	mediumorchid: "średnia orchidea",
	mediumpurple: "średni fioletowy",
	mediumseagreen: "średnia zieleń morska",
	mediumslateblue: "średni gołębi",
	mediumspringgreen: "średnia wiosenna zieleń",
	mediumturquoise: "średni turkusowy",
	mediumvioletred: "średni fiołkowowoczerwony",
	midnightblue: "atramentowoniebieski",
	mintcream: "miętowokremowy",
	mistyrose: "mglistoróżany",
	moccasin: "mokasynowy",
	navajowhite: "biel Nawaho",
	navy: "granatowy",
	oldlace: "ecru",
	olive: "oliwkowy",
	olivedrab: "oliwkowozielony",
	orange: "pomarańczowy",
	orangered: "czerwona pomarańcza",
	orchid: "orchidea",
	palegoldenrod: "blade stare złoto",
	palegreen: "bladozielony",
	paleturquoise: "bladoturkusowy",
	palevioletred: "bladofiołkowoczerwony",
	papayawhip: "kremowa papaja",
	peachpuff: "cielisty brzoskwiniowy",
	peru: "palona glina",
	pink: "różowy",
	plum: "śliwkowy",
	powderblue: "jasnobladobłękitny",
	purple: "fioletowy",
	red: "czerwony",
	rosybrown: "różanobrązowy",
	royalblue: "królewska purpura",
	saddlebrown: "brąz skórzany",
	salmon: "łososiowy",
	sandybrown: "piaskowobrązowy",
	seagreen: "zieleń morska",
	seashell: "matowoliliowy",
	sienna: "sjena",
	silver: "srebrny",
	skyblue: "błękit nieba",
	slateblue: "gołębi",
	slategray: "mysi",
	slategrey: "mysi", // same as slategray
	snow: "śnieżny",
	springgreen: "wiosenna zieleń",
	steelblue: "stalowoniebieski",
	tan: "śniady",
	teal: "zielonomodry",
	thistle: "kwiat ostu",
	tomato: "pomidorowy",
	transparent: "przezroczysty",
	turquoise: "turkusowy",
	violet: "fiołkowy",
	wheat: "pszeniczny",
	white: "biały",
	whitesmoke: "siwy",
	yellow: "żółty",
	yellowgreen: "żółtozielony"
})
);
