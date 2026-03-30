export function TierIcon({ icon: Icon, color }) {
  return (
    <div style={{
      width: 56, height: 56, borderRadius: '1rem', marginBottom: '1rem',
      background: 'rgba(45, 140, 80, 0.08)', border: '1px solid rgba(45, 140, 80, 0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={26} color={color} strokeWidth={1.5} />
    </div>
  );
}
