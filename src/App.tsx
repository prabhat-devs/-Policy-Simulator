import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { PolicySimulator } from './components/PolicySimulator';

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {!started ? (
        <LandingPage onStart={() => setStarted(true)} />
      ) : (
        <PolicySimulator onBack={() => setStarted(false)} />
      )}
    </div>
  );
}
