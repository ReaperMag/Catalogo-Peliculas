import { useEffect, useRef } from 'react'

type YDondeEstaElFantasmaTemplateProps = {
  onNavigate: (destination: 'inicio' | 'peliculas' | 'series' | 'celebridades') => void
}

export function YDondeEstaElFantasmaTemplate({ onNavigate }: YDondeEstaElFantasmaTemplateProps) {
  const frameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    let observer: ResizeObserver | undefined
    const resizeFrame = () => {
      const document = frame.contentDocument
      if (!document) return
      const height = Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight ?? 0)
      frame.style.height = `${height}px`
    }
    const onLoad = () => {
      resizeFrame()
      const document = frame.contentDocument
      if (document && 'ResizeObserver' in window) {
        observer = new ResizeObserver(resizeFrame)
        observer.observe(document.documentElement)
        if (document.body) observer.observe(document.body)
      }
    }
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.contentWindow) return
      if (event.data?.type === 'cinebase:navigate') {
        const destination = event.data.destination
        if (['inicio', 'peliculas', 'series', 'celebridades'].includes(destination)) onNavigate(destination)
      }
    }

    frame.addEventListener('load', onLoad)
    window.addEventListener('resize', resizeFrame)
    window.addEventListener('message', onMessage)
    return () => {
      frame.removeEventListener('load', onLoad)
      window.removeEventListener('resize', resizeFrame)
      window.removeEventListener('message', onMessage)
      observer?.disconnect()
    }
  }, [onNavigate])

  return (
    <iframe
      className="school-of-rock-frame"
      ref={frameRef}
      src="/y-donde-esta-el-fantasma.html"
      title="Ficha de ¿Y dónde está el fantasma?"
    />
  )
}
