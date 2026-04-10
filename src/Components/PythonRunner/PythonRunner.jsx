import React, { useState, useRef } from 'react'
import './PythonRunner.css'

// Pyodide is loaded once and shared across all runner instances
let pyodidePromise = null

function ensurePyodide() {
    if (pyodidePromise) return pyodidePromise
    pyodidePromise = new Promise((resolve, reject) => {
        if (window.loadPyodide) {
            window.loadPyodide().then(resolve).catch(reject)
            return
        }
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js'
        script.onload = () => window.loadPyodide().then(resolve).catch(reject)
        script.onerror = () => reject(new Error('Failed to load Pyodide'))
        document.head.appendChild(script)
    })
    return pyodidePromise
}

const SETUP_CODE = `
import sys, io, builtins

sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

_input_list = list(_py_inputs)
_input_idx = 0

def _patched_input(prompt=''):
    global _input_idx
    if prompt:
        sys.stdout.write(str(prompt))
    if _input_idx < len(_input_list):
        val = _input_list[_input_idx]
        _input_idx += 1
        sys.stdout.write(str(val) + '\\n')
        return str(val)
    return ''

builtins.input = _patched_input
`

const PythonRunner = ({ code }) => {
    const [output, setOutput] = useState('')
    const [status, setStatus] = useState('idle') // idle | init | running | done | error
    const [userInput, setUserInput] = useState('')
    const needsInput = /\binput\s*\(/.test(code)

    const run = async () => {
        setStatus('init')
        setOutput('')
        try {
            const pyodide = await ensurePyodide()
            setStatus('running')

            const inputLines = userInput.trim() ? userInput.split('\n') : []
            pyodide.globals.set('_py_inputs', pyodide.toPy(inputLines))

            await pyodide.runPythonAsync(SETUP_CODE)
            await pyodide.runPythonAsync(code)

            const stdout = pyodide.runPython('sys.stdout.getvalue()')
            const stderr = pyodide.runPython('sys.stderr.getvalue()')

            if (stderr) {
                setOutput((stdout ? stdout + '\n' : '') + '⚠ ' + stderr.trim())
                setStatus('error')
            } else {
                setOutput(stdout || '(no output)')
                setStatus('done')
            }
        } catch (err) {
            setOutput('Error: ' + err.message)
            setStatus('error')
        }
    }

    const btnLabel =
        status === 'init' ? 'Loading Python…' :
        status === 'running' ? 'Running…' :
        '▶  Run'

    return (
        <div className="py-runner">
            <div className="py-runner-header">
                <span className="py-runner-badge">🐍 Python</span>
                <span className="py-runner-hint">Runs in your browser via Pyodide</span>
            </div>

            <pre className="py-code"><code>{code}</code></pre>

            {needsInput && (
                <div className="py-input-section">
                    <label className="py-input-label">
                        Input&nbsp;<span className="py-input-sublabel">(one value per line)</span>
                    </label>
                    <textarea
                        className="py-input-area"
                        value={userInput}
                        onChange={e => setUserInput(e.target.value)}
                        placeholder="Type your inputs here…"
                        rows={3}
                        spellCheck={false}
                    />
                </div>
            )}

            <button
                className={`py-run-btn py-run-btn--${status}`}
                onClick={run}
                disabled={status === 'init' || status === 'running'}
            >
                {btnLabel}
            </button>

            {output && (
                <div className={`py-output ${status === 'error' ? 'py-output--error' : ''}`}>
                    <div className="py-output-label">Output</div>
                    <pre className="py-output-text">{output}</pre>
                </div>
            )}
        </div>
    )
}

export default PythonRunner
