"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import { FaCopy, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JSONDiffPage() {
  const [json1, setJson1] = useState("");
  const [json2, setJson2] = useState("");
  const [diff, setDiff] = useState<any>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const compareJSON = () => {
    try {
      const obj1 = JSON.parse(json1);
      const obj2 = JSON.parse(json2);
      
      const differences = findDifferences(obj1, obj2);
      setDiff(differences);
      setError("");
    } catch (err) {
      setError("Invalid JSON format. Please check your input.");
      setDiff(null);
    }
  };

  const findDifferences = (obj1: any, obj2: any, path = ""): any => {
    const differences: any[] = [];
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const allKeys = Array.from(new Set([...keys1, ...keys2]));
    
    for (const key of allKeys) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (!(key in obj1)) {
        differences.push({
          path: currentPath,
          type: "added",
          value: obj2[key],
        });
      } else if (!(key in obj2)) {
        differences.push({
          path: currentPath,
          type: "removed",
          value: obj1[key],
        });
      } else if (typeof obj1[key] !== typeof obj2[key]) {
        differences.push({
          path: currentPath,
          type: "type_changed",
          oldValue: obj1[key],
          newValue: obj2[key],
        });
      } else if (typeof obj1[key] === "object" && obj1[key] !== null && obj2[key] !== null) {
        const nestedDiffs = findDifferences(obj1[key], obj2[key], currentPath);
        differences.push(...nestedDiffs);
      } else if (obj1[key] !== obj2[key]) {
        differences.push({
          path: currentPath,
          type: "value_changed",
          oldValue: obj1[key],
          newValue: obj2[key],
        });
      }
    }
    
    return differences;
  };

  const clearAll = () => {
    setJson1("");
    setJson2("");
    setDiff(null);
    setError("");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-4 pt-20">
        <section className="max-w-[65rem] mx-auto w-full mb-28 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Link 
                href="/tools"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-6 text-sm"
              >
                ← Back to Tools
              </Link>
              
              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  JSON Diff
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Compare two JSON objects and visualize their differences. Perfect for debugging API responses.
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
              </div>
            )}

            <div className="grid gap-4 lg:grid-cols-2 mb-6">
              <div className="bg-gray-100 dark:bg-white/10 rounded-lg border border-black/5 p-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Original JSON
                </label>
                <textarea
                  value={json1}
                  onChange={(e) => setJson1(e.target.value)}
                  placeholder="Paste original JSON..."
                  className="w-full h-64 p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
              
              <div className="bg-gray-100 dark:bg-white/10 rounded-lg border border-black/5 p-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Modified JSON
                </label>
                <textarea
                  value={json2}
                  onChange={(e) => setJson2(e.target.value)}
                  placeholder="Paste modified JSON..."
                  className="w-full h-64 p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            </div>

            <div className="flex justify-center gap-3 mb-8">
              <button
                onClick={compareJSON}
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors duration-200 font-medium text-sm"
              >
                Compare JSON
              </button>
              <button
                onClick={clearAll}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium text-sm text-gray-700 dark:text-gray-300"
              >
                Clear
              </button>
            </div>

            {diff && diff.length > 0 && (
              <motion.div 
                className="bg-gray-100 dark:bg-white/10 rounded-lg border border-black/5 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Differences ({diff.length})
                  </h2>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(diff, null, 2))}
                    className="flex items-center px-3 py-1.5 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {copied ? <FaCheck className="mr-2 text-green-600" size={12} /> : <FaCopy className="mr-2" size={12} />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-auto">
                  {diff.map((diffItem: any, index: number) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-l-4 ${
                        diffItem.type === "added"
                          ? "bg-white dark:bg-gray-800 border-green-500"
                          : diffItem.type === "removed"
                          ? "bg-white dark:bg-gray-800 border-red-500"
                          : "bg-white dark:bg-gray-800 border-yellow-500"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                          {diffItem.path}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          diffItem.type === "added"
                            ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                            : diffItem.type === "removed"
                            ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
                        }`}>
                          {diffItem.type.replace("_", " ")}
                        </span>
                      </div>
                      
                      <div className="font-mono text-xs">
                        {diffItem.type === "added" && (
                          <span className="text-green-600 dark:text-green-400">
                            + {JSON.stringify(diffItem.value)}
                          </span>
                        )}
                        {diffItem.type === "removed" && (
                          <span className="text-red-600 dark:text-red-400">
                            - {JSON.stringify(diffItem.value)}
                          </span>
                        )}
                        {(diffItem.type === "value_changed" || diffItem.type === "type_changed") && (
                          <div>
                            <span className="text-red-600 dark:text-red-400 block">
                              - {JSON.stringify(diffItem.oldValue)}
                            </span>
                            <span className="text-green-600 dark:text-green-400 block">
                              + {JSON.stringify(diffItem.newValue)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {diff && diff.length === 0 && (
              <motion.div 
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-1">
                  No differences found
                </h3>
                <p className="text-green-600 dark:text-green-400 text-sm">
                  The two JSON objects are identical.
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>
      </main>
    </>
  );
}
