// Site copy. All names, numbers and addresses are sample data for the internship project.

export const services = [
  {
    id: 'warehousing', title: 'Warehousing', icon: 'warehouse',
    short: 'Secure, climate-aware storage with real-time inventory visibility across all racks.',
    detail: 'Your stock sits in racked, CCTV-monitored warehouses in Solapur, Pune, Hyderabad and Bengaluru. Every pallet and bin has a scanned location, so you can see exactly what you hold at any hour.',
    includes: ['Pallet, shelf and bin storage', 'Temperature-logged zones for pharma and cosmetics', '24x7 CCTV and access-controlled entry', 'Live stock view in your dashboard'],
  },
  {
    id: 'fulfilment', title: 'Order fulfilment', icon: 'box',
    short: 'Pick, pack and ship from one place, with same-day dispatch on orders before cut-off.',
    detail: 'Orders from your store reach our floor within minutes. Pickers work from scanned pick lists and every parcel is weighed before it leaves, so the wrong item rarely goes out.',
    includes: ['Same-day dispatch on orders in by 2 pm', 'Custom packaging and inserts', 'Kitting and bundling', 'Weight check on every parcel'],
  },
  {
    id: 'transportation', title: 'Transportation', icon: 'truck',
    short: 'Road, rail and air freight booked and tracked through a single partner.',
    detail: 'We book full and part truckloads, rail and air freight with vetted carriers and track every leg in one place. Paperwork like e-way bills is handled before the truck is loaded.',
    includes: ['Full and part truckload road freight', 'Rail and air for long hauls', 'GPS-tracked vehicles', 'E-way bill and invoice handling'],
  },
  {
    id: 'last-mile', title: 'Last-mile delivery', icon: 'pin',
    short: 'Delivery slots, proof of delivery and customer notifications included.',
    detail: 'Our riders and courier partners cover 19,000+ PIN codes. Your customer gets an SMS with a live tracking link, and you get a photo or OTP as proof once the parcel is handed over.',
    includes: ['Cash on delivery with weekly remittance', 'OTP and photo proof of delivery', 'Up to 3 delivery attempts', 'Slot-based delivery in metro cities'],
  },
  {
    id: 'returns', title: 'Returns handling', icon: 'returns',
    short: 'Inspect, restock or refurbish returned goods within 48 hours.',
    detail: 'Returned parcels are opened, checked and graded within 48 hours. Good stock goes back on the shelf. The rest is set aside with photos so you can decide what happens to it.',
    includes: ['Reverse pickup from the customer', 'Quality grading with photos', 'Restock, refurbish or write-off', 'Refund triggers sent to your store'],
  },
  {
    id: 'inventory', title: 'Inventory control', icon: 'chart',
    short: 'Cycle counts, batch and expiry tracking, and weekly stock reports.',
    detail: 'Weekly cycle counts and batch-level tracking keep the numbers in your dashboard and the stock on our shelves in step. You hear about low stock before your store runs out.',
    includes: ['Batch, lot and expiry tracking', 'First-expiry-first-out picking', 'Low-stock alerts', 'Weekly stock and ageing reports'],
  },
]

export const steps = [
  ['Send us your stock', 'warehouse', 'We receive, inspect and shelve your goods.'],
  ['Orders sync in', 'plug', 'Connect your store or ERP. Orders reach the warehouse floor instantly.'],
  ['We pick and pack', 'scan', 'Items are scanned at every step to avoid errors.'],
  ['Delivered and tracked', 'pin', 'You and your customer follow the shipment until it arrives.'],
]

export const stats = [['120+', 'Active clients'], ['4', 'Warehouses'], ['99.2%', 'On-time delivery'], ['36', 'States & UTs served']]

export const industries = [
  { name: 'E-commerce', icon: 'cart', metric: '5x peak capacity', text: 'Sale days can bring five times the usual orders. We add pickers and shifts a week ahead so dispatch stays same day.' },
  { name: 'Pharma', icon: 'pill', metric: 'Expiry-first picking', text: 'Temperature-logged storage, batch tracking and expiry-first picking keep medicines compliant and in date.' },
  { name: 'Automotive', icon: 'car', metric: '40,000+ SKUs handled', text: 'Spare parts in thousands of sizes, stored by bin and picked by scan, so the right part reaches the workshop.' },
  { name: 'FMCG', icon: 'bag', metric: 'Weekly distributor runs', text: 'Fast-moving stock replenished to distributors and modern trade stores on fixed weekly routes.' },
  { name: 'Electronics', icon: 'chip', metric: 'Serial-number tracking', text: 'High-value items kept in caged zones, serial numbers scanned in and out, and every shipment insured in transit.' },
  { name: 'Apparel', icon: 'shirt', metric: '48-hour returns', text: 'Size and colour variants, returns that need steaming and re-tagging, and packaging that looks good on arrival.' },
]

export const integrations = ['Shopify', 'WooCommerce', 'Amazon', 'Flipkart', 'Meesho', 'Unicommerce', 'Tally', 'Zoho Inventory']

export const testimonials = [
  { quote: 'We moved 9,000 SKUs to Logicrew over two weekends. Dispatch went from three days to the same day.', name: 'Priya Nair', role: 'Operations Head, Kavya Naturals' },
  { quote: 'Returns used to sit in our office for weeks. Now they are graded and back on the shelf in two days.', name: 'Arjun Mehta', role: 'Founder, Trailblaze Footwear' },
  { quote: 'Batch and expiry tracking is why we switched. Our near-expiry write-offs fell by 40% in one quarter.', name: 'Sneha Kulkarni', role: 'Supply Chain Lead, Medisure Pharma' },
]

export const faqs = [
  ['Is there a minimum order volume?', 'No. Most clients start between 300 and 1,000 orders a month. Your per-order price drops as you grow, not before.'],
  ['How long does onboarding take?', 'Usually 7 to 10 working days: one planning call, connecting your store and receiving your first stock.'],
  ['Can I see my stock in real time?', 'Yes. Your dashboard shows stock by location, open orders and shipments, refreshed every few minutes.'],
  ['Do you handle cash on delivery?', 'Yes. Delivery partners collect COD and we send it to your bank account every week with a statement.'],
  ['What if a parcel is damaged or lost?', 'Every shipment is insured up to its declared value. Claims are settled within 15 working days.'],
  ['Where do you deliver?', 'To 19,000+ PIN codes across all 28 states and 8 union territories, through our riders and courier partners.'],
]

export const serviceFaqs = [
  ['Can I use only one service?', 'Yes. Many clients start with warehousing and fulfilment, then add returns or transport once they see how it runs.'],
  ['Do you supply packaging?', 'Standard boxes, mailers and tape are included. If you have branded packaging, we store it and use it at no extra handling charge.'],
  ['What is the daily cut-off for dispatch?', 'Orders that reach us by 2 pm leave the same day. Later orders go out the next morning.'],
  ['How are storage charges worked out?', 'By the pallet. We count on the 1st and 15th of each month and bill the average of the two.'],
  ['Can you ship to marketplaces like Amazon and Flipkart?', 'Yes. We prepare and send stock to marketplace warehouses with the labels and paperwork they ask for.'],
]

export const plans = [
  { name: 'Starter', price: '₹28', unit: 'per order', fit: 'Up to 1,000 orders a month', features: ['Storage up to 50 pallets', 'Pick, pack and dispatch', 'Standard packaging', 'Email support'] },
  { name: 'Growth', price: '₹22', unit: 'per order', fit: '1,001 to 10,000 orders a month', featured: true, features: ['Storage up to 300 pallets', 'Custom packaging and inserts', 'Returns grading included', 'Dedicated account manager'] },
  { name: 'Enterprise', price: 'Custom', unit: 'quote', custom: true, fit: 'Over 10,000 orders or multiple cities', features: ['Reserved warehouse space', 'Stock split across cities', 'API and ERP integration', '24x7 priority support'] },
]

export const hubs = [
  { city: 'Solapur', type: 'Main warehouse', area: '1,20,000 sq ft', address: 'Plot 14, MIDC Chincholi, Solapur, Maharashtra 413255' },
  { city: 'Pune', type: 'Warehouse and sorting hub', area: '45,000 sq ft', address: 'Gat 221, Chakan Industrial Area, Pune, Maharashtra 410501' },
  { city: 'Hyderabad', type: 'Warehouse', area: '80,000 sq ft', address: 'Survey 88, Shamshabad, Hyderabad, Telangana 501218' },
  { city: 'Bengaluru', type: 'Warehouse', area: '65,000 sq ft', address: 'Hoskote Industrial Area, Bengaluru, Karnataka 562114' },
]

export const milestones = [
  ['2019', 'Started in Solapur', 'One 20,000 sq ft warehouse, a team of 11 and our first six clients.'],
  ['2021', 'Pune hub opens', 'A sorting centre near Chakan brought next-day delivery to Mumbai and Pune.'],
  ['2023', 'Into South India', 'Warehouses in Hyderabad and Bengaluru cut delivery times in the south by a day.'],
  ['2025', '100 clients', 'Crossed 100 brands and 1.5 million orders shipped in a single year.'],
  ['2026', 'Every state', 'Delivery coverage now reaches all 28 states and 8 union territories.'],
]

export const leaders = [
  { name: 'Yogesh Kedari', role: 'Founder and CEO', bio: '19+ years building and scaling businesses. Sets the direction for Logicrew and looks after finance and growth.' },
  { name: 'Mahesh Kedari', role: 'Co-founder and CTO', bio: '17+ years in software. Leads the platform behind the client dashboard and the store integrations.' },
  { name: 'Preetesh Dutt', role: 'Co-founder and Head of Sales', bio: '16+ years in business development. Builds the partnerships and client relationships that bring brands to Logicrew.' },
]

export const perks = [
  ['shield', 'Health cover', 'Medical insurance for you, your spouse, children and parents.'],
  ['clock', 'Fair shifts', 'Fixed rosters published two weeks ahead, with night-shift allowance.'],
  ['chart', 'Room to grow', 'A ₹20,000 yearly learning budget and promotions from within first.'],
]

export const roles = [
  { title: 'Warehouse Supervisor', team: 'Operations', city: 'Solapur', type: 'Full-time' },
  { title: 'Fleet Coordinator', team: 'Transport', city: 'Pune', type: 'Full-time' },
  { title: 'Inventory Analyst', team: 'Operations', city: 'Hyderabad', type: 'Full-time' },
  { title: 'Key Account Manager', team: 'Client Success', city: 'Bengaluru', type: 'Full-time' },
  { title: 'Frontend Developer', team: 'Technology', city: 'Remote', type: 'Full-time' },
]

export const contact = {
  email: 'info@logicrew.example',
  careersEmail: 'careers@logicrew.example',
  phone: '+91 00000 00000',
  hours: [['Sales and support', 'Mon to Sat, 9:00 to 19:00'], ['Warehouse operations', 'All days, 24 hours']],
}
