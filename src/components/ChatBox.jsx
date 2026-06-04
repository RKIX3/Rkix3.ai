export function ChatBox({ result }) {
  return (
    <section className="chat-box">
      <h3>RKIX3 AI Output</h3>
      {result ? (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      ) : (
        <p>Nhập prompt để sinh blueprint offline an toàn.</p>
      )}
    </section>
  );
}
