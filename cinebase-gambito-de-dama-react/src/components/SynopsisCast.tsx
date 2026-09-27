const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { ChevronRight, X } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/SynopsisCast.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const SynopsisCast = ({ synopsis, creators, director, music, cast }) => {
	const [selectedCast, setSelectedCast] = useState(null);
	const [showAllCast, setShowAllCast] = useState(false);
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "bg-[#1c2025] rounded-xl p-6 shadow-md border border-[#31353b]/40 flex flex-col gap-6",
		children: [
			/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
				className: "font-['Space_Grotesk'] text-2xl text-[#e0e2ea] font-bold tracking-tight mb-3 flex items-center gap-2",
				children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-1.5 h-6 rounded-full bg-[#f5c518] inline-block" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 11
				}, this), "Sinopsis"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("p", {
				className: "text-[#e0e2ea]/90 leading-relaxed text-base md:text-lg",
				children: synopsis
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#181c21] p-4 rounded-lg border border-[#31353b]/30",
				children: [
					/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[10px] text-[#d1c5ac] uppercase tracking-wider block mb-1 font-semibold",
							children: creators[0]?.role || "Creadores & Guión"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-sm text-[#e0e2ea] font-bold",
							children: creators[0]?.name || "Scott Frank"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-[#d1c5ac] mt-0.5",
							children: creators[0]?.extra
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 11
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[10px] text-[#d1c5ac] uppercase tracking-wider block mb-1 font-semibold",
							children: director.role
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-sm text-[#e0e2ea] font-bold",
							children: director.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-[#d1c5ac] mt-0.5",
							children: director.extra
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 11
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[10px] text-[#d1c5ac] uppercase tracking-wider block mb-1 font-semibold",
							children: music.role
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-sm text-[#e0e2ea] font-bold",
							children: music.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-[#d1c5ac] mt-0.5",
							children: music.extra
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 11
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-between mb-4",
				children: [/* @__PURE__ */ _jsxDEV("h3", {
					className: "font-['Space_Grotesk'] text-lg text-[#e0e2ea] font-bold",
					children: "Reparto Principal"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					onClick: () => setShowAllCast(true),
					className: "text-xs md:text-sm text-[#f5c518] hover:underline flex items-center gap-0.5 font-medium cursor-pointer",
					children: ["Ver todo el reparto (42)", /* @__PURE__ */ _jsxDEV(ChevronRight, { className: "w-4 h-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4",
				children: cast.map((actor) => /* @__PURE__ */ _jsxDEV("div", {
					onClick: () => setSelectedCast(actor),
					className: "flex flex-col items-center text-center p-3 rounded-xl bg-[#181c21] hover:bg-[#262a30] border border-[#31353b]/30 hover:border-[#f5c518]/40 transition-all cursor-pointer group",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "w-20 h-20 rounded-full overflow-hidden mb-2.5 shadow-md border-2 border-transparent group-hover:border-[#f5c518] transition-all",
							children: /* @__PURE__ */ _jsxDEV("img", {
								src: actor.image,
								alt: actor.name,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
								referrerPolicy: "no-referrer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-sm text-[#e0e2ea] font-bold group-hover:text-[#f5c518] transition-colors line-clamp-1",
							children: actor.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-[#d1c5ac] line-clamp-1 mt-0.5",
							children: actor.role
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[11px] text-[#f5c518] font-semibold mt-1",
							children: actor.episodes
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 15
						}, this)
					]
				}, actor.id, true, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 7
			}, this),
			selectedCast && /* @__PURE__ */ _jsxDEV("div", {
				role: "dialog",
				"aria-modal": "true",
				className: "fixed inset-0 z-50 bg-[#0a0e13]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",
				onClick: () => setSelectedCast(null),
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-[#1c2025] border border-[#31353b] rounded-2xl max-w-md w-full p-6 relative shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setSelectedCast(null),
						className: "absolute top-4 right-4 text-[#d1c5ac] hover:text-[#e0e2ea] p-1 rounded-full bg-[#262a30]",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ _jsxDEV("img", {
								src: selectedCast.image,
								alt: selectedCast.name,
								className: "w-24 h-24 rounded-full object-cover border-2 border-[#f5c518] shadow-xl mb-4"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("h4", {
								className: "font-['Space_Grotesk'] text-xl font-bold text-[#e0e2ea]",
								children: selectedCast.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-sm text-[#f5c518] font-semibold mb-1",
								children: ["Personaje: ", selectedCast.role]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 132,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs text-[#d1c5ac] mb-4 bg-[#262a30] px-3 py-1 rounded-full",
								children: selectedCast.episodes
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-[#d1c5ac] leading-relaxed",
								children: "Aclamada interpretación en Gambito de Dama. Nominada y reconocida por su aporte artístico y fidelidad dramática a la obra de Walter Tevis."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 9
			}, this),
			showAllCast && /* @__PURE__ */ _jsxDEV("div", {
				role: "dialog",
				"aria-modal": "true",
				className: "fixed inset-0 z-50 bg-[#0a0e13]/80 backdrop-blur-sm flex items-center justify-center p-4",
				onClick: () => setShowAllCast(false),
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-[#1c2025] border border-[#31353b] rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col p-6 relative shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-between pb-4 border-b border-[#31353b]/50",
						children: [/* @__PURE__ */ _jsxDEV("h3", {
							className: "font-['Space_Grotesk'] text-xl font-bold text-[#e0e2ea]",
							children: "Reparto Completo (42 actores)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setShowAllCast(false),
							className: "text-[#d1c5ac] hover:text-[#e0e2ea] p-1.5 rounded-full bg-[#262a30]",
							children: /* @__PURE__ */ _jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 167,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 159,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "overflow-y-auto py-4 space-y-3",
						children: [cast.map((item) => /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between p-2 rounded-lg bg-[#181c21]",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ _jsxDEV("img", {
									src: item.image,
									alt: item.name,
									className: "w-12 h-12 rounded-full object-cover"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 177,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("p", {
									className: "text-sm font-bold text-[#e0e2ea]",
									children: item.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 183,
									columnNumber: 23
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-[#d1c5ac]",
									children: item.role
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 184,
									columnNumber: 23
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 182,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 176,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-semibold text-[#f5c518]",
								children: item.episodes
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 187,
								columnNumber: 19
							}, this)]
						}, item.id, true, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 17
						}, this)), /* @__PURE__ */ _jsxDEV("div", {
							className: "text-center py-2 text-xs text-[#d1c5ac]",
							children: "Y 38 miembros de reparto y equipo adicionales listados en los créditos oficiales."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 170,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 155,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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Ozs7Z0JBQ0Y7Ozs7O2lCQUNMLHdCQUFDLFFBQUQ7UUFBTSxXQUFVO2tCQUF3QyxLQUFLO09BQWU7Ozs7ZUFDekU7U0FmRSxLQUFLOzs7O2FBZVAsQ0FDTixHQUNELHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUEwQztNQUVwRDs7OztjQUNGOzs7OzthQUNGOzs7Ozs7R0FDRjs7Ozs7RUFFQTs7Ozs7O0FBRWIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiU3lub3BzaXNDYXN0LnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXN0TWVtYmVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQ2hldnJvblJpZ2h0LCBYIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIFN5bm9wc2lzQ2FzdFByb3BzIHtcbiAgc3lub3BzaXM6IHN0cmluZztcbiAgY3JlYXRvcnM6IHsgcm9sZTogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGV4dHJhOiBzdHJpbmcgfVtdO1xuICBkaXJlY3RvcjogeyByb2xlOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZXh0cmE6IHN0cmluZyB9O1xuICBtdXNpYzogeyByb2xlOiBzdHJpbmc7IG5hbWU6IHN0cmluZzsgZXh0cmE6IHN0cmluZyB9O1xuICBjYXN0OiBDYXN0TWVtYmVyW107XG59XG5cbmV4cG9ydCBjb25zdCBTeW5vcHNpc0Nhc3Q6IFJlYWN0LkZDPFN5bm9wc2lzQ2FzdFByb3BzPiA9ICh7XG4gIHN5bm9wc2lzLFxuICBjcmVhdG9ycyxcbiAgZGlyZWN0b3IsXG4gIG11c2ljLFxuICBjYXN0LFxufSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDYXN0LCBzZXRTZWxlY3RlZENhc3RdID0gdXNlU3RhdGU8Q2FzdE1lbWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2hvd0FsbENhc3QsIHNldFNob3dBbGxDYXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLVsjMWMyMDI1XSByb3VuZGVkLXhsIHAtNiBzaGFkb3ctbWQgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNDAgZmxleCBmbGV4LWNvbCBnYXAtNlwiPlxuICAgICAgey8qIDEuIFN5bm9wc2lzICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC0yeGwgdGV4dC1bI2UwZTJlYV0gZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IG1iLTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEuNSBoLTYgcm91bmRlZC1mdWxsIGJnLVsjZjVjNTE4XSBpbmxpbmUtYmxvY2tcIiAvPlxuICAgICAgICAgIFNpbm9wc2lzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyNlMGUyZWFdLzkwIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2UgbWQ6dGV4dC1sZ1wiPlxuICAgICAgICAgIHtzeW5vcHNpc31cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiAyLiBNZXRhZGF0YSBTcGVjIEdyaWQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTQgYmctWyMxODFjMjFdIHAtNCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzMwXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1bI2QxYzVhY10gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGJsb2NrIG1iLTEgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge2NyZWF0b3JzWzBdPy5yb2xlIHx8ICdDcmVhZG9yZXMgJiBHdWnDs24nfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyNlMGUyZWFdIGZvbnQtYm9sZFwiPntjcmVhdG9yc1swXT8ubmFtZSB8fCAnU2NvdHQgRnJhbmsnfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdIG10LTAuNVwiPntjcmVhdG9yc1swXT8uZXh0cmF9PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyNkMWM1YWNdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBibG9jayBtYi0xIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIHtkaXJlY3Rvci5yb2xlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtWyNlMGUyZWFdIGZvbnQtYm9sZFwiPntkaXJlY3Rvci5uYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdIG10LTAuNVwiPntkaXJlY3Rvci5leHRyYX08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1bI2QxYzVhY10gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGJsb2NrIG1iLTEgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge211c2ljLnJvbGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI2UwZTJlYV0gZm9udC1ib2xkXCI+e211c2ljLm5hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gbXQtMC41XCI+e211c2ljLmV4dHJhfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDMuIENhc3QgU2VjdGlvbiAqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTRcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LWxnIHRleHQtWyNlMGUyZWFdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgUmVwYXJ0byBQcmluY2lwYWxcbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dBbGxDYXN0KHRydWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyBtZDp0ZXh0LXNtIHRleHQtWyNmNWM1MThdIGhvdmVyOnVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMC41IGZvbnQtbWVkaXVtIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWZXIgdG9kbyBlbCByZXBhcnRvICg0MilcbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNCBnYXAtMyBtZDpnYXAtNFwiPlxuICAgICAgICAgIHtjYXN0Lm1hcCgoYWN0b3IpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXthY3Rvci5pZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXN0KGFjdG9yKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcC0zIHJvdW5kZWQteGwgYmctWyMxODFjMjFdIGhvdmVyOmJnLVsjMjYyYTMwXSBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS8zMCBob3Zlcjpib3JkZXItWyNmNWM1MThdLzQwIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGdyb3VwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIwIGgtMjAgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiBtYi0yLjUgc2hhZG93LW1kIGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCBncm91cC1ob3Zlcjpib3JkZXItWyNmNWM1MThdIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXthY3Rvci5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD17YWN0b3IubmFtZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI2UwZTJlYV0gZm9udC1ib2xkIGdyb3VwLWhvdmVyOnRleHQtWyNmNWM1MThdIHRyYW5zaXRpb24tY29sb3JzIGxpbmUtY2xhbXAtMVwiPlxuICAgICAgICAgICAgICAgIHthY3Rvci5uYW1lfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gbGluZS1jbGFtcC0xIG10LTAuNVwiPnthY3Rvci5yb2xlfTwvcD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bI2Y1YzUxOF0gZm9udC1zZW1pYm9sZCBtdC0xXCI+XG4gICAgICAgICAgICAgICAge2FjdG9yLmVwaXNvZGVzfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENhc3QgRGV0YWlsIE1vZGFsICovfVxuICAgICAge3NlbGVjdGVkQ2FzdCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGJnLVsjMGEwZTEzXS84MCBiYWNrZHJvcC1ibHVyLXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBhbmltYXRlLWZhZGVJblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXN0KG51bGwpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxYzIwMjVdIGJvcmRlciBib3JkZXItWyMzMTM1M2JdIHJvdW5kZWQtMnhsIG1heC13LW1kIHctZnVsbCBwLTYgcmVsYXRpdmUgc2hhZG93LTJ4bFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ2FzdChudWxsKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LVsjZDFjNWFjXSBob3Zlcjp0ZXh0LVsjZTBlMmVhXSBwLTEgcm91bmRlZC1mdWxsIGJnLVsjMjYyYTMwXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkQ2FzdC5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3NlbGVjdGVkQ2FzdC5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjQgaC0yNCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyIGJvcmRlci0yIGJvcmRlci1bI2Y1YzUxOF0gc2hhZG93LXhsIG1iLTRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjZTBlMmVhXVwiPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZENhc3QubmFtZX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjZjVjNTE4XSBmb250LXNlbWlib2xkIG1iLTFcIj5cbiAgICAgICAgICAgICAgICBQZXJzb25hamU6IHtzZWxlY3RlZENhc3Qucm9sZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdIG1iLTQgYmctWyMyNjJhMzBdIHB4LTMgcHktMSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRDYXN0LmVwaXNvZGVzfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgQWNsYW1hZGEgaW50ZXJwcmV0YWNpw7NuIGVuIEdhbWJpdG8gZGUgRGFtYS4gTm9taW5hZGEgeSByZWNvbm9jaWRhIHBvciBzdSBhcG9ydGVcbiAgICAgICAgICAgICAgICBhcnTDrXN0aWNvIHkgZmlkZWxpZGFkIGRyYW3DoXRpY2EgYSBsYSBvYnJhIGRlIFdhbHRlciBUZXZpcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIEFsbCBDYXN0IE1vZGFsICovfVxuICAgICAge3Nob3dBbGxDYXN0ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgYmctWyMwYTBlMTNdLzgwIGJhY2tkcm9wLWJsdXItc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWxsQ2FzdChmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzFjMjAyNV0gYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0gcm91bmRlZC0yeGwgbWF4LXctMnhsIHctZnVsbCBtYXgtaC1bODB2aF0gZmxleCBmbGV4LWNvbCBwLTYgcmVsYXRpdmUgc2hhZG93LTJ4bFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi00IGJvcmRlci1iIGJvcmRlci1bIzMxMzUzYl0vNTBcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC14bCBmb250LWJvbGQgdGV4dC1bI2UwZTJlYV1cIj5cbiAgICAgICAgICAgICAgICBSZXBhcnRvIENvbXBsZXRvICg0MiBhY3RvcmVzKVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FsbENhc3QoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyNkMWM1YWNdIGhvdmVyOnRleHQtWyNlMGUyZWFdIHAtMS41IHJvdW5kZWQtZnVsbCBiZy1bIzI2MmEzMF1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0byBweS00IHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICB7Y2FzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yIHJvdW5kZWQtbGcgYmctWyMxODFjMjFdXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtWyNlMGUyZWFdXCI+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjZDFjNWFjXVwiPntpdGVtLnJvbGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtWyNmNWM1MThdXCI+e2l0ZW0uZXBpc29kZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0yIHRleHQteHMgdGV4dC1bI2QxYzVhY11cIj5cbiAgICAgICAgICAgICAgICBZIDM4IG1pZW1icm9zIGRlIHJlcGFydG8geSBlcXVpcG8gYWRpY2lvbmFsZXMgbGlzdGFkb3MgZW4gbG9zIGNyw6lkaXRvcyBvZmljaWFsZXMuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19