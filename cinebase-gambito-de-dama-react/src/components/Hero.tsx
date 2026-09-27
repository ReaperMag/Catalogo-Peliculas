const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { Bookmark, Check, Share2, Play, Tv, Film, TrendingUp, Clock } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/Hero.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const Hero = ({ media, mediaMode, onSwitchMode, onOpenTrailer, isWatchlist, onToggleWatchlist, isWatched, onToggleWatched, onShare }) => {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "relative w-full -mt-16 overflow-hidden",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "bg-cover bg-center w-full h-[620px] md:h-[720px] relative transition-all duration-700",
			style: { backgroundImage: `url("${media.backdrop}")` },
			children: [/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a0e13] via-[#0a0e13]/80 to-[#0a0e13]/25" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0a0e13] via-[#0a0e13]/65 to-transparent" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "absolute inset-0 pt-24 md:pt-28 pb-8 px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto flex flex-col justify-end",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "inline-flex items-center gap-1 p-1 bg-[#262a30]/90 backdrop-blur-md rounded-full w-fit mb-4 shadow-lg border border-[#31353b]/50",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => onSwitchMode("series"),
						className: `flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${mediaMode === "series" ? "bg-[#f5c518] text-[#0a0e13] font-bold shadow-sm" : "text-[#d1c5ac] hover:text-[#e0e2ea]"}`,
						children: [/* @__PURE__ */ _jsxDEV(Tv, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 13
						}, this), "Miniserie"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => onSwitchMode("movie"),
						className: `flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${mediaMode === "movie" ? "bg-[#f5c518] text-[#0a0e13] font-bold shadow-sm" : "text-[#d1c5ac] hover:text-[#e0e2ea]"}`,
						children: [/* @__PURE__ */ _jsxDEV(Film, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this), "Película"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-wrap items-center gap-2 mb-2",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#f5c518]/20 text-[#f5c518] border border-[#f5c518]/30",
									children: "CineBase Original Pick"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "flex items-center gap-1 text-xs text-[#d1c5ac]",
									children: [/* @__PURE__ */ _jsxDEV(TrendingUp, { className: "w-3.5 h-3.5 text-[#f5c518]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 76,
										columnNumber: 17
									}, this), "#4 en Tendencias Globales"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("h1", {
								className: "font-['Space_Grotesk'] text-4xl md:text-5xl lg:text-6xl text-[#e0e2ea] tracking-tight font-bold drop-shadow-md mb-1 leading-tight",
								children: media.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "font-['Space_Grotesk'] text-base md:text-lg text-[#d1c5ac] mb-3 italic font-normal",
								children: media.originalTitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-wrap items-center gap-x-3 gap-y-2 text-[#d1c5ac] text-xs md:text-sm",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-semibold text-[#e0e2ea]",
										children: media.year
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { className: "w-1 h-1 rounded-full bg-[#31353b]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 92,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "px-2 py-0.5 rounded bg-[#262a30] text-[#e0e2ea] font-mono font-bold text-xs border border-[#31353b]/60",
										children: media.certificate
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 93,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { className: "w-1 h-1 rounded-full bg-[#31353b]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 96,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "flex items-center gap-1 text-[#e0e2ea]",
										children: [/* @__PURE__ */ _jsxDEV(Clock, { className: "w-3.5 h-3.5 text-[#f5c518]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 98,
											columnNumber: 17
										}, this), media.runtime]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 97,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", { className: "w-1 h-1 rounded-full bg-[#31353b]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 101,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-[#e0e2ea] font-medium",
										children: media.genre
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 102,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 90,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-wrap items-stretch gap-2 shrink-0",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "bg-[#262a30]/90 backdrop-blur-md rounded-xl p-3 flex flex-col justify-center min-w-[125px] shadow-md border border-[#31353b]/50",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] text-[#d1c5ac] uppercase tracking-wider font-semibold mb-0.5",
										children: "Rating CineBase"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 110,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-baseline gap-1",
										children: [
											/* @__PURE__ */ _jsxDEV("span", {
												className: "text-[#f5c518] text-xl font-bold",
												children: "★"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 114,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												className: "font-['Space_Grotesk'] text-2xl font-bold text-[#e0e2ea] tabular-nums",
												children: media.rating.toFixed(1)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 115,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												className: "text-xs text-[#d1c5ac]",
												children: "/10"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 118,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 113,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-[11px] text-[#d1c5ac] mt-0.5 font-medium",
										children: media.votes
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "bg-[#262a30]/90 backdrop-blur-md rounded-xl p-3 flex flex-col justify-center min-w-[120px] max-w-[150px] shadow-md border border-[#31353b]/50",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] text-[#d1c5ac] uppercase tracking-wider font-semibold mb-0.5",
									children: "Metascore"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "px-2 py-0.5 rounded bg-[#f5c518] text-[#0a0e13] font-['Space_Grotesk'] text-lg font-bold",
										children: media.metascore
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-[11px] text-[#d1c5ac] leading-tight",
										children: media.metaVerdict
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "bg-[#262a30]/90 backdrop-blur-md rounded-xl p-3 hidden sm:flex flex-col justify-center items-center min-w-[95px] shadow-md border border-[#31353b]/50",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-[10px] text-[#d1c5ac] uppercase tracking-wider font-semibold",
										children: "Top 250"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-['Space_Grotesk'] text-2xl text-[#f5c518] font-bold",
										children: media.top250Rank
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-[11px] text-[#d1c5ac]",
										children: media.type === "series" ? "Mejores Series" : "Mejores Películas"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 141,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-wrap items-center gap-3 pt-1",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onOpenTrailer,
							className: "flex items-center gap-2 px-6 py-3 rounded-lg bg-[#f5c518] hover:bg-[#f0c110] text-[#0a0e13] font-semibold text-sm shadow-lg shadow-[#f5c518]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
							children: [/* @__PURE__ */ _jsxDEV(Play, { className: "w-5 h-5 fill-current" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Ver Trailer Oficial (4K)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onToggleWatchlist,
							className: `flex items-center gap-2 px-4 py-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${isWatchlist ? "bg-[#f5c518]/20 border-[#f5c518] text-[#f5c518]" : "bg-[#262a30]/80 hover:bg-[#31353b] border-[#31353b]/80 text-[#e0e2ea]"}`,
							children: [/* @__PURE__ */ _jsxDEV(Bookmark, { className: `w-4 h-4 ${isWatchlist ? "fill-[#f5c518]" : ""}` }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 173,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: isWatchlist ? "En tu Watchlist" : "Añadir a Watchlist" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 174,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onToggleWatched,
							className: `flex items-center gap-2 px-4 py-3 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${isWatched ? "bg-[#f5c518]/20 border-[#f5c518] text-[#f5c518]" : "bg-[#262a30]/80 hover:bg-[#31353b] border-[#31353b]/80 text-[#e0e2ea]"}`,
							children: [/* @__PURE__ */ _jsxDEV(Check, { className: `w-4 h-4 ${isWatched ? "text-[#f5c518]" : ""}` }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: isWatched ? "Marcada como vista" : "Marcar como vista" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 186,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onShare,
							title: "Compartir enlace",
							className: "flex items-center justify-center p-3 rounded-lg bg-[#262a30]/80 hover:bg-[#31353b] border border-[#31353b]/80 text-[#e0e2ea] transition-all cursor-pointer",
							children: /* @__PURE__ */ _jsxDEV(Share2, { className: "w-4 h-4 text-[#d1c5ac]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 189,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 156,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QU07T0FDTixXQUFVO2lCQUVWLHdCQUFDLFFBQUQsRUFBUSxXQUFVLHlCQUEwQjs7Ozs7TUFDdEM7Ozs7O0tBQ0w7Ozs7OztHQUNGOzs7OztVQUNGOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJIZXJvLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVkaWFJdGVtIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQm9va21hcmssIENoZWNrLCBTaGFyZTIsIFBsYXksIFR2LCBGaWxtLCBUcmVuZGluZ1VwLCBDbG9jayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBIZXJvUHJvcHMge1xuICBtZWRpYTogTWVkaWFJdGVtO1xuICBtZWRpYU1vZGU6ICdzZXJpZXMnIHwgJ21vdmllJztcbiAgb25Td2l0Y2hNb2RlOiAobW9kZTogJ3NlcmllcycgfCAnbW92aWUnKSA9PiB2b2lkO1xuICBvbk9wZW5UcmFpbGVyOiAoKSA9PiB2b2lkO1xuICBpc1dhdGNobGlzdDogYm9vbGVhbjtcbiAgb25Ub2dnbGVXYXRjaGxpc3Q6ICgpID0+IHZvaWQ7XG4gIGlzV2F0Y2hlZDogYm9vbGVhbjtcbiAgb25Ub2dnbGVXYXRjaGVkOiAoKSA9PiB2b2lkO1xuICBvblNoYXJlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgSGVybzogUmVhY3QuRkM8SGVyb1Byb3BzPiA9ICh7XG4gIG1lZGlhLFxuICBtZWRpYU1vZGUsXG4gIG9uU3dpdGNoTW9kZSxcbiAgb25PcGVuVHJhaWxlcixcbiAgaXNXYXRjaGxpc3QsXG4gIG9uVG9nZ2xlV2F0Y2hsaXN0LFxuICBpc1dhdGNoZWQsXG4gIG9uVG9nZ2xlV2F0Y2hlZCxcbiAgb25TaGFyZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCAtbXQtMTYgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICB7LyogQmFja2dyb3VuZCB3aXRoIERhcmsgVmlnbmV0dGUgJiBBdG1vc3BoZXJpYyBHcmFkaWVudHMgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWNvdmVyIGJnLWNlbnRlciB3LWZ1bGwgaC1bNjIwcHhdIG1kOmgtWzcyMHB4XSByZWxhdGl2ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDBcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke21lZGlhLmJhY2tkcm9wfVwiKWAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1bIzBhMGUxM10gdmlhLVsjMGEwZTEzXS84MCB0by1bIzBhMGUxM10vMjVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMGEwZTEzXSB2aWEtWyMwYTBlMTNdLzY1IHRvLXRyYW5zcGFyZW50XCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogSGVybyBDb250ZW50IE92ZXJsYXkgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcHQtMjQgbWQ6cHQtMjggcGItOCBweC00IG1kOnB4LTggbGc6cHgtMTYgbWF4LXctWzE0NDBweF0gbXgtYXV0byBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kXCI+XG4gICAgICAgIHsvKiBNZWRpYSBNb2RlIFN3aXRjaGVyIChNaW5pc2VyaWUgLyBQZWzDrWN1bGEpICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBwLTEgYmctWyMyNjJhMzBdLzkwIGJhY2tkcm9wLWJsdXItbWQgcm91bmRlZC1mdWxsIHctZml0IG1iLTQgc2hhZG93LWxnIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzUwXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Td2l0Y2hNb2RlKCdzZXJpZXMnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMy41IHB5LTEgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgbWVkaWFNb2RlID09PSAnc2VyaWVzJ1xuICAgICAgICAgICAgICAgID8gJ2JnLVsjZjVjNTE4XSB0ZXh0LVsjMGEwZTEzXSBmb250LWJvbGQgc2hhZG93LXNtJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtWyNkMWM1YWNdIGhvdmVyOnRleHQtWyNlMGUyZWFdJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR2IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgIE1pbmlzZXJpZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU3dpdGNoTW9kZSgnbW92aWUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMy41IHB5LTEgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgbWVkaWFNb2RlID09PSAnbW92aWUnXG4gICAgICAgICAgICAgICAgPyAnYmctWyNmNWM1MThdIHRleHQtWyMwYTBlMTNdIGZvbnQtYm9sZCBzaGFkb3ctc20nXG4gICAgICAgICAgICAgICAgOiAndGV4dC1bI2QxYzVhY10gaG92ZXI6dGV4dC1bI2UwZTJlYV0nXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmlsbSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICBQZWzDrWN1bGFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFRpdGxlLCBCYWRnZXMgJiBSYXRpbmcgQ2x1c3RlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGxnOml0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTYgbWItNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsXCI+XG4gICAgICAgICAgICB7LyogUGljayBCYWRnZXMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHVwcGVyY2FzZSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXIgcHgtMiBweS0wLjUgcm91bmRlZCBiZy1bI2Y1YzUxOF0vMjAgdGV4dC1bI2Y1YzUxOF0gYm9yZGVyIGJvcmRlci1bI2Y1YzUxOF0vMzBcIj5cbiAgICAgICAgICAgICAgICBDaW5lQmFzZSBPcmlnaW5hbCBQaWNrXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyB0ZXh0LVsjZDFjNWFjXVwiPlxuICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtWyNmNWM1MThdXCIgLz5cbiAgICAgICAgICAgICAgICAjNCBlbiBUZW5kZW5jaWFzIEdsb2JhbGVzXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTWFpbiBIZWFkbGluZSAqL31cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LVsnU3BhY2VfR3JvdGVzayddIHRleHQtNHhsIG1kOnRleHQtNXhsIGxnOnRleHQtNnhsIHRleHQtWyNlMGUyZWFdIHRyYWNraW5nLXRpZ2h0IGZvbnQtYm9sZCBkcm9wLXNoYWRvdy1tZCBtYi0xIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAge21lZGlhLnRpdGxlfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC1iYXNlIG1kOnRleHQtbGcgdGV4dC1bI2QxYzVhY10gbWItMyBpdGFsaWMgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAge21lZGlhLm9yaWdpbmFsVGl0bGV9XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIHsvKiBLZXkgTWV0YWRhdGEgQ2hpcHMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAteC0zIGdhcC15LTIgdGV4dC1bI2QxYzVhY10gdGV4dC14cyBtZDp0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1bI2UwZTJlYV1cIj57bWVkaWEueWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMSBoLTEgcm91bmRlZC1mdWxsIGJnLVsjMzEzNTNiXVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgcHktMC41IHJvdW5kZWQgYmctWyMyNjJhMzBdIHRleHQtWyNlMGUyZWFdIGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC14cyBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS82MFwiPlxuICAgICAgICAgICAgICAgIHttZWRpYS5jZXJ0aWZpY2F0ZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEgaC0xIHJvdW5kZWQtZnVsbCBiZy1bIzMxMzUzYl1cIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LVsjZTBlMmVhXVwiPlxuICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LVsjZjVjNTE4XVwiIC8+XG4gICAgICAgICAgICAgICAge21lZGlhLnJ1bnRpbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xIGgtMSByb3VuZGVkLWZ1bGwgYmctWyMzMTM1M2JdXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI2UwZTJlYV0gZm9udC1tZWRpdW1cIj57bWVkaWEuZ2VucmV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmF0aW5nIE92ZXJ2aWV3IENsdXN0ZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIGdhcC0yIHNocmluay0wXCI+XG4gICAgICAgICAgICB7LyogQ2luZUJhc2UgUmF0aW5nICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzI2MmEzMF0vOTAgYmFja2Ryb3AtYmx1ci1tZCByb3VuZGVkLXhsIHAtMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1pbi13LVsxMjVweF0gc2hhZG93LW1kIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzUwXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyNkMWM1YWNdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LXNlbWlib2xkIG1iLTAuNVwiPlxuICAgICAgICAgICAgICAgIFJhdGluZyBDaW5lQmFzZVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNmNWM1MThdIHRleHQteGwgZm9udC1ib2xkXCI+4piFPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtWyNlMGUyZWFdIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgICAge21lZGlhLnJhdGluZy50b0ZpeGVkKDEpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdXCI+LzEwPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bI2QxYzVhY10gbXQtMC41IGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAge21lZGlhLnZvdGVzfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE1ldGFzY29yZSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyNjJhMzBdLzkwIGJhY2tkcm9wLWJsdXItbWQgcm91bmRlZC14bCBwLTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtaW4tdy1bMTIwcHhdIG1heC13LVsxNTBweF0gc2hhZG93LW1kIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzUwXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyNkMWM1YWNdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LXNlbWlib2xkIG1iLTAuNVwiPlxuICAgICAgICAgICAgICAgIE1ldGFzY29yZVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSByb3VuZGVkIGJnLVsjZjVjNTE4XSB0ZXh0LVsjMGEwZTEzXSBmb250LVsnU3BhY2VfR3JvdGVzayddIHRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICB7bWVkaWEubWV0YXNjb3JlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjZDFjNWFjXSBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICB7bWVkaWEubWV0YVZlcmRpY3R9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogVG9wIDI1MCBSYW5rIEJhZGdlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzI2MmEzMF0vOTAgYmFja2Ryb3AtYmx1ci1tZCByb3VuZGVkLXhsIHAtMyBoaWRkZW4gc206ZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWluLXctWzk1cHhdIHNoYWRvdy1tZCBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS81MFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjZDFjNWFjXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIFRvcCAyNTBcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LVsnU3BhY2VfR3JvdGVzayddIHRleHQtMnhsIHRleHQtWyNmNWM1MThdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHttZWRpYS50b3AyNTBSYW5rfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtWyNkMWM1YWNdXCI+XG4gICAgICAgICAgICAgICAge21lZGlhLnR5cGUgPT09ICdzZXJpZXMnID8gJ01lam9yZXMgU2VyaWVzJyA6ICdNZWpvcmVzIFBlbMOtY3VsYXMnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEFjdGlvbiBCdXR0b25zIFJvdyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHQtMVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblRyYWlsZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC02IHB5LTMgcm91bmRlZC1sZyBiZy1bI2Y1YzUxOF0gaG92ZXI6YmctWyNmMGMxMTBdIHRleHQtWyMwYTBlMTNdIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSBzaGFkb3ctbGcgc2hhZG93LVsjZjVjNTE4XS8yMCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzY2FsZS1bMS4wMl0gYWN0aXZlOnNjYWxlLVswLjk4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwidy01IGgtNSBmaWxsLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgPHNwYW4+VmVyIFRyYWlsZXIgT2ZpY2lhbCAoNEspPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVXYXRjaGxpc3R9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTMgcm91bmRlZC1sZyBib3JkZXIgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGlzV2F0Y2hsaXN0XG4gICAgICAgICAgICAgICAgPyAnYmctWyNmNWM1MThdLzIwIGJvcmRlci1bI2Y1YzUxOF0gdGV4dC1bI2Y1YzUxOF0nXG4gICAgICAgICAgICAgICAgOiAnYmctWyMyNjJhMzBdLzgwIGhvdmVyOmJnLVsjMzEzNTNiXSBib3JkZXItWyMzMTM1M2JdLzgwIHRleHQtWyNlMGUyZWFdJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJvb2ttYXJrIGNsYXNzTmFtZT17YHctNCBoLTQgJHtpc1dhdGNobGlzdCA/ICdmaWxsLVsjZjVjNTE4XScgOiAnJ31gfSAvPlxuICAgICAgICAgICAgPHNwYW4+e2lzV2F0Y2hsaXN0ID8gJ0VuIHR1IFdhdGNobGlzdCcgOiAnQcOxYWRpciBhIFdhdGNobGlzdCd9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVXYXRjaGVkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNCBweS0zIHJvdW5kZWQtbGcgYm9yZGVyIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBpc1dhdGNoZWRcbiAgICAgICAgICAgICAgICA/ICdiZy1bI2Y1YzUxOF0vMjAgYm9yZGVyLVsjZjVjNTE4XSB0ZXh0LVsjZjVjNTE4XSdcbiAgICAgICAgICAgICAgICA6ICdiZy1bIzI2MmEzMF0vODAgaG92ZXI6YmctWyMzMTM1M2JdIGJvcmRlci1bIzMxMzUzYl0vODAgdGV4dC1bI2UwZTJlYV0nXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPXtgdy00IGgtNCAke2lzV2F0Y2hlZCA/ICd0ZXh0LVsjZjVjNTE4XScgOiAnJ31gfSAvPlxuICAgICAgICAgICAgPHNwYW4+e2lzV2F0Y2hlZCA/ICdNYXJjYWRhIGNvbW8gdmlzdGEnIDogJ01hcmNhciBjb21vIHZpc3RhJ308L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvblNoYXJlfVxuICAgICAgICAgICAgdGl0bGU9XCJDb21wYXJ0aXIgZW5sYWNlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyByb3VuZGVkLWxnIGJnLVsjMjYyYTMwXS84MCBob3ZlcjpiZy1bIzMxMzUzYl0gYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vODAgdGV4dC1bI2UwZTJlYV0gdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTaGFyZTIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LVsjZDFjNWFjXVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19