const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { Bookmark, Search, User, Download } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/Header.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const Header = ({ watchlistCount, onDownloadZip }) => {
	const [activeNav, setActiveNav] = useState("series");
	return /* @__PURE__ */ _jsxDEV("header", {
		className: "fixed top-0 left-0 right-0 z-50 bg-[#0a0e13]/90 backdrop-blur-xl border-b border-[#31353b]/40 transition-colors",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "h-16 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-4 shrink-0",
					children: /* @__PURE__ */ _jsxDEV("a", {
						href: "#",
						className: "flex items-center gap-2 group",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "w-8 h-8 rounded-lg bg-[#f5c518] flex items-center justify-center text-[#0a0e13] font-bold shadow-md shadow-[#f5c518]/20 group-hover:scale-105 transition-transform",
							children: /* @__PURE__ */ _jsxDEV("span", {
								className: "material-symbols-outlined text-[20px] font-bold",
								children: "movie"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 20,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 19,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "font-['Space_Grotesk'] text-xl font-bold tracking-tight text-[#e0e2ea] flex items-center",
							children: ["Cine", /* @__PURE__ */ _jsxDEV("span", {
								className: "text-[#f5c518]",
								children: "Base"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("nav", {
					className: "hidden md:flex items-center gap-8 shrink-0",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveNav("peliculas"),
							className: `text-sm font-semibold transition-colors relative py-1 ${activeNav === "peliculas" ? "text-[#f5c518]" : "text-[#d1c5ac] hover:text-[#e0e2ea]"}`,
							children: ["Películas", activeNav === "peliculas" && /* @__PURE__ */ _jsxDEV("span", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#f5c518] rounded-full" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveNav("series"),
							className: `text-sm font-semibold transition-colors relative py-1 ${activeNav === "series" ? "text-[#f5c518]" : "text-[#d1c5ac] hover:text-[#e0e2ea]"}`,
							children: ["Series", activeNav === "series" && /* @__PURE__ */ _jsxDEV("span", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#f5c518] rounded-full" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveNav("celebridades"),
							className: `text-sm font-semibold transition-colors relative py-1 ${activeNav === "celebridades" ? "text-[#f5c518]" : "text-[#d1c5ac] hover:text-[#e0e2ea]"}`,
							children: ["Celebridades", activeNav === "celebridades" && /* @__PURE__ */ _jsxDEV("span", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#f5c518] rounded-full" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "hidden sm:flex items-center bg-[#1c2025] border border-[#31353b]/50 rounded-lg px-3 py-1.5 text-xs text-[#d1c5ac] gap-2",
							children: [
								/* @__PURE__ */ _jsxDEV(Search, { className: "w-3.5 h-3.5 text-[#d1c5ac]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 74,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "hidden lg:inline text-xs",
									children: "Buscar películas, series..."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("kbd", {
									className: "hidden lg:inline-block px-1.5 py-0.5 bg-[#262a30] text-[10px] rounded text-[#8c9bae] font-mono",
									children: "⌘K"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onDownloadZip,
							title: "Descargar proyecto completo (.ZIP)",
							className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f5c518] hover:bg-[#f0c110] text-[#0a0e13] text-xs font-bold transition-all shadow-md shadow-[#f5c518]/20 cursor-pointer active:scale-95",
							children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4 stroke-[2.5]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "hidden sm:inline",
								children: "Descargar Código"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							title: "Tu Watchlist",
							className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c2025] hover:bg-[#262a30] border border-[#31353b]/40 text-[#e0e2ea] text-xs font-semibold transition-colors cursor-pointer",
							children: [
								/* @__PURE__ */ _jsxDEV(Bookmark, { className: "w-4 h-4 text-[#f5c518]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "hidden sm:inline",
									children: "Watchlist"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 13
								}, this),
								watchlistCount > 0 && /* @__PURE__ */ _jsxDEV("span", {
									className: "px-1.5 py-0.2 bg-[#f5c518] text-[#0a0e13] font-bold text-[10px] rounded-full",
									children: watchlistCount
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							"aria-label": "Perfil de usuario",
							className: "w-8 h-8 rounded-full bg-[#1c2025] hover:bg-[#262a30] border border-[#31353b]/50 flex items-center justify-center text-[#e0e2ea] transition-colors",
							children: /* @__PURE__ */ _jsxDEV(User, { className: "w-4 h-4 text-[#d1c5ac]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLGdCQUFnQjtBQUNoQyxTQUFTLFVBQVUsUUFBUSxNQUFNLGdCQUFnQjs7O0FBUWpELE9BQU8sTUFBTSxVQUFpQyxFQUFFLGdCQUFnQixvQkFBb0I7Q0FDbEYsTUFBTSxDQUFDLFdBQVcsZ0JBQWdCLFNBQWtELFFBQVE7Q0FFNUYsT0FDRSx3QkFBQyxVQUFEO0VBQVEsV0FBVTtZQUNoQix3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmO0lBRUUsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFDYix3QkFBQyxLQUFEO01BQUcsTUFBSztNQUFJLFdBQVU7Z0JBQXRCLENBQ0Usd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQ2Isd0JBQUMsUUFBRDtRQUFNLFdBQVU7a0JBQWtEO09BQVc7Ozs7O01BQzFFOzs7O2dCQUNMLHdCQUFDLFFBQUQ7T0FBTSxXQUFVO2lCQUFoQixDQUEyRyxRQUNyRyx3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBaUI7T0FBVTs7OztlQUMzQzs7Ozs7Y0FDTDs7Ozs7O0lBQ0E7Ozs7O0lBR0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZjtNQUNFLHdCQUFDLFVBQUQ7T0FDRSxlQUFlLGFBQWEsV0FBVztPQUN2QyxXQUFXLHlEQUNULGNBQWMsY0FDVixtQkFDQTtpQkFMUixDQU9DLGFBRUUsY0FBYyxlQUNiLHdCQUFDLFFBQUQsRUFBTSxXQUFVLG1FQUFvRTs7OztlQUVoRjs7Ozs7O01BQ1Isd0JBQUMsVUFBRDtPQUNFLGVBQWUsYUFBYSxRQUFRO09BQ3BDLFdBQVcseURBQ1QsY0FBYyxXQUNWLG1CQUNBO2lCQUxSLENBT0MsVUFFRSxjQUFjLFlBQ2Isd0JBQUMsUUFBRCxFQUFNLFdBQVUsbUVBQW9FOzs7O2VBRWhGOzs7Ozs7TUFDUix3QkFBQyxVQUFEO09BQ0UsZUFBZSxhQUFhLGNBQWM7T0FDMUMsV0FBVyx5REFDVCxjQUFjLGlCQUNWLG1CQUNBO2lCQUxSLENBT0MsZ0JBRUUsY0FBYyxrQkFDYix3QkFBQyxRQUFELEVBQU0sV0FBVSxtRUFBb0U7Ozs7ZUFFaEY7Ozs7OztLQUNMOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmO01BQ0Usd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWY7UUFDRSx3QkFBQyxRQUFELEVBQVEsV0FBVSw2QkFBOEI7Ozs7O1FBQ2hELHdCQUFDLFFBQUQ7U0FBTSxXQUFVO21CQUEyQjtRQUFpQzs7Ozs7UUFDNUUsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWlHO1FBRTNHOzs7OztPQUNGOzs7Ozs7TUFFTCx3QkFBQyxVQUFEO09BQ0UsU0FBUztPQUNULE9BQU07T0FDTixXQUFVO2lCQUhaLENBS0Usd0JBQUMsVUFBRCxFQUFVLFdBQVUsdUJBQXdCOzs7O2lCQUM1Qyx3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBbUI7T0FBc0I7Ozs7ZUFDbkQ7Ozs7OztNQUVSLHdCQUFDLFVBQUQ7T0FDRSxPQUFNO09BQ04sV0FBVTtpQkFGWjtRQUlFLHdCQUFDLFVBQUQsRUFBVSxXQUFVLHlCQUEwQjs7Ozs7UUFDOUMsd0JBQUMsUUFBRDtTQUFNLFdBQVU7bUJBQW1CO1FBQWU7Ozs7O1FBQ2pELGlCQUFpQixLQUNoQix3QkFBQyxRQUFEO1NBQU0sV0FBVTttQkFDYjtRQUNHOzs7OztPQUVGOzs7Ozs7TUFFUix3QkFBQyxVQUFEO09BQ0UsY0FBVztPQUNYLFdBQVU7aUJBRVYsd0JBQUMsTUFBRCxFQUFNLFdBQVUseUJBQTBCOzs7OztNQUNwQzs7Ozs7S0FDTDs7Ozs7O0dBQ0Y7Ozs7OztDQUNDOzs7OztBQUVaIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkhlYWRlci50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm9va21hcmssIFNlYXJjaCwgVXNlciwgRG93bmxvYWQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICB3YXRjaGxpc3RDb3VudDogbnVtYmVyO1xuICBvbk9wZW5TZWFyY2g/OiAoKSA9PiB2b2lkO1xuICBvbkRvd25sb2FkWmlwOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoeyB3YXRjaGxpc3RDb3VudCwgb25Eb3dubG9hZFppcCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVOYXYsIHNldEFjdGl2ZU5hdl0gPSB1c2VTdGF0ZTwncGVsaWN1bGFzJyB8ICdzZXJpZXMnIHwgJ2NlbGVicmlkYWRlcyc+KCdzZXJpZXMnKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCBiZy1bIzBhMGUxM10vOTAgYmFja2Ryb3AtYmx1ci14bCBib3JkZXItYiBib3JkZXItWyMzMTM1M2JdLzQwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTYgdy1mdWxsIG1heC13LVsxNDQwcHhdIG14LWF1dG8gcHgtNCBtZDpweC04IGxnOnB4LTE2IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNFwiPlxuICAgICAgICB7LyogQnJhbmQgLyBMb2dvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHNocmluay0wXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtbGcgYmctWyNmNWM1MThdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWyMwYTBlMTNdIGZvbnQtYm9sZCBzaGFkb3ctbWQgc2hhZG93LVsjZjVjNTE4XS8yMCBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB0ZXh0LVsyMHB4XSBmb250LWJvbGRcIj5tb3ZpZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LXhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LVsjZTBlMmVhXSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICBDaW5lPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI2Y1YzUxOF1cIj5CYXNlPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE5hdmlnYXRpb24gTGlua3MgKi99XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC04IHNocmluay0wXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTmF2KCdwZWxpY3VsYXMnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtc20gZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWNvbG9ycyByZWxhdGl2ZSBweS0xICR7XG4gICAgICAgICAgICAgIGFjdGl2ZU5hdiA9PT0gJ3BlbGljdWxhcydcbiAgICAgICAgICAgICAgICA/ICd0ZXh0LVsjZjVjNTE4XSdcbiAgICAgICAgICAgICAgICA6ICd0ZXh0LVsjZDFjNWFjXSBob3Zlcjp0ZXh0LVsjZTBlMmVhXSdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBlbMOtY3VsYXNcbiAgICAgICAgICAgIHthY3RpdmVOYXYgPT09ICdwZWxpY3VsYXMnICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0wLjUgYmctWyNmNWM1MThdIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU5hdignc2VyaWVzJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgcmVsYXRpdmUgcHktMSAke1xuICAgICAgICAgICAgICBhY3RpdmVOYXYgPT09ICdzZXJpZXMnXG4gICAgICAgICAgICAgICAgPyAndGV4dC1bI2Y1YzUxOF0nXG4gICAgICAgICAgICAgICAgOiAndGV4dC1bI2QxYzVhY10gaG92ZXI6dGV4dC1bI2UwZTJlYV0nXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZXJpZXNcbiAgICAgICAgICAgIHthY3RpdmVOYXYgPT09ICdzZXJpZXMnICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0wLjUgYmctWyNmNWM1MThdIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU5hdignY2VsZWJyaWRhZGVzJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgcmVsYXRpdmUgcHktMSAke1xuICAgICAgICAgICAgICBhY3RpdmVOYXYgPT09ICdjZWxlYnJpZGFkZXMnXG4gICAgICAgICAgICAgICAgPyAndGV4dC1bI2Y1YzUxOF0nXG4gICAgICAgICAgICAgICAgOiAndGV4dC1bI2QxYzVhY10gaG92ZXI6dGV4dC1bI2UwZTJlYV0nXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDZWxlYnJpZGFkZXNcbiAgICAgICAgICAgIHthY3RpdmVOYXYgPT09ICdjZWxlYnJpZGFkZXMnICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgaC0wLjUgYmctWyNmNWM1MThdIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25hdj5cblxuICAgICAgICB7LyogUmlnaHQgQWN0aW9uczogV2F0Y2hsaXN0IGNvdW50IGJhZGdlICYgcHJvZmlsZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggaXRlbXMtY2VudGVyIGJnLVsjMWMyMDI1XSBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS81MCByb3VuZGVkLWxnIHB4LTMgcHktMS41IHRleHQteHMgdGV4dC1bI2QxYzVhY10gZ2FwLTJcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1bI2QxYzVhY11cIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZSB0ZXh0LXhzXCI+QnVzY2FyIHBlbMOtY3VsYXMsIHNlcmllcy4uLjwvc3Bhbj5cbiAgICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmlubGluZS1ibG9jayBweC0xLjUgcHktMC41IGJnLVsjMjYyYTMwXSB0ZXh0LVsxMHB4XSByb3VuZGVkIHRleHQtWyM4YzliYWVdIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICDijJhLXG4gICAgICAgICAgICA8L2tiZD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uRG93bmxvYWRaaXB9XG4gICAgICAgICAgICB0aXRsZT1cIkRlc2NhcmdhciBwcm95ZWN0byBjb21wbGV0byAoLlpJUClcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSByb3VuZGVkLWxnIGJnLVsjZjVjNTE4XSBob3ZlcjpiZy1bI2YwYzExMF0gdGV4dC1bIzBhMGUxM10gdGV4dC14cyBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgc2hhZG93LW1kIHNoYWRvdy1bI2Y1YzUxOF0vMjAgY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnNjYWxlLTk1XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy00IGgtNCBzdHJva2UtWzIuNV1cIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPkRlc2NhcmdhciBDw7NkaWdvPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJUdSBXYXRjaGxpc3RcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSByb3VuZGVkLWxnIGJnLVsjMWMyMDI1XSBob3ZlcjpiZy1bIzI2MmEzMF0gYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNDAgdGV4dC1bI2UwZTJlYV0gdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm9va21hcmsgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LVsjZjVjNTE4XVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+V2F0Y2hsaXN0PC9zcGFuPlxuICAgICAgICAgICAge3dhdGNobGlzdENvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTEuNSBweS0wLjIgYmctWyNmNWM1MThdIHRleHQtWyMwYTBlMTNdIGZvbnQtYm9sZCB0ZXh0LVsxMHB4XSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICB7d2F0Y2hsaXN0Q291bnR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGVyZmlsIGRlIHVzdWFyaW9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWZ1bGwgYmctWyMxYzIwMjVdIGhvdmVyOmJnLVsjMjYyYTMwXSBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS81MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjZTBlMmVhXSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFVzZXIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LVsjZDFjNWFjXVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIl19