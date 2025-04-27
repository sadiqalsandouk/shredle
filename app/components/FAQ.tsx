"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: React.ReactNode
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-orange-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-3 text-left font-medium text-gray-800 dark:text-gray-200 focus:outline-none transition-colors hover:text-orange-600 dark:hover:text-orange-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base">{question}</span>
        <ChevronDown
          className={`h-4 w-4 text-orange-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mb-3" : "max-h-0"
        }`}
      >
        <div className="text-gray-600 dark:text-gray-400 text-sm pb-3 pl-2 border-l-2 border-orange-200 dark:border-orange-800 ml-2">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden p-5 my-8 border border-orange-100 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-center text-orange-600 dark:text-orange-400">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        <FaqItem
          question="What is Shredle?"
          answer={
            <p className="leading-relaxed">
              A daily game that helps you learn about food calories through fun
              challenges comparing different foods.
            </p>
          }
        />

        <FaqItem
          question="How do I play?"
          answer={
            <p className="leading-relaxed">
              Compare two foods, with one food&apos;s calorie content revealed,
              and guess if the second food has more or fewer calories.
            </p>
          }
        />

        <FaqItem
          question="Is the data accurate?"
          answer={
            <p className="leading-relaxed">
              The calorie data and food images are AI-generated approximations
              meant for educational purposes rather than precise nutritional
              guidance.
            </p>
          }
        />

        <FaqItem
          question="Why do some results seem surprising?"
          answer={
            <p className="leading-relaxed">
              Food density varies significantly - 100g of dense foods like nuts
              or cheese contains more calories than 100g of foods with high
              water content like vegetables or fruits.
            </p>
          }
        />

        <FaqItem
          question="How should I visualize 100g portions?"
          answer={
            <p className="leading-relaxed">
              100g of dense foods (like pistachios) is a small handful, while
              100g of less dense foods (like lasagne) is a much larger portion,
              which explains why calorie counts might be counterintuitive.
            </p>
          }
        />

        <FaqItem
          question="What affects calorie content?"
          answer={
            <p className="leading-relaxed">
              Fat (9 calories/gram), carbohydrates and protein (4 calories/gram
              each), preparation methods, and water content all impact a
              food&apos;s calorie density.
            </p>
          }
        />

        <FaqItem
          question="Is Shredle free to play?"
          answer={
            <p className="leading-relaxed">
              Yes, Shredle is completely free with a new game available every
              day.
            </p>
          }
        />
      </div>
    </div>
  )
}
