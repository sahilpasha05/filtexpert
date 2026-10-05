import React from 'react';
import { SpecificationItem } from '../types';

interface SpecificationTableProps {
  specifications: SpecificationItem[];
  title?: string;
  subtitle?: string;
}

export const SpecificationTable: React.FC<SpecificationTableProps> = ({
  specifications,
  title = "Technical Specifications",
  subtitle = "Standard engineering parameters. Exact values configured to application requirement."
}) => {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#0B1F33] tracking-tight">{title}</h3>
        {subtitle && <p className="text-xs text-[#667085] mt-1">{subtitle}</p>}
      </div>

      <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-xs">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-[#667085]">
              <th scope="col" className="py-3 px-4 w-2/5">Engineering Parameter</th>
              <th scope="col" className="py-3 px-4 w-3/5">Specification Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {specifications.map((spec, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white hover:bg-slate-50/50 transition-colors" : "bg-slate-50/30 hover:bg-slate-50/60 transition-colors"}
              >
                <td className="py-3 px-4 font-semibold text-[#0B1F33] text-xs sm:text-sm">
                  {spec.label}
                </td>
                <td className="py-3 px-4 text-[#17212B] font-mono text-xs sm:text-sm tabular-nums">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="mt-2 text-[11px] text-[#667085] italic">
        * Custom micron ratings, pressures, flow curves, and mechanical dimensions are supplied on request based on operational environment.
      </p>
    </div>
  );
};
