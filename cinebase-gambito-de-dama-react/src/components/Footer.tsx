const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { ArrowUp, Download } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/Footer.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const Footer = ({ onDownloadZip }) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ _jsxDEV("footer", {
		className: "w-full bg-[#101419] border-t border-[#31353b]/30 mt-12",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 pt-10 pb-8",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col md:flex-row items-center justify-between gap-4 pb-6",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "w-6 h-6 rounded bg-[#f5c518] flex items-center justify-center text-[#0a0e13] font-bold text-xs",
							children: /* @__PURE__ */ _jsxDEV("span", {
								className: "material-symbols-outlined text-[16px]",
								children: "movie"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 19,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "font-['Space_Grotesk'] text-lg font-bold tracking-tight text-[#e0e2ea]",
							children: ["Cine", /* @__PURE__ */ _jsxDEV("span", {
								className: "text-[#f5c518]",
								children: "Base"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-xs text-[#d1c5ac] ml-2 pl-2 border-l border-[#31353b]",
							children: "Edición Internacional"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-6 text-xs text-[#d1c5ac]",
					children: [
						onDownloadZip && /* @__PURE__ */ _jsxDEV("button", {
							onClick: onDownloadZip,
							className: "flex items-center gap-1.5 text-[#f5c518] hover:underline font-semibold cursor-pointer",
							children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-3.5 h-3.5 stroke-[2.5]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Descargar Código (.ZIP)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("a", {
							href: "#",
							className: "hover:text-[#f5c518] transition-colors",
							children: "Términos de uso"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("a", {
							href: "#",
							className: "hover:text-[#f5c518] transition-colors",
							children: "Privacidad"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("a", {
							href: "#",
							className: "hover:text-[#f5c518] transition-colors",
							children: "Prensa"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: scrollToTop,
							className: "flex items-center gap-1 text-[#f5c518] hover:underline cursor-pointer",
							children: [/* @__PURE__ */ _jsxDEV("span", { children: "Subir" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV(ArrowUp, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "border-t border-[#31353b]/20 pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left",
				children: [/* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs text-[#d1c5ac]",
					children: "© 2024 CineBase Entertainment Inc. Todos los derechos reservados."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs text-[#d1c5ac]/70",
					children: "Datos cinematográficos y audiovisuales curados para distribución y consulta pública."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 9
			}, this)]
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

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsU0FBUyxnQkFBZ0I7OztBQU1sQyxPQUFPLE1BQU0sVUFBaUMsRUFBRSxvQkFBb0I7Q0FDbEUsTUFBTSxvQkFBb0I7RUFDeEIsT0FBTyxTQUFTO0dBQUUsS0FBSztHQUFHLFVBQVU7RUFBUyxDQUFDO0NBQ2hEO0NBRUEsT0FDRSx3QkFBQyxVQUFEO0VBQVEsV0FBVTtZQUNoQix3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmLENBQ0Usd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZixDQUNFLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWY7TUFDRSx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFDYix3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBd0M7T0FBVzs7Ozs7TUFDaEU7Ozs7O01BQ0wsd0JBQUMsUUFBRDtPQUFNLFdBQVU7aUJBQWhCLENBQXlGLFFBQ25GLHdCQUFDLFFBQUQ7UUFBTSxXQUFVO2tCQUFpQjtPQUFVOzs7O2VBQzNDOzs7Ozs7TUFDTix3QkFBQyxRQUFEO09BQU0sV0FBVTtpQkFBNkQ7TUFFdkU7Ozs7O0tBQ0g7Ozs7O2NBRUwsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZjtNQUNHLGlCQUNDLHdCQUFDLFVBQUQ7T0FDRSxTQUFTO09BQ1QsV0FBVTtpQkFGWixDQUlFLHdCQUFDLFVBQUQsRUFBVSxXQUFVLDJCQUE0Qjs7OztpQkFDaEQsd0JBQUMsUUFBRCxZQUFNLDBCQUE2Qjs7OztlQUM3Qjs7Ozs7O01BRVYsd0JBQUMsS0FBRDtPQUFHLE1BQUs7T0FBSSxXQUFVO2lCQUF5QztNQUFrQjs7Ozs7TUFDakYsd0JBQUMsS0FBRDtPQUFHLE1BQUs7T0FBSSxXQUFVO2lCQUF5QztNQUFhOzs7OztNQUM1RSx3QkFBQyxLQUFEO09BQUcsTUFBSztPQUFJLFdBQVU7aUJBQXlDO01BQVM7Ozs7O01BQ3hFLHdCQUFDLFVBQUQ7T0FDRSxTQUFTO09BQ1QsV0FBVTtpQkFGWixDQUlFLHdCQUFDLFFBQUQsWUFBTSxRQUFXOzs7O2lCQUNqQix3QkFBQyxTQUFELEVBQVMsV0FBVSxjQUFlOzs7O2VBQzVCOzs7Ozs7S0FDTDs7Ozs7WUFDRjs7Ozs7YUFFTCx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmLENBQ0Usd0JBQUMsS0FBRDtLQUFHLFdBQVU7ZUFBeUI7SUFFbkM7Ozs7Y0FDSCx3QkFBQyxLQUFEO0tBQUcsV0FBVTtlQUE0QjtJQUV0Qzs7OztZQUNBOzs7OztXQUNGOzs7Ozs7Q0FDQzs7Ozs7QUFFWiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJGb290ZXIudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcnJvd1VwLCBEb3dubG9hZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIG9uRG93bmxvYWRaaXA/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRm9vdGVyOiBSZWFjdC5GQzxGb290ZXJQcm9wcz4gPSAoeyBvbkRvd25sb2FkWmlwIH0pID0+IHtcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzEwMTQxOV0gYm9yZGVyLXQgYm9yZGVyLVsjMzEzNTNiXS8zMCBtdC0xMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTQ0MHB4XSBteC1hdXRvIHB4LTQgbWQ6cHgtOCBsZzpweC0xNiBwdC0xMCBwYi04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC00IHBiLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLTYgcm91bmRlZCBiZy1bI2Y1YzUxOF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzBhMGUxM10gZm9udC1ib2xkIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB0ZXh0LVsxNnB4XVwiPm1vdmllPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LVsnU3BhY2VfR3JvdGVzayddIHRleHQtbGcgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtWyNlMGUyZWFdXCI+XG4gICAgICAgICAgICAgIENpbmU8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjZjVjNTE4XVwiPkJhc2U8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdIG1sLTIgcGwtMiBib3JkZXItbCBib3JkZXItWyMzMTM1M2JdXCI+XG4gICAgICAgICAgICAgIEVkaWNpw7NuIEludGVybmFjaW9uYWxcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgdGV4dC14cyB0ZXh0LVsjZDFjNWFjXVwiPlxuICAgICAgICAgICAge29uRG93bmxvYWRaaXAgJiYgKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Eb3dubG9hZFppcH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQtWyNmNWM1MThdIGhvdmVyOnVuZGVybGluZSBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSBzdHJva2UtWzIuNV1cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkRlc2NhcmdhciBDw7NkaWdvICguWklQKTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LVsjZjVjNTE4XSB0cmFuc2l0aW9uLWNvbG9yc1wiPlTDqXJtaW5vcyBkZSB1c288L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtWyNmNWM1MThdIHRyYW5zaXRpb24tY29sb3JzXCI+UHJpdmFjaWRhZDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1bI2Y1YzUxOF0gdHJhbnNpdGlvbi1jb2xvcnNcIj5QcmVuc2E8L2E+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LVsjZjVjNTE4XSBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3Bhbj5TdWJpcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPEFycm93VXAgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLVsjMzEzNTNiXS8yMCBwdC00IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMiB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdXCI+XG4gICAgICAgICAgICDCqSAyMDI0IENpbmVCYXNlIEVudGVydGFpbm1lbnQgSW5jLiBUb2RvcyBsb3MgZGVyZWNob3MgcmVzZXJ2YWRvcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjZDFjNWFjXS83MFwiPlxuICAgICAgICAgICAgRGF0b3MgY2luZW1hdG9ncsOhZmljb3MgeSBhdWRpb3Zpc3VhbGVzIGN1cmFkb3MgcGFyYSBkaXN0cmlidWNpw7NuIHkgY29uc3VsdGEgcMO6YmxpY2EuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcbiJdfQ==