const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { Film, X, Play, Pause, Volume2, Maximize2 } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/TrailerModal.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const TrailerModal = ({ isOpen, onClose, title, thumbnail }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(25);
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			setIsPlaying(false);
			setProgress(15);
		}
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);
	// Simulate progress when playing
	useEffect(() => {
		let timer;
		if (isPlaying) {
			timer = setInterval(() => {
				setProgress((p) => p >= 100 ? 0 : p + 1);
			}, 500);
		}
		return () => clearInterval(timer);
	}, [isPlaying]);
	if (!isOpen) return null;
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		className: "fixed inset-0 z-50 bg-[#0a0e13]/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn",
		onClick: onClose,
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-[#1c2025] rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-[#31353b]/80",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-4 flex items-center justify-between bg-[#262a30] border-b border-[#31353b]",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV(Film, { className: "w-5 h-5 text-[#f5c518]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "font-['Space_Grotesk'] text-sm md:text-base text-[#e0e2ea] font-bold",
							children: ["Trailer Oficial — ", title]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "p-1 rounded-full text-[#d1c5ac] hover:text-[#e0e2ea] hover:bg-[#1c2025] transition-colors cursor-pointer",
						"aria-label": "Cerrar modal",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden group",
					children: [
						/* @__PURE__ */ _jsxDEV("img", {
							src: thumbnail,
							alt: "Trailer Frame",
							className: `w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? "brightness-90" : "brightness-75"}`,
							referrerPolicy: "no-referrer"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 11
						}, this),
						isPlaying && /* @__PURE__ */ _jsxDEV("div", {
							className: "absolute bottom-16 left-0 right-0 text-center px-4",
							children: /* @__PURE__ */ _jsxDEV("span", {
								className: "bg-[#0a0e13]/80 text-[#e0e2ea] text-xs md:text-sm px-3 py-1 rounded backdrop-blur-sm",
								children: "Beth: \"El ajedrez es un mundo de 64 casillas. En él me siento segura.\""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 13
						}, this),
						!isPlaying && /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setIsPlaying(true),
							className: "absolute p-5 rounded-full bg-[#f5c518] text-[#0a0e13] shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group-hover:shadow-[#f5c518]/30",
							"aria-label": "Reproducir trailer",
							children: /* @__PURE__ */ _jsxDEV(Play, { className: "w-10 h-10 fill-current ml-1" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "w-full bg-white/20 h-1 rounded-full cursor-pointer overflow-hidden",
								onClick: (e) => {
									const rect = e.currentTarget.getBoundingClientRect();
									const clickX = e.clientX - rect.left;
									setProgress(clickX / rect.width * 100);
								},
								children: /* @__PURE__ */ _jsxDEV("div", {
									className: "bg-[#f5c518] h-full rounded-full transition-all",
									style: { width: `${progress}%` }
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between text-xs text-[#e0e2ea]",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ _jsxDEV("button", {
										onClick: () => setIsPlaying(!isPlaying),
										className: "hover:text-[#f5c518] transition-colors",
										children: isPlaying ? /* @__PURE__ */ _jsxDEV(Pause, { className: "w-4 h-4 fill-current" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 128,
											columnNumber: 21
										}, this) : /* @__PURE__ */ _jsxDEV(Play, { className: "w-4 h-4 fill-current" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 130,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ _jsxDEV(Volume2, { className: "w-4 h-4 text-[#d1c5ac]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 134,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[11px] font-mono text-[#d1c5ac]",
											children: "01:42 / 02:24"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 135,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 133,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "px-1.5 py-0.5 rounded bg-[#f5c518]/20 text-[#f5c518] font-bold text-[10px]",
										children: "4K HDR"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 140,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV(Maximize2, { className: "w-3.5 h-3.5 text-[#d1c5ac]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 143,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-4 bg-[#181c21] flex items-center justify-between border-t border-[#31353b]/50",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs text-[#d1c5ac]",
						children: "Resolución: 4K UHD • Sonido Surround 5.1 Dolby Atmos"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "px-4 py-1.5 rounded-lg bg-[#262a30] hover:bg-[#31353b] text-[#e0e2ea] text-xs font-bold transition-colors cursor-pointer border border-[#31353b]",
						children: "Cerrar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QVU7b0JBQWYsQ0FDRSx3QkFBQyxTQUFELEVBQVMsV0FBVSx5QkFBMEI7Ozs7b0JBQzdDLHdCQUFDLFFBQUQ7V0FBTSxXQUFVO3FCQUF1QztVQUFtQjs7OztrQkFDdkU7Ozs7O2lCQUNGOzs7OztrQkFFTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNFLHdCQUFDLFFBQUQ7VUFBTSxXQUFVO29CQUE2RTtTQUV2Rjs7OzttQkFDTix3QkFBQyxXQUFELEVBQVcsV0FBVSw2QkFBOEI7Ozs7aUJBQ2hEOzs7OztnQkFDRjs7Ozs7ZUFDRjs7Ozs7O0tBQ0Y7Ozs7OztJQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRSx3QkFBQyxRQUFEO01BQU0sV0FBVTtnQkFBeUI7S0FFbkM7Ozs7ZUFDTix3QkFBQyxVQUFEO01BQ0UsU0FBUztNQUNULFdBQVU7Z0JBQ1g7S0FFTzs7OzthQUNMOzs7Ozs7R0FDRjs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiVHJhaWxlck1vZGFsLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpbG0sIFgsIFBsYXksIFBhdXNlLCBWb2x1bWUyLCBNYXhpbWl6ZTIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgVHJhaWxlck1vZGFsUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVHJhaWxlck1vZGFsOiBSZWFjdC5GQzxUcmFpbGVyTW9kYWxQcm9wcz4gPSAoe1xuICBpc09wZW4sXG4gIG9uQ2xvc2UsXG4gIHRpdGxlLFxuICB0aHVtYm5haWwsXG59KSA9PiB7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMjUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBvbkNsb3NlKCk7XG4gICAgfTtcbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgc2V0UHJvZ3Jlc3MoMTUpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICB9LCBbaXNPcGVuLCBvbkNsb3NlXSk7XG5cbiAgLy8gU2ltdWxhdGUgcHJvZ3Jlc3Mgd2hlbiBwbGF5aW5nXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpbWVyOiBOb2RlSlMuVGltZW91dDtcbiAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0UHJvZ3Jlc3MoKHApID0+IChwID49IDEwMCA/IDAgOiBwICsgMSkpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbaXNQbGF5aW5nXSk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgYmctWyMwYTBlMTNdLzkwIGJhY2tkcm9wLWJsdXIteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGFuaW1hdGUtZmFkZUluXCJcbiAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzFjMjAyNV0gcm91bmRlZC0yeGwgbWF4LXctNHhsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCByZWxhdGl2ZSBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS84MFwiXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgPlxuICAgICAgICB7LyogTW9kYWwgSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctWyMyNjJhMzBdIGJvcmRlci1iIGJvcmRlci1bIzMxMzUzYl1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8RmlsbSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtWyNmNWM1MThdXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtWydTcGFjZV9Hcm90ZXNrJ10gdGV4dC1zbSBtZDp0ZXh0LWJhc2UgdGV4dC1bI2UwZTJlYV0gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIFRyYWlsZXIgT2ZpY2lhbCDigJQge3RpdGxlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgcm91bmRlZC1mdWxsIHRleHQtWyNkMWM1YWNdIGhvdmVyOnRleHQtWyNlMGUyZWFdIGhvdmVyOmJnLVsjMWMyMDI1XSB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2VycmFyIG1vZGFsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFZpZGVvIFBsYXllciBEaXNwbGF5ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBhc3BlY3QtdmlkZW8gYmctYmxhY2sgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt0aHVtYm5haWx9XG4gICAgICAgICAgICBhbHQ9XCJUcmFpbGVyIEZyYW1lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi01MDAgJHtcbiAgICAgICAgICAgICAgaXNQbGF5aW5nID8gJ2JyaWdodG5lc3MtOTAnIDogJ2JyaWdodG5lc3MtNzUnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogU3VidGl0bGVzIG9yIHNpbXVsYXRpb24gYmFubmVyICovfVxuICAgICAgICAgIHtpc1BsYXlpbmcgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMTYgbGVmdC0wIHJpZ2h0LTAgdGV4dC1jZW50ZXIgcHgtNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1bIzBhMGUxM10vODAgdGV4dC1bI2UwZTJlYV0gdGV4dC14cyBtZDp0ZXh0LXNtIHB4LTMgcHktMSByb3VuZGVkIGJhY2tkcm9wLWJsdXItc21cIj5cbiAgICAgICAgICAgICAgICBCZXRoOiBcIkVsIGFqZWRyZXogZXMgdW4gbXVuZG8gZGUgNjQgY2FzaWxsYXMuIEVuIMOpbCBtZSBzaWVudG8gc2VndXJhLlwiXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogQmlnIENlbnRlciBQbGF5L1BhdXNlIGJ1dHRvbiAqL31cbiAgICAgICAgICB7IWlzUGxheWluZyAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzUGxheWluZyh0cnVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcC01IHJvdW5kZWQtZnVsbCBiZy1bI2Y1YzUxOF0gdGV4dC1bIzBhMGUxM10gc2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMTAgYWN0aXZlOnNjYWxlLTk1IHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGdyb3VwLWhvdmVyOnNoYWRvdy1bI2Y1YzUxOF0vMzBcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVwcm9kdWNpciB0cmFpbGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGZpbGwtY3VycmVudCBtbC0xXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogVmlkZW8gQ29udHJvbCBCYXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBwLTMgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrLzkwIHZpYS1ibGFjay81MCB0by10cmFuc3BhcmVudCBmbGV4IGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAgICB7LyogUHJvZ3Jlc3MgVHJhY2sgKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy13aGl0ZS8yMCBoLTEgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlja1ggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoKGNsaWNrWCAvIHJlY3Qud2lkdGgpICogMTAwKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjZjVjNTE4XSBoLWZ1bGwgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtWyNlMGUyZWFdXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LVsjZjVjNTE4XSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2lzUGxheWluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPFBhdXNlIGNsYXNzTmFtZT1cInctNCBoLTQgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5IGNsYXNzTmFtZT1cInctNCBoLTQgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICA8Vm9sdW1lMiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyNkMWM1YWNdXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbW9ubyB0ZXh0LVsjZDFjNWFjXVwiPjAxOjQyIC8gMDI6MjQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0xLjUgcHktMC41IHJvdW5kZWQgYmctWyNmNWM1MThdLzIwIHRleHQtWyNmNWM1MThdIGZvbnQtYm9sZCB0ZXh0LVsxMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgNEsgSERSXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxNYXhpbWl6ZTIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1bI2QxYzVhY11cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9kYWwgRm9vdGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBiZy1bIzE4MWMyMV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci10IGJvcmRlci1bIzMxMzUzYl0vNTBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdXCI+XG4gICAgICAgICAgICBSZXNvbHVjacOzbjogNEsgVUhEIOKAoiBTb25pZG8gU3Vycm91bmQgNS4xIERvbGJ5IEF0bW9zXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTEuNSByb3VuZGVkLWxnIGJnLVsjMjYyYTMwXSBob3ZlcjpiZy1bIzMxMzUzYl0gdGV4dC1bI2UwZTJlYV0gdGV4dC14cyBmb250LWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENlcnJhclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==