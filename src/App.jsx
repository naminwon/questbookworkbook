import React, { useState } from 'react';
import { Trash2, Plus, Info, ChevronDown, Minus } from 'lucide-react';

export default function QuestbookCreator() {
  const [workbookTitle, setWorkbookTitle] = useState('몸으로 만나는 컴퓨팅');
  const [targetAudience, setTargetAudience] = useState('중학생(13-15세)');
  const [subject, setSubject] = useState('정보');
  const [learningGoal, setLearningGoal] = useState('피지컬 컴퓨팅의 개념과 활용 방법을 이해한다.');
  const [detailedGoals, setDetailedGoals] = useState([
    '피지컬 컴퓨팅의 개념',
    '피지컬 컴퓨팅의 활용',
    '피지컬 컴퓨팅의 활용'
  ]);
  const [language, setLanguage] = useState('한국어');
  
  const [questionTypes, setQuestionTypes] = useState({
    '선택형': 3,
    '다중 선택형': 3,
    '단답형': 3,
    '다중 단답형': 3,
    '연결형': 3,
    'OX선택형': 3,
    '순서형': 3
  });

  // 학습 대상 옵션
  const targetAudiences = [
    '초등 1-2학년(7-8세)',
    '초등 3-4학년(9-10세)',
    '초등 5-6학년(11-12세)',
    '중학생(13-15세)',
    '고등학생(16-18세)'
  ];

  // 과목 옵션
  const subjects = [
    '국어', '영어', '수학', '과학', '역사', '한국사', 
    '중국어', '일본어', '정보', '사회', '도덕', '음악', '미술', '체육'
  ];

  const addDetailedGoal = () => {
    if (detailedGoals.length < 5) {
      setDetailedGoals([...detailedGoals, '피지컬 컴퓨팅의 활용']);
    }
  };

  const removeDetailedGoal = (index) => {
    setDetailedGoals(detailedGoals.filter((_, i) => i !== index));
  };

  const updateDetailedGoal = (index, value) => {
    const newGoals = [...detailedGoals];
    newGoals[index] = value;
    setDetailedGoals(newGoals);
  };

  const updateQuestionCount = (type, delta) => {
    setQuestionTypes(prev => ({
      ...prev,
      [type]: Math.max(0, Math.min(100, prev[type] + delta))
    }));
  };

  const totalQuestions = Object.values(questionTypes).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-purple-600">Questboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-slate-600">사만원</button>
            <button className="text-sm text-purple-600 font-medium">👤</button>
            <button className="text-sm text-slate-600">📱</button>
            <button className="text-sm text-slate-600">🗑️</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium text-slate-800 mb-2">피지컬 컴퓨팅</h2>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
            중학생이 피지컬 컴퓨팅에 대해 이해할 수 있는 문제집을 만들어줘.
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-600 mb-4">
            업로드해주신 문서와 요청사항을 반영하여, 교육 자료를 생성합니다. 
          </p>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="text-purple-600">🔍</span>
              <p>검색 - 워크북을 만들기 위해 관련 내용을 조사하고 있습니다.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">📝</span>
              <p>분석 - 워크북 제작에 앞서 제작 계획서를 준비하고 있습니다.</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            워크북 제작을 위한 계획서를 작성했습니다.<br />
            아래 계획을 검토하고, 문제 유형과 문항 수를 조정한 후 최종 생성을 시작하세요.
          </p>
        </div>

        {/* Creator Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-900">제작 계획서</h3>
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </div>
          
          <p className="text-sm text-slate-600 mb-8">
            AI가 분석한 교육자료 기반의 프로젝트 구성 계획입니다. 
          </p>

          {/* 1. 워크북 제목 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-slate-900">1.</span>
              <h4 className="text-lg font-bold text-slate-900">워크북 제목</h4>
            </div>
            <input
              type="text"
              value={workbookTitle}
              onChange={(e) => setWorkbookTitle(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-slate-50"
              placeholder="워크북 제목을 입력하세요"
            />
          </div>

          {/* 2. 학습 대상 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-slate-900">2.</span>
              <h4 className="text-lg font-bold text-slate-900">학습 대상</h4>
            </div>
            <div className="relative">
              <select
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50 appearance-none cursor-pointer"
              >
                {targetAudiences.map((audience) => (
                  <option key={audience} value={audience}>{audience}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 3. 과목 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-slate-900">3.</span>
              <h4 className="text-lg font-bold text-slate-900">과목</h4>
            </div>
            <div className="relative">
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50 appearance-none cursor-pointer"
              >
                {subjects.map((subj) => (
                  <option key={subj} value={subj}>{subj}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* 4. 학습 목표 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-slate-900">4.</span>
              <h4 className="text-lg font-bold text-slate-900">학습 목표</h4>
            </div>
            <input
              type="text"
              value={learningGoal}
              onChange={(e) => setLearningGoal(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-slate-50"
              placeholder="학습 목표를 입력하세요"
            />
          </div>

          {/* 5. 세부 학습 목표 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-slate-900">5.</span>
              <h4 className="text-lg font-bold text-slate-900">세부 학습 목표</h4>
            </div>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
              <div className="space-y-3">
                {detailedGoals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={goal}
                      onChange={(e) => updateDetailedGoal(index, e.target.value)}
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      placeholder="세부 학습 목표를 입력하세요"
                    />
                    <button
                      onClick={() => removeDetailedGoal(index)}
                      className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors flex-shrink-0"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <button
                onClick={addDetailedGoal}
                disabled={detailedGoals.length >= 5}
                className={`w-full mt-4 py-3 rounded-lg border-2 border-dashed transition-colors ${
                  detailedGoals.length >= 5
                    ? 'border-slate-300 text-slate-400 cursor-not-allowed'
                    : 'border-purple-400 text-purple-600 hover:bg-purple-50'
                }`}
              >
                <span className="flex items-center justify-center gap-2 font-medium">
                  <Plus className="w-5 h-5" />
                  학습 키워드 추가
                </span>
              </button>
              
              {detailedGoals.length >= 5 && (
                <p className="text-xs text-slate-500 mt-2 text-center">최대 5개까지 추가할 수 있습니다.</p>
              )}
            </div>
          </div>

          {/* 6. 문제 유형 및 문항 수 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-slate-900">6.</span>
              <h4 className="text-lg font-bold text-slate-900">문제 유형 및 문항 수</h4>
            </div>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(questionTypes).map(([type, count]) => (
                  <div key={type} className="bg-white rounded-lg border border-slate-200 p-4">
                    <div className="flex items-center gap-1 mb-3">
                      <Info className="w-4 h-4 text-slate-400" />
                      <h5 className="font-medium text-slate-800 text-sm">{type}</h5>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => updateQuestionCount(type, -1)}
                        className="w-8 h-8 rounded-full border border-slate-300 hover:bg-slate-100 flex items-center justify-center font-bold text-slate-600"
                      >
                        -
                      </button>
                      <span className="text-xl font-bold text-slate-900 w-8 text-center">{count}</span>
                      <button
                        onClick={() => updateQuestionCount(type, 1)}
                        className="w-8 h-8 rounded-full border border-slate-300 hover:bg-slate-100 flex items-center justify-center font-bold text-slate-600"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-center">
                      약 {count * 2}분 소요 예상
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-200">
                <span className="text-sm text-slate-600">총 문항수</span>
                <span className="text-3xl font-bold text-purple-600">{totalQuestions}</span>
              </div>

              {totalQuestions === 0 && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700 text-center">
                    ⚠️ 최소 1개 이상의 문제를 선택해주세요.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 7. 언어 선택 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-slate-900">7.</span>
              <h4 className="text-lg font-bold text-slate-900">언어</h4>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {['한국어', 'English', '中文', '日本語'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`py-2.5 rounded-lg font-medium transition-all text-sm ${
                    language === lang
                      ? 'bg-purple-100 text-purple-700 border-2 border-purple-400'
                      : 'bg-slate-50 text-slate-600 border border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* 액션 버튼 */}
          <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
            <button className="flex-1 py-3 px-6 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
              취소
            </button>
            <button 
              disabled={totalQuestions === 0}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
                totalQuestions === 0
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200'
              }`}
            >
              워크북 만들기
            </button>
          </div>
        </div>

        {/* Process Information Sections */}
        <div className="mt-8 space-y-6">
          {/* 선택형 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-700 mb-4">
              선택형 문제를 생성하고 있습니다. 
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <span className="text-purple-600">🔍</span>
                <span>분석 - 교육자료에서 핵심 개념과 주요 내용을 추출합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📊</span>
                <span>생성 - 문제와 보기를 생성합니다. 보기의 적절성을 평가합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📝</span>
                <span>검토 - 난이도 및 오류를 검토합니다. </span>
              </p>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              선택형 문제가 완료 되었습니다. 버튼을 클릭하여 내용을 확인하실 수 있습니다. 
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-lg px-3 py-1 text-sm font-medium">
                  💡 선택형
                </div>
                <div>
                  <p className="text-sm text-purple-900 font-medium">생성종료</p>
                </div>
              </div>
              <button className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
                미리보기 →
              </button>
            </div>
          </div>

          {/* 다중 선택형 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-700 mb-4">
              다중 선택형 문제를 생성하고 있습니다. 
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <span className="text-purple-600">🔍</span>
                <span>분석 - 복합적 개념을 파악합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📊</span>
                <span>생성 - 다수의 정답이 있는 문제를 만듭니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📝</span>
                <span>검토 - 오답과 정답을 검증합니다. </span>
              </p>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              다중 선택형 문제가 완료 되었습니다. 버튼을 클릭하여 내용을 확인하실 수 있습니다. 
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-lg px-3 py-1 text-sm font-medium">
                  💡 다중 선택형
                </div>
                <div>
                  <p className="text-sm text-purple-900 font-medium">생성종료</p>
                </div>
              </div>
              <button className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
                미리보기 →
              </button>
            </div>
          </div>

          {/* 단답형 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-700 mb-4">
              단답형 문제를 생성하고 있습니다. 
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <span className="text-purple-600">🔍</span>
                <span>분석 - 핵심 용어와 개념을 파악합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📊</span>
                <span>생성 - 간결한 답을 요구하는 문제를 작성합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📝</span>
                <span>검토 - 정답을 설정합니다. </span>
              </p>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              단답형 문제가 완료 되었습니다. 버튼을 클릭하여 내용을 확인하실 수 있습니다. 
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-lg px-3 py-1 text-sm font-medium">
                  💡 단답형
                </div>
                <div>
                  <p className="text-sm text-purple-900 font-medium">생성종료</p>
                </div>
              </div>
              <button className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
                미리보기 →
              </button>
            </div>
          </div>

          {/* 다중 단답형 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-700 mb-4">
              다중 단답형 문제를 생성하고 있습니다. 
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <span className="text-purple-600">🔍</span>
                <span>분석 - 연관된 개념들을 종합적으로 평가할 수 있는 문제를 설계합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📊</span>
                <span>생성 - 여러 개의 답을 요구하는 문제를 구성합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📝</span>
                <span>검토 - 다양한 표현의 정답을 설정합니다.</span>
              </p>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              다중 단답형 문제가 완료 되었습니다. 버튼을 클릭하여 내용을 확인하실 수 있습니다. 
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-lg px-3 py-1 text-sm font-medium">
                  💡 다중 단답형
                </div>
                <div>
                  <p className="text-sm text-purple-900 font-medium">생성종료</p>
                </div>
              </div>
              <button className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
                미리보기 →
              </button>
            </div>
          </div>

          {/* 연결형 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-700 mb-4">
              연결형 문제를 생성하고 있습니다. 
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <span className="text-purple-600">🔍</span>
                <span>분석 - 관계성을 파악할 수 있는 내용을 파악합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📊</span>
                <span>생성 - 항목의 연결 관계를 설정합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📝</span>
                <span>검토 - 연결 관계의 조합을 검증합니다.</span>
              </p>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              연결형 문제가 완료 되었습니다. 버튼을 클릭하여 내용을 확인하실 수 있습니다. 
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-lg px-3 py-1 text-sm font-medium">
                  💡 연결형
                </div>
                <div>
                  <p className="text-sm text-purple-900 font-medium">생성종료</p>
                </div>
              </div>
              <button className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
                미리보기 →
              </button>
            </div>
          </div>

          {/* OX선택형 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-700 mb-4">
              OX선택형 문제를 생성하고 있습니다. 
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <span className="text-purple-600">🔍</span>
                <span>분석 - 참, 거짓의 판단이 가능한 개념을 추출합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📊</span>
                <span>생성 - 학습 내용의 이해도를 점검하는 문제를 작성합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📝</span>
                <span>검토 - 명확한 명제로 구성되었는지 확인합니다.</span>
              </p>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              OX선택형 문제가 완료 되었습니다. 버튼을 클릭하여 내용을 확인하실 수 있습니다. 
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-lg px-3 py-1 text-sm font-medium">
                  💡 OX선택형
                </div>
                <div>
                  <p className="text-sm text-purple-900 font-medium">생성종료</p>
                </div>
              </div>
              <button className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
                미리보기 →
              </button>
            </div>
          </div>

          {/* 순서형 */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm text-slate-700 mb-4">
              순서형 문제를 생성하고 있습니다. 
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <span className="text-purple-600">🔍</span>
                <span>분석 - 순차적 과정이 있는 내용을 파악합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📊</span>
                <span>생성 - 순서를 섞어서 항목들을 배치합니다. </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-purple-600">📝</span>
                <span>검토 - 순서의 논리적 오류가 없는지 검토합니다.</span>
              </p>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              순서형 문제가 완료 되었습니다. 버튼을 클릭하여 내용을 확인하실 수 있습니다. 
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-lg px-3 py-1 text-sm font-medium">
                  💡 순서형
                </div>
                <div>
                  <p className="text-sm text-purple-900 font-medium">생성종료</p>
                </div>
              </div>
              <button className="text-purple-600 font-medium text-sm hover:underline flex items-center gap-1">
                미리보기 →
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}