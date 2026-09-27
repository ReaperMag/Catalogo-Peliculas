const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { BarChart3, Play, Star } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/EpisodeGuide.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const EpisodeGuide = ({ episodes, episodeRatings, onPlayEpisode }) => {
	const [activeSeason, setActiveSeason] = useState(1);
	const [hoveredBar, setHoveredBar] = useState(null);
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "bg-[#1c2025] rounded-xl p-6 shadow-md border border-[#31353b]/40 flex flex-col gap-6",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
					className: "font-['Space_Grotesk'] text-2xl text-[#e0e2ea] font-bold tracking-tight flex items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-1.5 h-6 rounded-full bg-[#f5c518] inline-block" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 13
					}, this), "Guía de Episodios & Ratings"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs text-[#d1c5ac] mt-1",
					children: "Evolución de puntuación de la comunidad episodio por episodio"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "inline-flex items-center gap-1 bg-[#181c21] p-1 rounded-lg border border-[#31353b]/40 self-start sm:self-auto",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveSeason(1),
						className: `px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${activeSeason === 1 ? "bg-[#f5c518] text-[#0a0e13] font-bold shadow-sm" : "text-[#d1c5ac] hover:text-[#e0e2ea]"}`,
						children: "Temporada 1"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveSeason(2),
						className: `px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${activeSeason === 2 ? "bg-[#f5c518] text-[#0a0e13] font-bold shadow-sm" : "text-[#d1c5ac] hover:text-[#e0e2ea]"}`,
						children: "Especiales (2)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bg-[#181c21] p-4 sm:p-5 rounded-xl border border-[#31353b]/30",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between mb-2",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs md:text-sm text-[#e0e2ea] font-bold flex items-center gap-1.5",
						children: [/* @__PURE__ */ _jsxDEV(BarChart3, { className: "w-4 h-4 text-[#f5c518]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this), "Puntuación por Capítulo (Promedio: 8.8)"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "text-[11px] text-[#d1c5ac] font-medium",
						children: "Escala 8.0 - 10.0"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-7 gap-2 sm:gap-4 items-end h-44 pt-4 px-2",
					children: episodeRatings.map((item) => {
						const isTopRated = item.rating >= 9;
						const isHovered = hoveredBar === item.ep;
						return /* @__PURE__ */ _jsxDEV("div", {
							onMouseEnter: () => setHoveredBar(item.ep),
							onMouseLeave: () => setHoveredBar(null),
							className: "flex flex-col items-center h-full justify-end group cursor-pointer",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: `text-xs font-bold mb-1 transition-colors tabular-nums ${isTopRated || isHovered ? "text-[#f5c518]" : "text-[#e0e2ea] group-hover:text-[#f5c518]"}`,
									children: item.rating.toFixed(1)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "w-full bg-[#31353b]/40 rounded-t-md h-full flex items-end overflow-hidden p-0.5",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: `w-full transition-all duration-300 rounded-t ${isTopRated ? "bg-[#f5c518] shadow-[0_0_12px_rgba(245,197,24,0.35)]" : "bg-[#f5c518]/75 group-hover:bg-[#f5c518]"}`,
										style: { height: `${item.percentage}%` }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 94,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: `text-xs mt-2 font-mono transition-colors ${isTopRated || isHovered ? "text-[#f5c518] font-bold" : "text-[#d1c5ac] group-hover:text-[#e0e2ea]"}`,
									children: item.ep
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 105,
									columnNumber: 17
								}, this)
							]
						}, item.ep, true, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "space-y-4",
				children: activeSeason === 1 ? episodes.map((ep) => /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-[#181c21] p-4 rounded-xl hover:bg-[#262a30] border border-[#31353b]/30 hover:border-[#31353b]/70 transition-all flex flex-col md:flex-row gap-4 items-start group",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						onClick: () => onPlayEpisode(ep),
						className: "relative w-full md:w-56 h-32 shrink-0 rounded-lg overflow-hidden cursor-pointer shadow-md",
						children: [
							/* @__PURE__ */ _jsxDEV("img", {
								src: ep.thumbnail,
								alt: ep.title,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
								referrerPolicy: "no-referrer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 133,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "absolute inset-0 bg-[#0a0e13]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
								children: /* @__PURE__ */ _jsxDEV("div", {
									className: "w-10 h-10 rounded-full bg-[#f5c518] text-[#0a0e13] flex items-center justify-center shadow-lg",
									children: /* @__PURE__ */ _jsxDEV(Play, { className: "w-5 h-5 fill-current ml-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 141,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "absolute bottom-2 right-2 px-1.5 py-0.5 bg-[#0a0e13]/85 backdrop-blur-sm rounded text-[#e0e2ea] text-[10px] font-mono font-semibold",
								children: ep.duration
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start justify-between gap-2 mb-1",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] text-[#f5c518] font-mono font-bold tracking-wider uppercase",
									children: ep.isFinale ? "EPISODIO 7 • FINAL DE TEMPORADA" : `EPISODIO ${ep.episodeNumber}`
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("h4", {
									className: "font-['Space_Grotesk'] text-lg text-[#e0e2ea] font-bold group-hover:text-[#f5c518] transition-colors",
									children: ep.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-1 bg-[#1c2025] px-2 py-1 rounded-md shrink-0 border border-[#31353b]/40",
									children: [/* @__PURE__ */ _jsxDEV(Star, { className: "w-3.5 h-3.5 fill-[#f5c518] text-[#f5c518]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 164,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: `text-xs font-bold ${ep.isFinale ? "text-[#f5c518]" : "text-[#e0e2ea]"}`,
										children: ep.rating.toFixed(1)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 165,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 163,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-[#d1c5ac] mb-2",
								children: ep.date
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 175,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs md:text-sm text-[#d1c5ac] line-clamp-2 leading-relaxed",
								children: ep.description
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 15
					}, this)]
				}, ep.episodeNumber, true, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 13
				}, this)) : /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-[#181c21] p-6 rounded-xl text-center text-[#d1c5ac]",
					children: [/* @__PURE__ */ _jsxDEV("p", {
						className: "font-bold text-[#e0e2ea] mb-1",
						children: "Especiales Detrás de Cámaras"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-xs",
						children: "Incluye entrevistas exclusivas con Scott Frank, Anya Taylor-Joy y el maestro de ajedrez Garry Kasparov como consultor de partidas."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 183,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUMsT0FBRCxhQUNFLHdCQUFDLFFBQUQ7U0FBTSxXQUFVO21CQUNiLEdBQUcsV0FDQSxvQ0FDQSxZQUFZLEdBQUc7UUFDZjs7OztrQkFDTix3QkFBQyxNQUFEO1NBQUksV0FBVTttQkFDWCxHQUFHO1FBQ0Y7Ozs7Z0JBQ0Q7Ozs7a0JBRUwsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRSx3QkFBQyxNQUFELEVBQU0sV0FBVSw0Q0FBNkM7Ozs7bUJBQzdELHdCQUFDLFFBQUQ7VUFDRSxXQUFXLHFCQUNULEdBQUcsV0FBVyxtQkFBbUI7b0JBR2xDLEdBQUcsT0FBTyxRQUFRLENBQUM7U0FDaEI7Ozs7aUJBQ0g7Ozs7O2dCQUNGOzs7Ozs7T0FFTCx3QkFBQyxLQUFEO1FBQUcsV0FBVTtrQkFBK0IsR0FBRztPQUFROzs7OztPQUN2RCx3QkFBQyxLQUFEO1FBQUcsV0FBVTtrQkFDVixHQUFHO09BQ0g7Ozs7O01BQ0E7Ozs7O2FBQ0Y7T0F2REUsR0FBRzs7OztXQXVETCxDQUNOLElBRUQsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUFnQztLQUErQjs7OztlQUM1RSx3QkFBQyxLQUFEO01BQUcsV0FBVTtnQkFBVTtLQUdwQjs7OzthQUNBOzs7Ozs7R0FFSjs7Ozs7RUFDRTs7Ozs7O0FBRWIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiRXBpc29kZUd1aWRlLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFcGlzb2RlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQmFyQ2hhcnQzLCBQbGF5LCBTdGFyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIEVwaXNvZGVHdWlkZVByb3BzIHtcbiAgZXBpc29kZXM6IEVwaXNvZGVbXTtcbiAgZXBpc29kZVJhdGluZ3M6IHsgZXA6IHN0cmluZzsgcmF0aW5nOiBudW1iZXI7IHBlcmNlbnRhZ2U6IG51bWJlciB9W107XG4gIG9uUGxheUVwaXNvZGU6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRXBpc29kZUd1aWRlOiBSZWFjdC5GQzxFcGlzb2RlR3VpZGVQcm9wcz4gPSAoe1xuICBlcGlzb2RlcyxcbiAgZXBpc29kZVJhdGluZ3MsXG4gIG9uUGxheUVwaXNvZGUsXG59KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVTZWFzb24sIHNldEFjdGl2ZVNlYXNvbl0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbaG92ZXJlZEJhciwgc2V0SG92ZXJlZEJhcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLVsjMWMyMDI1XSByb3VuZGVkLXhsIHAtNiBzaGFkb3ctbWQgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNDAgZmxleCBmbGV4LWNvbCBnYXAtNlwiPlxuICAgICAgey8qIEhlYWRlciAmIFNlYXNvbiBTZWxlY3RvciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC0yeGwgdGV4dC1bI2UwZTJlYV0gZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEuNSBoLTYgcm91bmRlZC1mdWxsIGJnLVsjZjVjNTE4XSBpbmxpbmUtYmxvY2tcIiAvPlxuICAgICAgICAgICAgR3XDrWEgZGUgRXBpc29kaW9zICZhbXA7IFJhdGluZ3NcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gbXQtMVwiPlxuICAgICAgICAgICAgRXZvbHVjacOzbiBkZSBwdW50dWFjacOzbiBkZSBsYSBjb211bmlkYWQgZXBpc29kaW8gcG9yIGVwaXNvZGlvXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU2Vhc29uIFNlbGVjdG9yIFRhYnMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGJnLVsjMTgxYzIxXSBwLTEgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS80MCBzZWxmLXN0YXJ0IHNtOnNlbGYtYXV0b1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVNlYXNvbigxKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHJvdW5kZWQtbWQgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVNlYXNvbiA9PT0gMVxuICAgICAgICAgICAgICAgID8gJ2JnLVsjZjVjNTE4XSB0ZXh0LVsjMGEwZTEzXSBmb250LWJvbGQgc2hhZG93LXNtJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtWyNkMWM1YWNdIGhvdmVyOnRleHQtWyNlMGUyZWFdJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVGVtcG9yYWRhIDFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVTZWFzb24oMil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEuNSByb3VuZGVkLW1kIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBhY3RpdmVTZWFzb24gPT09IDJcbiAgICAgICAgICAgICAgICA/ICdiZy1bI2Y1YzUxOF0gdGV4dC1bIzBhMGUxM10gZm9udC1ib2xkIHNoYWRvdy1zbSdcbiAgICAgICAgICAgICAgICA6ICd0ZXh0LVsjZDFjNWFjXSBob3Zlcjp0ZXh0LVsjZTBlMmVhXSdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEVzcGVjaWFsZXMgKDIpXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSYXRpbmcgQmFyIENoYXJ0IFZpc3VhbGl6YXRpb24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMTgxYzIxXSBwLTQgc206cC01IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vMzBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMlwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LVsjZTBlMmVhXSBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgPEJhckNoYXJ0MyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyNmNWM1MThdXCIgLz5cbiAgICAgICAgICAgIFB1bnR1YWNpw7NuIHBvciBDYXDDrXR1bG8gKFByb21lZGlvOiA4LjgpXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtWyNkMWM1YWNdIGZvbnQtbWVkaXVtXCI+RXNjYWxhIDguMCAtIDEwLjA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDdXN0b20gQmFyIENoYXJ0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTcgZ2FwLTIgc206Z2FwLTQgaXRlbXMtZW5kIGgtNDQgcHQtNCBweC0yXCI+XG4gICAgICAgICAge2VwaXNvZGVSYXRpbmdzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNUb3BSYXRlZCA9IGl0ZW0ucmF0aW5nID49IDkuMDtcbiAgICAgICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IGhvdmVyZWRCYXIgPT09IGl0ZW0uZXA7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uZXB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkQmFyKGl0ZW0uZXApfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZEJhcihudWxsKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLWZ1bGwganVzdGlmeS1lbmQgZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey8qIFNjb3JlIE51bWJlciBBYm92ZSBCYXIgKi99XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1ib2xkIG1iLTEgdHJhbnNpdGlvbi1jb2xvcnMgdGFidWxhci1udW1zICR7XG4gICAgICAgICAgICAgICAgICAgIGlzVG9wUmF0ZWQgfHwgaXNIb3ZlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1bI2Y1YzUxOF0nXG4gICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1bI2UwZTJlYV0gZ3JvdXAtaG92ZXI6dGV4dC1bI2Y1YzUxOF0nXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5yYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICB7LyogQmFyIFRyYWNrICYgRmlsbCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzMxMzUzYl0vNDAgcm91bmRlZC10LW1kIGgtZnVsbCBmbGV4IGl0ZW1zLWVuZCBvdmVyZmxvdy1oaWRkZW4gcC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCByb3VuZGVkLXQgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc1RvcFJhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1bI2Y1YzUxOF0gc2hhZG93LVswXzBfMTJweF9yZ2JhKDI0NSwxOTcsMjQsMC4zNSldJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctWyNmNWM1MThdLzc1IGdyb3VwLWhvdmVyOmJnLVsjZjVjNTE4XSdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogYCR7aXRlbS5wZXJjZW50YWdlfSVgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEVwaXNvZGUgTGFiZWwgQmVsb3cgQmFyICovfVxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhzIG10LTIgZm9udC1tb25vIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgICAgIGlzVG9wUmF0ZWQgfHwgaXNIb3ZlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1bI2Y1YzUxOF0gZm9udC1ib2xkJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtWyNkMWM1YWNdIGdyb3VwLWhvdmVyOnRleHQtWyNlMGUyZWFdJ1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uZXB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBFcGlzb2RlIENhcmRzIExpc3QgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICB7YWN0aXZlU2Vhc29uID09PSAxID8gKFxuICAgICAgICAgIGVwaXNvZGVzLm1hcCgoZXApID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtlcC5lcGlzb2RlTnVtYmVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzE4MWMyMV0gcC00IHJvdW5kZWQteGwgaG92ZXI6YmctWyMyNjJhMzBdIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzMwIGhvdmVyOmJvcmRlci1bIzMxMzUzYl0vNzAgdHJhbnNpdGlvbi1hbGwgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNCBpdGVtcy1zdGFydCBncm91cFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiBUaHVtYm5haWwgQ29udGFpbmVyICovfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QbGF5RXBpc29kZShlcCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1kOnctNTYgaC0zMiBzaHJpbmstMCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBjdXJzb3ItcG9pbnRlciBzaGFkb3ctbWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtlcC50aHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2VwLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1bIzBhMGUxM10vNDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLVsjZjVjNTE4XSB0ZXh0LVsjMGEwZTEzXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwidy01IGgtNSBmaWxsLWN1cnJlbnQgbWwtMC41XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yIHJpZ2h0LTIgcHgtMS41IHB5LTAuNSBiZy1bIzBhMGUxM10vODUgYmFja2Ryb3AtYmx1ci1zbSByb3VuZGVkIHRleHQtWyNlMGUyZWFdIHRleHQtWzEwcHhdIGZvbnQtbW9ubyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICB7ZXAuZHVyYXRpb259XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogRXBpc29kZSBJbmZvICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjZjVjNTE4XSBmb250LW1vbm8gZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtlcC5pc0ZpbmFsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnRVBJU09ESU8gNyDigKIgRklOQUwgREUgVEVNUE9SQURBJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBgRVBJU09ESU8gJHtlcC5lcGlzb2RlTnVtYmVyfWB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC1sZyB0ZXh0LVsjZTBlMmVhXSBmb250LWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC1bI2Y1YzUxOF0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXAudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBiZy1bIzFjMjAyNV0gcHgtMiBweS0xIHJvdW5kZWQtbWQgc2hyaW5rLTAgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgZmlsbC1bI2Y1YzUxOF0gdGV4dC1bI2Y1YzUxOF1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcC5pc0ZpbmFsZSA/ICd0ZXh0LVsjZjVjNTE4XScgOiAndGV4dC1bI2UwZTJlYV0nXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXAucmF0aW5nLnRvRml4ZWQoMSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjZDFjNWFjXSBtYi0yXCI+e2VwLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LVsjZDFjNWFjXSBsaW5lLWNsYW1wLTIgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICB7ZXAuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzE4MWMyMV0gcC02IHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgdGV4dC1bI2QxYzVhY11cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjZTBlMmVhXSBtYi0xXCI+RXNwZWNpYWxlcyBEZXRyw6FzIGRlIEPDoW1hcmFzPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiPlxuICAgICAgICAgICAgICBJbmNsdXllIGVudHJldmlzdGFzIGV4Y2x1c2l2YXMgY29uIFNjb3R0IEZyYW5rLCBBbnlhIFRheWxvci1Kb3kgeSBlbCBtYWVzdHJvIGRlIGFqZWRyZXpcbiAgICAgICAgICAgICAgR2FycnkgS2FzcGFyb3YgY29tbyBjb25zdWx0b3IgZGUgcGFydGlkYXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19