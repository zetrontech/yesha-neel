// Yesha & Neel — all invitation copy lives here (plus the JSX in platform/m22434.js).
// Exact places, looked up on Google Maps web (place pages + coordinates).
const place = (name, lat, lng, data) =>
  `https://www.google.com/maps/place/${name}/@${lat},${lng},17z/data=${data}!8m2!3d${lat}!4d${lng}`
const pin = (lat, lng) => `https://maps.google.com/?q=${lat},${lng}` // short link for QR codes
export const MAP_HALL = place('Sheth+Shree+Manilal+Chunilal+Visha+Oshwal+Jain+Hostel', 22.5525392, 72.9321729, '!3m1!4b1!4m6!3m5!1s0x395e4e7716c51e79:0xe88977b210ca4f25')
export const MAP_AVSAR = place('Avsar+Party+Plot+%26+Banquet', 22.5547237, 72.9855661, '!3m1!4b1!4m6!3m5!1s0x395e4951a22769d9:0xa1b9a0b1f286040e')
export const MAP_RECEPTION = place("Praveg's+Grand+Eulogia", 23.0434587, 72.4812578, '!4m9!3m8!1s0x395e9bb086af3af7:0xff6557a8cf0b926e!5m2!4m1!1i2')
export const QR_HALL = pin(22.5525392, 72.9321729)
export const QR_AVSAR = pin(22.5547237, 72.9855661)
export const QR_RECEPTION = pin(23.0434587, 72.4812578)

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
