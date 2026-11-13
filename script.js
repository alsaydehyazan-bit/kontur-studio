/**
 * KONTUR // GERMANY — HAND-TUFTED ART & RUG STUDIO
 * Warm Minimalist Aesthetic, Clean Round Configurator Steps, Direct Social Links
 */

// Official Exact Brand Accounts
const INSTAGRAM_URL = "https://www.instagram.com/kontur.studio5?cplk=MXYxendiN3kxNjVyZA%3D%3D&utm_source=qr";
const TIKTOK_URL = "https://www.tiktok.com/@kontur.studio5?_r=1&_t=ZG-9BLmPi8mFH6";
const YOUTUBE_URL = "https://www.youtube.com/@Kontur.studio5";
const EMAIL_CONTACT = "mailto:Kontur.studio11@gmail.com";

// 4 RUGS WITH HIGH-RESOLUTION MULTI-ANGLE GALLERIES (Tracked EU Shipping)
const RUG_DATA = {
  berserk: {
    name: "BERSERK // BRAND OF SACRIFICE",
    price: "169€",
    size: "85cm × 55cm",
    badge: "DARK FANTASY 1-OF-1",
    palette: "Obsidian Black / Crimson Red",
    desc: "Homage to Kentaro Miura’s dark fantasy masterpiece. Hand-tufted with ultra-dense dual-strand crimson acrylic yarns against an obsidian backdrop. Each channel of the Brand is individually beveled with deep 45-degree V-groove carving shears to catch ambient light and create an ominous relief shadow. Bound with 40mm cotton Köperband.",
    images: [
      { url: "images/berserk.jpg", label: "MAIN VIEW (FRONTAL)" },
      { url: "images/berserk-gallery/berserk-2.jpg", label: "PERSPECTIVE & TEXTURE" },
      { url: "images/berserk-gallery/berserk-3.jpg", label: "HAND-CARVED DEEP V-GROOVE" },
      { url: "images/berserk-gallery/berserk-4.jpg", label: "40MM KÖPERBAND BACKING" }
    ]
  },
  gengar: {
    name: "GENGAR // SHADOW FORM",
    price: "229€",
    size: "1.0m × 1.0m",
    badge: "STATEMENT CENTERPIECE",
    palette: "Deep Plum / Spectral Violet / Bone White",
    desc: "A massive 1-meter circular statement piece featuring the iconic Ghost Pokémon. Sculpted with multi-tiered pile heights: the sinister grinning teeth and crimson eyes are individually hand-trimmed with precision duckbill shears. Heavyweight floor presence or striking wall tapestry. Bound with 40mm black cotton Köperband.",
    images: [
      { url: "images/gengar.jpg", label: "MAIN VIEW (1M STATEMENT)" },
      { url: "images/gengar-gallery/gengar-2.jpg", label: "ROOM & ANGLE PERSPECTIVE" },
      { url: "images/gengar-gallery/gengar-3.jpg", label: "MULTI-TIER TEETH RELIEF" },
      { url: "images/gengar-gallery/gengar-4.jpg", label: "40MM TWILL BINDING BASE" }
    ]
  },
  banksy: {
    name: "BANKSY // GIRL WITH BALLOON",
    price: "219€",
    size: "1.0m × 70cm",
    badge: "URBAN FINE ART",
    palette: "Monochrome Charcoal / Blood Red Heart",
    desc: "Textile manifestation of the world’s most celebrated street art stencil. High-contrast gradient tufting captures the silhouette’s wind-blown hair and dress, while the floating red heart balloon is tufted at an elevated pile height and sculpted for dramatic 3D isolation. Bound with 40mm cotton Köperband.",
    images: [
      { url: "images/banksy.jpg", label: "MAIN VIEW (STENCIL ART)" },
      { url: "images/banksy-gallery/banksy-2.jpg", label: "TEXTURE & PILE PROFILE" },
      { url: "images/banksy-gallery/banksy-3.jpg", label: "BALLOON SCULPTED CONTOURS" },
      { url: "images/banksy-gallery/banksy-4.jpg", label: "40MM COTTON KÖPERBAND FINISH" }
    ]
  },
  wasted: {
    name: "WASTED // STREET RUNNER",
    price: "179€",
    size: "90cm × 40cm",
    badge: "GAMING & STREETWEAR",
    palette: "Cinematic Crimson / Carbon Black",
    desc: "The timeless gaming typography immortalized in heavy tufted fiber. Styled in sharp street runner proportions (90cm x 40cm). Every serif, angled slant, and drop-shadow edge has been carved with deep micro-grooves so the bold lettering punches through in any contemporary room. Finished with 40mm cotton Köperband.",
    images: [
      { url: "images/wasted.jpg", label: "MAIN VIEW (RUNNER PROPORTIONS)" },
      { url: "images/wasted-gallery/wasted-2.jpg", label: "OBLIQUE RUNNER PERSPECTIVE" },
      { url: "images/wasted-gallery/wasted-3.jpg", label: "CARVED LETTERING RELIEF" }
    ]
  }
};

/* ==========================================================================
   GLOBAL ACTION HANDLERS (Available immediately on window)
   ========================================================================== */

// Clickable Card Handler
window.handleCardClick = function(event, rugKey) {
  // If the user clicked on an interactive button or link, do not trigger card modal
  if (event.target.closest('button') || event.target.closest('a')) {
    return;
  }
  window.openGalleryModal(rugKey);
};

// Gallery Modal Function
window.openGalleryModal = function(rugKey) {
  const data = RUG_DATA[rugKey];
  const modal = document.getElementById('galleryModal');
  if (!data || !modal) return;

  const modalRugName = document.getElementById('modalRugName');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalDimensions = document.getElementById('modalDimensions');
  const modalBadge = document.getElementById('modalBadge');
  const modalMainImg = document.getElementById('modalMainImg');
  const modalAngleBadge = document.getElementById('modalAngleBadge');
  const modalThumbsRow = document.getElementById('modalThumbsRow');
  const modalDmBtn = document.getElementById('modalDmBtn');

  if (modalRugName) modalRugName.textContent = data.name;
  if (modalPrice) modalPrice.textContent = data.price;
  if (modalDesc) modalDesc.textContent = data.desc;
  if (modalDimensions) modalDimensions.textContent = data.size;
  if (modalBadge) modalBadge.textContent = data.badge;

  // Build thumbnails row
  if (modalThumbsRow) {
    modalThumbsRow.innerHTML = '';
    data.images.forEach((imgObj, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `modal-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${imgObj.url}" alt="${imgObj.label}">`;
      thumb.onclick = () => {
        document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (modalMainImg) {
          modalMainImg.style.opacity = '0';
          setTimeout(() => {
            modalMainImg.src = imgObj.url;
            if (modalAngleBadge) modalAngleBadge.textContent = imgObj.label;
            modalMainImg.style.opacity = '1';
          }, 140);
        }
      };
      modalThumbsRow.appendChild(thumb);
    });
  }

  // Initial main photo
  if (modalMainImg && data.images[0]) {
    modalMainImg.src = data.images[0].url;
    if (modalAngleBadge) modalAngleBadge.textContent = data.images[0].label;
  }

  // Link Direct DM Button in Modal
  if (modalDmBtn) {
    modalDmBtn.onclick = () => {
      window.closeGalleryModal();
      window.openOrderModal(data.name, data.price, data.size, data.images[0].url);
    };
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeGalleryModal = function() {
  const modal = document.getElementById('galleryModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

// Instagram DM Order Modal Function
window.openOrderModal = function(name, price, size, imgSrc) {
  const dmModal = document.getElementById('dmModal');
  if (!dmModal) {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
    return;
  }

  const dmRugName = document.getElementById('dmRugName');
  const dmRugSize = document.getElementById('dmRugSize');
  const dmRugPrice = document.getElementById('dmRugPrice');
  const dmRugImg = document.getElementById('dmRugImg');
  const dmTextArea = document.getElementById('dmTextArea');

  if (dmRugName) dmRugName.textContent = name;
  if (dmRugSize) dmRugSize.textContent = size;
  if (dmRugPrice) dmRugPrice.textContent = price;
  if (dmRugImg) dmRugImg.src = imgSrc || 'images/berserk.jpg';

  const tailoredMessage = `Hey KONTUR Studio! I would like to order the "${name}" piece (${size}, ${price}). Is it currently available for tracked shipping to my address in the EU? Thank you!`;
  if (dmTextArea) dmTextArea.value = tailoredMessage;

  dmModal.classList.add('open');
  dmModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeDmModal = function() {
  const dmModal = document.getElementById('dmModal');
  if (!dmModal) return;
  dmModal.classList.remove('open');
  dmModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  const copyToast = document.getElementById('copyToast');
  if (copyToast) copyToast.style.display = 'none';
};

/* ==========================================================================
   DOM INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  // Modal Close buttons
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const galleryModal = document.getElementById('galleryModal');
  modalCloseBtn?.addEventListener('click', window.closeGalleryModal);
  galleryModal?.addEventListener('click', (e) => {
    if (e.target === galleryModal) window.closeGalleryModal();
  });

  const dmModalCloseBtn = document.getElementById('dmModalCloseBtn');
  const dmModal = document.getElementById('dmModal');
  dmModalCloseBtn?.addEventListener('click', window.closeDmModal);
  dmModal?.addEventListener('click', (e) => {
    if (e.target === dmModal) window.closeDmModal();
  });

  // Copy & Open Instagram Button
  const btnCopyAndOpenIg = document.getElementById('btnCopyAndOpenIg');
  const dmTextArea = document.getElementById('dmTextArea');
  const copyToast = document.getElementById('copyToast');

  btnCopyAndOpenIg?.addEventListener('click', async () => {
    if (dmTextArea) {
      try {
        await navigator.clipboard.writeText(dmTextArea.value);
        if (copyToast) {
          copyToast.style.display = 'block';
          copyToast.textContent = '✓ Message copied! Opening Instagram DM (@kontur.studio5)...';
        }
      } catch (err) {
        dmTextArea.select();
        document.execCommand('copy');
        if (copyToast) {
          copyToast.style.display = 'block';
          copyToast.textContent = '✓ Text copied! Opening Instagram DM...';
        }
      }
    }
    setTimeout(() => {
      window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
    }, 600);
  });

  /* ==========================================================================
     CUSTOM CONFIGURATOR: CLEAN ROUND STEPS & REALISTIC PRICING
     Scale:
     - 60cm (Mini): ~150€
     - 100cm (Statement): ~210€
     - 140cm (Large): ~280€
     - 180cm (Centerpiece): ~370€
     Locked checkboxes: Köperband & Deep V-Groove always included standard.
     ========================================================================== */
  const sizeSlider = document.getElementById('sizeSlider');
  const sizeValText = document.getElementById('sizeValText');
  const sizeTierBadge = document.getElementById('sizeTierBadge');
  const estimatedPriceEl = document.getElementById('estimatedPrice');
  const styleOptions = document.querySelectorAll('.pill-opt');
  const sizeButtons = document.querySelectorAll('.size-btn');
  const checkHanger = document.getElementById('checkHanger');
  const calcNotes = document.getElementById('calcNotes');
  const btnLaunchCustomDM = document.getElementById('btnLaunchCustomDM');
  const btnCopyCustomDraft = document.getElementById('btnCopyCustomDraft');

  const SIZE_TIERS = {
    60: {
      label: "60 cm × 60 cm",
      tier: "Mini Statement (Compact)",
      basePrice: 150
    },
    100: {
      label: "100 cm × 100 cm",
      tier: "Statement Floor Piece",
      basePrice: 210
    },
    140: {
      label: "140 cm × 140 cm",
      tier: "Large Living Room Focal",
      basePrice: 280
    },
    180: {
      label: "180 cm × 180 cm",
      tier: "Centerpiece / Grand Rug",
      basePrice: 370
    }
  };

  let currentStep = 100;
  let currentTheme = "Anime / Manga";

  function updateConfigurator() {
    const config = SIZE_TIERS[currentStep] || SIZE_TIERS[100];
    
    // Update texts with clean round integers
    if (sizeValText) sizeValText.textContent = config.label;
    if (sizeTierBadge) sizeTierBadge.textContent = config.tier;

    let finalPrice = config.basePrice;

    // Optional brass wall mounts
    if (checkHanger && checkHanger.checked) {
      finalPrice += 15;
    }

    if (estimatedPriceEl) estimatedPriceEl.textContent = finalPrice;

    // Sync slider & size buttons
    if (sizeSlider) sizeSlider.value = currentStep;
    sizeButtons.forEach(btn => {
      const stepVal = parseInt(btn.getAttribute('data-step'), 10);
      if (stepVal === currentStep) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Slider interaction (snaps cleanly to 60, 100, 140, 180)
  sizeSlider?.addEventListener('input', (e) => {
    const rawVal = parseInt(e.target.value, 10);
    // Snap to nearest tier
    const steps = [60, 100, 140, 180];
    currentStep = steps.reduce((prev, curr) => Math.abs(curr - rawVal) < Math.abs(prev - rawVal) ? curr : prev);
    updateConfigurator();
  });

  // Size buttons click
  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentStep = parseInt(btn.getAttribute('data-step'), 10) || 100;
      updateConfigurator();
    });
  });

  // Theme selector
  styleOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      styleOptions.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTheme = btn.getAttribute('data-style') || btn.textContent.trim();
      updateConfigurator();
    });
  });

  checkHanger?.addEventListener('change', updateConfigurator);

  // Initial calculation
  updateConfigurator();

  // Custom DM Action
  btnLaunchCustomDM?.addEventListener('click', () => {
    const config = SIZE_TIERS[currentStep] || SIZE_TIERS[100];
    const price = estimatedPriceEl ? estimatedPriceEl.textContent : config.basePrice;
    const notes = (calcNotes && calcNotes.value.trim()) ? calcNotes.value.trim() : "Custom design concept";
    const hanger = (checkHanger && checkHanger.checked) ? "Yes (Wall Mounts)" : "Standard floor backing";

    window.openOrderModal(
      `Custom Rug (${currentTheme})`,
      `~${price}€`,
      config.label,
      'images/berserk.jpg'
    );

    if (dmTextArea) {
      dmTextArea.value = `Hey KONTUR Studio! I would like to commission a custom hand-tufted rug.\n\n• Theme: ${currentTheme}\n• Size: ${config.label} (${config.tier})\n• Inclusions: 40mm Cotton Köperband + Deep V-Groove 3D Sculpting (Included)\n• Wall Mounts: ${hanger}\n• Estimated Quote: ~${price}€\n• Design Notes: ${notes}\n• Location: EU Shipping\n\nI will send my reference picture directly in this chat!`;
    }
  });

  // Copy Custom Draft Action
  btnCopyCustomDraft?.addEventListener('click', async () => {
    const config = SIZE_TIERS[currentStep] || SIZE_TIERS[100];
    const price = estimatedPriceEl ? estimatedPriceEl.textContent : config.basePrice;
    const notes = (calcNotes && calcNotes.value.trim()) ? calcNotes.value.trim() : "Custom design concept";

    const customText = `Hey KONTUR Studio! I would like to commission a custom hand-tufted rug.\n\n• Theme: ${currentTheme}\n• Dimensions: ${config.label}\n• Estimated Price: ~${price}€\n• Notes: ${notes}\n\nCan I send my reference artwork to check commission availability?`;

    try {
      await navigator.clipboard.writeText(customText);
      alert('✓ Custom inquiry copied! You can paste it in our Instagram DM (@kontur.studio5) or Email.');
    } catch (e) {
      prompt('Copy your custom inquiry text below:', customText);
    }
  });

  /* ==========================================================================
     CUSTOM CURSOR FOLLOWER
     ========================================================================== */
  const customCursor = document.getElementById('customCursor');
  const cursorGlow = document.getElementById('cursorGlow');

  if (customCursor && cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      customCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.16;
      glowY += (mouseY - glowY) * 0.16;
      cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateGlow);
    }
    requestAnimationFrame(animateGlow);

    const hoverables = document.querySelectorAll('a, button, input, textarea, .rug-card, .teaser-card, .faq-trigger, .pill-opt, .size-btn');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ==========================================================================
     3D TILT EFFECT ON PRODUCT CARDS
     ========================================================================== */
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach((card) => {
    const cardInner = card.querySelector('.card-inner');
    const glare = card.querySelector('.card-glare');
    if (!cardInner) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      cardInner.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;

      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      cardInner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      cardInner.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => {
        cardInner.style.transition = '';
      }, 400);
    });

    card.addEventListener('mouseenter', () => {
      cardInner.style.transition = 'none';
    });
  });

  /* ==========================================================================
     MOBILE DRAWER
     ========================================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  menuToggle?.addEventListener('click', () => {
    mobileDrawer?.classList.add('open');
    mobileDrawer?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  const closeDrawer = () => {
    mobileDrawer?.classList.remove('open');
    mobileDrawer?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  drawerClose?.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  /* ==========================================================================
     FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((other) => {
        other.classList.remove('active');
        const otherContent = other.querySelector('.faq-content');
        const otherTrigger = other.querySelector('.faq-trigger');
        if (otherContent) otherContent.style.maxHeight = null;
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isActive && content) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ==========================================================================
     KEYBOARD ESCAPE LISTENER
     ========================================================================== */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeGalleryModal();
      window.closeDmModal();
      closeDrawer();
    }
  });

  /* ==========================================================================
     HEADER SCROLL SHADOW
     ========================================================================== */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

});
