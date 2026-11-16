import QRCode from 'qrcode'

// Inline SVG QR code (sync, no network). Gold-bordered card to match the invitation.
export default function QrCode({ url, size = 120, color = '#5a1f1a' }) {
  const qr = QRCode.create(url, { errorCorrectionLevel: 'M' })
  const n = qr.modules.size
  const data = qr.modules.data
  const q = 2
  let d = ''
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (data[y * n + x]) d += `M${x + q} ${y + q}h1v1h-1z`
  return (
    <svg
      role="img"
      aria-label="QR code for the venue location"
      viewBox={`0 0 ${n + q * 2} ${n + q * 2}`}
      width="100%"
      height="100%"
      shapeRendering="crispEdges"
      style={{ display: 'block', background: '#fffaf0', borderRadius: 6, border: '1px solid rgba(160,124,69,.75)', boxShadow: '0 4px 14px rgba(120,90,50,.18)' }}
    >
      <path d={d} fill={color} />
    </svg>
  )
}
