import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { personalInfo, terminalLines } from '../data/portfolio';
import { Terminal } from 'lucide-react';

// Timing constants — tune the terminal sequence here.
const CMD_SPEED_MS = 95; // per character while typing a command
const OUT_SPEED_MS = 65; // per character while typing an output line
const JITTER_MS = 25; // random +/- variation per character, so it feels human
const ENTER_PAUSE_MS = 500; // after a command finishes, before its output starts
const LINE_PAUSE_MS = 900; // after an output line finishes, before the next command
const HOLD_MS = 4000; // after the last line, before restarting
const LOOP = true; // set to false to keep the finished text on screen

function Cursor() {
  return (
    <motion.span
      aria-hidden="true"
      className="inline-block w-[8px] h-[16px] ml-0.5 align-middle bg-accent"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    />
  );
}

export default function Approach() {
  const panelRef = useRef(null);
  const inView = useInView(panelRef, { once: false, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const totalLines = terminalLines.length;

  useEffect(() => {
    if (reduceMotion || !inView || paused) return;

    let timer;
    const line = terminalLines[lineIndex];

    if (!line) {
      // Every line is finished: hold, then clear and restart (unless LOOP is off).
      if (LOOP) {
        timer = setTimeout(() => {
          setLineIndex(0);
          setCharIndex(0);
        }, HOLD_MS);
      }
    } else if (charIndex < line.text.length) {
      // Type the next character of the current line.
      const base = line.type === 'cmd' ? CMD_SPEED_MS : OUT_SPEED_MS;
      const jitter = (Math.random() * 2 - 1) * JITTER_MS;
      timer = setTimeout(() => setCharIndex((c) => c + 1), Math.max(0, base + jitter));
    } else {
      // Line finished: pause, then move to the next line.
      const pause = line.type === 'cmd' ? ENTER_PAUSE_MS : LINE_PAUSE_MS;
      timer = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, pause);
    }

    return () => clearTimeout(timer);
  }, [reduceMotion, inView, paused, lineIndex, charIndex]);

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-sm tracking-widest text-secondary mb-6">THE APPROACH</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              I learn by building <br />
              <span className="font-serif italic text-accent font-normal">real things.</span>
            </h2>

            <ul className="space-y-6">
              {personalInfo.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-secondary text-lg">
                  <Terminal className="text-accent shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative w-full min-w-0 rounded-2xl bg-surface-secondary border border-border overflow-hidden flex flex-col"
          >
            {/* Full text for screen readers; the typed characters are decorative. */}
            <div className="sr-only">
              {terminalLines.map((line, i) => (
                <p key={i}>{line.type === 'cmd' ? `$ ${line.text}` : line.text}</p>
              ))}
            </div>

            <div className="bg-border h-10 w-full flex items-center px-4 gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-4 font-mono text-xs text-muted">emmasha@workspace:~</div>
            </div>

            <div
              aria-hidden="true"
              className="p-6 font-mono text-sm text-muted flex flex-col gap-2"
            >
              {terminalLines.map((line, i) => {
                const fullText = line.type === 'cmd' ? `$ ${line.text}` : line.text;
                const isDone = reduceMotion || i < lineIndex;
                const isCurrent = !reduceMotion && i === lineIndex;
                const typed = isDone ? line.text : line.text.slice(0, charIndex);

                return (
                  <div key={i} className="relative whitespace-pre-wrap break-words leading-relaxed">
                    {/* Invisible full text reserves the final line height so nothing jumps. */}
                    <span className="invisible">{fullText}</span>

                    {(isDone || isCurrent) && (
                      <span className="absolute inset-0">
                        {line.type === 'cmd' ? (
                          <>
                            <span className="text-accent">$</span>{' '}
                            <span className="text-primary">{typed}</span>
                          </>
                        ) : (
                          <span className="text-muted">{typed}</span>
                        )}
                        {isCurrent && <Cursor />}
                      </span>
                    )}
                  </div>
                );
              })}

              {/* Final empty prompt line the cursor rests on when the sequence ends. */}
              <div className="relative whitespace-pre-wrap break-words leading-relaxed">
                <span className="invisible">$</span>
                {!reduceMotion && lineIndex >= totalLines && (
                  <span className="absolute inset-0">
                    <span className="text-accent">$</span>
                    <Cursor />
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
