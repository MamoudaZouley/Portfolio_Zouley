// Activer le lien actif dans le menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Effet hover sur les cartes projets
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
  });
});

// Validation du formulaire
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); //empeche le chargement
  const prenom = document.getElementById('prenom').value.trim();
  const nom = document.getElementById('nom').value.trim();
   const email = document.getElementById('email').value.trim();
  const sujet = document.getElementById('sujet').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!prenom || !nom || !email || !sujet || !message) {
    e.preventDefault();
    alert('Veuillez remplir tous les champs !');
    return;
  }
 
  if (message.length < 10) {
    e.preventDefault();
    alert('Le message doit contenir au moins 10 caractères.');
    return;
  }
  if(!email.includes('@') || !email.includes('.') ){
      alert('Veuillez entrer un email valide.');
      return;
   } 
  // construction du mail
  const body = `
 Prénom: ${prenom}
 Nom: ${nom}
 Email: ${email}
 Message: ${message}`.trim();
// ouvre le client mail
const mailtoLink = `mailto:zoulahatoumamouda@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(body)}`;
window.location.href = mailtoLink;
// Message de succés
alert('Votre client mail s ouvre! Remplissez et envoyez le mail.');
// Optionnel: réintialiser
this.requestFullscreen();

});
// --- MODALE PROJETS ---
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Contenu des projets
const projects = {
  smartGov: {
    title: "smartGov",
    desc: "Plateforme de gouvernance numérique pour les administrations locales du Niger. Suivi des demandes citoyennes, gestion des services publics, interface intuitive.",
    tech: "HTML, CSS, JavaScript, Responsive Design",
    img: "image/smartGov.png"
  },
  mentor: {
    title: "Mentor'Elle Niger",
    desc: "Site de mentorat connectant jeunes femmes entrepreneures avec des mentors expérimentées. Inscription, matching, suivi des sessions.",
    tech: "HTML, CSS, JavaScript, UX/UI",
    img: "image/mentor.jpg"
  },
  center: {
    title: "Dan Gomki Electronic Center",
    desc: "c'est un centre de prestation de produits et services informatique.",
    tech: "HTML, CSS, JavaScript, E-commerce",
    img: "image/center.jpg"
  }
};

// Ouvrir la modale
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const projectId = this.getAttribute('data-project');
    const p = projects[projectId];

    modalBody.innerHTML = `
      <h3>${p.title}</h3>
      <img src="${p.img}" alt="${p.title}">
      <p><strong>Description :</strong> ${p.desc}</p>
      <p><strong>Technologies :</strong> ${p.tech}</p>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Empêche le scroll
  });
});

// Fermer la modale
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});


