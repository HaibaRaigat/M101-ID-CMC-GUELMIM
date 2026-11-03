import React, { useState } from 'react';
import { Compass, RotateCcw, Sparkles, CheckSquare, ArrowRight, Trophy, Briefcase, Wrench } from 'lucide-react';
import { SIMULATOR_QUESTIONS, INFRA_OPTIONS } from '../data/courseData';
import { calculateCareerMatch, OptionId } from '../utils/courseLogic';

interface CareerSimulatorProps {
  onSelectRecommendedOption: (id: OptionId) => void;
}

export const CareerSimulator: React.FC<CareerSimulatorProps> = ({ onSelectRecommendedOption }) => {
  const [answers, setAnswers] = useState<OptionId[]>([]);

  const handleSelectChoice = (questionIndex: number, targetOption: OptionId) => {
    const updated = [...answers];
    updated[questionIndex] = targetOption;
    setAnswers(updated);
  };

  const resetQuiz = () => {
    setAnswers([]);
  };

  const answeredList = answers.filter(Boolean);
  const answeredCount = answeredList.length;
  const isComplete = answeredCount === SIMULATOR_QUESTIONS.length;
  const scores = calculateCareerMatch({ answers: answeredList });
  const topScore = scores[0];
  const topOption = INFRA_OPTIONS.find((o) => o.id === topScore.id) || INFRA_OPTIONS[0];

  const scoreByOptionId: Record<string, number> = {};
  scores.forEach((s) => {
    scoreByOptionId[s.id] = answeredCount > 0 ? s.percentage : 25;
  });

  return (
    <section id="career-simulator" className="scroll-mt-20 py-12 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Brochure Header Banner */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-[#139A74] text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-3">
          <Compass className="w-4 h-4" />
          SIMULATEUR D’ORIENTATION · CHOISISSEZ VOTRE VOIE EN 2ÈME ANNÉE
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-8 border-[#EA5B0C] pl-5 py-1">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Quelle option est faite <span className="text-[#EA5B0C]">pour vous ?</span>
            </h2>
            <p className="text-slate-600 text-base mt-1 max-w-2xl">
              Répondez à ces 5 situations concrètes. Le simulateur calcule en direct l’option d’Infrastructure Digitale qui correspond le mieux à votre façon de réfléchir.
            </p>
          </div>
          {answeredCount > 0 && (
            <button
              onClick={resetQuiz}
              className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FEF2EB] text-slate-800 font-black text-xs uppercase tracking-wider border-2 border-[#EA5B0C] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#EA5B0C]" />
              Recommencer ({answeredCount}/{SIMULATOR_QUESTIONS.length})
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 5 Square Metro Question Tiles */}
        <div className="lg:col-span-7 space-y-5">
          {SIMULATOR_QUESTIONS.map((q, qIdx) => {
            const currentChoice = answers[qIdx];
            return (
              <div
                key={q.id}
                className={`border-2 transition-all bg-white ${
                  currentChoice ? 'border-[#139A74]' : 'border-slate-300'
                }`}
              >
                {/* Top Square Question Bar */}
                <div
                  className={`px-5 py-3 flex items-center justify-between text-white ${
                    currentChoice ? 'bg-[#139A74]' : 'bg-[#005596]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-[#EA5B0C] text-white font-black text-xs flex items-center justify-center">
                      0{qIdx + 1}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider">
                      {q.contextHint}
                    </span>
                  </div>
                  {currentChoice && (
                    <span className="text-[11px] font-black uppercase tracking-wider bg-white text-[#139A74] px-2 py-0.5">
                      Répondu
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4">
                    {q.question}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.choices.map((choice, cIdx) => {
                      const isPicked = currentChoice === choice.optionId;
                      return (
                        <button
                          key={cIdx}
                          onClick={() => handleSelectChoice(qIdx, choice.optionId)}
                          className={`text-left p-3.5 border-2 transition-all flex flex-col justify-between cursor-pointer ${
                            isPicked
                              ? 'bg-[#FEF2EB] border-[#EA5B0C] text-slate-900 shadow-sm'
                              : 'bg-[#F4F8FB] border-slate-200 hover:border-[#009FE3] hover:bg-[#EAF6FC] text-slate-800'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="text-xs font-black text-slate-900 leading-snug">
                              {choice.label}
                            </span>
                            <div
                              className={`w-5 h-5 shrink-0 flex items-center justify-center border ${
                                isPicked
                                  ? 'bg-[#EA5B0C] border-[#EA5B0C] text-white'
                                  : 'bg-white border-slate-300 text-transparent'
                              }`}
                            >
                              <CheckSquare className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">{choice.example}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Live Career Radar & Result Square Tile */}
        <div className="lg:col-span-5 lg:sticky lg:top-16 bg-white border-2 border-[#EA5B0C]">
          {/* Header Banner */}
          <div className="bg-[#EA5B0C] text-white px-6 py-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-black uppercase tracking-widest text-white/90">
                PROFIL D’ORIENTATION EN DIRECT
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight">
                Résultat du Simulateur M101
              </h3>
            </div>
            <div className="bg-white text-[#EA5B0C] px-3 py-1 text-sm font-black">
              {answeredCount} / {SIMULATOR_QUESTIONS.length}
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Live Option Match Bars in Square Tiles */}
            <div className="space-y-3">
              {INFRA_OPTIONS.map((opt) => {
                const pct = scoreByOptionId[opt.id] ?? 25;
                const isWinner = answeredCount > 0 && opt.id === topOption.id;
                return (
                  <div
                    key={opt.id}
                    className={`p-3 border-2 transition-colors ${
                      isWinner ? 'bg-[#FEF2EB] border-[#EA5B0C]' : 'bg-[#F4F8FB] border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-black mb-1.5">
                      <span className="uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <span
                          className="w-3 h-3 inline-block"
                          style={{ backgroundColor: opt.colorHex }}
                        />
                        {opt.shortName}
                      </span>
                      <span
                        className="px-2 py-0.5 text-white text-[11px]"
                        style={{ backgroundColor: isWinner ? '#EA5B0C' : opt.colorHex }}
                      >
                        {pct}%
                      </span>
                    </div>
                    <div className="h-3 w-full bg-white border border-slate-300 overflow-hidden">
                      <div
                        className="h-full transition-all duration-300"
                        style={{
                          width: `${Math.max(pct, 6)}%`,
                          backgroundColor: opt.colorHex,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recommendation Square Card */}
            {answeredCount === 0 ? (
              <div className="bg-[#EAF6FC] border-2 border-[#009FE3] p-6 text-center">
                <div className="w-12 h-12 bg-[#009FE3] text-white flex items-center justify-center mx-auto mb-3 font-black">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-sm font-black text-[#005596] uppercase mb-1">
                  Cliquez sur vos réponses à gauche
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Dès la première réponse, ce tableau compare vos affinités avec les 4 options de 2ème année.
                </p>
              </div>
            ) : (
              <div className="border-2 border-[#005596] bg-[#F4F8FB]">
                <div
                  className="px-4 py-2.5 text-white flex items-center justify-between"
                  style={{ backgroundColor: topOption.colorHex }}
                >
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                    <Trophy className="w-4 h-4" />
                    {isComplete ? 'OPTION RECOMMANDÉE POUR VOUS' : 'OPTION EN TÊTE ACTUELLEMENT'}
                  </div>
                  <span className="text-xs font-black bg-white/20 px-2 py-0.5">2ème Année</span>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <h4 className="text-lg font-black text-slate-900 uppercase leading-snug">
                      {topOption.fullName}
                    </h4>
                    <p className="text-xs font-bold text-[#EA5B0C] mt-1">{topScore.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3.5 border-l-4 border-[#EA5B0C]">
                    {topOption.simpleDefinition}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-3 border border-slate-200">
                      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase text-[#005596] mb-2">
                        <Briefcase className="w-3.5 h-3.5 text-[#EA5B0C]" />
                        Métiers visés
                      </div>
                      <ul className="space-y-1 text-xs font-bold text-slate-800">
                        {topOption.careerRoles.map((job, idx) => (
                          <li key={idx}>• {job}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-3 border border-slate-200">
                      <div className="flex items-center gap-1.5 text-[11px] font-black uppercase text-[#139A74] mb-2">
                        <Wrench className="w-3.5 h-3.5 text-[#139A74]" />
                        Outils phares
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {topOption.modernTools2026.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-[#E8F7F2] text-[#139A74] text-[11px] font-black"
                          >
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectRecommendedOption(topOption.id)}
                    className="w-full py-3 px-4 bg-[#EA5B0C] hover:bg-[#d45008] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    Afficher la fiche complète de cette option
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
