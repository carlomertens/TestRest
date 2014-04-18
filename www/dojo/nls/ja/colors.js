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
"dojo/nls/ja/colors", ({
// local representation of all CSS3 named colors, companion to dojo.colors.  To be used where descriptive information
// is required for each color, such as a palette widget, and not for specifying color programatically.
	//Note: due to the SVG 1.0 spec additions, some of these are alternate spellings for the same color (e.g. gray / grey).
	//TODO: should we be using unique rgb values as keys instead and avoid these duplicates, or rely on the caller to do the reverse mapping?
	aliceblue: "アリスブルー",
	antiquewhite: "アンティークホワイト",
	aqua: "アクや1�7",
	aquamarine: "碧緑",
	azure: "薄い空色",
	beige: "ベージュ",
	bisque: "ビスや1�7",
	black: "黄1�7",
	blanchedalmond: "皮なしアーモンド",
	blue: "靄1�7",
	blueviolet: "青紫",
	brown: "茄1�7",
	burlywood: "バーリーウッツ1�7",
	cadetblue: "くすんだ靄1�7",
	chartreuse: "淡黄緄1�7",
	chocolate: "チョコレート",
	coral: "珊瑚",
	cornflowerblue: "コーンフラワーブルー",
	cornsilk: "コーンシルク",
	crimson: "深紅",
	cyan: "シアンブルー",
	darkblue: "ツ1�7ークブルツ1�7",
	darkcyan: "ツ1�7ークシアンブルー",
	darkgoldenrod: "ツ1�7ークゴールデンロッド",
	darkgray: "ツ1�7ークグレや1�7",
	darkgreen: "ツ1�7ークグリーン",
	darkgrey: "ツ1�7ークグレや1�7", // same as darkgray
	darkkhaki: "ツ1�7ークカーや1�7",
	darkmagenta: "ツ1�7ークマジェンや1�7",
	darkolivegreen: "ツ1�7ークオリーブグリーン",
	darkorange: "ツ1�7ークオレンジ",
	darkorchid: "ツ1�7ークオーキッツ1�7",
	darkred: "ツ1�7ークレッツ1�7",
	darksalmon: "ツ1�7ークサーモン",
	darkseagreen: "ツ1�7ークシーグリーン",
	darkslateblue: "ツ1�7ークスレートブルツ1�7",
	darkslategray: "ツ1�7ークスレートグレや1�7",
	darkslategrey: "ツ1�7ークスレートグレや1�7", // same as darkslategray
	darkturquoise: "ツ1�7ークターコイや1�7",
	darkviolet: "ツ1�7ークバイオレット",
	deeppink: "濃いピンや1�7",
	deepskyblue: "濃い空色",
	dimgray: "くすんだグレや1�7",
	dimgrey: "くすんだグレや1�7", // same as dimgray
	dodgerblue: "ドッジャーブルー",
	firebrick: "赤煉瓦色",
	floralwhite: "フローラルホワイツ1�7",
	forestgreen: "フォレストグリーツ1�7",
	fuchsia: "紫紅艄1�7",
	gainsboro: "ゲインズボーツ1�7",
	ghostwhite: "ゴーストホワイト",
	gold: "釄1�7",
	goldenrod: "ゴールデンロッド",
	gray: "グレや1�7",
	green: "緄1�7",
	greenyellow: "緑黄艄1�7",
	grey: "グレや1�7", // same as gray
	honeydew: "ハニーデュー",
	hotpink: "ホットピンク",
	indianred: "インディアンレッツ1�7",
	indigo: "藍色",
	ivory: "アイボリツ1�7",
	khaki: "カーや1�7",
	lavender: "ラベンダツ1�7",
	lavenderblush: "ラベンダーブラッや1�7",
	lawngreen: "ローングリーツ1�7",
	lemonchiffon: "レモンシフォツ1�7",
	lightblue: "ライトブルー",
	lightcoral: "ライトコーラツ1�7",
	lightcyan: "ライトシアン",
	lightgoldenrodyellow: "ライトゴールデンロッドイエロツ1�7",
	lightgray: "ライトグレイ",
	lightgreen: "ライトグリーツ1�7",
	lightgrey: "ライトグレイ", // same as lightgray
	lightpink: "ライトピンク",
	lightsalmon: "ライトサーモツ1�7",
	lightseagreen: "ライトシーグリーツ1�7",
	lightskyblue: "ライトスカイブルツ1�7",
	lightslategray: "ライトスレートグレイ",
	lightslategrey: "ライトスレートグレイ", // same as lightslategray
	lightsteelblue: "ライトスチールブルー",
	lightyellow: "ライトイエロツ1�7",
	lime: "ライツ1�7",
	limegreen: "ライムグリーツ1�7",
	linen: "亜麻艄1�7",
	magenta: "赤紫",
	maroon: "えび茄1�7",
	mediumaquamarine: "ミディアムアクアマリーン",
	mediumblue: "ミディアムブルー",
	mediumorchid: "ミディアムオーキッド",
	mediumpurple: "ミディアムパープツ1�7",
	mediumseagreen: "ミディアムシーグリーツ1�7",
	mediumslateblue: "ミディアムスレートブルー",
	mediumspringgreen: "ミディアムスプリンググリーン",
	mediumturquoise: "ミディアムターコイズ",
	mediumvioletred: "ミディアムバイオレットレッド",
	midnightblue: "ミッドナイトブルツ1�7",
	mintcream: "ミントクリーツ1�7",
	mistyrose: "ミスティローや1�7",
	moccasin: "モカシン",
	navajowhite: "ナバホホワイツ1�7",
	navy: "濃紺",
	oldlace: "オールドレイや1�7",
	olive: "オリーブ",
	olivedrab: "濃黄緄1�7",
	orange: "オレンジ",
	orangered: "オレンジレッツ1�7",
	orchid: "薄紫",
	palegoldenrod: "ペイルゴールデンロッツ1�7",
	palegreen: "ペイルグリーツ1�7",
	paleturquoise: "ペイルターコイズ",
	palevioletred: "ペイルバイオレットレッド",
	papayawhip: "パパイアホイップ",
	peachpuff: "ピーチパツ1�7",
	peru: "ペルツ1�7",
	pink: "ピンや1�7",
	plum: "深紫",
	powderblue: "淡青",
	purple: "約1�7",
	red: "资1�7",
	rosybrown: "ロージーブラウン",
	royalblue: "藤色",
	saddlebrown: "サドルブラウツ1�7",
	salmon: "サーモン",
	sandybrown: "砂褐艄1�7",
	seagreen: "シーグリーン",
	seashell: "シーシェツ1�7",
	sienna: "黄褐艄1�7",
	silver: "銄1�7",
	skyblue: "スカイブルー",
	slateblue: "スレートブルツ1�7",
	slategray: "スレートグレや1�7",
	slategrey: "スレートグレや1�7", // same as slategray
	snow: "雪色",
	springgreen: "スプリンググリーツ1�7",
	steelblue: "鋼色",
	tan: "茶褐艄1�7",
	teal: "ティール",
	thistle: "シスツ1�7",
	tomato: "トマト色",
	transparent: "透明",
	turquoise: "ターコイや1�7",
	violet: "すみれ色",
	wheat: "小麦艄1�7",
	white: "癄1�7",
	whitesmoke: "ホワイトスモーク",
	yellow: "黄1�7",
	yellowgreen: "黄緑"
})
);