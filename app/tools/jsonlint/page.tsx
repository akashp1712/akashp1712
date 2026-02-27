"use client";

import React, { useState, useCallback } from "react";
import Header from "@/components/header";
import { FaCopy, FaCheck, FaBroom, FaFileCode } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JSONLintPage() {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [lineCount, setLineCount] = useState(1);

  const validateJSON = useCallback((input: string): string | null => {
    if (!input.trim()) return null;
    try {
      JSON.parse(input);
      return null;
    } catch (err: any) {
      const match = err.message.match(/position (\d+)/);
      if (match) {
        const pos = parseInt(match[1], 10);
        const lines = input.substring(0, pos).split('\n');
        const line = lines.length;
        const column = lines[lines.length - 1].length + 1;
        return `Error on line ${line}, column ${column}: ${err.message}`;
      }
      return err.message;
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonInput(value);
    setLineCount(value.split('\n').length);
    const validationError = validateJSON(value);
    setError(validationError);
  };

  const formatJSON = () => {
    if (!jsonInput.trim()) return;
    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, 2);
      setJsonInput(formatted);
      setLineCount(formatted.split('\n').length);
      setError(null);
    } catch {
      // Invalid JSON, don't format
    }
  };

  const minifyJSON = () => {
    if (!jsonInput.trim()) return;
    try {
      const parsed = JSON.parse(jsonInput);
      const minified = JSON.stringify(parsed);
      setJsonInput(minified);
      setLineCount(minified.split('\n').length);
      setError(null);
    } catch {
      // Invalid JSON, don't minify
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setJsonInput("");
    setError(null);
    setLineCount(1);
  };

  const loadSample = () => {
    const sample = {
      "name": "John Doe",
      "age": 30,
      "city": "New York",
      "skills": ["JavaScript", "React", "Node.js"],
      "address": {
        "street": "123 Main St",
        "zipCode": "10001"
      },
      "isActive": true,
      "profile": null
    };
    const formatted = JSON.stringify(sample, null, 2);
    setJsonInput(formatted);
    setLineCount(formatted.split('\n').length);
    setError(null);
  };

  const isValid = jsonInput.trim() && !error;

  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4 pt-20 min-h-screen">
        <section className="max-w-[65rem] mx-auto w-full mb-28 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Link 
                href="/tools"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-4 text-sm"
              >
                ← Back to Tools
              </Link>
              
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  JSON Lint
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Paste your JSON and validate instantly. Format and minify with one click.
                </p>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={formatJSON}
                  disabled={!!error || !jsonInput.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <FaFileCode size={14} />
                  Format
                </button>
                <button
                  onClick={minifyJSON}
                  disabled={!!error || !jsonInput.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  Minify
                </button>
                <button
                  onClick={loadSample}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Load Sample
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={copyToClipboard}
                  disabled={!jsonInput.trim()}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-sm font-medium text-gray-700 dark:text-gray-300 disabled:opacity-50"
                >
                  {copied ? <FaCheck size={14} className="text-green-600" /> : <FaCopy size={14} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={clearAll}
                  className="flex items-center gap-2 px-4 py-2 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 text-sm font-medium"
                >
                  <FaBroom size={14} />
                  Clear
                </button>
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between mb-2 px-2">
              <div className="flex items-center gap-2">
                {error ? (
                  <span className="text-red-600 dark:text-red-400 text-sm font-medium">
                    ● Invalid JSON
                  </span>
                ) : isValid ? (
                  <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                    ● Valid JSON
                  </span>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 text-sm">
                    ● Enter JSON to validate
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {lineCount} lines
              </div>
            </div>

            {/* Editor */}
            <div className={`relative rounded-lg border-2 ${error ? 'border-red-300 dark:border-red-700' : isValid ? 'border-green-300 dark:border-green-700' : 'border-gray-200 dark:border-gray-700'} overflow-hidden`}>
              <textarea
                value={jsonInput}
                onChange={handleInputChange}
                placeholder="Paste your JSON here..."
                spellCheck={false}
                className="w-full h-[60vh] min-h-[400px] p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:outline-none"
                style={{ tabSize: 2 }}
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div 
                className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-red-700 dark:text-red-300 text-sm font-mono">{error}</p>
              </motion.div>
            )}
          </motion.div>
        </section>
      </main>
    </>
  );
}
