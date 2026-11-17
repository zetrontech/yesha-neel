// Yesha & Neel — all invitation copy lives here (plus the JSX in platform/m22434.js).
// Exact venue pins (same places as the client's share links: Avsar Party Plot & Banquet,
// Sheth Shree Manilal Chunilal Visha Oshwal Jain Hostel hall, Praveg's Grand Eulogia).
// "dir" links open the Google Maps app straight into directions to the venue.
const dir = (lat, lng) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`
export const MAP_HALL = dir(22.5525392, 72.9321729)
export const MAP_AVSAR = dir(22.5547237, 72.9855661)
// Reception: the client's own Google share link (their exact pin)
export const MAP_RECEPTION = 'https://share.google/GzXrHNXe3X7TGiIjR'
export const QR_HALL = MAP_HALL
export const QR_AVSAR = MAP_AVSAR
export const QR_RECEPTION = MAP_RECEPTION

export const EVENTS = [
  {
    id: 'mehndi', title: 'Mehndi', sub: 'Ceremony', date: 'Friday, 27 November 2026',
    rows: [['Time', '2:00 PM onwards']],
    venue: ['Shree Visha Oswal Hall', 'Vidhyanagar'], map: MAP_HALL, qrUrl: QR_HALL, qr: true,
  },
  {
    id: 'sangeet', title: 'Sangeet', sub: 'Ceremony', date: 'Friday, 27 November 2026',
    rows: [['Time', '4:30 PM onwards'], ['Dinner', '5:00 PM onwards']],
    venue: ['Shree Visha Oswal Hall', 'Vidhyanagar'], map: MAP_HALL, qrUrl: QR_HALL, qr: true,
  },
  {
    id: 'manglik', title: 'Manglik Prasango', sub: '', date: 'Sunday, 29 November 2026',
    rows: [['Mandap Muhurat', '8:00 AM'], ['Mosalu', '8:30 AM', 'Shri Hasmukhlal Mohanlal Shah (Valvodwala), Baroda'], ['Haldi', '11:00 AM'], ['Lunch', '11:30 AM']],
    venue: ['Avsar Party Plot'], addr: 'Near Chikhodra Crossing, Chikhodra Road, Anand – 388001', map: MAP_AVSAR, qrUrl: QR_AVSAR, qr: true,
  },
  {
    id: 'wedding', title: 'Wedding', sub: 'Ceremony', date: 'Sunday, 29 November 2026',
    rows: [['Hastmelap', '6:30 PM', null, true], ['Dinner', '5:00 PM onwards']],
    venue: ['Avsar Party Plot'], addr: 'Near Chikhodra Crossing, Chikhodra Road, Anand – 388001', map: MAP_AVSAR, qrUrl: QR_AVSAR, qr: true,
  },
  {
    id: 'reception', title: 'Reception', sub: '', date: 'Monday, 30 November 2026',
    rows: [['Time', '7:00 PM onwards']],
    venue: ["Praveg's Grand Eulogia"], addr: 'Sindhu Bhavan Road, Near Taj Skyline, Near S.G. Highway, Thaltej, Ahmedabad – 380058', map: MAP_RECEPTION, qrUrl: QR_RECEPTION, qr: true,
  },
]
