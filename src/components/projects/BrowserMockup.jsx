import React from 'react';
import { ExternalLink, Github, Lock, Sparkles, Terminal, Activity, Mic } from 'lucide-react';

const BrowserMockup = ({ project, isHero = false, className = '' }) => {
  const targetUrl = project.liveLink || project.githubLink || '#';
  const hasLiveLink = Boolean(project.liveLink);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Ambient background glow */}
      <div 
        className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${project.gradient || 'from-accent/20 to-transparent'} opacity-30 blur-2xl group-hover:opacity-75 transition-opacity duration-700 pointer-events-none`}
      />

      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative rounded-2xl border border-borderColors/90 bg-secondary/90 overflow-hidden group/frame shadow-xl hover:shadow-2xl hover:border-accent/80 transition-all duration-500 cursor-pointer"
        title={`Open ${project.title} (${hasLiveLink ? 'Live Site' : 'GitHub'})`}
        data-hover
      >
        {/* Top macOS-style Browser Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-primary/95 border-b border-borderColors/70 backdrop-blur-md">
          {/* Traffic Light Window Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-inner hover:opacity-80 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-inner hover:opacity-80 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-inner hover:opacity-80 transition-opacity" />
          </div>

          {/* Browser Address Bar with Lock */}
          <div className="mx-3 flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/90 border border-borderColors/60 text-[11px] font-mono text-textSecondary/80 max-w-[280px] sm:max-w-[340px] truncate shadow-inner">
            <Lock className="w-3 h-3 text-accent shrink-0" />
            <span className="truncate">{project.urlDisplay || 'localhost:3000'}</span>
          </div>

          {/* Status Indicator */}
          <div className="shrink-0 flex items-center gap-1.5 font-mono text-[10px] text-emerald-500 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">{project.status}</span>
          </div>
        </div>

        {/* Browser Viewport Content */}
        <div className={`relative w-full overflow-hidden bg-primary/40 ${isHero ? 'aspect-[16/10] sm:aspect-[16/9.5]' : 'aspect-[16/10]'}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} Interface Preview`}
              className="w-full h-full object-cover object-top group-hover/frame:scale-[1.03] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          ) : project.id === 'terminal-portfolio' ? (
            /* Interactive Simulated Terminal UI */
            <div className="w-full h-full bg-[#0d1117] text-[#58a6ff] p-5 font-mono text-xs flex flex-col justify-between overflow-hidden group-hover/frame:scale-[1.02] transition-transform duration-700">
              <div className="space-y-2">
                <div className="text-emerald-400">
                  <span className="text-purple-400">sidhu@portfolio</span>:<span className="text-blue-400">~</span>$ neofetch
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-300 pt-1 border-t border-gray-800">
                  <div>
                    <p className="text-amber-400 font-bold">SIDDHARTH SINGH</p>
                    <p><span className="text-gray-500">OS:</span> Web CLI v2.4</p>
                    <p><span className="text-gray-500">Host:</span> React.js / Vite</p>
                    <p><span className="text-gray-500">Shell:</span> custom-bash</p>
                    <p><span className="text-gray-500">Theme:</span> Monokai / Matrix</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-cyan-400 font-semibold">[ Available Commands ]</p>
                    <div className="flex flex-wrap gap-1">
                      {['about', 'skills', 'projects', 'resume', 'contact'].map(c => (
                        <span key={c} className="px-1.5 py-0.5 rounded bg-gray-800 text-[9px] text-emerald-300 border border-gray-700">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-2 text-emerald-400 flex items-center gap-1">
                  <span className="text-purple-400">sidhu@portfolio</span>:<span className="text-blue-400">~</span>$ <span className="animate-pulse">_</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-gray-500 pt-2 border-t border-gray-800/80">
                <span>✦ Interactive UNIX Terminal Simulator</span>
                <span className="text-emerald-400">● Online</span>
              </div>
            </div>
          ) : project.id === 'chronic-pulse' ? (
            /* Simulated AI Telehealth Interface */
            <div className="w-full h-full bg-[#0b0f19] text-white p-5 font-sans flex flex-col justify-between overflow-hidden group-hover/frame:scale-[1.02] transition-transform duration-700">
              <div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
                    <span className="font-semibold text-xs text-purple-200">ChronicPulse AI Telehealth</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Gemini AI Active
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-gray-900/90 border border-gray-800">
                    <span className="text-[9px] text-gray-400 block font-mono">Blood Glucose</span>
                    <span className="text-sm font-bold text-emerald-400">108 mg/dL</span>
                    <span className="text-[9px] text-emerald-500 block">Normal (Fasting)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-gray-900/90 border border-gray-800">
                    <span className="text-[9px] text-gray-400 block font-mono">Blood Pressure</span>
                    <span className="text-sm font-bold text-cyan-400">120/80</span>
                    <span className="text-[9px] text-cyan-500 block">Optimal Range</span>
                  </div>
                  <div className="p-2 rounded-lg bg-gray-900/90 border border-gray-800">
                    <span className="text-[9px] text-gray-400 block font-mono">Heart Rate</span>
                    <span className="text-sm font-bold text-rose-400">72 bpm</span>
                    <span className="text-[9px] text-rose-500 block">Resting</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/40 text-[11px] text-purple-200 flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <p className="line-clamp-2">
                    <strong className="text-purple-300">AI Clinical Summary:</strong> 30-day glycemic trends show stable control. Recommended: maintain low-sodium diet and hydrate.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-gray-800/80 font-mono">
                <span>Yukti Innovation Challenge 2025</span>
                <span className="text-purple-400">Real-time Telemetry</span>
              </div>
            </div>
          ) : project.id === 'jarvis-voice-assistant' ? (
            /* Simulated JARVIS AI HUD */
            <div className="w-full h-full bg-[#050b14] text-cyan-400 p-5 font-mono flex flex-col justify-between overflow-hidden group-hover/frame:scale-[1.02] transition-transform duration-700">
              <div>
                <div className="flex items-center justify-between border-b border-cyan-900/50 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="font-bold text-xs tracking-wider text-cyan-300">JARVIS AI SYSTEM</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
                    LISTENING...
                  </span>
                </div>
                <div className="flex items-center justify-center py-4">
                  {/* Futuristic pulsing audio waveform */}
                  <div className="flex items-center gap-1.5 h-12">
                    {[16, 28, 44, 20, 36, 48, 32, 24, 40, 18, 30, 46, 22].map((height, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-full bg-gradient-to-t from-cyan-600 via-cyan-400 to-blue-300 animate-pulse"
                        style={{
                          height: `${height}px`,
                          animationDelay: `${i * 0.08}s`,
                          animationDuration: '0.9s'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/50 text-[11px] text-cyan-200">
                  <p className="line-clamp-2">
                    <span className="text-cyan-400 font-bold">JARVIS:</span> "Good day! Speech synthesis operational and Gemini intelligence connected. What would you like me to execute?"
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-cyan-600 pt-2 border-t border-cyan-900/40">
                <span>Web Speech API + Gemini Multimodal</span>
                <span className="text-cyan-400">● 60 FPS HUD</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-xs text-textSecondary bg-secondary/50">
              Interactive Web Application Preview
            </div>
          )}

          {/* Subtle frame gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-30 group-hover/frame:opacity-0 transition-opacity duration-300 pointer-events-none" />

          {/* Hover Overlay Button Pill */}
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px] opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-primary border border-borderColors shadow-2xl flex items-center gap-2 font-mono text-xs font-semibold text-textPrimary hover:border-accent hover:text-accent transition-all transform scale-95 group-hover/frame:scale-100 duration-300">
              {hasLiveLink ? (
                <>
                  <span>Open Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-accent" />
                </>
              ) : (
                <>
                  <span>View Repository</span>
                  <Github className="w-3.5 h-3.5 text-accent" />
                </>
              )}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BrowserMockup;
