// Company contact details in one place. They were previously retyped in the
// header, footer, contact page, product pages and WhatsApp buttons.
export const COMPANY = {
  name: 'Myco Medic Sdn Bhd',
  shortName: 'Myco Medic',
  since: 2010,
  phone: '+603-8957 0599',
  phoneHref: 'tel:+60389570599',
  whatsapp: '60123822001',
  whatsappDisplay: '+60 12-382 2001',
  salesEmail: 'sales@mycomedic.com.my',
  infoEmail: 'info@mycomedic.com.my',
  addressLines: ['No. 2A-G Jalan Sierra 10/3', 'Section 16 Sierra', '47120 Puchong', 'Selangor, Malaysia'],
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=No.+2A-G+Jalan+Sierra+10%2F3%2C+Section+16+Sierra%2C+47120+Puchong%2C+Selangor%2C+Malaysia',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Myco+Medic+Sdn+Bhd+Puchong',
  shopeeUrl: 'https://shopee.com.my/healthcare_marts?categoryId=100001&entryPoint=ShopByPDP&itemId=8606053109',
  hours: [
    { days: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 1:00 PM' }
  ]
}

export const CAREERS = {
  contactName: 'Mr. Bryan',
  email: 'bryan@mycomedic.com.my',
  whatsapp: '60123375935',
  whatsappDisplay: '+60 12-337 5935'
}

export function whatsappLink(message, phone = COMPANY.whatsapp) {
  const digits = String(phone).replace(/[^\d]/g, '')
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}

export function mailtoLink(to, subject, body) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${to}${query ? `?${query}` : ''}`
}
