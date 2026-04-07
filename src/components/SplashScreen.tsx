// Overlay de bienvenida: cualquier toque cierra el splash y arranca la música
import { useState } from 'react'

export default function SplashScreen() {
	const [isVisible, setIsVisible] = useState(true)

	const handleOpen = () => {
		// Dispara evento para que MusicPlayer arranque la música
		window.dispatchEvent(new CustomEvent('music:play'))
		setIsVisible(false)
	}

	if (!isVisible) return null

	return (
		<div
			onClick={handleOpen}
			className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none"
			style={{
				background: 'linear-gradient(180deg, #1a2e3d 0%, #0f1c26 60%, #1a2e3d 100%)',
			}}
		>
			{/* Decoración superior */}
			<p className="font-display text-[10px] tracking-[0.4em] text-gold-400/50 uppercase mb-6">
				Estás invitado(a)
			</p>

			{/* Nombre principal */}
			<h2 className="font-serif text-4xl sm:text-5xl text-white/90 italic leading-tight text-center px-8">
				Ana Valeria
			</h2>

			{/* Subtítulo */}
			<p className="font-sans text-sm text-white/50 mt-3">
				Mis XV Años
			</p>

			{/* Separador dorado */}
			<div className="w-16 h-px bg-gold-400/30 my-8" />

			{/* Indicador de toque */}
			<p className="font-sans text-xs text-white/30 animate-pulse">
				Toca para abrir la invitación
			</p>
		</div>
	)
}
