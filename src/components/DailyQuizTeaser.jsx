import React from 'react';
import { Trophy } from 'lucide-react';

const DailyQuizTeaser = () => {
  return (
    <section className="mt-12">
      <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100 p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-amber-200 text-amber-900">
            <Trophy />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">The Bengaluru Chronicle — Daily Quiz</h3>
            <p className="text-sm text-amber-900/80 mt-1">
              Answer today’s question and climb the weekly leaderboard. Top scorer wins a free Kadam tour!
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {['KR Market', 'Ulsoor Lake', 'Lalbaugh Grounds', 'Shivajinagar'].map((opt) => (
                <button key={opt} className="text-left px-3 py-2 rounded-md bg-white hover:bg-amber-50 border border-amber-200 text-sm font-medium">
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 w-full sm:w-auto">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyQuizTeaser;
