// Yesha & Neel — all invitation copy lives here (plus the JSX in platform/m22434.js).
export const MAP_HALL = 'https://maps.app.goo.gl/WY5mCa8u9aD4GBDZ9'
export const MAP_AVSAR = 'https://maps.app.goo.gl/ZZaXgHGB8YwPiD4P7'
const REC_ADDR = "Praveg's Grand Eulogia, Sindhu Bhavan Road, Near Taj Skyline, Near S.G. Highway, Thaltej, Ahmedabad 380058"
export const MAP_RECEPTION = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(REC_ADDR)

export const EVENTS = [
  {
    id: 'mehndi', title: 'Mehndi', sub: 'Ceremony', date: 'Friday, 27 November 2026',
    rows: [['Time', '2:00 PM onwards']],
    venue: ['Shree Visha Oswal Hall', 'Vidhyanagar'], map: MAP_HALL, qr: true,
  },
  {
    id: 'sangeet', title: 'Sangeet', sub: 'Ceremony', date: 'Friday, 27 November 2026',
    rows: [['Time', '4:30 PM onwards'], ['Dinner', '5:00 PM onwards']],
    venue: ['Shree Visha Oswal Hall', 'Vidhyanagar'], map: MAP_HALL, qr: true,
  },
  {
    id: 'manglik', title: 'Manglik Prasango', sub: '', date: 'Sunday, 29 November 2026',
    rows: [['Mandap Muhurat', '8:00 AM'], ['Mosalu', '8:30 AM', 'Shri Hasmukhlal Mohanlal Shah (Valvodwala), Baroda'], ['Haldi', '11:00 AM'], ['Lunch', '11:30 AM']],
    venue: ['Avsar Party Plot'], addr: 'Near Chikhodra Crossing, Chikhodra Road, Anand – 388001', map: MAP_AVSAR, qr: true,
  },
  {
    id: 'wedding', title: 'Wedding', sub: 'Ceremony', date: 'Sunday, 29 November 2026',
    rows: [['Pre-Sunset Dinner', '5:00 PM'], ['Hastmelap', '6:30 PM'], ['Followed by Dinner', '7:00 PM']],
    venue: ['Avsar Party Plot'], addr: 'Near Chikhodra Crossing, Chikhodra Road, Anand – 388001', map: MAP_AVSAR, qr: true,
  },
  {
    id: 'reception', title: 'Reception', sub: '', date: 'Monday, 30 November 2026',
    rows: [['Time', '7:00 PM onwards']],
    venue: ["Praveg's Grand Eulogia"], addr: 'Sindhu Bhavan Road, Near Taj Skyline, Near S.G. Highway, Thaltej, Ahmedabad – 380058', map: MAP_RECEPTION, qr: true,
  },
]
