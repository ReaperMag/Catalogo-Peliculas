const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { X, Star } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/ReviewModal.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const ReviewModal = ({ isOpen, onClose, mediaTitle, onSubmitReview }) => {
	const [rating, setRating] = useState(9);
	const [hoverRating, setHoverRating] = useState(null);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [authorName, setAuthorName] = useState("Martín C.");
	const [error, setError] = useState("");
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			setError("");
		}
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) {
			setError("Por favor escribe un título para tu crítica.");
			return;
		}
		if (!content.trim() || content.trim().length < 20) {
			setError("El cuerpo de la reseña debe contener al menos 20 caracteres.");
			return;
		}
		const review = {
			id: `rev-${Date.now()}`,
			author: authorName.trim() || "Espectador Verificado",
			role: "Crítico de la Comunidad",
			date: "Hoy, 2026",
			avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuALazc1xWSi_Jgzbt0mabWPjyDZIZbXT29MJvzsxmp9xpZe-gtlAffjiZ1WTULDSUuvB0iqlxbS14hEi9lJrXoOZ6GnxRja5MYAqd9CkRCxJ0R2D1erIwIM5czlJRS2wA1Y3U6aEHuxFyG_IR7Yv0WSG9DfKzwytgGKMCDG5FVaG5udJge1-MQQtLxQ0WzLmhTpV7dwHG86dXa_0tHShSfGSz-KVH4QHj1O-OdDDalIUahvXdCLLHHFqA",
			rating,
			title: title.trim(),
			content: content.trim(),
			helpfulCount: 1,
			verified: true
		};
		onSubmitReview(review);
		setTitle("");
		setContent("");
		onClose();
	};
	const currentScore = hoverRating !== null ? hoverRating : rating;
	return /* @__PURE__ */ _jsxDEV("div", {
		role: "dialog",
		"aria-modal": "true",
		className: "fixed inset-0 z-50 bg-[#0a0e13]/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn",
		onClick: onClose,
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-[#1c2025] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl p-6 flex flex-col gap-4 relative border border-[#31353b]/80",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-between pb-2 border-b border-[#31353b]/40",
				children: [/* @__PURE__ */ _jsxDEV("h3", {
					className: "font-['Space_Grotesk'] text-lg md:text-xl text-[#e0e2ea] font-bold",
					children: ["Tu reseña para ", mediaTitle]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					onClick: onClose,
					className: "p-1.5 rounded-full text-[#d1c5ac] hover:text-[#e0e2ea] hover:bg-[#262a30] transition-colors cursor-pointer",
					children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
						className: "text-xs text-[#d1c5ac] block mb-2 font-semibold",
						children: "Tu calificación (Escala 1 al 10)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-1.5 cursor-pointer flex-wrap",
						children: [[
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9,
							10
						].map((starVal) => {
							const isActive = starVal <= currentScore;
							return /* @__PURE__ */ _jsxDEV("button", {
								type: "button",
								onClick: () => setRating(starVal),
								onMouseEnter: () => setHoverRating(starVal),
								onMouseLeave: () => setHoverRating(null),
								className: "p-0.5 hover:scale-125 transition-transform cursor-pointer",
								"aria-label": `Calificar con ${starVal} estrellas`,
								children: /* @__PURE__ */ _jsxDEV(Star, { className: `w-6 h-6 transition-colors ${isActive ? "fill-[#f5c518] text-[#f5c518]" : "text-[#31353b] hover:text-[#f5c518]"}` }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 21
								}, this)
							}, starVal, false, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 19
							}, this);
						}), /* @__PURE__ */ _jsxDEV("span", {
							className: "font-['Space_Grotesk'] text-base md:text-lg text-[#e0e2ea] font-bold ml-2 tabular-nums",
							children: [currentScore, "/10"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
						className: "text-xs text-[#d1c5ac] block mb-1 font-semibold",
						children: "Tu nombre o alias"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 131,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("input", {
						type: "text",
						value: authorName,
						onChange: (e) => setAuthorName(e.target.value),
						placeholder: "Ej: Martín C.",
						className: "w-full bg-[#181c21] border border-[#31353b]/50 px-3.5 py-2 rounded-lg text-[#e0e2ea] text-sm focus:outline-none focus:border-[#f5c518] transition-colors"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
						className: "text-xs text-[#d1c5ac] block mb-1 font-semibold",
						children: "Título de la crítica"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("input", {
						type: "text",
						value: title,
						onChange: (e) => setTitle(e.target.value),
						placeholder: "Resume tu opinión en una frase memorable...",
						className: "w-full bg-[#181c21] border border-[#31353b]/50 px-3.5 py-2 rounded-lg text-[#e0e2ea] text-sm focus:outline-none focus:border-[#f5c518] transition-colors"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 146,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 142,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
						className: "text-xs text-[#d1c5ac] block mb-1 font-semibold",
						children: "Cuerpo de la reseña"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("textarea", {
						rows: 4,
						value: content,
						onChange: (e) => setContent(e.target.value),
						placeholder: "¿Qué te parecieron las actuaciones, la dirección y el desenlace? Recuerda no incluir spoilers sin avisar...",
						className: "w-full bg-[#181c21] border border-[#31353b]/50 px-3.5 py-2 rounded-lg text-[#e0e2ea] text-sm focus:outline-none focus:border-[#f5c518] transition-colors resize-none leading-relaxed"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 11
					}, this),
					error && /* @__PURE__ */ _jsxDEV("p", {
						className: "text-xs text-[#ffb4ab] font-medium",
						children: error
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 169,
						columnNumber: 21
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-end gap-3 pt-2",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							type: "button",
							onClick: onClose,
							className: "px-4 py-2 rounded-lg bg-[#262a30] text-[#e0e2ea] text-xs font-bold hover:bg-[#31353b] transition-colors cursor-pointer",
							children: "Cancelar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 173,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							type: "submit",
							className: "px-5 py-2 rounded-lg bg-[#f5c518] text-[#0a0e13] text-xs font-bold hover:bg-[#f0c110] transition-colors shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]",
							children: "Publicar Reseña"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 180,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 172,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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Ozs7Y0FDSDs7Ozs7YUFDRjs7Ozs7S0FHTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsU0FBRDtNQUFPLFdBQVU7Z0JBQWtEO0tBQXdCOzs7O2VBQzNGLHdCQUFDLFNBQUQ7TUFDRSxNQUFLO01BQ0wsT0FBTztNQUNQLFdBQVcsTUFBTSxjQUFjLEVBQUUsT0FBTyxLQUFLO01BQzdDLGFBQVk7TUFDWixXQUFVO0tBQ1g7Ozs7YUFDRTs7Ozs7S0FHTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsU0FBRDtNQUFPLFdBQVU7Z0JBQWtEO0tBRTVEOzs7O2VBQ1Asd0JBQUMsU0FBRDtNQUNFLE1BQUs7TUFDTCxPQUFPO01BQ1AsV0FBVyxNQUFNLFNBQVMsRUFBRSxPQUFPLEtBQUs7TUFDeEMsYUFBWTtNQUNaLFdBQVU7S0FDWDs7OzthQUNFOzs7OztLQUdMLHdCQUFDLE9BQUQsYUFDRSx3QkFBQyxTQUFEO01BQU8sV0FBVTtnQkFBa0Q7S0FFNUQ7Ozs7ZUFDUCx3QkFBQyxZQUFEO01BQ0UsTUFBTTtNQUNOLE9BQU87TUFDUCxXQUFXLE1BQU0sV0FBVyxFQUFFLE9BQU8sS0FBSztNQUMxQyxhQUFZO01BQ1osV0FBVTtLQUNYOzs7O2FBQ0U7Ozs7O0tBRUosU0FBUyx3QkFBQyxLQUFEO01BQUcsV0FBVTtnQkFBc0M7S0FBUzs7Ozs7S0FHdEUsd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQWYsQ0FDRSx3QkFBQyxVQUFEO09BQ0UsTUFBSztPQUNMLFNBQVM7T0FDVCxXQUFVO2lCQUNYO01BRU87Ozs7Z0JBQ1Isd0JBQUMsVUFBRDtPQUNFLE1BQUs7T0FDTCxXQUFVO2lCQUNYO01BRU87Ozs7Y0FDTDs7Ozs7O0lBQ0Q7Ozs7O1dBQ0g7Ozs7OztDQUNGOzs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIlJldmlld01vZGFsLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFgsIFN0YXIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUmV2aWV3TW9kYWxQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgbWVkaWFUaXRsZTogc3RyaW5nO1xuICBvblN1Ym1pdFJldmlldzogKG5ld1JldmlldzogUmV2aWV3KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUmV2aWV3TW9kYWw6IFJlYWN0LkZDPFJldmlld01vZGFsUHJvcHM+ID0gKHtcbiAgaXNPcGVuLFxuICBvbkNsb3NlLFxuICBtZWRpYVRpdGxlLFxuICBvblN1Ym1pdFJldmlldyxcbn0pID0+IHtcbiAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IHVzZVN0YXRlKDkpO1xuICBjb25zdCBbaG92ZXJSYXRpbmcsIHNldEhvdmVyUmF0aW5nXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXV0aG9yTmFtZSwgc2V0QXV0aG9yTmFtZV0gPSB1c2VTdGF0ZSgnTWFydMOtbiBDLicpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgb25DbG9zZSgpO1xuICAgIH07XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgc2V0RXJyb3IoJycpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICB9LCBbaXNPcGVuLCBvbkNsb3NlXSk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aXRsZS50cmltKCkpIHtcbiAgICAgIHNldEVycm9yKCdQb3IgZmF2b3IgZXNjcmliZSB1biB0w610dWxvIHBhcmEgdHUgY3LDrXRpY2EuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY29udGVudC50cmltKCkgfHwgY29udGVudC50cmltKCkubGVuZ3RoIDwgMjApIHtcbiAgICAgIHNldEVycm9yKCdFbCBjdWVycG8gZGUgbGEgcmVzZcOxYSBkZWJlIGNvbnRlbmVyIGFsIG1lbm9zIDIwIGNhcmFjdGVyZXMuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmV2aWV3OiBSZXZpZXcgPSB7XG4gICAgICBpZDogYHJldi0ke0RhdGUubm93KCl9YCxcbiAgICAgIGF1dGhvcjogYXV0aG9yTmFtZS50cmltKCkgfHwgJ0VzcGVjdGFkb3IgVmVyaWZpY2FkbycsXG4gICAgICByb2xlOiAnQ3LDrXRpY28gZGUgbGEgQ29tdW5pZGFkJyxcbiAgICAgIGRhdGU6ICdIb3ksIDIwMjYnLFxuICAgICAgYXZhdGFyOlxuICAgICAgICAnaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2FpZGEtcHVibGljL0FCNkFYdUFMYXpjMXhXU2lfSmd6YnQwbWFiV1BqeURaSVpiWFQyOU1KdnpzeG1wOXhwWmUtZ3RsQWZmamlaMVdUVUxEU1V1dkIwaXFseGJTMTRoRWk5bEpyWG9PWjZHbnhSamE1TVlBcWQ5Q2tSQ3hKMFIyRDFlckl3SU01Y3psSlJTMndBMVkzVTZhRUh1eEZ5R19JUjdZdjBXU0c5RGZLend5dGdHS01DREc1RlZhRzV1ZEpnZTEtTVFRdEx4UTBXekxtaFRwVjdkd0hHODZkWGFfMHRIU2hTZkdTei1LVkg0UUhqMU8tT2RERGFsSVVhaHZYZENMTEhIRnFBJyxcbiAgICAgIHJhdGluZyxcbiAgICAgIHRpdGxlOiB0aXRsZS50cmltKCksXG4gICAgICBjb250ZW50OiBjb250ZW50LnRyaW0oKSxcbiAgICAgIGhlbHBmdWxDb3VudDogMSxcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgIH07XG5cbiAgICBvblN1Ym1pdFJldmlldyhyZXZpZXcpO1xuICAgIHNldFRpdGxlKCcnKTtcbiAgICBzZXRDb250ZW50KCcnKTtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudFNjb3JlID0gaG92ZXJSYXRpbmcgIT09IG51bGwgPyBob3ZlclJhdGluZyA6IHJhdGluZztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGJnLVsjMGEwZTEzXS85MCBiYWNrZHJvcC1ibHVyLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBhbmltYXRlLWZhZGVJblwiXG4gICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxYzIwMjVdIHJvdW5kZWQtMnhsIG1heC13LXhsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCBwLTYgZmxleCBmbGV4LWNvbCBnYXAtNCByZWxhdGl2ZSBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS84MFwiXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0yIGJvcmRlci1iIGJvcmRlci1bIzMxMzUzYl0vNDBcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LWxnIG1kOnRleHQteGwgdGV4dC1bI2UwZTJlYV0gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICBUdSByZXNlw7FhIHBhcmEge21lZGlhVGl0bGV9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgcm91bmRlZC1mdWxsIHRleHQtWyNkMWM1YWNdIGhvdmVyOnRleHQtWyNlMGUyZWFdIGhvdmVyOmJnLVsjMjYyYTMwXSB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIHsvKiBSYXRpbmcgU2VsZWN0aW9uOiAxMCBTdGFycyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gYmxvY2sgbWItMiBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgIFR1IGNhbGlmaWNhY2nDs24gKEVzY2FsYSAxIGFsIDEwKVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBjdXJzb3ItcG9pbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0ubWFwKChzdGFyVmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBzdGFyVmFsIDw9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e3N0YXJWYWx9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSYXRpbmcoc3RhclZhbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJSYXRpbmcoc3RhclZhbCl9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJSYXRpbmcobnVsbCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMC41IGhvdmVyOnNjYWxlLTEyNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BDYWxpZmljYXIgY29uICR7c3RhclZhbH0gZXN0cmVsbGFzYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTYgaC02IHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdmaWxsLVsjZjVjNTE4XSB0ZXh0LVsjZjVjNTE4XSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1bIzMxMzUzYl0gaG92ZXI6dGV4dC1bI2Y1YzUxOF0nXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyB0ZXh0LVsjZTBlMmVhXSBmb250LWJvbGQgbWwtMiB0YWJ1bGFyLW51bXNcIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVudFNjb3JlfS8xMFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBBdXRob3IgTmFtZSAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gYmxvY2sgbWItMSBmb250LXNlbWlib2xkXCI+VHUgbm9tYnJlIG8gYWxpYXM8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2F1dGhvck5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0aG9yTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRWo6IE1hcnTDrW4gQy5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMxODFjMjFdIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzUwIHB4LTMuNSBweS0yIHJvdW5kZWQtbGcgdGV4dC1bI2UwZTJlYV0gdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLVsjZjVjNTE4XSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFJldmlldyBUaXRsZSAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gYmxvY2sgbWItMSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgIFTDrXR1bG8gZGUgbGEgY3LDrXRpY2FcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlc3VtZSB0dSBvcGluacOzbiBlbiB1bmEgZnJhc2UgbWVtb3JhYmxlLi4uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjMTgxYzIxXSBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS81MCBweC0zLjUgcHktMiByb3VuZGVkLWxnIHRleHQtWyNlMGUyZWFdIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI2Y1YzUxOF0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSZXZpZXcgQm9keSAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gYmxvY2sgbWItMSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgIEN1ZXJwbyBkZSBsYSByZXNlw7FhXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIsK/UXXDqSB0ZSBwYXJlY2llcm9uIGxhcyBhY3R1YWNpb25lcywgbGEgZGlyZWNjacOzbiB5IGVsIGRlc2VubGFjZT8gUmVjdWVyZGEgbm8gaW5jbHVpciBzcG9pbGVycyBzaW4gYXZpc2FyLi4uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjMTgxYzIxXSBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS81MCBweC0zLjUgcHktMiByb3VuZGVkLWxnIHRleHQtWyNlMGUyZWFdIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bI2Y1YzUxOF0gdHJhbnNpdGlvbi1jb2xvcnMgcmVzaXplLW5vbmUgbGVhZGluZy1yZWxheGVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjZmZiNGFiXSBmb250LW1lZGl1bVwiPntlcnJvcn08L3A+fVxuXG4gICAgICAgICAgey8qIE1vZGFsIEFjdGlvbnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBnYXAtMyBwdC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZC1sZyBiZy1bIzI2MmEzMF0gdGV4dC1bI2UwZTJlYV0gdGV4dC14cyBmb250LWJvbGQgaG92ZXI6YmctWyMzMTM1M2JdIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsYXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIHJvdW5kZWQtbGcgYmctWyNmNWM1MThdIHRleHQtWyMwYTBlMTNdIHRleHQteHMgZm9udC1ib2xkIGhvdmVyOmJnLVsjZjBjMTEwXSB0cmFuc2l0aW9uLWNvbG9ycyBzaGFkb3ctc20gY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtWzEuMDJdIGFjdGl2ZTpzY2FsZS1bMC45OF1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQdWJsaWNhciBSZXNlw7FhXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19