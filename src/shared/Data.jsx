const productGroups = [
    {
      id: 1,
      name: 'Airway Management',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      description: 'Daily-use supplies and essentials for clinics and hospitals.'
    },
    {
      id: 2,
      name: 'Medical Equipment',
      icon: 'https://cdn-icons-png.flaticon.com/128/2821/2821593.png',
      description: 'Capital equipment and precision devices for care delivery.'
    },
    {
      id: 3,
      name: 'Safety & Protection',
      icon: 'https://cdn-icons-png.flaticon.com/128/3050/3050525.png',
      description: 'Protective wear and related safety categories.'
    },
    {
      id: 4,
      name: 'Critical Care/ Day Care',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966456.png',
      description: 'Specialized equipment and consumables for critical and day care settings.'
    },
    {
      id: 5,
      name: 'Disposable Pack',
      icon: 'https://cdn-icons-png.flaticon.com/128/992/992651.png',
      description: 'Single-use procedure packs and disposables for efficient care.'
    },
    {
      id: 6,
      name: 'General Cleaning Brushes & Accessories',
      icon: 'https://cdn-icons-png.flaticon.com/128/6392/6392521.png',
      description: 'Cleaning brushes and accessories for medical equipment maintenance.'
    },
    {
      id: 7,
      name: 'Medical Furniture',
      icon: 'https://cdn-icons-png.flaticon.com/128/3176/3176371.png',
      description: 'Clinical-grade furniture for examination rooms, wards, and treatment areas.'
    },
    {
      id: 8,
      name: 'Personal Protective Equipment',
      icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
      description: 'Gloves, masks, shields, and other personal protection essentials.'
    },
    {
      id: 9,
      name: 'Positioning Devices',
      icon: 'https://cdn-icons-png.flaticon.com/128/1820/1820062.png',
      description: 'Supports and positioning aids for patient comfort and clinical procedures.'
    }
  ]

  const productCategories = [
    { 
      id: 3, 
      groupId: 3,
      name: 'Protective Wear', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2913/2913862.png',
      images: [
        'https://images.unsplash.com/photo-1584466977773-352b5c8c9b17?q=80&w=800',
        'https://images.unsplash.com/photo-1588774069241-bf1ce6f08c08?q=80&w=800'
      ],
      description: 'Reliable protective wear to ensure safety in clinical environments.'
    },
    { 
      id: 4, 
      groupId: 2,
      name: 'Instruments', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2874/2874795.png',
      images: [
        'https://images.unsplash.com/photo-1612535986657-0ef9a3d9c91f?q=80&w=800',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800'
      ],
      description: 'Precision instruments for medical professionals.'
    },
    { 
      id: 5, 
      groupId: 2,
      name: 'Furniture', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2350/2350908.png',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
        'https://images.unsplash.com/photo-1598300055129-90a6221b64e8?q=80&w=800'
      ],
      description: 'Durable and ergonomic medical furniture for clinics and hospitals.'
    },
    { 
      id: 6, 
      groupId: 1,
      name: 'Disposable Tracheostomy Tube', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Disposable tracheostomy tubes for airway management.'
    },
    { 
      id: 7, 
      groupId: 1,
      name: 'Breathing System Filter', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1584823539309-c6e1e33d0850?q=80&w=800',
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800'
      ],
      description: 'High-quality breathing system filters including HMEF and BVF.'
    },
    { 
      id: 8, 
      groupId: 1,
      name: 'Double Lumen Endobronchial', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Double lumen endobronchial tubes for advanced airway management.'
    },
    { 
      id: 9, 
      groupId: 1,
      name: 'Endotracheal Tube', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Comprehensive range of endotracheal tubes for various intubation needs.'
    },
    { 
      id: 10, 
      groupId: 1,
      name: 'Endobronchial Blocker Tube', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Endobronchial blocker tubes for lung isolation procedures.'
    },
    { 
      id: 11, 
      groupId: 1,
      name: 'Laryngeal Mask', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Laryngeal masks for supraglottic airway management.'
    },
    { 
      id: 12, 
      groupId: 9,
      name: 'Head and Neck Pads', 
      icon: 'https://cdn-icons-png.flaticon.com/128/3204/3204234.png',
      images: [
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800',
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800'
      ],
      description: 'Positioning pads for head and neck support across surgical and imaging procedures.'
    }
  ]
  
  const initialProducts = [
    { 
      id: 1, 
      name: 'Disposable CPAP System', 
      groupId: 1, 
      category: null, 
      price: 49.99, 
      image: '/public/cpap.png',
      pageId: 'disposable-cpap-system'
    },
    { 
      id: 2, 
      name: 'Disposable Gloves (100 pcs)', 
      groupId: 1, 
      category: null, 
      price: 14.99, 
      image: 'https://images.unsplash.com/photo-1588776814546-ec3bdf6d9b1d?q=80&w=800',
      pageId: 'disposable-gloves'
    },
    { 
      id: 3, 
      name: 'Surgical Mask (50 pcs)', 
      category: 'Protective Wear', 
      price: 9.99, 
      image: 'https://images.unsplash.com/photo-1584466977773-352b5c8c9b17?q=80&w=800',
      pageId: 'surgical-mask'
    },
    { 
      id: 4, 
      name: 'CPAP Breathing Circuit (Single Use)', 
      groupId: 1, 
      category: null, 
      price: 39.95, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'cpap-breathing-circuit'
    },
    { 
      id: 5, 
      name: 'CPAP Humidifier Chamber Kit', 
      groupId: 1, 
      category: null, 
      price: 24.5, 
      image: 'https://images.unsplash.com/photo-1580281780551-79626c0ed254?q=80&w=800',
      pageId: 'cpap-humidifier-chamber'
    },
    { 
      id: 6, 
      name: 'Disposable CPAP Nasal Mask', 
      groupId: 1, 
      category: null, 
      price: 34.0, 
      image: 'https://images.unsplash.com/photo-1580281658627-73de2fc1089d?q=80&w=800',
      pageId: 'cpap-nasal-mask'
    },
    { 
      id: 7, 
      name: 'CPAP Airflow Tubing (Set of 5)', 
      groupId: 1, 
      category: null, 
      price: 29.75, 
      image: 'https://images.unsplash.com/photo-1550831109-1553da8c8464?q=80&w=800',
      pageId: 'cpap-airflow-tubing'
    },
    { 
      id: 8, 
      name: 'CPAP Disposable Filter Pack', 
      groupId: 1, 
      category: null, 
      price: 18.9, 
      image: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=800',
      pageId: 'cpap-disposable-filter-pack'
    },
    { 
      id: 9, 
      name: 'Reusable CPR Resuscitation System', 
      groupId: 1, 
      category: null, 
      price: 299.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'reusable-cpr-resuscitation-system'
    },
    { 
      id: 10, 
      name: 'Infant T-Piece Resuscitator', 
      groupId: 1, 
      category: null, 
      price: 199.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'infant-t-piece-resuscitator'
    },
    { 
      id: 11, 
      name: 'Disposable Manometer', 
      groupId: 1, 
      category: null, 
      price: 49.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'disposable-manometer'
    },
    { 
      id: 12, 
      name: 'Laryngoscopes', 
      groupId: 1, 
      category: null, 
      price: 199.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'laryngoscopes'
    },
    { 
      id: 13, 
      name: 'UE Scope© Video Laryngoscope (VL300 Series)', 
      groupId: 1, 
      category: null, 
      price: 599.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'ue-scope-video-laryngoscope-vl300'
    },
    { 
      id: 17, 
      name: 'Asu-200 Battery and Rechargeable Aspirator', 
      groupId: 1, 
      category: null, 
      price: 399.99, 
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800',
      pageId: 'asu-200-rechargeable-aspirator'
    },
    { 
      id: 18, 
      name: 'Breathing Circuits', 
      groupId: 1, 
      category: null, 
      price: 89.99, 
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
      pageId: 'breathing-circuits'
    },
    { 
      id: 19, 
      name: 'Heat And Moisture Exchanger Filter (HMEF)', 
      category: 'Breathing System Filter', 
      price: 15.99, 
      image: 'https://images.unsplash.com/photo-1584823539309-c6e1e33d0850?q=80&w=800',
      pageId: 'hmef-filter'
    },
    { 
      id: 20, 
      name: 'Bacterial Virus Filter (BVF)', 
      category: 'Breathing System Filter', 
      price: 18.99, 
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800',
      pageId: 'bvf-filter'
    },
    { 
      id: 21, 
      name: 'Catheter Mount', 
      groupId: 1, 
      category: null, 
      price: 29.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'catheter-mount'
    },
    { 
      id: 22, 
      name: 'Disposable Air Cushion Face Mask', 
      groupId: 1, 
      category: null, 
      price: 24.99, 
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800',
      pageId: 'disposable-air-cushion-face-mask'
    },
    { 
      id: 14, 
      name: 'DISPOSABLE STANDARD ROTA-TRACH™ TRACHEOSTOMY TUBE', 
      category: 'Disposable Tracheostomy Tube', 
      price: 89.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'disposable-standard-rota-trach-tracheostomy-tube'
    },
    { 
      id: 15, 
      name: 'Disposable Inner Cannula Rota-Trach™ Tracheostomy Tube', 
      category: 'Disposable Tracheostomy Tube', 
      price: 99.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'disposable-inner-cannula-rota-trach-tracheostomy-tube'
    },
    { 
      id: 16, 
      name: 'Disposable Pediatric Rota-Trach™ Tracheostomy Tube', 
      category: 'Disposable Tracheostomy Tube', 
      price: 79.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'disposable-pediatric-rota-trach-tracheostomy-tube'
    },
    { 
      id: 23, 
      name: 'PVC Double Lumen Endobronchial Tube', 
      category: 'Double Lumen Endobronchial',
      price: 129.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'pvc-double-lumen-endobronchial-tube'
    },
    { 
      id: 24, 
      name: 'Silicone Double Lumen Endobronchial Tube', 
      category: 'Double Lumen Endobronchial',
      price: 159.99, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'silicone-double-lumen-endobronchial-tube'
    },
    { 
      id: 25, 
      name: 'PVC Nasal Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 29.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'pvc-nasal-endotracheal-tube'
    },
    { 
      id: 26, 
      name: 'PVC Oral Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 29.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'pvc-oral-endotracheal-tube'
    },
    { 
      id: 27, 
      name: 'PVC Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 27.99, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'pvc-endotracheal-tube'
    },
    { 
      id: 28, 
      name: 'PVC Wire Reinforced Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 39.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'pvc-wire-reinforced-endotracheal-tube'
    },
    { 
      id: 29, 
      name: 'Endotracheal Tube with Evacuation Lumen', 
      category: 'Endotracheal Tube',
      price: 44.99, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'endotracheal-tube-evacuation-lumen'
    },
    { 
      id: 30, 
      name: 'Bite Block Silicone Reinforced Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 54.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'bite-block-silicone-reinforced-endotracheal-tube'
    },
    { 
      id: 31, 
      name: 'Silicone Reinforced Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 49.99, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'silicone-reinforced-endotracheal-tube'
    },
    { 
      id: 32, 
      name: 'Auto-inflation Endobronchial Blocker Tube', 
      category: 'Endobronchial Blocker Tube',
      price: 189.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'auto-inflation-endobronchial-blocker-tube'
    },
    { 
      id: 33, 
      name: 'Endobronchial Blocker Tube (Without Auto-inflation)', 
      category: 'Endobronchial Blocker Tube',
      price: 149.99, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'endobronchial-blocker-tube-without-auto-inflation'
    },
    { 
      id: 34, 
      name: 'Intubating Stylet', 
      groupId: 1,
      category: null,
      price: 19.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'intubating-stylet'
    },
    { 
      id: 35, 
      name: 'One Way Silicone Laryngeal Mask', 
      category: 'Laryngeal Mask',
      price: 29.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'one-way-silicone-laryngeal-mask'
    },
    { 
      id: 36, 
      name: 'One Way Steel Reinforced Laryngeal Mask', 
      category: 'Laryngeal Mask',
      price: 39.99, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'one-way-steel-reinforced-laryngeal-mask'
    },
    { 
      id: 37, 
      name: 'Nasopharyngeal Airway', 
      groupId: 1,
      category: null,
      price: 9.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'nasopharyngeal-airway'
    },
    { 
      id: 38, 
      name: 'Oropharyngeal Airway', 
      groupId: 1,
      category: null,
      price: 7.99, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'oropharyngeal-airway'
    },
    { 
      id: 39, 
      name: 'Tracheal Tubes Holder', 
      groupId: 1,
      category: null,
      price: 12.99, 
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'tracheal-tubes-holder'
    },
    { 
      id: 40, 
      name: 'Disposable Tracheal Tube Kit', 
      groupId: 1,
      category: null,
      price: 89.99, 
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'disposable-tracheal-tube-kit'
    },
    {
      id: 41,
      name: 'IOB Forced-Air Warming System',
      groupId: 4,
      category: null,
      price: 1499.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/iob-removebg-preview-1_orig.png',
      pageId: 'iob-forced-air-warming-system'
    },
    {
      id: 42,
      name: 'C-Bona Closed Suction Systems (Adult)',
      groupId: 4,
      category: null,
      price: 49.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/c-bona-removebg-preview_orig.png', 
      pageId: 'c-bona-closed-suction-systems'
    },
    {
      id: 43,
      name: 'Pressure Transducer',
      groupId: 4,
      category: null,
      price: 129.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/trans-1_orig.jpg',
      pageId: 'pressure-transducer'
    },
    {
      id: 44,
      name: 'Central Venous Catheter',
      groupId: 4,
      category: null,
      price: 199.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/flow-13_orig.jpg',
      pageId: 'central-venous-catheter'
    },
    {
      id: 45,
      name: 'Easydrop Flow Regulator',
      groupId: 4,
      category: null,
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800', // Placeholder as specific image wasn't in snippet
      pageId: 'easydrop-flow-regulator'
    },
    {
      id: 46,
      name: 'Moistened Shampoo Cap',
      groupId: 4,
      category: null,
      price: 9.99, 
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/myco-cap-2-orig-removebg-preview.png?1671679136',
      pageId: 'moistened-shampoo-cap'
    },
    {
      id: 47,
      name: 'Wound and Skin Wash Gloves',
      groupId: 4,
      category: null,
      price: 14.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/editor/whatsapp-image-2021-09-27-at-1-49-18-pm-removebg-preview.png?1646269010',
      pageId: 'wound-and-skin-wash-gloves'
    },
    {
      id: 48,
      name: 'MEDCAPTAIN Infusion Pump (SYS-6010)',
      groupId: 4,
      category: null,
      price: 1299.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/infusion-pump-removebg-preview.png?1668649327',
      pageId: 'medcaptain-infusion-pump'
    },
    {
      id: 49,
      name: 'MEDCAPTAIN Syringe Pump (SYS-50)',
      groupId: 4,
      category: null,
      price: 1199.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/syringe-pump-removebg-preview_orig.png',
      pageId: 'medcaptain-syringe-pump'
    },
    {
      id: 50,
      name: 'Disposable Emergency Suture Pack',
      groupId: 5,
      category: null,
      price: 89.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/403154_2_orig.png',
      pageId: 'disposable-emergency-suture-pack'
    },
    {
      id: 51,
      name: 'Disposable Circumcision Pack',
      groupId: 5,
      category: null,
      price: 119.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/editor/7475439-1.png?1489315151',
      pageId: 'disposable-circumcision-pack'
    },
    {
      id: 52,
      name: 'Disposable Pre-Epidural Set',
      groupId: 5,
      category: null,
      price: 89.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/pre-epidural-sets_orig.png',
      pageId: 'disposable-pre-epidural-set'
    },
    {
      id: 53,
      name: 'Disposable / Sterile Basic Pack',
      groupId: 5,
      category: null,
      price: 59.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/3826642_orig.jpg',
      pageId: 'disposable-basic-pack'
    },
    {
      id: 54,
      name: 'Cannula Cleaning Brushes',
      groupId: 6,
      category: null,
      price: 24.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/cannula-cleaning-brushes-removebg-preview_orig.png',
      pageId: 'cannula-cleaning-brushes'
    },
    {
      id: 55,
      name: 'Tracheal Tube Brushes',
      groupId: 6,
      category: null,
      price: 29.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/untitled-4-orig-removebg-preview.png?1671672497',
      pageId: 'tracheal-tube-brushes'
    },
    {
      id: 56,
      name: 'Instrument Cleaning Brushes',
      groupId: 6,
      category: null,
      price: 34.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/untitled_5.png?1642672384',
      pageId: 'instrument-cleaning-brushes'
    },
    {
      id: 57,
      name: 'Suction Tube Cleaning Brushes (Baron & Frazier)',
      groupId: 6,
      category: null,
      price: 32.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/screenshot-2022-12-22-091258-removebg-preview_orig.png',
      pageId: 'suction-tube-cleaning-brushes'
    },
    {
      id: 58,
      name: 'Cannula Instrument (Pipe) Cleaners',
      groupId: 6,
      category: null,
      price: 27.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/untitled-17-removebg-preview.png?1671671380',
      pageId: 'cannula-instrument-pipe-cleaners'
    },
    {
      id: 59,
      name: 'Double End Valve Brushes',
      groupId: 6,
      category: null,
      price: 24.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/untitled_19_orig.png',
      pageId: 'double-end-valve-brushes'
    },
    {
      id: 60,
      name: 'Surgical Scrub Brushes & Dispenser',
      groupId: 6,
      category: null,
      price: 49.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/untitled_1_orig.png',
      pageId: 'surgical-scrub-brushes-dispenser'
    },
    {
      id: 61,
      name: 'Large Instrument Cleaning Brush',
      groupId: 6,
      category: null,
      price: 34.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/untitled-22-orig-removebg-preview_orig.png',
      pageId: 'large-instrument-cleaning-brush'
    },
    {
      id: 62,
      name: 'Medical Bed / Patient Transport Trolley',
      groupId: 7,
      category: null,
      price: 2999.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/screenshot-948.png?1643265275',
      pageId: 'medical-bed-patient-transport-trolley'
    },
    {
      id: 63,
      name: 'Hospital Cart',
      groupId: 7,
      category: null,
      price: 899.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/screenshot-960.png?1643266642',
      pageId: 'hospital-cart'
    },
    {
      id: 64,
      name: 'Hospital Trolleys',
      groupId: 7,
      category: null,
      price: 799.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/editor/screenshot-969.png?1724999947',
      pageId: 'hospital-trolleys'
    },
    {
      id: 65,
      name: 'Patient Room Items',
      groupId: 7,
      category: null,
      price: 499.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/7_3.png?1643273106',
      pageId: 'patient-room-items'
    },
    {
      id: 66,
      name: 'Examination Room Items',
      groupId: 7,
      category: null,
      price: 1299.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/screenshot-995.png?1643274041',
      pageId: 'examination-room-items'
    },
    {
      id: 67,
      name: 'Sleeper / Rehab / Rocking / Reclining Chair',
      groupId: 7,
      category: null,
      price: 699.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/screenshot-977_1.png?1643274608',
      pageId: 'sleeper-rehab-rocking-reclining-chair'
    },
    {
      id: 68,
      name: 'Hospital Curve Curtain Tracking System',
      groupId: 7,
      category: null,
      price: 299.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/hospital-curve-curtain-tracking-system.png?1730000000',
      pageId: 'hospital-curve-curtain-tracking-system'
    },
    {
      id: 69,
      name: 'Janitor Room / CSSD Furniture',
      groupId: 7,
      category: null,
      price: 399.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/t1.jpg?1643275704',
      pageId: 'janitor-room-cssd-furniture'
    },
    {
      id: 70,
      name: '3-Ply Surgical Face Mask',
      groupId: 8,
      category: null,
      price: 9.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/face-mask-circle-cropped_orig.png',
      pageId: '3ply-surgical-face-mask'
    },
    {
      id: 71,
      name: 'Medical Protective Face Shield',
      groupId: 8,
      category: null,
      price: 12.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/image-4.png?1671607201',
      pageId: 'medical-protective-face-shield'
    },
    {
      id: 72,
      name: 'Infrared Thermometer',
      groupId: 8,
      category: null,
      price: 59.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/c9043edf9ce9449f41d692256ed8e471-removebg-preview_orig.png',
      pageId: 'infrared-thermometer'
    },
    {
      id: 73,
      name: 'Non-Sterile Coverall',
      groupId: 8,
      category: null,
      price: 24.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/image-5-removebg-preview_orig.png',
      pageId: 'non-sterile-coverall'
    },
    {
      id: 74,
      name: 'Sterile Coverall',
      groupId: 8,
      category: null,
      price: 29.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/capture-1-orig-removebg-preview_orig.png',
      pageId: 'sterile-coverall'
    },
    {
      id: 75,
      name: 'Medical Protective Hood Cover',
      groupId: 8,
      category: null,
      price: 7.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/62be04410ebed283f7472e69b24d5f6a-orig-removebg-preview_orig.png',
      pageId: 'medical-protective-hood-cover'
    },
    {
      id: 76,
      name: 'Circumcision Underwear',
      groupId: 8,
      category: null,
      price: 14.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/whatsapp-image-2024-01-26-at-11-36-07-am-removebg-preview_orig.png',
      pageId: 'circumcision-underwear'
    },
    {
      id: 77,
      name: 'Medical Protective Boots Cover',
      groupId: 8,
      category: null,
      price: 9.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/2faf4507e7abc8ccee5811ab63302ba6.jpeg?1645173719',
      pageId: 'boots-cover'
    },
    {
      id: 78,
      name: 'Isolation Gown',
      groupId: 8,
      category: null,
      price: 19.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/20489ed2011cf37614faf07f292d6347-removebg-preview_orig.png',
      pageId: 'isolation-gown'
    },
    {
      id: 79,
      name: 'CPE Apron Gown (Thumb Loop)',
      groupId: 8,
      category: null,
      price: 6.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/image-8-removebg-preview_orig.png',
      pageId: 'cpe-apron-gown'
    },
    {
      id: 80,
      name: 'Disposable Plastic Apron (Sleeveless)',
      groupId: 8,
      category: null,
      price: 4.99,
      image: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/plastic-apron.png?1645177848',
      pageId: 'disposable-plastic-apron'
    },
    {
      id: 81,
      name: 'Prostrate Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'prostrate-head-pads'
    },
    {
      id: 82,
      name: 'Contoured Supine Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 134.99,
      image: 'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800',
      pageId: 'contoured-supine-head-pads'
    },
    {
      id: 83,
      name: 'Donut Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800',
      pageId: 'donut-head-pads'
    },
    {
      id: 84,
      name: 'Ophthalmic Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 139.99,
      image: 'https://images.unsplash.com/photo-1584823539309-c6e1e33d0850?q=80&w=800',
      pageId: 'ophthalmic-head-pads'
    },
    {
      id: 85,
      name: 'Horseshoe Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 124.99,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
      pageId: 'horseshoe-head-pads'
    },
    {
      id: 86,
      name: 'Flat Supine Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1580281658627-73de2fc1089d?q=80&w=800',
      pageId: 'flat-supine-head-pads'
    },
    {
      id: 87,
      name: 'Bowl Shaped Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1584823539309-c6e1e33d0850?q=80&w=800',
      pageId: 'bowl-shaped-head-pads'
    },
    {
      id: 88,
      name: 'Thyroid Gland Positioning Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 154.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800',
      pageId: 'thyroid-gland-positioning-pads'
    },
    {
      id: 89,
      name: 'Bowl Shaped Horseshoe Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      pageId: 'bowl-shaped-horseshoe-head-pads'
    },
    {
      id: 90,
      name: 'Donut Head Pads with Cissoid',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 144.99,
      image: 'https://images.unsplash.com/photo-1580281780551-79626c0ed254?q=80&w=800',
      pageId: 'donut-head-pads-with-cissoid'
    }
  ]
  
  export default {
    productGroups,
    productCategories,
    initialProducts
  }
