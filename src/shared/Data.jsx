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
    },
    {
      id: 10,
      name: 'Memory Foam Positioners',
      icon: 'https://cdn-icons-png.flaticon.com/128/2910/2910768.png',
      description: 'Memory foam-based head, body, limb and table positioners for pressure redistribution and patient comfort.'
    },
    {
      id: 11,
      name: 'Portable Breathing Oxygen Inhaler',
      icon: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/u4kvox2b1621523622-1000x1000_orig.jpeg',
      description:
        'AWELD portable oxygen inhaler (600 ml) with >99.5% oxygen purity, built for travel, hiking and emergency relief and ready for a two-year storage shelf life.'
    },
    {
      id: 12,
      name: 'Sterilization',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      description: 'Sterilization equipment and supplies for ensuring medical instruments and equipment are properly sanitized and safe for use.'
    },
    {
      id: 13,
      name: 'Disposable',
      icon: 'https://cdn-icons-png.flaticon.com/128/992/992651.png',
      description: 'Single-use disposable medical products and supplies for hygiene and infection control.'
    },
    {
      id: 14,
      name: 'Circumcision/Sunat',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      description: 'Medical supplies and equipment for circumcision procedures and related care.'
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
    },
    { 
      id: 13, 
      groupId: 9,
      name: 'Arm and Shoulder Pads', 
      icon: 'https://cdn-icons-png.flaticon.com/128/1820/1820040.png',
      images: [
        'https://images.unsplash.com/photo-1584466977773-352b5c8c9b17?q=80&w=800',
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800'
      ],
      description: 'Positioning pads that protect and support the arm, elbow, wrist and shoulder during procedures.'
    },
    { 
      id: 14, 
      groupId: 9,
      name: 'Chest and Body Pads', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966456.png',
      images: [
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800',
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800'
      ],
      description: 'Pads that support and protect the chest, hips and body in lateral, prone and supine procedures.'
    },
    { 
      id: 15, 
      groupId: 9,
      name: 'Lower Limb Pads', 
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966456.png',
      images: [
        'https://images.unsplash.com/photo-1584466977773-352b5c8c9b17?q=80&w=800',
        'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800'
      ],
      description: 'Positioning pads that support and protect the lower limbs, heels and tunnelled extremities during surgery.'
    },
    { 
      id: 16, 
      groupId: 10,
      name: 'Memory Head and Neck Pads', 
      icon: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/foam-positioner-removebg-preview_orig.png',
      images: [
        'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/foam-positioner-removebg-preview_orig.png'
      ],
      description: 'Memory foam head and neck positioners for supine, prone and lateral procedures.'
    },
    { 
      id: 17, 
      groupId: 10,
      name: 'Memory Chest and Body Pads', 
      icon: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/prostate-pads-removebg-preview_orig.png',
      images: [
        'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/prostate-pads-removebg-preview_orig.png'
      ],
      description: 'Memory foam chest and body pads that help redistribute pressure and support the torso in prone, supine and lateral procedures.'
    }
    ,
    {
      id: 18,
      groupId: 10,
      name: 'Universal Square Pads',
      icon: 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/universal-square-pads-1-removebg-preview_orig.png',
      images: [
        'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/universal-square-pads-1-removebg-preview_orig.png',
        'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/pillow-shaped-pads-1-removebg-preview_orig.png'
      ],
      description: 'Universal memory foam pads including square and pillow-shaped options for versatile positioning support and pressure redistribution.'
    },
    {
      id: 19,
      groupId: 10,
      name: 'Memory Lower Limb Pads',
      icon: 'memory_lower_limb_pads.png',
      images: [
        'http://mycomedic.com.my/uploads/9/7/1/1/9711883/lower-limb-protector-pads-1-removebg-preview_orig.png',
        'http://mycomedic.com.my/uploads/9/7/1/1/9711883/heel-pads-1-removebg-preview_orig.png'
      ],
      description: 'Memory foam lower-limb supports including protector pads, heel pads, and tunnel pads for pressure redistribution and stable positioning.'
    },
    {
      id: 20,
      groupId: 12,
      name: 'Disinfection Tanks',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Disinfection tanks for sterilizing medical instruments and equipment.'
    },
    {
      id: 21,
      groupId: 12,
      name: 'Plastic Holloware',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Plastic holloware containers and trays for sterilization and storage of medical instruments.'
    },
    {
      id: 22,
      groupId: 12,
      name: 'Stainless Steel Dins',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Stainless steel DIN containers for sterilization and organization of surgical instruments.'
    },
    {
      id: 23,
      groupId: 12,
      name: 'Instrument Protectors',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Protective covers and cases for medical instruments during sterilization and storage.'
    },
    {
      id: 24,
      groupId: 12,
      name: 'Surgical Instrument Trays',
      icon: 'https://cdn-icons-png.flaticon.com/128/2966/2966327.png',
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
        'https://images.unsplash.com/photo-1580281657521-9386d8465a5e?q=80&w=800'
      ],
      description: 'Sterilization trays designed for organizing and sterilizing surgical instruments.'
    }
  ]
  
  const initialProducts = [
    { 
      id: 1, 
      name: 'Disposable CPAP System', 
      groupId: 1, 
      category: null, 
      price: 49.99, 
      image: '/cpap.png',
      pageId: 'disposable-cpap-system'
    },
    { 
      id: 3, 
      name: 'Surgical Mask (50 pcs)', 
      category: 'Protective Wear', 
      price: 9.99, 
      salePrice: 7.99,
      image: '/surgical_mask.png',
      images: [
        'https://images.unsplash.com/photo-1584466977773-352b5c8c9b17?q=80&w=800',
        'https://images.unsplash.com/photo-1588774069241-bf1ce6f08c08?q=80&w=800'
      ],
      variants: {
        colors: [
          { name: 'Blue', value: 'blue', hex: '#0066CC' },
          { name: 'White', value: 'white', hex: '#FFFFFF' }
        ],
        sizes: [
          { name: 'Standard', value: 'standard' },
          { name: 'Large', value: 'large' }
        ]
      },
      stock: 8,
      description: '3-ply surgical face masks designed for medical professionals. These masks provide excellent filtration and breathability. Features include: 3-layer protection, adjustable nose bridge, and comfortable ear loops. Suitable for clinical and surgical environments.',
      specifications: {
        'Layers': '3-ply',
        'Filtration': 'BFE ≥ 95%',
        'Material': 'Non-woven fabric',
        'Certification': 'CE, FDA approved'
      },
      articleCode: 'SM-50-BL',
      pageId: 'surgical-mask'
    },
    
    
    { 
      id: 8, 
      name: 'Disposable CPR Resuscitation System', 
      groupId: 1, 
      category: null, 
      price: 18.9, 
      image: '/disposable_cpr_resuscitation_system.png',
      pageId: 'disposable-cpr-resuscitation-system',
      description: `The Disposable CPR Resuscitation System features self-inflating bags that provide reliable positive pressure ventilation for emergency respiratory support.

**Key Features:**
• Self-inflating design – automatically fills after compression, pulling oxygen or air into the bag
• Always inflated – remains ready for immediate use at all times
• No compressed gas required – can deliver positive pressure ventilation without a compressed gas source
• High oxygen delivery – with oxygen reservoir attachment, delivers 90% to 100% oxygen concentration
• Cost-effective solution – designed to manage healthcare costs efficiently

Mercury Medical® offers comprehensive resuscitation systems engineered for superior performance and reliability in critical care situations.`,
      youtubeUrl: 'https://youtu.be/0u7APoa3274'
    },
    { 
      id: 9, 
      name: 'Reusable CPR Resuscitation System', 
      groupId: 1, 
      category: null, 
      price: 299.99, 
      image: '/reusable_cpr_resuscitation_system.png',
      images: [
        '/reusable_cpr_resuscitation_system.png',
        '/reusable_cpr_resuscitation_system_2.png',
        '/reusable_cpr_resuscitation_system_3.png'
      ],
      pageId: 'reusable-cpr-resuscitation-system',
      description: `The Reusable CPR Resuscitation System is a full line of resuscitators manufactured with Silicone and Polysulfone material providing superior lung compliance "feel" with exceptional responsiveness.

Designed to be fully autoclavable, with the exception of certain accessories and replacement items such as the reservoir bag, oxygen tubing and accessories.

**Benefits:**
• Optional Colour-Coded Manometer, accuracy is ± 3 cm H₂O between 0 - 15cm H₂O
• Monitors both Airway and PEEP Pressure
• Fast re-expansion/high breath-per-minute capability
• Medical-grade Silicone and Polysulfone material
• Autoclavable temperature 132°C (except reservoir bag, oxygen tubing and disposable accessories)
• Optional CO₂ detector accessory
• Patient valve detaches to add Omni-Link tubing that provides greater reach capability. Ideal for neonatal and MRI needs
• Optional Exhalation Filter and MR Conditional Peep Valve accessory`
    },
    { 
      id: 10, 
      name: 'Infant T-Piece Resuscitator', 
      groupId: 1, 
      category: null, 
      price: 199.99, 
      image: '/infant_tpiece_resuscitator.png',
      pageId: 'infant-t-piece-resuscitator'
    },
    { 
      id: 11, 
      name: 'Disposable Manometer', 
      groupId: 1, 
      category: null, 
      price: 49.99, 
      image: '/disposable_manometer.png',
      pageId: 'disposable-manometer'
    },
    { 
      id: 12, 
      name: 'Laryngoscopes', 
      groupId: 1, 
      category: null, 
      price: 199.99, 
      image: '/laryngoscope.png',
      pageId: 'laryngoscopes'
    },
    { 
      id: 13, 
      name: 'UE Scope© Video Laryngoscope (VL300 Series)', 
      groupId: 1, 
      category: null, 
      price: 599.99, 
      image: '/video_laryngoscope.png',
      pageId: 'ue-scope-video-laryngoscope-vl300'
    },
    { 
      id: 17, 
      name: 'Asu-200 Battery and Rechargeable Aspirator', 
      groupId: 1, 
      category: null, 
      price: 399.99, 
      image: '/aspirator.png',
      pageId: 'asu-200-rechargeable-aspirator'
    },
    { 
      id: 18, 
      name: 'Breathing Circuits', 
      groupId: 1, 
      category: null, 
      price: 89.99, 
      image: '/breathing_circuit.png',
      pageId: 'breathing-circuits'
    },
    { 
      id: 19, 
      name: 'Heat And Moisture Exchanger Filter (HMEF)', 
      category: 'Breathing System Filter', 
      price: 15.99, 
      image: '/hmef.png',
      pageId: 'hmef-filter'
    },
    { 
      id: 20, 
      name: 'Bacterial Virus Filter (BVF)', 
      category: 'Breathing System Filter', 
      price: 18.99, 
      image: '/bacterial_virus_filter.png',
      pageId: 'bvf-filter'
    },
    { 
      id: 21, 
      name: 'Catheter Mount', 
      groupId: 1, 
      category: null, 
      price: 29.99, 
      image: '/catheter_mount.png',
      pageId: 'catheter-mount'
    },
    { 
      id: 22, 
      name: 'Disposable Air Cushion Face Mask', 
      groupId: 1, 
      category: null, 
      price: 24.99, 
      image: '/disposable_air_cushion_face_mask.png',
      pageId: 'disposable-air-cushion-face-mask'
    },
    { 
      id: 14, 
      name: 'DISPOSABLE STANDARD ROTA-TRACH™ TRACHEOSTOMY TUBE', 
      category: 'Disposable Tracheostomy Tube', 
      price: 89.99, 
      image: '/disposable_standard_rota_trach_tracheostomy_tube.png',
      pageId: 'disposable-standard-rota-trach-tracheostomy-tube'
    },
    { 
      id: 15, 
      name: 'Disposable Inner Cannula Rota-Trach™ Tracheostomy Tube', 
      category: 'Disposable Tracheostomy Tube', 
      price: 99.99, 
      image: '/disposable_inner_cannula_rota_trach_tracheostomy_tube.png',
      pageId: 'disposable-inner-cannula-rota-trach-tracheostomy-tube'
    },
    { 
      id: 16, 
      name: 'Disposable Pediatric Rota-Trach™ Tracheostomy Tube', 
      category: 'Disposable Tracheostomy Tube', 
      price: 79.99, 
      image: '/disposable_pediatric_rota_trach_tracheostomy_tube.png',
      pageId: 'disposable-pediatric-rota-trach-tracheostomy-tube'
    },
    { 
      id: 23, 
      name: 'PVC Double Lumen Endobronchial Tube', 
      category: 'Double Lumen Endobronchial',
      price: 129.99, 
      image: '/pvc_double_lumen_endobronchial_tube.png',
      pageId: 'pvc-double-lumen-endobronchial-tube'
    },
    { 
      id: 24, 
      name: 'Silicone Double Lumen Endobronchial Tube', 
      category: 'Double Lumen Endobronchial',
      price: 159.99, 
      image: '/silicone_double_lumen_endobronchial_tube.png',
      pageId: 'silicone-double-lumen-endobronchial-tube'
    },
    { 
      id: 25, 
      name: 'PVC Nasal Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 29.99, 
      image: '/pvc_nasal_endotracheal_tube.png',
      pageId: 'pvc-nasal-endotracheal-tube'
    },
    { 
      id: 26, 
      name: 'PVC Oral Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 29.99, 
      image: '/pvc_oral_endotracheal_tube.png',
      pageId: 'pvc-oral-endotracheal-tube'
    },
    { 
      id: 27, 
      name: 'PVC Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 27.99, 
      image: '/pvc_endotracheal_tube.png',
      pageId: 'pvc-endotracheal-tube'
    },
    { 
      id: 28, 
      name: 'PVC Wire Reinforced Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 39.99, 
      image: '/pvc_wire_reinforced_endotracheal_tube.png',
      pageId: 'pvc-wire-reinforced-endotracheal-tube'
    },
    { 
      id: 29, 
      name: 'Endotracheal Tube with Evacuation Lumen', 
      category: 'Endotracheal Tube',
      price: 44.99, 
      image: '/endotracheal_tube_with_evacuation_lumen.png',
      pageId: 'endotracheal-tube-evacuation-lumen'
    },
    { 
      id: 30, 
      name: 'Bite Block Silicone Reinforced Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 54.99, 
      image: '/bite_block_silicone_reinforced_endotracheal_tube.png',
      pageId: 'bite-block-silicone-reinforced-endotracheal-tube'
    },
    { 
      id: 31, 
      name: 'Silicone Reinforced Endotracheal Tube (Cuffed & Uncuffed)', 
      category: 'Endotracheal Tube',
      price: 49.99, 
      image: '/silicone_reinforced_endotracheal_tube.png',
      pageId: 'silicone-reinforced-endotracheal-tube'
    },
    { 
      id: 32, 
      name: 'Auto-inflation Endobronchial Blocker Tube', 
      category: 'Endobronchial Blocker Tube',
      price: 189.99, 
      image: '/auto_inflation_endobronchial_blocker_tube.png',
      pageId: 'auto-inflation-endobronchial-blocker-tube'
    },
    { 
      id: 33, 
      name: 'Endobronchial Blocker Tube (Without Auto-inflation)', 
      category: 'Endobronchial Blocker Tube',
      price: 149.99, 
      image: '/endobronchial_blocker_tube_without_auto_inflation.png',
      pageId: 'endobronchial-blocker-tube-without-auto-inflation'
    },
    { 
      id: 34, 
      name: 'Intubating Stylet', 
      groupId: 1,
      category: null,
      price: 19.99, 
      image: '/intubating_stylet.png',
      pageId: 'intubating-stylet'
    },
    { 
      id: 35, 
      name: 'One Way Silicone Laryngeal Mask', 
      category: 'Laryngeal Mask',
      price: 29.99, 
      image: '/one_way_silicone_laryngeal_mask.png',
      pageId: 'one-way-silicone-laryngeal-mask'
    },
    { 
      id: 36, 
      name: 'One Way Steel Reinforced Laryngeal Mask', 
      category: 'Laryngeal Mask',
      price: 39.99, 
      image: '/one_way_steel_reinforced_laryngeal_mask.png',
      pageId: 'one-way-steel-reinforced-laryngeal-mask'
    },
    { 
      id: 37, 
      name: 'Nasopharyngeal Airway', 
      groupId: 1,
      category: null,
      price: 9.99, 
      image: '/nasopharyngeal_airway.png',
      pageId: 'nasopharyngeal-airway'
    },
    { 
      id: 38, 
      name: 'Oropharyngeal Airway', 
      groupId: 1,
      category: null,
      price: 7.99, 
      image: '/oropharyngeal_airway.png',
      pageId: 'oropharyngeal-airway'
    },
    { 
      id: 39, 
      name: 'Tracheal Tubes Holder', 
      groupId: 1,
      category: null,
      price: 12.99, 
      image: '/tracheal_tubes_holder.png',
      pageId: 'tracheal-tubes-holder'
    },
    { 
      id: 40, 
      name: 'Disposable Tracheal Tube Kit', 
      groupId: 1,
      category: null,
      price: 89.99, 
      image: '/disposable_tracheal_tube_kit.png',
      pageId: 'disposable-tracheal-tube-kit'
    },
    {
      id: 41,
      name: 'IOB Forced-Air Warming System',
      groupId: 4,
      category: null,
      price: 1499.99,
      image: '/iob_forced_air_warming_system.png',
      pageId: 'iob-forced-air-warming-system'
    },
    {
      id: 42,
      name: 'C-Bona Closed Suction Systems (Adult)',
      groupId: 4,
      category: null,
      price: 49.99,
      image: '/cbona_closed_suction_adult.png', 
      pageId: 'c-bona-closed-suction-systems'
    },
    {
      id: 46,
      name: 'C-Bona Closed Suction Systems (Pediatric)',
      groupId: 4,
      category: null,
      price: 49.99,
      image: '/cbona_closed_suction_pediatric.png', 
      pageId: 'c-bona-closed-suction-systems-pediatric'
    },
    {
      id: 43,
      name: 'Pressure Transducer',
      groupId: 4,
      category: null,
      price: 129.99,
      image: '/pressure_transducer.png',
      pageId: 'pressure-transducer'
    },
    {
      id: 44,
      name: 'Central Venous Catheter',
      groupId: 4,
      category: null,
      price: 199.99,
      image: '/central_venous_catheter.png',
      pageId: 'central-venous-catheter'
    },
    {
      id: 45,
      name: 'Easydrop Flow Regulator',
      groupId: 4,
      category: null,
      price: 29.99,
      image: '/easydrop_flow_regulator.png', // Placeholder as specific image wasn't in snippet
      pageId: 'easydrop-flow-regulator'
    },
    
    {
      id: 48,
      name: 'Infusion Pump (SYS-6010)',
      groupId: 4,
      category: null,
      price: 1299.99,
      image: '/infusion_pump.png',
      pageId: 'medcaptain-infusion-pump'
    },
    {
      id: 49,
      name: 'Syringe Pump (SYS-50)',
      groupId: 4,
      category: null,
      price: 1199.99,
      image: '/syringe_pump.png',
      pageId: 'medcaptain-syringe-pump'
    },
    {
      id: 50,
      name: 'Disposable Emergency Suture Pack',
      groupId: 13,
      category: null,
      price: 89.99,
      image: '/disposable_emergency_suture_pack.png',
      pageId: 'disposable-emergency-suture-pack'
    },
    {
      id: 51,
      name: 'Disposable Circumcision Pack',
      groupId: 13,
      category: null,
      price: 119.99,
      image: '/disposable_circumcision_pack.png',
      pageId: 'disposable-circumcision-pack'
    },
    {
      id: 52,
      name: 'Disposable Pre-Epidural Set',
      groupId: 13,
      category: null,
      price: 89.99,
      image: '/disposable_preepidural_set.png',
      pageId: 'disposable-pre-epidural-set'
    },
    {
      id: 53,
      name: 'Disposable / Sterile Basic Pack',
      groupId: 13,
      category: null,
      price: 59.99,
      image: '/disposable_sterile_basic_pack.png',
      pageId: 'disposable-basic-pack'
    },
    {
      id: 54,
      name: 'Cannula Cleaning Brushes',
      groupId: 6,
      category: null,
      price: 24.99,
      image: '/cannula_cleaning_brushes.png',
      pageId: 'cannula-cleaning-brushes'
    },
    {
      id: 55,
      name: 'Tracheal Tube Brushes',
      groupId: 6,
      category: null,
      price: 29.99,
      image: '/tracheal_tube_brushes.png',
      pageId: 'tracheal-tube-brushes'
    },
    {
      id: 56,
      name: 'Instrument Cleaning Brushes',
      groupId: 6,
      category: null,
      price: 34.99,
      image: '/stainless_bristles.png',
      images: [
        '/stainless_bristles.png',
        '/nylon_bristles.png',
        '/double_ended.png',
        '/double_tapered.png'
      ],
      pageId: 'instrument-cleaning-brushes'
    },
    {
      id: 57,
      name: 'Suction Tube Cleaning Brushes (Baron & Frazier)',
      groupId: 6,
      category: null,
      price: 32.99,
      image: '/suction_tube_cleaning_brushes.png',
      pageId: 'suction-tube-cleaning-brushes'
    },
    {
      id: 58,
      name: 'Cannula Instrument (Pipe) Cleaners',
      groupId: 6,
      category: null,
      price: 27.99,
      image: '/cannula_instrument_pipe_cleaners.png',
      pageId: 'cannula-instrument-pipe-cleaners'
    },
    {
      id: 59,
      name: 'Double End Valve Brushes',
      groupId: 6,
      category: null,
      price: 24.99,
      image: '/double_end_valve_brushes.png',
      pageId: 'double-end-valve-brushes'
    },
    {
      id: 60,
      name: 'Surgical Scrub Brushes & Dispenser',
      groupId: 6,
      category: null,
      price: 49.99,
      image: '/surgical_scrub_brushes.png',
      images: [
        '/surgical_scrub_brushes.png',
        '/surgical_scrub_brush_dispenser.png'
      ],
      pageId: 'surgical-scrub-brushes-dispenser'
    },
    
    {
      id: 61,
      name: 'Large Instrument Cleaning Brush',
      groupId: 6,
      category: null,
      price: 34.99,
      image: '/large_instrument_cleaning_brush.png',
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
      image: '/surgical_mask.png',
      pageId: '3ply-surgical-face-mask'
    },
    {
      id: 71,
      name: 'Medical Protective Face Shield',
      groupId: 8,
      category: null,
      price: 12.99,
      image: '/medical_protective_face_shield.png',
      pageId: 'medical-protective-face-shield'
    },
    {
      id: 72,
      name: 'Infrared Thermometer',
      groupId: 8,
      category: null,
      price: 59.99,
      image: '/infrared_thermometer.png',
      images: [
        '/infrared_thermometer.png',
        '/infrared_thermometer_2.png'
      ],
      pageId: 'infrared-thermometer'
    },
    {
      id: 73,
      name: 'Non-Sterile Coverall',
      groupId: 8,
      category: null,
      price: 24.99,
      image: '/non_sterile_coverall.png',
      pageId: 'non-sterile-coverall'
    },
    {
      id: 74,
      name: 'Sterile Coverall',
      groupId: 8,
      category: null,
      price: 29.99,
      image: '/sterile_coverall.png',
      pageId: 'sterile-coverall'
    },
    {
      id: 75,
      name: 'Medical Protective Hood Cover',
      groupId: 8,
      category: null,
      price: 7.99,
      image: '/hood_cover.png',
      pageId: 'medical-protective-hood-cover'
    },
    {
      id: 77,
      name: 'Medical Protective Boots Cover',
      groupId: 8,
      category: null,
      price: 9.99,
      image: '/boots_cover.png',
      pageId: 'boots-cover'
    },
    {
      id: 78,
      name: 'Isolation Gown',
      groupId: 8,
      category: null,
      price: 19.99,
      image: '/isolation_gown.png',
      pageId: 'isolation-gown'
    },
    {
      id: 79,
      name: 'CPE Apron Gown (Thumb Loop)',
      groupId: 8,
      category: null,
      price: 6.99,
      image: '/cpe_apron.png',
      pageId: 'cpe-apron-gown'
    },
    {
      id: 80,
      name: 'Disposable Plastic Apron (Sleeveless)',
      groupId: 8,
      category: null,
      price: 4.99,
      image: '/disposable_plastic_apron_sleeveless.png',
      pageId: 'disposable-plastic-apron'
    },
    {
      id: 81,
      name: 'Prostrate Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 129.99,
      image: '/prostrate_head_pad.png',
      pageId: 'prostrate-head-pads'
    },
    {
      id: 82,
      name: 'Contoured Supine Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 134.99,
      image: '/contoured_supine_head_pad.png',
      pageId: 'contoured-supine-head-pads'
    },
    {
      id: 83,
      name: 'Donut Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 119.99,
      image: '/donut_head_pad.png',
      pageId: 'donut-head-pads'
    },
    {
      id: 84,
      name: 'Ophthalmic Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 139.99,
      image: '/ophthalmic_head_pad.png',
      pageId: 'ophthalmic-head-pads'
    },
    {
      id: 85,
      name: 'Horseshoe Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 124.99,
      image: '/horseshoe_head_pad.png',
      pageId: 'horseshoe-head-pads'
    },
    {
      id: 86,
      name: 'Flat Supine Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 129.99,
      image: '/flat_supine_head_pad.png',
      pageId: 'flat-supine-head-pads'
    },
    {
      id: 87,
      name: 'Bowl Shaped Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 149.99,
      image: '/bowl_shaped_head_pad.png',
      pageId: 'bowl-shaped-head-pads'
    },
    {
      id: 88,
      name: 'Thyroid Gland Positioning Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 154.99,
      image: '/thyroid_gland.png',
      pageId: 'thyroid-gland-positioning-pads'
    },
    {
      id: 89,
      name: 'Bowl Shaped Horseshoe Head Pads',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 159.99,
      image: '/bowl_shaped_horseshoe_head_pad.png',
      pageId: 'bowl-shaped-horseshoe-head-pads'
    },
    {
      id: 90,
      name: 'Donut Head Pads with Cissoid',
      groupId: 9,
      category: 'Head and Neck Pads',
      price: 144.99,
      image: '/donut_head_pads_with_cissoid.png',
      pageId: 'donut-head-pads-with-cissoid'
    },
    {
      id: 91,
      name: 'Universal Armboard Pads',
      groupId: 9,
      category: 'Arm and Shoulder Pads',
      price: 89.99,
      image: '/universal_armboard_pad.png',
      pageId: 'universal-armboard-pads'
    },
    {
      id: 92,
      name: 'Wrist Protectors',
      groupId: 9,
      category: 'Arm and Shoulder Pads',
      price: 49.99,
      image: '/wrist_protector.png',
      pageId: 'wrist-protectors'
    },
    {
      id: 93,
      name: 'Presentation Gel Pads',
      groupId: 9,
      category: 'Arm and Shoulder Pads',
      price: 119.99,
      image: '/presentation_gel_pads.png',
      pageId: 'presentation-gel-pads'
    },
    {
      id: 94,
      name: 'Elbow Protectors',
      groupId: 9,
      category: 'Arm and Shoulder Pads',
      price: 59.99,
      image: '/elbow_protector.png',
      pageId: 'elbow-protectors'
    },
    {
      id: 95,
      name: 'Arm Shield Pads',
      groupId: 9,
      category: 'Arm and Shoulder Pads',
      price: 79.99,
      image: '/arm_shield_pads.png',
      images: [
        '/arm_shield_pads.png',
        '/arm_shield_pads_2.png',
        '/arm_shield_pads_3.png'
      ],
      pageId: 'arm-shield-pads'
    },
    {
      id: 96,
      name: 'Lateral Pads',
      groupId: 9,
      category: 'Chest and Body Pads',
      price: 139.99,
      image: '/lateral_pads.png',
      pageId: 'lateral-pads'
    },
    {
      id: 97,
      name: 'Chest-Hipbone Pads',
      groupId: 9,
      category: 'Chest and Body Pads',
      price: 149.99,
      image: '/chest_hipbone.png',
      pageId: 'chest-hipbone-pads'
    },
    {
      id: 98,
      name: 'Fracture Table Post Pads',
      groupId: 9,
      category: 'Chest and Body Pads',
      price: 159.99,
      image: '/fracture_table_post.png',
      pageId: 'fracture-table-post-pads'
    },
    {
      id: 99,
      name: 'Body Protectors',
      groupId: 9,
      category: 'Chest and Body Pads',
      price: 169.99,
      image: '/body_protectors.png',
      pageId: 'body-protectors'
    },
    {
      id: 100,
      name: 'Prostrate Pads',
      groupId: 9,
      category: 'Chest and Body Pads',
      price: 179.99,
      image: '/prostrate_pads.png',
      pageId: 'prostrate-pads'
    },
    {
      id: 101,
      name: 'Hip Pads',
      groupId: 9,
      category: 'Chest and Body Pads',
      price: 189.99,
      image: '/hip_pads.png',
      pageId: 'hip-pads'
    },
    {
      id: 102,
      name: 'Pillar Shaped Pads',
      groupId: 9,
      category: 'Chest and Body Pads',
      price: 199.99,
      image: '/pillar_shaped_pads.png',
      pageId: 'pillar-shaped-pads'
    },
    {
      id: 103,
      name: 'Dome Shaped Pads',
      groupId: 9,
      category: 'Lower Limb Pads',
      price: 79.99,
      image: '/dome_shaped_pads.png',
      pageId: 'dome-shaped-pads'
    },
    {
      id: 104,
      name: 'Heel Pads',
      groupId: 9,
      category: 'Lower Limb Pads',
      price: 59.99,
      image: '/heel_pads.png',
      pageId: 'heel-pads'
    },
    {
      id: 105,
      name: 'Ankle Protectors',
      groupId: 9,
      category: 'Lower Limb Pads',
      price: 69.99,
      image: '/ankle_protectors.png',
      pageId: 'ankle-protectors'
    },
    {
      id: 106,
      name: 'O.R. Table Pads',
      groupId: 9,
      category: 'Lower Limb Pads',
      price: 189.99,
      image: '/or_table_pad.png',
      pageId: 'or-table-pads'
    },
    {
      id: 107,
      name: 'Contoured Arm/Leg Pads',
      groupId: 9,
      category: 'Lower Limb Pads',
      price: 129.99,
      image: '/contoured_arm_leg_pads.png',
      images: [
        '/contoured_arm_leg_pads.png',
        '/contoured_arm_leg_pads_2.png'
      ],
      pageId: 'contoured-armleg-pads'
    },
    {
      id: 108,
      name: 'Universal Square Pads',
      groupId: 9,
      category: 'Lower Limb Pads',
      price: 89.99,
      image: '/universal_square_pads.png',
      pageId: 'universal-square-pads'
    },
    {
      id: 109,
      name: 'Tunnel Pads',
      groupId: 9,
      category: 'Lower Limb Pads',
      price: 149.99,
      image: '/tunnel_pads.png',
      pageId: 'tunnel-pads'
    },
    {
      id: 110,
      name: 'Pillow Shaped Pad',
      groupId: 9,
      category: 'Lower Limb Pads',
      price: 99.99,
      image: '/pillow_shaped_pad.png',
      pageId: 'pillow-shaped-pad'
    },
    {
      id: 111,
      name: 'Face-Cradle® Prone Support System',
      groupId: 9,
      category: null,
      price: 499.99,
      image: '/face_cradle_prone_support_system.png',
      images: [
        '/face_cradle_prone_support_system.png',
        '/face_cradle_prone_support_system_2.png',
        '/face_cradle_prone_support_system_3.png'
      ],
      pageId: 'face-cradle-prone-support-system'
    },
    {
      id: 112,
      name: 'Adjustable Stirrups for Lithotomy Surgeries',
      groupId: 9,
      category: null,
      price: 2999.99,
      image: '/adjustable_stirrups_for_lithotomy_surgeries.png',
      images: [
        '/adjustable_stirrups_for_lithotomy_surgeries.png',
        '/adjustable_stirrups_for_lithotomy_surgeries_2.png'
      ],
      pageId: 'adjustable-stirrups-for-lithotomy-surgeries'
    },
    {
      id: 113,
      name: 'Troop Elevation Pillow',
      groupId: 9,
      category: null,
      price: 399.99,
      image: '/troop_elevation_pillow.png',
      pageId: 'troop-elevation-pillow'
    },
    {
      id: 114,
      name: 'Memory Supine Head Pads',
      groupId: 10,
      category: 'Memory Head and Neck Pads',
      price: 149.99,
      image: '/memory_supine_head_pads.png',
      pageId: 'memory-supine-head-pads'
    },
    {
      id: 115,
      name: 'Memory Prostrate Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image: '/memory_prostrate_pads.png',
      pageId: 'memory-prostrate-pads'
    },
    {
      id: 116,
      name: 'Memory Lower Limb ProtectorPads',
      groupId: 10,
      category: null,
      price: 139.99,
      image: '/memory_lower_limb_pads.png',
      pageId: 'memory-lower-limb-pads'
    },
    {
      id: 117,
      name: 'Memory Arm Pads',
      groupId: 10,
      category: null,
      price: 129.99,
      image: '/memory_arm_pads.png',
      images: [
        '/memory_arm_pads.png',
        '/memory_arm_pads_2.png',
        '/memory_arm_pads_3.png'
      ],
      pageId: 'memory-arm-pads'
    },
    {
      id: 130,
      name: 'Memory Universal Square Pads',
      groupId: 10,
      category: 'Universal Square Pads',
      price: 159.99,
      image: 'memory_universal_square_pads.png',
      pageId: 'memory-universal-square-pads'
    },
    {
      id: 131,
      name: 'Memory Pillow Shaped Pads',
      groupId: 10,
      category: 'Universal Square Pads',
      price: 159.99,
      image: 'memory_pillow_shaped_pads.png',
      pageId: 'memory-pillow-shaped-pads'
    },
    
    {
      id: 133,
      name: 'Memory Heel Pads',
      groupId: 10,
      category: 'Memory Lower Limb Pads',
      price: 159.99,
      image: 'memory_heel_pads.png',
      pageId: 'memory-heel-pads'
    },
    {
      id: 134,
      name: 'Memory Tunnel Pads',
      groupId: 10,
      category: 'Memory Lower Limb Pads',
      price: 159.99,
      // The "memory tunnel pads" image isn't shown in the snippet; reuse a related tunnel-pad visual for now.
      image: 'memory_tunnel_pads.png',
      pageId: 'memory-tunnel-pads'
    },
    {
      id: 120,
      name: 'Memory Horseshoe Head Pads',
      groupId: 10,
      category: 'Memory Head and Neck Pads',
      price: 149.99,
      image: '/memory_horsseshoe_head_pads.png',
      pageId: 'memory-horsseshoe-head-pads'
    },
    {
      id: 121,
      name: 'Memory Donut Head Pads',
      groupId: 10,
      category: 'Memory Head and Neck Pads',
      price: 149.99,
      image: 'memory_donut_head_pads.png',
      pageId: 'memory-donut-head-pads'
    },
    {
      id: 122,
      name: 'Memory Waist Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image:
        'memory_waist_pads.png',
      pageId: 'memory-waist-pads'
    },
    {
      id: 123,
      name: 'Memory Roll Shaped Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image:
        'memory_roll_shaped_pads.png',
      pageId: 'memory-roll-shaped-pads'
    },
    {
      id: 124,
      name: 'Memory Chest-Hipbone Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image:
        'memory_chest_hipbone_pads.png',
      pageId: 'memory-chest-hipbone-pads'
    },
    {
      id: 125,
      name: 'Memory Fracture Table Post Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image:
        'memory_fracture_table_post_pads.png',
      pageId: 'memory-fracture-table-post-pads'
    },
    {
      id: 126,
      name: 'Memory Lateral Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image:
        'memory_lateral_pads.png',
      pageId: 'memory-lateral-pads'
    },
    {
      id: 127,
      name: 'Memory Dome Shaped Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image: 'memory_dome_shaped_pads.png',
      pageId: 'memory-dome-shaped-pads'
    },
    {
      id: 128,
      name: 'Memory Pillar Shaped Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image:
        'memory_pillar_shaped_pads.png',
      pageId: 'memory-pillar-shaped-pads'
    },
    {
      id: 129,
      name: 'Memory Slanting Shaped Pads',
      groupId: 10,
      category: 'Memory Chest and Body Pads',
      price: 159.99,
      image:
        'memory_slanting_shaped_pads.png',
      pageId: 'memory-slanting-shaped-pads'
    },
    {
      id: 135,
      name: 'Portable Breathing Oxygen Inhaler (600 ml)',
      groupId: 11,
      category: null,
      price: 0,
      image: '/portable_breathing_oxygen_inhaler.png',
      images: [
        '/portable_breathing_oxygen_inhaler.png',
        '/portable_breathing_oxygen_inhaler_2.png'
      ],
      pageId: 'aweld-portable-breathing-oxygen-inhaler'
    },
    {
      id: 136,
      name: 'Disinfection Tanks',
      groupId: 12,
      category: 'Disinfection Tanks',
      price: 0,
      image: '/disinfection_tank.png',
      pageId: 'disinfection-tanks'
    },
    {
      id: 137,
      name: 'Gallipots',
      groupId: 12,
      category: 'Plastic Holloware',
      price: 0,
      image: '/gallipots.png',
      pageId: 'gallipots'
    },
    {
      id: 138,
      name: 'Lotion Bowls',
      groupId: 12,
      category: 'Plastic Holloware',
      price: 0,
      image: '/lotion_bowls.png',
      pageId: 'lotion-bowls'
    },
    {
      id: 139,
      name: 'Kidney Dishes & Vomit Bowls',
      groupId: 12,
      category: 'Plastic Holloware',
      price: 0,
      image: '/kidney_dish.png',
      pageId: 'kidney-dishes-vomit-bowls'
    },
    {
      id: 140,
      name: 'Washbowl',
      groupId: 12,
      category: 'Plastic Holloware',
      price: 0,
      image: '/wash_bowl.png',
      pageId: 'washbowl'
    },
    {
      id: 141,
      name: 'Beakers & Feeder Tops',
      groupId: 12,
      category: 'Plastic Holloware',
      price: 0,
      image: '/beakers.png',
      pageId: 'beakers-feeder-tops'
    },
    {
      id: 142,
      name: 'Funnels',
      groupId: 12,
      category: 'Plastic Holloware',
      price: 0,
      image: '/funnel.png',
      pageId: 'funnels'
    },
    {
      id: 143,
      name: "St. Peter's Boat",
      groupId: 12,
      category: 'Plastic Holloware',
      price: 0,
      image: '/st_peter_boat.png',
      pageId: 'st-peters-boat'
    },
    {
      id: 144,
      name: 'Spatula',
      groupId: 12,
      category: 'Plastic Holloware',
      price: 0,
      image: '/spatula.png',
      pageId: 'spatula'
    },
    {
      id: 145,
      name: 'Instrument Tray',
      groupId: 12,
      category: 'Surgical Instrument Trays',
      price: 0,
      image: '/instrument_tray.png',
      pageId: 'instrument-tray'
    },
    {
      id: 146,
      name: 'Compartmented Instrument Tray',
      groupId: 12,
      category: 'Surgical Instrument Trays',
      price: 0,
      image: '/compartmented_instrument_tray.png',
      pageId: 'compartmented-instrument-tray'
    },
    {
      id: 147,
      name: 'Instrument Tray Lid',
      groupId: 12,
      category: 'Surgical Instrument Trays',
      price: 0,
      image: '/instrument_tray_lid.png',
      pageId: 'instrument-tray-lid'
    },
    {
      id: 148,
      name: 'Instrument Tray with Lid',
      groupId: 12,
      category: 'Surgical Instrument Trays',
      price: 0,
      image: '/instrument_tray_with_lid.png',
      pageId: 'instrument-tray-with-lid'
    },
    {
      id: 149,
      name: 'Stainless Steel Dins',
      groupId: 12,
      category: 'Stainless Steel Dins',
      price: 0,
      image: '/stainless_steel_dins.png',
      pageId: 'stainless-steel-dins'
    },
    {
      id: 150,
      name: 'Shampoo Cap',
      groupId: 13,
      category: null,
      price: 12,
      image: '/shampoo-cap.jpeg',
      pageId: 'shampoo-cap'
    },
    {
      id: 151,
      name: 'Body Wipes',
      groupId: 13,
      category: null,
      price: 10,
      image: '/body-wipes.jpeg',
      pageId: 'body-wipes'
    },
    {
      id: 152,
      name: 'Suction Toothbrush',
      groupId: 13,
      category: null,
      price: 0,
      image: '/suction_toothbrush.png',
      images: [
        '/suction_toothbrush.png',
        '/suction_toothbrush_2.png'
      ],
      pageId: 'suction-toothbrush'
    },
    {
      id: 153,
      name: 'Suction Swab',
      groupId: 13,
      category: null,
      price: 0,
      image: '/suction_swab.png',
      pageId: 'suction-swab'
    },
    {
      id: 154,
      name: 'Oral Swab Sensory Brush',
      groupId: 13,
      category: null,
      price: 0,
      image: '/oral_swab_sensory_brush.png',
      pageId: 'oral-swab-sensory-brush'
    },
    {
      id: 155,
      name: 'Sensory Brush 2.0',
      groupId: 13,
      category: null,
      price: 0,
      image: '/sensory_brush_2_0.png',
      images: [
        '/sensory_brush_2_0.png',
        '/sensory_brush_2_0_1.png'
      ],
      pageId: 'sensory-brush-2-0'
    },
    {
      id: 156,
      name: 'Sensory Brush',
      groupId: 13,
      category: null,
      price: 0,
      image: '/sensory_brush.png',
      images: [
        '/sensory_brush.png',
        '/sensory_brush_2.png',
        '/sensory_brush_3.png'
      ],
      pageId: 'sensory-brush'
    },
    {
      id: 157,
      name: 'Hypafix Adhesive Non Woven Fabric [Ready Stock]',
      groupId: 13,
      category: null,
      price: 36.00,
      image: '/hypafix_adhesive_non_woven_fabric.png',
      pageId: 'hypafix-adhesive-non-woven-fabric-ready-stock'
    },
    {
      id: 158,
      name: 'Adult & Pediatric- Tracheostomy Tube Holder / Neck Strap',
      groupId: 13,
      category: null,
      price: 9.5,
      image: '/neck-strap.jpeg',
      pageId: 'adult-pediatric-tracheostomy-tube-holder-neck-strap'
    },
    {
      id: 159,
      name: 'Seluar Sunat Khatan / Circumcision Underwear',
      groupId: 14,
      category: null,
      price: 10,
      image: '/circumcision_underwear.png',
      pageId: 'seluar-sunat-khatan-circumcision-underwear'
    },
    {
      id: 160,
      name: 'Double Ended Cleaning Brush | Nylon Bristles',
      groupId: 6,
      category: null,
      price: 19,
      image: '/double-ended-cleaning-brush.jpeg',
      pageId: 'double-ended-cleaning-brush-nylon-bristles'
    }
  ]
  
  export default {
    productGroups,
    productCategories,
    initialProducts
  }
