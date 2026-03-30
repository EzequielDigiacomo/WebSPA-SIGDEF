export function IconBox({ icon: Icon, color = 'var(--verde-sig)' }) {
  return (
    <div style={{
      width: 48, height: 48, borderRadius: '0.75rem', flexShrink: 0,
      background: 'rgba(45, 140, 80, 0.1)', border: '1px solid rgba(45, 140, 80, 0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={22} color={color} strokeWidth={1.75} />
    </div>
  );
}
