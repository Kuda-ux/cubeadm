'use client'

import { useState } from 'react'
import { Target, DollarSign } from 'lucide-react'

const pipelineStages = [
  {
    name: 'New',
    color: 'bg-blue-500',
    deals: [
      { id: 1, name: 'TechCorp Cloud Training', company: 'TechCorp Ltd', value: '$12,000', probability: 20 },
      { id: 2, name: 'TelOne CCNA Training', company: 'TelOne', value: '$8,000', probability: 25 },
    ]
  },
  {
    name: 'Contacted',
    color: 'bg-indigo-500',
    deals: [
      { id: 3, name: 'ZimBank IT Solutions', company: 'ZimBank', value: '$45,000', probability: 40 },
      { id: 4, name: 'Ministry Cybersecurity', company: 'Ministry of ICT', value: '$25,000', probability: 35 },
    ]
  },
  {
    name: 'Qualified',
    color: 'bg-purple-500',
    deals: [
      { id: 5, name: 'Econet Managed IT', company: 'Econet Wireless', value: '$65,000', probability: 60 },
    ]
  },
  {
    name: 'Proposal',
    color: 'bg-pink-500',
    deals: [
      { id: 6, name: 'EcoBank Portal', company: 'EcoBank Zimbabwe', value: '$35,000', probability: 75 },
      { id: 7, name: 'ZIMRA System Upgrade', company: 'ZIMRA', value: '$55,000', probability: 80 },
    ]
  },
  {
    name: 'Won',
    color: 'bg-green-500',
    deals: [
      { id: 8, name: 'ZimBank Portal Redesign', company: 'ZimBank Ltd', value: '$45,000', probability: 100 },
    ]
  },
]

export default function PipelinePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">Sales Pipeline</h1>
          <p className="text-gray-500 mt-1">Visual overview of deals in progress</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {pipelineStages.map((stage) => (
          <div key={stage.name} className="bg-white/5 border border-white/5 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 ${stage.color} rounded-full`} />
              <span className="font-medium">{stage.name}</span>
              <span className="ml-auto text-sm text-gray-500">{stage.deals.length}</span>
            </div>
            <div className="space-y-3">
              {stage.deals.map((deal) => (
                <div key={deal.id} className="p-3 bg-white/5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors">
                  <p className="font-medium text-sm mb-1">{deal.name}</p>
                  <p className="text-xs text-gray-500 mb-2">{deal.company}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#00D4FF]">{deal.value}</span>
                    <span className="text-xs text-gray-500">{deal.probability}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Deals</p>
              <p className="text-2xl font-bold">{pipelineStages.reduce((acc, s) => acc + s.deals.length, 0)}</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pipeline Value</p>
              <p className="text-2xl font-bold">$290,000</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Won This Month</p>
              <p className="text-2xl font-bold">$45,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
