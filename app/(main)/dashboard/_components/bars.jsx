"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function Bars() {
  const [isAnimating, setIsAnimating] = useState(true)

  // Expense tracking data with neon colors
  const expenses = [
    { label: "Food", value: 65, color: "bg-cyan-400", glowColor: "shadow-cyan-400/50", maxHeight: 120 },
    { label: "Rent", value: 82, color: "bg-pink-400", glowColor: "shadow-pink-400/50", maxHeight: 140 },
    { label: "Transport", value: 45, color: "bg-yellow-400", glowColor: "shadow-yellow-400/50", maxHeight: 90 },
    { label: "Utilities", value: 38, color: "bg-green-400", glowColor: "shadow-green-400/50", maxHeight: 80 },
    { label: "Shopping", value: 52, color: "bg-purple-400", glowColor: "shadow-purple-400/50", maxHeight: 100 },
    { label: "Entertainment", value: 30, color: "bg-orange-400", glowColor: "shadow-orange-400/50", maxHeight: 70 },
  ]

  return (
    <Card className="bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="rounded-2xl p-8">
        <div className="text-center mb-8">
          {/* <h2 className="text-3xl font-bold text-white mb-2">Expense Tracker</h2>
          <p className="text-slate-300">Monthly spending breakdown</p> */}
        </div>

        <div className="flex items-end justify-center space-x-6 h-64">
          {expenses.map((expense, index) => (
            <div key={expense.label} className="flex flex-col items-center">
              {/* Animated Bar */}
              <div className="relative mb-4">
                <motion.div
                  className={`w-12 ${expense.color} rounded-t-lg shadow-lg relative overflow-hidden ${expense.glowColor} shadow-2xl`}
                  style={{
                    boxShadow: `0 0 20px ${
                      expense.color.includes("cyan")
                        ? "#22d3ee"
                        : expense.color.includes("pink")
                          ? "#f472b6"
                          : expense.color.includes("yellow")
                            ? "#facc15"
                            : expense.color.includes("green")
                              ? "#4ade80"
                              : expense.color.includes("purple")
                                ? "#a855f7"
                                : "#fb923c"
                    }40,
                        0 0 40px ${
                          expense.color.includes("cyan")
                            ? "#22d3ee"
                            : expense.color.includes("pink")
                              ? "#f472b6"
                              : expense.color.includes("yellow")
                                ? "#facc15"
                                : expense.color.includes("green")
                                  ? "#4ade80"
                                  : expense.color.includes("purple")
                                    ? "#a855f7"
                                    : "#fb923c"
                        }20`,
                  }}
                  initial={{ height: 20 }}
                  animate={{
                    height: [
                      expense.maxHeight * 0.6,
                      expense.maxHeight,
                      expense.maxHeight * 0.4,
                      expense.maxHeight * 0.8,
                      expense.maxHeight * 0.6,
                    ],
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  {/* Enhanced shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-transparent"
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Value indicator */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/90 text-slate-800 px-2 py-1 rounded text-xs font-semibold"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  ${expense.value}
                </motion.div>
              </div>

              {/* Label */}
              <div className="text-center">
                <p className="text-white font-medium text-sm">{expense.label}</p>
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mt-1"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-white/20" />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
