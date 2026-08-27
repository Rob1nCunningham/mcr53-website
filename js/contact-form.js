document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var fields = document.getElementById('form-fields');
  var status = document.getElementById('form-status');
  if (!form || !fields || !status) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    status.textContent = 'Sending...';
    status.classList.remove('form-status-error', 'form-status-success');

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          fields.style.display = 'none';
          form.classList.add('is-done');
          status.textContent = "Thanks — we've got your message and will be in touch soon.";
          status.classList.add('form-status-success');
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(function () {
        status.textContent = "Something went wrong sending that — please email us directly at hello@mcr53.co.uk instead.";
        status.classList.add('form-status-error');
        submitBtn.disabled = false;
      });
  });
});
