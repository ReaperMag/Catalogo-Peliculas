const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { Edit3, Star, CheckCircle, ThumbsUp, Flag } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
var _jsxFileName = "/app/applet/src/components/ReviewsSection.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export const ReviewsSection = ({ reviews, onOpenReviewModal, onVoteHelpful, votedReviews }) => {
	const [activeFilter, setActiveFilter] = useState("utiles");
	const [flaggedReviews, setFlaggedReviews] = useState(new Set());
	const handleToggleFlag = (id) => {
		setFlaggedReviews((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				next.add(id);
			}
			return next;
		});
	};
	// Sort reviews based on activeFilter
	const sortedReviews = [...reviews].sort((a, b) => {
		if (activeFilter === "valoradas") {
			return b.rating - a.rating;
		}
		if (activeFilter === "utiles") {
			return b.helpfulCount - a.helpfulCount;
		}
		// destacadas: verified first or top ratings
		return b.rating * b.helpfulCount - a.rating * a.helpfulCount;
	});
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "bg-[#1c2025] rounded-xl p-6 shadow-md border border-[#31353b]/40 flex flex-col gap-6",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
					className: "font-['Space_Grotesk'] text-2xl text-[#e0e2ea] font-bold tracking-tight flex items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-1.5 h-6 rounded-full bg-[#f5c518] inline-block" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 13
					}, this), "Críticas de la Comunidad"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs text-[#d1c5ac] mt-1",
					children: "Más de 3,400 opiniones de usuarios y críticos verificados"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					onClick: onOpenReviewModal,
					className: "flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#f5c518] hover:bg-[#f0c110] text-[#0a0e13] text-xs md:text-sm font-bold cursor-pointer transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] self-start sm:self-auto",
					children: [/* @__PURE__ */ _jsxDEV(Edit3, { className: "w-4 h-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Escribir una reseña" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "bg-[#181c21] p-5 rounded-xl border border-[#31353b]/30 grid grid-cols-1 md:grid-cols-12 gap-6 items-center",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "md:col-span-4 flex flex-col items-center justify-center text-center p-2",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "font-['Space_Grotesk'] text-5xl md:text-6xl text-[#e0e2ea] font-bold leading-none tabular-nums",
							children: "8.6"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-1 my-2 text-[#f5c518]",
							children: [
								/* @__PURE__ */ _jsxDEV(Star, { className: "w-5 h-5 fill-current" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV(Star, { className: "w-5 h-5 fill-current" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV(Star, { className: "w-5 h-5 fill-current" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV(Star, { className: "w-5 h-5 fill-current" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "relative",
									children: [/* @__PURE__ */ _jsxDEV(Star, { className: "w-5 h-5 fill-current opacity-40" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 82,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "absolute inset-0 overflow-hidden w-[60%]",
										children: /* @__PURE__ */ _jsxDEV(Star, { className: "w-5 h-5 fill-[#f5c518] text-[#f5c518]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 84,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 83,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-[#d1c5ac]",
							children: "Basado en 532,490 valoraciones"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-xs text-[#f5c518] mt-1.5 font-bold",
							children: "96% Recomendada"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "md:col-span-8 space-y-2",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2.5 text-xs text-[#d1c5ac]",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-12 text-right font-medium",
									children: "10 ⭐"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex-1 bg-[#262a30] h-2.5 rounded-full overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-[#f5c518] h-full rounded-full transition-all duration-500",
										style: { width: "58%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 99,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-10 text-[#e0e2ea] font-mono text-right tabular-nums",
									children: "58%"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 104,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 96,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2.5 text-xs text-[#d1c5ac]",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-12 text-right font-medium",
									children: "8-9 ⭐"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex-1 bg-[#262a30] h-2.5 rounded-full overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-[#f5c518]/80 h-full rounded-full transition-all duration-500",
										style: { width: "29%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 111,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 110,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-10 text-[#e0e2ea] font-mono text-right tabular-nums",
									children: "29%"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2.5 text-xs text-[#d1c5ac]",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-12 text-right font-medium",
									children: "6-7 ⭐"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex-1 bg-[#262a30] h-2.5 rounded-full overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-[#f5c518]/60 h-full rounded-full transition-all duration-500",
										style: { width: "9%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-10 text-[#e0e2ea] font-mono text-right tabular-nums",
									children: "9%"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2.5 text-xs text-[#d1c5ac]",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-12 text-right font-medium",
									children: "4-5 ⭐"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex-1 bg-[#262a30] h-2.5 rounded-full overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-[#f5c518]/30 h-full rounded-full transition-all duration-500",
										style: { width: "3%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 135,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-10 text-[#e0e2ea] font-mono text-right tabular-nums",
									children: "3%"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2.5 text-xs text-[#d1c5ac]",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-12 text-right font-medium",
									children: "1-3 ⭐"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 145,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex-1 bg-[#262a30] h-2.5 rounded-full overflow-hidden",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-[#31353b] h-full rounded-full transition-all duration-500",
										style: { width: "1%" }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 146,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "w-10 text-[#e0e2ea] font-mono text-right tabular-nums",
									children: "1%"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 144,
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
				lineNumber: 69,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-wrap items-center justify-between gap-3 pb-1",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-[11px] text-[#d1c5ac] uppercase tracking-wider font-semibold mr-1",
							children: "FILTRAR:"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveFilter("utiles"),
							className: `px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeFilter === "utiles" ? "bg-[#f5c518] text-[#0a0e13] font-bold shadow-sm" : "bg-[#181c21] hover:bg-[#262a30] text-[#e0e2ea] border border-[#31353b]/40"}`,
							children: "Más útiles"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveFilter("valoradas"),
							className: `px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeFilter === "valoradas" ? "bg-[#f5c518] text-[#0a0e13] font-bold shadow-sm" : "bg-[#181c21] hover:bg-[#262a30] text-[#e0e2ea] border border-[#31353b]/40"}`,
							children: "Mejor valoradas"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 173,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveFilter("destacadas"),
							className: `px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${activeFilter === "destacadas" ? "bg-[#f5c518] text-[#0a0e13] font-bold shadow-sm" : "bg-[#181c21] hover:bg-[#262a30] text-[#e0e2ea] border border-[#31353b]/40"}`,
							children: "Críticas destacadas"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 183,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					className: "text-xs text-[#d1c5ac]",
					children: [
						"Mostrando ",
						sortedReviews.length,
						" de 3,428 reseñas"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 195,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 158,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "space-y-4",
				children: sortedReviews.map((rev) => {
					const isVoted = votedReviews.has(rev.id);
					const isFlagged = flaggedReviews.has(rev.id);
					return /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-[#181c21] p-5 rounded-xl space-y-3.5 border border-[#31353b]/30",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-sm border border-[#31353b]",
										children: /* @__PURE__ */ _jsxDEV("img", {
											src: rev.avatar,
											alt: rev.author,
											className: "w-full h-full object-cover",
											referrerPolicy: "no-referrer"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 215,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 214,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-sm text-[#e0e2ea] font-bold",
											children: rev.author
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 224,
											columnNumber: 23
										}, this), rev.verified && /* @__PURE__ */ _jsxDEV("span", {
											className: "flex items-center gap-0.5 text-[10px] text-[#f5c518] bg-[#f5c518]/15 px-1.5 py-0.5 rounded font-bold border border-[#f5c518]/20",
											children: [/* @__PURE__ */ _jsxDEV(CheckCircle, { className: "w-3 h-3 text-[#f5c518]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 227,
												columnNumber: 27
											}, this), "Verificado"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 226,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 223,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-xs text-[#d1c5ac]",
										children: [
											rev.role,
											" • ",
											rev.date
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 232,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 222,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 213,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-1 bg-[#1c2025] px-2.5 py-1 rounded-lg border border-[#31353b]/50",
									children: [
										/* @__PURE__ */ _jsxDEV(Star, { className: "w-4 h-4 fill-[#f5c518] text-[#f5c518]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 240,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-sm font-bold text-[#e0e2ea] tabular-nums",
											children: rev.rating
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-xs text-[#d1c5ac]",
											children: "/10"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 244,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 239,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 212,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
								className: "font-['Space_Grotesk'] text-base md:text-lg text-[#e0e2ea] font-bold mb-1",
								children: rev.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs md:text-sm text-[#d1c5ac] leading-relaxed",
								children: rev.content
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 253,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 249,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between pt-2 border-t border-[#31353b]/20",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 text-[#d1c5ac] text-xs",
									children: [/* @__PURE__ */ _jsxDEV("button", {
										onClick: () => onVoteHelpful(rev.id),
										className: `flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer border ${isVoted ? "bg-[#f5c518]/20 border-[#f5c518] text-[#f5c518] font-bold" : "bg-[#1c2025] hover:bg-[#262a30] border-[#31353b]/40 text-[#e0e2ea]"}`,
										children: [/* @__PURE__ */ _jsxDEV(ThumbsUp, { className: `w-3.5 h-3.5 ${isVoted ? "fill-current" : ""}` }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 269,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: [
											"Útil (",
											rev.helpfulCount,
											")"
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 270,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 261,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										onClick: () => handleToggleFlag(rev.id),
										className: `p-1.5 rounded hover:bg-[#1c2025] transition-colors cursor-pointer ${isFlagged ? "text-[#ffb4ab]" : "text-[#d1c5ac]"}`,
										title: isFlagged ? "Reportada" : "Marcar como inapropiado",
										children: /* @__PURE__ */ _jsxDEV(Flag, { className: `w-3.5 h-3.5 ${isFlagged ? "fill-current" : ""}` }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 280,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 273,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[11px] text-[#d1c5ac]/80 font-medium",
									children: [rev.helpfulCount.toLocaleString(), " personas encontraron esto útil"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 284,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 259,
								columnNumber: 15
							}, this)
						]
					}, rev.id, true, {
						fileName: _jsxFileName,
						lineNumber: 207,
						columnNumber: 13
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 201,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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bUJBQWhCLENBQ0csSUFBSSxhQUFhLGVBQWUsR0FBRSxpQ0FDL0I7Ozs7O2dCQUNIOzs7Ozs7TUFDRjtRQWhGRSxJQUFJOzs7O1lBZ0ZOO0lBRVQsQ0FBQztHQUNFOzs7OztFQUNFOzs7Ozs7QUFFYiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJSZXZpZXdzU2VjdGlvbi50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRWRpdDMsIFN0YXIsIENoZWNrQ2lyY2xlLCBUaHVtYnNVcCwgRmxhZyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBSZXZpZXdzU2VjdGlvblByb3BzIHtcbiAgcmV2aWV3czogUmV2aWV3W107XG4gIG9uT3BlblJldmlld01vZGFsOiAoKSA9PiB2b2lkO1xuICBvblZvdGVIZWxwZnVsOiAocmV2aWV3SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgdm90ZWRSZXZpZXdzOiBTZXQ8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNvbnN0IFJldmlld3NTZWN0aW9uOiBSZWFjdC5GQzxSZXZpZXdzU2VjdGlvblByb3BzPiA9ICh7XG4gIHJldmlld3MsXG4gIG9uT3BlblJldmlld01vZGFsLFxuICBvblZvdGVIZWxwZnVsLFxuICB2b3RlZFJldmlld3MsXG59KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTwndXRpbGVzJyB8ICd2YWxvcmFkYXMnIHwgJ2Rlc3RhY2FkYXMnPigndXRpbGVzJyk7XG4gIGNvbnN0IFtmbGFnZ2VkUmV2aWV3cywgc2V0RmxhZ2dlZFJldmlld3NdID0gdXNlU3RhdGU8U2V0PHN0cmluZz4+KG5ldyBTZXQoKSk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlRmxhZyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0RmxhZ2dlZFJldmlld3MoKHByZXYpID0+IHtcbiAgICAgIGNvbnN0IG5leHQgPSBuZXcgU2V0KHByZXYpO1xuICAgICAgaWYgKG5leHQuaGFzKGlkKSkge1xuICAgICAgICBuZXh0LmRlbGV0ZShpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0LmFkZChpZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBTb3J0IHJldmlld3MgYmFzZWQgb24gYWN0aXZlRmlsdGVyXG4gIGNvbnN0IHNvcnRlZFJldmlld3MgPSBbLi4ucmV2aWV3c10uc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhY3RpdmVGaWx0ZXIgPT09ICd2YWxvcmFkYXMnKSB7XG4gICAgICByZXR1cm4gYi5yYXRpbmcgLSBhLnJhdGluZztcbiAgICB9XG4gICAgaWYgKGFjdGl2ZUZpbHRlciA9PT0gJ3V0aWxlcycpIHtcbiAgICAgIHJldHVybiBiLmhlbHBmdWxDb3VudCAtIGEuaGVscGZ1bENvdW50O1xuICAgIH1cbiAgICAvLyBkZXN0YWNhZGFzOiB2ZXJpZmllZCBmaXJzdCBvciB0b3AgcmF0aW5nc1xuICAgIHJldHVybiBiLnJhdGluZyAqIGIuaGVscGZ1bENvdW50IC0gYS5yYXRpbmcgKiBhLmhlbHBmdWxDb3VudDtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1bIzFjMjAyNV0gcm91bmRlZC14bCBwLTYgc2hhZG93LW1kIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzQwIGZsZXggZmxleC1jb2wgZ2FwLTZcIj5cbiAgICAgIHsvKiBIZWFkZXIgJiBXcml0ZSBSZXZpZXcgQnV0dG9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LTJ4bCB0ZXh0LVsjZTBlMmVhXSBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMS41IGgtNiByb3VuZGVkLWZ1bGwgYmctWyNmNWM1MThdIGlubGluZS1ibG9ja1wiIC8+XG4gICAgICAgICAgICBDcsOtdGljYXMgZGUgbGEgQ29tdW5pZGFkXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdIG10LTFcIj5cbiAgICAgICAgICAgIE3DoXMgZGUgMyw0MDAgb3BpbmlvbmVzIGRlIHVzdWFyaW9zIHkgY3LDrXRpY29zIHZlcmlmaWNhZG9zXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17b25PcGVuUmV2aWV3TW9kYWx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNCBweS0yLjUgcm91bmRlZC1sZyBiZy1bI2Y1YzUxOF0gaG92ZXI6YmctWyNmMGMxMTBdIHRleHQtWyMwYTBlMTNdIHRleHQteHMgbWQ6dGV4dC1zbSBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgc2hhZG93LXNtIGhvdmVyOnNjYWxlLVsxLjAyXSBhY3RpdmU6c2NhbGUtWzAuOThdIHNlbGYtc3RhcnQgc206c2VsZi1hdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxFZGl0MyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICA8c3Bhbj5Fc2NyaWJpciB1bmEgcmVzZcOxYTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEJyZWFrZG93biBTdW1tYXJ5IEdyaWQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMTgxYzIxXSBwLTUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjMzEzNTNiXS8zMCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0xMiBnYXAtNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgey8qIExlZnQ6IEFnZ3JlZ2F0ZSBCaWcgU2NvcmUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBwLTJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LVsnU3BhY2VfR3JvdGVzayddIHRleHQtNXhsIG1kOnRleHQtNnhsIHRleHQtWyNlMGUyZWFdIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICA4LjZcbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG15LTIgdGV4dC1bI2Y1YzUxOF1cIj5cbiAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNSBoLTUgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNSBoLTUgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNSBoLTUgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNSBoLTUgZmlsbC1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwidy01IGgtNSBmaWxsLWN1cnJlbnQgb3BhY2l0eS00MFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvdmVyZmxvdy1oaWRkZW4gdy1bNjAlXVwiPlxuICAgICAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNSBoLTUgZmlsbC1bI2Y1YzUxOF0gdGV4dC1bI2Y1YzUxOF1cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjZDFjNWFjXVwiPkJhc2FkbyBlbiA1MzIsNDkwIHZhbG9yYWNpb25lczwvcD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNmNWM1MThdIG10LTEuNSBmb250LWJvbGRcIj45NiUgUmVjb21lbmRhZGE8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSaWdodDogRGlzdHJpYnV0aW9uIFByb2dyZXNzIEJhcnMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tOCBzcGFjZS15LTJcIj5cbiAgICAgICAgICB7LyogMTAgU3RhcnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IHRleHQteHMgdGV4dC1bI2QxYzVhY11cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMTIgdGV4dC1yaWdodCBmb250LW1lZGl1bVwiPjEwIOKtkDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLVsjMjYyYTMwXSBoLTIuNSByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI2Y1YzUxOF0gaC1mdWxsIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNTglJyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEwIHRleHQtWyNlMGUyZWFdIGZvbnQtbW9ubyB0ZXh0LXJpZ2h0IHRhYnVsYXItbnVtc1wiPjU4JTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiA4LTkgU3RhcnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IHRleHQteHMgdGV4dC1bI2QxYzVhY11cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMTIgdGV4dC1yaWdodCBmb250LW1lZGl1bVwiPjgtOSDirZA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBiZy1bIzI2MmEzMF0gaC0yLjUgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNmNWM1MThdLzgwIGgtZnVsbCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI5JScgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xMCB0ZXh0LVsjZTBlMmVhXSBmb250LW1vbm8gdGV4dC1yaWdodCB0YWJ1bGFyLW51bXNcIj4yOSU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogNi03IFN0YXJzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSB0ZXh0LXhzIHRleHQtWyNkMWM1YWNdXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEyIHRleHQtcmlnaHQgZm9udC1tZWRpdW1cIj42LTcg4q2QPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgYmctWyMyNjJhMzBdIGgtMi41IHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjZjVjNTE4XS82MCBoLWZ1bGwgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc5JScgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xMCB0ZXh0LVsjZTBlMmVhXSBmb250LW1vbm8gdGV4dC1yaWdodCB0YWJ1bGFyLW51bXNcIj45JTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiA0LTUgU3RhcnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IHRleHQteHMgdGV4dC1bI2QxYzVhY11cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMTIgdGV4dC1yaWdodCBmb250LW1lZGl1bVwiPjQtNSDirZA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBiZy1bIzI2MmEzMF0gaC0yLjUgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNmNWM1MThdLzMwIGgtZnVsbCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMlJyB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEwIHRleHQtWyNlMGUyZWFdIGZvbnQtbW9ubyB0ZXh0LXJpZ2h0IHRhYnVsYXItbnVtc1wiPjMlPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIDEtMyBTdGFycyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjUgdGV4dC14cyB0ZXh0LVsjZDFjNWFjXVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xMiB0ZXh0LXJpZ2h0IGZvbnQtbWVkaXVtXCI+MS0zIOKtkDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLVsjMjYyYTMwXSBoLTIuNSByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzMxMzUzYl0gaC1mdWxsIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMSUnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMTAgdGV4dC1bI2UwZTJlYV0gZm9udC1tb25vIHRleHQtcmlnaHQgdGFidWxhci1udW1zXCI+MSU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSZXZpZXcgRmlsdGVycyBCYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgcGItMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bI2QxYzVhY10gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGZvbnQtc2VtaWJvbGQgbXItMVwiPlxuICAgICAgICAgICAgRklMVFJBUjpcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlRmlsdGVyKCd1dGlsZXMnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGFjdGl2ZUZpbHRlciA9PT0gJ3V0aWxlcydcbiAgICAgICAgICAgICAgICA/ICdiZy1bI2Y1YzUxOF0gdGV4dC1bIzBhMGUxM10gZm9udC1ib2xkIHNoYWRvdy1zbSdcbiAgICAgICAgICAgICAgICA6ICdiZy1bIzE4MWMyMV0gaG92ZXI6YmctWyMyNjJhMzBdIHRleHQtWyNlMGUyZWFdIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzQwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTcOhcyDDunRpbGVzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlRmlsdGVyKCd2YWxvcmFkYXMnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGFjdGl2ZUZpbHRlciA9PT0gJ3ZhbG9yYWRhcydcbiAgICAgICAgICAgICAgICA/ICdiZy1bI2Y1YzUxOF0gdGV4dC1bIzBhMGUxM10gZm9udC1ib2xkIHNoYWRvdy1zbSdcbiAgICAgICAgICAgICAgICA6ICdiZy1bIzE4MWMyMV0gaG92ZXI6YmctWyMyNjJhMzBdIHRleHQtWyNlMGUyZWFdIGJvcmRlciBib3JkZXItWyMzMTM1M2JdLzQwJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWVqb3IgdmFsb3JhZGFzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlRmlsdGVyKCdkZXN0YWNhZGFzJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBhY3RpdmVGaWx0ZXIgPT09ICdkZXN0YWNhZGFzJ1xuICAgICAgICAgICAgICAgID8gJ2JnLVsjZjVjNTE4XSB0ZXh0LVsjMGEwZTEzXSBmb250LWJvbGQgc2hhZG93LXNtJ1xuICAgICAgICAgICAgICAgIDogJ2JnLVsjMTgxYzIxXSBob3ZlcjpiZy1bIzI2MmEzMF0gdGV4dC1bI2UwZTJlYV0gYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDcsOtdGljYXMgZGVzdGFjYWRhc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdXCI+XG4gICAgICAgICAgTW9zdHJhbmRvIHtzb3J0ZWRSZXZpZXdzLmxlbmd0aH0gZGUgMyw0MjggcmVzZcOxYXNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSZXZpZXcgQ2FyZHMgTGlzdCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgIHtzb3J0ZWRSZXZpZXdzLm1hcCgocmV2KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNWb3RlZCA9IHZvdGVkUmV2aWV3cy5oYXMocmV2LmlkKTtcbiAgICAgICAgICBjb25zdCBpc0ZsYWdnZWQgPSBmbGFnZ2VkUmV2aWV3cy5oYXMocmV2LmlkKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17cmV2LmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzE4MWMyMV0gcC01IHJvdW5kZWQteGwgc3BhY2UteS0zLjUgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vMzBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogUmV2aWV3ZXIgSGVhZGVyICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiBzaHJpbmstMCBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1bIzMxMzUzYl1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmV2LmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Jldi5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LVsjZTBlMmVhXSBmb250LWJvbGRcIj57cmV2LmF1dGhvcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge3Jldi52ZXJpZmllZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMC41IHRleHQtWzEwcHhdIHRleHQtWyNmNWM1MThdIGJnLVsjZjVjNTE4XS8xNSBweC0xLjUgcHktMC41IHJvdW5kZWQgZm9udC1ib2xkIGJvcmRlciBib3JkZXItWyNmNWM1MThdLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtWyNmNWM1MThdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyaWZpY2Fkb1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyNkMWM1YWNdXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Jldi5yb2xlfSDigKIge3Jldi5kYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBTY29yZSBQaWxsICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctWyMxYzIwMjVdIHB4LTIuNSBweS0xIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNTBcIj5cbiAgICAgICAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cInctNCBoLTQgZmlsbC1bI2Y1YzUxOF0gdGV4dC1bI2Y1YzUxOF1cIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1bI2UwZTJlYV0gdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZXYucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LVsjZDFjNWFjXVwiPi8xMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFRpdGxlICYgQm9keSAqL31cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1bJ1NwYWNlX0dyb3Rlc2snXSB0ZXh0LWJhc2UgbWQ6dGV4dC1sZyB0ZXh0LVsjZTBlMmVhXSBmb250LWJvbGQgbWItMVwiPlxuICAgICAgICAgICAgICAgICAge3Jldi50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LVsjZDFjNWFjXSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIHtyZXYuY29udGVudH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBBY3Rpb25zICYgSGVscGZ1bCBDb3VudCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHQtMiBib3JkZXItdCBib3JkZXItWyMzMTM1M2JdLzIwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LVsjZDFjNWFjXSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVm90ZUhlbHBmdWwocmV2LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0yLjUgcHktMSByb3VuZGVkIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyIGJvcmRlciAke1xuICAgICAgICAgICAgICAgICAgICAgIGlzVm90ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjZjVjNTE4XS8yMCBib3JkZXItWyNmNWM1MThdIHRleHQtWyNmNWM1MThdIGZvbnQtYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLVsjMWMyMDI1XSBob3ZlcjpiZy1bIzI2MmEzMF0gYm9yZGVyLVsjMzEzNTNiXS80MCB0ZXh0LVsjZTBlMmVhXSdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYnNVcCBjbGFzc05hbWU9e2B3LTMuNSBoLTMuNSAke2lzVm90ZWQgPyAnZmlsbC1jdXJyZW50JyA6ICcnfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPsOadGlsICh7cmV2LmhlbHBmdWxDb3VudH0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlRmxhZyhyZXYuaWQpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTEuNSByb3VuZGVkIGhvdmVyOmJnLVsjMWMyMDI1XSB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgIGlzRmxhZ2dlZCA/ICd0ZXh0LVsjZmZiNGFiXScgOiAndGV4dC1bI2QxYzVhY10nXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXNGbGFnZ2VkID8gJ1JlcG9ydGFkYScgOiAnTWFyY2FyIGNvbW8gaW5hcHJvcGlhZG8nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmxhZyBjbGFzc05hbWU9e2B3LTMuNSBoLTMuNSAke2lzRmxhZ2dlZCA/ICdmaWxsLWN1cnJlbnQnIDogJyd9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1bI2QxYzVhY10vODAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgIHtyZXYuaGVscGZ1bENvdW50LnRvTG9jYWxlU3RyaW5nKCl9IHBlcnNvbmFzIGVuY29udHJhcm9uIGVzdG8gw7p0aWxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19