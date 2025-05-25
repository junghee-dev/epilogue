import { useState } from 'react'
import './App.css'

interface Entry {
  date: string;
  emotion: string;
  title: string;
  content: string;
}

function App() {
  const [entries, setEntries] = useState<Entry[]>([
    {
      date: '2024년 5월 25일',
      emotion: 'sad',
      title: '힘든 하루였다',
      content: '오늘은 정말 피곤한 하루였다. 여러 가지 일을 처리해야...'
    },
    {
      date: '2024년 5월 23일',
      emotion: 'joy',
      title: '친구와의 커피',
      content: '오후에 친구와 카페에서 편하게 이야기를 나눴다. 정말...'
    }
  ]);

  return (
    <div className="container">
      <h1 className="logo">Epilogue</h1>
      
      <div className="entry-form">
        <img src="/emotions.png" alt="감정 이모지" className="emotions-image" />
        <div className="form-group">
          <input type="date" className="date-input" placeholder="날짜" />
        </div>
        <div className="form-group">
          <select className="emotion-select">
            <option value="" disabled selected>감정</option>
            <option value="neutral">무덤덤</option>
            <option value="sad">슬픔</option>
            <option value="normal">보통</option>
            <option value="down">우울</option>
            <option value="angry">화남</option>
          </select>
        </div>
        <div className="form-group">
          <input type="text" className="title-input" placeholder="제목" />
        </div>
        <div className="form-group">
          <textarea className="content-input" placeholder="내용을 입력하세요" />
        </div>
      </div>

      <div className="entries">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <div className="entry-header">
              <div className="entry-date">{entry.date}</div>
              <div className={`emotion-icon ${entry.emotion}`}>
                {entry.emotion === 'joy' ? '😊' : '😔'}
              </div>
            </div>
            <h2 className="entry-title">{entry.title}</h2>
            <p className="entry-content">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App 