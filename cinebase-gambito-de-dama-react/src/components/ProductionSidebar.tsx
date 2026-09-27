const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { Trophy, Info, Globe, Star } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/ProductionSidebar.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const ProductionSidebar = ({ awards, productionDetails, similarTitles, onSelectSimilarTitle }) => {
	return /* @__PURE__ */ _jsxDEV("aside", {
		className: "lg:col-span-4 flex flex-col gap-6",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bg-[#1c2025] rounded-xl p-6 shadow-md border border-[#31353b]/40 flex flex-col gap-4",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV(Trophy, { className: "w-5 h-5 text-[#f5c518]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("h3", {
						className: "font-['Space_Grotesk'] text-lg text-[#e0e2ea] font-bold",
						children: "Premios & Distinciones"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-2.5",
					children: awards.map((award) => /* @__PURE__ */ _jsxDEV("div", {
						className: "p-3 bg-[#181c21] rounded-lg border border-[#31353b]/30 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs md:text-sm text-[#e0e2ea] font-bold block truncate",
								children: award.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-[11px] text-[#d1c5ac] line-clamp-1",
								children: award.subtitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "shrink-0 flex items-center justify-center font-['Space_Grotesk'] text-lg text-[#f5c518] font-bold",
							children: award.badge === "globe" ? /* @__PURE__ */ _jsxDEV(Globe, { className: "w-5 h-5 text-[#d1c5ac]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 19
							}, this) : /* @__PURE__ */ _jsxDEV("span", { children: award.badge }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 15
						}, this)]
					}, award.id, true, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bg-[#1c2025] rounded-xl p-6 shadow-md border border-[#31353b]/40 flex flex-col gap-4",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV(Info, { className: "w-5 h-5 text-[#f5c518]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("h3", {
						className: "font-['Space_Grotesk'] text-lg text-[#e0e2ea] font-bold",
						children: "Detalles de Producción"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-2 text-xs md:text-sm",
					children: productionDetails.map((detail, idx) => /* @__PURE__ */ _jsxDEV("div", {
						className: "flex justify-between items-center p-2.5 bg-[#181c21] rounded border border-[#31353b]/30",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[#d1c5ac] font-medium",
							children: detail.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: `font-semibold text-right ${detail.highlight ? "font-mono text-[#e0e2ea]" : "text-[#e0e2ea]"}`,
							children: detail.value
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 15
						}, this)]
					}, idx, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bg-[#1c2025] rounded-xl p-6 shadow-md border border-[#31353b]/40 flex flex-col gap-4",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "font-['Space_Grotesk'] text-lg text-[#e0e2ea] font-bold",
						children: "Títulos Similares"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "text-[10px] text-[#f5c518] font-mono tracking-wider uppercase font-semibold",
						children: "Basado en afinidad"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-3",
					children: similarTitles.map((title) => /* @__PURE__ */ _jsxDEV("div", {
						onClick: () => onSelectSimilarTitle && onSelectSimilarTitle(title),
						className: "p-3 rounded-lg bg-[#181c21] hover:bg-[#262a30] border border-[#31353b]/30 hover:border-[#f5c518]/40 transition-all flex gap-3 group cursor-pointer",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "w-14 h-20 rounded-md overflow-hidden shrink-0 shadow-md border border-[#31353b]",
							children: /* @__PURE__ */ _jsxDEV("img", {
								src: title.poster,
								alt: title.title,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
								referrerPolicy: "no-referrer"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex-1 min-w-0 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ _jsxDEV("h4", {
									className: "text-sm text-[#e0e2ea] font-bold group-hover:text-[#f5c518] transition-colors truncate",
									children: title.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 111,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-[11px] text-[#d1c5ac] truncate mt-0.5",
									children: title.genre
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 mt-1.5",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ _jsxDEV(Star, { className: "w-3 h-3 fill-[#f5c518] text-[#f5c518]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 118,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "text-xs font-bold text-[#e0e2ea] tabular-nums",
												children: title.rating.toFixed(1)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 119,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 117,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[#31353b]",
											children: "•"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 123,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[11px] text-[#d1c5ac]",
											children: title.episodesOrDuration
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 124,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 15
						}, this)]
					}, title.id, true, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFNLFdBQVU7cUJBQThCLE1BQU07VUFBeUI7Ozs7O1NBQzFFOzs7Ozs7T0FDRjs7Ozs7Y0FDRjtRQWhDRSxNQUFNOzs7O1lBZ0NSLENBQ047SUFDRTs7OztZQUNGOzs7Ozs7RUFDQTs7Ozs7O0FBRVgiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiUHJvZHVjdGlvblNpZGViYXIudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBd2FyZEl0ZW0sIFByb2R1Y3Rpb25EZXRhaWwsIFNpbWlsYXJUaXRsZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFRyb3BoeSwgSW5mbywgR2xvYmUsIFN0YXIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvZHVjdGlvblNpZGViYXJQcm9wcyB7XG4gIGF3YXJkczogQXdhcmRJdGVtW107XG4gIHByb2R1Y3Rpb25EZXRhaWxzOiBQcm9kdWN0aW9uRGV0YWlsW107XG4gIHNpbWlsYXJUaXRsZXM6IFNpbWlsYXJUaXRsZVtdO1xuICBvblNlbGVjdFNpbWlsYXJUaXRsZT86ICh0aXRsZTogU2ltaWxhclRpdGxlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdGlvblNpZGViYXI6IFJlYWN0LkZDPFByb2R1Y3Rpb25TaWRlYmFyUHJvcHM+ID0gKHtcbiAgYXdhcmRzLFxuICBwcm9kdWN0aW9uRGV0YWlscyxcbiAgc2ltaWxhclRpdGxlcyxcbiAgb25TZWxlY3RTaW1pbGFyVGl0bGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTQgZmxleCBmbGV4LWNvbCBnYXAtNlwiPlxuICAgICAgey8qIDEuIEF3YXJkcyAmIERpc3RpbmN0aW9ucyBXaWRnZXQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMWMyMDI1XSByb3VuZGVkLXhsIHAtNiBzaGFkb3ctbWQgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNDAgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPFRyb3BoeSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtWyNmNWM1MThdXCIgLz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LWxnIHRleHQtWyNlMGUyZWFdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgUHJlbWlvcyAmYW1wOyBEaXN0aW5jaW9uZXNcbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMi41XCI+XG4gICAgICAgICAge2F3YXJkcy5tYXAoKGF3YXJkKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17YXdhcmQuaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBiZy1bIzE4MWMyMV0gcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1kOnRleHQtc20gdGV4dC1bI2UwZTJlYV0gZm9udC1ib2xkIGJsb2NrIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7YXdhcmQudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtWyNkMWM1YWNdIGxpbmUtY2xhbXAtMVwiPnthd2FyZC5zdWJ0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC1sZyB0ZXh0LVsjZjVjNTE4XSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7YXdhcmQuYmFkZ2UgPT09ICdnbG9iZScgPyAoXG4gICAgICAgICAgICAgICAgICA8R2xvYmUgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LVsjZDFjNWFjXVwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnthd2FyZC5iYWRnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDIuIFRlY2huaWNhbCBQcm9kdWN0aW9uIERldGFpbHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMWMyMDI1XSByb3VuZGVkLXhsIHAtNiBzaGFkb3ctbWQgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNDAgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPEluZm8gY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LVsjZjVjNTE4XVwiIC8+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC1sZyB0ZXh0LVsjZTBlMmVhXSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIERldGFsbGVzIGRlIFByb2R1Y2Npw7NuXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC14cyBtZDp0ZXh0LXNtXCI+XG4gICAgICAgICAge3Byb2R1Y3Rpb25EZXRhaWxzLm1hcCgoZGV0YWlsLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTIuNSBiZy1bIzE4MWMyMV0gcm91bmRlZCBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS8zMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNkMWM1YWNdIGZvbnQtbWVkaXVtXCI+e2RldGFpbC5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1zZW1pYm9sZCB0ZXh0LXJpZ2h0ICR7XG4gICAgICAgICAgICAgICAgICBkZXRhaWwuaGlnaGxpZ2h0ID8gJ2ZvbnQtbW9ubyB0ZXh0LVsjZTBlMmVhXScgOiAndGV4dC1bI2UwZTJlYV0nXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGV0YWlsLnZhbHVlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDMuIFJlY29tbWVuZGVkIFNpbWlsYXIgVGl0bGVzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzFjMjAyNV0gcm91bmRlZC14bCBwLTYgc2hhZG93LW1kIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzQwIGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LWxnIHRleHQtWyNlMGUyZWFdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgVMOtdHVsb3MgU2ltaWxhcmVzXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjZjVjNTE4XSBmb250LW1vbm8gdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIEJhc2FkbyBlbiBhZmluaWRhZFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICB7c2ltaWxhclRpdGxlcy5tYXAoKHRpdGxlKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17dGl0bGUuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0U2ltaWxhclRpdGxlICYmIG9uU2VsZWN0U2ltaWxhclRpdGxlKHRpdGxlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYmctWyMxODFjMjFdIGhvdmVyOmJnLVsjMjYyYTMwXSBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS8zMCBob3Zlcjpib3JkZXItWyNmNWM1MThdLzQwIHRyYW5zaXRpb24tYWxsIGZsZXggZ2FwLTMgZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogVmVydGljYWwgUG9zdGVyIDI6MyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE0IGgtMjAgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW4gc2hyaW5rLTAgc2hhZG93LW1kIGJvcmRlciBib3JkZXItWyMzMTM1M2JdXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXt0aXRsZS5wb3N0ZXJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3RpdGxlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogVGl0bGUgJiBNZXRhZGF0YSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI2UwZTJlYV0gZm9udC1ib2xkIGdyb3VwLWhvdmVyOnRleHQtWyNmNWM1MThdIHRyYW5zaXRpb24tY29sb3JzIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7dGl0bGUudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LVsjZDFjNWFjXSB0cnVuY2F0ZSBtdC0wLjVcIj57dGl0bGUuZ2VucmV9PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtdC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwidy0zIGgtMyBmaWxsLVsjZjVjNTE4XSB0ZXh0LVsjZjVjNTE4XVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtWyNlMGUyZWFdIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZS5yYXRpbmcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMzEzNTNiXVwiPuKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtWyNkMWM1YWNdXCI+e3RpdGxlLmVwaXNvZGVzT3JEdXJhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn07XG4iXX0=