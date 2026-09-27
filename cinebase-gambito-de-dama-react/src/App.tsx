const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport14_react_jsxDevRuntime["jsxDEV"];/**
* @license
* SPDX-License-Identifier: Apache-2.0
*/
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=99f49b87";
import { Header } from "/src/components/Header.tsx";
import { Hero } from "/src/components/Hero.tsx";
import { StreamingBar } from "/src/components/StreamingBar.tsx";
import { SynopsisCast } from "/src/components/SynopsisCast.tsx";
import { EpisodeGuide } from "/src/components/EpisodeGuide.tsx";
import { ReviewsSection } from "/src/components/ReviewsSection.tsx";
import { ProductionSidebar } from "/src/components/ProductionSidebar.tsx";
import { TrailerModal } from "/src/components/TrailerModal.tsx";
import { ReviewModal } from "/src/components/ReviewModal.tsx";
import { Footer } from "/src/components/Footer.tsx";
import { queensGambitData, oppenheimerData, initialReviews } from "/src/data/mediaData.ts";
import { Check, Info } from "/node_modules/.vite/deps/lucide-react.js?v=eba20b8d";
import { downloadProjectZip } from "/src/utils/exportProject.ts";
var _jsxFileName = "/app/applet/src/App.tsx";
import __vite__cjsImport14_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=99f49b87";
export default function App() {
	const [mediaMode, setMediaMode] = useState("series");
	const [isWatchlist, setIsWatchlist] = useState(false);
	const [isWatched, setIsWatched] = useState(false);
	const [reviews, setReviews] = useState(initialReviews);
	const [votedReviews, setVotedReviews] = useState(new Set());
	const [isTrailerOpen, setIsTrailerOpen] = useState(false);
	const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
	const [toastMessage, setToastMessage] = useState(null);
	const currentMedia = mediaMode === "series" ? queensGambitData : oppenheimerData;
	const showToast = (message) => {
		setToastMessage(message);
		setTimeout(() => {
			setToastMessage(null);
		}, 3200);
	};
	const handleToggleWatchlist = () => {
		const next = !isWatchlist;
		setIsWatchlist(next);
		showToast(next ? `"${currentMedia.title}" añadida a tu Watchlist.` : `"${currentMedia.title}" eliminada de tu Watchlist.`);
	};
	const handleToggleWatched = () => {
		const next = !isWatched;
		setIsWatched(next);
		showToast(next ? `"${currentMedia.title}" marcada como vista.` : `"${currentMedia.title}" desmarcada como vista.`);
	};
	const handleShare = () => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(window.location.href);
			showToast("¡Enlace de CineBase copiado al portapapeles!");
		} else {
			showToast("Enlace listo para compartir.");
		}
	};
	const handleAddReview = (newReview) => {
		setReviews([newReview, ...reviews]);
		showToast("¡Tu reseña ha sido publicada y añadida a la comunidad de CineBase!");
	};
	const handleVoteHelpful = (reviewId) => {
		if (votedReviews.has(reviewId)) {
			setReviews(reviews.map((r) => r.id === reviewId ? {
				...r,
				helpfulCount: r.helpfulCount - 1
			} : r));
			setVotedReviews((prev) => {
				const next = new Set(prev);
				next.delete(reviewId);
				return next;
			});
		} else {
			setReviews(reviews.map((r) => r.id === reviewId ? {
				...r,
				helpfulCount: r.helpfulCount + 1
			} : r));
			setVotedReviews((prev) => {
				const next = new Set(prev);
				next.add(reviewId);
				return next;
			});
			showToast("Voto registrado como útil.");
		}
	};
	const handlePlayEpisode = (episode) => {
		setIsTrailerOpen(true);
		showToast(`Cargando vista previa de Episodio ${episode.episodeNumber}: "${episode.title}"...`);
	};
	const handleSelectSimilarTitle = (similar) => {
		if (similar.id === "oppenheimer") {
			setMediaMode("movie");
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			showToast("Cargando ficha cinematográfica de Oppenheimer...");
		} else if (similar.id === "queens-gambit") {
			setMediaMode("series");
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			showToast("Cargando ficha cinematográfica de Gambito de Dama...");
		} else {
			showToast(`Explorando catálogo para "${similar.title}"...`);
		}
	};
	const handleDownloadZip = async () => {
		try {
			showToast("Empaquetando y descargando el código del proyecto (.ZIP)...");
			await downloadProjectZip();
			showToast("¡Descarga iniciada con éxito!");
		} catch {
			showToast("Error al generar el ZIP. Por favor intenta de nuevo.");
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "bg-[#0a0e13] font-['Inter'] text-[#e0e2ea] min-h-screen selection:bg-[#f5c518] selection:text-[#0a0e13]",
		children: [
			toastMessage && /* @__PURE__ */ _jsxDEV("div", {
				className: "fixed bottom-6 right-6 z-50 bg-[#1c2025] text-[#e0e2ea] border border-[#f5c518]/50 shadow-2xl rounded-xl px-4 py-3 flex items-center gap-3 animate-slideUp",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "w-6 h-6 rounded-full bg-[#f5c518] text-[#0a0e13] flex items-center justify-center font-bold",
					children: /* @__PURE__ */ _jsxDEV(Check, { className: "w-4 h-4 stroke-[3]" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					className: "text-xs md:text-sm font-medium",
					children: toastMessage
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 135,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 131,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV(Header, {
				watchlistCount: isWatchlist ? 1 : 0,
				onDownloadZip: handleDownloadZip
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 140,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				className: "w-full pt-16 bg-[#0a0e13]",
				children: [
					/* @__PURE__ */ _jsxDEV(Hero, {
						media: currentMedia,
						mediaMode,
						onSwitchMode: (mode) => setMediaMode(mode),
						onOpenTrailer: () => setIsTrailerOpen(true),
						isWatchlist,
						onToggleWatchlist: handleToggleWatchlist,
						isWatched,
						onToggleWatched: handleToggleWatched,
						onShare: handleShare
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(StreamingBar, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-12",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "lg:col-span-8 flex flex-col gap-8",
								children: [
									/* @__PURE__ */ _jsxDEV(SynopsisCast, {
										synopsis: currentMedia.synopsis,
										creators: currentMedia.creators,
										director: currentMedia.director,
										music: currentMedia.music,
										cast: currentMedia.cast
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 169,
										columnNumber: 15
									}, this),
									mediaMode === "series" && currentMedia.episodes && currentMedia.episodeRatings && /* @__PURE__ */ _jsxDEV(EpisodeGuide, {
										episodes: currentMedia.episodes,
										episodeRatings: currentMedia.episodeRatings,
										onPlayEpisode: handlePlayEpisode
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 179,
										columnNumber: 17
									}, this),
									mediaMode === "movie" && /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-[#1c2025] rounded-xl p-6 border border-[#31353b]/40 flex items-center gap-4",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "p-3 rounded-lg bg-[#262a30] text-[#f5c518]",
											children: /* @__PURE__ */ _jsxDEV(Info, { className: "w-6 h-6" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 190,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 189,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
											className: "text-base font-bold text-[#e0e2ea]",
											children: "Largometraje Cinematográfico"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 193,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-[#d1c5ac] mt-0.5",
											children: "Esta obra es una producción cinematográfica continua sin división por episodios. Duración total: 180 minutos en formato IMAX 70mm."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 196,
											columnNumber: 21
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 192,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 188,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV(ReviewsSection, {
										reviews,
										onOpenReviewModal: () => setIsReviewModalOpen(true),
										onVoteHelpful: handleVoteHelpful,
										votedReviews
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 205,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 167,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV(ProductionSidebar, {
								awards: currentMedia.awards,
								productionDetails: currentMedia.productionDetails,
								similarTitles: currentMedia.similarTitles,
								onSelectSimilarTitle: handleSelectSimilarTitle
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 214,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Footer, { onDownloadZip: handleDownloadZip }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 225,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(TrailerModal, {
				isOpen: isTrailerOpen,
				onClose: () => setIsTrailerOpen(false),
				title: currentMedia.title,
				thumbnail: currentMedia.trailerThumbnail
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(ReviewModal, {
				isOpen: isReviewModalOpen,
				onClose: () => setIsReviewModalOpen(false),
				mediaTitle: currentMedia.title,
				onSubmitReview: handleAddReview
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 236,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 128,
		columnNumber: 5
	}, this);
}

//# sourceMappingURL=data:application/json;base64,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IjpbIkFwcC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgeyBTdHJlYW1pbmdCYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU3RyZWFtaW5nQmFyJztcbmltcG9ydCB7IFN5bm9wc2lzQ2FzdCB9IGZyb20gJy4vY29tcG9uZW50cy9TeW5vcHNpc0Nhc3QnO1xuaW1wb3J0IHsgRXBpc29kZUd1aWRlIH0gZnJvbSAnLi9jb21wb25lbnRzL0VwaXNvZGVHdWlkZSc7XG5pbXBvcnQgeyBSZXZpZXdzU2VjdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9SZXZpZXdzU2VjdGlvbic7XG5pbXBvcnQgeyBQcm9kdWN0aW9uU2lkZWJhciB9IGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0aW9uU2lkZWJhcic7XG5pbXBvcnQgeyBUcmFpbGVyTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvVHJhaWxlck1vZGFsJztcbmltcG9ydCB7IFJldmlld01vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL1Jldmlld01vZGFsJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgcXVlZW5zR2FtYml0RGF0YSwgb3BwZW5oZWltZXJEYXRhLCBpbml0aWFsUmV2aWV3cyB9IGZyb20gJy4vZGF0YS9tZWRpYURhdGEnO1xuaW1wb3J0IHsgRXBpc29kZSwgUmV2aWV3LCBTaW1pbGFyVGl0bGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENoZWNrLCBJbmZvIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGRvd25sb2FkUHJvamVjdFppcCB9IGZyb20gJy4vdXRpbHMvZXhwb3J0UHJvamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW21lZGlhTW9kZSwgc2V0TWVkaWFNb2RlXSA9IHVzZVN0YXRlPCdzZXJpZXMnIHwgJ21vdmllJz4oJ3NlcmllcycpO1xuICBjb25zdCBbaXNXYXRjaGxpc3QsIHNldElzV2F0Y2hsaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzV2F0Y2hlZCwgc2V0SXNXYXRjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jldmlld3MsIHNldFJldmlld3NdID0gdXNlU3RhdGU8UmV2aWV3W10+KGluaXRpYWxSZXZpZXdzKTtcbiAgY29uc3QgW3ZvdGVkUmV2aWV3cywgc2V0Vm90ZWRSZXZpZXdzXSA9IHVzZVN0YXRlPFNldDxzdHJpbmc+PihuZXcgU2V0KCkpO1xuICBjb25zdCBbaXNUcmFpbGVyT3Blbiwgc2V0SXNUcmFpbGVyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1Jldmlld01vZGFsT3Blbiwgc2V0SXNSZXZpZXdNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG9hc3RNZXNzYWdlLCBzZXRUb2FzdE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgY3VycmVudE1lZGlhID0gbWVkaWFNb2RlID09PSAnc2VyaWVzJyA/IHF1ZWVuc0dhbWJpdERhdGEgOiBvcHBlbmhlaW1lckRhdGE7XG5cbiAgY29uc3Qgc2hvd1RvYXN0ID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIHNldFRvYXN0TWVzc2FnZShtZXNzYWdlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFRvYXN0TWVzc2FnZShudWxsKTtcbiAgICB9LCAzMjAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVXYXRjaGxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9ICFpc1dhdGNobGlzdDtcbiAgICBzZXRJc1dhdGNobGlzdChuZXh0KTtcbiAgICBzaG93VG9hc3QoXG4gICAgICBuZXh0XG4gICAgICAgID8gYFwiJHtjdXJyZW50TWVkaWEudGl0bGV9XCIgYcOxYWRpZGEgYSB0dSBXYXRjaGxpc3QuYFxuICAgICAgICA6IGBcIiR7Y3VycmVudE1lZGlhLnRpdGxlfVwiIGVsaW1pbmFkYSBkZSB0dSBXYXRjaGxpc3QuYFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlV2F0Y2hlZCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gIWlzV2F0Y2hlZDtcbiAgICBzZXRJc1dhdGNoZWQobmV4dCk7XG4gICAgc2hvd1RvYXN0KFxuICAgICAgbmV4dFxuICAgICAgICA/IGBcIiR7Y3VycmVudE1lZGlhLnRpdGxlfVwiIG1hcmNhZGEgY29tbyB2aXN0YS5gXG4gICAgICAgIDogYFwiJHtjdXJyZW50TWVkaWEudGl0bGV9XCIgZGVzbWFyY2FkYSBjb21vIHZpc3RhLmBcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNoYXJlID0gKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICBzaG93VG9hc3QoJ8KhRW5sYWNlIGRlIENpbmVCYXNlIGNvcGlhZG8gYWwgcG9ydGFwYXBlbGVzIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93VG9hc3QoJ0VubGFjZSBsaXN0byBwYXJhIGNvbXBhcnRpci4nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkUmV2aWV3ID0gKG5ld1JldmlldzogUmV2aWV3KSA9PiB7XG4gICAgc2V0UmV2aWV3cyhbbmV3UmV2aWV3LCAuLi5yZXZpZXdzXSk7XG4gICAgc2hvd1RvYXN0KCfCoVR1IHJlc2XDsWEgaGEgc2lkbyBwdWJsaWNhZGEgeSBhw7FhZGlkYSBhIGxhIGNvbXVuaWRhZCBkZSBDaW5lQmFzZSEnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVWb3RlSGVscGZ1bCA9IChyZXZpZXdJZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHZvdGVkUmV2aWV3cy5oYXMocmV2aWV3SWQpKSB7XG4gICAgICBzZXRSZXZpZXdzKFxuICAgICAgICByZXZpZXdzLm1hcCgocikgPT4gKHIuaWQgPT09IHJldmlld0lkID8geyAuLi5yLCBoZWxwZnVsQ291bnQ6IHIuaGVscGZ1bENvdW50IC0gMSB9IDogcikpXG4gICAgICApO1xuICAgICAgc2V0Vm90ZWRSZXZpZXdzKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBuZXcgU2V0KHByZXYpO1xuICAgICAgICBuZXh0LmRlbGV0ZShyZXZpZXdJZCk7XG4gICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFJldmlld3MoXG4gICAgICAgIHJldmlld3MubWFwKChyKSA9PiAoci5pZCA9PT0gcmV2aWV3SWQgPyB7IC4uLnIsIGhlbHBmdWxDb3VudDogci5oZWxwZnVsQ291bnQgKyAxIH0gOiByKSlcbiAgICAgICk7XG4gICAgICBzZXRWb3RlZFJldmlld3MoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldik7XG4gICAgICAgIG5leHQuYWRkKHJldmlld0lkKTtcbiAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICB9KTtcbiAgICAgIHNob3dUb2FzdCgnVm90byByZWdpc3RyYWRvIGNvbW8gw7p0aWwuJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBsYXlFcGlzb2RlID0gKGVwaXNvZGU6IEVwaXNvZGUpID0+IHtcbiAgICBzZXRJc1RyYWlsZXJPcGVuKHRydWUpO1xuICAgIHNob3dUb2FzdChgQ2FyZ2FuZG8gdmlzdGEgcHJldmlhIGRlIEVwaXNvZGlvICR7ZXBpc29kZS5lcGlzb2RlTnVtYmVyfTogXCIke2VwaXNvZGUudGl0bGV9XCIuLi5gKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3RTaW1pbGFyVGl0bGUgPSAoc2ltaWxhcjogU2ltaWxhclRpdGxlKSA9PiB7XG4gICAgaWYgKHNpbWlsYXIuaWQgPT09ICdvcHBlbmhlaW1lcicpIHtcbiAgICAgIHNldE1lZGlhTW9kZSgnbW92aWUnKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgc2hvd1RvYXN0KCdDYXJnYW5kbyBmaWNoYSBjaW5lbWF0b2dyw6FmaWNhIGRlIE9wcGVuaGVpbWVyLi4uJyk7XG4gICAgfSBlbHNlIGlmIChzaW1pbGFyLmlkID09PSAncXVlZW5zLWdhbWJpdCcpIHtcbiAgICAgIHNldE1lZGlhTW9kZSgnc2VyaWVzJyk7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgIHNob3dUb2FzdCgnQ2FyZ2FuZG8gZmljaGEgY2luZW1hdG9ncsOhZmljYSBkZSBHYW1iaXRvIGRlIERhbWEuLi4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1RvYXN0KGBFeHBsb3JhbmRvIGNhdMOhbG9nbyBwYXJhIFwiJHtzaW1pbGFyLnRpdGxlfVwiLi4uYCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkWmlwID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzaG93VG9hc3QoJ0VtcGFxdWV0YW5kbyB5IGRlc2NhcmdhbmRvIGVsIGPDs2RpZ28gZGVsIHByb3llY3RvICguWklQKS4uLicpO1xuICAgICAgYXdhaXQgZG93bmxvYWRQcm9qZWN0WmlwKCk7XG4gICAgICBzaG93VG9hc3QoJ8KhRGVzY2FyZ2EgaW5pY2lhZGEgY29uIMOpeGl0byEnKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNob3dUb2FzdCgnRXJyb3IgYWwgZ2VuZXJhciBlbCBaSVAuIFBvciBmYXZvciBpbnRlbnRhIGRlIG51ZXZvLicpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMwYTBlMTNdIGZvbnQtWydJbnRlciddIHRleHQtWyNlMGUyZWFdIG1pbi1oLXNjcmVlbiBzZWxlY3Rpb246YmctWyNmNWM1MThdIHNlbGVjdGlvbjp0ZXh0LVsjMGEwZTEzXVwiPlxuICAgICAgey8qIFRvYXN0IE5vdGlmaWNhdGlvbiAqL31cbiAgICAgIHt0b2FzdE1lc3NhZ2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS02IHJpZ2h0LTYgei01MCBiZy1bIzFjMjAyNV0gdGV4dC1bI2UwZTJlYV0gYm9yZGVyIGJvcmRlci1bI2Y1YzUxOF0vNTAgc2hhZG93LTJ4bCByb3VuZGVkLXhsIHB4LTQgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBhbmltYXRlLXNsaWRlVXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNiBoLTYgcm91bmRlZC1mdWxsIGJnLVsjZjVjNTE4XSB0ZXh0LVsjMGEwZTEzXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTQgaC00IHN0cm9rZS1bM11cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSBmb250LW1lZGl1bVwiPnt0b2FzdE1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBHbG9iYWwgSGVhZGVyICovfVxuICAgICAgPEhlYWRlclxuICAgICAgICB3YXRjaGxpc3RDb3VudD17aXNXYXRjaGxpc3QgPyAxIDogMH1cbiAgICAgICAgb25Eb3dubG9hZFppcD17aGFuZGxlRG93bmxvYWRaaXB9XG4gICAgICAvPlxuXG4gICAgICB7LyogTWFpbiBDb250ZW50IEFyZWEgKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMTYgYmctWyMwYTBlMTNdXCI+XG4gICAgICAgIHsvKiBJbW1lcnNpdmUgQ2luZW1hdGljIEJhY2tkcm9wIEhlcm8gKi99XG4gICAgICAgIDxIZXJvXG4gICAgICAgICAgbWVkaWE9e2N1cnJlbnRNZWRpYX1cbiAgICAgICAgICBtZWRpYU1vZGU9e21lZGlhTW9kZX1cbiAgICAgICAgICBvblN3aXRjaE1vZGU9eyhtb2RlKSA9PiBzZXRNZWRpYU1vZGUobW9kZSl9XG4gICAgICAgICAgb25PcGVuVHJhaWxlcj17KCkgPT4gc2V0SXNUcmFpbGVyT3Blbih0cnVlKX1cbiAgICAgICAgICBpc1dhdGNobGlzdD17aXNXYXRjaGxpc3R9XG4gICAgICAgICAgb25Ub2dnbGVXYXRjaGxpc3Q9e2hhbmRsZVRvZ2dsZVdhdGNobGlzdH1cbiAgICAgICAgICBpc1dhdGNoZWQ9e2lzV2F0Y2hlZH1cbiAgICAgICAgICBvblRvZ2dsZVdhdGNoZWQ9e2hhbmRsZVRvZ2dsZVdhdGNoZWR9XG4gICAgICAgICAgb25TaGFyZT17aGFuZGxlU2hhcmV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIFN0cmVhbWluZyBQbGF0Zm9ybSBTdHJpcCAqL31cbiAgICAgICAgPFN0cmVhbWluZ0JhciAvPlxuXG4gICAgICAgIHsvKiBNYWluIENvbnRlbnQgR3JpZDogOCBDb2xzIChMZWZ0KSAvIDQgQ29scyAoU2lkZWJhcikgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LVsxNDQwcHhdIG14LWF1dG8gcHgtNCBtZDpweC04IGxnOnB4LTE2IHB5LTEwIG1kOnB5LTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtOCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgey8qIExlZnQgTWFpbiBDb2x1bW4gKDggY29scykgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTggZmxleCBmbGV4LWNvbCBnYXAtOFwiPlxuICAgICAgICAgICAgICB7LyogMS4gU3lub3BzaXMgJiBUZWNobmljYWwgU3BlYyAmIENhc3QgKi99XG4gICAgICAgICAgICAgIDxTeW5vcHNpc0Nhc3RcbiAgICAgICAgICAgICAgICBzeW5vcHNpcz17Y3VycmVudE1lZGlhLnN5bm9wc2lzfVxuICAgICAgICAgICAgICAgIGNyZWF0b3JzPXtjdXJyZW50TWVkaWEuY3JlYXRvcnN9XG4gICAgICAgICAgICAgICAgZGlyZWN0b3I9e2N1cnJlbnRNZWRpYS5kaXJlY3Rvcn1cbiAgICAgICAgICAgICAgICBtdXNpYz17Y3VycmVudE1lZGlhLm11c2ljfVxuICAgICAgICAgICAgICAgIGNhc3Q9e2N1cnJlbnRNZWRpYS5jYXN0fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIHsvKiAyLiBFcGlzb2RlIEd1aWRlICYgUmF0aW5ncyAoU2hvd24gZm9yIFNlcmllcyBtb2RlKSAqL31cbiAgICAgICAgICAgICAge21lZGlhTW9kZSA9PT0gJ3NlcmllcycgJiYgY3VycmVudE1lZGlhLmVwaXNvZGVzICYmIGN1cnJlbnRNZWRpYS5lcGlzb2RlUmF0aW5ncyAmJiAoXG4gICAgICAgICAgICAgICAgPEVwaXNvZGVHdWlkZVxuICAgICAgICAgICAgICAgICAgZXBpc29kZXM9e2N1cnJlbnRNZWRpYS5lcGlzb2Rlc31cbiAgICAgICAgICAgICAgICAgIGVwaXNvZGVSYXRpbmdzPXtjdXJyZW50TWVkaWEuZXBpc29kZVJhdGluZ3N9XG4gICAgICAgICAgICAgICAgICBvblBsYXlFcGlzb2RlPXtoYW5kbGVQbGF5RXBpc29kZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHsvKiBJbmZvcm1hdGlvbmFsIGJhbm5lciBmb3IgTW92aWUgbW9kZSAqL31cbiAgICAgICAgICAgICAge21lZGlhTW9kZSA9PT0gJ21vdmllJyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzFjMjAyNV0gcm91bmRlZC14bCBwLTYgYm9yZGVyIGJvcmRlci1bIzMxMzUzYl0vNDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYmctWyMyNjJhMzBdIHRleHQtWyNmNWM1MThdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZvIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LVsjZTBlMmVhXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIExhcmdvbWV0cmFqZSBDaW5lbWF0b2dyw6FmaWNvXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1bI2QxYzVhY10gbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgRXN0YSBvYnJhIGVzIHVuYSBwcm9kdWNjacOzbiBjaW5lbWF0b2dyw6FmaWNhIGNvbnRpbnVhIHNpbiBkaXZpc2nDs24gcG9yXG4gICAgICAgICAgICAgICAgICAgICAgZXBpc29kaW9zLiBEdXJhY2nDs24gdG90YWw6IDE4MCBtaW51dG9zIGVuIGZvcm1hdG8gSU1BWCA3MG1tLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogMy4gQ29tbXVuaXR5IFJldmlld3MgJiBPcGluaW9ucyAqL31cbiAgICAgICAgICAgICAgPFJldmlld3NTZWN0aW9uXG4gICAgICAgICAgICAgICAgcmV2aWV3cz17cmV2aWV3c31cbiAgICAgICAgICAgICAgICBvbk9wZW5SZXZpZXdNb2RhbD17KCkgPT4gc2V0SXNSZXZpZXdNb2RhbE9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25Wb3RlSGVscGZ1bD17aGFuZGxlVm90ZUhlbHBmdWx9XG4gICAgICAgICAgICAgICAgdm90ZWRSZXZpZXdzPXt2b3RlZFJldmlld3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFJpZ2h0IFNpZGViYXIgQ29sdW1uICg0IGNvbHMpICovfVxuICAgICAgICAgICAgPFByb2R1Y3Rpb25TaWRlYmFyXG4gICAgICAgICAgICAgIGF3YXJkcz17Y3VycmVudE1lZGlhLmF3YXJkc31cbiAgICAgICAgICAgICAgcHJvZHVjdGlvbkRldGFpbHM9e2N1cnJlbnRNZWRpYS5wcm9kdWN0aW9uRGV0YWlsc31cbiAgICAgICAgICAgICAgc2ltaWxhclRpdGxlcz17Y3VycmVudE1lZGlhLnNpbWlsYXJUaXRsZXN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0U2ltaWxhclRpdGxlPXtoYW5kbGVTZWxlY3RTaW1pbGFyVGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIEdsb2JhbCBGb290ZXIgKi99XG4gICAgICA8Rm9vdGVyIG9uRG93bmxvYWRaaXA9e2hhbmRsZURvd25sb2FkWmlwfSAvPlxuXG4gICAgICB7LyogVHJhaWxlciBWaWRlbyBQbGF5ZXIgTW9kYWwgKi99XG4gICAgICA8VHJhaWxlck1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNUcmFpbGVyT3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNUcmFpbGVyT3BlbihmYWxzZSl9XG4gICAgICAgIHRpdGxlPXtjdXJyZW50TWVkaWEudGl0bGV9XG4gICAgICAgIHRodW1ibmFpbD17Y3VycmVudE1lZGlhLnRyYWlsZXJUaHVtYm5haWx9XG4gICAgICAvPlxuXG4gICAgICB7LyogV3JpdGUgUmV2aWV3IE1vZGFsICovfVxuICAgICAgPFJldmlld01vZGFsXG4gICAgICAgIGlzT3Blbj17aXNSZXZpZXdNb2RhbE9wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzUmV2aWV3TW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgICAgbWVkaWFUaXRsZT17Y3VycmVudE1lZGlhLnRpdGxlfVxuICAgICAgICBvblN1Ym1pdFJldmlldz17aGFuZGxlQWRkUmV2aWV3fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==