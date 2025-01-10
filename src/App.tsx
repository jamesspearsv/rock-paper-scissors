import Token from './components/Token';

export default function App() {
  return (
    <>
      <h1>App</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Token token={'rock'} />
        <Token token={'paper'} />
        <Token token={'scissors'} />
      </div>
    </>
  );
}
