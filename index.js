function submitOrder() {
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const quartier = document.getElementById('quartier').value;
      const adresse = document.getElementById('adresse').value.trim();

      if (!name || !phone || !quartier || !adresse) {
        alert('⚠️ Merci de remplir tous les champs obligatoires avant de valider.');
        return;
      }
      document.getElementById('confirmation').style.display = 'block';
      document.querySelector('.btn-submit').disabled = true;
      document.querySelector('.btn-submit').textContent = '✓ Commande envoyée !';
      document.querySelector('.btn-submit').style.background = '#0D7A55';
      document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }